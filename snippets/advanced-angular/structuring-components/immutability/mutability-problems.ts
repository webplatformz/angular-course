import { Component, Input, OnChanges } from '@angular/core';

type Person = { name: string };
type Address = { city: string; street: string };

@Component({
  standalone: true,
  selector: 'app-person',
  template: ` {{ person.name }} lives in {{ address.city }} {{ zipCode }} `,
})
class PersonComponent implements OnChanges {
  @Input() person!: Person;
  @Input() address!: Address;

  // local state of this component
  zipCode: string = '';

  constructor(private zipCodeFor: (address: Address) => string) {}

  ngOnChanges() {
    this.zipCode = this.zipCodeFor(this.address);
  }
}
