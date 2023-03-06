import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import stringMatching = jasmine.stringMatching;
import { LoggingInterceptor } from './logging.interceptor';

describe('LoggingInterceptor', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('logs request and response information', done => {
    spyOn(window.console, 'log');

    httpClient.get('api/foo').subscribe(() => {
      expect(window.console.log).toHaveBeenCalledWith(
        stringMatching(/GET request to api\/foo resulted in a OK \(200\) response after \d+ ms/)
      );
      done();
    });

    const req = httpTestingController.expectOne('api/foo');
    req.flush({});
  });
});
