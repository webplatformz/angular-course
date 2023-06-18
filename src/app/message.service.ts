import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private messages$ = new BehaviorSubject<string[]>([]);

  add(message: string) {
    this.messages$.next(this.messages$.getValue().concat(message));
  }

  clear() {
    this.messages$.next([]);
  }

  getMessages(): Observable<string[]> {
    return this.messages$.asObservable();
  }
}
