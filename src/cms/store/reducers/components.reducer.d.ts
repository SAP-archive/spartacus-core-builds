import { CmsActions } from '../actions/index';
import { ComponentsContext } from '../cms-state';
export declare const initialState: ComponentsContext;
export declare function reducer<T>(state: ComponentsContext, action: CmsActions.CmsComponentAction<T>): ComponentsContext;
