import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateTestComponent } from '../create-test/create-test.component';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss']
})
export class TestListComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    // get all test data
  }

  createTest() {
    // open dialog to create test
    const dialogRef = this.dialog.open(CreateTestComponent, {
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // refresh test data
    });
  }

}
