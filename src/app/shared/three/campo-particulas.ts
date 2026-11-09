import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  Color,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  WebGLRenderer,
} from 'three';
import { circuito, criarSorteio, luzesDaCidade, rastrosDeDanca } from './formacoes';

const TOTAL = 2400;
const CORES = ['#7b2eff', '#7b2eff', '#7b2eff', '#ff2daa', '#ff2daa', '#00d9ff'];

/** Curva suave de 0 a 1 entre `inicio` e `fim` (fora do intervalo, fica em 0 ou 1). */
function suavizar(inicio: number, fim: number, valor: number): number {
  const t = Math.min(1, Math.max(0, (valor - inicio) / (fim - inicio)));
  return t * t * (3 - 2 * t);
}

/**
 * O fundo 3D da experiência. Classe TypeScript pura: não sabe nada de Angular.
 * Quem usa: shared/three/fundo-particulas (o componente que cria e destrói esta classe).
 */
export class CampoParticulas {
  private readonly renderer: WebGLRenderer;
  private readonly cena = new Scene();
  private readonly camera = new PerspectiveCamera(60, 1, 0.1, 100);
  private readonly geometria = new BufferGeometry();
  private readonly material: PointsMaterial;
  private readonly pontos: Points;

  private readonly cidade: Float32Array;
  private readonly danca: Float32Array;
  private readonly placa: Float32Array;
  private readonly posicoes: Float32Array;

  private alvo = 0; // progresso pedido pela rolagem (0 a 1)
  private atual = 0; // progresso desenhado (persegue o alvo com suavidade)
  private quadro = 0;
  private rodando = false;

  constructor(private readonly tela: HTMLCanvasElement) {
    this.renderer = new WebGLRenderer({ canvas: tela, alpha: true, powerPreference: 'low-power' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    this.camera.position.z = 14;

    const sorteio = criarSorteio(54767);
    this.cidade = luzesDaCidade(TOTAL, sorteio);
    this.danca = rastrosDeDanca(TOTAL, sorteio);
    this.placa = circuito(TOTAL, sorteio);
    this.posicoes = this.cidade.slice();

    const cores = new Float32Array(TOTAL * 3);
    const cor = new Color();
    for (let i = 0; i < TOTAL; i++) {
      cor.set(CORES.at(i % CORES.length) ?? '#7b2eff');
      cor.toArray(cores, i * 3);
    }

    this.geometria.setAttribute('position', new BufferAttribute(this.posicoes, 3));
    this.geometria.setAttribute('color', new BufferAttribute(cores, 3));
    this.material = new PointsMaterial({
      size: 0.07,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      depthWrite: false,
      blending: AdditiveBlending,
    });
    this.pontos = new Points(this.geometria, this.material);
    this.cena.add(this.pontos);
    this.redimensionar();
  }

  /** Recebe o progresso da rolagem (0 = início, 1 = fim da história). */
  definirProgresso(valor: number): void {
    this.alvo = valor;
  }

  /** Liga o laço de animação (um desenho por quadro, ~60 por segundo). */
  iniciar(): void {
    if (this.rodando) return;
    this.rodando = true;
    const laco = (tempo: number) => {
      if (!this.rodando) return;
      this.atual += (this.alvo - this.atual) * 0.05;
      this.desenhar(tempo);
      this.quadro = requestAnimationFrame(laco);
    };
    this.quadro = requestAnimationFrame(laco);
  }

  pausar(): void {
    this.rodando = false;
    cancelAnimationFrame(this.quadro);
  }

  /** Para "reduzir movimento": desenha um quadro parado, já na posição final. */
  desenharParado(): void {
    this.atual = this.alvo;
    this.desenhar(0);
  }

  redimensionar(): void {
    const largura = this.tela.clientWidth || window.innerWidth;
    const altura = this.tela.clientHeight || window.innerHeight;
    this.renderer.setSize(largura, altura, false);
    this.camera.aspect = largura / altura;
    this.camera.updateProjectionMatrix();
    if (!this.rodando) this.desenhar(0);
  }

  /** Libera a memória da placa de vídeo. Sem isso, cada visita à página vazaria memória. */
  destruir(): void {
    this.pausar();
    this.cena.remove(this.pontos);
    this.geometria.dispose();
    this.material.dispose();
    this.renderer.dispose();
  }

  private desenhar(tempo: number): void {
    const p = this.atual;
    const cidadeParaDanca = suavizar(0.22, 0.42, p); // entre as cenas 3 e 4
    const dancaParaCircuito = suavizar(0.74, 0.9, p); // na cena 8

    for (let i = 0; i < this.posicoes.length; i++) {
      const a = this.cidade[i] ?? 0;
      const b = this.danca[i] ?? 0;
      const c = this.placa[i] ?? 0;
      const ab = a + (b - a) * cidadeParaDanca;
      this.posicoes[i] = ab + (c - ab) * dancaParaCircuito;
    }
    this.geometria.attributes['position']!.needsUpdate = true;

    this.pontos.rotation.y = tempo * 0.00004 + p * 0.6;
    this.camera.position.z = 14 - p * 3; // a câmera se aproxima ao longo da história
    this.renderer.render(this.cena, this.camera);
  }
}
