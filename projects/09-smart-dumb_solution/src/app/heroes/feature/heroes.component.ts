import { Component, OnInit } from '@angular/core';

import { Hero } from '../../hero';
import { HeroService } from '../../hero.service';
import { RouterLink } from '@angular/router';
import { AddHeroComponent } from '../ui/add-hero/add-hero.component';
import { HeroesListComponent } from '../ui/heroes-list/heroes-list.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [],
  standalone: true,
  imports: [RouterLink, AddHeroComponent, HeroesListComponent],
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

  add(name: string): void {
    this.heroService.addHero({ name } as Hero).subscribe(hero => {
      this.heroes.push(hero);
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
