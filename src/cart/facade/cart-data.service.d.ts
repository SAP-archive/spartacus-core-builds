import { UICart } from '../model';
export declare const ANONYMOUS_USERID = "anonymous";
export declare class CartDataService {
    private _userId;
    private _cart;
    private _getDetails;
    constructor();
    readonly hasCart: boolean;
    userId: string;
    cart: UICart;
    getDetails: any;
    readonly cartId: string;
}
