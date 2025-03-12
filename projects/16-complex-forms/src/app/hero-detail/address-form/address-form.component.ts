import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Address } from '../../address';

@Component({
  selector: 'app-address-form',
  imports: [ReactiveFormsModule],
  templateUrl: './address-form.component.html',
})
export class AddressFormComponent implements OnInit {
  @Input() parentForm: FormGroup | undefined;
  @Input() controlName: string | undefined;

  addressForm: FormGroup = this.fb.group({
    street: [''],
    city: [''],
    state: [''],
    zip: [''],
  });

  private fb: FormBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.initParentForm();
  }

  @Input() set address(address: Address) {
    if (address) {
      // sets address if already present
      this.addressForm.patchValue(address);
    }
  }

  private initParentForm(): void {
    if (this.parentForm && this.controlName) {
      // todo: add control here
      // hint: use the controlName passed from the parent
    }
  }
}
