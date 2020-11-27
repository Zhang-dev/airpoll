import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {
  private url = "https://api.openaq.org/v1/measurements"

  constructor(private http: HttpClient) { }

  getMeasurements(){
    return this.http.get(this.url);
  }
}
