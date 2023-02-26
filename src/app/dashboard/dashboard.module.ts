import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDashboardComponent } from './feature/hero-dashboard/hero-dashboard.component';
import { DashboardComponent } from './ui/dashboard/dashboard.component';
import { HeroSearchComponent } from './feature/hero-search/hero-search.component';
import { SearchBarComponent } from './ui/search-bar/search-bar.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [HeroDashboardComponent, DashboardComponent, HeroSearchComponent, SearchBarComponent],
  imports: [CommonModule, AppRoutingModule],
})
export class DashboardModule {}
