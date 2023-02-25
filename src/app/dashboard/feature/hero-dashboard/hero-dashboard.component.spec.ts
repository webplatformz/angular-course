import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { HeroService } from 'src/app/shared/data-access/hero.service';
import { HEROES } from 'src/app/shared/data-access/mock-heroes';
import { HeroSearchComponent } from 'src/app/dashboard/feature/hero-search/hero-search.component';
import { HeroDashboardComponent } from './hero-dashboard.component';
import { DashboardComponent } from '../../ui/dashboard/dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<HeroDashboardComponent>;
  let heroService;
  let getHeroesSpy: jasmine.Spy;

  beforeEach(async () => {
    heroService = jasmine.createSpyObj('HeroService', ['getHeroes']);
    getHeroesSpy = heroService.getHeroes.and.returnValue(of(HEROES));
    return TestBed.configureTestingModule({
      declarations: [DashboardComponent, HeroSearchComponent],
      imports: [RouterTestingModule.withRoutes([])],
      providers: [{ provide: HeroService, useValue: heroService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should call heroService', () => {
    expect(getHeroesSpy.calls.any()).toBe(true);
  });
});
