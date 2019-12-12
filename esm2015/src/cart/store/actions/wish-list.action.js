/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EntityFailAction, EntityLoadAction, EntityResetAction, EntitySuccessAction, } from '../../../state/utils/entity-loader/entity-loader.action';
import { getCartIdByUserId } from '../../utils/utils';
import { MULTI_CART_FEATURE } from '../multi-cart-state';
/** @type {?} */
export const CREATE_WISH_LIST = '[Wish List] Create Wish List';
/** @type {?} */
export const CREATE_WISH_LIST_FAIL = '[Wish List] Create Wish List Fail';
/** @type {?} */
export const CREATE_WISH_LIST_SUCCESS = '[Wish List] Create Wish List Success';
/** @type {?} */
export const LOAD_WISH_LIST = '[Wish List] Load Wish List';
/** @type {?} */
export const LOAD_WISH_LIST_SUCCESS = '[Wish List] Load Wish List Success';
/** @type {?} */
export const RESET_WISH_LIST_DETAILS = '[Wish List] Reset Wish List';
export class CreateWishList extends EntityLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(MULTI_CART_FEATURE, 'fresh');
        this.payload = payload;
        this.type = CREATE_WISH_LIST;
    }
}
if (false) {
    /** @type {?} */
    CreateWishList.prototype.type;
    /** @type {?} */
    CreateWishList.prototype.payload;
}
export class CreateWishListSuccess extends EntitySuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(MULTI_CART_FEATURE, getCartIdByUserId(payload.cart, payload.userId));
        this.payload = payload;
        this.type = CREATE_WISH_LIST_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    CreateWishListSuccess.prototype.type;
    /** @type {?} */
    CreateWishListSuccess.prototype.payload;
}
export class CreateWishListFail extends EntityFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(MULTI_CART_FEATURE, payload.cartId, payload.error);
        this.payload = payload;
        this.type = CREATE_WISH_LIST_FAIL;
    }
}
if (false) {
    /** @type {?} */
    CreateWishListFail.prototype.type;
    /** @type {?} */
    CreateWishListFail.prototype.payload;
}
export class LoadWisthList {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_WISH_LIST;
    }
}
if (false) {
    /** @type {?} */
    LoadWisthList.prototype.type;
    /** @type {?} */
    LoadWisthList.prototype.payload;
}
export class LoadWisthListSuccess extends EntitySuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(MULTI_CART_FEATURE, getCartIdByUserId(payload.cart, payload.userId));
        this.payload = payload;
        this.type = LOAD_WISH_LIST_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadWisthListSuccess.prototype.type;
    /** @type {?} */
    LoadWisthListSuccess.prototype.payload;
}
export class ResetWishListDetails extends EntityResetAction {
    constructor() {
        super(MULTI_CART_FEATURE, undefined);
        this.type = RESET_WISH_LIST_DETAILS;
    }
}
if (false) {
    /** @type {?} */
    ResetWishListDetails.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L3N0b3JlL2FjdGlvbnMvd2lzaC1saXN0LmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLG1CQUFtQixHQUNwQixNQUFNLHlEQUF5RCxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUV6RCxNQUFNLE9BQU8sZ0JBQWdCLEdBQUcsOEJBQThCOztBQUM5RCxNQUFNLE9BQU8scUJBQXFCLEdBQUcsbUNBQW1DOztBQUN4RSxNQUFNLE9BQU8sd0JBQXdCLEdBQUcsc0NBQXNDOztBQUU5RSxNQUFNLE9BQU8sY0FBYyxHQUFHLDRCQUE0Qjs7QUFDMUQsTUFBTSxPQUFPLHNCQUFzQixHQUFHLG9DQUFvQzs7QUFFMUUsTUFBTSxPQUFPLHVCQUF1QixHQUFHLDZCQUE2QjtBQUVwRSxNQUFNLE9BQU8sY0FBZSxTQUFRLGdCQUFnQjs7OztJQUVsRCxZQUNTLE9BSU47UUFFRCxLQUFLLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFONUIsWUFBTyxHQUFQLE9BQU8sQ0FJYjtRQU5NLFNBQUksR0FBRyxnQkFBZ0IsQ0FBQztJQVNqQyxDQUFDO0NBQ0Y7OztJQVZDLDhCQUFpQzs7SUFFL0IsaUNBSUM7O0FBTUwsTUFBTSxPQUFPLHFCQUFzQixTQUFRLG1CQUFtQjs7OztJQUU1RCxZQUFtQixPQUF1QztRQUN4RCxLQUFLLENBQUMsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUQxRCxZQUFPLEdBQVAsT0FBTyxDQUFnQztRQURqRCxTQUFJLEdBQUcsd0JBQXdCLENBQUM7SUFHekMsQ0FBQztDQUNGOzs7SUFKQyxxQ0FBeUM7O0lBQzdCLHdDQUE4Qzs7QUFLNUQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGdCQUFnQjs7OztJQUV0RCxZQUFtQixPQUF3QztRQUN6RCxLQUFLLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFEeEMsWUFBTyxHQUFQLE9BQU8sQ0FBaUM7UUFEbEQsU0FBSSxHQUFHLHFCQUFxQixDQUFDO0lBR3RDLENBQUM7Q0FDRjs7O0lBSkMsa0NBQXNDOztJQUMxQixxQ0FBK0M7O0FBSzdELE1BQU0sT0FBTyxhQUFhOzs7O0lBRXhCLFlBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFNBQUksR0FBRyxjQUFjLENBQUM7SUFDTSxDQUFDO0NBQ3ZDOzs7SUFGQyw2QkFBK0I7O0lBQ25CLGdDQUFzQjs7QUFHcEMsTUFBTSxPQUFPLG9CQUFxQixTQUFRLG1CQUFtQjs7OztJQUUzRCxZQUFtQixPQUF3RDtRQUN6RSxLQUFLLENBQUMsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUQxRCxZQUFPLEdBQVAsT0FBTyxDQUFpRDtRQURsRSxTQUFJLEdBQUcsc0JBQXNCLENBQUM7SUFHdkMsQ0FBQztDQUNGOzs7SUFKQyxvQ0FBdUM7O0lBQzNCLHVDQUErRDs7QUFLN0UsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGlCQUFpQjtJQUV6RDtRQUNFLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUY5QixTQUFJLEdBQUcsdUJBQXVCLENBQUM7SUFHeEMsQ0FBQztDQUNGOzs7SUFKQyxvQ0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQge1xuICBFbnRpdHlGYWlsQWN0aW9uLFxuICBFbnRpdHlMb2FkQWN0aW9uLFxuICBFbnRpdHlSZXNldEFjdGlvbixcbiAgRW50aXR5U3VjY2Vzc0FjdGlvbixcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvZW50aXR5LWxvYWRlci9lbnRpdHktbG9hZGVyLmFjdGlvbic7XG5pbXBvcnQgeyBnZXRDYXJ0SWRCeVVzZXJJZCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcbmltcG9ydCB7IE1VTFRJX0NBUlRfRkVBVFVSRSB9IGZyb20gJy4uL211bHRpLWNhcnQtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgQ1JFQVRFX1dJU0hfTElTVCA9ICdbV2lzaCBMaXN0XSBDcmVhdGUgV2lzaCBMaXN0JztcbmV4cG9ydCBjb25zdCBDUkVBVEVfV0lTSF9MSVNUX0ZBSUwgPSAnW1dpc2ggTGlzdF0gQ3JlYXRlIFdpc2ggTGlzdCBGYWlsJztcbmV4cG9ydCBjb25zdCBDUkVBVEVfV0lTSF9MSVNUX1NVQ0NFU1MgPSAnW1dpc2ggTGlzdF0gQ3JlYXRlIFdpc2ggTGlzdCBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IExPQURfV0lTSF9MSVNUID0gJ1tXaXNoIExpc3RdIExvYWQgV2lzaCBMaXN0JztcbmV4cG9ydCBjb25zdCBMT0FEX1dJU0hfTElTVF9TVUNDRVNTID0gJ1tXaXNoIExpc3RdIExvYWQgV2lzaCBMaXN0IFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgUkVTRVRfV0lTSF9MSVNUX0RFVEFJTFMgPSAnW1dpc2ggTGlzdF0gUmVzZXQgV2lzaCBMaXN0JztcblxuZXhwb3J0IGNsYXNzIENyZWF0ZVdpc2hMaXN0IGV4dGVuZHMgRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfV0lTSF9MSVNUO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDoge1xuICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgICBuYW1lPzogc3RyaW5nO1xuICAgICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsICdmcmVzaCcpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVXaXNoTGlzdFN1Y2Nlc3MgZXh0ZW5kcyBFbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENSRUFURV9XSVNIX0xJU1RfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgY2FydDogQ2FydDsgdXNlcklkOiBzdHJpbmcgfSkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgZ2V0Q2FydElkQnlVc2VySWQocGF5bG9hZC5jYXJ0LCBwYXlsb2FkLnVzZXJJZCkpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVXaXNoTGlzdEZhaWwgZXh0ZW5kcyBFbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENSRUFURV9XSVNIX0xJU1RfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgY2FydElkOiBzdHJpbmc7IGVycm9yPzogYW55IH0pIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIHBheWxvYWQuY2FydElkLCBwYXlsb2FkLmVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFdpc3RoTGlzdCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1dJU0hfTElTVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRXaXN0aExpc3RTdWNjZXNzIGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1dJU0hfTElTVF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBjYXJ0OiBDYXJ0OyB1c2VySWQ6IHN0cmluZzsgZXh0cmFEYXRhPzogYW55IH0pIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIGdldENhcnRJZEJ5VXNlcklkKHBheWxvYWQuY2FydCwgcGF5bG9hZC51c2VySWQpKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVzZXRXaXNoTGlzdERldGFpbHMgZXh0ZW5kcyBFbnRpdHlSZXNldEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRVNFVF9XSVNIX0xJU1RfREVUQUlMUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCB1bmRlZmluZWQpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFdpc2hMaXN0QWN0aW9ucyA9XG4gIHwgQ3JlYXRlV2lzaExpc3RcbiAgfCBDcmVhdGVXaXNoTGlzdFN1Y2Nlc3NcbiAgfCBDcmVhdGVXaXNoTGlzdEZhaWxcbiAgfCBMb2FkV2lzdGhMaXN0XG4gIHwgTG9hZFdpc3RoTGlzdFN1Y2Nlc3NcbiAgfCBSZXNldFdpc2hMaXN0RGV0YWlscztcbiJdfQ==