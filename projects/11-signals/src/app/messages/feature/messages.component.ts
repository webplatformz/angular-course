import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MessageService } from '../../message.service';
import { MessageBarComponent } from '../ui/message-bar/message-bar.component';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: [],
  imports: [MessageBarComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}

  // TODO: pass the messages from message service to the message bar

  public clear() {
    this.messageService.clear();
  }
}
