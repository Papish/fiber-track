import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ft-map-device-dialog',
  templateUrl: './map-device-dialog.component.html',
  styleUrls: ['./map-device-dialog.component.scss']
})
export class MapDeviceDialogComponent implements OnInit {
  isLinear = true;
  
  fibers = [];
  userSelected = {
    fiberId: 0
  };
  selectedFiberCores = [];
  constructor(
    public dialogRef: MatDialogRef<MapDeviceDialogComponent>,
    private _formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.fibers = [
      {
        id: 1,
        name: 'Tulima core - 18',
        cores: [
          {
            id: 1,
            hexcode: "#FFFFFF",
            color: "White"
          },
          {
            id: 2,
            hexcode: "#000000",
            color: "Black"
          }
        ]
      },
      {
        id: 2,
        name: 'Tulima core - 32',
        cores: [
          {
            id: 1,
            hexcode: "#808080",
            color: "Red"
          },
          {
            id: 2,
            hexcode: "#909090",
            color: "Violet"
          }
        ]
      }
    ]
  }

  fiberSelected(data) {
    const selectedFiberId = data;

    const x = this.fibers.findIndex(fiber => fiber.id === selectedFiberId);
    console.log(this.fibers[x]);
    this.selectedFiberCores = this.fibers[x].cores;
  }

  extendConn(): void {
    this.dialogRef.close();
  }
}
