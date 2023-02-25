import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/data-access/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeroSearchComponent } from './dashboard/feature/hero-search/hero-search.component';
import { MessagesComponent } from './messages/feature/messages.component';
import { SearchBarComponent } from './dashboard/ui/search-bar/search-bar.component';
import { MessageBarComponent } from './messages/ui/message-bar/message-bar.component';
import { HeroesComponent } from './heroes/feature/heroes.component';
import { HeroesListComponent } from './heroes/ui/heroes-list/heroes-list.component';
import { AddHeroComponent } from './heroes/ui/add-hero/add-hero.component';
import { HeroDetailComponent } from './hero-detail/feature/hero-detail.component';
import { EditHeroComponent } from './hero-detail/ui/edit-hero/edit-hero.component';
import { HeroDashboardComponent } from './dashboard/feature/hero-dashboard/hero-dashboard.component';
import { DashboardComponent } from './dashboard/ui/dashboard/dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
  ],
  declarations: [
    AppComponent,
    HeroDashboardComponent,
    DashboardComponent,
    HeroesComponent,
    HeroesListComponent,
    AddHeroComponent,
    HeroDetailComponent,
    EditHeroComponent,
    MessagesComponent,
    HeroSearchComponent,
    SearchBarComponent,
    MessageBarComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
