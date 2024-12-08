import { NgModule } from '@angular/core';

@NgModule({
  declarations: [...],
  imports: [
    StoreModule.forRoot({ heroes: heroReducer }),
    EffectsModule.forRoot([HeroEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
