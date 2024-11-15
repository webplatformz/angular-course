import { Injectable, signal, Signal } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  observableOfMessages(): Observable<string[]> {

    return of(this.messages);
  }

  signalMessages(): Signal<string[]> {

    return signal(this.messages);
  }
}
