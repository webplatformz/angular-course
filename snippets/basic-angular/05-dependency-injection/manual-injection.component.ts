import { Component } from '@angular/core';
import { MyService } from './my.service';

@Component({
  selector: 'app-manual',

  template: ``,
})
export class ManualInjectionComponent {
  private myService: MyService;

  constructor() {
    this.myService = new MyService();
  }
}
