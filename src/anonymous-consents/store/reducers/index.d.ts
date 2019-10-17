import { InjectionToken, Provider } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';
import { AnonymousConsentsState } from '../anonymous-consents-state';
export declare function getReducers(): ActionReducerMap<AnonymousConsentsState>;
export declare const reducerToken: InjectionToken<ActionReducerMap<AnonymousConsentsState>>;
export declare const reducerProvider: Provider;
