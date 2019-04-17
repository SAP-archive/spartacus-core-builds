/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var RESET_PASSWORD = '[User] Reset Password';
/** @type {?} */
export var RESET_PASSWORD_SUCCESS = '[User] Reset Password Success';
/** @type {?} */
export var RESET_PASSWORD_FAIL = '[User] Reset Password Fail';
var ResetPassword = /** @class */ (function () {
    function ResetPassword(payload) {
        this.payload = payload;
        this.type = RESET_PASSWORD;
    }
    return ResetPassword;
}());
export { ResetPassword };
if (false) {
    /** @type {?} */
    ResetPassword.prototype.type;
    /** @type {?} */
    ResetPassword.prototype.payload;
}
var ResetPasswordFail = /** @class */ (function () {
    function ResetPasswordFail(payload) {
        this.payload = payload;
        this.type = RESET_PASSWORD_FAIL;
    }
    return ResetPasswordFail;
}());
export { ResetPasswordFail };
if (false) {
    /** @type {?} */
    ResetPasswordFail.prototype.type;
    /** @type {?} */
    ResetPasswordFail.prototype.payload;
}
var ResetPasswordSuccess = /** @class */ (function () {
    function ResetPasswordSuccess() {
        this.type = RESET_PASSWORD_SUCCESS;
    }
    return ResetPasswordSuccess;
}());
export { ResetPasswordSuccess };
if (false) {
    /** @type {?} */
    ResetPasswordSuccess.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvYWN0aW9ucy9yZXNldC1wYXNzd29yZC5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxNQUFNLEtBQU8sY0FBYyxHQUFHLHVCQUF1Qjs7QUFDckQsTUFBTSxLQUFPLHNCQUFzQixHQUFHLCtCQUErQjs7QUFDckUsTUFBTSxLQUFPLG1CQUFtQixHQUFHLDRCQUE0QjtBQUUvRDtJQUVFLHVCQUFtQixPQUE0QztRQUE1QyxZQUFPLEdBQVAsT0FBTyxDQUFxQztRQUR0RCxTQUFJLEdBQUcsY0FBYyxDQUFDO0lBQ21DLENBQUM7SUFDckUsb0JBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLDZCQUErQjs7SUFDbkIsZ0NBQW1EOztBQUdqRTtJQUVFLDJCQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsbUJBQW1CLENBQUM7SUFDRixDQUFDO0lBQ3JDLHdCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyxpQ0FBb0M7O0lBQ3hCLG9DQUFtQjs7QUFHakM7SUFBQTtRQUNXLFNBQUksR0FBRyxzQkFBc0IsQ0FBQztJQUN6QyxDQUFDO0lBQUQsMkJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7OztJQURDLG9DQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuZXhwb3J0IGNvbnN0IFJFU0VUX1BBU1NXT1JEID0gJ1tVc2VyXSBSZXNldCBQYXNzd29yZCc7XG5leHBvcnQgY29uc3QgUkVTRVRfUEFTU1dPUkRfU1VDQ0VTUyA9ICdbVXNlcl0gUmVzZXQgUGFzc3dvcmQgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgUkVTRVRfUEFTU1dPUkRfRkFJTCA9ICdbVXNlcl0gUmVzZXQgUGFzc3dvcmQgRmFpbCc7XG5cbmV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFU0VUX1BBU1NXT1JEO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB0b2tlbjogc3RyaW5nOyBwYXNzd29yZDogc3RyaW5nIH0pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRVNFVF9QQVNTV09SRF9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZFN1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVTRVRfUEFTU1dPUkRfU1VDQ0VTUztcbn1cblxuZXhwb3J0IHR5cGUgUmVzZXRQYXNzd29yZEFjdGlvbiA9XG4gIHwgUmVzZXRQYXNzd29yZFxuICB8IFJlc2V0UGFzc3dvcmRGYWlsXG4gIHwgUmVzZXRQYXNzd29yZFN1Y2Nlc3M7XG4iXX0=