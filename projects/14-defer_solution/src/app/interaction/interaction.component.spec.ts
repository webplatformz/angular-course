import { ComponentFixture, DeferBlockFixture, DeferBlockState, TestBed } from '@angular/core/testing';

import { InteractionComponent } from './interaction.component';

describe('InteractionComponent', () => {
  let component: InteractionComponent;
  let fixture: ComponentFixture<InteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InteractionComponent);
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
