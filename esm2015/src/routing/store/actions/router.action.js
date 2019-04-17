/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const GO = '[Router] Go';
/** @type {?} */
export const GO_BY_URL = '[Router] Go By Url';
/** @type {?} */
export const BACK = '[Router] Back';
/** @type {?} */
export const FORWARD = '[Router] Forward';
/** @type {?} */
export const SAVE_REDIRECT_URL = '[Router] Save Redirect Url';
/** @type {?} */
export const CLEAR_REDIRECT_URL = '[Router] Clear Redirect Url';
export class Go {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = GO;
    }
}
if (false) {
    /** @type {?} */
    Go.prototype.type;
    /** @type {?} */
    Go.prototype.payload;
}
export class GoByUrl {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = GO_BY_URL;
    }
}
if (false) {
    /** @type {?} */
    GoByUrl.prototype.type;
    /** @type {?} */
    GoByUrl.prototype.payload;
}
export class Back {
    constructor() {
        this.type = BACK;
    }
}
if (false) {
    /** @type {?} */
    Back.prototype.type;
}
export class Forward {
    constructor() {
        this.type = FORWARD;
    }
}
if (false) {
    /** @type {?} */
    Forward.prototype.type;
}
export class SaveRedirectUrl {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SAVE_REDIRECT_URL;
    }
}
if (false) {
    /** @type {?} */
    SaveRedirectUrl.prototype.type;
    /** @type {?} */
    SaveRedirectUrl.prototype.payload;
}
export class ClearRedirectUrl {
    constructor() {
        this.type = CLEAR_REDIRECT_URL;
    }
}
if (false) {
    /** @type {?} */
    ClearRedirectUrl.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9yb3V0aW5nL3N0b3JlL2FjdGlvbnMvcm91dGVyLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE1BQU0sT0FBTyxFQUFFLEdBQUcsYUFBYTs7QUFDL0IsTUFBTSxPQUFPLFNBQVMsR0FBRyxvQkFBb0I7O0FBQzdDLE1BQU0sT0FBTyxJQUFJLEdBQUcsZUFBZTs7QUFDbkMsTUFBTSxPQUFPLE9BQU8sR0FBRyxrQkFBa0I7O0FBQ3pDLE1BQU0sT0FBTyxpQkFBaUIsR0FBRyw0QkFBNEI7O0FBQzdELE1BQU0sT0FBTyxrQkFBa0IsR0FBRyw2QkFBNkI7QUFFL0QsTUFBTSxPQUFPLEVBQUU7Ozs7SUFFYixZQUNTLE9BSU47UUFKTSxZQUFPLEdBQVAsT0FBTyxDQUliO1FBTk0sU0FBSSxHQUFHLEVBQUUsQ0FBQztJQU9oQixDQUFDO0NBQ0w7OztJQVJDLGtCQUFtQjs7SUFFakIscUJBSUM7O0FBSUwsTUFBTSxPQUFPLE9BQU87Ozs7SUFFbEIsWUFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSxHQUFHLFNBQVMsQ0FBQztJQUNXLENBQUM7Q0FDdkM7OztJQUZDLHVCQUEwQjs7SUFDZCwwQkFBc0I7O0FBR3BDLE1BQU0sT0FBTyxJQUFJO0lBQWpCO1FBQ1csU0FBSSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDO0NBQUE7OztJQURDLG9CQUFxQjs7QUFHdkIsTUFBTSxPQUFPLE9BQU87SUFBcEI7UUFDVyxTQUFJLEdBQUcsT0FBTyxDQUFDO0lBQzFCLENBQUM7Q0FBQTs7O0lBREMsdUJBQXdCOztBQUcxQixNQUFNLE9BQU8sZUFBZTs7OztJQUUxQixZQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUR6QixTQUFJLEdBQUcsaUJBQWlCLENBQUM7SUFDRyxDQUFDO0NBQ3ZDOzs7SUFGQywrQkFBa0M7O0lBQ3RCLGtDQUFzQjs7QUFHcEMsTUFBTSxPQUFPLGdCQUFnQjtJQUE3QjtRQUNXLFNBQUksR0FBRyxrQkFBa0IsQ0FBQztJQUNyQyxDQUFDO0NBQUE7OztJQURDLGdDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5leHBvcnQgY29uc3QgR08gPSAnW1JvdXRlcl0gR28nO1xuZXhwb3J0IGNvbnN0IEdPX0JZX1VSTCA9ICdbUm91dGVyXSBHbyBCeSBVcmwnO1xuZXhwb3J0IGNvbnN0IEJBQ0sgPSAnW1JvdXRlcl0gQmFjayc7XG5leHBvcnQgY29uc3QgRk9SV0FSRCA9ICdbUm91dGVyXSBGb3J3YXJkJztcbmV4cG9ydCBjb25zdCBTQVZFX1JFRElSRUNUX1VSTCA9ICdbUm91dGVyXSBTYXZlIFJlZGlyZWN0IFVybCc7XG5leHBvcnQgY29uc3QgQ0xFQVJfUkVESVJFQ1RfVVJMID0gJ1tSb3V0ZXJdIENsZWFyIFJlZGlyZWN0IFVybCc7XG5cbmV4cG9ydCBjbGFzcyBHbyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBHTztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHBhdGg6IHN0cmluZ1tdO1xuICAgICAgcXVlcnk/OiBvYmplY3Q7XG4gICAgICBleHRyYXM/OiBOYXZpZ2F0aW9uRXh0cmFzO1xuICAgIH1cbiAgKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgR29CeVVybCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBHT19CWV9VUkw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBCYWNrIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEJBQ0s7XG59XG5cbmV4cG9ydCBjbGFzcyBGb3J3YXJkIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZPUldBUkQ7XG59XG5cbmV4cG9ydCBjbGFzcyBTYXZlUmVkaXJlY3RVcmwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0FWRV9SRURJUkVDVF9VUkw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhclJlZGlyZWN0VXJsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX1JFRElSRUNUX1VSTDtcbn1cblxuZXhwb3J0IHR5cGUgQWN0aW9ucyA9XG4gIHwgR29cbiAgfCBHb0J5VXJsXG4gIHwgQmFja1xuICB8IEZvcndhcmRcbiAgfCBTYXZlUmVkaXJlY3RVcmxcbiAgfCBDbGVhclJlZGlyZWN0VXJsO1xuIl19