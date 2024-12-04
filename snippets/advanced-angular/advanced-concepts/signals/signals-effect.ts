import { effect, OnInit, signal, WritableSignal } from '@angular/core';

export class SignalEffectsComponent implements OnInit {
  messages: WritableSignal<string[]> = signal<string[]>([]);
  constructor() {
    // Register effect to log messages when Signal changes
    effect(() => console.log(`Current messages: ${this.messages}`));
  }

  ngOnInit() {
    this.messages.set(['test 1,2,3']);
  }
}
