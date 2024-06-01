import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MessageService } from '../../message.service';
import { MessageBarComponent } from '../ui/message-bar/message-bar.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: [],
  standalone: true,
  imports: [MessageBarComponent, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}

  public clear() {
    this.messageService.clear();
  }
}
