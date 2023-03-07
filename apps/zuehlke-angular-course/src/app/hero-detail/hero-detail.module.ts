import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from './feature/hero-detail.component';
import { EditHeroComponent } from './ui/edit-hero/edit-hero.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeroDetailComponent, EditHeroComponent],
  imports: [CommonModule, FormsModule],
})
export class HeroDetailModule {}
