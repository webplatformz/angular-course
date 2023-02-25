import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from 'src/app/shared/model/hero';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css'],
})
export class HeroesListComponent {
  @Input()
  heroes: Hero[] = [];

  @Output()
  delete = new EventEmitter();

  constructor() {}

  deleteHero(hero: Hero): void {
    this.delete.emit(hero);
  }
}
