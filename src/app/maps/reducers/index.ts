import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMapDevices  from './map-devices';

export interface AppState {
  mapDevice: fromMapDevices.MapState
}

export const reducers = {
  mapDevice: fromMapDevices.reducer
};

export const getMapDevicesState = createFeatureSelector<AppState>('maps');

export const getMapDevices = createSelector(getMapDevicesState, (state) => state.mapDevice.devices);
