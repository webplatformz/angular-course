import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  hero!: Hero;
  heroForm = this.fb.group({
    name: ['', Validators.required],
    description: [''],
  });

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.heroService.getHero(id).subscribe(hero => {
      this.hero = hero;
      this.updateForm(hero);
    });
  }

  private updateForm(hero: Hero) {
    this.heroForm.patchValue({
      name: hero.name,
      description: hero.description,
    });
  }

  isValid(): boolean {
    return this.heroForm.valid;
  }

  goBack(): void {
    this.location.back();
    this.heroForm.reset();
  }

  save(): void {
    if (this.hero) {
      this.hero.name = this.heroForm.controls.name.value!;
      this.hero.description = this.heroForm.controls.description.value!;

      this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
    }
  }
}
