/** O formato de um projeto exibido na página de portfólio. */
export type Situacao = 'em-andamento' | 'concluido';

export interface Projeto {
  nome: string;
  descricao: string;
  tecnologias: string[];
  papel?: string; // o que você fez no projeto
  situacao?: Situacao;
  link?: string; // endereço público (GitHub, site no ar)
}

/** Um canal de contato. */
export interface Contato {
  rede: string; // ex.: 'Instagram'
  usuario: string; // ex.: '@programandodanca'
  url: string;
}
