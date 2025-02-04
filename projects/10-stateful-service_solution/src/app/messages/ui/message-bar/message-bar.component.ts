import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-message-bar',
    imports: [],
    templateUrl: './message-bar.component.html',
    styleUrl: './message-bar.component.css'
})
export class MessageBarComponent {
  @Input()
  messages: string[] | null = [];

  @Output()
  clear = new EventEmitter<void>();

  public clearMessages(): void {
    this.clear.emit();
  }
}
