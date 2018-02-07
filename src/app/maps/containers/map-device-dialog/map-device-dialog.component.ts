import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

// import { DevicesService } from '../../services/devices.service';

import * as fromMap from '../../reducers';

declare const google: any;

@Component({
  selector: 'ft-map-device-dialog',
  templateUrl: './map-device-dialog.component.html',
  styleUrls: ['./map-device-dialog.component.scss']
})

export class MapDeviceDialogComponent implements OnInit {
  selectedFiberCores$: Observable<any>;
  deviceOnePort;
  selectedCoreId;
  newFiber = [];
  addCount = 0;
  selectedFiberId: number = null;

  constructor(
    public store: Store<fromMap.AppState>,
    // public devices: DevicesService,
    public dialogRef: MatDialogRef<MapDeviceDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public data: any
  ) { 
    // The injected data are two devices id of connection selected
    // First we fetch the data of first selected device, data includes its ports number
    
    // devices.getDeviceDetailById(data.deviceOneId).subscribe(data => {
    //   const tempArr = [];
    //   tempArr.length = data.out_port;
    //   this.deviceOnePort = tempArr;
    // });
  }

  ngOnInit() {
  }

  // /**
  //  * Add selected fiber to new fiber array
  //  * This is not saved and used to select core for making
  //  * new connection
  //  * 
  //  */
  // fiberAdd(fiber) {
  //   if (this.addCount !== 0) {
  //     return;
  //   }
  //   this.newFiber.push(fiber);
  //   this.addCount += 1;
  // }

  // /**
  //  * Set selected id for connection fiber 
  //  *
  //  */
  // selectedFiber(id) {
  //   this.selectedFiberId = id;

  //   // Get fiber core details when user select a fiber
  //   this.selectedFiberCores$ = this.fibers.getFiberCoreList(id);
  // }

  // saveConn() {
  //   const connectionDetails = {
  //     device_one_id: this.data.deviceOneId,
  //     device_two_id: this.data.deviceTwoId,
  //     fiber_id: this.selectedFiberId,
  //     core_id: this.selectedCoreId
  //   };

  //   console.log(connectionDetails);
  //   // this.store.dispatch(new fromConnection.NewDeviceConnectionComplete());
  //   // this.dialogRef.close();
  // }
}
