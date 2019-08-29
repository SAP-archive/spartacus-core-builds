import { PageContext } from '../../../routing/index';
import { StateEntityLoaderActions } from '../../../state/utils/index';
import { Page } from '../../model/page.model';
export declare const LOAD_CMS_PAGE_DATA = "[Cms] Load Page Data";
export declare const LOAD_CMS_PAGE_DATA_FAIL = "[Cms] Load Page Data Fail";
export declare const LOAD_CMS_PAGE_DATA_SUCCESS = "[Cms] Load Page Data Success";
export declare const CMS_SET_PAGE_SUCCESS_INDEX = "[Cms] Set Page Success Index";
export declare const CMS_SET_PAGE_FAIL_INDEX = "[Cms] Set Page Fail Index";
export declare class LoadCmsPageData extends StateEntityLoaderActions.EntityLoadAction {
    payload: PageContext;
    readonly type = "[Cms] Load Page Data";
    constructor(payload: PageContext);
}
export declare class LoadCmsPageDataFail extends StateEntityLoaderActions.EntityFailAction {
    readonly type = "[Cms] Load Page Data Fail";
    constructor(pageContext: PageContext, error: any);
}
export declare class LoadCmsPageDataSuccess extends StateEntityLoaderActions.EntitySuccessAction {
    readonly type = "[Cms] Load Page Data Success";
    constructor(pageContext: PageContext, payload: Page);
}
export declare class CmsSetPageSuccessIndex extends StateEntityLoaderActions.EntitySuccessAction {
    readonly type = "[Cms] Set Page Success Index";
    constructor(pageContext: PageContext, payload: Page);
}
export declare class CmsSetPageFailIndex extends StateEntityLoaderActions.EntityFailAction {
    payload: string;
    readonly type = "[Cms] Set Page Fail Index";
    constructor(pageContext: PageContext, payload: string);
}
export declare type CmsPageAction = LoadCmsPageData | LoadCmsPageDataFail | LoadCmsPageDataSuccess | CmsSetPageFailIndex;
