import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from 'src/app/shared/model/hero';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css'],
})
export class AddHeroComponent {
  @Output()
  add = new EventEmitter();

  addHero(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }

    this.add.emit(name);
  }
}
