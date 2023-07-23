import { Component, OnInit } from '@angular/core';

import { Hero } from '../../shared/model/hero';
import { HeroService } from '../../shared/data-access/hero.service';
import { HeroesListComponent } from '../ui/heroes-list/heroes-list.component';
import { AddHeroComponent } from '../ui/add-hero/add-hero.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  standalone: true,
  imports: [AddHeroComponent, HeroesListComponent],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }

  addHero(name: string): void {
    this.heroService.addHero({ name } as Hero).subscribe(hero => {
      this.heroes.push(hero);
    });
  }

  deleteHero(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
