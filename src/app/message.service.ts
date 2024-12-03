import { Injectable, signal, WritableSignal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private messages$: WritableSignal<string[]> = signal([]);

  add(message: string) {
    this.messages$.update(value => value.concat(message));
  }

  clear() {
    this.messages$.set([]);
  }

  public readonly readonlyMessages = this.messages$.asReadonly();
}
