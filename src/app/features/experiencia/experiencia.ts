import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { MovimentoService } from '../../core/services/movimento.service';
import { NarrativaService } from '../../core/services/narrativa.service';
import { WebglService } from '../../core/services/webgl.service';
import { ScrollTrigger, gsap } from '../../shared/animations/gsap';
import { Letreiro } from '../../shared/components/letreiro/letreiro';
import { MapaRota } from '../../shared/components/mapa-rota/mapa-rota';
import { Panorama360 } from '../../shared/components/panorama-360/panorama-360';
import { RodapeCodigo } from '../../shared/components/rodape-codigo/rodape-codigo';
import { Cena } from './cena/cena';

/**
 * A página da experiência (rota "/"). Monta as nove cenas e conta para o
 * NarrativaService qual cena está na tela e quanto da página já foi rolado.
 */
@Component({
  selector: 'app-experiencia',
  imports: [Cena, Letreiro, MapaRota, Panorama360, RodapeCodigo, RouterLink],
  templateUrl: './experiencia.html',
})
export class Experiencia {
  protected readonly narrativa = inject(NarrativaService);
  private readonly elemento = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

  /** Animações ligadas? (desligadas quando o sistema pede "reduzir movimento") */
  protected readonly animar = !inject(MovimentoService).reduzido();
  /** 3D na abertura: precisa de WebGL e de animações ligadas. Sem isso, entra a foto parada. */
  protected readonly usar3d = this.animar && inject(WebglService).suportado;
  private readonly abertura = viewChild.required<ElementRef<HTMLElement>>('abertura');

  constructor() {
    afterNextRender(() => {
      // 1) Qual cena está no meio da tela? O IntersectionObserver avisa.
      const observador = new IntersectionObserver(
        (entradas) => {
          for (const entrada of entradas) {
            if (entrada.isIntersecting) {
              this.narrativa.definirAtivo(Number(entrada.target.getAttribute('data-cena')));
            }
          }
        },
        { rootMargin: '-45% 0px -45% 0px' }, // só conta a faixa central da tela
      );
      this.elemento.nativeElement
        .querySelectorAll('[data-cena]')
        .forEach((secao) => observador.observe(secao));

      // 2) Quanto já foi rolado? De 0 (topo) a 1 (fim da página).
      const aoRolar = () => {
        const maximo = document.documentElement.scrollHeight - window.innerHeight;
        this.narrativa.definirProgresso(maximo > 0 ? window.scrollY / maximo : 0);
      };
      window.addEventListener('scroll', aoRolar, { passive: true });
      aoRolar();

      // 3) Abertura estilo trailer, por TEMPO: 3 s só com o Rio girando e depois entra o título.
      if (this.animar) {
        const secao = this.abertura().nativeElement;
        const contexto = gsap.context(() => {
          gsap
            .timeline({ delay: 0.3 })
            .from('[data-trailer="apresenta"]', { autoAlpha: 0, y: -12, duration: 1 }, 0)
            .from('[data-trailer="3"]', { autoAlpha: 0, y: 40, duration: 1.2, ease: 'power3.out' }, 3);
        }, secao);
        this.destroyRef.onDestroy(() => contexto.revert());
      }

      // 4) Fontes carregadas mudam a altura dos textos: o GSAP recalcula as posições.
      document.fonts?.ready.then(() => ScrollTrigger.refresh());

      this.destroyRef.onDestroy(() => {
        observador.disconnect();
        window.removeEventListener('scroll', aoRolar);
      });
    });
  }

  /** Botão "Começar a viagem": rola até a primeira cena e leva o foco para o título dela. */
  protected comecar(evento: Event): void {
    evento.preventDefault();
    const primeira = document.getElementById(this.narrativa.capitulos[0].slug);
    primeira?.scrollIntoView({ behavior: this.animar ? 'smooth' : 'auto' });
    primeira?.querySelector<HTMLElement>('h2')?.focus({ preventScroll: true });
  }
}
