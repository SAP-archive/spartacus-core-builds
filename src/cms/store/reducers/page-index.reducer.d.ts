import * as fromAction from '../actions/page.action';
export declare const initialState: any;
export declare function reducer(entityType: string): (state: string, action: fromAction.LoadPageDataSuccess | fromAction.LoadPageDataFail | fromAction.SetPageFailIndex) => string;
