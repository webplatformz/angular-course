import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/feature/messages.component';
import { MessageBarComponent } from './messages/ui/message-bar/message-bar.component';
import { DashboardComponent } from './dashboard/feature/dashboard.component';
import { HeroesMenuComponent } from './dashboard/ui/heroes-menu/heroes-menu.component';
import { HeroSearchComponent } from './dashboard/ui/hero-search/hero-search.component';
import { HeroDetailModule } from './hero-detail/hero-detail.module';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, HeroDetailModule, HeroesModule],
  declarations: [
    AppComponent,
    DashboardComponent,
    MessagesComponent,
    HeroSearchComponent,
    MessageBarComponent,
    HeroesMenuComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
