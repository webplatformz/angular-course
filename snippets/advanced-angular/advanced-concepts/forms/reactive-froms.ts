import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  template: `
    <form [formGroup]="profileForm">
      <label for="name">User Name: </label>
      <input id="name" type="text" formControlName="userName" />

      <label for="email">Email: </label>
      <input id="email" type="text" formControlName="userEmail" />
    </form>
  `,
  imports: [ReactiveFormsModule],
})
export class ProfileEditorComponent {
  profileForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    userEmail: new FormControl('', Validators.email),
  });
}
