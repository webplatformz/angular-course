import { NgModule } from '@angular/core';

@NgModule({
  declarations: [...],
  imports: [
    StoreModule.forFeature(
      'featureHeroes',
      featureHeroReducer),
    EffectsModule.forFeature([FeatureHeroEffects]),
  ],
})
export class HeroFeatureModule {}
