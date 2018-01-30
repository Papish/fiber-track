import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromConnection from '../actions/new-connection.action';
import { Connection } from '../models/new-connection.model';

export interface AppState {
  plot: Connection[];    
  drawing: boolean;
  deviceOneId: number;
  deviceTwoId: number;
}

const initialState: AppState = {
  plot: [],
  drawing: false,
  deviceOneId: null,
  deviceTwoId: null  
}

export function reducer(
  state = initialState, 
  action: fromConnection.Actions
): AppState {
  switch (action.type) {
    case fromConnection.NEW_DEVICE_CONNECTION:
      return {
        ...state,
        plot: state.plot.concat(action.payload),
        drawing: true
      }
    case fromConnection.ADD_PLOT_TO_CONNECTION:
      return {
        ...state,
        plot: state.plot.concat(action.payload)
      }
    case fromConnection.END_DEVICE_CONNECTION: 
      return {
        ...state,
        plot: state.plot.concat(action.payload),
        drawing: false
      }
    case fromConnection.NEW_DEVICE_CONNECTION_COMPLETE: 
      return {
        ...state,
        plot: [],
        drawing: false,
        deviceOneId: null,
        deviceTwoId: null
      }
    default: 
      return state;
  }
}