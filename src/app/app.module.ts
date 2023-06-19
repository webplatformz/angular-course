import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/feature/messages.component';
import { MessageBarComponent } from './messages/ui/message-bar/message-bar.component';
import { HeroesComponent } from './heroes/feature/heroes.component';
import { HeroesListComponent } from './heroes/ui/heroes-list/heroes-list.component';
import { AddHeroComponent } from './heroes/ui/add-hero/add-hero.component';
import { DashboardComponent } from './dashboard/feature/dashboard.component';
import { HeroesMenuComponent } from './dashboard/ui/heroes-menu/heroes-menu.component';
import { HeroSearchComponent } from './dashboard/ui/hero-search/hero-search.component';
import { HeroDetailModule } from './hero-detail/hero-detail.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, HeroDetailModule],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    MessagesComponent,
    HeroSearchComponent,
    MessageBarComponent,
    HeroesListComponent,
    AddHeroComponent,
    HeroesMenuComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
