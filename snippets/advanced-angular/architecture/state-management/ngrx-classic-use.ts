import { Component } from '@angular/core';

@Component({ selector: 'app-hero-form' })
export class HeroFormComponent {
  formData$ = this.store.select(selectForm);
  constructor(private store: Store) {}
  updateForm(data: Partial<Hero>) {
    this.store.dispatch(updateForm({ formData: data }));
  }
}
