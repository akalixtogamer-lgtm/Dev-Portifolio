/**
 * Modelo de dados dos capítulos do DEV-KALIXTO EXPERIENCE.
 * Este arquivo NÃO desenha nada na tela: ele só define o "formato"
 * que todo capítulo da história precisa respeitar.
 * O conteúdo (os capítulos de verdade) fica em core/data/capitulos.data.ts.
 */

// Tipo de união: os ÚNICOS ambientes visuais permitidos.
// Qualquer valor fora desta lista vira erro no VS Code.
export type Ambiente =
  | 'comunidade' // morro, vielas, escadarias
  | 'urbano' // o ônibus, a rua, a orla
  | 'estudio' // espaços de dança e formação
  | 'palco' // iluminação teatral, bastidores
  | 'academico' // corredores e salas de estudo
  | 'digital'; // partículas, circuitos, Kalixto

/** Uma foto da cena. Os arquivos ficam em public/cenas, em dois tamanhos: -1920 e -960. */
export interface Foto {
  readonly arquivo: string; // nome base, sem tamanho e sem extensão: '01-observador'
  readonly alt: string; // descrição para leitores de tela
  readonly foco?: string; // object-position do CSS, ex.: '60% 40%' (padrão: 'center')
}

// Interface: o molde de um capítulo.
export interface Capitulo {
  readonly id: number; // número da cena; readonly = não muda depois de criado
  readonly slug: string; // nome curto usado no endereço: /#a-travessia
  titulo: string; // ex.: 'O Observador'
  ambiente: Ambiente; // só aceita um dos valores do tipo Ambiente
  texto: string; // o parágrafo narrativo da cena
  marcos: string[]; // instituições e marcos citados na cena (pode ser [])
  fotos: Foto[]; // fotos da cena, na ordem em que aparecem durante a rolagem
  resumo?: string; // "?" = opcional
}
