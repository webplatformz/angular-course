import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import { HeroService } from '../../hero.service';
import { HeroSearchComponent } from '../ui/hero-search/hero-search.component';
import { RouterLink } from '@angular/router';
import { SpacedPipe } from '../ui/heroes-menu/spaced.pipe';
import { AsyncPipe, UpperCasePipe } from '@angular/common';
import { HeroesMenuComponent } from '../ui/heroes-menu/heroes-menu.component';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    imports: [RouterLink, HeroSearchComponent, SpacedPipe, UpperCasePipe, HeroesMenuComponent, AsyncPipe]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  foundHeroes$: Observable<Hero[]> | undefined;

  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes.slice(1, 5)));

    this.foundHeroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
}
