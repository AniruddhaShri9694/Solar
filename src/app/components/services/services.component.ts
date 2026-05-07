import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    {
      icon: '�',
      title: 'Residential Solar',
      description: 'Complete rooftop solar solutions for homes. Save up to 90% on electricity bills with our proven installations.'
    },
    {
      icon: '🏢',
      title: 'Commercial Solar',
      description: 'Large-scale solar systems for businesses and industries. Reduce operational costs significantly.'
    },
    {
      icon: '📦',
      title: 'Battery Storage',
      description: 'Advanced battery storage solutions to store excess solar energy for 24/7 power availability.'
    },
    {
      icon: '🔧',
      title: 'Installation & Setup',
      description: 'Professional installation with complete subsidy support and paperwork assistance.'
    },
    {
      icon: '📱',
      title: 'Monitoring App',
      description: 'Real-time monitoring dashboard to track your solar system performance and energy savings.'
    },
    {
      icon: '🛠️',
      title: 'Maintenance & Support',
      description: 'Regular maintenance and proactive after-sales service for optimal system performance.'
    }
  ];
}
