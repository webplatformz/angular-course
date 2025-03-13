import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
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

  messages$ = computed(() => this.messageService.messages$());

  public clear() {
    this.messageService.clear();
  }
}
