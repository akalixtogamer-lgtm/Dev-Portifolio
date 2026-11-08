import { Component } from '@angular/core';

// @Component é um "decorador": ele diz ao Angular que esta classe é um componente
// e informa onde estão o HTML e o CSS dele.
@Component({
  selector: 'app-porta',          // nome da tag que usaremos no HTML: <app-porta />
  templateUrl: './porta.html',    // arquivo com a estrutura visual
  styleUrl: './porta.css'         // arquivo com o estilo e a animação
})
export class Porta {

  // ===== ESTADO =====
  // Variável que guarda se a porta está aberta.
  // ": boolean" é a TIPAGEM do TypeScript: essa variável só aceita true ou false.
  // Começa como false, ou seja, a porta inicia FECHADA.
  portaAberta: boolean = false;

  // ===== AÇÕES =====
  // Função que abre a porta.
  // ": void" significa que a função não devolve nenhum valor, ela só executa uma ação.
  abrirPorta(): void {
    this.portaAberta = true;      // "this" se refere a este componente
  }

  // Função que fecha a porta.
  fecharPorta(): void {
    this.portaAberta = false;
  }

  // Função que alterna: se estiver aberta, fecha; se estiver fechada, abre.
  // O "!" inverte o valor booleano (true vira false e false vira true).
  alternarPorta(): void {
    this.portaAberta = !this.portaAberta;
  }

  // ===== INFORMAÇÃO DERIVADA =====
  // Função que DEVOLVE um texto (": string") de acordo com o estado da porta.
  // Ela é usada no botão, para o texto mudar sozinho.
  textoDoBotao(): string {
    return this.portaAberta ? 'Fechar porta' : 'Abrir porta';
    // Isso é um "operador ternário": condição ? valorSeVerdadeiro : valorSeFalso
  }
}