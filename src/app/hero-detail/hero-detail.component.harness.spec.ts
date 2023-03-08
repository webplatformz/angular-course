import { TestBed } from '@angular/core/testing';
import { HeroDetailComponent } from './hero-detail.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingHarness } from '@angular/router/testing';
import { provideRouter } from '@angular/router';
import { FormsModule } from '@angular/forms';

describe('HeroDetailComponent with Harness', () => {
  let harness: RouterTestingHarness;
  let subject: HeroDetailComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule],
      providers: [provideRouter([{ path: 'heroes/:id', component: HeroDetailComponent }])],
      declarations: [HeroDetailComponent],
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
    const name: HTMLInputElement = query('#hero-name');
    expect(name.value).toEqual('foo');

    const description: HTMLInputElement = query('#hero-description');
    expect(description.value).toEqual('bar');
  });

  it('saves hero with submitted form input', async () => {
    // update name in form
    const name: HTMLInputElement = query('#hero-name');
    name.value = 'baz'; // set input value
    name.dispatchEvent(new Event('input')); // tell Angular
    expect(subject.hero?.name).toEqual('baz');

    // update description in form
    const description: HTMLInputElement = query('#hero-description');
    description.value = 'bam'; // set input value
    description.dispatchEvent(new Event('input')); // tell Angular
    expect(subject.hero?.description).toEqual('bam');

    // submit form
    const submit: HTMLButtonElement = harness.routeNativeElement!.querySelector('#save-hero-button')!;
    submit.click();
    TestBed.inject(HttpTestingController).expectOne({ method: 'PUT', url: 'api/heroes/1337' });
  });
});
