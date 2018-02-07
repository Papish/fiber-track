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
  MatCheckboxModule,
  MatSnackBarModule
} from '@angular/material';

import { MAP_API_KEY } from '../shared/constants/map';
import { reducers } from './reducers';
import { effects } from './reducers/effect';
import { ToDecimalPipe } from '../shared/pipes/to-decimal';

import { GoogleMapComponent } from './containers/google-map/google-map.component';
import { MapDeviceDialogComponent } from './containers/map-device-dialog/map-device-dialog.component';

import { DevicesService } from '../shared/services/map-devices.service';
import { MapDeviceNewComponent } from './components/map-device-new/map-device-new.component';
import { MapDeviceMarkerComponent } from './components/map-device-marker/map-device-marker.component';

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
    MatCheckboxModule,
    MatSnackBarModule
  ],
  declarations: [
    GoogleMapComponent,
    MapDeviceDialogComponent,
    ToDecimalPipe,
    MapDeviceNewComponent,
    MapDeviceMarkerComponent
  ],
  entryComponents: [
    MapDeviceDialogComponent
  ],
  providers: [
    GoogleMapsAPIWrapper,
    DevicesService
  ]
})
export class MapsModule { }
