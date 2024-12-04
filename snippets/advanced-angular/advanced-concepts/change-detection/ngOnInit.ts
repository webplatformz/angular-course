import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';

@Component({ selector: 'app-my-cmp', template: '', standalone: true })
class MyComponent implements OnInit {
  @Input() data: Data | undefined;
  constructor() {
    console.log(this.data); // undefined
  }
  ngOnInit() {
    console.log(this.data); // { name: 'Example', id: 1 }
  }
}
