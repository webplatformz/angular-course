import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/feature/dashboard.component';
import { HeroesComponent } from './heroes/feature/heroes.component';
import { HeroDetailComponent } from './hero-detail/feature/hero-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
];
