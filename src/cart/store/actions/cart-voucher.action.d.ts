import { EntityFailAction, EntityLoadAction, EntityResetAction, EntitySuccessAction } from '../../../state/utils/entity-loader/entity-loader.action';
import { EntityProcessesDecrementAction, EntityProcessesIncrementAction } from '../../../state/utils/entity-processes-loader/entity-processes-loader.action';
export declare const CART_ADD_VOUCHER = "[Cart-voucher] Add Cart Vouchers";
export declare const CART_ADD_VOUCHER_FAIL = "[Cart-voucher] Add Cart Voucher Fail";
export declare const CART_ADD_VOUCHER_SUCCESS = "[Cart-voucher] Add Cart Voucher Success";
export declare const CART_RESET_ADD_VOUCHER = "[Cart-voucher] Reset Add Cart Voucher";
export declare const CART_REMOVE_VOUCHER = "[Cart-voucher] Remove Cart Voucher";
export declare const CART_REMOVE_VOUCHER_FAIL = "[Cart-voucher] Remove Cart Voucher Fail";
export declare const CART_REMOVE_VOUCHER_SUCCESS = "[Cart-voucher] Remove Cart Voucher Success";
export declare class CartAddVoucher extends EntityLoadAction {
    payload: {
        userId: string;
        cartId: string;
        voucherId: string;
    };
    readonly type = "[Cart-voucher] Add Cart Vouchers";
    constructor(payload: {
        userId: string;
        cartId: string;
        voucherId: string;
    });
}
export declare class CartAddVoucherFail extends EntityFailAction {
    payload: any;
    readonly type = "[Cart-voucher] Add Cart Voucher Fail";
    constructor(payload: any);
}
export declare class CartAddVoucherSuccess extends EntitySuccessAction {
    payload: {
        userId: string;
        cartId: string;
    };
    readonly type = "[Cart-voucher] Add Cart Voucher Success";
    constructor(payload: {
        userId: string;
        cartId: string;
    });
}
export declare class CartResetAddVoucher extends EntityResetAction {
    readonly type = "[Cart-voucher] Reset Add Cart Voucher";
    constructor();
}
export declare class CartRemoveVoucher extends EntityProcessesIncrementAction {
    payload: {
        userId: string;
        cartId: string;
        voucherId: string;
    };
    readonly type = "[Cart-voucher] Remove Cart Voucher";
    constructor(payload: {
        userId: string;
        cartId: string;
        voucherId: string;
    });
}
export declare class CartRemoveVoucherFail extends EntityProcessesDecrementAction {
    payload: {
        error: any;
        cartId: string;
        userId: string;
        voucherId: string;
    };
    readonly type = "[Cart-voucher] Remove Cart Voucher Fail";
    constructor(payload: {
        error: any;
        cartId: string;
        userId: string;
        voucherId: string;
    });
}
export declare class CartRemoveVoucherSuccess extends EntityProcessesDecrementAction {
    payload: {
        userId: string;
        cartId: string;
        voucherId: string;
    };
    readonly type = "[Cart-voucher] Remove Cart Voucher Success";
    constructor(payload: {
        userId: string;
        cartId: string;
        voucherId: string;
    });
}
export declare type CartVoucherAction = CartAddVoucher | CartAddVoucherFail | CartAddVoucherSuccess | CartResetAddVoucher | CartRemoveVoucher | CartRemoveVoucherFail | CartRemoveVoucherSuccess;
