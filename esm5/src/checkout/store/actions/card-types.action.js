/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC10eXBlcy5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2hlY2tvdXQvc3RvcmUvYWN0aW9ucy9jYXJkLXR5cGVzLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE1BQU0sS0FBTyxlQUFlLEdBQUcsNEJBQTRCOztBQUMzRCxNQUFNLEtBQU8sb0JBQW9CLEdBQUcsMkJBQTJCOztBQUMvRCxNQUFNLEtBQU8sdUJBQXVCLEdBQUcsOEJBQThCO0FBRXJFO0lBRUU7UUFEUyxTQUFJLEdBQUcsZUFBZSxDQUFDO0lBQ2pCLENBQUM7SUFDbEIsb0JBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLDZCQUFnQzs7QUFJbEM7SUFFRSwyQkFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLG9CQUFvQixDQUFDO0lBQ0gsQ0FBQztJQUNyQyx3QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsaUNBQXFDOztJQUN6QixvQ0FBbUI7O0FBR2pDO0lBRUUsOEJBQW1CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFEN0IsU0FBSSxHQUFHLHVCQUF1QixDQUFDO0lBQ0MsQ0FBQztJQUM1QywyQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsb0NBQXdDOztJQUM1Qix1Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBDYXJkVHlwZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9DQVJEX1RZUEVTID0gJ1tDaGVja291dF0gTG9hZCBDYXJkIFR5cGVzJztcbmV4cG9ydCBjb25zdCBMT0FEX0NBUkRfVFlQRVNfRkFJTCA9ICdbQ2hlY2tvdXRdIExvYWQgQ2FyZCBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX0NBUkRfVFlQRVNfU1VDQ0VTUyA9ICdbQ2hlY2tvdXRdIExvYWQgQ2FyZCBTdWNjZXNzJztcblxuZXhwb3J0IGNsYXNzIExvYWRDYXJkVHlwZXMgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DQVJEX1RZUEVTO1xuICBjb25zdHJ1Y3RvcigpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ2FyZFR5cGVzRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NBUkRfVFlQRVNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDYXJkVHlwZXNTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ0FSRF9UWVBFU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ2FyZFR5cGVbXSkge31cbn1cblxuZXhwb3J0IHR5cGUgQ2FyZFR5cGVzQWN0aW9uID1cbiAgfCBMb2FkQ2FyZFR5cGVzXG4gIHwgTG9hZENhcmRUeXBlc0ZhaWxcbiAgfCBMb2FkQ2FyZFR5cGVzU3VjY2VzcztcbiJdfQ==