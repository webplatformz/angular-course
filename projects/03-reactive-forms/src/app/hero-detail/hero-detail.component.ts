import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location, UpperCasePipe } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { LoggingService } from '../logging.service';
import { FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, UpperCasePipe],
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;

  // todo: Declare heroForm with new FormGroup, FormControl
  heroForm: FormGroup<{ name: FormControl<string | null>; description: FormControl<string | null> }> = {} as any;

  constructor(
    private logging: LoggingService,
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.heroService.getHero(id).subscribe(hero => (this.hero = hero));
    this.logging.log(`Selected heroes id is ${id}`);
  }

  goBack(): void {
    this.heroForm?.reset();
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      const heroToSave = {
        ...this.hero,
        name: this.heroForm.controls.name.value!,
        description: this.heroForm.controls.description.value!,
      };

      this.heroService.updateHero(heroToSave).subscribe(() => this.goBack());
    }
  }
}
