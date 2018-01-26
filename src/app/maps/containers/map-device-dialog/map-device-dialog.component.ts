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
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<MapDeviceDialogComponent>,
    private _formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
