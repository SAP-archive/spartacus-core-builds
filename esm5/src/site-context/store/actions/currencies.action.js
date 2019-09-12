/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var LOAD_CURRENCIES = '[Site-context] Load Currencies';
/** @type {?} */
export var LOAD_CURRENCIES_FAIL = '[Site-context] Load Currencies Fail';
/** @type {?} */
export var LOAD_CURRENCIES_SUCCESS = '[Site-context] Load Currencies Success';
/** @type {?} */
export var SET_ACTIVE_CURRENCY = '[Site-context] Set Active Currency';
/** @type {?} */
export var CURRENCY_CHANGE = '[Site-context] Currency Change';
var LoadCurrencies = /** @class */ (function () {
    function LoadCurrencies() {
        this.type = LOAD_CURRENCIES;
    }
    return LoadCurrencies;
}());
export { LoadCurrencies };
if (false) {
    /** @type {?} */
    LoadCurrencies.prototype.type;
}
var LoadCurrenciesFail = /** @class */ (function () {
    function LoadCurrenciesFail(payload) {
        this.payload = payload;
        this.type = LOAD_CURRENCIES_FAIL;
    }
    return LoadCurrenciesFail;
}());
export { LoadCurrenciesFail };
if (false) {
    /** @type {?} */
    LoadCurrenciesFail.prototype.type;
    /** @type {?} */
    LoadCurrenciesFail.prototype.payload;
}
var LoadCurrenciesSuccess = /** @class */ (function () {
    function LoadCurrenciesSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_CURRENCIES_SUCCESS;
    }
    return LoadCurrenciesSuccess;
}());
export { LoadCurrenciesSuccess };
if (false) {
    /** @type {?} */
    LoadCurrenciesSuccess.prototype.type;
    /** @type {?} */
    LoadCurrenciesSuccess.prototype.payload;
}
var SetActiveCurrency = /** @class */ (function () {
    function SetActiveCurrency(payload) {
        this.payload = payload;
        this.type = SET_ACTIVE_CURRENCY;
    }
    return SetActiveCurrency;
}());
export { SetActiveCurrency };
if (false) {
    /** @type {?} */
    SetActiveCurrency.prototype.type;
    /** @type {?} */
    SetActiveCurrency.prototype.payload;
}
var CurrencyChange = /** @class */ (function () {
    function CurrencyChange() {
        this.type = CURRENCY_CHANGE;
    }
    return CurrencyChange;
}());
export { CurrencyChange };
if (false) {
    /** @type {?} */
    CurrencyChange.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY2llcy5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L3N0b3JlL2FjdGlvbnMvY3VycmVuY2llcy5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxNQUFNLEtBQU8sZUFBZSxHQUFHLGdDQUFnQzs7QUFDL0QsTUFBTSxLQUFPLG9CQUFvQixHQUFHLHFDQUFxQzs7QUFDekUsTUFBTSxLQUFPLHVCQUF1QixHQUFHLHdDQUF3Qzs7QUFDL0UsTUFBTSxLQUFPLG1CQUFtQixHQUFHLG9DQUFvQzs7QUFDdkUsTUFBTSxLQUFPLGVBQWUsR0FBRyxnQ0FBZ0M7QUFFL0Q7SUFBQTtRQUNXLFNBQUksR0FBRyxlQUFlLENBQUM7SUFDbEMsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7SUFEQyw4QkFBZ0M7O0FBR2xDO0lBRUUsNEJBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxvQkFBb0IsQ0FBQztJQUNILENBQUM7SUFDckMseUJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLGtDQUFxQzs7SUFDekIscUNBQW1COztBQUdqQztJQUVFLCtCQUFtQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBRDdCLFNBQUksR0FBRyx1QkFBdUIsQ0FBQztJQUNDLENBQUM7SUFDNUMsNEJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLHFDQUF3Qzs7SUFDNUIsd0NBQTBCOztBQUd4QztJQUVFLDJCQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUR6QixTQUFJLEdBQUcsbUJBQW1CLENBQUM7SUFDQyxDQUFDO0lBQ3hDLHdCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyxpQ0FBb0M7O0lBQ3hCLG9DQUFzQjs7QUFHcEM7SUFBQTtRQUNXLFNBQUksR0FBRyxlQUFlLENBQUM7SUFDbEMsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7SUFEQyw4QkFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBDdXJyZW5jeSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9DVVJSRU5DSUVTID0gJ1tTaXRlLWNvbnRleHRdIExvYWQgQ3VycmVuY2llcyc7XG5leHBvcnQgY29uc3QgTE9BRF9DVVJSRU5DSUVTX0ZBSUwgPSAnW1NpdGUtY29udGV4dF0gTG9hZCBDdXJyZW5jaWVzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfQ1VSUkVOQ0lFU19TVUNDRVNTID0gJ1tTaXRlLWNvbnRleHRdIExvYWQgQ3VycmVuY2llcyBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBTRVRfQUNUSVZFX0NVUlJFTkNZID0gJ1tTaXRlLWNvbnRleHRdIFNldCBBY3RpdmUgQ3VycmVuY3knO1xuZXhwb3J0IGNvbnN0IENVUlJFTkNZX0NIQU5HRSA9ICdbU2l0ZS1jb250ZXh0XSBDdXJyZW5jeSBDaGFuZ2UnO1xuXG5leHBvcnQgY2xhc3MgTG9hZEN1cnJlbmNpZXMgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DVVJSRU5DSUVTO1xufVxuXG5leHBvcnQgY2xhc3MgTG9hZEN1cnJlbmNpZXNGYWlsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ1VSUkVOQ0lFU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZEN1cnJlbmNpZXNTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ1VSUkVOQ0lFU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ3VycmVuY3lbXSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFNldEFjdGl2ZUN1cnJlbmN5IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9BQ1RJVkVfQ1VSUkVOQ1k7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDdXJyZW5jeUNoYW5nZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDVVJSRU5DWV9DSEFOR0U7XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgQ3VycmVuY2llc0FjdGlvbiA9XG4gIHwgTG9hZEN1cnJlbmNpZXNcbiAgfCBMb2FkQ3VycmVuY2llc0ZhaWxcbiAgfCBMb2FkQ3VycmVuY2llc1N1Y2Nlc3NcbiAgfCBTZXRBY3RpdmVDdXJyZW5jeVxuICB8IEN1cnJlbmN5Q2hhbmdlO1xuIl19