import { CAPITULOS } from './capitulos.data';

// Testes de CONTEÚDO: protegem a história contra erros de digitação nos dados.
describe('CAPITULOS', () => {
  it('tem as cenas numeradas em sequência, a partir de 1', () => {
    expect(CAPITULOS.map((c) => c.id)).toEqual(CAPITULOS.map((_, i) => i + 1));
  });

  it('não repete slugs (cada cena tem um endereço único)', () => {
    const slugs = CAPITULOS.map((c) => c.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('usa slugs válidos para endereço: minúsculas, números e hífen', () => {
    for (const capitulo of CAPITULOS) {
      expect(capitulo.slug).toMatch(/^[a-z0-9-]+$/);
    }
  });

  it('dá pelo menos uma foto, com descrição, a cada cena', () => {
    for (const capitulo of CAPITULOS) {
      expect(capitulo.fotos.length).toBeGreaterThan(0);
      for (const foto of capitulo.fotos) {
        expect(foto.arquivo).toMatch(/^[a-z0-9-]+$/);
        expect(foto.alt.length).toBeGreaterThan(10);
      }
    }
  });

  it('apresenta as escolas da dança de salão', () => {
    const salao = CAPITULOS.find((c) => c.slug === 'danca-de-salao');
    expect(salao?.marcos).toEqual(['Coarte (UERJ)', 'Jaime Aroxa', 'Giro Livre', 'KVS']);
  });
});
