/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var LOAD_TITLES = '[User] Load Tiltes';
/** @type {?} */
export var LOAD_TITLES_FAIL = '[User] Load Titles Fail';
/** @type {?} */
export var LOAD_TITLES_SUCCESS = '[User] Load Titles Success';
var LoadTitles = /** @class */ (function () {
    function LoadTitles() {
        this.type = LOAD_TITLES;
    }
    return LoadTitles;
}());
export { LoadTitles };
if (false) {
    /** @type {?} */
    LoadTitles.prototype.type;
}
var LoadTitlesFail = /** @class */ (function () {
    function LoadTitlesFail(payload) {
        this.payload = payload;
        this.type = LOAD_TITLES_FAIL;
    }
    return LoadTitlesFail;
}());
export { LoadTitlesFail };
if (false) {
    /** @type {?} */
    LoadTitlesFail.prototype.type;
    /** @type {?} */
    LoadTitlesFail.prototype.payload;
}
var LoadTitlesSuccess = /** @class */ (function () {
    function LoadTitlesSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_TITLES_SUCCESS;
    }
    return LoadTitlesSuccess;
}());
export { LoadTitlesSuccess };
if (false) {
    /** @type {?} */
    LoadTitlesSuccess.prototype.type;
    /** @type {?} */
    LoadTitlesSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGVzLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2FjdGlvbnMvdGl0bGVzLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE1BQU0sS0FBTyxXQUFXLEdBQUcsb0JBQW9COztBQUMvQyxNQUFNLEtBQU8sZ0JBQWdCLEdBQUcseUJBQXlCOztBQUN6RCxNQUFNLEtBQU8sbUJBQW1CLEdBQUcsNEJBQTRCO0FBRS9EO0lBRUU7UUFEUyxTQUFJLEdBQUcsV0FBVyxDQUFDO0lBQ2IsQ0FBQztJQUNsQixpQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsMEJBQTRCOztBQUk5QjtJQUVFLHdCQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsZ0JBQWdCLENBQUM7SUFDQyxDQUFDO0lBQ3JDLHFCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyw4QkFBaUM7O0lBQ3JCLGlDQUFtQjs7QUFHakM7SUFFRSwyQkFBbUIsT0FBZ0I7UUFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUQxQixTQUFJLEdBQUcsbUJBQW1CLENBQUM7SUFDRSxDQUFDO0lBQ3pDLHdCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyxpQ0FBb0M7O0lBQ3hCLG9DQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1RJVExFUyA9ICdbVXNlcl0gTG9hZCBUaWx0ZXMnO1xuZXhwb3J0IGNvbnN0IExPQURfVElUTEVTX0ZBSUwgPSAnW1VzZXJdIExvYWQgVGl0bGVzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfVElUTEVTX1NVQ0NFU1MgPSAnW1VzZXJdIExvYWQgVGl0bGVzIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY2xhc3MgTG9hZFRpdGxlcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1RJVExFUztcbiAgY29uc3RydWN0b3IoKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFRpdGxlc0ZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9USVRMRVNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRUaXRsZXNTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfVElUTEVTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBUaXRsZVtdKSB7fVxufVxuXG5leHBvcnQgdHlwZSBUaXRsZXNBY3Rpb24gPSBMb2FkVGl0bGVzIHwgTG9hZFRpdGxlc0ZhaWwgfCBMb2FkVGl0bGVzU3VjY2VzcztcbiJdfQ==