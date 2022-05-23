import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, shareReplay, tap } from 'rxjs';
import { Config } from '../config';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
// TODO: Could be splitted to ConfigResolverService and ConfigService in refactoring
export class ConfigResolverService implements Resolve<Config> {
  private configUrl = 'api/config';
  private config$!: Observable<Config>;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient, private messageService: MessageService) {}

  /** GET config from the server */
  resolve(): Observable<Config> {
    if (!this.config$) {
      this.config$ = this.http.get<Config>(this.configUrl).pipe(
        tap(_ => this.log('fetched config from server')),
        shareReplay()
      );
    }
    return this.config$;
  }

  /** Log a HeroService message with the MessageService */
  // TODO: Dulicate, remove in refactoring
  private log(message: string) {
    this.messageService.add(`ConfigResolverService: ${message}`);
  }
}
