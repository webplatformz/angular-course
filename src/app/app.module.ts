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
import { HeroDashboardComponent } from './dashboard/feature/hero-dashboard/hero-dashboard.component';
import { DashboardComponent } from './dashboard/ui/dashboard/dashboard.component';
import { HeroDetailModule } from './hero-detail/hero-detail.module';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeroDetailModule,
    HeroesModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
  ],
  declarations: [
    AppComponent,
    HeroDashboardComponent,
    DashboardComponent,
    MessagesComponent,
    HeroSearchComponent,
    SearchBarComponent,
    MessageBarComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
