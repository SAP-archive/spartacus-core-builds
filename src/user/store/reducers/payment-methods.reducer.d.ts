import * as fromPaymentMethodsAction from '../actions/payment-methods.action';
import { PaymentDetails } from '../../../occ/occ-models/index';
export declare const initialState: PaymentDetails[];
export declare function reducer(state: PaymentDetails[], action: fromPaymentMethodsAction.UserPaymentMethodsAction): PaymentDetails[];
