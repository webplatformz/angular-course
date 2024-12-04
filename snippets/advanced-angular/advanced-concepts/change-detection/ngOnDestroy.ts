import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({ selector: 'app-my-cmp', template: '', standalone: true })
class MyComponent implements OnDestroy {
  private subscription!: Subscription;
  ngOnDestroy() {
    this.subscription.unsubscribe();
    // ...
  }
}
