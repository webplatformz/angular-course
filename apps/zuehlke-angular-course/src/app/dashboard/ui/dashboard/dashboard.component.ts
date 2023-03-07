import { Component, Input } from '@angular/core';
import { Hero } from '../../../shared/model/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  @Input()
  heroes: Hero[] = [];
}
