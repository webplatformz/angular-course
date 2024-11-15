import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from '../../projects/00-base/src/app/message.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-observables',
  standalone: true,
  templateUrl: './rxjs-observables-component.html',
  imports: [
    AsyncPipe,
    NgIf
  ]
})

export class RxjsObservablesComponents implements OnInit{

  messages$?: Observable<string[]>;

  constructor(private messageService: MessageService) {}

  ngOnInit() {

    // Manipulate data stream with 'pipe'
    this.messages$ = this.messageService.observableOfMessages()
      .pipe(
        map((received: string[]) => {
          return received.map(message => `Alter message: ${message}`)
        })
      );
  }

}
