import { Component } from '@angular/core';
import { StopwatchComponent } from '../stopwatch/stopwatch.component';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [StopwatchComponent],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css',
})
export class LoadingComponent {
  startLoading = false;

  onLoadContent() {
    this.startLoading = true;
  }
}
