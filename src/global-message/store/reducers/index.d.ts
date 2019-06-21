import { InjectionToken, Provider } from '@angular/core';
import { GlobalMessageState } from '../global-message-state';
import { ActionReducer } from '@ngrx/store';
export declare function getReducers(): ActionReducer<GlobalMessageState>;
export declare const reducerToken: InjectionToken<ActionReducer<GlobalMessageState>>;
export declare const reducerProvider: Provider;
