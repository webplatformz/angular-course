import { Component, Input } from '@angular/core';
import { SpacedPipe } from './spaced.pipe';
import { UpperCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Hero } from '../../../hero';

@Component({
  selector: 'app-heroes-menu',
  standalone: true,
  imports: [SpacedPipe, UpperCasePipe, RouterLink],
  templateUrl: './heroes-menu.component.html',
  styleUrl: './heroes-menu.component.css',
})
export class HeroesMenuComponent {
  @Input()
  heroes: Hero[] = [];
}
