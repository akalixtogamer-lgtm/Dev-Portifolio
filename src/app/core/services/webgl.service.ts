import { Injectable } from '@angular/core';

/**
 * Descobre se o navegador consegue desenhar 3D (WebGL).
 * Sem WebGL, o fundo 3D é trocado por um fundo estático: o site continua funcionando.
 */
@Injectable({ providedIn: 'root' })
export class WebglService {
  readonly suportado: boolean = this.detectar();

  private detectar(): boolean {
    try {
      const tela = document.createElement('canvas');
      return Boolean(tela.getContext('webgl2') ?? tela.getContext('webgl'));
    } catch {
      return false;
    }
  }
}
