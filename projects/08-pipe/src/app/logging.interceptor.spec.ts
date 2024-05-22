import { loggingInterceptor } from './logging.interceptor';
import { Observable, of } from 'rxjs';
import { HttpEvent, HttpEventType, HttpRequest } from '@angular/common/http';
import stringMatching = jasmine.stringMatching;

describe('loggingInteceptor (unit)', () => {
  it('logs request and response information', done => {
    spyOn(window.console, 'log');

    loggingInterceptor(
      { url: 'heroes.com', method: 'GET' } as HttpRequest<unknown>,
      () => of({ type: HttpEventType.Response, status: 200, statusText: 'OK' }) as Observable<HttpEvent<unknown>>,
    ).subscribe(event => {
      expect(window.console.log).toHaveBeenCalledWith(stringMatching(/GET heroes.com: 200: \d+ ms/));

      done();
    });
  });
});
