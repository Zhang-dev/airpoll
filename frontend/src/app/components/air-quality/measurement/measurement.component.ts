import { Component, OnInit } from '@angular/core';
import { MeasurementService } from 'src/app/services/measurement.service';

@Component({
  selector: 'app-measurement',
  templateUrl: './measurement.component.html',
  styleUrls: ['./measurement.component.css']
})
export class MeasurementComponent implements OnInit {

  measurements: any[];

  constructor(private service: MeasurementService) { }

  ngOnInit(): void {
    this.service.getMeasurements()
    .subscribe(response =>{
      this.measurements = response["results"]
      console.log(this.measurements);
    })
  }

}
