import { Component } from '@angular/core';
import { MessagesComponent } from './messages/messages.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IsFeatureOnDirective } from './feature-toggle/is-feature-on.directive';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [RouterLink, RouterOutlet, MessagesComponent, IsFeatureOnDirective]
})
export class AppComponent {
  title = 'Tour of Heroes';
}
