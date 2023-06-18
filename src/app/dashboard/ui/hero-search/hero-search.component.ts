import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Hero } from '../../../hero';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
})
export class HeroSearchComponent {
  @Input()
  searchResults!: Hero[] | null;

  @Output()
  changeSearchTerm = new EventEmitter<string>();

  search(term: string): void {
    this.changeSearchTerm.emit(term);
  }
}
