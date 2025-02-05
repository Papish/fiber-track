import { 
  Action, 
  ActionReducer, 
  ActionReducerMap, 
  MetaReducer, 
  createFeatureSelector, 
  createSelector
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';

export interface AppState {
}

export const reducers: ActionReducerMap<AppState> = {
}

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function(state: AppState, action: any): AppState {
    console.log(state);
    console.log(action);
    return reducer(state, action);
  }
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
 ? [logger, storeFreeze]
 : [];
