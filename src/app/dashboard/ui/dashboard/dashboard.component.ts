import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  @Input()
  heroes: Hero[] = [];
}
