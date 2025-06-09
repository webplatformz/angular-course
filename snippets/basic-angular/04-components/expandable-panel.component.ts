import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-expandable-panel',
  template: ``,
})
export class ExpandablePanelComponent {
  @Output() panelClosed = new EventEmitter<void>();

  onClick() {
    this.panelClosed.emit();
  }
}
