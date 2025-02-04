import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',

  templateUrl: 'reactive-form.component.html',
  imports: [ReactiveFormsModule],
})
export class ReactiveFormComponent {
  profileForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
}
