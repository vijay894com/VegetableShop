import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  products = [
    { name: 'Apples', image: 'https://via.placeholder.com/100' },
    { name: 'Oranges', image: 'https://via.placeholder.com/100' },
    { name: 'Kiwi', image: 'https://via.placeholder.com/100' },
    { name: 'Strawberries', image: 'https://via.placeholder.com/100' },
    { name: 'Mango', image: 'https://via.placeholder.com/100' },
    { name: 'Pineapple', image: 'https://via.placeholder.com/100' }
  ];
}
