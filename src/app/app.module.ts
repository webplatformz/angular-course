import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { LifecycleChildComponent } from './lifecycle-child/lifecycle-child.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [AppComponent, LifecycleComponent, LifecycleChildComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
