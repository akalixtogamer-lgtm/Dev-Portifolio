import { gsap } from './gsap';

/**
 * Anima UMA cena a partir de atributos colocados no HTML/SVG.
 * O template diz O QUE se move; este arquivo diz COMO se move.
 *
 *   data-revelar        → o elemento entra (sobe e aparece) quando a cena chega
 *   data-profundidade=N → parallax: quanto maior N, mais a camada se desloca
 *   data-zoom=N         → a câmera "se aproxima" (escala de 1 até N)
 *   data-lateral=N      → movimento lateral, como a paisagem vista da janela do ônibus
 *   data-tracar         → a linha é desenhada conforme a rolagem
 *   data-foto           → fotos da cena: trocam sozinhas a cada 5 s, com transições de cinema
 *   data-barra          → barrinha de cada foto, enche durante os 5 s (clicável)
 *   data-fotos          → camada das fotos, que acompanha o mouse
 *
 * Retorna uma função de limpeza: chamá-la desfaz TODAS as animações desta cena.
 */
/**
 * As transições de entrada das fotos, usadas em rodízio:
 * um círculo que abre do centro, uma cortina da esquerda e um corte diagonal.
 */
const TRANSICOES = [
  { de: { clipPath: 'circle(0% at 50% 50%)' }, para: { clipPath: 'circle(80% at 50% 50%)' } },
  { de: { clipPath: 'inset(0% 100% 0% 0%)' }, para: { clipPath: 'inset(0% 0% 0% 0%)' } },
  {
    de: { clipPath: 'polygon(0% 0%, 0% 0%, -30% 100%, -30% 100%)' },
    para: { clipPath: 'polygon(0% 0%, 130% 0%, 100% 100%, -30% 100%)' },
  },
];

export function animarCena(raiz: HTMLElement): () => void {
  // gsap.context agrupa tudo que for criado dentro dele para limpar de uma vez.
  const contexto = gsap.context(() => {
    // Ao longo de toda a passagem da cena pela tela (entra por baixo, sai por cima).
    const passagem = { trigger: raiz, start: 'top bottom', end: 'bottom top', scrub: true };

    gsap.from(raiz.querySelectorAll('[data-revelar]'), {
      y: 48,
      autoAlpha: 0,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.12,
      scrollTrigger: { trigger: raiz, start: 'top 65%', once: true },
    });

    raiz.querySelectorAll<SVGElement>('[data-profundidade]').forEach((camada) => {
      const forca = Number(camada.dataset['profundidade'] ?? 0);
      gsap.fromTo(
        camada,
        { y: -60 * forca },
        { y: 60 * forca, ease: 'none', scrollTrigger: passagem },
      );
    });

    raiz.querySelectorAll<SVGElement>('[data-zoom]').forEach((camada) => {
      gsap.fromTo(
        camada,
        { scale: 1 },
        {
          scale: Number(camada.dataset['zoom'] ?? 1.2),
          transformOrigin: '60% 40%',
          ease: 'none',
          scrollTrigger: passagem,
        },
      );
    });

    raiz.querySelectorAll<SVGElement>('[data-lateral]').forEach((camada) => {
      const distancia = Number(camada.dataset['lateral'] ?? 300);
      gsap.fromTo(
        camada,
        { x: distancia },
        { x: -distancia, ease: 'none', scrollTrigger: passagem },
      );
    });

    // pathLength="1" no SVG faz todo traço medir 1: fica fácil "apagar" (offset 1) e "desenhar" (offset 0).
    raiz.querySelectorAll<SVGElement>('[data-tracar]').forEach((linha) => {
      gsap.fromTo(
        linha,
        { strokeDasharray: 1, strokeDashoffset: 1 },
        {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: { trigger: raiz, start: 'top 80%', end: 'center center', scrub: true },
        },
      );
    });

    // FOTOS: a primeira faz um zoom lento (efeito Ken Burns) durante toda a cena.
    const fotos = Array.from(raiz.querySelectorAll<HTMLElement>('[data-foto]'));
    if (fotos.length > 0) {
      gsap.fromTo(fotos[0], { scale: 1.1 }, { scale: 1, ease: 'none', scrollTrigger: passagem });
    }

  }, raiz);

  // FOTOS POR TEMPO: com a cena visível, cada foto fica 5 s e a próxima entra
  // com uma transição de cinema. As barrinhas enchem como nos stories.
  const pararFotos = trocarFotosPorTempo(raiz, 5);

  // MOUSE (só em computador): as fotos acompanham o ponteiro, dando profundidade.
  const camada = raiz.querySelector<HTMLElement>('[data-fotos]');
  let soltar = () => {};
  if (camada && window.matchMedia('(pointer: fine)').matches) {
    const irX = gsap.quickTo(camada, 'x', { duration: 0.8, ease: 'power3.out' });
    const irY = gsap.quickTo(camada, 'y', { duration: 0.8, ease: 'power3.out' });
    const aoMover = (evento: PointerEvent) => {
      irX((evento.clientX / window.innerWidth - 0.5) * -24);
      irY((evento.clientY / window.innerHeight - 0.5) * -16);
    };
    raiz.addEventListener('pointermove', aoMover);
    soltar = () => raiz.removeEventListener('pointermove', aoMover);
  }

  return () => {
    soltar();
    pararFotos();
    contexto.revert();
  };
}

/**
 * Troca as fotos da cena por TEMPO (não por rolagem).
 * Só roda enquanto a cena está pelo menos metade visível; fora da tela, pausa.
 * Retorna uma função que desliga tudo.
 */
function trocarFotosPorTempo(raiz: HTMLElement, segundos: number): () => void {
  const fotos = Array.from(raiz.querySelectorAll<HTMLElement>('[data-foto]'));
  if (fotos.length < 2) return () => {};

  const barras = Array.from(raiz.querySelectorAll<HTMLElement>('[data-barra]'));
  const botoes = Array.from(raiz.querySelectorAll<HTMLButtonElement>('[data-barra-botao]'));
  let atual = 0;
  let visivel = false;
  let relogio: gsap.core.Tween | undefined;

  // Mostra a foto "proxima" por cima da atual, com a transição da vez.
  const mostrar = (proxima: number) => {
    if (proxima === atual) return;
    const transicao = TRANSICOES[proxima % TRANSICOES.length];
    fotos.forEach((foto, i) => {
      if (i !== proxima && i !== atual) gsap.set(foto, { opacity: 0, zIndex: 0 });
    });
    gsap.set(fotos[atual], { zIndex: 1 });
    gsap.killTweensOf(fotos[proxima]);
    gsap.set(fotos[proxima], { zIndex: 2 });
    gsap.fromTo(
      fotos[proxima],
      { opacity: 1, scale: 1.18, ...transicao.de },
      { scale: 1.04, ...transicao.para, duration: 1.2, ease: 'power2.inOut' },
    );
    gsap.to(fotos[proxima], { scale: 1, duration: segundos, ease: 'none', delay: 1.2 });
    atual = proxima;
    contar();
  };

  // Enche a barrinha da foto atual em N segundos; ao terminar, passa para a próxima.
  const contar = () => {
    barras.forEach((barra, i) => gsap.set(barra, { scaleX: i < atual ? 1 : 0 }));
    relogio?.kill();
    relogio = gsap.fromTo(
      barras[atual],
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: segundos,
        ease: 'none',
        paused: !visivel,
        onComplete: () => mostrar((atual + 1) % fotos.length),
      },
    );
  };

  const cliques = botoes.map((botao, i) => {
    const aoClicar = () => mostrar(i);
    botao.addEventListener('click', aoClicar);
    return () => botao.removeEventListener('click', aoClicar);
  });

  const observador = new IntersectionObserver(
    ([entrada]) => {
      visivel = entrada.isIntersecting;
      if (visivel) relogio?.play();
      else relogio?.pause();
    },
    { threshold: 0.5 },
  );
  observador.observe(raiz.querySelector('section') ?? raiz);

  contar();

  return () => {
    observador.disconnect();
    cliques.forEach((soltarClique) => soltarClique());
    relogio?.kill();
    gsap.killTweensOf([...fotos, ...barras]);
  };
}
