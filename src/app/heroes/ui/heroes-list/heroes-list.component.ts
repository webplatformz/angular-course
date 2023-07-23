import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../../../shared/model/hero';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css'],
  standalone: true,
  imports: [NgFor, RouterLink],
})
export class HeroesListComponent {
  @Input()
  heroes: Hero[] = [];

  @Output()
  delete = new EventEmitter<Hero>();

  deleteHero(hero: Hero): void {
    this.delete.emit(hero);
  }
}
