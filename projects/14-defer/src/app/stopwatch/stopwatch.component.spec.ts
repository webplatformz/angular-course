import { ComponentFixture, discardPeriodicTasks, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { StopwatchComponent } from './stopwatch.component';

describe('StopwatchComponent', () => {
  let component: StopwatchComponent;
  let fixture: ComponentFixture<StopwatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StopwatchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StopwatchComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update elapsedTime according to elapsed seconds', fakeAsync(() => {
    fixture.detectChanges();
    expect(component.elapsedTime()).toBe(0);

    tick(6000);
    fixture.detectChanges();
    expect(component.elapsedTime()).toBe(5);

    discardPeriodicTasks();
  }));
});
