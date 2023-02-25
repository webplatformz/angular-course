import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from 'src/app/hero';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css'],
})
export class EditHeroComponent {
  @Input()
  hero: Hero | undefined;

  @Output()
  back = new EventEmitter();

  @Output()
  save = new EventEmitter();

  goBack(): void {
    this.back.emit();
  }

  saveHero(): void {
    if (this.hero) {
      this.save.emit(this.hero);
    }
  }
}
