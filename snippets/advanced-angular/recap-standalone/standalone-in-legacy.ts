import { NgModule } from '@angular/core';

@NgModule({
  declarations: [LegacyComponent],
  exports: [LegacyComponent],
  imports: [StandaloneComponent, StandalonePipe, StandaloneDirective],
})
export class LegacyModule {}
