import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  projects = [
    {
      id: 1,
      title: '10kW Residential Solar',
      category: 'Residential',
      image: 'assets/images/1.jpeg',
      description: 'Rooftop solar installation for family home, saving 90% on electricity'
    },
    {
      id: 2,
      title: 'Commercial Complex',
      category: 'Commercial',
      image: 'assets/images/13.png',
      description: '50kW solar system for commercial building reducing operational costs'
    },
    {
      id: 3,
      title: 'Industrial Setup',
      category: 'Industrial',
      image: 'assets/images/12.jpeg',
      description: '100kW industrial solar installation with battery storage'
    },
    {
      id: 4,
      title: 'Housing Society',
      category: 'Community',
      image: 'assets/images/11.jpeg',
      description: 'Community solar project for housing society common areas'
    },
    // {
    //   id: 5,
    //   title: 'Solar Farm',
    //   category: 'Industrial',
    //   image: 'assets/images/a.png',
    //   description: 'Large-scale solar farm generating 500kW clean energy'
    // },
    {
      id: 6,
      title: 'Smart Home System',
      category: 'Residential',
      image: 'assets/images/14.jpg',
      description: 'Solar + battery storage + smart monitoring for smart home'
    }
  ];

  readonly projectsList = this.projects;
}
