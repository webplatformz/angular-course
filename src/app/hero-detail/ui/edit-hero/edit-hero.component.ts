import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../../../shared/model/hero';
import { FormsModule } from '@angular/forms';
import { NgIf, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css'],
  standalone: true,
  imports: [NgIf, FormsModule, UpperCasePipe],
})
export class EditHeroComponent {
  @Input()
  hero: Hero | undefined;

  @Output()
  back = new EventEmitter<void>();

  @Output()
  save = new EventEmitter<Hero>();

  goBack(): void {
    this.back.emit();
  }

  saveHero(): void {
    if (this.hero) {
      this.save.emit(this.hero);
    }
  }
}
