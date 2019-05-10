import { Address } from '../../model/address.model';
import { DeliveryMode } from '../../model/order.model';
import { PaymentDetails } from '../../model/cart.model';
export declare type CheckoutDetails = {
    deliveryAddress?: Address;
    deliveryMode?: DeliveryMode;
    paymentInfo?: PaymentDetails;
};
