import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatInput } from '@angular/material/input';
import { MatHeaderCell } from '@angular/material/table';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from 'src/app/material/material.module';

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have input field with place holder which contains: Search country', () => {
    let inputDe = fixture.debugElement.query(By.directive(MatInput));
    expect(inputDe.attributes['placeholder']).toContain('Search country');
  });

  it('should call doFilter function when keyup event raised in mat-input field', async(() => {
    let spy = spyOn(component, 'doFilter');
    let inputDe = fixture.debugElement.query(By.directive(MatInput));
    inputDe.nativeElement.dispatchEvent(new Event('keyup'));

    fixture.whenStable().then(() => {
      expect(spy).toHaveBeenCalled();
    });
  }));

  it('should call onScroll if user has scrolled on table', async(() => {
    let spy = spyOn(component, 'onScroll');
    let tableDe = fixture.debugElement.query(By.css('.table-container'));
    tableDe.nativeElement.dispatchEvent(new Event('scroll'));

    fixture.whenStable().then(() => {
      expect(spy).toHaveBeenCalled();
    });
  }));

  it('should have table header: Location', () => {
    let headerEls = fixture.debugElement.queryAll(By.directive(MatHeaderCell));
    let index = headerEls.findIndex(de => de.nativeElement.innerText == 'Location');

    expect(index).toBeGreaterThan(-1);
  })

  it('should have table header: City', () => {
    let headerEls = fixture.debugElement.queryAll(By.directive(MatHeaderCell));
    let index = headerEls.findIndex(de => de.nativeElement.innerText == 'City');

    expect(index).toBeGreaterThan(-1);
  })

  it('should have table header: Country', () => {
    let headerEls = fixture.debugElement.queryAll(By.directive(MatHeaderCell));
    let index = headerEls.findIndex(de => de.nativeElement.innerText == 'Country');

    expect(index).toBeGreaterThan(-1);
  })

  it('should have table header: Value', () => {
    let headerEls = fixture.debugElement.queryAll(By.directive(MatHeaderCell));
    let index = headerEls.findIndex(de => de.nativeElement.innerText == 'Value');

    expect(index).toBeGreaterThan(-1);
  })

  it('should have table header: Parameter', () => {
    let headerEls = fixture.debugElement.queryAll(By.directive(MatHeaderCell));
    let index = headerEls.findIndex(de => de.nativeElement.innerText == 'Parameter');

    expect(index).toBeGreaterThan(-1);
  })

  it('should have table header: Date and Time', () => {
    let headerEls = fixture.debugElement.queryAll(By.directive(MatHeaderCell));
    let index = headerEls.findIndex(de => de.nativeElement.innerText == 'Date and Time');

    expect(index).toBeGreaterThan(-1);
  })

  it('should have table header: Coordinates (Latitude, Longtitude)', () => {
    let headerEls = fixture.debugElement.queryAll(By.directive(MatHeaderCell));
    let index = headerEls.findIndex(de => de.nativeElement.innerText == 'Coordinates (Latitude, Longtitude)');

    expect(index).toBeGreaterThan(-1);
  })
});
