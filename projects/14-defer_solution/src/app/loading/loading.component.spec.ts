import { ComponentFixture, DeferBlockFixture, DeferBlockState, TestBed } from '@angular/core/testing';

import { LoadingComponent } from './loading.component';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initially render only one stopwatch', async () => {
    const stopwatchElements = fixture.nativeElement.querySelectorAll('app-stopwatch');
    expect(stopwatchElements.length).toBe(1);
  });

  it('should render the second stopwatch after defer block is loaded', async () => {
    const deferBlockFixture: DeferBlockFixture = (await fixture.getDeferBlocks())[0];
    await deferBlockFixture.render(DeferBlockState.Complete);

    const stopwatchElements = fixture.nativeElement.querySelectorAll('app-stopwatch');
    expect(stopwatchElements.length).toBe(2);
  });
});
