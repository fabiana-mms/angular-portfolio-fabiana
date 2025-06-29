import { Component, Input } from '@angular/core';

interface Project {
  image: string;
  title: string;
  technologies: string[];
  link: string;
}

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  //@Input() project!: Project;
}
