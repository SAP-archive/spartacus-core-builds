import { MemoizedSelector } from '@ngrx/store';
import { CmsComponent } from '../../../model/cms.model';
import { StateUtils } from '../../../state/utils/index';
import { ComponentsContext, ComponentsState, StateWithCms } from '../cms-state';
export declare const getComponentsState: MemoizedSelector<StateWithCms, ComponentsState>;
export declare const componentsContextSelectorFactory: (uid: string) => MemoizedSelector<StateWithCms, ComponentsContext, import("@ngrx/store").DefaultProjectorFn<ComponentsContext>>;
export declare const componentsLoaderStateSelectorFactory: (uid: string, context: string) => MemoizedSelector<StateWithCms, StateUtils.LoaderState<boolean>, import("@ngrx/store").DefaultProjectorFn<StateUtils.LoaderState<boolean>>>;
export declare const componentsContextExistsSelectorFactory: (uid: string, context: string) => MemoizedSelector<StateWithCms, boolean, import("@ngrx/store").DefaultProjectorFn<boolean>>;
export declare const componentsDataSelectorFactory: (uid: string) => MemoizedSelector<StateWithCms, CmsComponent, import("@ngrx/store").DefaultProjectorFn<CmsComponent>>;
export declare const componentsSelectorFactory: (uid: string, context: string) => MemoizedSelector<StateWithCms, CmsComponent, import("@ngrx/store").DefaultProjectorFn<CmsComponent>>;
