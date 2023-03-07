import { Component, EventEmitter, Output } from '@angular/core';

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
