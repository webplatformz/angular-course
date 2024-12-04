import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({ selector: 'app-my-cmp', template: '', standalone: true })
class MyComponent implements OnChanges {
  @Input() count: number = 0;
  ngOnChanges({ prop }: SimpleChanges) {
    if (prop.previousValue !== prop.currentValue) {
      // ...
    }
  }
}
