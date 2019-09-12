/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const RESET_PASSWORD = '[User] Reset Password';
/** @type {?} */
export const RESET_PASSWORD_SUCCESS = '[User] Reset Password Success';
/** @type {?} */
export const RESET_PASSWORD_FAIL = '[User] Reset Password Fail';
export class ResetPassword {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = RESET_PASSWORD;
    }
}
if (false) {
    /** @type {?} */
    ResetPassword.prototype.type;
    /** @type {?} */
    ResetPassword.prototype.payload;
}
export class ResetPasswordFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = RESET_PASSWORD_FAIL;
    }
}
if (false) {
    /** @type {?} */
    ResetPasswordFail.prototype.type;
    /** @type {?} */
    ResetPasswordFail.prototype.payload;
}
export class ResetPasswordSuccess {
    constructor() {
        this.type = RESET_PASSWORD_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    ResetPasswordSuccess.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvYWN0aW9ucy9yZXNldC1wYXNzd29yZC5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxNQUFNLE9BQU8sY0FBYyxHQUFHLHVCQUF1Qjs7QUFDckQsTUFBTSxPQUFPLHNCQUFzQixHQUFHLCtCQUErQjs7QUFDckUsTUFBTSxPQUFPLG1CQUFtQixHQUFHLDRCQUE0QjtBQUUvRCxNQUFNLE9BQU8sYUFBYTs7OztJQUV4QixZQUFtQixPQUE0QztRQUE1QyxZQUFPLEdBQVAsT0FBTyxDQUFxQztRQUR0RCxTQUFJLEdBQUcsY0FBYyxDQUFDO0lBQ21DLENBQUM7Q0FDcEU7OztJQUZDLDZCQUErQjs7SUFDbkIsZ0NBQW1EOztBQUdqRSxNQUFNLE9BQU8saUJBQWlCOzs7O0lBRTVCLFlBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxtQkFBbUIsQ0FBQztJQUNGLENBQUM7Q0FDcEM7OztJQUZDLGlDQUFvQzs7SUFDeEIsb0NBQW1COztBQUdqQyxNQUFNLE9BQU8sb0JBQW9CO0lBQWpDO1FBQ1csU0FBSSxHQUFHLHNCQUFzQixDQUFDO0lBQ3pDLENBQUM7Q0FBQTs7O0lBREMsb0NBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5leHBvcnQgY29uc3QgUkVTRVRfUEFTU1dPUkQgPSAnW1VzZXJdIFJlc2V0IFBhc3N3b3JkJztcbmV4cG9ydCBjb25zdCBSRVNFVF9QQVNTV09SRF9TVUNDRVNTID0gJ1tVc2VyXSBSZXNldCBQYXNzd29yZCBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBSRVNFVF9QQVNTV09SRF9GQUlMID0gJ1tVc2VyXSBSZXNldCBQYXNzd29yZCBGYWlsJztcblxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmQgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVTRVRfUEFTU1dPUkQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHRva2VuOiBzdHJpbmc7IHBhc3N3b3JkOiBzdHJpbmcgfSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRGYWlsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFU0VUX1BBU1NXT1JEX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRVNFVF9QQVNTV09SRF9TVUNDRVNTO1xufVxuXG5leHBvcnQgdHlwZSBSZXNldFBhc3N3b3JkQWN0aW9uID1cbiAgfCBSZXNldFBhc3N3b3JkXG4gIHwgUmVzZXRQYXNzd29yZEZhaWxcbiAgfCBSZXNldFBhc3N3b3JkU3VjY2VzcztcbiJdfQ==