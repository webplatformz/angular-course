import { Component, effect, OnInit, signal, WritableSignal } from '@angular/core';
import { MessageService } from '../../projects/00-base/src/app/message.service';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-signal-effects',
  standalone: true,
  template: '',
  imports: [
    AsyncPipe,
    NgIf
  ]
})

export class SignalEffectsComponent implements OnInit{

  messages: WritableSignal<string[]> =  signal<string[]>([]);

  constructor(private messageService: MessageService) {

    // Register effect to log messages when Signal changes
    effect(() => console.log(`Current messages: ${this.messages}`))
  }

  ngOnInit() {

    this.messages.set(this.messageService.messages);
  }
}
