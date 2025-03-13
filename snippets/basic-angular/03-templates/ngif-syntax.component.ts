import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-user-controls',

  template: `
    <button *ngIf="isAdmin">Erase database</button>
    <p *ngIf="!isAdmin">You are not authorized.</p>
  `,
  imports: [NgIf],
})
export class UserControlsComponent {
  isAdmin = true;
}
