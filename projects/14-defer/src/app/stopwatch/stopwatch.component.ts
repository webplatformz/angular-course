import { Component, DestroyRef, OnInit, signal } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-stopwatch',
  standalone: true,
  imports: [],
  templateUrl: './stopwatch.component.html',
  styleUrl: './stopwatch.component.css',
})
export class StopwatchComponent implements OnInit {
  elapsedTime = signal(0);

  constructor(private destroyRef: DestroyRef) {}

  ngOnInit(): void {
    const sub = interval(1000).subscribe(val => {
      console.log(val);
      this.elapsedTime.set(val);
    });
    this.destroyRef.onDestroy(() => sub.unsubscribe());
  }
}
