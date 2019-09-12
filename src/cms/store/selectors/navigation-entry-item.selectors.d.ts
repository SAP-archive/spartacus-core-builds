import { MemoizedSelector } from '@ngrx/store';
import { EntityLoaderState } from '../../../state/utils/entity-loader/entity-loader-state';
import { LoaderState } from '../../../state/utils/loader/loader-state';
import { NodeItem } from '../../model/node-item.model';
import { StateWithCms } from '../cms-state';
export declare const getNavigationEntryItemState: MemoizedSelector<StateWithCms, EntityLoaderState<NodeItem>>;
export declare const getSelectedNavigationEntryItemState: (nodeId: string) => MemoizedSelector<StateWithCms, LoaderState<NodeItem>, import("@ngrx/store").DefaultProjectorFn<LoaderState<NodeItem>>>;
export declare const getNavigationEntryItems: (nodeId: string) => MemoizedSelector<StateWithCms, NodeItem, import("@ngrx/store").DefaultProjectorFn<NodeItem>>;
