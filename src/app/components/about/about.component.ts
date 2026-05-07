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

  skills = [
    { name: 'Solar Technology', level: 95 },
    { name: 'Installation Quality', level: 96 },
    { name: 'Customer Service', level: 94 },
    { name: 'Energy Efficiency', level: 92 },
    { name: 'After-Sales Support', level: 93 },
    { name: 'Sustainability Focus', level: 97 }
  ];
}
