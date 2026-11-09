import { TestBed } from '@angular/core/testing';
import { NarrativaService } from './narrativa.service';

describe('NarrativaService', () => {
  let servico: NarrativaService;

  beforeEach(() => {
    servico = TestBed.inject(NarrativaService);
  });

  it('começa no capítulo 1, com progresso 0', () => {
    expect(servico.idAtivo()).toBe(1);
    expect(servico.capituloAtivo().titulo).toBe('O Observador');
    expect(servico.progresso()).toBe(0);
  });

  it('troca o capítulo ativo, e o computed acompanha', () => {
    servico.definirAtivo(3);
    expect(servico.capituloAtivo().titulo).toBe('A Travessia');
  });

  it('ignora um capítulo que não existe', () => {
    servico.definirAtivo(42);
    expect(servico.idAtivo()).toBe(1);
  });

  it('mantém o progresso entre 0 e 1', () => {
    servico.definirProgresso(1.7);
    expect(servico.progresso()).toBe(1);
    servico.definirProgresso(-0.2);
    expect(servico.progresso()).toBe(0);
  });
});
