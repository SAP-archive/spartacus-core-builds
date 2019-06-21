import { Action } from '@ngrx/store';
export declare const CHECKOUT_CLEAR_MISCS_DATA = "[Checkout] Clear Miscs Data";
export declare class CheckoutClearMiscsData implements Action {
    readonly type = "[Checkout] Clear Miscs Data";
}
export declare type CheckoutMiscsDataAction = CheckoutClearMiscsData;
export * from './checkout.action';
export * from './card-types.action';
export * from './address-verification.action';
