import * as fromPaymentMethodsAction from '../actions/payment-methods.action';
import { PaymentDetails } from '../../../model/cart.model';
export declare const initialState: PaymentDetails[];
export declare function reducer(state: PaymentDetails[], action: fromPaymentMethodsAction.UserPaymentMethodsAction): PaymentDetails[];
