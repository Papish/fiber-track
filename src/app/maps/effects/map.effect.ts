import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { baseUrl } from '../../shared/server';
import { MapDevice } from '../models/map-device';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import { of } from 'rxjs/observable/of';
import * as fromMapDevices from '../actions/map-devices';

@Injectable()
export class MapEffects {
  constructor(
    private http: HttpClient,
    private actions$: Actions
  ) { }

  @Effect() 
  devices$: Observable<Action> = this.actions$
    .ofType(fromMapDevices.FETCH_MAP_DEVICE)
    .switchMap(() =>
      this.http.get(baseUrl + 'devices')
        .map(res => new fromMapDevices.FetchMapDeviceSuccess(res))
    );

  @Effect() 
  newDevices$: Observable<Action> = this.actions$
    .ofType(fromMapDevices.ADD_NEW_MAP_DEVICE)
    .map((action: any) => JSON.stringify(action.payload))
    .mergeMap(device =>
      this.http.post(baseUrl + 'devices/add', device)
        .map(res => new fromMapDevices.AddNewMapDeviceSuccess(res))
        .catch(err => of(new fromMapDevices.AddNewMapDeviceFailed(err)))
    );
}
