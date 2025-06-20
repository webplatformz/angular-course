import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ExampleService {
  private data: WritableSignal<string[]> = signal([]);

  constructor() {
    this.data.set(/* ... */);
  }

  public readonly readonlyData = this.data.asReadonly();
}
