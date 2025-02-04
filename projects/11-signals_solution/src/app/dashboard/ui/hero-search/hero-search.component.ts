import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Hero } from '../../../hero';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-hero-search',
    templateUrl: './hero-search.component.html',
    styleUrls: ['./hero-search.component.css'],
    imports: [RouterLink, AsyncPipe]
})
export class HeroSearchComponent {
  // handle undefined input, transform to empty array
  @Input({ transform: (value: Hero[] | null): Hero[] => value ?? [] })
  searchResults: Hero[] = [];

  @Output()
  changeSearchTerm = new EventEmitter<string>();

  search(term: string): void {
    this.changeSearchTerm.emit(term);
  }
}
