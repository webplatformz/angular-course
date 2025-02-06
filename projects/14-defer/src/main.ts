import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes, withComponentInputBinding, withRouterConfig } from '@angular/router';
import { OverviewComponent } from './app/overview/overview.component';
import { ViewportComponent } from './app/viewport/viewport.component';
import { InteractionComponent } from './app/interaction/interaction.component';
import { LoadingComponent } from './app/loading/loading.component';

if (environment.production) {
  enableProdMode();
}

export const routes: Routes = [
  {
    path: '',
    component: OverviewComponent,
    title: 'Overview',
  },
  {
    path: 'viewport',
    component: ViewportComponent,
    title: 'Viewport',
  },
  {
    path: 'interaction',
    component: InteractionComponent,
    title: 'Interaction',
  },
  {
    path: 'loading',
    component: LoadingComponent,
    title: 'Loading',
  },
];

const appConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding(), withRouterConfig({ paramsInheritanceStrategy: 'always' })),
  ],
};

bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));
