import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDashboardComponent } from './dashboard/feature/hero-dashboard.component';

import { HeroDetailComponent } from './hero-detail/feature/hero-detail.component';
import { HeroesComponent } from './heroes/feature/heroes.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: HeroDashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
