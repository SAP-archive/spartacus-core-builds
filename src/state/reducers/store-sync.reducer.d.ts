import { MetaReducer, Action } from '@ngrx/store';
import { WindowRef } from '../../window/window-ref';
import { StateConfig } from '../config/state-config';
export declare function getStorageSyncReducer(winRef: WindowRef, config?: StateConfig): MetaReducer<any, Action>;
