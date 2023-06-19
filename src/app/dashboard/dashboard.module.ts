import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { DashboardComponent } from './feature/dashboard.component';
import { HeroesMenuComponent } from './ui/heroes-menu/heroes-menu.component';
import { HeroSearchComponent } from './ui/hero-search/hero-search.component';

@NgModule({
  declarations: [DashboardComponent, HeroesMenuComponent, HeroSearchComponent],
  imports: [CommonModule, AppRoutingModule],
})
export class DashboardModule {}
