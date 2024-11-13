import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { LifecycleChildComponent } from './lifecycle-child/lifecycle-child.component';

@NgModule({ declarations: [AppComponent, LifecycleComponent, LifecycleChildComponent],
    bootstrap: [AppComponent], imports: [BrowserModule, FormsModule, AppRoutingModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}
