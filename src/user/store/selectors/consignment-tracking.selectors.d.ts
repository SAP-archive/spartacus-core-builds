import { MemoizedSelector } from '@ngrx/store';
import { ConsignmentTracking } from '../../../model/index';
import { ConsignmentTrackingState, StateWithUser } from '../user-state';
export declare const getConsignmentTrackingState: MemoizedSelector<StateWithUser, ConsignmentTrackingState>;
export declare const getConsignmentTracking: MemoizedSelector<StateWithUser, ConsignmentTracking>;
