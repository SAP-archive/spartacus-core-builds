import { EntitySuccessAction, EntityLoadAction, EntityFailAction } from '../../../state';
import { Page } from '../../model/page.model';
import { PageContext } from '../../../routing/index';
export declare const LOAD_PAGE_DATA = "[Cms] Load Page Data";
export declare const LOAD_PAGE_DATA_FAIL = "[Cms] Load Page Data Fail";
export declare const LOAD_PAGE_DATA_SUCCESS = "[Cms] Load Page Data Success";
export declare class LoadPageData extends EntityLoadAction {
    payload: PageContext;
    readonly type = "[Cms] Load Page Data";
    constructor(payload: PageContext);
}
export declare class LoadPageDataFail extends EntityFailAction {
    readonly type = "[Cms] Load Page Data Fail";
    constructor(pageContext: PageContext, error: any);
}
export declare class LoadPageDataSuccess extends EntitySuccessAction {
    readonly type = "[Cms] Load Page Data Success";
    constructor(pageContext: PageContext, payload: Page);
}
export declare type PageAction = LoadPageData | LoadPageDataFail | LoadPageDataSuccess;
