import {Component, output} from '@angular/core';

@Component(/* ... */)
export class CustomSlider {
  // Declare an output named 'value'.
  value = output<string>();

  updateValue(value: string) {
    this.value.emit(value);
  }
}
