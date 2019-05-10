import { MemoizedSelector } from '@ngrx/store';
import { PageState, StateWithCms, IndexType } from '../cms-state';
import { PageContext } from '../../../routing';
import { LoaderState } from '../../../state';
import { ContentSlotData } from '../../model/content-slot-data.model';
import { Page } from '../../model/page.model';
import { PageType } from '../../../model/cms.model';
export declare const getPageEntitiesSelector: (state: PageState) => {
    [id: string]: Page;
};
export declare const getIndexByType: (index: IndexType, type: PageType) => import("../../../state").EntityState<LoaderState<string>>;
export declare const getPageComponentTypesSelector: (page: Page) => string[];
export declare const getPageState: MemoizedSelector<StateWithCms, PageState>;
export declare const getPageStateIndex: MemoizedSelector<StateWithCms, IndexType>;
export declare const getIndex: (pageContext: PageContext) => MemoizedSelector<StateWithCms, import("../../../state").EntityState<LoaderState<string>>>;
export declare const getIndexEntity: (pageContext: PageContext) => MemoizedSelector<StateWithCms, LoaderState<string>>;
export declare const getPageEntities: MemoizedSelector<StateWithCms, {
    [id: string]: Page;
}>;
export declare const getPageData: (pageContext: PageContext) => MemoizedSelector<StateWithCms, Page>;
export declare const getPageComponentTypes: (pageContext: PageContext) => MemoizedSelector<StateWithCms, string[]>;
export declare const currentSlotSelectorFactory: (pageContext: PageContext, position: string) => MemoizedSelector<StateWithCms, ContentSlotData>;
