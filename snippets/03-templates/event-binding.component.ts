import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  template: `<button (click)="onSave()">Save</button>`,
})
export class FormComponent {
  onSave() {
    // ...
  }
}
