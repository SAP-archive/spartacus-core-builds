import { Region } from '../../../model/address.model';
import { LoaderLoadAction, LoaderFailAction, LoaderSuccessAction } from '../../../state/utils/loader/loader.action';
import { Action } from '@ngrx/store';
export declare const LOAD_REGIONS = "[User] Load Regions";
export declare const LOAD_REGIONS_SUCCESS = "[User] Load Regions Success";
export declare const LOAD_REGIONS_FAIL = "[User] Load Regions Fail";
export declare const CLEAR_REGIONS = "[User] Clear Regions";
export declare class LoadRegions extends LoaderLoadAction {
    payload: string;
    readonly type = "[User] Load Regions";
    constructor(payload: string);
}
export declare class LoadRegionsFail extends LoaderFailAction {
    payload: any;
    readonly type = "[User] Load Regions Fail";
    constructor(payload: any);
}
export declare class LoadRegionsSuccess extends LoaderSuccessAction {
    payload: {
        entities: Region[];
        country: string;
    };
    readonly type = "[User] Load Regions Success";
    constructor(payload: {
        entities: Region[];
        country: string;
    });
}
export declare class ClearRegions implements Action {
    readonly type = "[User] Clear Regions";
    constructor();
}
export declare type RegionsAction = LoadRegions | LoadRegionsFail | LoadRegionsSuccess | ClearRegions;
