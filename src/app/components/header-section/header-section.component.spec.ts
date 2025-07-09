import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSectionComponent } from './header-section.component';

describe('HeaderSectionComponent', () => {
  let component: HeaderSectionComponent;
  let fixture: ComponentFixture<HeaderSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  /*it('deve alternar o menu ao chamar toggleMenu()', () => {
    expect(component.isMenuOpen).toBeFalse();
    component.toggleMenu();
    expect(component.isMenuOpen).toBeTrue();
    component.toggleMenu();
    expect(component.isMenuOpen).toBeFalse();
  });

  it('deve fechar o menu ao chamar closeMenu()', () => {
    component.isMenuOpen = true;
    component.closeMenu();
    expect(component.isMenuOpen).toBeFalse();
  });

  it('deve adicionar a classe "open" ao botão quando o menu estiver aberto', () => {
    component.isMenuOpen = true;
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('.header__hamburger'));
    expect(button.classes['open']).toBeTrue();
  });

  it('não deve ter a classe "open" no botão quando o menu estiver fechado', () => {
    component.isMenuOpen = false;
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('.header__hamburger'));
    expect(button.classes['open']).toBeFalsy();
  });

  it('deve adicionar a classe "open" na nav quando o menu estiver aberto', () => {
    component.isMenuOpen = true;
    fixture.detectChanges();

    const nav = fixture.debugElement.query(By.css('.header__nav'));
    expect(nav.classes['open']).toBeTrue();
  });

  it('deve fechar o menu ao clicar em um link do menu', () => {
    component.isMenuOpen = true;
    fixture.detectChanges();

    const link = fixture.debugElement.query(By.css('.header__nav-link'));
    link.triggerEventHandler('click', null);
    expect(component.isMenuOpen).toBeFalse();
  });*/

});
