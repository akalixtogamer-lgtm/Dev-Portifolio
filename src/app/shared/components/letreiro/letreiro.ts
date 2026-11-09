import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NarrativaService } from '../../../core/services/narrativa.service';
import { MapaRota } from '../mapa-rota/mapa-rota';

/**
 * O letreiro do ônibus: mostra o capítulo atual, a barra de progresso
 * e abre a lista de capítulos. Fica preso no rodapé da tela.
 */
@Component({
  selector: 'app-letreiro',
  imports: [MapaRota, RouterLink],
  templateUrl: './letreiro.html',
  styleUrl: './letreiro.css',
  host: { '(document:keydown.escape)': 'fechar()' },
})
export class Letreiro {
  protected readonly narrativa = inject(NarrativaService);
  protected readonly aberto = signal(false);
  protected readonly porcentagem = computed(() => Math.round(this.narrativa.progresso() * 100));

  protected alternar(): void {
    this.aberto.update((valor) => !valor);
  }

  protected fechar(): void {
    this.aberto.set(false);
  }
}
