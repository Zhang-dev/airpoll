import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MeasurementService } from 'src/app/services/measurement.service';
import { Measurement } from 'src/app/_interfaces/measurement.model';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-measurement',
  templateUrl: './measurement.component.html',
  styleUrls: ['./measurement.component.css']
})
export class MeasurementComponent implements OnInit, AfterViewInit {

  measurements: Measurement[];

  public displayedColumns = ['location', 'city', 'country', 'parameter', 'pollution', 'coordinates', 'date'];
  public dataSource = new MatTableDataSource<Measurement>();

  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: MeasurementService) { }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getTableData();
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  public getTableData = () => {
    this.service.getMeasurements()
      .subscribe(response => {
        this.dataSource.data = response["results"] as Measurement[];
        console.log(this.dataSource.data);
      })
  }

}
