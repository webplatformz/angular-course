import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
  // todo: refactor to use signal
  private _messages$ = new BehaviorSubject<string[]>([]);

  add(message: string) {
    this._messages$.next([...this._messages$.value, message]);
  }

  clear() {
    this._messages$.next([]);
  }

  get messages$(): Observable<string[]> {
    return this._messages$.asObservable();
  }
}
