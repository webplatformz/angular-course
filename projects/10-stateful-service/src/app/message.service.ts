import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
  // todo: refactor to use signal
  private messages$ = new BehaviorSubject<string[]>([]);

  add(message: string) {
    this.messages$.next([...this.messages$.value, message]);
  }

  clear() {
    this.messages$.next([]);
  }

  get messages(): Observable<string[]> {
    return this.messages$.asObservable();
  }
}
