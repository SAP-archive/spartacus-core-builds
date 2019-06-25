import { InjectionToken, Provider } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';
import * as fromNgrxRouter from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { ActivatedRouterStateSnapshot, RouterState, State } from '../routing-state';
export declare const initialState: RouterState;
export declare function getReducers(): ActionReducerMap<State>;
export declare function reducer(state: RouterState, action: any): RouterState;
export declare const reducerToken: InjectionToken<ActionReducerMap<State>>;
export declare const reducerProvider: Provider;
export declare class CustomSerializer implements fromNgrxRouter.RouterStateSerializer<ActivatedRouterStateSnapshot> {
    serialize(routerState: RouterStateSnapshot): ActivatedRouterStateSnapshot;
}
