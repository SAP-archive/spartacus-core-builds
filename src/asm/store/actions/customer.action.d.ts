import { StateUtils } from '../../../state/utils/index';
import { CustomerSearchOptions, CustomerSearchPage } from '../../models/asm.models';
export declare const CUSTOMER_SEARCH = "[Asm] Customer Search";
export declare const CUSTOMER_SEARCH_FAIL = "[Asm] Customer Search Fail";
export declare const CUSTOMER_SEARCH_SUCCESS = "[Asm] Customer Search Success";
export declare const CUSTOMER_SEARCH_RESET = "[Asm] Customer Search Reset";
export declare class CustomerSearch extends StateUtils.LoaderLoadAction {
    payload: CustomerSearchOptions;
    readonly type = "[Asm] Customer Search";
    constructor(payload: CustomerSearchOptions);
}
export declare class CustomerSearchFail extends StateUtils.LoaderFailAction {
    payload: any;
    readonly type = "[Asm] Customer Search Fail";
    constructor(payload: any);
}
export declare class CustomerSearchSuccess extends StateUtils.LoaderSuccessAction {
    payload: CustomerSearchPage;
    readonly type = "[Asm] Customer Search Success";
    constructor(payload: CustomerSearchPage);
}
export declare class CustomerSearchReset extends StateUtils.LoaderResetAction {
    readonly type = "[Asm] Customer Search Reset";
    constructor();
}
export declare type CustomerAction = CustomerSearch | CustomerSearchFail | CustomerSearchSuccess | CustomerSearchReset;
