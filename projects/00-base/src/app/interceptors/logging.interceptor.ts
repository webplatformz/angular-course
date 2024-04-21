import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const start: number = Date.now();
    return next.handle(request).pipe(
      tap(response => {
        if (response.type === HttpEventType.Response) {
          this.logStats(request, response, start);
        }
      }),
    );
  }

  private logStats({ method, url }: HttpRequest<unknown>, { status, statusText }: HttpResponse<any>, start: number) {
    console.log(
      `${method} request to ${url} resulted in a ${statusText} (${status}) response after ${Date.now() - start} ms`,
    );
  }
}
