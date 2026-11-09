import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Plugins do GSAP precisam ser registrados UMA vez. Centralizar aqui evita
// registrar de novo em cada componente.
gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };
