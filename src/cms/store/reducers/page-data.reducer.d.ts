import * as fromAction from '../actions';
import { Page } from '../../model/page.model';
import { EntityState } from '../../../state/utils/entity/entity-state';
export declare const initialState: EntityState<Page>;
export declare function reducer(state: EntityState<Page>, action: fromAction.LoadPageDataSuccess): EntityState<Page>;
