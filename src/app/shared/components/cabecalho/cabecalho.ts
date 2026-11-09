import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

/** Cabeçalho do site: marca e navegação principal, presente em todas as páginas. */
@Component({
  selector: 'app-cabecalho',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './cabecalho.html',
  styleUrl: './cabecalho.css',
  // host listener: o Angular escuta a rolagem da janela por este componente.
  host: { '(window:scroll)': 'aoRolar()' },
})
export class Cabecalho {
  // Lista de links: para criar uma página nova no menu, basta acrescentar uma linha.
  protected readonly links = [
    { rotulo: 'Experiência', rota: '/' },
    { rotulo: 'Portfólio', rota: '/portfolio' },
    { rotulo: 'Contato', rota: '/contato' },
  ];

  /** true depois que a página rolou um pouco: o menu muda de visual. */
  protected readonly rolado = signal(false);

  protected aoRolar(): void {
    this.rolado.set(window.scrollY > 24);
  }
}
