import { LoggingInterceptor } from './logging.interceptor';
import { HttpEvent, HttpEventType, HttpRequest, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import stringMatching = jasmine.stringMatching;

describe('LoggingInterceptor', () => {
  it('should log request and response information', () => {
    spyOn(window.console, 'log');
    const interceptor: LoggingInterceptor = new LoggingInterceptor();
    interceptor
      .intercept({ url: 'url', method: 'GET' } as HttpRequest<any>, {
        handle: () =>
          of({ type: HttpEventType.Response, status: 200, statusText: 'OK' } as HttpEvent<HttpResponse<any>>),
      })
      .subscribe(() => {
        expect(window.console.log).toHaveBeenCalledWith(
          stringMatching(/GET request to url resulted in a OK \(200\) response after \d+ ms/)
        );
      });
  });
});
