import { Component, OnInit } from '@angular/core';

import { Classification, Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  nameToFilter = '';
  classificationToFilter: 'restricted' | 'public' | 'all' = 'all';
  CLASSIFIED = Classification.CLASSIFIED;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe(hero => {
      this.heroes.push(hero);
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  get filteredHeroes(): Hero[] {
    console.log(
      `calculating filteredHeroes, heroes:${this.heroes.length}, name:${this.nameToFilter}, classification:${this.classificationToFilter}`,
    );

    return this.heroes
      .filter(hero => hero.name.toLowerCase().includes(this.nameToFilter))
      .filter(hero => {
        if (this.classificationToFilter === 'all') {
          return true;
        }
        if (this.classificationToFilter === 'public') {
          return hero.classification === Classification.PUBLIC;
        }
        if (this.classificationToFilter === 'restricted') {
          return hero.classification === Classification.CLASSIFIED;
        }
        return false;
      });
  }

  nameFilterChanged(filterValue: string) {
    this.nameToFilter = filterValue;
  }

  classificationFilterChanged(filterValue: 'restricted' | 'public' | 'all'): void {
    this.classificationToFilter = filterValue;
  }
}
