import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  template: ` <button [disabled]="!isValid">Submit</button> `,
})
export class FormComponent {
  isValid = true;
}
