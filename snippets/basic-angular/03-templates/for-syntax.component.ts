import { Component } from '@angular/core';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
})
export class IngredientListComponent {
  ingredients = [
    { name: 'noodles', quantity: 1 },
    { name: 'miso broth', quantity: 1 },
    { name: 'egg', quantity: 2 },
  ];
}
