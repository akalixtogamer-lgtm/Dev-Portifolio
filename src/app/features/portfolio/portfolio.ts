import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CAPITULOS } from '../../core/data/capitulos.data';
import { PROJETOS } from '../../core/data/projetos.data';

/** Página de portfólio (rota "/portfolio"): acesso direto, sem passar pela história. */
@Component({
  selector: 'app-portfolio',
  imports: [RouterLink],
  templateUrl: './portfolio.html',
})
export class Portfolio {
  protected readonly projetos = PROJETOS;
  protected readonly capitulos = CAPITULOS;
}
