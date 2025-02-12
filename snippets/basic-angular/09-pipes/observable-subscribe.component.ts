import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-observable-subscribe',

  template: `number is: {{ myNum }}`,
})
export class ObservableSubscribeComponent implements OnInit {
  myObservable$ = of(1, 2, 3);
  myNum: number = 0;

  ngOnInit(): void {
    this.myObservable$.subscribe(num => {
      this.myNum = num;
    });
  }
}
