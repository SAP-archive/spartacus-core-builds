/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const FORGOT_PASSWORD_EMAIL_REQUEST = '[User] Forgot Password Email Request';
/** @type {?} */
export const FORGOT_PASSWORD_EMAIL_REQUEST_SUCCESS = '[User] Forgot Password Email Request Success';
/** @type {?} */
export const FORGOT_PASSWORD_EMAIL_REQUEST_FAIL = '[User] Forgot Password Email Request Fail';
export class ForgotPasswordEmailRequest {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FORGOT_PASSWORD_EMAIL_REQUEST;
    }
}
if (false) {
    /** @type {?} */
    ForgotPasswordEmailRequest.prototype.type;
    /** @type {?} */
    ForgotPasswordEmailRequest.prototype.payload;
}
export class ForgotPasswordEmailRequestFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FORGOT_PASSWORD_EMAIL_REQUEST_FAIL;
    }
}
if (false) {
    /** @type {?} */
    ForgotPasswordEmailRequestFail.prototype.type;
    /** @type {?} */
    ForgotPasswordEmailRequestFail.prototype.payload;
}
export class ForgotPasswordEmailRequestSuccess {
    constructor() {
        this.type = FORGOT_PASSWORD_EMAIL_REQUEST_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    ForgotPasswordEmailRequestSuccess.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2FjdGlvbnMvZm9yZ290LXBhc3N3b3JkLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE1BQU0sT0FBTyw2QkFBNkIsR0FDeEMsc0NBQXNDOztBQUN4QyxNQUFNLE9BQU8scUNBQXFDLEdBQ2hELDhDQUE4Qzs7QUFDaEQsTUFBTSxPQUFPLGtDQUFrQyxHQUM3QywyQ0FBMkM7QUFFN0MsTUFBTSxPQUFPLDBCQUEwQjs7OztJQUVyQyxZQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUR6QixTQUFJLEdBQUcsNkJBQTZCLENBQUM7SUFDVCxDQUFDO0NBQ3ZDOzs7SUFGQywwQ0FBOEM7O0lBQ2xDLDZDQUFzQjs7QUFHcEMsTUFBTSxPQUFPLDhCQUE4Qjs7OztJQUV6QyxZQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsa0NBQWtDLENBQUM7SUFDakIsQ0FBQztDQUNwQzs7O0lBRkMsOENBQW1EOztJQUN2QyxpREFBbUI7O0FBR2pDLE1BQU0sT0FBTyxpQ0FBaUM7SUFBOUM7UUFDVyxTQUFJLEdBQUcscUNBQXFDLENBQUM7SUFDeEQsQ0FBQztDQUFBOzs7SUFEQyxpREFBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmV4cG9ydCBjb25zdCBGT1JHT1RfUEFTU1dPUkRfRU1BSUxfUkVRVUVTVCA9XG4gICdbVXNlcl0gRm9yZ290IFBhc3N3b3JkIEVtYWlsIFJlcXVlc3QnO1xuZXhwb3J0IGNvbnN0IEZPUkdPVF9QQVNTV09SRF9FTUFJTF9SRVFVRVNUX1NVQ0NFU1MgPVxuICAnW1VzZXJdIEZvcmdvdCBQYXNzd29yZCBFbWFpbCBSZXF1ZXN0IFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IEZPUkdPVF9QQVNTV09SRF9FTUFJTF9SRVFVRVNUX0ZBSUwgPVxuICAnW1VzZXJdIEZvcmdvdCBQYXNzd29yZCBFbWFpbCBSZXF1ZXN0IEZhaWwnO1xuXG5leHBvcnQgY2xhc3MgRm9yZ290UGFzc3dvcmRFbWFpbFJlcXVlc3QgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRk9SR09UX1BBU1NXT1JEX0VNQUlMX1JFUVVFU1Q7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBGb3Jnb3RQYXNzd29yZEVtYWlsUmVxdWVzdEZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRk9SR09UX1BBU1NXT1JEX0VNQUlMX1JFUVVFU1RfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIEZvcmdvdFBhc3N3b3JkRW1haWxSZXF1ZXN0U3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGT1JHT1RfUEFTU1dPUkRfRU1BSUxfUkVRVUVTVF9TVUNDRVNTO1xufVxuXG5leHBvcnQgdHlwZSBGb3Jnb3RQYXNzd29yZEVtYWlsUmVxdWVzdEFjdGlvbiA9XG4gIHwgRm9yZ290UGFzc3dvcmRFbWFpbFJlcXVlc3RcbiAgfCBGb3Jnb3RQYXNzd29yZEVtYWlsUmVxdWVzdEZhaWxcbiAgfCBGb3Jnb3RQYXNzd29yZEVtYWlsUmVxdWVzdFN1Y2Nlc3M7XG4iXX0=