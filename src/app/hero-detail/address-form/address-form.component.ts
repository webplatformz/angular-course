import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address } from '../../address';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css'],
})
export class AddressFormComponent implements OnInit {
  @Input()
  parentForm!: FormGroup;

  addressForm = this.fb.group({
    street: ['', Validators.required],
    city: [''],
    state: [''],
    zip: [''],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.parentForm.addControl('address', this.addressForm);
  }

  @Input()
  set address(address: Address | undefined) {
    if (address) {
      this.addressForm.patchValue(address);
    }
  }
}
