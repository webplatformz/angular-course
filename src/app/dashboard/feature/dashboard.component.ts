import { Component, OnInit } from '@angular/core';
import { Hero } from '../../shared/model/hero';
import { HeroService } from '../../shared/data-access/hero.service';
import { Observable, Subject, switchMap } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { HeroSearchComponent } from '../ui/hero-search/hero-search.component';
import { HeroesMenuComponent } from '../ui/heroes-menu/heroes-menu.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [HeroesMenuComponent, HeroSearchComponent, AsyncPipe],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  foundHeroes$!: Observable<Hero[]>;

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

      // ignore new term if same as previous
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }

  // Push a search term into the observable stream
  search(term: string): void {
    this.searchTerms.next(term);
  }
}
