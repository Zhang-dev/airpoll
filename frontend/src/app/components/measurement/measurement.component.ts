import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MeasurementService } from 'src/app/services/measurement.service';
import { Measurement } from 'src/app/_interfaces/measurement.model';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-measurement',
  templateUrl: './measurement.component.html',
  styleUrls: ['./measurement.component.css']
})
export class MeasurementComponent implements OnInit, AfterViewInit {

  public displayedColumns = ['location', 'city', 'country', 'parameter', 'pollution', 'coordinates', 'date'];
  public dataSource = new MatTableDataSource<Measurement>();
  allMeasurements: Measurement[];
  displayedMeasurements: Measurement[];
  displayedNum: number = 20;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: MeasurementService) { }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getAllMeasurements(this.displayedNum);
  }

  onScroll(e) {
    let scrollTop = e.target.scrollTop;
    let scrollHeight = e.target.scrollHeight;
    let clientHeight = e.target.clientHeight;
    if ((scrollTop + clientHeight) / scrollHeight > 0.99) {
      this.displayMoreData();
    }
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  public getAllMeasurements = (initNumber) => {
    this.service.getMeasurements()
      .subscribe(response => {
        this.allMeasurements = (response as Measurement[]);
        this.displayedMeasurements = this.allMeasurements.slice(0, initNumber);
        this.dataSource.data = this.displayedMeasurements;
      })
  }

  displayMoreData() {
    if(this.displayedNum < this.allMeasurements.length){
      let newMeasurements = this.allMeasurements.slice(this.displayedNum, this.displayedNum + 5);
      this.displayedMeasurements = this.displayedMeasurements.concat(newMeasurements);
      this.dataSource.data = this.displayedMeasurements;
      this.displayedNum += 5;
    }
  }

}
