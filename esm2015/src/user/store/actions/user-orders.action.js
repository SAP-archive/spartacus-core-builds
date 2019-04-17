/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { USER_ORDERS } from '../user-state';
import { LoaderLoadAction, LoaderFailAction, LoaderSuccessAction, } from '../../../state/utils/loader/loader.action';
/** @type {?} */
export const LOAD_USER_ORDERS = '[User] Load User Orders';
/** @type {?} */
export const LOAD_USER_ORDERS_FAIL = '[User] Load User Orders Fail';
/** @type {?} */
export const LOAD_USER_ORDERS_SUCCESS = '[User] Load User Orders Success';
/** @type {?} */
export const CLEAR_USER_ORDERS = '[User] Clear User Orders';
export class LoadUserOrders extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ORDERS);
        this.payload = payload;
        this.type = LOAD_USER_ORDERS;
    }
}
if (false) {
    /** @type {?} */
    LoadUserOrders.prototype.type;
    /** @type {?} */
    LoadUserOrders.prototype.payload;
}
export class LoadUserOrdersFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ORDERS, payload);
        this.payload = payload;
        this.type = LOAD_USER_ORDERS_FAIL;
    }
}
if (false) {
    /** @type {?} */
    LoadUserOrdersFail.prototype.type;
    /** @type {?} */
    LoadUserOrdersFail.prototype.payload;
}
export class LoadUserOrdersSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(USER_ORDERS);
        this.payload = payload;
        this.type = LOAD_USER_ORDERS_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadUserOrdersSuccess.prototype.type;
    /** @type {?} */
    LoadUserOrdersSuccess.prototype.payload;
}
export class ClearUserOrders {
    constructor() {
        this.type = CLEAR_USER_ORDERS;
    }
}
if (false) {
    /** @type {?} */
    ClearUserOrders.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlcnMuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvYWN0aW9ucy91c2VyLW9yZGVycy5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUMsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsbUJBQW1CLEdBQ3BCLE1BQU0sMkNBQTJDLENBQUM7O0FBRW5ELE1BQU0sT0FBTyxnQkFBZ0IsR0FBRyx5QkFBeUI7O0FBQ3pELE1BQU0sT0FBTyxxQkFBcUIsR0FBRyw4QkFBOEI7O0FBQ25FLE1BQU0sT0FBTyx3QkFBd0IsR0FBRyxpQ0FBaUM7O0FBQ3pFLE1BQU0sT0FBTyxpQkFBaUIsR0FBRywwQkFBMEI7QUFFM0QsTUFBTSxPQUFPLGNBQWUsU0FBUSxnQkFBZ0I7Ozs7SUFFbEQsWUFDUyxPQUtOO1FBRUQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBUFosWUFBTyxHQUFQLE9BQU8sQ0FLYjtRQVBNLFNBQUksR0FBRyxnQkFBZ0IsQ0FBQztJQVVqQyxDQUFDO0NBQ0Y7OztJQVhDLDhCQUFpQzs7SUFFL0IsaUNBS0M7O0FBTUwsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGdCQUFnQjs7OztJQUV0RCxZQUFtQixPQUFZO1FBQzdCLEtBQUssQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFEWCxZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxxQkFBcUIsQ0FBQztJQUd0QyxDQUFDO0NBQ0Y7OztJQUpDLGtDQUFzQzs7SUFDMUIscUNBQW1COztBQUtqQyxNQUFNLE9BQU8scUJBQXNCLFNBQVEsbUJBQW1COzs7O0lBRTVELFlBQW1CLE9BQXlCO1FBQzFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQURGLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBRG5DLFNBQUksR0FBRyx3QkFBd0IsQ0FBQztJQUd6QyxDQUFDO0NBQ0Y7OztJQUpDLHFDQUF5Qzs7SUFDN0Isd0NBQWdDOztBQUs5QyxNQUFNLE9BQU8sZUFBZTtJQUUxQjtRQURTLFNBQUksR0FBRyxpQkFBaUIsQ0FBQztJQUNuQixDQUFDO0NBQ2pCOzs7SUFGQywrQkFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVU0VSX09SREVSUyB9IGZyb20gJy4uL3VzZXItc3RhdGUnO1xuaW1wb3J0IHsgT3JkZXJIaXN0b3J5TGlzdCB9IGZyb20gJy4uLy4uLy4uL29jYy9vY2MtbW9kZWxzL2luZGV4JztcbmltcG9ydCB7XG4gIExvYWRlckxvYWRBY3Rpb24sXG4gIExvYWRlckZhaWxBY3Rpb24sXG4gIExvYWRlclN1Y2Nlc3NBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXIuYWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9PUkRFUlMgPSAnW1VzZXJdIExvYWQgVXNlciBPcmRlcnMnO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9PUkRFUlNfRkFJTCA9ICdbVXNlcl0gTG9hZCBVc2VyIE9yZGVycyBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfT1JERVJTX1NVQ0NFU1MgPSAnW1VzZXJdIExvYWQgVXNlciBPcmRlcnMgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgQ0xFQVJfVVNFUl9PUkRFUlMgPSAnW1VzZXJdIENsZWFyIFVzZXIgT3JkZXJzJztcblxuZXhwb3J0IGNsYXNzIExvYWRVc2VyT3JkZXJzIGV4dGVuZHMgTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1VTRVJfT1JERVJTO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDoge1xuICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgICBwYWdlU2l6ZTogbnVtYmVyO1xuICAgICAgY3VycmVudFBhZ2U/OiBudW1iZXI7XG4gICAgICBzb3J0Pzogc3RyaW5nO1xuICAgIH1cbiAgKSB7XG4gICAgc3VwZXIoVVNFUl9PUkRFUlMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkVXNlck9yZGVyc0ZhaWwgZXh0ZW5kcyBMb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfVVNFUl9PUkRFUlNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFVTRVJfT1JERVJTLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFVzZXJPcmRlcnNTdWNjZXNzIGV4dGVuZHMgTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1VTRVJfT1JERVJTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBPcmRlckhpc3RvcnlMaXN0KSB7XG4gICAgc3VwZXIoVVNFUl9PUkRFUlMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhclVzZXJPcmRlcnMge1xuICByZWFkb25seSB0eXBlID0gQ0xFQVJfVVNFUl9PUkRFUlM7XG4gIGNvbnN0cnVjdG9yKCkge31cbn1cblxuZXhwb3J0IHR5cGUgVXNlck9yZGVyc0FjdGlvbiA9XG4gIHwgTG9hZFVzZXJPcmRlcnNcbiAgfCBMb2FkVXNlck9yZGVyc0ZhaWxcbiAgfCBMb2FkVXNlck9yZGVyc1N1Y2Nlc3NcbiAgfCBDbGVhclVzZXJPcmRlcnM7XG4iXX0=