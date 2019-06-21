import { InjectionToken, Provider } from '@angular/core';
import { Action, ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AuthState } from '../auth-state';
export declare function getReducers(): ActionReducerMap<AuthState>;
export declare const reducerToken: InjectionToken<ActionReducerMap<AuthState>>;
export declare const reducerProvider: Provider;
export declare function clearAuthState(reducer: ActionReducer<AuthState, Action>): ActionReducer<AuthState, Action>;
export declare const metaReducers: MetaReducer<any>[];
