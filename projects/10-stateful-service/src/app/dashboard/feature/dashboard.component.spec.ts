import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { HeroSearchComponent } from '../ui/hero-search/hero-search.component';
import { HeroService } from '../../hero.service';
import { HEROES } from '../../mock-heroes';

import { DashboardComponent } from './dashboard.component';
import { SpacedPipe } from '../ui/heroes-menu/spaced.pipe';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let heroService;
  let getHeroesSpy: jasmine.Spy;

  beforeEach(async () => {
    heroService = jasmine.createSpyObj('HeroService', ['getHeroes']);
    getHeroesSpy = heroService.getHeroes.and.returnValue(of(HEROES));
    return TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), DashboardComponent, HeroSearchComponent, SpacedPipe],
      providers: [{ provide: HeroService, useValue: heroService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Top Heroes" as headline', () => {
    expect(fixture.nativeElement.querySelector('h2').textContent).toEqual('Top Heroes');
  });

  it('should call heroService', () => {
    expect(getHeroesSpy.calls.any()).toBe(true);
  });

  it('should display 4 links', () => {
    expect(fixture.nativeElement.querySelectorAll('a').length).toEqual(4);
  });

  it('should display hero names in uppercase and with spaces', () => {
    expect(fixture.nativeElement.querySelectorAll('a')[0].innerHTML).toEqual(' N A R C O ');
  });
});
