import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location, UpperCasePipe } from '@angular/common';

import { Hero } from '../../hero';
import { HeroService } from '../../hero.service';
import { LoggingService } from '../../logging.service';
import { ReactiveFormsModule } from '@angular/forms';
import { EditHeroComponent } from '../ui/edit-hero/edit-hero.component';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [],
  standalone: true,
  imports: [ReactiveFormsModule, UpperCasePipe, EditHeroComponent],
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;

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
    this.location.back();
  }

  saveHero(hero: Hero): void {
    this.heroService.updateHero(hero).subscribe(() => this.goBack());
  }
}
