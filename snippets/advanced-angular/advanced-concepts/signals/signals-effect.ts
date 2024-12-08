import { effect, OnInit, signal, WritableSignal } from '@angular/core';

export class SignalEffectsComponent implements OnInit {
  messages$: WritableSignal<string[]> = signal<string[]>([]);

  constructor(private messageService: MessageService) {
    // Register effect to log messages when Signal changes
    effect(() => console.log(`Current messages: ${this.messages$}`));
  }

  ngOnInit() {
    this.messages$.set(this.messageService.messages);
  }
}
