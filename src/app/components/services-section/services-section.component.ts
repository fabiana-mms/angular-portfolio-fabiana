import { Component } from '@angular/core';
import { ServiceCardComponent } from "../service-card/service-card.component";

interface Service {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services-section',
  //imports: [ServiceCardComponent],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss'
})
export class ServicesSectionComponent {
  /*services: Service = []

  constructor() {}

  ngOnInit(): void {
    this.services = [
      {
        icon: 'code',
        title: 'Desenvolvimento Web',
        description: 'Desenvolvimento de sites e aplicativos web',
      },
      {
        icon: 'code',
        title: 'Desenvolvimento Web',
        description: 'Desenvolvimento de sites e aplicativos web',
      },
      {
        icon: 'code',
        title: 'Desenvolvimento Web',
        description: 'Desenvolvimento de sites e aplicativos web',
      },
    ]
  }*/
}
