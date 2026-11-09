import { Component, inject, input, output } from '@angular/core';
import { Capitulo } from '../../../core/models/capitulo.model';
import { MovimentoService } from '../../../core/services/movimento.service';
import { NarrativaService } from '../../../core/services/narrativa.service';

/**
 * O menu de capítulos, desenhado como o mapa de uma linha de ônibus.
 *   modo="trilho" → paradas na vertical, presas à direita da tela (telas grandes)
 *   modo="lista"  → lista completa com os nomes (dentro do letreiro, em qualquer tela)
 */
@Component({
  selector: 'app-mapa-rota',
  templateUrl: './mapa-rota.html',
})
export class MapaRota {
  readonly modo = input<'trilho' | 'lista'>('lista'); // input: valor que vem do componente pai
  readonly escolheu = output<Capitulo>(); // output: aviso que este componente manda para o pai

  protected readonly narrativa = inject(NarrativaService);
  private readonly movimento = inject(MovimentoService);

  /** Rola até a cena escolhida e leva o foco do teclado para o título dela. */
  protected irPara(evento: Event, capitulo: Capitulo): void {
    evento.preventDefault();
    const secao = document.getElementById(capitulo.slug);
    if (!secao) return;
    secao.scrollIntoView({ behavior: this.movimento.reduzido() ? 'auto' : 'smooth' });
    secao.querySelector<HTMLElement>('h2')?.focus({ preventScroll: true });
    this.escolheu.emit(capitulo);
  }
}
