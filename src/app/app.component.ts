import { Component } from '@angular/core';
import { MessagesComponent } from './messages/feature/messages.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [MessagesComponent, RouterOutlet, RouterLink],
})
export class AppComponent {
  title = 'Tour of Heroes';
}
