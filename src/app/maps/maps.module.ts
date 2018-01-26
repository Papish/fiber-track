import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import {
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule, 
  MatDialogModule, 
  MatButtonModule, 
  MatGridListModule, 
  MatSelectModule,
  MatListModule,
  MatCheckboxModule
} from '@angular/material';

import { MAP_API_KEY } from '../shared/map';
import { reducers } from './reducers';
import { effects } from './effects';
import { ToDecimalPipe } from '../shared/pipes/to-decimal';

import { GoogleMapComponent } from './containers/google-map/google-map.component';
import { MapDevicesComponent } from './containers/map-devices/map-devices.component';
import { MapDeviceDialogComponent } from './containers/map-device-dialog/map-device-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('maps', reducers),
    EffectsModule.forFeature(effects),
    AgmCoreModule.forRoot({ apiKey: MAP_API_KEY }),
    AgmSnazzyInfoWindowModule,
    MatDialogModule,
    MatFormFieldModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatSelectModule,
    MatListModule,
    MatCheckboxModule
  ],
  declarations: [
    GoogleMapComponent,
    MapDevicesComponent,
    MapDeviceDialogComponent,
    ToDecimalPipe
  ],
  entryComponents: [
    MapDeviceDialogComponent
  ],
  providers: [
    GoogleMapsAPIWrapper
  ]
})
export class MapsModule { }
