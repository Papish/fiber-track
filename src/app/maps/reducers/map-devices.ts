import * as fromMapDevice from '../actions/map-devices';
import { MapDevice } from '../models/map-device';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface AppState {
  devices: MapDevice[];
  loading: boolean;
  loaded: boolean;
}

const initialState: AppState = {
  devices: [],
  loading: false,
  loaded: false
};

export function reducer(state = initialState, action: fromMapDevice.Actions): AppState {
  switch(action.type) {
    /**
     * Device load
     */
    case fromMapDevice.FETCH_MAP_DEVICE:
      return {
        ...state,
        loading: true
      };
    case fromMapDevice.FETCH_MAP_DEVICE_SUCCESS:
      return {
        ...state,
        devices: [].concat(state.devices, action.payload),
        loading: false        
      };

    /**
     * Device add
     */
    case fromMapDevice.ADD_NEW_MAP_DEVICE:
      return {
        ...state,
        loading: true
      };
    case fromMapDevice.ADD_NEW_MAP_DEVICE_SUCCESS:
      return {
        ...state,
        devices: [
          ...state.devices, 
          action.payload
        ],
        loading: false
      };
    case fromMapDevice.ADD_NEW_MAP_DEVICE_FAILED:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
}