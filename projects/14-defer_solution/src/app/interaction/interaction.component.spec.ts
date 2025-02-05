import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionComponent } from './interaction.component';

describe('InteractionComponent', () => {
  let component: InteractionComponent;
  let fixture: ComponentFixture<InteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
