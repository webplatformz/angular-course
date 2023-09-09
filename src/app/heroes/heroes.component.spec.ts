import { HeroesComponent } from './heroes.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroService } from '../hero.service';
import { of } from 'rxjs';
import { HEROES } from '../mock-heroes';
import { Classification } from '../hero';
import SpyObj = jasmine.SpyObj;

describe(HeroesComponent.name, () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let heroService: SpyObj<HeroService>;

  beforeEach(async () => {
    heroService = jasmine.createSpyObj('HeroService', ['getHeroes', 'addHero', 'deleteHero']);
    heroService.getHeroes.and.returnValue(of(HEROES));
    TestBed.configureTestingModule({
      declarations: [HeroesComponent],
      providers: [{ provide: HeroService, useValue: heroService }],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('initializes', () => {
    expect(component).toBeTruthy();
  });

  it('adds and removes hero', () => {
    heroService.addHero.and.returnValue(of({ id: 123, name: 'foo', classification: Classification.PUBLIC }));
    heroService.deleteHero.and.returnValue(of());

    component.add('foo');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('li').length).toEqual(11);

    component.delete(HEROES[0]);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('li').length).toEqual(10);
  });

  it('filters heroes by name', () => {
    component.nameFilterChanged('ma');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('li').length).toEqual(4);
  });

  it('filters heroes by classification', () => {
    component.classificationFilterChanged('restricted');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('li').length).toEqual(2);
  });
});
