import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable, switchMap, tap } from 'rxjs';
import { RoutingData } from '../routing-data';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;
  nextId: number | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const currentHero$ = this.getHero();
    this.setNextId(currentHero$);
  }

  getHero(): Observable<Hero> {
    /*     const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    return this.heroService.getHero(id).pipe(tap(hero => (this.hero = hero))); */

    return this.route.paramMap.pipe(
      switchMap(params => {
        const id = parseInt(params.get('id')!, 10);
        return this.heroService.getHero(id);
      }),
      tap(hero => (this.hero = hero))
    );
  }

  goBack(): void {
    this.location.back();
    console.log(this.hero);
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
    }
  }

  toNext(): void {
    const routingData: RoutingData = {
      skipGuards: true,
    };
    this.router.navigate(['/detail', this.nextId], {
      state: routingData,
    });
  }

  private setNextId(hero$: Observable<Hero>) {
    hero$
      .pipe(
        switchMap(hero => {
          return this.heroService.getHero(hero.id + 1);
        })
      )
      .subscribe(next => (this.nextId = next?.id));
  }
}
