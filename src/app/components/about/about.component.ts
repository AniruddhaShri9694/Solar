import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '5000+', label: 'Happy Customers' },
    { number: '2500+', label: 'Solar Systems' },
    { number: '99%', label: 'Satisfaction Rate' }
  ];

  offerings = [
    {
      icon: '☀️',
      title: 'Solar Technology',
      description: 'Our expert team visits your location and checks rooftop space, shadow area, and power usage to design the best solar solution for maximum savings.'
    },
    {
      icon: '🏗️',
      title: 'Installation Quality',
      description: 'Get a professional 3D solar layout so you can clearly understand panel placement, structure design, and expected generation before installation.'
    },
    {
      icon: '👥',
      title: 'Customer Service',
      description: 'We handle complete solar installation, net meter process, and government subsidy documentation for a smooth and hassle-free experience.'
    },
    {
      icon: '⚡',
      title: 'Energy Efficiency',
      description: 'Start reducing your electricity bill from day one with high-efficiency solar systems designed for long-term performance and durability.'
    },
    {
      icon: '🛠️',
      title: 'After-Sales Support',
      description: 'Our support team provides regular maintenance guidance and quick service support to keep your solar system running efficiently.'
    },
    {
      icon: '🌱',
      title: 'Sustainability Focus',
      description: 'Quality products, professional installation, transparent pricing, and customer satisfaction make Sion Energy a trusted choice for solar solutions.'
    }
  ];
}
