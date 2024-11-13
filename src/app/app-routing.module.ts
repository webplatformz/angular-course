import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LifecycleComponent } from './lifecycle/lifecycle.component';

const routes: Routes = [
  { path: '', redirectTo: '/lifecycle', pathMatch: 'full' },
  { path: 'lifecycle', component: LifecycleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
