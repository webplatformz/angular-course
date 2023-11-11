import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { LoggingService } from '../logging-service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  hero!: Hero;
  heroForm = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    description: new FormControl<string>(''),
  });

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private loggingService: LoggingService,
    private location: Location,
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
    this.loggingService.log(`Selected heroes id is ${id}`);
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
