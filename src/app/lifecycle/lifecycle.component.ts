/* eslint-disable prettier/prettier */
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav>
      <button (click)="onClick()"> Toggle Visibility </button>
    </nav>
    <br><br>
    <div>
      <label for="title">title: </label>
      <input id="title" [(ngModel)]="title" />
    </div>
    <div>
      <label for="title">user.name: </label>
      <input id="user.name" [(ngModel)]="user.name" />
    </div>
    <app-child *ngIf="toggleChild" [title]="title" [user]="user" (msg)="onMsgRecieved($event)"></app-child>
    <hr>
    <div *ngFor="let msg of msgHistory">
      <p> {{ msg }} </p>
    </div>
  `,
})
export class LifecycleComponent {
  toggleChild: boolean = true;
  msgHistory: string[] = [];
  title = 'Lifecycle';
  user: User = { name: 'Zuehlke' };

  onClick() {
    this.toggleChild = !this.toggleChild;
  }

  onMsgRecieved($event: string) {
    this.msgHistory = [$event, ...this.msgHistory];
  }
}
