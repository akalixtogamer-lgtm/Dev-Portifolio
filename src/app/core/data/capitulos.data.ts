import { Capitulo } from '../models/capitulo.model';

/**
 * O CONTEÚDO da experiência: as cenas da trajetória do Wallace.
 * Para mudar um texto ou uma foto do site, mude aqui. Nenhum componente precisa ser tocado.
 * Regra do projeto: nada de datas ou acontecimentos que não foram informados.
 */
export const CAPITULOS: readonly Capitulo[] = [
  {
    id: 1,
    slug: 'o-observador',
    titulo: 'O Observador',
    ambiente: 'comunidade',
    texto:
      'Criado na comunidade da Formiga, Wallace começou muito cedo sua trajetória artística, passando por inúmeros projetos sociais e por diversas artes.',
    marcos: [],
    fotos: [
      {
        arquivo: '01-observador',
        alt: 'Um menino descalço numa laje observa o morro e as montanhas ao pôr do sol.',
      },
      {
        arquivo: '01-observador-close',
        alt: 'O rosto do menino de perfil, iluminado pelo sol, com a comunidade desfocada atrás.',
      },
    ],
  },
  {
    id: 2,
    slug: 'entre-vielas-e-possibilidades',
    titulo: 'Entre vielas e possibilidades',
    ambiente: 'comunidade',
    texto:
      'Tudo começou no colégio municipal, com três grandes projetos. No TIM Música, aprendeu a tocar instrumentos para uma possível orquestra. No TIM Rádio, ajudou a criar uma rádio escolar, com músicas e notícias para os estudantes. No Projeto Coca-Cola, formou-se instrutor de auxílio à educação e apoiou turmas do 1º ao 5º ano do ensino fundamental.',
    marcos: ['Projeto TIM Música', 'Projeto TIM Rádio', 'Projeto Coca-Cola'],
    fotos: [
      {
        arquivo: '02-viela',
        alt: 'O menino de mochila desce a escadaria de uma viela entre muros de tijolo.',
      },
      {
        arquivo: '02-radio-escolar',
        alt: 'Numa sala de aula, o menino fala no microfone da rádio escolar enquanto colegas riem.',
      },
    ],
  },
  {
    id: 3,
    slug: 'a-travessia',
    titulo: 'A Travessia',
    ambiente: 'urbano',
    texto:
      'Na passagem do ensino fundamental para o médio, o caminho levou até a comunidade vizinha, o Morro do Borel, para as aulas de hip hop de um projeto social.',
    marcos: [],
    fotos: [
      {
        arquivo: '03-entrando',
        alt: 'De costas, o menino entra pela porta de um ônibus numa avenida molhada.',
      },
      {
        arquivo: '03-em-pe',
        alt: 'O menino viaja em pé no ônibus lotado, segurando a barra.',
      },
      {
        arquivo: '03-sentado',
        alt: 'Sentado na janela do ônibus, o menino olha a cidade passar na luz dourada.',
      },
      {
        arquivo: '03-saindo',
        alt: 'O menino desce do ônibus na calçada, no começo da noite.',
      },
    ],
  },
  {
    id: 4,
    slug: 'amantes-das-artes',
    titulo: 'Amantes das Artes',
    ambiente: 'estudio',
    texto:
      'Lá, no Morro do Borel, Wallace se tornou integrante do grupo Amantes das Artes e dançou por anos.',
    marcos: ['Amantes das Artes', 'Morro do Borel'],
    fotos: [
      {
        arquivo: '04-quadra-borel',
        alt: 'Numa quadra coberta do Borel, uma roda de jovens bate palma para quem dança no centro.',
      },
      {
        arquivo: '04-quadra-borel-close',
        alt: 'Wallace dança hip hop no centro da roda, com os colegas batendo palma.',
      },
    ],
  },
  {
    id: 5,
    slug: 'companhias',
    titulo: 'Companhias',
    ambiente: 'estudio',
    texto:
      "Depois, entrou para a companhia Ato'Arte e fez prova para a companhia de hip hop da Petite Danse, onde treinou por muito tempo.",
    marcos: ["Ato'Arte", 'Petite Danse'],
    fotos: [
      {
        arquivo: '05-atoarte-palco',
        alt: "A companhia Ato'Arte se apresenta com regatas verde-neon diante de um painel de luzes.",
      },
      {
        arquivo: '05-atoarte-destaque',
        alt: 'Wallace em destaque num salto, com a companhia desfocada atrás.',
      },
    ],
  },
  {
    id: 6,
    slug: 'o-teatro',
    titulo: 'O Teatro',
    ambiente: 'palco',
    texto:
      "Na Ato'Arte também começou o curso de teatro. Ele continuou no projeto Passageiros do Futuro, uma parceria com a escola municipal, na Associação de Moradores da comunidade dos Cabritos, em Copacabana.",
    marcos: ["Ato'Arte", 'Passageiros do Futuro', 'Comunidade dos Cabritos'],
    fotos: [
      {
        arquivo: '06-atoarte-palco',
        alt: "O elenco da Ato'Arte reunido no palco ao fim de uma apresentação.",
        foco: '50% 62%',
      },
      {
        arquivo: '06-teatro-passageiros',
        alt: 'Num palco com cenário de madeira e carteiras escolares, Wallace atua no centro da cena.',
      },
    ],
  },
  {
    id: 7,
    slug: 'danca-de-salao',
    titulo: 'Dança de Salão',
    ambiente: 'estudio',
    texto:
      'A dança de salão começou no projeto social Coarte, na UERJ, seguiu pelas escolas Jaime Aroxa e Giro Livre e completou sua base na KVS, onde ele se tornou integrante da Cia KVS.',
    marcos: ['Coarte (UERJ)', 'Jaime Aroxa', 'Giro Livre', 'KVS'],
    fotos: [
      {
        arquivo: '07-giro-livre',
        alt: 'Num baile com bandeirinhas, Wallace dança samba de gafieira abraçado à parceira.',
      },
      {
        arquivo: '07-cia-kvs',
        alt: 'A Cia KVS posa no camarim: ternos cinza, gravatas e vestidos vermelhos.',
      },
    ],
  },
  {
    id: 8,
    slug: 'reconhecimento-profissional',
    titulo: 'Reconhecimento Profissional',
    ambiente: 'palco',
    texto:
      'Fez prova para a FitDance e passou a integrar o time coreográfico da marca, dando aulas em grandes eventos. O registro profissional pelo Centro Coreográfico confirmou a dança como profissão.',
    marcos: ['FitDance', 'Centro Coreográfico', 'DRT 54.767'],
    fotos: [
      {
        arquivo: '08-fitdance-aulao',
        alt: 'De costas no palco, Wallace puxa um aulão para centenas de pessoas num galpão.',
      },
      {
        arquivo: '08-fitdance-time',
        alt: 'Wallace no centro do time de coreógrafos, abraçados num estúdio.',
      },
      {
        arquivo: '08-centro-coreografico',
        alt: 'Sozinho numa sala com janelas em arco, Wallace dança na luz da tarde.',
      },
      {
        arquivo: '08-centro-coreografico-palco',
        alt: 'Sob um único foco de luz, Wallace termina um movimento com o braço erguido.',
      },
    ],
  },
  {
    id: 9,
    slug: 'formacao-academica',
    titulo: 'Formação Acadêmica',
    ambiente: 'academico',
    texto: 'Os estudos seguiram pela faculdade de educação, entre corredores e salas de aula.',
    marcos: ['Estácio, campus João Uchôa', 'IBMR'],
    fotos: [
      {
        arquivo: '09-corredor',
        alt: 'De mochila, Wallace caminha por um corredor de madeira em direção à luz.',
      },
    ],
  },
  {
    id: 10,
    slug: 'transformacao-digital',
    titulo: 'Transformação Digital',
    ambiente: 'digital',
    texto:
      'Mais tarde, chegou à faculdade de tecnologia. O movimento ganha outra forma: o corpo vira linha, a linha vira geometria, a geometria vira código.',
    marcos: ['Senac, Análise e Desenvolvimento de Sistemas'],
    fotos: [
      {
        arquivo: '10-particulas',
        alt: 'De braços abertos, o corpo de Wallace se desfaz em partículas neon e circuitos.',
      },
      {
        arquivo: '10-programacao',
        alt: 'Wallace cercado de telas holográficas com código, o símbolo </> e um fluxograma.',
      },
    ],
  },
  {
    id: 11,
    slug: 'em-movimento',
    titulo: 'Em Movimento',
    ambiente: 'urbano',
    texto:
      'Hoje, Wallace é professor de Dança Livre e Dança Solo no Programa MUDE, com aulas gratuitas ao ar livre.',
    marcos: ['Programa MUDE'],
    fotos: [
      {
        arquivo: '11-mude',
        alt: 'De boné e microfone, Wallace salta durante uma aula ao ar livre na orla.',
        foco: '35% 40%',
      },
      {
        arquivo: '11-mude-turma',
        alt: 'Wallace dança na frente da turma, com a mão no boné.',
      },
    ],
  },
  {
    id: 12,
    slug: 'o-proximo-capitulo',
    titulo: 'O Próximo Capítulo',
    ambiente: 'digital',
    texto:
      'Wallace Toledo: professor, programador em formação e criador. Dança, cultura e tecnologia no mesmo movimento.',
    marcos: [],
    fotos: [
      {
        arquivo: '12-retrato-neon',
        alt: 'Retrato de Wallace de óculos, iluminado por luz neon magenta e ciano.',
        foco: '55% 30%',
      },
    ],
  },
];
