import { Injectable, signal } from '@angular/core';

/**
 * Respeita a preferência "reduzir movimento" do sistema operacional.
 * No Windows: Configurações > Acessibilidade > Efeitos visuais > Efeitos de animação.
 * Quando ela está ligada, o site não roda animações de rolagem.
 */
@Injectable({ providedIn: 'root' })
export class MovimentoService {
  private readonly consulta =
    typeof window !== 'undefined' && 'matchMedia' in window
      ? window.matchMedia('(prefers-reduced-motion: reduce)')
      : null;

  private readonly _reduzido = signal(this.consulta?.matches ?? false);
  readonly reduzido = this._reduzido.asReadonly();

  constructor() {
    // Se a pessoa mudar a preferência com o site aberto, o signal acompanha.
    this.consulta?.addEventListener('change', (evento) => this._reduzido.set(evento.matches));
  }
}
