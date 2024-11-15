import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <p>Count: {{ counter() }}</p>
    <button (click)="increment()">Increment</button>
  `
})
export class SimpleCounterComponent {

  counter: WritableSignal<number> = signal(0);

  increment(): void {

    this.counter.update((current: number) => current + 1)
  }
}
