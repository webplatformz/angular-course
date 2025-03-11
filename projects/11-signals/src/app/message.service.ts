import { Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private _messages$: WritableSignal<string[]> = signal([]);

  add(message: string) {
    // todo: add message to _messages, hint: use 'update' method
  }

  clear() {
    // todo: implement, hint: use 'set' method
  }

  get messages$(): Signal<string[]> {
    return this._messages$.asReadonly();
  }
}
