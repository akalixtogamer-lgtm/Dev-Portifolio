import { Component } from '@angular/core';
import { CONTATOS } from '../../core/data/projetos.data';

/**
 * Página de contato (rota "/contato").
 * Sem formulário por enquanto: um formulário precisa de um servidor para enviar
 * as mensagens, e o site ainda é só front-end. Os links levam às redes públicas.
 */
@Component({
  selector: 'app-contato',
  templateUrl: './contato.html',
})
export class Contato {
  protected readonly contatos = CONTATOS;
}
