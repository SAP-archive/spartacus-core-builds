import { MemoizedSelector } from '@ngrx/store';
import { ComponentState, StateWithCms } from '../cms-state';
import { LoaderState } from '../../../state/utils/loader/loader-state';
export declare const getComponentEntitiesSelector: (state: import("../../../state").EntityState<LoaderState<any>>) => {};
export declare const getComponentState: MemoizedSelector<StateWithCms, ComponentState>;
export declare const getComponentEntities: MemoizedSelector<StateWithCms, {
    [id: string]: any;
}>;
export declare const componentStateSelectorFactory: (uid: string) => MemoizedSelector<StateWithCms, LoaderState<any>>;
export declare const componentSelectorFactory: (uid: string) => MemoizedSelector<StateWithCms, any>;
