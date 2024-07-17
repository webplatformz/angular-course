import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-ingredient-list',
  standalone: true,
  template: `
    <ul>
      <li *ngFor="let ingredient of ingredients">{{ ingredient.quantity }} - {{ ingredient.name }}</li>
    </ul>
  `,
  imports: [NgForOf],
})
export class IngredientListComponent {
  ingredients = [
    { name: 'noodles', quantity: 1 },
    { name: 'miso broth', quantity: 1 },
    { name: 'egg', quantity: 2 },
  ];
}
