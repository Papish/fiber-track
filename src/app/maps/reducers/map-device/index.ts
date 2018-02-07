import * as fromMapDevice from './map-device.action';
import { MapDevice } from '../../../shared/models/map-device.model';

export interface AppState {
	devices: MapDevice[];		// Map devices lists
	newDevice: object[];
	loading: boolean;
	loaded: boolean;
}

const initialState: AppState = {
	devices: [],
	newDevice: [],
	loading: false,
	loaded: false
};


export function reducer(
	state = initialState,
	action: fromMapDevice.MapActions
): AppState {
	switch (action.type) {
		case fromMapDevice.FETCH_ALL_MAP_DEVICE:
			return {
				...state
			};
		
		case fromMapDevice.FETCH_ALL_MAP_DEVICE_SUCCESS:
			return {
				...state,
				devices: [].concat(action.payload)
			};

		case fromMapDevice.ADD_NEW_MAP_DEVICE:
			return {
				...state,
				newDevice: [].concat(action.payload)
			};

		case fromMapDevice.SAVE_NEW_MAP_DEVICE_SUCCESS:
			return {
				...state,
				devices: [].concat(state.devices, action.payload)
			};

		case fromMapDevice.CLEAR_DRAWN_MAP_DEVICE:
			return {
				...state,
				newDevice: []
			};

		default:
			return state;	
	}
}