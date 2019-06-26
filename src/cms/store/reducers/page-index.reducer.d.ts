import { CmsActions } from '../actions/index';
export declare const initialState: any;
export declare function reducer(entityType: string): (state: string, action: CmsActions.LoadCmsPageDataSuccess | CmsActions.LoadCmsPageDataFail | CmsActions.CmsSetPageFailIndex) => string;
