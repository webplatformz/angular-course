import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  standalone: true,
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
  private fb = inject(FormBuilder);

  profileForm = this.fb.group({
    userName: ['', Validators.required],
    userEmail: ['', Validators.email],
  });
}
