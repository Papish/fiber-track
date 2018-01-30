import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMapDevices  from './map-devices';
import * as fromConnection from './new-connection.reducer';

export interface AppState {
  mapDevice: fromMapDevices.AppState,
  newConnection: fromConnection.AppState
}

export const reducers = {
  mapDevice: fromMapDevices.reducer,
  newConnection: fromConnection.reducer
};

export const getMapState = createFeatureSelector<AppState>('maps');

// Map Devices
export const getMapDevices = createSelector(getMapState, (state) => state.mapDevice.devices);

// Map Connections
export const getConnection = createSelector(getMapState, (state) => state.newConnection.plot);
export const getConnectionStatus = createSelector(getMapState, (state) => state.newConnection.drawing);