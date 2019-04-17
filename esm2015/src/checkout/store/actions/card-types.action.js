/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC10eXBlcy5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2hlY2tvdXQvc3RvcmUvYWN0aW9ucy9jYXJkLXR5cGVzLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE1BQU0sT0FBTyxlQUFlLEdBQUcsNEJBQTRCOztBQUMzRCxNQUFNLE9BQU8sb0JBQW9CLEdBQUcsMkJBQTJCOztBQUMvRCxNQUFNLE9BQU8sdUJBQXVCLEdBQUcsOEJBQThCO0FBRXJFLE1BQU0sT0FBTyxhQUFhO0lBRXhCO1FBRFMsU0FBSSxHQUFHLGVBQWUsQ0FBQztJQUNqQixDQUFDO0NBQ2pCOzs7SUFGQyw2QkFBZ0M7O0FBSWxDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFFNUIsWUFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLG9CQUFvQixDQUFDO0lBQ0gsQ0FBQztDQUNwQzs7O0lBRkMsaUNBQXFDOztJQUN6QixvQ0FBbUI7O0FBR2pDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFFL0IsWUFBbUIsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUQ3QixTQUFJLEdBQUcsdUJBQXVCLENBQUM7SUFDQyxDQUFDO0NBQzNDOzs7SUFGQyxvQ0FBd0M7O0lBQzVCLHVDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IENhcmRUeXBlIH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMvaW5kZXgnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9DQVJEX1RZUEVTID0gJ1tDaGVja291dF0gTG9hZCBDYXJkIFR5cGVzJztcbmV4cG9ydCBjb25zdCBMT0FEX0NBUkRfVFlQRVNfRkFJTCA9ICdbQ2hlY2tvdXRdIExvYWQgQ2FyZCBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX0NBUkRfVFlQRVNfU1VDQ0VTUyA9ICdbQ2hlY2tvdXRdIExvYWQgQ2FyZCBTdWNjZXNzJztcblxuZXhwb3J0IGNsYXNzIExvYWRDYXJkVHlwZXMgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DQVJEX1RZUEVTO1xuICBjb25zdHJ1Y3RvcigpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ2FyZFR5cGVzRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NBUkRfVFlQRVNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDYXJkVHlwZXNTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ0FSRF9UWVBFU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ2FyZFR5cGVbXSkge31cbn1cblxuZXhwb3J0IHR5cGUgQ2FyZFR5cGVzQWN0aW9uID1cbiAgfCBMb2FkQ2FyZFR5cGVzXG4gIHwgTG9hZENhcmRUeXBlc0ZhaWxcbiAgfCBMb2FkQ2FyZFR5cGVzU3VjY2VzcztcbiJdfQ==