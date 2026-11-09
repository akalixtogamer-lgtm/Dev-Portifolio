import { Component, DestroyRef, ElementRef, afterNextRender, inject } from '@angular/core';
import { MovimentoService } from '../../../core/services/movimento.service';

/**
 * Fundo do site: o mesmo cenário de programação do menu e do rodapé
 * (grade, código, circuitos, fluxograma e símbolos), fixo atrás de tudo.
 *
 * PARALLAX: cada camada anda numa velocidade diferente quando a página rola.
 * Ele aparece nos espaços entre as cenas, dando a sensação de profundidade.
 * Com "reduzir movimento" ligado o fundo fica parado.
 */
@Component({
  selector: 'app-fundo-tech',
  templateUrl: './fundo-tech.html',
  styleUrl: './fundo-tech.css',
  host: { class: 'fundo-tech', 'aria-hidden': 'true' },
})
export class FundoTech {
  private readonly elemento = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly movimento = inject(MovimentoService);

  constructor() {
    const destroy = inject(DestroyRef);

    afterNextRender(() => {
      if (this.movimento.reduzido()) return;

      let pedido = 0;
      // Escreve a rolagem numa variável CSS; o CSS multiplica pela velocidade de cada camada.
      const atualizar = () => {
        pedido = 0;
        this.elemento.style.setProperty('--rolagem', String(window.scrollY));
      };
      const aoRolar = () => {
        if (!pedido) pedido = requestAnimationFrame(atualizar);
      };

      atualizar();
      window.addEventListener('scroll', aoRolar, { passive: true });
      destroy.onDestroy(() => {
        window.removeEventListener('scroll', aoRolar);
        cancelAnimationFrame(pedido);
      });
    });
  }
}
