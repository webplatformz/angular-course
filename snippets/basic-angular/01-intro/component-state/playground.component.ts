import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

  template: ` {{ title }}`,
})
export class PlaygroundComponent {
  title = 'test';
}
