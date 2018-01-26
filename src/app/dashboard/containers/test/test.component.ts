import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'ft-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { 
    this.dialog.open(TestDialogComponent, {
      height: '100px',
      width: '800px'
    });
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'ft-test-dialog',
  template: `Test dialog`
})
export class TestDialogComponent{
  constructor(
    public dialogRef: MatDialogRef<TestDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
}
