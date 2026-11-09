import { Routes } from '@angular/router';

/**
 * As páginas do site. loadComponent = "lazy loading": o código de cada página
 * só é baixado quando a pessoa entra nela. O Three.js e o GSAP, por exemplo,
 * só são baixados na experiência.
 */
export const routes: Routes = [
  {
    path: '',
    title: 'Wallace Toledo · A vida em movimento',
    loadComponent: () => import('./features/experiencia/experiencia').then((m) => m.Experiencia),
  },
  {
    path: 'portfolio',
    title: 'Portfólio · Wallace Toledo',
    loadComponent: () => import('./features/portfolio/portfolio').then((m) => m.Portfolio),
  },
  {
    path: 'contato',
    title: 'Contato · Wallace Toledo',
    loadComponent: () => import('./features/contato/contato').then((m) => m.Contato),
  },
  {
    path: 'laboratorio',
    title: 'Laboratório · Wallace Toledo',
    loadComponent: () => import('./laboratorio/porta/porta').then((m) => m.Porta),
  },
  // Qualquer endereço desconhecido volta para o início.
  { path: '**', redirectTo: '' },
];
