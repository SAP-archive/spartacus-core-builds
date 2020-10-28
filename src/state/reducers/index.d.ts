import { InjectionToken, Provider } from '@angular/core';
export { getStateSlice } from '../utils/get-state-slice';
export { getStorageSyncReducer } from './storage-sync.reducer';
export * from './transfer-state.reducer';
export declare const TRANSFER_STATE_META_REDUCER: InjectionToken<unknown>;
export declare const STORAGE_SYNC_META_REDUCER: InjectionToken<unknown>;
export declare const stateMetaReducers: Provider[];
