import { Address, DeliveryMode, PaymentDetails } from '../../occ/occ-models/index';
export declare type CheckoutDetails = {
    deliveryAddress?: Address;
    deliveryMode?: DeliveryMode;
    paymentInfo?: PaymentDetails;
};
