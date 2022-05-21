import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { CanNavigateToDetailGuard } from './can-navigate-to-detail.guard';

describe('CanNavigateToDetailGuard', () => {
  let guard: CanNavigateToDetailGuard;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [RouterTestingModule] });

    guard = TestBed.inject(CanNavigateToDetailGuard);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('guard skipped if flag set', () => {
    spyOn(router, 'getCurrentNavigation').and.returnValue({ extras: { state: { skipGuards: true } } } as any);

    const result = guard.canActivate();

    expect(result).toBeTrue();
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
