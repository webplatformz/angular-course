import { Component } from '@angular/core';
import { MyService } from './my.service';

@Component({ ... })
export class AppComponent {
  constructor(private myService: MyService) {}
}
