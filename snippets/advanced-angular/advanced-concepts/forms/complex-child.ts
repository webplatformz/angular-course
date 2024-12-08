import { Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class AddressFormComponent implements OnInit {
  @Input() parentForm: FormGroup;

  private fb = inject(FormBuilder);

  ngOnInit() {
    this.parentForm.addControl(
      'address',
      this.fb.group({
        street: ['', Validators.required],
        city: [''],
        state: [''],
        zip: [''],
      }),
    );
  }
}
