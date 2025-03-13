import { TestBed } from '@angular/core/testing';
import { HeroDetailComponent } from './hero-detail.component';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

describe('HeroDetailComponent', () => {
  let subject: HeroDetailComponent;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [RouterTestingModule, HeroDetailComponent],
    providers: [{ provide: ActivatedRoute, useValue: { snapshot: { paramMap: convertToParamMap({ id: 1337 }) } } }, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});

    const fixture = TestBed.createComponent(HeroDetailComponent);
    subject = fixture.componentInstance;

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('gets hero and logs selected hero', () => {
    const consoleSpy = spyOn(console, 'log');

    subject.getHero();

    expect(consoleSpy).toHaveBeenCalledWith('Selected heroes id is 1337');
    const req = httpTestingController.expectOne('api/heroes/1337');
    expect(req.request.method).toEqual('GET');
    req.flush({ id: 1337, name: 'foo' });
  });
});
