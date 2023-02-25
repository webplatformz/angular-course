import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from 'src/app/shared/model/hero';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  @Input()
  heroes!: Hero[] | null;

  @Output()
  changeTerm = new EventEmitter();

  constructor() {}

  public updateTerm(term: string) {
    this.changeTerm.emit(term);
  }
}
