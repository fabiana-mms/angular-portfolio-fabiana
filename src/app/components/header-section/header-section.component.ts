import { Component } from '@angular/core';

@Component({
  selector: 'app-header-section',
  imports: [],
  templateUrl: './header-section.component.html',
  styleUrl: './header-section.component.scss'
})
export class HeaderSectionComponent {
  isMenuOpen = false; // Variável que controla se o menu está aberto ou fechado

  toggleMenu() { // Função que alterna o estado do menu
    this.isMenuOpen = !this.isMenuOpen; // Inverte o valor da variável (true -> false ou false -> true)
  }

  closeMenu() { // Função que fecha o menu
    this.isMenuOpen = false; // Define a variável como false para fechar o menu
  }

}
