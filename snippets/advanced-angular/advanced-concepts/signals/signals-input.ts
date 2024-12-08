import { computed, Component, input } from '@angular/core';

@Component(/* ... */)
export class CustomSlider {
  // Declare an input named 'value' with a default value of zero.
  value$ = input(0);

  // Create a computed expression that reads the value input
  label$ = computed(() => `The slider's value is ${this.value$()}`);

  // Declare a required input named requiredValue. Returns anInputSignal<number>
  requiredValue$ = input.required<number>();

  // Change value by specifying “transform” and declaring transformation function
  labelFormatted$ = input('', { transform: trimString });
}

const trimString = (value: string | undefined): string => {
  return value?.trim() ?? '';
};
