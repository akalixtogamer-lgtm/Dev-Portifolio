import { Injectable, computed, signal } from '@angular/core';
import { CAPITULOS } from '../data/capitulos.data';
import { Capitulo } from '../models/capitulo.model';

/**
 * Guarda o ESTADO da história: qual capítulo está na tela e quanto já foi percorrido.
 * providedIn: 'root' = existe UMA instância para o app inteiro (todos os componentes
 * que injetam este serviço enxergam os mesmos valores).
 */
@Injectable({ providedIn: 'root' })
export class NarrativaService {
  readonly capitulos: readonly Capitulo[] = CAPITULOS;

  // Signals privados: só este serviço pode alterar os valores...
  private readonly _idAtivo = signal(1);
  private readonly _progresso = signal(0);

  // ...e versões somente-leitura para o resto do app.
  readonly idAtivo = this._idAtivo.asReadonly();
  readonly progresso = this._progresso.asReadonly();

  // computed: valor DERIVADO, recalculado sozinho quando idAtivo muda.
  readonly capituloAtivo = computed(
    () => this.capitulos.find((c) => c.id === this._idAtivo()) ?? this.capitulos[0],
  );

  /** Marca um capítulo como ativo. Ids que não existem são ignorados. */
  definirAtivo(id: number): void {
    if (this.capitulos.some((c) => c.id === id)) {
      this._idAtivo.set(id);
    }
  }

  /** Recebe o progresso da rolagem e mantém o valor entre 0 e 1. */
  definirProgresso(valor: number): void {
    this._progresso.set(Math.min(1, Math.max(0, valor)));
  }
}
