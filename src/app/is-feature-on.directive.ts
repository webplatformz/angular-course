import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

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
