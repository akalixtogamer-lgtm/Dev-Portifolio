import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  input,
} from '@angular/core';
import { Capitulo } from '../../../core/models/capitulo.model';
import { MovimentoService } from '../../../core/services/movimento.service';
import { animarCena } from '../../../shared/animations/cena.animacoes';

/**
 * UMA cena da história. O mesmo componente é usado em todas as cenas:
 * muda só o capítulo que ele recebe pelo input.
 */
@Component({
  selector: 'app-cena',
  templateUrl: './cena.html',
  host: { class: 'block' }, // o elemento <app-cena> ocupa a largura toda (ajuda o GSAP a medir a cena)
})
export class Cena {
  readonly capitulo = input.required<Capitulo>();
  readonly total = input(1);

  private readonly movimento = inject(MovimentoService);
  /** "Reduzir movimento" ligado: sem troca automática (fica só a primeira foto). */
  protected readonly reduzido = this.movimento.reduzido;

  private readonly elemento = inject<ElementRef<HTMLElement>>(ElementRef);

  constructor() {
    let desfazer: (() => void) | undefined;

    // As animações só começam depois que o HTML da cena existe na tela.
    afterNextRender(() => {
      if (!this.movimento.reduzido()) {
        desfazer = animarCena(this.elemento.nativeElement);
      }
    });

    // Quando a cena sai da tela (troca de página), as animações são desfeitas.
    inject(DestroyRef).onDestroy(() => desfazer?.());
  }
}
