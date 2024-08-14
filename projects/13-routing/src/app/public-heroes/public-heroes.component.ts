import { Component, OnInit } from '@angular/core';
import { Classification, Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-public-heroes',
  standalone: true,
  imports: [],
  templateUrl: './public-heroes.component.html',
  styleUrl: './public-heroes.component.css'
})
export class PublicHeroesComponent implements OnInit {
  publicHeroes: Hero[] = [];

  // todo: inject HeroService
  constructor() {
  }

  ngOnInit(): void {
    this.getPublicHeroes();
  }

  private getPublicHeroes() {
    // todo: getHeroes from heroService, use filterPublic in .subscribe and assign to publicHeroes
  }

  private filterPublic(heroes: Hero[]) {
    return heroes.filter(hero => hero.classification == Classification.PUBLIC);
  }
}
