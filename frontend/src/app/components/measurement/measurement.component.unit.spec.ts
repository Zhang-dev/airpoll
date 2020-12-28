import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoordinatesModule } from 'angular-coordinates';
import { AngularMaterialModule } from 'src/app/material/material.module';
import { Measurement } from 'src/app/_interfaces/measurement.model';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import { MeasurementComponent } from './measurement.component';
import { MeasurementService } from 'src/app/services/measurement.service';

describe('MeasurementComponent', () => {
  let component: MeasurementComponent;
  let fixture: ComponentFixture<MeasurementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MeasurementComponent],
      imports: [AngularMaterialModule, BrowserAnimationsModule, CoordinatesModule
      ],
      providers: [{ provide: MeasurementService, useClass: MeasurementServiceStub }]

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
    component.displayedNum = 20;

    component.displayMoreData();

    expect(component.displayedNum).toBe(25);
  });

  it('displayMoreData should not display more data if all data are displayed', () => {
    component.displayedNum = 40;

    component.displayMoreData();

    expect(component.displayedNum).toBe(40);
  });
});

class MeasurementServiceStub {
  getMeasurements() {
    let dummyMeasurement = {
      city: null,
      country: null,
      location: null,
      parameter: null,
      unit: null,
      value: null,
      coordinates: { latitude: 59.362291, longitude: 59.362291 },
      date: null
    };
    let allMeasurements = new Array<Measurement>();

    for (let index = 0; index < 30; index++) {
      allMeasurements.push(dummyMeasurement);
    }

    return Observable.of(allMeasurements);
  }
}
