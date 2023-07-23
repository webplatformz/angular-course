import { Component } from '@angular/core';
import { MessageService } from '../../shared/data-access/message.service';
import { MessageBarComponent } from '../ui/message-bar/message-bar.component';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  standalone: true,
  imports: [MessageBarComponent],
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}

  public clear() {
    this.messageService.clear();
  }
}
