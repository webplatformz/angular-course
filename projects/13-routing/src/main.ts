import { enableProdMode, importProvidersFrom } from '@angular/core';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { HeroDetailComponent } from './app/hero-detail/hero-detail.component';
import { HeroesComponent } from './app/heroes/heroes.component';

if (environment.production) {
  enableProdMode();
}

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  //   todo: add path for 'public', link to PublicHeroesComponent
];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, FormsModule),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi())
  ]
}).catch(err => console.error(err));
