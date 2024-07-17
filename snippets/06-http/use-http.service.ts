import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UseHttpService {
  private url = 'api/'; // URL to web api

  constructor(private http: HttpClient) {}

  load(): void {
    const url = `${this.url}/info`;
    this.http.get<string>(url).subscribe((info: string) => {
      console.log(info, 'loaded');
    });
  }
}
