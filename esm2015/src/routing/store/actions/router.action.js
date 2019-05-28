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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9yb3V0aW5nL3N0b3JlL2FjdGlvbnMvcm91dGVyLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE1BQU0sT0FBTyxFQUFFLEdBQUcsYUFBYTs7QUFDL0IsTUFBTSxPQUFPLFNBQVMsR0FBRyxvQkFBb0I7O0FBQzdDLE1BQU0sT0FBTyxJQUFJLEdBQUcsZUFBZTs7QUFDbkMsTUFBTSxPQUFPLE9BQU8sR0FBRyxrQkFBa0I7QUFFekMsTUFBTSxPQUFPLEVBQUU7Ozs7SUFFYixZQUNTLE9BSU47UUFKTSxZQUFPLEdBQVAsT0FBTyxDQUliO1FBTk0sU0FBSSxHQUFHLEVBQUUsQ0FBQztJQU9oQixDQUFDO0NBQ0w7OztJQVJDLGtCQUFtQjs7SUFFakIscUJBSUM7O0FBSUwsTUFBTSxPQUFPLE9BQU87Ozs7SUFFbEIsWUFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSxHQUFHLFNBQVMsQ0FBQztJQUNXLENBQUM7Q0FDdkM7OztJQUZDLHVCQUEwQjs7SUFDZCwwQkFBc0I7O0FBR3BDLE1BQU0sT0FBTyxJQUFJO0lBQWpCO1FBQ1csU0FBSSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDO0NBQUE7OztJQURDLG9CQUFxQjs7QUFHdkIsTUFBTSxPQUFPLE9BQU87SUFBcEI7UUFDVyxTQUFJLEdBQUcsT0FBTyxDQUFDO0lBQzFCLENBQUM7Q0FBQTs7O0lBREMsdUJBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkV4dHJhcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmV4cG9ydCBjb25zdCBHTyA9ICdbUm91dGVyXSBHbyc7XG5leHBvcnQgY29uc3QgR09fQllfVVJMID0gJ1tSb3V0ZXJdIEdvIEJ5IFVybCc7XG5leHBvcnQgY29uc3QgQkFDSyA9ICdbUm91dGVyXSBCYWNrJztcbmV4cG9ydCBjb25zdCBGT1JXQVJEID0gJ1tSb3V0ZXJdIEZvcndhcmQnO1xuXG5leHBvcnQgY2xhc3MgR28gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gR087XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICBwYXRoOiBzdHJpbmdbXTtcbiAgICAgIHF1ZXJ5Pzogb2JqZWN0O1xuICAgICAgZXh0cmFzPzogTmF2aWdhdGlvbkV4dHJhcztcbiAgICB9XG4gICkge31cbn1cblxuZXhwb3J0IGNsYXNzIEdvQnlVcmwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gR09fQllfVVJMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQmFjayBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBCQUNLO1xufVxuXG5leHBvcnQgY2xhc3MgRm9yd2FyZCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGT1JXQVJEO1xufVxuXG5leHBvcnQgdHlwZSBBY3Rpb25zID0gR28gfCBHb0J5VXJsIHwgQmFjayB8IEZvcndhcmQ7XG4iXX0=