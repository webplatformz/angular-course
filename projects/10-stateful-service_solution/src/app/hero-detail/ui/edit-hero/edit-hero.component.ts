import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Hero } from '../../../hero';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';

@Component({
    selector: 'app-edit-hero',
    imports: [ReactiveFormsModule, UpperCasePipe],
    templateUrl: './edit-hero.component.html',
    styleUrl: './edit-hero.component.css'
})
export class EditHeroComponent implements OnChanges {
  @Input()
  hero: Hero | undefined;

  @Output()
  back = new EventEmitter<void>();

  @Output()
  save = new EventEmitter<Hero>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['hero']?.currentValue) {
      this.updateForm(changes['hero'].currentValue);
    }
  }

  heroForm: FormGroup<{ name: FormControl<string | null>; description: FormControl<string | null> }> = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    description: new FormControl<string>(''),
  });

  private updateForm(hero: Hero) {
    this.heroForm.patchValue({
      name: hero.name,
      description: hero.description,
    });
  }

  goBack() {
    this.heroForm.reset();
    this.back.emit();
  }

  saveHero() {
    if (this.hero) {
      const heroToSave = {
        ...this.hero,
        name: this.heroForm.controls.name.value!,
        description: this.heroForm.controls.description.value!,
      };

      this.save.emit(heroToSave);
    }
  }
}
