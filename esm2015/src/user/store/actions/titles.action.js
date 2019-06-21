/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const LOAD_TITLES = '[User] Load Tiltes';
/** @type {?} */
export const LOAD_TITLES_FAIL = '[User] Load Titles Fail';
/** @type {?} */
export const LOAD_TITLES_SUCCESS = '[User] Load Titles Success';
export class LoadTitles {
    constructor() {
        this.type = LOAD_TITLES;
    }
}
if (false) {
    /** @type {?} */
    LoadTitles.prototype.type;
}
export class LoadTitlesFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_TITLES_FAIL;
    }
}
if (false) {
    /** @type {?} */
    LoadTitlesFail.prototype.type;
    /** @type {?} */
    LoadTitlesFail.prototype.payload;
}
export class LoadTitlesSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_TITLES_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadTitlesSuccess.prototype.type;
    /** @type {?} */
    LoadTitlesSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGVzLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2FjdGlvbnMvdGl0bGVzLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE1BQU0sT0FBTyxXQUFXLEdBQUcsb0JBQW9COztBQUMvQyxNQUFNLE9BQU8sZ0JBQWdCLEdBQUcseUJBQXlCOztBQUN6RCxNQUFNLE9BQU8sbUJBQW1CLEdBQUcsNEJBQTRCO0FBRS9ELE1BQU0sT0FBTyxVQUFVO0lBRXJCO1FBRFMsU0FBSSxHQUFHLFdBQVcsQ0FBQztJQUNiLENBQUM7Q0FDakI7OztJQUZDLDBCQUE0Qjs7QUFJOUIsTUFBTSxPQUFPLGNBQWM7Ozs7SUFFekIsWUFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLGdCQUFnQixDQUFDO0lBQ0MsQ0FBQztDQUNwQzs7O0lBRkMsOEJBQWlDOztJQUNyQixpQ0FBbUI7O0FBR2pDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFFNUIsWUFBbUIsT0FBZ0I7UUFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUQxQixTQUFJLEdBQUcsbUJBQW1CLENBQUM7SUFDRSxDQUFDO0NBQ3hDOzs7SUFGQyxpQ0FBb0M7O0lBQ3hCLG9DQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1RJVExFUyA9ICdbVXNlcl0gTG9hZCBUaWx0ZXMnO1xuZXhwb3J0IGNvbnN0IExPQURfVElUTEVTX0ZBSUwgPSAnW1VzZXJdIExvYWQgVGl0bGVzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfVElUTEVTX1NVQ0NFU1MgPSAnW1VzZXJdIExvYWQgVGl0bGVzIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY2xhc3MgTG9hZFRpdGxlcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1RJVExFUztcbiAgY29uc3RydWN0b3IoKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFRpdGxlc0ZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9USVRMRVNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRUaXRsZXNTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfVElUTEVTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBUaXRsZVtdKSB7fVxufVxuXG5leHBvcnQgdHlwZSBUaXRsZXNBY3Rpb24gPSBMb2FkVGl0bGVzIHwgTG9hZFRpdGxlc0ZhaWwgfCBMb2FkVGl0bGVzU3VjY2VzcztcbiJdfQ==