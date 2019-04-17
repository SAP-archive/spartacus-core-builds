import { StateKey, TransferState } from '@angular/platform-browser';
import { StateConfig } from '../config/state-config';
export declare const INIT_ACTION = "@ngrx/store/init";
export declare const CX_KEY: StateKey<string>;
export declare function getTransferStateReducer(platformId: any, transferState?: TransferState, config?: StateConfig): (reducer: any) => (state: any, action: any) => any;
export declare function getServerTransferStateReducer(transferState: TransferState, keys: object): (reducer: any) => (state: any, action: any) => any;
export declare function getBrowserTransferStateReducer(transferState: TransferState, keys: any): (reducer: any) => (state: any, action: any) => any;
