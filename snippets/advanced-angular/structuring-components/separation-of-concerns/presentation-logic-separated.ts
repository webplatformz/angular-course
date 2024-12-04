import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-hero-list',
  imports: [HeroComponent],
  template: ` <section>
    Our list of heroes: @for(hero of heroes; track hero.name) {
    <app-hero [hero]="hero"></app-hero>
    } Total powers: {{ totalPowers }}<br />
    Average power: {{ avgPower }}
  </section>`,
})
export class HeroListComponent {
  heroes: Hero[] = [];
  totalPowers: number = 0;

  get avgPower(): number {
    return this.totalPowers / this.heroes.length;
  }
}
