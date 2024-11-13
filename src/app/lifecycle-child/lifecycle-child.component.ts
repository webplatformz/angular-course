/* eslint-disable prettier/prettier */
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-child',
  template: `
    <p>Title: {{ title }}</p>
    <p>user.name: {{ user.name }}</p>
  `,
})
export class LifecycleChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {
  @Input() title = '';
  @Input() user: User = { name: '' };
  @Output() msg = new EventEmitter<string>();
  msgBuffer: string = "";

  constructor() {
    this.msgBuffer = this.creatCustomMsg('[1] Constructor executed');
  }

  ngOnInit(): void {
    this.sendLogs('[2] ngOnInit executed')  
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.sendLogs('[3] ngOnChanges executed')  
  }
  ngDoCheck(): void {
    this.sendLogs('[4] ngDoCheck executed')  
  }
  ngAfterContentInit(): void {
    this.sendLogs('[5] ngAfterContentInit executed')  
  }
  ngAfterContentChecked(): void {
    this.sendLogs('[6] ngAfterContentChecked executed')  
  }
  ngAfterViewInit(): void {
    this.sendLogs('[7] ngAfterViewInit executed')  
  }
  ngAfterViewChecked(): void {
    this.sendLogs('[8] ngAfterViewChecked executed')  
  }
  ngOnDestroy(): void {
    this.sendLogs('[9] ngOnDestroy executed')  
  }

  getTimestamp(): string {
    const date: Date = new Date();
    return date.toLocaleTimeString()+ "." +date.getMilliseconds();
  }

  sendLogs(logMsg: string) {
    if(this.msgBuffer) {
      this.msg.emit(this.msgBuffer);
      this.msgBuffer = "";
    }
    const customMsg: string = this.creatCustomMsg(logMsg);
    this.msg.emit(customMsg);
    console.log(logMsg);
  }

  creatCustomMsg(msg: string): string {
    return `${this.getTimestamp()} ${msg}`;
  }
  
}

