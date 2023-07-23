import { Component, Input } from '@angular/core';
import { Hero } from '../../../shared/model/hero';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-heroes-menu',
  templateUrl: './heroes-menu.component.html',
  styleUrls: ['./heroes-menu.component.css'],
  standalone: true,
  imports: [NgFor, RouterLink],
})
export class HeroesMenuComponent {
  @Input()
  heroes: Hero[] = [];
}
