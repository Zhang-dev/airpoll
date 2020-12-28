import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from 'src/app/material/material.module';
import { Measurement } from 'src/app/_interfaces/measurement.model';

import { MeasurementComponent } from './measurement.component';

describe('MeasurementComponent', () => {
  let component: MeasurementComponent;
  let fixture: ComponentFixture<MeasurementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MeasurementComponent],
      imports: [HttpClientModule, AngularMaterialModule, BrowserAnimationsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('doFilter should set filter with given value', () => {
    let filter = "Country"
    component.doFilter(filter)

    expect(component.dataSource.filter).toBe('country');
  });

  it('onScroll should call displayMoreData if table is scrolled to the bottom', async(() => {
    let spy = spyOn(component, 'displayMoreData');
    let scrollEvent = { target: { scrollTop: 50, scrollHeight: 100, clientHeight: 50 } }
    component.onScroll(scrollEvent);

    fixture.whenStable().then(() => {
      expect(spy).toHaveBeenCalled();
    });
  }));

  it('onScroll should NOT call displayMoreData if table is NOT scrolled to the bottom', async(() => {
    let spy = spyOn(component, 'displayMoreData');
    let scrollEvent = { target: { scrollTop: 50, scrollHeight: 100, clientHeight: 40 } }
    component.onScroll(scrollEvent);

    fixture.whenStable().then(() => {
      expect(spy).not.toHaveBeenCalled();
    });
  }));

  it('displayMoreData should display 5 more data if current data are less than all data', () => {
    let dummyMeasurement = {city: null,
    country: null,
    location: null,
    parameter: null,
    unit: null,
    value: null,
    coordinates: {latitude:59.362291,longitude:59.362291},
    date: null};
    component.displayedNum = 1;
    component.displayedMeasurements = new Array<Measurement>();
    component.displayedMeasurements.push(dummyMeasurement)
    component.allMeasurements = new Array<Measurement>();
    for (let index = 0; index < 10; index++) {
      component.allMeasurements.push(dummyMeasurement);
    }

    component.displayMoreData();

    expect(component.displayedNum).toBe(6);
  });

  it('displayMoreData should not display more data if all data are displayed', () => {
    let dummyMeasurement = {city: null,
    country: null,
    location: null,
    parameter: null,
    unit: null,
    value: null,
    coordinates: {latitude:59.362291,longitude:59.362291},
    date: null};
    component.displayedNum = 10;
    component.allMeasurements = new Array<Measurement>();
    for (let index = 0; index < 10; index++) {
      component.allMeasurements.push(dummyMeasurement);
    }
    
    component.displayMoreData();

    expect(component.displayedNum).toBe(10);
  });
});
