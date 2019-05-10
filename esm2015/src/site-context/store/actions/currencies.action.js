/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const LOAD_CURRENCIES = '[Site-context] Load Currencies';
/** @type {?} */
export const LOAD_CURRENCIES_FAIL = '[Site-context] Load Currencies Fail';
/** @type {?} */
export const LOAD_CURRENCIES_SUCCESS = '[Site-context] Load Currencies Success';
/** @type {?} */
export const SET_ACTIVE_CURRENCY = '[Site-context] Set Active Currency';
/** @type {?} */
export const CURRENCY_CHANGE = '[Site-context] Currency Change';
export class LoadCurrencies {
    constructor() {
        this.type = LOAD_CURRENCIES;
    }
}
if (false) {
    /** @type {?} */
    LoadCurrencies.prototype.type;
}
export class LoadCurrenciesFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_CURRENCIES_FAIL;
    }
}
if (false) {
    /** @type {?} */
    LoadCurrenciesFail.prototype.type;
    /** @type {?} */
    LoadCurrenciesFail.prototype.payload;
}
export class LoadCurrenciesSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_CURRENCIES_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadCurrenciesSuccess.prototype.type;
    /** @type {?} */
    LoadCurrenciesSuccess.prototype.payload;
}
export class SetActiveCurrency {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SET_ACTIVE_CURRENCY;
    }
}
if (false) {
    /** @type {?} */
    SetActiveCurrency.prototype.type;
    /** @type {?} */
    SetActiveCurrency.prototype.payload;
}
export class CurrencyChange {
    constructor() {
        this.type = CURRENCY_CHANGE;
    }
}
if (false) {
    /** @type {?} */
    CurrencyChange.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY2llcy5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L3N0b3JlL2FjdGlvbnMvY3VycmVuY2llcy5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxNQUFNLE9BQU8sZUFBZSxHQUFHLGdDQUFnQzs7QUFDL0QsTUFBTSxPQUFPLG9CQUFvQixHQUFHLHFDQUFxQzs7QUFDekUsTUFBTSxPQUFPLHVCQUF1QixHQUFHLHdDQUF3Qzs7QUFDL0UsTUFBTSxPQUFPLG1CQUFtQixHQUFHLG9DQUFvQzs7QUFDdkUsTUFBTSxPQUFPLGVBQWUsR0FBRyxnQ0FBZ0M7QUFFL0QsTUFBTSxPQUFPLGNBQWM7SUFBM0I7UUFDVyxTQUFJLEdBQUcsZUFBZSxDQUFDO0lBQ2xDLENBQUM7Q0FBQTs7O0lBREMsOEJBQWdDOztBQUdsQyxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBRTdCLFlBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxvQkFBb0IsQ0FBQztJQUNILENBQUM7Q0FDcEM7OztJQUZDLGtDQUFxQzs7SUFDekIscUNBQW1COztBQUdqQyxNQUFNLE9BQU8scUJBQXFCOzs7O0lBRWhDLFlBQW1CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFEN0IsU0FBSSxHQUFHLHVCQUF1QixDQUFDO0lBQ0MsQ0FBQztDQUMzQzs7O0lBRkMscUNBQXdDOztJQUM1Qix3Q0FBMEI7O0FBR3hDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFFNUIsWUFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSxHQUFHLG1CQUFtQixDQUFDO0lBQ0MsQ0FBQztDQUN2Qzs7O0lBRkMsaUNBQW9DOztJQUN4QixvQ0FBc0I7O0FBR3BDLE1BQU0sT0FBTyxjQUFjO0lBQTNCO1FBQ1csU0FBSSxHQUFHLGVBQWUsQ0FBQztJQUNsQyxDQUFDO0NBQUE7OztJQURDLDhCQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEN1cnJlbmN5IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0NVUlJFTkNJRVMgPSAnW1NpdGUtY29udGV4dF0gTG9hZCBDdXJyZW5jaWVzJztcbmV4cG9ydCBjb25zdCBMT0FEX0NVUlJFTkNJRVNfRkFJTCA9ICdbU2l0ZS1jb250ZXh0XSBMb2FkIEN1cnJlbmNpZXMgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9DVVJSRU5DSUVTX1NVQ0NFU1MgPSAnW1NpdGUtY29udGV4dF0gTG9hZCBDdXJyZW5jaWVzIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IFNFVF9BQ1RJVkVfQ1VSUkVOQ1kgPSAnW1NpdGUtY29udGV4dF0gU2V0IEFjdGl2ZSBDdXJyZW5jeSc7XG5leHBvcnQgY29uc3QgQ1VSUkVOQ1lfQ0hBTkdFID0gJ1tTaXRlLWNvbnRleHRdIEN1cnJlbmN5IENoYW5nZSc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ3VycmVuY2llcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NVUlJFTkNJRVM7XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ3VycmVuY2llc0ZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DVVJSRU5DSUVTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ3VycmVuY2llc1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DVVJSRU5DSUVTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDdXJyZW5jeVtdKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgU2V0QWN0aXZlQ3VycmVuY3kgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX0FDVElWRV9DVVJSRU5DWTtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cbn1cblxuZXhwb3J0IGNsYXNzIEN1cnJlbmN5Q2hhbmdlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENVUlJFTkNZX0NIQU5HRTtcbn1cblxuLy8gYWN0aW9uIHR5cGVzXG5leHBvcnQgdHlwZSBDdXJyZW5jaWVzQWN0aW9uID1cbiAgfCBMb2FkQ3VycmVuY2llc1xuICB8IExvYWRDdXJyZW5jaWVzRmFpbFxuICB8IExvYWRDdXJyZW5jaWVzU3VjY2Vzc1xuICB8IFNldEFjdGl2ZUN1cnJlbmN5XG4gIHwgQ3VycmVuY3lDaGFuZ2U7XG4iXX0=