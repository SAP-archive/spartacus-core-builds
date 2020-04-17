import { MemoizedSelector } from '@ngrx/store';
import { PageContext } from '../../../routing';
import { StateUtils } from '../../../state/utils/index';
import { ContentSlotData } from '../../model/content-slot-data.model';
import { Page } from '../../model/page.model';
import { IndexType, PageState, StateWithCms } from '../cms-state';
export declare const getPageState: MemoizedSelector<StateWithCms, PageState>;
export declare const getPageStateIndex: MemoizedSelector<StateWithCms, IndexType>;
export declare const getPageStateIndexEntityLoaderState: (pageContext: PageContext) => MemoizedSelector<StateWithCms, StateUtils.EntityLoaderState<string>, import("@ngrx/store").DefaultProjectorFn<StateUtils.EntityLoaderState<string>>>;
export declare const getPageStateIndexLoaderState: (pageContext: PageContext) => MemoizedSelector<StateWithCms, StateUtils.LoaderState<string>, import("@ngrx/store").DefaultProjectorFn<StateUtils.LoaderState<string>>>;
export declare const getPageStateIndexValue: (pageContext: PageContext) => MemoizedSelector<StateWithCms, string, import("@ngrx/store").DefaultProjectorFn<string>>;
export declare const getPageEntities: MemoizedSelector<StateWithCms, {
    [id: string]: Page;
}>;
export declare const getPageData: (pageContext: PageContext) => MemoizedSelector<StateWithCms, Page, import("@ngrx/store").DefaultProjectorFn<Page>>;
export declare const getPageComponentTypes: (pageContext: PageContext) => MemoizedSelector<StateWithCms, string[], import("@ngrx/store").DefaultProjectorFn<string[]>>;
export declare const getCurrentSlotSelectorFactory: (pageContext: PageContext, position: string) => MemoizedSelector<StateWithCms, ContentSlotData, import("@ngrx/store").DefaultProjectorFn<ContentSlotData>>;
