import { Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private messages$: WritableSignal<string[]> = signal([]);

  add(message: string) {
    this.messages$.update(value => [...value, message]);
  }

  clear() {
    this.messages$.set([]);
  }

  get messages(): Signal<string[]> {
    return this.messages$.asReadonly();
  }
}
