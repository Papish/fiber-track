import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { MatSnackBar, MatDialog } from '@angular/material';

import { MapDevice } from '../../models/map-device';

import * as fromMap from '../../reducers';
import * as fromMapDevices from '../../actions/map-devices';
import * as fromConnection from '../../actions/new-connection.action';

import { MapDeviceDialogComponent } from '../map-device-dialog/map-device-dialog.component';

@Component({
  selector: 'ft-map-devices',
  templateUrl: './map-devices.component.html',
  styleUrls: ['./map-devices.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapDevicesComponent implements OnInit {
  devices$: Observable<MapDevice[]>;

  constructor(
    private store: Store<fromMap.AppState>,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) { 
    this.devices$ = store.select(fromMap.getMapDevices);
  }

  ngOnInit() {
    this.store.dispatch(new fromMapDevices.FetchMapDevice({}));
  }

  startConnection(latitude, longitude) {
    const plot = { latitude, longitude };
    this.store.dispatch(new fromConnection.NewDeviceConnection(plot));
  }

  endConnection(latitude, longitude) {
    const plot = { latitude, longitude};
    this.store.dispatch(new fromConnection.EndDeviceConnection(plot));

    let snackBar = this.snackbar.open('Click proceed to continue', 'Procced');
    
    snackBar.onAction().subscribe(() => {
      let dialog = this.dialog.open(MapDeviceDialogComponent, {
        width: "900px"
      });
    });
  }
}
