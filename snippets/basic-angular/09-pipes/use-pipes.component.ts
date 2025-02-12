import { Component } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-use-pipes',

  template: `
    {{ myValue | uppercase }}

    {{ myDate | date: 'longdate' }}

    {{ myDate | date: 'longdate' | uppercase }}
  `,
  imports: [UpperCasePipe, DatePipe],
})
export class UsePipesComponent {
  myValue: string = 'foo';
  myDate = new Date();
}
