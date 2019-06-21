import { InjectionToken, Provider } from '@angular/core';
import { Action, ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { KymaState } from '../kyma-state';
export declare function getReducers(): ActionReducerMap<KymaState>;
export declare const reducerToken: InjectionToken<ActionReducerMap<KymaState>>;
export declare const reducerProvider: Provider;
export declare function clearKymaState(reducer: ActionReducer<KymaState, Action>): ActionReducer<KymaState, Action>;
export declare const metaReducers: MetaReducer<any>[];
