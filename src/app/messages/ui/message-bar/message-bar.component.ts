import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-message-bar',
  templateUrl: './message-bar.component.html',
  styleUrls: ['./message-bar.component.css'],
})
export class MessageBarComponent {
  @Input()
  messages!: string[] | null;

  @Output()
  clear = new EventEmitter();

  constructor() {}

  public clearMessages() {
    this.clear.emit();
  }
}
