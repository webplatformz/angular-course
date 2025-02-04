import { Component } from '@angular/core';
import { Hero } from '../../../../projects/00-base/src/app/hero';

@Component({
  selector: 'app-hero-list',
  imports: [HeroComponent],
  template: ` <section>
    Our list of heroes:
    @for (hero of heroes; track hero.name) {
      <app-hero [hero]="hero"></app-hero>
    }
    Total powers: {{ totalPowers }}<br />
    Average power: {{ totalPowers / heroes.length }}
  </section>`,
})
export class HeroListComponent {
  heroes: Hero[] = [];
  totalPowers: number = 0;
}
