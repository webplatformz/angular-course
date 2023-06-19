import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/feature/messages.component';
import { MessageBarComponent } from './messages/ui/message-bar/message-bar.component';
import { HeroDetailModule } from './hero-detail/hero-detail.module';
import { HeroesModule } from './heroes/heroes.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HeroDetailModule,
    HeroesModule,
    DashboardModule,
  ],
  declarations: [AppComponent, MessagesComponent, MessageBarComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
