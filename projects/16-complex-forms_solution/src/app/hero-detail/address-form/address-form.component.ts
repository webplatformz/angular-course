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

  private fb: FormBuilder = inject(FormBuilder);

  addressForm: FormGroup = this.fb.group({
    street: [''],
    city: [''],
    state: [''],
    zip: [''],
  });

  ngOnInit(): void {
    this.initParentForm();
  }

  @Input() set address(address: Address | undefined) {
    if (address) {
      // sets address if already present
      this.addressForm.patchValue(address);
    }
  }

  private initParentForm(): void {
    if (this.parentForm && this.controlName) {
      this.parentForm.addControl(this.controlName, this.addressForm);
    }
  }
}
