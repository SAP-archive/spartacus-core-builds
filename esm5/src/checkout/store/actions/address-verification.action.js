/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var VERIFY_ADDRESS = '[Checkout] Verify Address';
/** @type {?} */
export var VERIFY_ADDRESS_FAIL = '[Checkout] Verify Address Fail';
/** @type {?} */
export var VERIFY_ADDRESS_SUCCESS = '[Checkout] Verify Address Success';
/** @type {?} */
export var CLEAR_ADDRESS_VERIFICATION_RESULTS = '[Checkout] Clear Address Verification Results';
var VerifyAddress = /** @class */ (function () {
    function VerifyAddress(payload) {
        this.payload = payload;
        this.type = VERIFY_ADDRESS;
    }
    return VerifyAddress;
}());
export { VerifyAddress };
if (false) {
    /** @type {?} */
    VerifyAddress.prototype.type;
    /** @type {?} */
    VerifyAddress.prototype.payload;
}
var VerifyAddressFail = /** @class */ (function () {
    function VerifyAddressFail(payload) {
        this.payload = payload;
        this.type = VERIFY_ADDRESS_FAIL;
    }
    return VerifyAddressFail;
}());
export { VerifyAddressFail };
if (false) {
    /** @type {?} */
    VerifyAddressFail.prototype.type;
    /** @type {?} */
    VerifyAddressFail.prototype.payload;
}
var VerifyAddressSuccess = /** @class */ (function () {
    function VerifyAddressSuccess(payload) {
        this.payload = payload;
        this.type = VERIFY_ADDRESS_SUCCESS;
    }
    return VerifyAddressSuccess;
}());
export { VerifyAddressSuccess };
if (false) {
    /** @type {?} */
    VerifyAddressSuccess.prototype.type;
    /** @type {?} */
    VerifyAddressSuccess.prototype.payload;
}
var ClearAddressVerificationResults = /** @class */ (function () {
    function ClearAddressVerificationResults() {
        this.type = CLEAR_ADDRESS_VERIFICATION_RESULTS;
    }
    return ClearAddressVerificationResults;
}());
export { ClearAddressVerificationResults };
if (false) {
    /** @type {?} */
    ClearAddressVerificationResults.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy12ZXJpZmljYXRpb24uYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL2FjdGlvbnMvYWRkcmVzcy12ZXJpZmljYXRpb24uYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsTUFBTSxLQUFPLGNBQWMsR0FBRywyQkFBMkI7O0FBQ3pELE1BQU0sS0FBTyxtQkFBbUIsR0FBRyxnQ0FBZ0M7O0FBQ25FLE1BQU0sS0FBTyxzQkFBc0IsR0FBRyxtQ0FBbUM7O0FBRXpFLE1BQU0sS0FBTyxrQ0FBa0MsR0FDN0MsK0NBQStDO0FBRWpEO0lBRUUsdUJBQW1CLE9BQTZDO1FBQTdDLFlBQU8sR0FBUCxPQUFPLENBQXNDO1FBRHZELFNBQUksR0FBRyxjQUFjLENBQUM7SUFDb0MsQ0FBQztJQUN0RSxvQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsNkJBQStCOztJQUNuQixnQ0FBb0Q7O0FBR2xFO0lBRUUsMkJBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxtQkFBbUIsQ0FBQztJQUNGLENBQUM7SUFDckMsd0JBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLGlDQUFvQzs7SUFDeEIsb0NBQW1COztBQUdqQztJQUVFLDhCQUFtQixPQUEwQjtRQUExQixZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQURwQyxTQUFJLEdBQUcsc0JBQXNCLENBQUM7SUFDUyxDQUFDO0lBQ25ELDJCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyxvQ0FBdUM7O0lBQzNCLHVDQUFpQzs7QUFHL0M7SUFFRTtRQURTLFNBQUksR0FBRyxrQ0FBa0MsQ0FBQztJQUNwQyxDQUFDO0lBQ2xCLHNDQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQywrQ0FBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBBZGRyZXNzLCBBZGRyZXNzVmFsaWRhdGlvbiB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgVkVSSUZZX0FERFJFU1MgPSAnW0NoZWNrb3V0XSBWZXJpZnkgQWRkcmVzcyc7XG5leHBvcnQgY29uc3QgVkVSSUZZX0FERFJFU1NfRkFJTCA9ICdbQ2hlY2tvdXRdIFZlcmlmeSBBZGRyZXNzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IFZFUklGWV9BRERSRVNTX1NVQ0NFU1MgPSAnW0NoZWNrb3V0XSBWZXJpZnkgQWRkcmVzcyBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IENMRUFSX0FERFJFU1NfVkVSSUZJQ0FUSU9OX1JFU1VMVFMgPVxuICAnW0NoZWNrb3V0XSBDbGVhciBBZGRyZXNzIFZlcmlmaWNhdGlvbiBSZXN1bHRzJztcblxuZXhwb3J0IGNsYXNzIFZlcmlmeUFkZHJlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVkVSSUZZX0FERFJFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBhZGRyZXNzOiBBZGRyZXNzIH0pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBWZXJpZnlBZGRyZXNzRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBWRVJJRllfQUREUkVTU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgVmVyaWZ5QWRkcmVzc1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVkVSSUZZX0FERFJFU1NfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEFkZHJlc3NWYWxpZGF0aW9uKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xlYXJBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0cyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9BRERSRVNTX1ZFUklGSUNBVElPTl9SRVNVTFRTO1xuICBjb25zdHJ1Y3RvcigpIHt9XG59XG5cbmV4cG9ydCB0eXBlIEFkZHJlc3NWZXJpZmljYXRpb25BY3Rpb25zID1cbiAgfCBWZXJpZnlBZGRyZXNzXG4gIHwgVmVyaWZ5QWRkcmVzc0ZhaWxcbiAgfCBWZXJpZnlBZGRyZXNzU3VjY2Vzc1xuICB8IENsZWFyQWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHM7XG4iXX0=