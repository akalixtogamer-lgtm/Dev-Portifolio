/**
 * As três FORMAÇÕES do campo de partículas. Cada função devolve uma lista
 * de posições [x, y, z, x, y, z, ...] para a mesma quantidade de partículas.
 * O campo "viaja" de uma formação para outra conforme a rolagem:
 *
 *   luzes da cidade (cenas 1–3) → rastros de dança (4–7) → circuito (8–9)
 */

/** Gerador de números "aleatórios" com semente: o desenho sai igual em toda visita. */
export function criarSorteio(semente: number): () => number {
  let estado = semente >>> 0;
  return () => {
    estado = (estado + 0x6d2b79f5) >>> 0;
    let t = estado;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Luzes espalhadas pela encosta de um morro, vistas de longe. */
export function luzesDaCidade(total: number, sorteio: () => number): Float32Array {
  const pos = new Float32Array(total * 3);
  for (let i = 0; i < total; i++) {
    const x = (sorteio() - 0.5) * 26;
    const encosta = 3.2 * Math.exp(-(((x + 1.5) / 6) ** 2)) - 2.5; // altura do morro neste x
    const profundidade = sorteio() ** 2; // mais luzes perto da superfície
    pos[i * 3] = x;
    pos[i * 3 + 1] = encosta - profundidade * 6;
    pos[i * 3 + 2] = (sorteio() - 0.5) * 6;
  }
  return pos;
}

/** Fitas que giram, como o rastro de um corpo dançando. */
export function rastrosDeDanca(total: number, sorteio: () => number): Float32Array {
  const pos = new Float32Array(total * 3);
  const fitas = 6;
  for (let i = 0; i < total; i++) {
    const fita = i % fitas;
    const t = sorteio() * Math.PI * 2;
    const fase = (fita / fitas) * Math.PI * 2;
    const espalhar = () => (sorteio() - 0.5) * 0.35;
    pos[i * 3] = 8 * Math.sin(t + fase) + espalhar();
    pos[i * 3 + 1] = 4 * Math.sin(2 * t + fase * 0.5) + espalhar();
    pos[i * 3 + 2] = 3 * Math.cos(3 * t + fase) + espalhar();
  }
  return pos;
}

/** Trilhas retas em grade, como as de uma placa de circuito. */
export function circuito(total: number, sorteio: () => number): Float32Array {
  const pos = new Float32Array(total * 3);
  const passo = 1.4;
  const camadas = [-2.5, 0, 2.5];
  for (let i = 0; i < total; i++) {
    const horizontal = sorteio() < 0.5;
    const linha = Math.round((sorteio() - 0.5) * 10) * passo; // posição presa à grade
    const aoLongo = (sorteio() - 0.5) * 24;
    pos[i * 3] = horizontal ? aoLongo : linha * 1.6;
    pos[i * 3 + 1] = horizontal ? linha : aoLongo * 0.6;
    pos[i * 3 + 2] = camadas.at(i % camadas.length) ?? 0;
  }
  return pos;
}
