import { computed, signal } from '@angular/core';

const counter = signal(0);
const isEven = computed(() => {
  console.log('called');
  return counter() % 2 === 0;
});
counter();
counter.set(1);
counter.update(current => current + 1);
counter();
