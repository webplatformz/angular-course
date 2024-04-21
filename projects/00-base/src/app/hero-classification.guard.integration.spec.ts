import { Router } from '@angular/router';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Classification } from './hero';
import { HttpClient } from '@angular/common/http';
import { routes } from './app-routing.module';

describe('HeroClassificationGuard', () => {
  let router: Router;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes(routes)],
    });

    router = TestBed.inject(Router);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('grants access to hero with classification PUBLIC', fakeAsync(() => {
    router.navigateByUrl('detail/1337').then(canNavigate => expect(canNavigate).toBeTrue());
    tick();

    httpTestingController.expectOne('api/heroes/1337').flush({ classification: Classification.PUBLIC });
  }));

  it('denies access to hero with classification CLASSIFIED', fakeAsync(() => {
    router.navigateByUrl('detail/1337').then(canNavigate => expect(canNavigate).toBeFalse());
    tick();

    httpTestingController.expectOne('api/heroes/1337').flush({ classification: Classification.CLASSIFIED });
  }));
});
