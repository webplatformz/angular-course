import { TestBed } from '@angular/core/testing';
import { HeroDetailComponent } from './hero-detail.component';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { RouterTestingHarness } from '@angular/router/testing';
import { provideRouter } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import objectContaining = jasmine.objectContaining;

describe('HeroDetailComponent with Harness', () => {
  let harness: RouterTestingHarness;
  let subject: HeroDetailComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ReactiveFormsModule, HeroDetailComponent],
    providers: [provideRouter([{ path: 'heroes/:id', component: HeroDetailComponent }]), provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
  });

  beforeEach(async () => {
    harness = await RouterTestingHarness.create();
    subject = await harness.navigateByUrl('heroes/1337', HeroDetailComponent);
    harness.detectChanges();
  });

  beforeEach(async () => {
    await TestBed.inject(HttpTestingController)
      .expectOne('api/heroes/1337')
      .flush({ id: 1337, name: 'foo', description: 'bar' });
    harness.detectChanges();
  });

  afterEach(() => {
    TestBed.inject(HttpTestingController).verify();
  });

  function query<T>(selector: string): T {
    return harness.routeNativeElement!.querySelector(selector)! as T;
  }

  it('displays hero name', () => {
    const el: HTMLHeadingElement = query('h2');
    expect(el.textContent).toEqual('FOO Details');
  });

  it('populates form', () => {
    expect(subject.heroForm.controls.name.value).toEqual('foo');
    expect(subject.heroForm.controls.description.value).toEqual('bar');
  });

  it('validates form input', () => {
    subject.heroForm.controls.name.setValue('');
    expect(subject.heroForm.controls.name.valid).toBeFalse();
    expect(subject.heroForm.valid).toBeFalse();
  });

  it('saves hero with submitted form input', async () => {
    // update name in form
    const name: HTMLInputElement = query('#hero-name');
    name.value = 'baz'; // set input value
    name.dispatchEvent(new Event('input')); // tell Angular

    // update description in form
    const description: HTMLInputElement = query('#hero-description');
    description.value = 'bam'; // set input value
    description.dispatchEvent(new Event('input')); // tell Angular

    // submit form
    const submit: HTMLButtonElement = harness.routeNativeElement!.querySelector('#save-hero-button')!;
    submit.click();

    const req = TestBed.inject(HttpTestingController).expectOne({ method: 'PUT', url: 'api/heroes/1337' });
    expect(req.request.body).toEqual(objectContaining({ name: 'baz', description: 'bam' }));
  });
});
