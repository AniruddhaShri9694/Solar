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
      icon: '🔍',
      title: 'Free Site Visit & Roof Analysis',
      description: 'Our expert team visits your location and checks rooftop space, shadow area, and power usage to design the best solar solution for maximum savings.'
    },
    {
      icon: '🎨',
      title: 'Customized 3D Solar Design',
      description: 'Get a professional 3D solar layout so you can clearly understand panel placement, structure design, and expected generation before installation.'
    },
    {
      icon: '🛠️',
      title: 'Easy Installation & Subsidy Assistance',
      description: 'We handle complete solar installation, net meter process, and government subsidy documentation for a smooth and hassle-free experience.'
    },
    {
      icon: '💰',
      title: 'High Savings & Reliable Performance',
      description: 'Start reducing your electricity bill from day one with high-efficiency solar systems designed for long-term performance and durability.'
    },
    {
      icon: '🔧',
      title: 'Maintenance & Customer Support',
      description: 'Our support team provides regular maintenance guidance and quick service support to keep your solar system running efficiently.'
    },
    {
      icon: '⭐',
      title: 'Trusted Solar Partner',
      description: 'Quality products, professional installation, transparent pricing, and customer satisfaction make Sion Energy a trusted choice for solar solutions.'
    }
  ];
}
