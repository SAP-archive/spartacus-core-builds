import { Action } from '@ngrx/store';
import { Region } from '../../../occ/occ-models/index';
export declare const LOAD_REGIONS = "[User] Load Regions";
export declare const LOAD_REGIONS_SUCCESS = "[User] Load Regions Success";
export declare const LOAD_REGIONS_FAIL = "[User] Load Regions Fail";
export declare class LoadRegions implements Action {
    payload: string;
    readonly type = "[User] Load Regions";
    constructor(payload: string);
}
export declare class LoadRegionsFail implements Action {
    payload: any;
    readonly type = "[User] Load Regions Fail";
    constructor(payload: any);
}
export declare class LoadRegionsSuccess implements Action {
    payload: Region[];
    readonly type = "[User] Load Regions Success";
    constructor(payload: Region[]);
}
export declare type RegionsAction = LoadRegions | LoadRegionsFail | LoadRegionsSuccess;
