import { InjectionToken, Provider } from '@angular/core';
import { ActionReducer, ActionReducerMap, MetaReducer, Action } from '@ngrx/store';
import { CmsState, StateWithCms } from '../cms-state';
export declare function getReducers(): ActionReducerMap<CmsState>;
export declare const reducerToken: InjectionToken<ActionReducerMap<CmsState>>;
export declare const reducerProvider: Provider;
export declare function clearCmsState(reducer: ActionReducer<StateWithCms, Action>): ActionReducer<StateWithCms, Action>;
export declare const metaReducers: MetaReducer<StateWithCms>[];
