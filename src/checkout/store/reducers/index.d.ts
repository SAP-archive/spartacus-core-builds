import { InjectionToken, Provider } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';
import { CheckoutState } from '../checkout-state';
export declare function getReducers(): ActionReducerMap<CheckoutState>;
export declare const reducerToken: InjectionToken<ActionReducerMap<CheckoutState>>;
export declare const reducerProvider: Provider;
