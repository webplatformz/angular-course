import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Hero } from '../../../shared/model/hero';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
  standalone: true,
  imports: [NgFor, RouterLink],
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
