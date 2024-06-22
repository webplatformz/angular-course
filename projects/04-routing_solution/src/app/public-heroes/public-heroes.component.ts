import { Component, OnInit } from '@angular/core';
import { Classification, Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-public-heroes',
  standalone: true,
  imports: [],
  templateUrl: './public-heroes.component.html',
  styleUrl: './public-heroes.component.css',
})
export class PublicHeroesComponent implements OnInit {
  publicHeroes: Hero[] = [];

  //   todo: inject HeroService
  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getPublicHeroes();
  }

  private getPublicHeroes() {
    //   todo: get heroes from HeroService
    //   todo: assign to publicHeroes in subscribe, using filterPublic method
    this.heroService.getHeroes().subscribe(heroes => (this.publicHeroes = this.filterPublic(heroes)));
  }

  private filterPublic(heroes: Hero[]) {
    return heroes.filter(hero => hero.classification === Classification.PUBLIC);
  }
}
