import { StateKey, TransferState } from '@angular/platform-browser';
import { StateConfig, StateTransferType } from '../config/state-config';
export declare const CX_KEY: StateKey<string>;
export declare function getTransferStateReducer(platformId: any, transferState?: TransferState, config?: StateConfig): (reducer: any) => (state: any, action: any) => any;
export declare function getServerTransferStateReducer(transferState: TransferState, keys: {
    [key: string]: StateTransferType;
}): (reducer: any) => (state: any, action: any) => any;
export declare function getBrowserTransferStateReducer(transferState: TransferState, keys: {
    [key: string]: StateTransferType;
}): (reducer: any) => (state: any, action: any) => any;
