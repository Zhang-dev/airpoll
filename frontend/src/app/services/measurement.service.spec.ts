import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { async } from 'rxjs';
import { Measurement } from '../_interfaces/measurement.model';

import { MeasurementService } from './measurement.service';

describe('MeasurementService', () => {
  let service: MeasurementService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MeasurementService]
    });
    service = TestBed.inject(MeasurementService);
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('getAllMeasurements should get all measurements from database', () => {
    let dummyMeasurement = {
      city: 'Bern',
      country: 'Schweiz',
      location: 'Berg',
      parameter: 'pm',
      unit: 'mm',
      value: 0,
      coordinates: { latitude: 59.362291, longitude: 59.362291 },
      date: null
    };
    let allMeasurements = new Array<Measurement>();

    for (let index = 0; index < 30; index++) {
      allMeasurements.push(dummyMeasurement);
    }

    service.getMeasurements().subscribe(measurements => {
      expect(measurements).toEqual(allMeasurements)
    });

    let req = httpMock.expectOne('http://localhost:9000/api/measurements');

    req.flush(allMeasurements);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
