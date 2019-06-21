import { MemoizedSelector } from '@ngrx/store';
import { StateWithUser } from '../user-state';
import { LoaderState } from '../../../state/utils/loader/loader-state';
import { PaymentDetails } from '../../../model/cart.model';
export declare const getPaymentMethodsState: MemoizedSelector<StateWithUser, LoaderState<PaymentDetails[]>>;
export declare const getPaymentMethods: MemoizedSelector<StateWithUser, PaymentDetails[]>;
export declare const getPaymentMethodsLoading: MemoizedSelector<StateWithUser, boolean>;
