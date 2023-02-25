import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { HeroService } from 'src/app/hero.service';
import { HEROES } from 'src/app/mock-heroes';
import { HeroSearchComponent } from 'src/app/search/feature/hero-search/hero-search.component';
import { DashboardComponent } from '../ui/dashboard.component';
import { HeroDashboardComponent } from './hero-dashboard.component';

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
