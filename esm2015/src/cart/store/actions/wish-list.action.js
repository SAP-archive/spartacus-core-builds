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
export class LoadWisthList extends EntityLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(MULTI_CART_FEATURE, payload);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L3N0b3JlL2FjdGlvbnMvd2lzaC1saXN0LmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLG1CQUFtQixHQUNwQixNQUFNLHlEQUF5RCxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUV6RCxNQUFNLE9BQU8sZ0JBQWdCLEdBQUcsOEJBQThCOztBQUM5RCxNQUFNLE9BQU8scUJBQXFCLEdBQUcsbUNBQW1DOztBQUN4RSxNQUFNLE9BQU8sd0JBQXdCLEdBQUcsc0NBQXNDOztBQUU5RSxNQUFNLE9BQU8sY0FBYyxHQUFHLDRCQUE0Qjs7QUFDMUQsTUFBTSxPQUFPLHNCQUFzQixHQUFHLG9DQUFvQzs7QUFFMUUsTUFBTSxPQUFPLHVCQUF1QixHQUFHLDZCQUE2QjtBQUVwRSxNQUFNLE9BQU8sY0FBZSxTQUFRLGdCQUFnQjs7OztJQUVsRCxZQUNTLE9BSU47UUFFRCxLQUFLLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFONUIsWUFBTyxHQUFQLE9BQU8sQ0FJYjtRQU5NLFNBQUksR0FBRyxnQkFBZ0IsQ0FBQztJQVNqQyxDQUFDO0NBQ0Y7OztJQVZDLDhCQUFpQzs7SUFFL0IsaUNBSUM7O0FBTUwsTUFBTSxPQUFPLHFCQUFzQixTQUFRLG1CQUFtQjs7OztJQUU1RCxZQUFtQixPQUF1QztRQUN4RCxLQUFLLENBQUMsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUQxRCxZQUFPLEdBQVAsT0FBTyxDQUFnQztRQURqRCxTQUFJLEdBQUcsd0JBQXdCLENBQUM7SUFHekMsQ0FBQztDQUNGOzs7SUFKQyxxQ0FBeUM7O0lBQzdCLHdDQUE4Qzs7QUFLNUQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGdCQUFnQjs7OztJQUV0RCxZQUFtQixPQUF3QztRQUN6RCxLQUFLLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFEeEMsWUFBTyxHQUFQLE9BQU8sQ0FBaUM7UUFEbEQsU0FBSSxHQUFHLHFCQUFxQixDQUFDO0lBR3RDLENBQUM7Q0FDRjs7O0lBSkMsa0NBQXNDOztJQUMxQixxQ0FBK0M7O0FBSzdELE1BQU0sT0FBTyxhQUFjLFNBQVEsZ0JBQWdCOzs7O0lBRWpELFlBQW1CLE9BQWU7UUFDaEMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRGxCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSxHQUFHLGNBQWMsQ0FBQztJQUcvQixDQUFDO0NBQ0Y7OztJQUpDLDZCQUErQjs7SUFDbkIsZ0NBQXNCOztBQUtwQyxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsbUJBQW1COzs7O0lBRTNELFlBQW1CLE9BQXdEO1FBQ3pFLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBRDFELFlBQU8sR0FBUCxPQUFPLENBQWlEO1FBRGxFLFNBQUksR0FBRyxzQkFBc0IsQ0FBQztJQUd2QyxDQUFDO0NBQ0Y7OztJQUpDLG9DQUF1Qzs7SUFDM0IsdUNBQStEOztBQUs3RSxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsaUJBQWlCO0lBRXpEO1FBQ0UsS0FBSyxDQUFDLGtCQUFrQixFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRjlCLFNBQUksR0FBRyx1QkFBdUIsQ0FBQztJQUd4QyxDQUFDO0NBQ0Y7OztJQUpDLG9DQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7XG4gIEVudGl0eUZhaWxBY3Rpb24sXG4gIEVudGl0eUxvYWRBY3Rpb24sXG4gIEVudGl0eVJlc2V0QWN0aW9uLFxuICBFbnRpdHlTdWNjZXNzQWN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktbG9hZGVyL2VudGl0eS1sb2FkZXIuYWN0aW9uJztcbmltcG9ydCB7IGdldENhcnRJZEJ5VXNlcklkIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0IHsgTVVMVElfQ0FSVF9GRUFUVVJFIH0gZnJvbSAnLi4vbXVsdGktY2FydC1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBDUkVBVEVfV0lTSF9MSVNUID0gJ1tXaXNoIExpc3RdIENyZWF0ZSBXaXNoIExpc3QnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9XSVNIX0xJU1RfRkFJTCA9ICdbV2lzaCBMaXN0XSBDcmVhdGUgV2lzaCBMaXN0IEZhaWwnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9XSVNIX0xJU1RfU1VDQ0VTUyA9ICdbV2lzaCBMaXN0XSBDcmVhdGUgV2lzaCBMaXN0IFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9XSVNIX0xJU1QgPSAnW1dpc2ggTGlzdF0gTG9hZCBXaXNoIExpc3QnO1xuZXhwb3J0IGNvbnN0IExPQURfV0lTSF9MSVNUX1NVQ0NFU1MgPSAnW1dpc2ggTGlzdF0gTG9hZCBXaXNoIExpc3QgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBSRVNFVF9XSVNIX0xJU1RfREVUQUlMUyA9ICdbV2lzaCBMaXN0XSBSZXNldCBXaXNoIExpc3QnO1xuXG5leHBvcnQgY2xhc3MgQ3JlYXRlV2lzaExpc3QgZXh0ZW5kcyBFbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENSRUFURV9XSVNIX0xJU1Q7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICB1c2VySWQ6IHN0cmluZztcbiAgICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICB9XG4gICkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgJ2ZyZXNoJyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENyZWF0ZVdpc2hMaXN0U3VjY2VzcyBleHRlbmRzIEVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1JFQVRFX1dJU0hfTElTVF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBjYXJ0OiBDYXJ0OyB1c2VySWQ6IHN0cmluZyB9KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCBnZXRDYXJ0SWRCeVVzZXJJZChwYXlsb2FkLmNhcnQsIHBheWxvYWQudXNlcklkKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENyZWF0ZVdpc2hMaXN0RmFpbCBleHRlbmRzIEVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1JFQVRFX1dJU0hfTElTVF9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBjYXJ0SWQ6IHN0cmluZzsgZXJyb3I/OiBhbnkgfSkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgcGF5bG9hZC5jYXJ0SWQsIHBheWxvYWQuZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkV2lzdGhMaXN0IGV4dGVuZHMgRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1dJU0hfTElTVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRXaXN0aExpc3RTdWNjZXNzIGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1dJU0hfTElTVF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBjYXJ0OiBDYXJ0OyB1c2VySWQ6IHN0cmluZzsgZXh0cmFEYXRhPzogYW55IH0pIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIGdldENhcnRJZEJ5VXNlcklkKHBheWxvYWQuY2FydCwgcGF5bG9hZC51c2VySWQpKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVzZXRXaXNoTGlzdERldGFpbHMgZXh0ZW5kcyBFbnRpdHlSZXNldEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRVNFVF9XSVNIX0xJU1RfREVUQUlMUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9GRUFUVVJFLCB1bmRlZmluZWQpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFdpc2hMaXN0QWN0aW9ucyA9XG4gIHwgQ3JlYXRlV2lzaExpc3RcbiAgfCBDcmVhdGVXaXNoTGlzdFN1Y2Nlc3NcbiAgfCBDcmVhdGVXaXNoTGlzdEZhaWxcbiAgfCBMb2FkV2lzdGhMaXN0XG4gIHwgTG9hZFdpc3RoTGlzdFN1Y2Nlc3NcbiAgfCBSZXNldFdpc2hMaXN0RGV0YWlscztcbiJdfQ==