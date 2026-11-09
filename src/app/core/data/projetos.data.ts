import { Contato, Projeto } from '../models/projeto.model';

/**
 * Projetos do portfólio.
 * REVISE estes textos e acrescente os links públicos (campo `link`) de cada projeto.
 */
export const PROJETOS: readonly Projeto[] = [
  {
    nome: 'DEV-KALIXTO EXPERIENCE',
    descricao:
      'Este portfólio: a trajetória da dança à tecnologia contada em nove cenas navegáveis.',
    tecnologias: ['Angular', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Three.js'],
    papel: 'Concepção, design e desenvolvimento',
    situacao: 'em-andamento',
    link: 'https://github.com/akalixtogamer-lgtm/Dev-Portifolio',
  },
  {
    nome: 'AfroConecta Rio',
    descricao:
      'Plataforma cultural para a Zona Portuária do Rio, com os módulos AfroTour, AfroHub, AfroMarket e Edital Fácil.',
    tecnologias: ['Arquitetura de software'],
    papel: 'Liderança técnica e documento de arquitetura',
  },
  {
    nome: 'Casa da Tia Ciata',
    descricao:
      'Projeto Integrador do Senac: site institucional de várias páginas construído a partir do Figma, com design tokens e suporte a idiomas.',
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'Figma'],
    papel: 'Desenvolvimento em equipe',
  },
  {
    nome: 'Diagonal Assessoria Contábil',
    descricao:
      'Site de um escritório de contabilidade, migrado de HTML, CSS e JavaScript para React. Inclui blog com painel administrativo.',
    tecnologias: ['React', 'Vite', 'CSS'],
    papel: 'Desenvolvimento para cliente',
    situacao: 'em-andamento',
  },
  {
    nome: 'SistemaRH',
    descricao: 'Sistema de recursos humanos em desenvolvimento.',
    tecnologias: ['Angular', 'Tailwind CSS'],
    situacao: 'em-andamento',
  },
];

/** Canais públicos de contato. Nunca coloque senhas ou chaves aqui. */
export const CONTATOS: readonly Contato[] = [
  {
    rede: 'Instagram',
    usuario: '@programandodanca',
    url: 'https://www.instagram.com/programandodanca/',
  },
  {
    rede: 'GitHub',
    usuario: 'akalixtogamer-lgtm',
    url: 'https://github.com/akalixtogamer-lgtm',
  },
];
