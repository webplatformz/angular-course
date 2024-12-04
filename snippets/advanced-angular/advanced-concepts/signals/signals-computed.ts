import { computed, Signal, signal, WritableSignal } from '@angular/core';

const counter: WritableSignal<number> = signal(0);
const computedCounter: Signal<number> = computed(() => this.counter() * 2);
