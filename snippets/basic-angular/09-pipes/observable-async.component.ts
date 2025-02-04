import { Component } from '@angular/core';
import { of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-observable-subscribe',

  template: `number is: {{ myObservable$ | async }}`,
  imports: [AsyncPipe],
})
export class ObservablePipeComponent {
  myObservable$ = of(1, 2, 3);
}
