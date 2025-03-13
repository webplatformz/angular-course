import { Component } from '@angular/core';

@Component({
  selector: 'app-ingredient-list',

  template: `
    <ul>
      @for (ingredient of ingredients; track ingredient.name) {
        <li>{{ ingredient.quantity }} - {{ ingredient.name }}</li>
      }
    </ul>
  `,
})
export class IngredientListComponent {
  ingredients = [
    { name: 'noodles', quantity: 1 },
    { name: 'miso broth', quantity: 1 },
    { name: 'egg', quantity: 2 },
  ];
}
