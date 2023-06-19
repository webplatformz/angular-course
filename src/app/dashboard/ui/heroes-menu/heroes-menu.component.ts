import { Component, Input } from '@angular/core';
import { Hero } from '../../../shared/model/hero';

@Component({
  selector: 'app-heroes-menu',
  templateUrl: './heroes-menu.component.html',
  styleUrls: ['./heroes-menu.component.css'],
})
export class HeroesMenuComponent {
  @Input()
  heroes: Hero[] = [];
}