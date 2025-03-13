import { Component } from '@angular/core';
import { StopwatchComponent } from '../stopwatch/stopwatch.component';

@Component({
  selector: 'app-interaction',
  standalone: true,
  imports: [StopwatchComponent],
  templateUrl: './interaction.component.html',
  styleUrl: './interaction.component.css',
})
export class InteractionComponent {}
