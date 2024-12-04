import { Component } from '@angular/core';
import { MyService } from './my.service';

@Component({
  selector: 'app-constructor-injection',
  standalone: true,
  template: ``,
})
export class ConstructorInjectionComponent {
  constructor(private myService: MyService) {}
}
