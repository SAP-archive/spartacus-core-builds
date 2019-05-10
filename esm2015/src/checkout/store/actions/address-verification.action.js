/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const VERIFY_ADDRESS = '[Checkout] Verify Address';
/** @type {?} */
export const VERIFY_ADDRESS_FAIL = '[Checkout] Verify Address Fail';
/** @type {?} */
export const VERIFY_ADDRESS_SUCCESS = '[Checkout] Verify Address Success';
/** @type {?} */
export const CLEAR_ADDRESS_VERIFICATION_RESULTS = '[Checkout] Clear Address Verification Results';
export class VerifyAddress {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = VERIFY_ADDRESS;
    }
}
if (false) {
    /** @type {?} */
    VerifyAddress.prototype.type;
    /** @type {?} */
    VerifyAddress.prototype.payload;
}
export class VerifyAddressFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = VERIFY_ADDRESS_FAIL;
    }
}
if (false) {
    /** @type {?} */
    VerifyAddressFail.prototype.type;
    /** @type {?} */
    VerifyAddressFail.prototype.payload;
}
export class VerifyAddressSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = VERIFY_ADDRESS_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    VerifyAddressSuccess.prototype.type;
    /** @type {?} */
    VerifyAddressSuccess.prototype.payload;
}
export class ClearAddressVerificationResults {
    constructor() {
        this.type = CLEAR_ADDRESS_VERIFICATION_RESULTS;
    }
}
if (false) {
    /** @type {?} */
    ClearAddressVerificationResults.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy12ZXJpZmljYXRpb24uYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL2FjdGlvbnMvYWRkcmVzcy12ZXJpZmljYXRpb24uYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsTUFBTSxPQUFPLGNBQWMsR0FBRywyQkFBMkI7O0FBQ3pELE1BQU0sT0FBTyxtQkFBbUIsR0FBRyxnQ0FBZ0M7O0FBQ25FLE1BQU0sT0FBTyxzQkFBc0IsR0FBRyxtQ0FBbUM7O0FBRXpFLE1BQU0sT0FBTyxrQ0FBa0MsR0FDN0MsK0NBQStDO0FBRWpELE1BQU0sT0FBTyxhQUFhOzs7O0lBRXhCLFlBQW1CLE9BQTZDO1FBQTdDLFlBQU8sR0FBUCxPQUFPLENBQXNDO1FBRHZELFNBQUksR0FBRyxjQUFjLENBQUM7SUFDb0MsQ0FBQztDQUNyRTs7O0lBRkMsNkJBQStCOztJQUNuQixnQ0FBb0Q7O0FBR2xFLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFFNUIsWUFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLG1CQUFtQixDQUFDO0lBQ0YsQ0FBQztDQUNwQzs7O0lBRkMsaUNBQW9DOztJQUN4QixvQ0FBbUI7O0FBR2pDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFFL0IsWUFBbUIsT0FBMEI7UUFBMUIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFEcEMsU0FBSSxHQUFHLHNCQUFzQixDQUFDO0lBQ1MsQ0FBQztDQUNsRDs7O0lBRkMsb0NBQXVDOztJQUMzQix1Q0FBaUM7O0FBRy9DLE1BQU0sT0FBTywrQkFBK0I7SUFFMUM7UUFEUyxTQUFJLEdBQUcsa0NBQWtDLENBQUM7SUFDcEMsQ0FBQztDQUNqQjs7O0lBRkMsK0NBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQWRkcmVzcywgQWRkcmVzc1ZhbGlkYXRpb24gfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IFZFUklGWV9BRERSRVNTID0gJ1tDaGVja291dF0gVmVyaWZ5IEFkZHJlc3MnO1xuZXhwb3J0IGNvbnN0IFZFUklGWV9BRERSRVNTX0ZBSUwgPSAnW0NoZWNrb3V0XSBWZXJpZnkgQWRkcmVzcyBGYWlsJztcbmV4cG9ydCBjb25zdCBWRVJJRllfQUREUkVTU19TVUNDRVNTID0gJ1tDaGVja291dF0gVmVyaWZ5IEFkZHJlc3MgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBDTEVBUl9BRERSRVNTX1ZFUklGSUNBVElPTl9SRVNVTFRTID1cbiAgJ1tDaGVja291dF0gQ2xlYXIgQWRkcmVzcyBWZXJpZmljYXRpb24gUmVzdWx0cyc7XG5cbmV4cG9ydCBjbGFzcyBWZXJpZnlBZGRyZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFZFUklGWV9BRERSRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgYWRkcmVzczogQWRkcmVzcyB9KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgVmVyaWZ5QWRkcmVzc0ZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVkVSSUZZX0FERFJFU1NfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFZlcmlmeUFkZHJlc3NTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFZFUklGWV9BRERSRVNTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBBZGRyZXNzVmFsaWRhdGlvbikge31cbn1cblxuZXhwb3J0IGNsYXNzIENsZWFyQWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0xFQVJfQUREUkVTU19WRVJJRklDQVRJT05fUkVTVUxUUztcbiAgY29uc3RydWN0b3IoKSB7fVxufVxuXG5leHBvcnQgdHlwZSBBZGRyZXNzVmVyaWZpY2F0aW9uQWN0aW9ucyA9XG4gIHwgVmVyaWZ5QWRkcmVzc1xuICB8IFZlcmlmeUFkZHJlc3NGYWlsXG4gIHwgVmVyaWZ5QWRkcmVzc1N1Y2Nlc3NcbiAgfCBDbGVhckFkZHJlc3NWZXJpZmljYXRpb25SZXN1bHRzO1xuIl19