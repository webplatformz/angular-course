import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { FeatureService } from './feature.service';

@Directive({
  selector: '[ifEnabled]',
})
export class IsFeatureOnDirective {
  private hasView = false;

  constructor(
    private template: TemplateRef<unknown>,
    private viewContainerRef: ViewContainerRef,
    private features: FeatureService,
  ) {}

  @Input()
  set ifEnabled(feature: string) {
    console.error(feature);
    if (this.features.isEnabled(feature)) {
      // todo: show / hide feature
      this.showFeature();
    } else {
      // todo: show / hide feature
      this.hideFeature();
    }
  }

  private showFeature() {
    console.log('show');
    this.viewContainerRef.createEmbeddedView(this.template);
  }

  private hideFeature() {
    console.log('hide');
    this.viewContainerRef.clear();
  }
}
