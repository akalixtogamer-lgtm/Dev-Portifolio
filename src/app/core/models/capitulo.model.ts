/**
 * Modelo de dados dos capítulos do DEV-KALIXTO EXPERIENCE.
 * Este arquivo NÃO desenha nada na tela: ele só define o "formato"
 * que todo capítulo da história precisa respeitar.
 */

// Tipo de união: os ÚNICOS ambientes visuais permitidos.
// Qualquer valor fora desta lista vira erro no VS Code.
export type Ambiente =
  | 'comunidade' // cenas 01 e 02: morro, vielas, escadarias
  | 'urbano'     // cena 03: o ônibus e a travessia
  | 'estudio'    // cenas 04 e 05: espaços de dança e formação
  | 'palco'      // cena 06: iluminação teatral, bastidores
  | 'academico'  // cena 07: corredores e salas de estudo
  | 'digital';   // cenas 08 e 09: partículas, circuitos, Kalixto

// Interface: o molde de um capítulo.
export interface Capitulo {
  readonly id: number; // número da cena (1 a 9); readonly = não pode ser alterado depois de criado
  titulo: string;      // ex.: 'O Observador'
  ambiente: Ambiente;  // só aceita um dos valores do tipo Ambiente
  marcos: string[];    // instituições e marcos citados na cena (pode ser uma lista vazia: [])
  resumo?: string;     // "?" = opcional; texto curto para leitores de tela
}

// ===== EXERCÍCIO =====
// Preencha a lista abaixo com os capítulos 1, 4 e 5 do storyboard.
export const CAPITULOS: Capitulo[] = [
  // { id: 1, titulo: '...', ambiente: '...', marcos: [] },
];
