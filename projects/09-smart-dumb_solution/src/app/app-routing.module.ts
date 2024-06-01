import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/feature/dashboard.component';
import { HeroesComponent } from './heroes/feature/heroes.component';
import { HeroDetailComponent } from './hero-detail/feature/hero-detail.component';
import { heroClassificationGuard } from './hero-classification.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'detail/:id',
    component: HeroDetailComponent,
    canActivate: [heroClassificationGuard],
  },
  { path: 'heroes', component: HeroesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
