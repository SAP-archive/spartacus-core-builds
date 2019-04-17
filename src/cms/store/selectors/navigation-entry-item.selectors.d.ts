import { MemoizedSelector } from '@ngrx/store';
import { StateWithCms } from '../cms-state';
import { NodeItem } from '../../model/node-item.model';
import { EntityLoaderState } from '../../../state/utils/entity-loader/entity-loader-state';
import { LoaderState } from '../../../state/utils/loader/loader-state';
export declare const getNavigationEntryItemState: MemoizedSelector<StateWithCms, EntityLoaderState<NodeItem>>;
export declare const getSelectedNavigationEntryItemState: (nodeId: string) => MemoizedSelector<StateWithCms, LoaderState<NodeItem>>;
export declare const itemsSelectorFactory: (nodeId: string) => MemoizedSelector<StateWithCms, NodeItem>;
