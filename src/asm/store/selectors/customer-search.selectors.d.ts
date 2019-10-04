import { MemoizedSelector } from '@ngrx/store';
import { LoaderState } from '../../../state/utils/loader/loader-state';
import { CustomerSearchPage } from '../../models/asm.models';
import { StateWithAsm } from '../asm-state';
export declare const getCustomerSearchResultsLoaderState: MemoizedSelector<StateWithAsm, LoaderState<CustomerSearchPage>>;
export declare const getCustomerSearchResults: MemoizedSelector<StateWithAsm, CustomerSearchPage>;
export declare const getCustomerSearchResultsLoading: MemoizedSelector<StateWithAsm, boolean>;
