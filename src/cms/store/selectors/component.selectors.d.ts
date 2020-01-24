import { MemoizedSelector } from '@ngrx/store';
import { CmsComponent } from '../../../model/cms.model';
import { LoaderState } from '../../../state/utils/index';
import { ComponentsContext, ComponentsState, ComponentState, StateWithCms } from '../cms-state';
/**
 * @deprecated as of 2.0, this method will be removed in favour of `getComponentsState`
 */
export declare const getComponentState: MemoizedSelector<StateWithCms, ComponentState>;
/**
 * @deprecated as of 2.0, this method will be removed.
 */
export declare const getComponentEntities: MemoizedSelector<StateWithCms, {
    [id: string]: any;
}>;
/**
 * @deprecated as of 2.0, this method will be removed in favour of `componentsLoaderStateSelectorFactory`
 */
export declare const componentStateSelectorFactory: (uid: string) => MemoizedSelector<StateWithCms, LoaderState<any>, import("@ngrx/store").DefaultProjectorFn<LoaderState<any>>>;
/**
 * @deprecated as of 2.0, this method will be removed in favour of `componentsSelectorFactory`
 */
export declare const componentSelectorFactory: (uid: string) => MemoizedSelector<StateWithCms, any, import("@ngrx/store").DefaultProjectorFn<any>>;
export declare const getComponentsState: MemoizedSelector<StateWithCms, ComponentsState>;
export declare const componentsContextSelectorFactory: (uid: string) => MemoizedSelector<StateWithCms, ComponentsContext, import("@ngrx/store").DefaultProjectorFn<ComponentsContext>>;
export declare const componentsLoaderStateSelectorFactory: (uid: string, context: string) => MemoizedSelector<StateWithCms, LoaderState<boolean>, import("@ngrx/store").DefaultProjectorFn<LoaderState<boolean>>>;
export declare const componentsContextExistsSelectorFactory: (uid: string, context: string) => MemoizedSelector<StateWithCms, boolean, import("@ngrx/store").DefaultProjectorFn<boolean>>;
export declare const componentsDataSelectorFactory: (uid: string) => MemoizedSelector<StateWithCms, CmsComponent, import("@ngrx/store").DefaultProjectorFn<CmsComponent>>;
export declare const componentsSelectorFactory: (uid: string, context: string) => MemoizedSelector<StateWithCms, CmsComponent, import("@ngrx/store").DefaultProjectorFn<CmsComponent>>;
