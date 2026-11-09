import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Rodapé da experiência: o mesmo cenário de programação do menu, em movimento.
 * Linhas de código correm na horizontal, os circuitos pulsam e o fluxograma
 * Início → Estudar → Praticar? → Evoluir fecha a história.
 */
@Component({
  selector: 'app-rodape-codigo',
  imports: [RouterLink],
  templateUrl: './rodape-codigo.html',
  styleUrl: './rodape-codigo.css',
})
export class RodapeCodigo {
  // Cada linha é repetida duas vezes no HTML: assim a esteira corre sem "pulo" no fim.
  protected readonly linhas = [
    "public class Danca { if (praticar) evoluir(); else rever(); }   const vida = movimento.map(passo => codigo);   ",
    "<section class=\"cena\">  <h2>A vida em movimento</h2>  </section>   import { Kalixto } from './vida';   while (sonho) { estudar(); }   ",
    "def coreografia(corpo): return [passo for passo in corpo if passo.ritmo]   SELECT * FROM trajetoria WHERE persistencia = true;   ",
  ];
  protected readonly ano = new Date().getFullYear();
}
