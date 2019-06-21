import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { InjectionToken, Provider } from '@angular/core';
import { StoresState } from '../store-finder-state';
export declare function getReducers(): ActionReducerMap<StoresState>;
export declare const reducerToken: InjectionToken<ActionReducerMap<StoresState>>;
export declare const reducerProvider: Provider;
export declare const metaReducers: MetaReducer<any>[];
