import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { loggingInterceptor } from './logging.interceptor';
import stringMatching = jasmine.stringMatching;

describe('loggingInteceptor (integration)', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(withInterceptors([loggingInterceptor])), provideHttpClientTesting()],
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
      expect(window.console.log).toHaveBeenCalledWith(stringMatching(/GET api\/foo: 200: \d+ ms/));
      done();
    });

    const req = httpTestingController.expectOne('api/foo');
    req.flush({});
  });
});
