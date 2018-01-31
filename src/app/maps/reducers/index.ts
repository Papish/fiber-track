import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMapDevices  from './map-devices';
import * as fromConnection from './add-connection.reducer';

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

// New Map Connections
export const getConnection = createSelector(getMapState, (state) => state.newConnection.plot);

export const getAddConnectionDrawingStatus = createSelector(getMapState, (state) => state.newConnection.drawing);

export const getAddConnectionCoreSelectionStatus = createSelector(getMapState, (state) => state.newConnection.connection);
