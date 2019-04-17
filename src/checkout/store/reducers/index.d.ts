import { InjectionToken, Provider } from '@angular/core';
import { ActionReducerMap, MetaReducer, ActionReducer, MemoizedSelector } from '@ngrx/store';
import { CheckoutState } from '../checkout-state';
export declare function getReducers(): ActionReducerMap<CheckoutState>;
export declare const reducerToken: InjectionToken<ActionReducerMap<CheckoutState>>;
export declare const reducerProvider: Provider;
export declare const getCheckoutState: MemoizedSelector<any, CheckoutState>;
export declare function clearCheckoutState(reducer: ActionReducer<CheckoutState>): ActionReducer<CheckoutState>;
export declare const metaReducers: MetaReducer<CheckoutState>[];
