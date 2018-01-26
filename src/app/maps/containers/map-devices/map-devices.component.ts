import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { MatDialog } from '@angular/material';

import { MapDeviceDialogComponent } from '../map-device-dialog/map-device-dialog.component';

import { MapDevice } from '../../models/map-device';
import * as fromMap from '../../reducers';
import * as fromMapDevices from '../../actions/map-devices';

@Component({
  selector: 'ft-map-devices',
  templateUrl: './map-devices.component.html',
  styleUrls: ['./map-devices.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapDevicesComponent implements OnInit {
  devices$: Observable<MapDevice[]>;

  constructor(
    public dialog: MatDialog,
    private store: Store<fromMap.AppState>,
  ) { 
    this.devices$ = store.select(fromMap.getMapDevices);
  }

  ngOnInit() {
    this.store.dispatch(new fromMapDevices.FetchMapDevice({}));
  }

  openPanel() {
    let dialogRef = this.dialog.open(MapDeviceDialogComponent, {
      width: '900px',
      data: {}
    });

    // dialogRef.afterClosed().subscribe(() => console.log('closed'));
  }
}
