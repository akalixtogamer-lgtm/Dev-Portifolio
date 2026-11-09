import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecalho } from './shared/components/cabecalho/cabecalho';

/** Componente raiz: o que aparece em TODAS as páginas (cabeçalho + área das rotas). */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Cabecalho],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  /** Link "Pular para o conteúdo": leva o foco do teclado direto ao <main>. */
  protected pularParaConteudo(evento: Event): void {
    evento.preventDefault();
    document.getElementById('conteudo')?.focus();
  }
}
