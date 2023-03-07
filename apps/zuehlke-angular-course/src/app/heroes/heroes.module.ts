import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './feature/heroes.component';
import { AddHeroComponent } from './ui/add-hero/add-hero.component';
import { HeroesListComponent } from './ui/heroes-list/heroes-list.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [HeroesComponent, AddHeroComponent, HeroesListComponent],
  imports: [CommonModule, AppRoutingModule],
})
export class HeroesModule {}
