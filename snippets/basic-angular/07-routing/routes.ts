import { provideRouter, Routes } from '@angular/router';
import { ApplicationConfig } from '@angular/core';

const routes: Routes = [
  { path: 'path-to-first-component', component: FirstComponent },
  { path: 'path-to-second-component', component: SecondComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
