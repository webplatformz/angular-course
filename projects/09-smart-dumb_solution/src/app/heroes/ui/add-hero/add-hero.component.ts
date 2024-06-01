import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-hero',
  standalone: true,
  imports: [],
  templateUrl: './add-hero.component.html',
  styleUrl: './add-hero.component.css',
})
export class AddHeroComponent {
  @Output()
  addHero = new EventEmitter<string>();

  add(newHeroName: string) {
    const name = newHeroName.trim();
    if (!name) {
      return;
    }

    this.addHero.emit(name);
  }
}
