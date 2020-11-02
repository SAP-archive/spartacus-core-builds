import { OrderEntry } from '../../model/order.model';
/**
 * Base cart event. Most cart events should have `cartId` and `userId`.
 */
export interface CartEvent {
    cartId: string;
    cartCode: string;
    userId: string;
}
export declare class CartAddEntryEvent implements CartEvent {
    cartId: string;
    cartCode: string;
    userId: string;
    productCode: string;
    quantity: number;
}
export declare class CartAddEntrySuccessEvent implements CartEvent {
    cartId: string;
    cartCode: string;
    userId: string;
    productCode: string;
    quantity: number;
    entry: OrderEntry;
    quantityAdded: number;
    deliveryModeChanged: boolean;
}
export declare class CartAddEntryFailEvent implements CartEvent {
    cartId: string;
    cartCode: string;
    userId: string;
    productCode: string;
    quantity: number;
}
export declare class CartRemoveEntrySuccessEvent implements CartEvent {
    cartId: string;
    cartCode: string;
    userId: string;
    entry: OrderEntry;
}
export declare class CartUpdateEntrySuccessEvent implements CartEvent {
    cartId: string;
    cartCode: string;
    userId: string;
    quantity: number;
    entry: OrderEntry;
}
