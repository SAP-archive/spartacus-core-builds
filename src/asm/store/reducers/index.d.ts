import { InjectionToken, Provider } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';
import { AsmState } from '../asm-state';
export declare function getReducers(): ActionReducerMap<AsmState>;
export declare const reducerToken: InjectionToken<ActionReducerMap<AsmState>>;
export declare const reducerProvider: Provider;
