import { InjectionToken, Provider } from '@angular/core';
import { ActionReducerMap, MetaReducer, ActionReducer } from '@ngrx/store';
import { CartsState } from './../cart-state';
export declare function getReducers(): ActionReducerMap<CartsState>;
export declare const reducerToken: InjectionToken<ActionReducerMap<CartsState>>;
export declare const reducerProvider: Provider;
export declare function clearCartState(reducer: ActionReducer<any>): ActionReducer<any>;
export declare const metaReducers: MetaReducer<any>[];
