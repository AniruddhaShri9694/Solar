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
      emoji: '🏠',
      description: 'Rooftop solar installation for family home, saving 90% on electricity'
    },
    {
      id: 2,
      title: 'Commercial Complex',
      category: 'Commercial',
      emoji: '🏢',
      description: '50kW solar system for commercial building reducing operational costs'
    },
    {
      id: 3,
      title: 'Industrial Setup',
      category: 'Industrial',
      emoji: '⚙️',
      description: '100kW industrial solar installation with battery storage'
    },
    {
      id: 4,
      title: 'Housing Society',
      category: 'Community',
      emoji: '🏘️',
      description: 'Community solar project for housing society common areas'
    },
    {
      id: 5,
      title: 'Solar Farm',
      category: 'Industrial',
      emoji: '🌾',
      description: 'Large-scale solar farm generating 500kW clean energy'
    },
    {
      id: 6,
      title: 'Smart Home System',
      category: 'Residential',
      emoji: '🏡',
      description: 'Solar + battery storage + smart monitoring for smart home'
    }
  ];

  selectedCategory = 'All';
  categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Community'];

  get filteredProjects() {
    if (this.selectedCategory === 'All') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === this.selectedCategory);
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }
}
