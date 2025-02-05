import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopwatchComponent } from './stopwatch.component';

describe('StopwatchComponent', () => {
  let component: StopwatchComponent;
  let fixture: ComponentFixture<StopwatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StopwatchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StopwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
