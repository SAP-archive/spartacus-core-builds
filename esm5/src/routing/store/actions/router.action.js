/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var GO = '[Router] Go';
/** @type {?} */
export var GO_BY_URL = '[Router] Go By Url';
/** @type {?} */
export var BACK = '[Router] Back';
/** @type {?} */
export var FORWARD = '[Router] Forward';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9yb3V0aW5nL3N0b3JlL2FjdGlvbnMvcm91dGVyLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE1BQU0sS0FBTyxFQUFFLEdBQUcsYUFBYTs7QUFDL0IsTUFBTSxLQUFPLFNBQVMsR0FBRyxvQkFBb0I7O0FBQzdDLE1BQU0sS0FBTyxJQUFJLEdBQUcsZUFBZTs7QUFDbkMsTUFBTSxLQUFPLE9BQU8sR0FBRyxrQkFBa0I7QUFFekM7SUFFRSxZQUNTLE9BSU47UUFKTSxZQUFPLEdBQVAsT0FBTyxDQUliO1FBTk0sU0FBSSxHQUFHLEVBQUUsQ0FBQztJQU9oQixDQUFDO0lBQ04sU0FBQztBQUFELENBQUMsQUFURCxJQVNDOzs7O0lBUkMsa0JBQW1COztJQUVqQixxQkFJQzs7QUFJTDtJQUVFLGlCQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUR6QixTQUFJLEdBQUcsU0FBUyxDQUFDO0lBQ1csQ0FBQztJQUN4QyxjQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyx1QkFBMEI7O0lBQ2QsMEJBQXNCOztBQUdwQztJQUFBO1FBQ1csU0FBSSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDO0lBQUQsV0FBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7O0lBREMsb0JBQXFCOztBQUd2QjtJQUFBO1FBQ1csU0FBSSxHQUFHLE9BQU8sQ0FBQztJQUMxQixDQUFDO0lBQUQsY0FBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7O0lBREMsdUJBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkV4dHJhcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmV4cG9ydCBjb25zdCBHTyA9ICdbUm91dGVyXSBHbyc7XG5leHBvcnQgY29uc3QgR09fQllfVVJMID0gJ1tSb3V0ZXJdIEdvIEJ5IFVybCc7XG5leHBvcnQgY29uc3QgQkFDSyA9ICdbUm91dGVyXSBCYWNrJztcbmV4cG9ydCBjb25zdCBGT1JXQVJEID0gJ1tSb3V0ZXJdIEZvcndhcmQnO1xuXG5leHBvcnQgY2xhc3MgR28gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gR087XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICBwYXRoOiBzdHJpbmdbXTtcbiAgICAgIHF1ZXJ5Pzogb2JqZWN0O1xuICAgICAgZXh0cmFzPzogTmF2aWdhdGlvbkV4dHJhcztcbiAgICB9XG4gICkge31cbn1cblxuZXhwb3J0IGNsYXNzIEdvQnlVcmwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gR09fQllfVVJMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQmFjayBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBCQUNLO1xufVxuXG5leHBvcnQgY2xhc3MgRm9yd2FyZCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGT1JXQVJEO1xufVxuXG5leHBvcnQgdHlwZSBBY3Rpb25zID0gR28gfCBHb0J5VXJsIHwgQmFjayB8IEZvcndhcmQ7XG4iXX0=