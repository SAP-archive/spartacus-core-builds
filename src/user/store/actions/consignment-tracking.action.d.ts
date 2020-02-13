import { Action } from '@ngrx/store';
import { ConsignmentTracking } from '../../../model/index';
export declare const LOAD_CONSIGNMENT_TRACKING = "[User] Load Consignment Tracking";
export declare const LOAD_CONSIGNMENT_TRACKING_FAIL = "[User] Load Consignment Tracking Fail";
export declare const LOAD_CONSIGNMENT_TRACKING_SUCCESS = "[User] Load Consignment Tracking Success";
export declare const CLEAR_CONSIGNMENT_TRACKING = "[User] Clear Consignment Tracking";
export declare class LoadConsignmentTracking implements Action {
    payload: {
        userId?: string;
        orderCode: string;
        consignmentCode: string;
    };
    readonly type = "[User] Load Consignment Tracking";
    constructor(payload: {
        userId?: string;
        orderCode: string;
        consignmentCode: string;
    });
}
export declare class LoadConsignmentTrackingFail implements Action {
    payload: any;
    readonly type = "[User] Load Consignment Tracking Fail";
    constructor(payload: any);
}
export declare class LoadConsignmentTrackingSuccess implements Action {
    payload: ConsignmentTracking;
    readonly type = "[User] Load Consignment Tracking Success";
    constructor(payload: ConsignmentTracking);
}
export declare class ClearConsignmentTracking {
    readonly type = "[User] Clear Consignment Tracking";
    constructor();
}
export declare type ConsignmentTrackingAction = LoadConsignmentTracking | LoadConsignmentTrackingFail | LoadConsignmentTrackingSuccess | ClearConsignmentTracking;
