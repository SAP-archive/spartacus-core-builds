/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var ROUTER_GO = '[Router] Go';
/** @type {?} */
export var ROUTER_GO_BY_URL = '[Router] Go By Url';
/** @type {?} */
export var ROUTER_BACK = '[Router] Back';
/** @type {?} */
export var ROUTER_FORWARD = '[Router] Forward';
var RouteGoAction = /** @class */ (function () {
    function RouteGoAction(payload) {
        this.payload = payload;
        this.type = ROUTER_GO;
    }
    return RouteGoAction;
}());
export { RouteGoAction };
if (false) {
    /** @type {?} */
    RouteGoAction.prototype.type;
    /** @type {?} */
    RouteGoAction.prototype.payload;
}
var RouteGoByUrlAction = /** @class */ (function () {
    function RouteGoByUrlAction(payload) {
        this.payload = payload;
        this.type = ROUTER_GO_BY_URL;
    }
    return RouteGoByUrlAction;
}());
export { RouteGoByUrlAction };
if (false) {
    /** @type {?} */
    RouteGoByUrlAction.prototype.type;
    /** @type {?} */
    RouteGoByUrlAction.prototype.payload;
}
var RouteBackAction = /** @class */ (function () {
    function RouteBackAction() {
        this.type = ROUTER_BACK;
    }
    return RouteBackAction;
}());
export { RouteBackAction };
if (false) {
    /** @type {?} */
    RouteBackAction.prototype.type;
}
var RouteForwardAction = /** @class */ (function () {
    function RouteForwardAction() {
        this.type = ROUTER_FORWARD;
    }
    return RouteForwardAction;
}());
export { RouteForwardAction };
if (false) {
    /** @type {?} */
    RouteForwardAction.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9yb3V0aW5nL3N0b3JlL2FjdGlvbnMvcm91dGVyLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE1BQU0sS0FBTyxTQUFTLEdBQUcsYUFBYTs7QUFDdEMsTUFBTSxLQUFPLGdCQUFnQixHQUFHLG9CQUFvQjs7QUFDcEQsTUFBTSxLQUFPLFdBQVcsR0FBRyxlQUFlOztBQUMxQyxNQUFNLEtBQU8sY0FBYyxHQUFHLGtCQUFrQjtBQUVoRDtJQUVFLHVCQUNTLE9BSU47UUFKTSxZQUFPLEdBQVAsT0FBTyxDQUliO1FBTk0sU0FBSSxHQUFHLFNBQVMsQ0FBQztJQU92QixDQUFDO0lBQ04sb0JBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQzs7OztJQVJDLDZCQUEwQjs7SUFFeEIsZ0NBSUM7O0FBSUw7SUFFRSw0QkFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSxHQUFHLGdCQUFnQixDQUFDO0lBQ0ksQ0FBQztJQUN4Qyx5QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsa0NBQWlDOztJQUNyQixxQ0FBc0I7O0FBR3BDO0lBQUE7UUFDVyxTQUFJLEdBQUcsV0FBVyxDQUFDO0lBQzlCLENBQUM7SUFBRCxzQkFBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7O0lBREMsK0JBQTRCOztBQUc5QjtJQUFBO1FBQ1csU0FBSSxHQUFHLGNBQWMsQ0FBQztJQUNqQyxDQUFDO0lBQUQseUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7OztJQURDLGtDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5leHBvcnQgY29uc3QgUk9VVEVSX0dPID0gJ1tSb3V0ZXJdIEdvJztcbmV4cG9ydCBjb25zdCBST1VURVJfR09fQllfVVJMID0gJ1tSb3V0ZXJdIEdvIEJ5IFVybCc7XG5leHBvcnQgY29uc3QgUk9VVEVSX0JBQ0sgPSAnW1JvdXRlcl0gQmFjayc7XG5leHBvcnQgY29uc3QgUk9VVEVSX0ZPUldBUkQgPSAnW1JvdXRlcl0gRm9yd2FyZCc7XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZUdvQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJPVVRFUl9HTztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHBhdGg6IHN0cmluZ1tdO1xuICAgICAgcXVlcnk/OiBvYmplY3Q7XG4gICAgICBleHRyYXM/OiBOYXZpZ2F0aW9uRXh0cmFzO1xuICAgIH1cbiAgKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUm91dGVHb0J5VXJsQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJPVVRFUl9HT19CWV9VUkw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZUJhY2tBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUk9VVEVSX0JBQ0s7XG59XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZUZvcndhcmRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUk9VVEVSX0ZPUldBUkQ7XG59XG5cbmV4cG9ydCB0eXBlIFJvdXRpbmdBY3Rpb24gPVxuICB8IFJvdXRlR29BY3Rpb25cbiAgfCBSb3V0ZUdvQnlVcmxBY3Rpb25cbiAgfCBSb3V0ZUJhY2tBY3Rpb25cbiAgfCBSb3V0ZUZvcndhcmRBY3Rpb247XG4iXX0=