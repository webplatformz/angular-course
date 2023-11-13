import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { HeroService } from './hero.service';
import { map } from 'rxjs/operators';
import { Classification } from './hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroClassificationGuard implements CanActivate {
  constructor(
    private heroService: HeroService,
    private messageService: MessageService,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const id = parseInt(route.paramMap.get('id')!, 10);
    return this.heroService.getHero(id).pipe(
      tap(() => this.log(`Checking access to hero ${id}`)),
      map(hero => hero.classification === Classification.PUBLIC),
    );
  }

  private log(message: string) {
    this.messageService.add(`HeroClassificationGuard: ${message}`);
  }
}
