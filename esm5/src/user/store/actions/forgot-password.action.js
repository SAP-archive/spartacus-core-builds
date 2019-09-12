/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var FORGOT_PASSWORD_EMAIL_REQUEST = '[User] Forgot Password Email Request';
/** @type {?} */
export var FORGOT_PASSWORD_EMAIL_REQUEST_SUCCESS = '[User] Forgot Password Email Request Success';
/** @type {?} */
export var FORGOT_PASSWORD_EMAIL_REQUEST_FAIL = '[User] Forgot Password Email Request Fail';
var ForgotPasswordEmailRequest = /** @class */ (function () {
    function ForgotPasswordEmailRequest(payload) {
        this.payload = payload;
        this.type = FORGOT_PASSWORD_EMAIL_REQUEST;
    }
    return ForgotPasswordEmailRequest;
}());
export { ForgotPasswordEmailRequest };
if (false) {
    /** @type {?} */
    ForgotPasswordEmailRequest.prototype.type;
    /** @type {?} */
    ForgotPasswordEmailRequest.prototype.payload;
}
var ForgotPasswordEmailRequestFail = /** @class */ (function () {
    function ForgotPasswordEmailRequestFail(payload) {
        this.payload = payload;
        this.type = FORGOT_PASSWORD_EMAIL_REQUEST_FAIL;
    }
    return ForgotPasswordEmailRequestFail;
}());
export { ForgotPasswordEmailRequestFail };
if (false) {
    /** @type {?} */
    ForgotPasswordEmailRequestFail.prototype.type;
    /** @type {?} */
    ForgotPasswordEmailRequestFail.prototype.payload;
}
var ForgotPasswordEmailRequestSuccess = /** @class */ (function () {
    function ForgotPasswordEmailRequestSuccess() {
        this.type = FORGOT_PASSWORD_EMAIL_REQUEST_SUCCESS;
    }
    return ForgotPasswordEmailRequestSuccess;
}());
export { ForgotPasswordEmailRequestSuccess };
if (false) {
    /** @type {?} */
    ForgotPasswordEmailRequestSuccess.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2FjdGlvbnMvZm9yZ290LXBhc3N3b3JkLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE1BQU0sS0FBTyw2QkFBNkIsR0FDeEMsc0NBQXNDOztBQUN4QyxNQUFNLEtBQU8scUNBQXFDLEdBQ2hELDhDQUE4Qzs7QUFDaEQsTUFBTSxLQUFPLGtDQUFrQyxHQUM3QywyQ0FBMkM7QUFFN0M7SUFFRSxvQ0FBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSxHQUFHLDZCQUE2QixDQUFDO0lBQ1QsQ0FBQztJQUN4QyxpQ0FBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsMENBQThDOztJQUNsQyw2Q0FBc0I7O0FBR3BDO0lBRUUsd0NBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxrQ0FBa0MsQ0FBQztJQUNqQixDQUFDO0lBQ3JDLHFDQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyw4Q0FBbUQ7O0lBQ3ZDLGlEQUFtQjs7QUFHakM7SUFBQTtRQUNXLFNBQUksR0FBRyxxQ0FBcUMsQ0FBQztJQUN4RCxDQUFDO0lBQUQsd0NBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7OztJQURDLGlEQUFzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuZXhwb3J0IGNvbnN0IEZPUkdPVF9QQVNTV09SRF9FTUFJTF9SRVFVRVNUID1cbiAgJ1tVc2VyXSBGb3Jnb3QgUGFzc3dvcmQgRW1haWwgUmVxdWVzdCc7XG5leHBvcnQgY29uc3QgRk9SR09UX1BBU1NXT1JEX0VNQUlMX1JFUVVFU1RfU1VDQ0VTUyA9XG4gICdbVXNlcl0gRm9yZ290IFBhc3N3b3JkIEVtYWlsIFJlcXVlc3QgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgRk9SR09UX1BBU1NXT1JEX0VNQUlMX1JFUVVFU1RfRkFJTCA9XG4gICdbVXNlcl0gRm9yZ290IFBhc3N3b3JkIEVtYWlsIFJlcXVlc3QgRmFpbCc7XG5cbmV4cG9ydCBjbGFzcyBGb3Jnb3RQYXNzd29yZEVtYWlsUmVxdWVzdCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGT1JHT1RfUEFTU1dPUkRfRU1BSUxfUkVRVUVTVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cbn1cblxuZXhwb3J0IGNsYXNzIEZvcmdvdFBhc3N3b3JkRW1haWxSZXF1ZXN0RmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGT1JHT1RfUEFTU1dPUkRfRU1BSUxfUkVRVUVTVF9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgRm9yZ290UGFzc3dvcmRFbWFpbFJlcXVlc3RTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZPUkdPVF9QQVNTV09SRF9FTUFJTF9SRVFVRVNUX1NVQ0NFU1M7XG59XG5cbmV4cG9ydCB0eXBlIEZvcmdvdFBhc3N3b3JkRW1haWxSZXF1ZXN0QWN0aW9uID1cbiAgfCBGb3Jnb3RQYXNzd29yZEVtYWlsUmVxdWVzdFxuICB8IEZvcmdvdFBhc3N3b3JkRW1haWxSZXF1ZXN0RmFpbFxuICB8IEZvcmdvdFBhc3N3b3JkRW1haWxSZXF1ZXN0U3VjY2VzcztcbiJdfQ==