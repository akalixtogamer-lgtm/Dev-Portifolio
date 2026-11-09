import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])], // o cabeçalho usa links de rota
    }).compileComponents();
  });

  it('deve criar o componente raiz', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('deve ter o link "Pular para o conteúdo" e a área principal', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const pagina = fixture.nativeElement as HTMLElement;
    expect(pagina.querySelector('a[href="#conteudo"]')?.textContent).toContain(
      'Pular para o conteúdo',
    );
    expect(pagina.querySelector('main#conteudo')).not.toBeNull();
  });

  it('deve mostrar a navegação principal com 3 links', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const links = (fixture.nativeElement as HTMLElement).querySelectorAll(
      'nav[aria-label="Principal"] a',
    );
    expect(links.length).toBe(3);
  });
});
