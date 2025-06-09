import { Component } from '@angular/core';

@Component({
  selector: 'app-user-controls',
  template: `
    @if (isAdmin) {
      <button>Erase database</button>
    } @else {
      <p>You are not authorized.</p>
    }
  `,
})
export class UserControlsComponent {
  isAdmin = true;
}
