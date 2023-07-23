import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-message-bar',
  templateUrl: './message-bar.component.html',
  styleUrls: ['./message-bar.component.css'],
  standalone: true,
  imports: [NgIf, NgFor],
})
export class MessageBarComponent {
  @Input()
  messages!: string[] | null;

  @Output()
  clear = new EventEmitter<void>();

  public clearMessages(): void {
    this.clear.emit();
  }
}
