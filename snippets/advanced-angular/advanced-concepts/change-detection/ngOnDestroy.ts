import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({ selector: 'app-my-cmp', template: '' })
class MyComponent implements OnDestroy {
  private subscription!: Subscription;

  ngOnDestroy() {
    this.subscription.unsubscribe();
    // ...
  }
}
