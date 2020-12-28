import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { MeasurementService } from './measurement.service';

describe('MeasurementService', () => {
  let service: MeasurementService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(MeasurementService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
