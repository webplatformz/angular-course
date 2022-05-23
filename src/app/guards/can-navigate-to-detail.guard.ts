import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CanNavigateToDetailGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): boolean {
    return this.skipGuards()
      ? true
      : window.confirm('With power comes responsibility. Do you like to enter the detail area?');
  }

  private skipGuards(): boolean | undefined {
    const navigation = this.router.getCurrentNavigation();
    return navigation?.extras?.state?.['skipGuards'];
  }
}
