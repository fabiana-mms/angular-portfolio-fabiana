import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderSectionComponent } from "./components/header-section/header-section.component";
import { HeroSectionComponent } from "./components/hero-section/hero-section.component";
import { ServicesSectionComponent } from "./components/services-section/services-section.component";
import { SkillsSectionComponent } from "./components/skills-section/skills-section.component";
import { PortfolioSectionComponent } from "./components/portfolio-section/portfolio-section.component";
import { ContactSectionComponent } from "./components/contact-section/contact-section.component";
import { FooterSectionComponent } from "./components/footer-section/footer-section.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderSectionComponent, HeroSectionComponent, ServicesSectionComponent, SkillsSectionComponent, PortfolioSectionComponent, ContactSectionComponent, FooterSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-portfolio-fabiana';
}
