import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-computed-signals-component',
  standalone: true,
  template: ``
})
export class ComputedSignalsComponent {


  count: WritableSignal<number> = signal(0);

  doubleCount: Signal<number> = computed(() => this.count() * 2);
}
