import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Classification, Hero } from '../../../hero';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.css',
})
export class HeroesListComponent {
  CLASSIFIED = Classification.CLASSIFIED;

  @Input()
  heroes: Hero[] = [];

  @Output()
  deleteHero = new EventEmitter();

  delete(hero: Hero) {
    this.deleteHero.emit(hero);
  }
}
