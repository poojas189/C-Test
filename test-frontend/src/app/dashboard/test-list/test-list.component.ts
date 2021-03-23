import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Test } from 'src/app/models/test';
import { TestService } from 'src/app/services/test.service';
import { CreateTestComponent } from '../create-test/create-test.component';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss']
})
export class TestListComponent implements OnInit, AfterViewInit {

  averageDuration: number = 0;
  averageResult: number = 0;

  dataSource: MatTableDataSource<Test> = new MatTableDataSource();
  columns = ['name', 'date', 'result', 'duration'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog,
    private testService: TestService) { }


  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    // get all test data
    this.loadTestData();
  }

  loadTestData() {
    this.testService.getAllTests().subscribe(response => {

      this.dataSource.data = response;

      if (response.length) {
        // calculate average duration and result
        this.averageDuration = response.reduce((prev, current) => {
          return prev + current.duration
        }, 0);

        this.averageDuration = this.averageDuration / response.length;

        this.averageResult = response.reduce((prev, current) => {
          return prev + current.result
        }, 0);
        this.averageResult = this.averageResult / response.length;
      }
    }, error => {
      console.log(error);
    });
  }

  createTest() {
    // open dialog to create test
    const dialogRef = this.dialog.open(CreateTestComponent, {
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      // on test create - refresh test data
      this.loadTestData();
    });
  }

}
