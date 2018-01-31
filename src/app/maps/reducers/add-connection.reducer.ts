import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Plot } from '../models/new-connection.model';
import * as fromConnection from '../actions/new-connection.action';

export interface AppState {
  plot: Plot[];
  drawing: boolean;
  connection: boolean;
}

const initialState: AppState = {
  plot: [],
  drawing: false,
  connection: false
}

export function reducer(
  state = initialState, 
  action: fromConnection.Actions
): AppState {
  switch (action.type) {
    case fromConnection.NEW_DEVICE_CONNECTION:
      return {
        ...state,
        plot: [].concat(action.payload),
        drawing: true
      };

    case fromConnection.ADD_PLOT_TO_CONNECTION:
      return {
        ...state,
        plot: [].concat(state.plot, action.payload)
      };

    case fromConnection.END_DEVICE_CONNECTION:
      return {
        ...state,
        plot: [].concat(state.plot, action.payload),
        connection: true
      };

    case fromConnection.NEW_DEVICE_CONNECTION_COMPLETE: 
      return state;
      
    default: 
      return state;
  }
}