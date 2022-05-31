import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { LoggingService } from '../logging-service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  hero!: Hero;

  @ViewChild('heroForm')
  heroForm!: NgForm;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private loggingService: LoggingService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.heroService.getHero(id).subscribe(hero => (this.hero = hero));
    this.loggingService.log(`Selected heroes id is ${id}`);
  }

  goBack(): void {
    this.location.back();
    this.heroForm?.reset();
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
    }
  }
}
