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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy12ZXJpZmljYXRpb24uYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL2FjdGlvbnMvYWRkcmVzcy12ZXJpZmljYXRpb24uYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsTUFBTSxPQUFPLGNBQWMsR0FBRywyQkFBMkI7O0FBQ3pELE1BQU0sT0FBTyxtQkFBbUIsR0FBRyxnQ0FBZ0M7O0FBQ25FLE1BQU0sT0FBTyxzQkFBc0IsR0FBRyxtQ0FBbUM7O0FBRXpFLE1BQU0sT0FBTyxrQ0FBa0MsR0FDN0MsK0NBQStDO0FBRWpELE1BQU0sT0FBTyxhQUFhOzs7O0lBRXhCLFlBQW1CLE9BQTZDO1FBQTdDLFlBQU8sR0FBUCxPQUFPLENBQXNDO1FBRHZELFNBQUksR0FBRyxjQUFjLENBQUM7SUFDb0MsQ0FBQztDQUNyRTs7O0lBRkMsNkJBQStCOztJQUNuQixnQ0FBb0Q7O0FBR2xFLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFFNUIsWUFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLG1CQUFtQixDQUFDO0lBQ0YsQ0FBQztDQUNwQzs7O0lBRkMsaUNBQW9DOztJQUN4QixvQ0FBbUI7O0FBR2pDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFFL0IsWUFBbUIsT0FBMEI7UUFBMUIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFEcEMsU0FBSSxHQUFHLHNCQUFzQixDQUFDO0lBQ1MsQ0FBQztDQUNsRDs7O0lBRkMsb0NBQXVDOztJQUMzQix1Q0FBaUM7O0FBRy9DLE1BQU0sT0FBTywrQkFBK0I7SUFFMUM7UUFEUyxTQUFJLEdBQUcsa0NBQWtDLENBQUM7SUFDcEMsQ0FBQztDQUNqQjs7O0lBRkMsK0NBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQWRkcmVzcywgQWRkcmVzc1ZhbGlkYXRpb24gfSBmcm9tICcuLi8uLi8uLi9vY2Mvb2NjLW1vZGVscy9pbmRleCc7XG5cbmV4cG9ydCBjb25zdCBWRVJJRllfQUREUkVTUyA9ICdbQ2hlY2tvdXRdIFZlcmlmeSBBZGRyZXNzJztcbmV4cG9ydCBjb25zdCBWRVJJRllfQUREUkVTU19GQUlMID0gJ1tDaGVja291dF0gVmVyaWZ5IEFkZHJlc3MgRmFpbCc7XG5leHBvcnQgY29uc3QgVkVSSUZZX0FERFJFU1NfU1VDQ0VTUyA9ICdbQ2hlY2tvdXRdIFZlcmlmeSBBZGRyZXNzIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgQ0xFQVJfQUREUkVTU19WRVJJRklDQVRJT05fUkVTVUxUUyA9XG4gICdbQ2hlY2tvdXRdIENsZWFyIEFkZHJlc3MgVmVyaWZpY2F0aW9uIFJlc3VsdHMnO1xuXG5leHBvcnQgY2xhc3MgVmVyaWZ5QWRkcmVzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBWRVJJRllfQUREUkVTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGFkZHJlc3M6IEFkZHJlc3MgfSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFZlcmlmeUFkZHJlc3NGYWlsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFZFUklGWV9BRERSRVNTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBWZXJpZnlBZGRyZXNzU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBWRVJJRllfQUREUkVTU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQWRkcmVzc1ZhbGlkYXRpb24pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhckFkZHJlc3NWZXJpZmljYXRpb25SZXN1bHRzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX0FERFJFU1NfVkVSSUZJQ0FUSU9OX1JFU1VMVFM7XG4gIGNvbnN0cnVjdG9yKCkge31cbn1cblxuZXhwb3J0IHR5cGUgQWRkcmVzc1ZlcmlmaWNhdGlvbkFjdGlvbnMgPVxuICB8IFZlcmlmeUFkZHJlc3NcbiAgfCBWZXJpZnlBZGRyZXNzRmFpbFxuICB8IFZlcmlmeUFkZHJlc3NTdWNjZXNzXG4gIHwgQ2xlYXJBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0cztcbiJdfQ==