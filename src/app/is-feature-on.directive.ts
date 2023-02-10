import { Directive, inject, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { FeatureService } from './feature.service';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[ifEnabled]',
})
export class IsFeatureOnDirective {
  constructor(
    private template: TemplateRef<unknown>,
    private viewContainerRef: ViewContainerRef,
  ) {}

  private showFeature() {
    this.viewContainerRef.createEmbeddedView(this.template);
  }

  private hideFeature() {
    this.viewContainerRef.clear();
  }
}
