import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { MapDevice } from '../../models/map-device';

import * as fromMap from '../../reducers';
import * as fromMapDevices from '../../actions/map-devices';
import * as fromConnection from '../../actions/new-connection.action';

@Component({
  selector: 'ft-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoogleMapComponent implements OnInit {
  connections$: Observable<any>;

  newDevice = [];

  deviceNew = {
    name: '',
    description: ''
  };

  constructor(
    private store: Store<fromMap.AppState>
  ) {
    this.connections$ = this.store.select(fromMap.getConnection);
  }

  ngOnInit() {
  }

  /**
   * Simulating a drop new marker event
   * 
   * @param  $event Google Map click event data
   */
  createMarker($event: any) {
    this.newDevice = [];
    this.deviceNew = {  
      name: '',
      description: ''
    };
    
    this.newDevice.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng
    });
  }

  /**
   * Saves the marker to database
   * 
   * @param lat Click event lat
   * @param lng Click event lng
   */
  saveMarker(lat, lng) {
    const formData = Object.assign({}, this.deviceNew, { 
      latitude: lat, 
      longitude: lng 
    });
    
    this.store.dispatch(new fromMapDevices.AddNewMapDevice(formData));
    
    this.deviceNew = {
      name: '',
      description: ''
    };
    this.newDevice = [];
  }

  onMapClick($event) {
    const plot = {
      latitude: $event.coords.lat,
      longitude: $event.coords.lng
    };
    this.store.dispatch(new fromConnection.AddPlotToConnection(plot));
  }
}
