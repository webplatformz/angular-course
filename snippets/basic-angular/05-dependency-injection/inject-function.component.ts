import { Component, inject } from '@angular/core';
import { MyService } from './my.service';

@Component({
  selector: 'app-inject-function',

  template: ``,
})
export class InjectFunctionComponent {
  private myService: MyService = inject(MyService);
}
