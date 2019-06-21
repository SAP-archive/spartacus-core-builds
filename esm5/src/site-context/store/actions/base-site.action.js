/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var LOAD_BASE_SITE = '[Site-context] Load BaseSite';
/** @type {?} */
export var LOAD_BASE_SITE_FAIL = '[Site-context] Load BaseSite Fail';
/** @type {?} */
export var LOAD_BASE_SITE_SUCCESS = '[Site-context] Load BaseSite Success';
/** @type {?} */
export var SET_ACTIVE_BASE_SITE = '[Site-context] Set Active BaseSite';
/** @type {?} */
export var BASE_SITE_CHANGE = '[Site-context] BaseSite Change';
var LoadBaseSite = /** @class */ (function () {
    function LoadBaseSite() {
        this.type = LOAD_BASE_SITE;
    }
    return LoadBaseSite;
}());
export { LoadBaseSite };
if (false) {
    /** @type {?} */
    LoadBaseSite.prototype.type;
}
var LoadBaseSiteFail = /** @class */ (function () {
    function LoadBaseSiteFail(payload) {
        this.payload = payload;
        this.type = LOAD_BASE_SITE_FAIL;
    }
    return LoadBaseSiteFail;
}());
export { LoadBaseSiteFail };
if (false) {
    /** @type {?} */
    LoadBaseSiteFail.prototype.type;
    /** @type {?} */
    LoadBaseSiteFail.prototype.payload;
}
var LoadBaseSiteSuccess = /** @class */ (function () {
    function LoadBaseSiteSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_BASE_SITE_SUCCESS;
    }
    return LoadBaseSiteSuccess;
}());
export { LoadBaseSiteSuccess };
if (false) {
    /** @type {?} */
    LoadBaseSiteSuccess.prototype.type;
    /** @type {?} */
    LoadBaseSiteSuccess.prototype.payload;
}
var SetActiveBaseSite = /** @class */ (function () {
    function SetActiveBaseSite(payload) {
        this.payload = payload;
        this.type = SET_ACTIVE_BASE_SITE;
    }
    return SetActiveBaseSite;
}());
export { SetActiveBaseSite };
if (false) {
    /** @type {?} */
    SetActiveBaseSite.prototype.type;
    /** @type {?} */
    SetActiveBaseSite.prototype.payload;
}
var BaseSiteChange = /** @class */ (function () {
    function BaseSiteChange() {
        this.type = BASE_SITE_CHANGE;
    }
    return BaseSiteChange;
}());
export { BaseSiteChange };
if (false) {
    /** @type {?} */
    BaseSiteChange.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zaXRlLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvc3RvcmUvYWN0aW9ucy9iYXNlLXNpdGUuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsTUFBTSxLQUFPLGNBQWMsR0FBRyw4QkFBOEI7O0FBQzVELE1BQU0sS0FBTyxtQkFBbUIsR0FBRyxtQ0FBbUM7O0FBQ3RFLE1BQU0sS0FBTyxzQkFBc0IsR0FBRyxzQ0FBc0M7O0FBQzVFLE1BQU0sS0FBTyxvQkFBb0IsR0FBRyxvQ0FBb0M7O0FBQ3hFLE1BQU0sS0FBTyxnQkFBZ0IsR0FBRyxnQ0FBZ0M7QUFFaEU7SUFBQTtRQUNXLFNBQUksR0FBRyxjQUFjLENBQUM7SUFDakMsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7SUFEQyw0QkFBK0I7O0FBR2pDO0lBRUUsMEJBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxtQkFBbUIsQ0FBQztJQUNGLENBQUM7SUFDckMsdUJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLGdDQUFvQzs7SUFDeEIsbUNBQW1COztBQUdqQztJQUVFLDZCQUFtQixPQUFpQjtRQUFqQixZQUFPLEdBQVAsT0FBTyxDQUFVO1FBRDNCLFNBQUksR0FBRyxzQkFBc0IsQ0FBQztJQUNBLENBQUM7SUFDMUMsMEJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLG1DQUF1Qzs7SUFDM0Isc0NBQXdCOztBQUd0QztJQUVFLDJCQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUR6QixTQUFJLEdBQUcsb0JBQW9CLENBQUM7SUFDQSxDQUFDO0lBQ3hDLHdCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyxpQ0FBcUM7O0lBQ3pCLG9DQUFzQjs7QUFHcEM7SUFBQTtRQUNXLFNBQUksR0FBRyxnQkFBZ0IsQ0FBQztJQUNuQyxDQUFDO0lBQUQscUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7OztJQURDLDhCQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEJhc2VTaXRlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0JBU0VfU0lURSA9ICdbU2l0ZS1jb250ZXh0XSBMb2FkIEJhc2VTaXRlJztcbmV4cG9ydCBjb25zdCBMT0FEX0JBU0VfU0lURV9GQUlMID0gJ1tTaXRlLWNvbnRleHRdIExvYWQgQmFzZVNpdGUgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9CQVNFX1NJVEVfU1VDQ0VTUyA9ICdbU2l0ZS1jb250ZXh0XSBMb2FkIEJhc2VTaXRlIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IFNFVF9BQ1RJVkVfQkFTRV9TSVRFID0gJ1tTaXRlLWNvbnRleHRdIFNldCBBY3RpdmUgQmFzZVNpdGUnO1xuZXhwb3J0IGNvbnN0IEJBU0VfU0lURV9DSEFOR0UgPSAnW1NpdGUtY29udGV4dF0gQmFzZVNpdGUgQ2hhbmdlJztcblxuZXhwb3J0IGNsYXNzIExvYWRCYXNlU2l0ZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0JBU0VfU0lURTtcbn1cblxuZXhwb3J0IGNsYXNzIExvYWRCYXNlU2l0ZUZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9CQVNFX1NJVEVfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRCYXNlU2l0ZVN1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9CQVNFX1NJVEVfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEJhc2VTaXRlKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgU2V0QWN0aXZlQmFzZVNpdGUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX0FDVElWRV9CQVNFX1NJVEU7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBCYXNlU2l0ZUNoYW5nZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBCQVNFX1NJVEVfQ0hBTkdFO1xufVxuXG4vLyBhY3Rpb24gdHlwZXNcbmV4cG9ydCB0eXBlIEJhc2VTaXRlQWN0aW9uID1cbiAgfCBMb2FkQmFzZVNpdGVcbiAgfCBMb2FkQmFzZVNpdGVGYWlsXG4gIHwgTG9hZEJhc2VTaXRlU3VjY2Vzc1xuICB8IFNldEFjdGl2ZUJhc2VTaXRlXG4gIHwgQmFzZVNpdGVDaGFuZ2U7XG4iXX0=