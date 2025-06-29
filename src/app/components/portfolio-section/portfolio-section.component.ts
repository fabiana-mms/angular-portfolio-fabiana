import { Component } from '@angular/core';
import { ProjectCardComponent } from "../project-card/project-card.component";

interface Project {
  image: string;
  title: string;
  technologies: string[];
  link: string;
}

@Component({
  selector: 'app-portfolio-section',
  //imports: [ProjectCardComponent],
  templateUrl: './portfolio-section.component.html',
  styleUrl: './portfolio-section.component.scss'
})
export class PortfolioSectionComponent {
  /*projects: Project[] = []

  constructor() {}

  ngOnInit(): void {
    this.projects = [
      {
        image: 'https://via.placeholder.com/150',
        title: 'Projeto 1',
        technologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
        link: 'https://www.google.com'
      },
      {
        image: 'https://via.placeholder.com/150',
        title: 'Projeto 2',
        technologies: ['React', 'TypeScript', 'HTML', 'CSS'],
        link: 'https://www.google.com'
      },
      {
        image: 'https://via.placeholder.com/150',
        title: 'Projeto 3',
        technologies: ['Vue', 'TypeScript', 'HTML', 'CSS'],
        link: 'https://www.google.com'
      },
      {
        image: 'https://via.placeholder.com/150',
        title: 'Projeto 4',
        technologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
        link: 'https://www.google.com'
      },
      {
        image: 'https://via.placeholder.com/150',
        title: 'Projeto 5',
        technologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
        link: 'https://www.google.com'
      },
      {}
    ]
  }*/
}
