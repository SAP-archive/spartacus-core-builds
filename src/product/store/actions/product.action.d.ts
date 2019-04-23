import { EntityFailAction, EntityLoadAction, EntitySuccessAction } from '../../../state/utils/entity-loader/entity-loader.action';
import { UIProduct } from '../../model/product';
export declare const LOAD_PRODUCT = "[Product] Load Product Data";
export declare const LOAD_PRODUCT_FAIL = "[Product] Load Product Data Fail";
export declare const LOAD_PRODUCT_SUCCESS = "[Product] Load Product Data Success";
export declare class LoadProduct extends EntityLoadAction {
    payload: string;
    readonly type = "[Product] Load Product Data";
    constructor(payload: string);
}
export declare class LoadProductFail extends EntityFailAction {
    payload: any;
    readonly type = "[Product] Load Product Data Fail";
    constructor(productCode: string, payload: any);
}
export declare class LoadProductSuccess extends EntitySuccessAction {
    payload: UIProduct;
    readonly type = "[Product] Load Product Data Success";
    constructor(payload: UIProduct);
}
export declare type ProductAction = LoadProduct | LoadProductFail | LoadProductSuccess;
