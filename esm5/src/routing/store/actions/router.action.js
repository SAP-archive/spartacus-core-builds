/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var GO = '[Router] Go';
/** @type {?} */
export var GO_BY_URL = '[Router] Go By Url';
/** @type {?} */
export var BACK = '[Router] Back';
/** @type {?} */
export var FORWARD = '[Router] Forward';
/** @type {?} */
export var SAVE_REDIRECT_URL = '[Router] Save Redirect Url';
/** @type {?} */
export var CLEAR_REDIRECT_URL = '[Router] Clear Redirect Url';
var Go = /** @class */ (function () {
    function Go(payload) {
        this.payload = payload;
        this.type = GO;
    }
    return Go;
}());
export { Go };
if (false) {
    /** @type {?} */
    Go.prototype.type;
    /** @type {?} */
    Go.prototype.payload;
}
var GoByUrl = /** @class */ (function () {
    function GoByUrl(payload) {
        this.payload = payload;
        this.type = GO_BY_URL;
    }
    return GoByUrl;
}());
export { GoByUrl };
if (false) {
    /** @type {?} */
    GoByUrl.prototype.type;
    /** @type {?} */
    GoByUrl.prototype.payload;
}
var Back = /** @class */ (function () {
    function Back() {
        this.type = BACK;
    }
    return Back;
}());
export { Back };
if (false) {
    /** @type {?} */
    Back.prototype.type;
}
var Forward = /** @class */ (function () {
    function Forward() {
        this.type = FORWARD;
    }
    return Forward;
}());
export { Forward };
if (false) {
    /** @type {?} */
    Forward.prototype.type;
}
var SaveRedirectUrl = /** @class */ (function () {
    function SaveRedirectUrl(payload) {
        this.payload = payload;
        this.type = SAVE_REDIRECT_URL;
    }
    return SaveRedirectUrl;
}());
export { SaveRedirectUrl };
if (false) {
    /** @type {?} */
    SaveRedirectUrl.prototype.type;
    /** @type {?} */
    SaveRedirectUrl.prototype.payload;
}
var ClearRedirectUrl = /** @class */ (function () {
    function ClearRedirectUrl() {
        this.type = CLEAR_REDIRECT_URL;
    }
    return ClearRedirectUrl;
}());
export { ClearRedirectUrl };
if (false) {
    /** @type {?} */
    ClearRedirectUrl.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9yb3V0aW5nL3N0b3JlL2FjdGlvbnMvcm91dGVyLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE1BQU0sS0FBTyxFQUFFLEdBQUcsYUFBYTs7QUFDL0IsTUFBTSxLQUFPLFNBQVMsR0FBRyxvQkFBb0I7O0FBQzdDLE1BQU0sS0FBTyxJQUFJLEdBQUcsZUFBZTs7QUFDbkMsTUFBTSxLQUFPLE9BQU8sR0FBRyxrQkFBa0I7O0FBQ3pDLE1BQU0sS0FBTyxpQkFBaUIsR0FBRyw0QkFBNEI7O0FBQzdELE1BQU0sS0FBTyxrQkFBa0IsR0FBRyw2QkFBNkI7QUFFL0Q7SUFFRSxZQUNTLE9BSU47UUFKTSxZQUFPLEdBQVAsT0FBTyxDQUliO1FBTk0sU0FBSSxHQUFHLEVBQUUsQ0FBQztJQU9oQixDQUFDO0lBQ04sU0FBQztBQUFELENBQUMsQUFURCxJQVNDOzs7O0lBUkMsa0JBQW1COztJQUVqQixxQkFJQzs7QUFJTDtJQUVFLGlCQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUR6QixTQUFJLEdBQUcsU0FBUyxDQUFDO0lBQ1csQ0FBQztJQUN4QyxjQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyx1QkFBMEI7O0lBQ2QsMEJBQXNCOztBQUdwQztJQUFBO1FBQ1csU0FBSSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDO0lBQUQsV0FBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7O0lBREMsb0JBQXFCOztBQUd2QjtJQUFBO1FBQ1csU0FBSSxHQUFHLE9BQU8sQ0FBQztJQUMxQixDQUFDO0lBQUQsY0FBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7O0lBREMsdUJBQXdCOztBQUcxQjtJQUVFLHlCQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUR6QixTQUFJLEdBQUcsaUJBQWlCLENBQUM7SUFDRyxDQUFDO0lBQ3hDLHNCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQywrQkFBa0M7O0lBQ3RCLGtDQUFzQjs7QUFHcEM7SUFBQTtRQUNXLFNBQUksR0FBRyxrQkFBa0IsQ0FBQztJQUNyQyxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7OztJQURDLGdDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5leHBvcnQgY29uc3QgR08gPSAnW1JvdXRlcl0gR28nO1xuZXhwb3J0IGNvbnN0IEdPX0JZX1VSTCA9ICdbUm91dGVyXSBHbyBCeSBVcmwnO1xuZXhwb3J0IGNvbnN0IEJBQ0sgPSAnW1JvdXRlcl0gQmFjayc7XG5leHBvcnQgY29uc3QgRk9SV0FSRCA9ICdbUm91dGVyXSBGb3J3YXJkJztcbmV4cG9ydCBjb25zdCBTQVZFX1JFRElSRUNUX1VSTCA9ICdbUm91dGVyXSBTYXZlIFJlZGlyZWN0IFVybCc7XG5leHBvcnQgY29uc3QgQ0xFQVJfUkVESVJFQ1RfVVJMID0gJ1tSb3V0ZXJdIENsZWFyIFJlZGlyZWN0IFVybCc7XG5cbmV4cG9ydCBjbGFzcyBHbyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBHTztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHBhdGg6IHN0cmluZ1tdO1xuICAgICAgcXVlcnk/OiBvYmplY3Q7XG4gICAgICBleHRyYXM/OiBOYXZpZ2F0aW9uRXh0cmFzO1xuICAgIH1cbiAgKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgR29CeVVybCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBHT19CWV9VUkw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBCYWNrIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEJBQ0s7XG59XG5cbmV4cG9ydCBjbGFzcyBGb3J3YXJkIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZPUldBUkQ7XG59XG5cbmV4cG9ydCBjbGFzcyBTYXZlUmVkaXJlY3RVcmwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0FWRV9SRURJUkVDVF9VUkw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhclJlZGlyZWN0VXJsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX1JFRElSRUNUX1VSTDtcbn1cblxuZXhwb3J0IHR5cGUgQWN0aW9ucyA9XG4gIHwgR29cbiAgfCBHb0J5VXJsXG4gIHwgQmFja1xuICB8IEZvcndhcmRcbiAgfCBTYXZlUmVkaXJlY3RVcmxcbiAgfCBDbGVhclJlZGlyZWN0VXJsO1xuIl19