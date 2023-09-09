import { Component, computed, effect, OnInit, Signal, signal, WritableSignal } from '@angular/core';

import { Classification, Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: WritableSignal<Hero[]> = signal([]);
  nameToFilter: WritableSignal<string> = signal('');
  classificationToFilter: WritableSignal<'restricted' | 'public' | 'all'> = signal('all');

  CLASSIFIED = Classification.CLASSIFIED;

  constructor(private heroService: HeroService) {
    effect(() => {
      console.log(
        `calculating filteredHeroes, heroes:${
          this.heroes().length
        }, name:${this.nameToFilter()}, classification:${this.classificationToFilter()}`,
      );
    });
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes.set(heroes));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe(hero => {
      this.heroes.mutate(heroes => heroes.push(hero));
    });
  }

  delete(hero: Hero): void {
    this.heroes.set(this.heroes().filter(h => h.id !== hero.id));
    this.heroService.deleteHero(hero.id).subscribe();
  }

  filteredHeroes: Signal<Hero[]> = computed(() =>
    this.heroes()
      .filter(h => h.name.toLowerCase().includes(this.nameToFilter()))
      .filter(h => {
        if (this.classificationToFilter() === 'all') {
          return true;
        }
        if (this.classificationToFilter() === 'public') {
          return h.classification === Classification.PUBLIC;
        }
        if (this.classificationToFilter() === 'restricted') {
          return h.classification === Classification.CLASSIFIED;
        }
        return false;
      }),
  );

  nameFilterChanged(filterValue: string) {
    this.nameToFilter.set(filterValue);
  }

  classificationFilterChanged(filterValue: 'restricted' | 'public' | 'all'): void {
    this.classificationToFilter.set(filterValue);
  }
}
