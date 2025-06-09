import { Component, inject } from '@angular/core';
import { MyService } from './my.service';

@Component({ ... })
export class AppComponent {
  private myService: MyService = inject(MyService);
}
