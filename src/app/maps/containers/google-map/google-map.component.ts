import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromMap from '../../reducers';
import * as fromMapDevice from '../../reducers/map-device/map-device.action';

@Component({
  selector: 'ft-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoogleMapComponent implements OnInit {
  devices$: Observable<any[]>
  newDevice$: Observable<object[]>;

  constructor(private store: Store<fromMap.AppState>) {
    this.devices$ = store.select(fromMap.getAllMapDevices);
    this.newDevice$ = store.select(fromMap.getNewDrawnDevices);
  }
  
  ngOnInit() {
    this.store.dispatch(new fromMapDevice.FetchAllMapDevice());
  }

  saveDrawnDevice(data) {
    this.store.dispatch(new fromMapDevice.SaveNewMapDevice(data));
  }

  clearDrawnDevice() {
    this.store.dispatch(new fromMapDevice.ClearDrawnMapDevice());
  }

  onMapClick() {
    
  }

  // Simple right click to simulate adding new device marker to map
  // This is not actual code, just used for simulation
  onMapRightClick(event) {
    const data = {
      lat: event.coords.lat,
      lng: event.coords.lng
    };

    this.store.dispatch(new fromMapDevice.AddNewMapDevice(data));
  }
}
