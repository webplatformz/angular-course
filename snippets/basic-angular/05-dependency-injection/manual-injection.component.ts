import { Component } from '@angular/core';
import { MyService } from './my.service';

@Component({ ... })
export class AppComponent {
  private myService: MyService;

  constructor() {
    this.myService = new MyService();
  }
}
