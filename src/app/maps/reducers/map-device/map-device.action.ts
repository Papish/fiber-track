import { Action } from '@ngrx/store';

/**
 * New map device actions
 *
 */
export const ADD_NEW_MAP_DEVICE          = '[Google Map] Add New Device Marker To Map';
export const SAVE_NEW_MAP_DEVICE         = '[Google Map] Save New Device Marker To Database';
export const SAVE_NEW_MAP_DEVICE_SUCCESS = '[Google Map] Save New Device Marker To Database Success';
export const CLEAR_DRAWN_MAP_DEVICE      = '[Google Map] Remove Drawn Device Marker From Map';

export class AddNewMapDevice implements Action {
	readonly type: string = ADD_NEW_MAP_DEVICE;
	constructor( public payload: any ) { }
}

export class SaveNewMapDevice implements Action {
	readonly type: string = SAVE_NEW_MAP_DEVICE;
	constructor( public payload: any ) { }
}

export class SaveNewMapDeviceSuccess implements Action {
	readonly type: string = SAVE_NEW_MAP_DEVICE_SUCCESS;
	constructor( public payload: any ) { }
}

export class ClearDrawnMapDevice implements Action {
	readonly type: string = CLEAR_DRAWN_MAP_DEVICE;
	constructor( public payload?: any ) { }
}


/**
 * Map device fetch actions
 *
 */
export const FETCH_ALL_MAP_DEVICE = '[Google Map] Fetch All Map Devices';
export const FETCH_ALL_MAP_DEVICE_SUCCESS = '[Google Map] Fetch All Map Devices Success';

export class FetchAllMapDevice implements Action {
	readonly type: string = FETCH_ALL_MAP_DEVICE;
	constructor( public payload?: any ) { }
}

export class FetchAllMapDeviceSucces implements Action {
	readonly type: string = FETCH_ALL_MAP_DEVICE_SUCCESS;
	constructor( public payload: any ) { }
}

export type MapActions
	= AddNewMapDevice
	| SaveNewMapDevice
	| SaveNewMapDeviceSuccess
	| ClearDrawnMapDevice
	| FetchAllMapDevice
	| FetchAllMapDeviceSucces;
