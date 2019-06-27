import { PaymentDetails } from '../../../model/cart.model';
import { UserActions } from '../actions/index';
export declare const initialState: PaymentDetails[];
export declare function reducer(state: PaymentDetails[], action: UserActions.UserPaymentMethodsAction): PaymentDetails[];
