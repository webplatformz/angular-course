import { Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private _messages: WritableSignal<string[]> = signal([]);

  add(message: string) {
    this._messages.update(value => [...value, message]);
  }

  clear() {
    this._messages.set([]);
  }

  get messages(): Signal<string[]> {
    return this._messages.asReadonly();
  }
}
