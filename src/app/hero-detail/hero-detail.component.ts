import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  hero!: Hero;
  heroForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.heroService.getHero(id).subscribe(hero => {
      this.hero = hero;
      this.createForm(hero);
    });
  }

  private createForm(hero: Hero) {
    this.heroForm = this.fb.group({
      name: this.fb.control(hero.name, Validators.required),
      nicknames: this.buildNicknamesArray(hero.nicknames),
    });
  }

  private buildNicknamesArray(values: string[] | undefined): FormArray {
    return values ? this.fb.array(values) : this.fb.array([]);
  }

  get nicknames(): FormArray {
    return this.heroForm.get('nicknames') as FormArray;
  }

  isValid(): boolean {
    return this.heroForm.valid;
  }

  goBack(): void {
    this.location.back();
    this.heroForm.reset();
  }

  addNicknameControl() {
    this.nicknames.push(this.fb.control(''));
  }

  save(): void {
    if (this.hero) {
      const formValue = this.heroForm.value;
      this.hero.name = formValue.name;
      this.hero.nicknames = formValue.nicknames.filter((nickname: string) => nickname);

      this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
    }
  }
}
