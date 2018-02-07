import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMapDevice from './map-device';

export interface AppState {
	mapDevice: fromMapDevice.AppState
}

export const reducers = {
	mapDevice: fromMapDevice.reducer
};

// Selecting feature of store
export const getMapState = createFeatureSelector<AppState>('maps');

// Select new map devices element
export const getNewDrawnDevices = createSelector(getMapState, (state) => state.mapDevice.newDevice);

// Select all map device list element
export const getAllMapDevices = createSelector(getMapState, (state) => state.mapDevice.devices);