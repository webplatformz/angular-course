import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './feature/messages.component';
import { MessageBarComponent } from './ui/message-bar/message-bar.component';

@NgModule({
  declarations: [MessagesComponent, MessageBarComponent],
  imports: [CommonModule],
  exports: [MessagesComponent],
})
export class MessagesModule {}
