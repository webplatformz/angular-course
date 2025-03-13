import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoggingService {
  log(msg: string) {
    console.log(msg);
  }
}
