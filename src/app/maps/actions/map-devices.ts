import { Action } from '@ngrx/store';

export const ADD_NEW_MAP_DEVICE         = "[Map Device] Add Map Device";
export const ADD_NEW_MAP_DEVICE_SUCCESS = "[Map Device] Add Map Device Success";
export const ADD_NEW_MAP_DEVICE_FAILED  = "[Map Device] Add Map Device Failed";
export const FETCH_MAP_DEVICE           = "[Map Device] Fetch Map Device";
export const FETCH_MAP_DEVICE_SUCCESS   = "[Map Device] Fetch Map Device Success";

export class AddNewMapDevice implements Action {
  readonly type: string = ADD_NEW_MAP_DEVICE;
  constructor( public payload: any) { }
}

export class AddNewMapDeviceSuccess implements Action {
  readonly type: string = ADD_NEW_MAP_DEVICE_SUCCESS;
  constructor( public payload: any) { }
}

export class AddNewMapDeviceFailed implements Action {
  readonly type: string = ADD_NEW_MAP_DEVICE_FAILED;
  constructor( public payload: any) { }
}

export class FetchMapDevice implements Action {
  readonly type: string = FETCH_MAP_DEVICE;
  constructor( public payload: any) { }
}

export class FetchMapDeviceSuccess implements Action {
  readonly type: string = FETCH_MAP_DEVICE_SUCCESS;
  constructor( public payload: any) { }
}

export type Actions 
  = AddNewMapDevice
  | AddNewMapDeviceSuccess
  | AddNewMapDeviceFailed
  | FetchMapDevice
  | FetchMapDeviceSuccess;