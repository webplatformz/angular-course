import { Component } from '@angular/core';
import { StopwatchComponent } from '../stopwatch/stopwatch.component';

@Component({
  selector: 'app-viewport',
  standalone: true,
  imports: [StopwatchComponent],
  templateUrl: './viewport.component.html',
  styleUrl: './viewport.component.css',
})
export class ViewportComponent {}
