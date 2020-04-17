import { MemoizedSelector } from '@ngrx/store';
import { StateUtils } from '../../../state/utils/index';
import { CustomerSearchPage } from '../../models/asm.models';
import { StateWithAsm } from '../asm-state';
export declare const getCustomerSearchResultsLoaderState: MemoizedSelector<StateWithAsm, StateUtils.LoaderState<CustomerSearchPage>>;
export declare const getCustomerSearchResults: MemoizedSelector<StateWithAsm, CustomerSearchPage>;
export declare const getCustomerSearchResultsLoading: MemoizedSelector<StateWithAsm, boolean>;
