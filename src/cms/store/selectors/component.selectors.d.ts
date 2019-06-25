import { MemoizedSelector } from '@ngrx/store';
import { LoaderState } from '../../../state/utils/loader/loader-state';
import { ComponentState, StateWithCms } from '../cms-state';
export declare const getComponentState: MemoizedSelector<StateWithCms, ComponentState>;
export declare const getComponentEntities: MemoizedSelector<StateWithCms, {
    [id: string]: any;
}>;
export declare const componentStateSelectorFactory: (uid: string) => MemoizedSelector<StateWithCms, LoaderState<any>, import("@ngrx/store/src/selector").DefaultProjectorFn<LoaderState<any>>>;
export declare const componentSelectorFactory: (uid: string) => MemoizedSelector<StateWithCms, any, import("@ngrx/store/src/selector").DefaultProjectorFn<any>>;
