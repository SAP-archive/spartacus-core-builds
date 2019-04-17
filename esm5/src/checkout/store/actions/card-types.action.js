/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var LOAD_CARD_TYPES = '[Checkout] Load Card Types';
/** @type {?} */
export var LOAD_CARD_TYPES_FAIL = '[Checkout] Load Card Fail';
/** @type {?} */
export var LOAD_CARD_TYPES_SUCCESS = '[Checkout] Load Card Success';
var LoadCardTypes = /** @class */ (function () {
    function LoadCardTypes() {
        this.type = LOAD_CARD_TYPES;
    }
    return LoadCardTypes;
}());
export { LoadCardTypes };
if (false) {
    /** @type {?} */
    LoadCardTypes.prototype.type;
}
var LoadCardTypesFail = /** @class */ (function () {
    function LoadCardTypesFail(payload) {
        this.payload = payload;
        this.type = LOAD_CARD_TYPES_FAIL;
    }
    return LoadCardTypesFail;
}());
export { LoadCardTypesFail };
if (false) {
    /** @type {?} */
    LoadCardTypesFail.prototype.type;
    /** @type {?} */
    LoadCardTypesFail.prototype.payload;
}
var LoadCardTypesSuccess = /** @class */ (function () {
    function LoadCardTypesSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_CARD_TYPES_SUCCESS;
    }
    return LoadCardTypesSuccess;
}());
export { LoadCardTypesSuccess };
if (false) {
    /** @type {?} */
    LoadCardTypesSuccess.prototype.type;
    /** @type {?} */
    LoadCardTypesSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC10eXBlcy5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2hlY2tvdXQvc3RvcmUvYWN0aW9ucy9jYXJkLXR5cGVzLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE1BQU0sS0FBTyxlQUFlLEdBQUcsNEJBQTRCOztBQUMzRCxNQUFNLEtBQU8sb0JBQW9CLEdBQUcsMkJBQTJCOztBQUMvRCxNQUFNLEtBQU8sdUJBQXVCLEdBQUcsOEJBQThCO0FBRXJFO0lBRUU7UUFEUyxTQUFJLEdBQUcsZUFBZSxDQUFDO0lBQ2pCLENBQUM7SUFDbEIsb0JBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLDZCQUFnQzs7QUFJbEM7SUFFRSwyQkFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLG9CQUFvQixDQUFDO0lBQ0gsQ0FBQztJQUNyQyx3QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsaUNBQXFDOztJQUN6QixvQ0FBbUI7O0FBR2pDO0lBRUUsOEJBQW1CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFEN0IsU0FBSSxHQUFHLHVCQUF1QixDQUFDO0lBQ0MsQ0FBQztJQUM1QywyQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsb0NBQXdDOztJQUM1Qix1Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBDYXJkVHlwZSB9IGZyb20gJy4uLy4uLy4uL29jYy9vY2MtbW9kZWxzL2luZGV4JztcblxuZXhwb3J0IGNvbnN0IExPQURfQ0FSRF9UWVBFUyA9ICdbQ2hlY2tvdXRdIExvYWQgQ2FyZCBUeXBlcyc7XG5leHBvcnQgY29uc3QgTE9BRF9DQVJEX1RZUEVTX0ZBSUwgPSAnW0NoZWNrb3V0XSBMb2FkIENhcmQgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9DQVJEX1RZUEVTX1NVQ0NFU1MgPSAnW0NoZWNrb3V0XSBMb2FkIENhcmQgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ2FyZFR5cGVzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ0FSRF9UWVBFUztcbiAgY29uc3RydWN0b3IoKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENhcmRUeXBlc0ZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DQVJEX1RZUEVTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ2FyZFR5cGVzU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NBUkRfVFlQRVNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IENhcmRUeXBlW10pIHt9XG59XG5cbmV4cG9ydCB0eXBlIENhcmRUeXBlc0FjdGlvbiA9XG4gIHwgTG9hZENhcmRUeXBlc1xuICB8IExvYWRDYXJkVHlwZXNGYWlsXG4gIHwgTG9hZENhcmRUeXBlc1N1Y2Nlc3M7XG4iXX0=