import { Product } from '../../../model/product.model';
import { StateEntityLoaderActions } from '../../../state/utils/index';
export declare const LOAD_PRODUCT = "[Product] Load Product Data";
export declare const LOAD_PRODUCT_FAIL = "[Product] Load Product Data Fail";
export declare const LOAD_PRODUCT_SUCCESS = "[Product] Load Product Data Success";
export declare class LoadProduct extends StateEntityLoaderActions.EntityLoadAction {
    payload: string;
    readonly type = "[Product] Load Product Data";
    constructor(payload: string);
}
export declare class LoadProductFail extends StateEntityLoaderActions.EntityFailAction {
    payload: any;
    readonly type = "[Product] Load Product Data Fail";
    constructor(productCode: string, payload: any);
}
export declare class LoadProductSuccess extends StateEntityLoaderActions.EntitySuccessAction {
    payload: Product;
    readonly type = "[Product] Load Product Data Success";
    constructor(payload: Product);
}
export declare type ProductAction = LoadProduct | LoadProductFail | LoadProductSuccess;
