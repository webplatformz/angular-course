import { TestBed } from '@angular/core/testing';

import { CanNavigateToDetailGuard } from './can-navigate-to-detail.guard';

describe('CanNavigateToDetailGuard', () => {
  let guard: CanNavigateToDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanNavigateToDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('navigation allowed if dialog window confirmed', () => {
    spyOn(window, 'confirm').and.returnValue(true);

    const result = guard.canActivate();

    expect(result).toBeTrue();
  });

  it('navigation declined if dialog window not confirmed', () => {
    spyOn(window, 'confirm').and.returnValue(false);

    const result = guard.canActivate();

    expect(result).toBeFalse();
  });
});
