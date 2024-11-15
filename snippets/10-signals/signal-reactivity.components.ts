import { Component, effect, OnInit, signal, WritableSignal } from '@angular/core';
import { MessageService } from '../../projects/00-base/src/app/message.service';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-signal-reactivity',
  standalone: true,
  templateUrl: './signal-reactivity-component.html',
  imports: [
    AsyncPipe,
    NgIf
  ]
})

export class SignalReactivityComponents implements OnInit{

  messages: WritableSignal<string[]> =  signal<string[]>([]);

  constructor(private messageService: MessageService) {}

  ngOnInit() {

    this.messages.set(this.messageService.messages);

    // Log messages when Signal changes
    effect(() => console.log(`Current messages: ${this.messages}`))
  }

}
