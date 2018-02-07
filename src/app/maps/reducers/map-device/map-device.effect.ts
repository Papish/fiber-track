import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import { DevicesService } from '../../../shared/services/map-devices.service';
import { MapDevice } from '../../../shared/models/map-device.model';
import * as fromMapDevices from './map-device.action';

@Injectable()
export class MapDeviceAddEffects {
  constructor(
    private http: HttpClient,
    private actions$: Actions,
    private device: DevicesService
  ) { }

  @Effect() 
  fetchDevices$: Observable<Action> = this.actions$
    .ofType(fromMapDevices.FETCH_ALL_MAP_DEVICE)
    .switchMap(() => this.device.getAllDevices())
    .switchMap(res => [new fromMapDevices.FetchAllMapDeviceSucces(res)]);

  @Effect() 
  saveDevice$: Observable<Action> = this.actions$
    .ofType(fromMapDevices.SAVE_NEW_MAP_DEVICE)
    .map((action: any) => JSON.stringify(action.payload))
    .switchMap(data => this.device.saveNewDevice(data))
    .switchMap(res => [
      new fromMapDevices.SaveNewMapDeviceSuccess(res),
      new fromMapDevices.ClearDrawnMapDevice()
    ]);
}
