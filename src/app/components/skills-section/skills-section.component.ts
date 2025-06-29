import { Component } from '@angular/core';

interface Skill {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-skills-section',
  imports: [],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss'
})
export class SkillsSectionComponent {
  /*skills: Skill[] = []

  constructor() {}

  ngOnInit(): void {
    this.skills = [
      {icon: 'code', name: 'Angular'},
      {icon: 'code', name: 'React'},
      {icon: 'code', name: 'Node.js'},
      {icon: 'code', name: 'MongoDB'},
      {icon: 'code', name: 'MySQL'},
      {icon: 'code', name: 'PostgreSQL'},
      {icon: 'code', name: 'Docker'},
    ]*/
}
