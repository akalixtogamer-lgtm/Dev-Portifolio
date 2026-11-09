import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  input,
  viewChild,
} from '@angular/core';
import {
  BackSide,
  CylinderGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  RepeatWrapping,
  SRGBColorSpace,
  Scene,
  TextureLoader,
  WebGLRenderer,
} from 'three';

/** Ângulo inicial da câmera: faz o centro da foto (o Pão de Açúcar) aparecer de frente. */
const INICIO = Math.PI / 2;

/**
 * O Rio em 360°: a foto panorâmica é "colada" por dentro de um cilindro 3D,
 * com a câmera no centro. Ele gira sozinho: uma volta completa a cada `segundosPorVolta`.
 *
 * A textura (public/cenas/00-panorama-360.webp) é a foto + a mesma foto espelhada,
 * assim as pontas se encontram sem emenda aparente.
 */
@Component({
  selector: 'app-panorama-360',
  template: `<canvas #tela class="block h-full w-full" aria-hidden="true"></canvas>`,
  host: { class: 'absolute inset-0 block' },
})
export class Panorama360 {
  /** Quanto tempo leva uma volta completa de 360°. */
  readonly segundosPorVolta = input(60);

  private readonly tela = viewChild.required<ElementRef<HTMLCanvasElement>>('tela');
  private readonly cena = new Scene();
  private renderer?: WebGLRenderer;
  private camera?: PerspectiveCamera;
  private angulo = 0; // quanto a câmera já girou (em radianos)
  private quadro = 0; // id do requestAnimationFrame em andamento
  private ultimoTempo = 0; // instante do quadro anterior (para medir o tempo entre quadros)
  private visivel = true; // o panorama está na tela?
  private observador?: IntersectionObserver;

  constructor() {
    afterNextRender(() => {
      const canvas = this.tela().nativeElement;
      this.renderer = new WebGLRenderer({ canvas, antialias: true });
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.camera = new PerspectiveCamera(55, 1, 0.1, 100);

      const textura = new TextureLoader().load('cenas/00-panorama-360.webp', () =>
        this.desenhar(),
      );
      textura.colorSpace = SRGBColorSpace;
      textura.wrapS = RepeatWrapping;
      textura.repeat.x = -1; // vista de DENTRO do cilindro: desfaz o espelhamento
      textura.anisotropy = this.renderer.capabilities.getMaxAnisotropy();

      // A textura é 4x mais larga que alta: a altura do cilindro segue essa proporção.
      const raio = 10;
      const altura = (2 * Math.PI * raio) / 4;
      const cilindro = new Mesh(
        new CylinderGeometry(raio, raio, altura, 128, 1, true),
        new MeshBasicMaterial({ map: textura, side: BackSide }),
      );
      this.cena.add(cilindro);

      this.redimensionar();
      window.addEventListener('resize', this.redimensionar);
      document.addEventListener('visibilitychange', this.aoTrocarAba);

      // Fora da tela, o giro para (economiza bateria); de volta à tela, continua.
      this.observador = new IntersectionObserver(([entrada]) => {
        this.visivel = entrada.isIntersecting;
        if (this.visivel) this.pedirQuadro();
      });
      this.observador.observe(canvas);
      this.pedirQuadro();
    });

    inject(DestroyRef).onDestroy(() => {
      cancelAnimationFrame(this.quadro);
      this.observador?.disconnect();
      window.removeEventListener('resize', this.redimensionar);
      document.removeEventListener('visibilitychange', this.aoTrocarAba);
      this.cena.traverse((objeto) => {
        if (objeto instanceof Mesh) {
          objeto.geometry.dispose();
          const material = objeto.material as MeshBasicMaterial;
          material.map?.dispose();
          material.dispose();
        }
      });
      this.renderer?.dispose();
    });
  }

  private pedirQuadro(): void {
    if (!this.quadro && this.visivel && !document.hidden) {
      this.ultimoTempo = performance.now();
      this.quadro = requestAnimationFrame(this.animar);
    }
  }

  // A cada quadro, gira proporcionalmente ao tempo que passou (mesma velocidade em qualquer tela).
  private readonly animar = (agora: number) => {
    this.quadro = 0;
    const segundos = Math.min(0.1, (agora - this.ultimoTempo) / 1000);
    this.ultimoTempo = agora;
    this.angulo += (segundos / this.segundosPorVolta()) * Math.PI * 2;
    this.desenhar();
    if (this.visivel && !document.hidden) {
      this.quadro = requestAnimationFrame(this.animar);
    }
  };

  private readonly aoTrocarAba = () => this.pedirQuadro();

  private desenhar(): void {
    if (!this.renderer || !this.camera) return;
    this.camera.rotation.set(0.06, INICIO - this.angulo, 0, 'YXZ'); // 0.06 = olha um pouco para cima (mais céu)
    this.renderer.render(this.cena, this.camera);
  }

  private readonly redimensionar = () => {
    if (!this.renderer || !this.camera) return;
    const canvas = this.tela().nativeElement;
    const largura = canvas.clientWidth || window.innerWidth;
    const alturaTela = canvas.clientHeight || window.innerHeight;
    this.renderer.setSize(largura, alturaTela, false);
    this.camera.aspect = largura / alturaTela;
    // Tela em pé (celular): abre o campo de visão para não ficar "zoom demais".
    this.camera.fov = this.camera.aspect < 1 ? 62 : 46; // menor = foto mais próxima (maior)
    this.camera.updateProjectionMatrix();
    this.desenhar();
  };
}
