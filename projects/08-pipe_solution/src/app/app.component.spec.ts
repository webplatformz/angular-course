import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../../../06-interceptor_solution/src/app/app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import SpyObj = jasmine.SpyObj;
import createSpyObj = jasmine.createSpyObj;
import { FeatureService } from './feature-toggle/feature.service';
import { IsFeatureOnDirective } from './feature-toggle/is-feature-on.directive';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', function () {
  let fixture: ComponentFixture<AppComponent>;
  let featureServiceSpy: SpyObj<FeatureService>;

  beforeEach(() => {
    featureServiceSpy = createSpyObj(FeatureService, ['isEnabled']);
    fixture = TestBed.configureTestingModule({
      imports: [AppComponent, IsFeatureOnDirective, RouterTestingModule.withRoutes([])],
      providers: [{ provide: FeatureService, useValue: featureServiceSpy }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).createComponent(AppComponent);
  });

  it('shows messages if feature toggle is active', () => {
    featureServiceSpy.isEnabled.and.returnValue(true);

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('app-messages')).not.toBeNull();
  });

  it('hides messages if feature toggle is disabled', () => {
    featureServiceSpy.isEnabled.and.returnValue(false);

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('app-messages')).toBeNull();
  });
});
