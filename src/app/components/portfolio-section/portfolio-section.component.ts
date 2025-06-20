import { Component } from '@angular/core';
import { ProjectCardComponent } from "../project-card/project-card.component";

@Component({
  selector: 'app-portfolio-section',
  imports: [ProjectCardComponent],
  templateUrl: './portfolio-section.component.html',
  styleUrl: './portfolio-section.component.scss'
})
export class PortfolioSectionComponent {

}
