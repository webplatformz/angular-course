import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CanNavigateToDetailGuard implements CanActivate {
  canActivate(): boolean {
    return window.confirm('With power comes responsibility. Do you like to enter the detail area?');
  }
}
