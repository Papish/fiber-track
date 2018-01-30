import { Action } from '@ngrx/store';

export const NEW_DEVICE_CONNECTION          = "[New Device Connection] Start New Connection";
export const ADD_PLOT_TO_CONNECTION         = "[New Device Connection] Plot Point Add";
export const END_DEVICE_CONNECTION          = "[New Device Connection] Complete New Connection";
export const NEW_DEVICE_CONNECTION_COMPLETE = "[New Device Connection] Device connection Finish"

export class NewDeviceConnection implements Action {
  readonly type: string = NEW_DEVICE_CONNECTION;
  constructor( public payload: any ) { }
}

export class AddPlotToConnection implements Action {
  readonly type: string = ADD_PLOT_TO_CONNECTION;
  constructor( public payload: any ) { }
}

export class EndDeviceConnection implements Action {
  readonly type: string = END_DEVICE_CONNECTION;
  constructor( public payload: any ) { }
}

export class NewDeviceConnectionComplete implements Action {
  readonly type: string = NEW_DEVICE_CONNECTION_COMPLETE;
  constructor( public payload?: any ) { }
}

export type Actions 
  = NewDeviceConnection
  | AddPlotToConnection
  | EndDeviceConnection
  | NewDeviceConnectionComplete;
