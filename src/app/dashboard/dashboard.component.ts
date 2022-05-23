import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  top_n: number = 5;

  constructor(private route: ActivatedRoute, private heroService: HeroService) {}

  ngOnInit(): void {
    this.top_n = this.route.snapshot.data['config'].value;
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes.slice(1, this.top_n)));
  }
}
