import { Component, DestroyRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  standalone: true,
  imports: [],
  templateUrl: './stopwatch.component.html',
  styleUrl: './stopwatch.component.css',
})
export class StopwatchComponent implements OnInit {
  elapsedTime = 0;
  private intervalId: any;

  constructor(private destroyRef: DestroyRef) {
    this.startStopwatch();
  }

  startStopwatch() {
    this.intervalId = setInterval(() => {
      this.elapsedTime++;
    }, 1000);
  }

  ngOnInit(): void {
    this.destroyRef.onDestroy(() => clearInterval(this.intervalId));
  }
}
