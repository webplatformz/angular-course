import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private messages$ = new BehaviorSubject<string[]>([]);

  add(message: string) {
    // todo: implement
  }

  clear() {
    // todo: implement
  }

  get messages(): Observable<string[]> {
    return this.messages$.asObservable();
  }
}
