import { ActivatedRouteSnapshot, CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { map, tap } from 'rxjs/operators';
import { Classification, Hero } from './hero';

export const heroClassificationGuard: CanActivateFn = route => {
  const heroService = inject(HeroService);
  const messageService = inject(MessageService);

  const id = getHeroId(route);

  return heroService.getHero(id).pipe(
    tap(() => messageService.add(`HeroClassificationGuard: Check access to hero ${id}`)),
    map(hero => isPublicHero(hero)),
  );
};

function isPublicHero(hero: Hero): boolean {
  return hero.classification === Classification.PUBLIC;
}

function getHeroId(route: ActivatedRouteSnapshot) {
  return parseInt(route.paramMap.get('id')!, 10);
}
