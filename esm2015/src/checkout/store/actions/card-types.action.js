/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const LOAD_CARD_TYPES = '[Checkout] Load Card Types';
/** @type {?} */
export const LOAD_CARD_TYPES_FAIL = '[Checkout] Load Card Fail';
/** @type {?} */
export const LOAD_CARD_TYPES_SUCCESS = '[Checkout] Load Card Success';
export class LoadCardTypes {
    constructor() {
        this.type = LOAD_CARD_TYPES;
    }
}
if (false) {
    /** @type {?} */
    LoadCardTypes.prototype.type;
}
export class LoadCardTypesFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_CARD_TYPES_FAIL;
    }
}
if (false) {
    /** @type {?} */
    LoadCardTypesFail.prototype.type;
    /** @type {?} */
    LoadCardTypesFail.prototype.payload;
}
export class LoadCardTypesSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_CARD_TYPES_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadCardTypesSuccess.prototype.type;
    /** @type {?} */
    LoadCardTypesSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC10eXBlcy5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2hlY2tvdXQvc3RvcmUvYWN0aW9ucy9jYXJkLXR5cGVzLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE1BQU0sT0FBTyxlQUFlLEdBQUcsNEJBQTRCOztBQUMzRCxNQUFNLE9BQU8sb0JBQW9CLEdBQUcsMkJBQTJCOztBQUMvRCxNQUFNLE9BQU8sdUJBQXVCLEdBQUcsOEJBQThCO0FBRXJFLE1BQU0sT0FBTyxhQUFhO0lBRXhCO1FBRFMsU0FBSSxHQUFHLGVBQWUsQ0FBQztJQUNqQixDQUFDO0NBQ2pCOzs7SUFGQyw2QkFBZ0M7O0FBSWxDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFFNUIsWUFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLG9CQUFvQixDQUFDO0lBQ0gsQ0FBQztDQUNwQzs7O0lBRkMsaUNBQXFDOztJQUN6QixvQ0FBbUI7O0FBR2pDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFFL0IsWUFBbUIsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUQ3QixTQUFJLEdBQUcsdUJBQXVCLENBQUM7SUFDQyxDQUFDO0NBQzNDOzs7SUFGQyxvQ0FBd0M7O0lBQzVCLHVDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IENhcmRUeXBlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0NBUkRfVFlQRVMgPSAnW0NoZWNrb3V0XSBMb2FkIENhcmQgVHlwZXMnO1xuZXhwb3J0IGNvbnN0IExPQURfQ0FSRF9UWVBFU19GQUlMID0gJ1tDaGVja291dF0gTG9hZCBDYXJkIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfQ0FSRF9UWVBFU19TVUNDRVNTID0gJ1tDaGVja291dF0gTG9hZCBDYXJkIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY2xhc3MgTG9hZENhcmRUeXBlcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NBUkRfVFlQRVM7XG4gIGNvbnN0cnVjdG9yKCkge31cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDYXJkVHlwZXNGYWlsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ0FSRF9UWVBFU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENhcmRUeXBlc1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DQVJEX1RZUEVTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDYXJkVHlwZVtdKSB7fVxufVxuXG5leHBvcnQgdHlwZSBDYXJkVHlwZXNBY3Rpb24gPVxuICB8IExvYWRDYXJkVHlwZXNcbiAgfCBMb2FkQ2FyZFR5cGVzRmFpbFxuICB8IExvYWRDYXJkVHlwZXNTdWNjZXNzO1xuIl19