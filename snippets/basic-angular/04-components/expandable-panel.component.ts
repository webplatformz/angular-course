import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-expandable-panel',
  standalone: true,
  template: ``,
})
export class ExpandablePanelComponent {
  @Output() panelClosed = new EventEmitter<void>();

  onClick() {
    this.panelClosed.emit();
  }
}
