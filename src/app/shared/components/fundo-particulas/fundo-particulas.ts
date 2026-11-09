import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  effect,
  inject,
  viewChild,
} from '@angular/core';
import { MovimentoService } from '../../../core/services/movimento.service';
import { NarrativaService } from '../../../core/services/narrativa.service';
import { WebglService } from '../../../core/services/webgl.service';
import { CampoParticulas } from '../../three/campo-particulas';

/**
 * Ponte entre o Angular e o Three.js: cria o CampoParticulas quando o <canvas>
 * já existe na tela e o destrói quando o componente sai da tela.
 */
@Component({
  selector: 'app-fundo-particulas',
  template: `
    @if (usar3d) {
      <canvas #tela class="fixed inset-0 -z-10 h-full w-full" aria-hidden="true"></canvas>
    } @else {
      <div class="fundo-estatico fixed inset-0 -z-10" aria-hidden="true"></div>
    }
  `,
  styles: `
    .fundo-estatico {
      background-image: radial-gradient(rgb(123 46 255 / 0.35) 1px, transparent 1px);
      background-size: 28px 28px;
    }
  `,
})
export class FundoParticulas {
  private readonly narrativa = inject(NarrativaService);
  private readonly movimento = inject(MovimentoService);
  protected readonly usar3d = inject(WebglService).suportado;

  private readonly tela = viewChild<ElementRef<HTMLCanvasElement>>('tela');
  private campo?: CampoParticulas;

  constructor() {
    // afterNextRender: roda só no navegador, DEPOIS que o <canvas> foi desenhado.
    afterNextRender(() => {
      const canvas = this.tela()?.nativeElement;
      if (!canvas) return;
      this.campo = new CampoParticulas(canvas);
      this.campo.definirProgresso(this.narrativa.progresso());
      if (this.movimento.reduzido()) {
        this.campo.desenharParado();
      } else {
        this.campo.iniciar();
      }
      window.addEventListener('resize', this.aoRedimensionar);
      document.addEventListener('visibilitychange', this.aoTrocarAba);
    });

    // effect: roda de novo sempre que um signal lido aqui dentro muda.
    effect(() => {
      const progresso = this.narrativa.progresso();
      this.campo?.definirProgresso(progresso);
      if (this.movimento.reduzido()) this.campo?.desenharParado();
    });

    inject(DestroyRef).onDestroy(() => {
      window.removeEventListener('resize', this.aoRedimensionar);
      document.removeEventListener('visibilitychange', this.aoTrocarAba);
      this.campo?.destruir();
    });
  }

  private readonly aoRedimensionar = () => this.campo?.redimensionar();

  // Aba escondida = laço parado: economiza bateria e processador.
  private readonly aoTrocarAba = () => {
    if (document.hidden || this.movimento.reduzido()) this.campo?.pausar();
    else this.campo?.iniciar();
  };
}
