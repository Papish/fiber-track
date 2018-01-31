import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { MatSnackBar, MatDialog } from '@angular/material';

import { MapDeviceDialogComponent } from '../map-device-dialog/map-device-dialog.component';

import { MapDevice } from '../../models/map-device';
import * as fromMap from '../../reducers';
import * as fromMapDevices from '../../actions/map-devices';
import * as fromConnection from '../../actions/new-connection.action';

@Component({
  selector: 'ft-map-devices',
  templateUrl: './map-devices.component.html',
  styleUrls: ['./map-devices.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapDevicesComponent implements OnInit {
  devices$: Observable<MapDevice[]>;
  drawing$: Observable<any>;
  conn$: Observable<any>;

  deviceOneId: number = null;

  constructor(
    private store: Store<fromMap.AppState>,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) { 
    this.devices$ = store.select(fromMap.getMapDevices);
    this.drawing$ = store.select(fromMap.getAddConnectionDrawingStatus);
    this.conn$ = store.select(fromMap.getAddConnectionCoreSelectionStatus);
  }

  ngOnInit() {
    this.store.dispatch(new fromMapDevices.FetchMapDevice({}));
  }

  startConnection(id, latitude, longitude) {
    const plot = { 
      latitude, 
      longitude 
    };
    this.deviceOneId = id;
    this.store.dispatch(new fromConnection.NewDeviceConnection(plot));
  }

  endConnection(id, latitude, longitude) {
    const plot = { 
      latitude, 
      longitude
    };

    this.store.dispatch(new fromConnection.EndDeviceConnection(plot));

    let snackBar = this.snackbar.open('Click proceed to continue', 'Procced');
    
    snackBar.onAction().subscribe(() => {
      let dialog = this.dialog.open(MapDeviceDialogComponent, {
        width: "900px",
        data: {
          deviceOneId: this.deviceOneId,
          deviceTwoId: id
        }
      });
    });
  }
}
