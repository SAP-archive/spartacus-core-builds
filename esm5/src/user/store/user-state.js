/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var USER_FEATURE = 'user';
/** @type {?} */
export var UPDATE_EMAIL_PROCESS_ID = 'updateEmail';
/** @type {?} */
export var UPDATE_PASSWORD_PROCESS_ID = 'updatePassword';
/** @type {?} */
export var UPDATE_USER_DETAILS_PROCESS_ID = 'updateUserDetails';
/** @type {?} */
export var REMOVE_USER_PROCESS_ID = 'removeUser';
/** @type {?} */
export var GIVE_CONSENT_PROCESS_ID = 'giveConsent';
/** @type {?} */
export var WITHDRAW_CONSENT_PROCESS_ID = 'withdrawConsent';
/** @type {?} */
export var USER_CONSENTS = '[User] User Consents';
/** @type {?} */
export var USER_PAYMENT_METHODS = '[User] User Payment Methods';
/** @type {?} */
export var USER_ORDERS = '[User] User Orders';
/** @type {?} */
export var USER_ADDRESSES = '[User] User Addresses';
/**
 * @record
 */
export function StateWithUser() { }
if (false) {
    /* Skipping unnamed member:
    [USER_FEATURE]: UserState;*/
}
/**
 * @record
 */
export function UserState() { }
if (false) {
    /** @type {?} */
    UserState.prototype.account;
    /** @type {?} */
    UserState.prototype.addresses;
    /** @type {?} */
    UserState.prototype.consents;
    /** @type {?} */
    UserState.prototype.billingCountries;
    /** @type {?} */
    UserState.prototype.countries;
    /** @type {?} */
    UserState.prototype.payments;
    /** @type {?} */
    UserState.prototype.orders;
    /** @type {?} */
    UserState.prototype.order;
    /** @type {?} */
    UserState.prototype.titles;
    /** @type {?} */
    UserState.prototype.regions;
    /** @type {?} */
    UserState.prototype.resetPassword;
}
/**
 * @record
 */
export function OrderDetailsState() { }
if (false) {
    /** @type {?} */
    OrderDetailsState.prototype.order;
}
/**
 * @record
 */
export function RegionsState() { }
if (false) {
    /** @type {?} */
    RegionsState.prototype.entities;
}
/**
 * @record
 */
export function BillingCountryEntities() { }
/**
 * @record
 */
export function BillingCountriesState() { }
if (false) {
    /** @type {?} */
    BillingCountriesState.prototype.entities;
}
/**
 * @record
 */
export function DeliveryCountryEntities() { }
/**
 * @record
 */
export function DeliveryCountriesState() { }
if (false) {
    /** @type {?} */
    DeliveryCountriesState.prototype.entities;
}
/**
 * @record
 */
export function TitleEntities() { }
/**
 * @record
 */
export function TitlesState() { }
if (false) {
    /** @type {?} */
    TitlesState.prototype.entities;
}
/**
 * @record
 */
export function UserDetailsState() { }
if (false) {
    /** @type {?} */
    UserDetailsState.prototype.details;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL3VzZXItc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFPQSxNQUFNLEtBQU8sWUFBWSxHQUFHLE1BQU07O0FBQ2xDLE1BQU0sS0FBTyx1QkFBdUIsR0FBRyxhQUFhOztBQUNwRCxNQUFNLEtBQU8sMEJBQTBCLEdBQUcsZ0JBQWdCOztBQUMxRCxNQUFNLEtBQU8sOEJBQThCLEdBQUcsbUJBQW1COztBQUNqRSxNQUFNLEtBQU8sc0JBQXNCLEdBQUcsWUFBWTs7QUFDbEQsTUFBTSxLQUFPLHVCQUF1QixHQUFHLGFBQWE7O0FBQ3BELE1BQU0sS0FBTywyQkFBMkIsR0FBRyxpQkFBaUI7O0FBRTVELE1BQU0sS0FBTyxhQUFhLEdBQUcsc0JBQXNCOztBQUNuRCxNQUFNLEtBQU8sb0JBQW9CLEdBQUcsNkJBQTZCOztBQUNqRSxNQUFNLEtBQU8sV0FBVyxHQUFHLG9CQUFvQjs7QUFDL0MsTUFBTSxLQUFPLGNBQWMsR0FBRyx1QkFBdUI7Ozs7QUFFckQsbUNBRUM7Ozs7Ozs7O0FBRUQsK0JBWUM7OztJQVhDLDRCQUEwQjs7SUFDMUIsOEJBQWtDOztJQUNsQyw2QkFBMkM7O0lBQzNDLHFDQUF3Qzs7SUFDeEMsOEJBQWtDOztJQUNsQyw2QkFBd0M7O0lBQ3hDLDJCQUFzQzs7SUFDdEMsMEJBQXlCOztJQUN6QiwyQkFBb0I7O0lBQ3BCLDRCQUFzQjs7SUFDdEIsa0NBQXVCOzs7OztBQUd6Qix1Q0FFQzs7O0lBREMsa0NBQWE7Ozs7O0FBR2Ysa0NBRUM7OztJQURDLGdDQUFtQjs7Ozs7QUFHckIsNENBRUM7Ozs7QUFFRCwyQ0FFQzs7O0lBREMseUNBQWlDOzs7OztBQUduQyw2Q0FFQzs7OztBQUVELDRDQUVDOzs7SUFEQywwQ0FBa0M7Ozs7O0FBR3BDLG1DQUVDOzs7O0FBRUQsaUNBRUM7OztJQURDLCtCQUF3Qjs7Ozs7QUFHMUIsc0NBRUM7OztJQURDLG1DQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWRkcmVzcywgQ291bnRyeSwgUmVnaW9uIH0gZnJvbSAnLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQgeyBQYXltZW50RGV0YWlscyB9IGZyb20gJy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgVGl0bGUsIFVzZXIgfSBmcm9tICcuLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IE9yZGVyLCBPcmRlckhpc3RvcnlMaXN0IH0gZnJvbSAnLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgQ29uc2VudFRlbXBsYXRlTGlzdCB9IGZyb20gJy4uLy4uL29jYy9vY2MtbW9kZWxzL2FkZGl0aW9uYWwtb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlJztcblxuZXhwb3J0IGNvbnN0IFVTRVJfRkVBVFVSRSA9ICd1c2VyJztcbmV4cG9ydCBjb25zdCBVUERBVEVfRU1BSUxfUFJPQ0VTU19JRCA9ICd1cGRhdGVFbWFpbCc7XG5leHBvcnQgY29uc3QgVVBEQVRFX1BBU1NXT1JEX1BST0NFU1NfSUQgPSAndXBkYXRlUGFzc3dvcmQnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9VU0VSX0RFVEFJTFNfUFJPQ0VTU19JRCA9ICd1cGRhdGVVc2VyRGV0YWlscyc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1VTRVJfUFJPQ0VTU19JRCA9ICdyZW1vdmVVc2VyJztcbmV4cG9ydCBjb25zdCBHSVZFX0NPTlNFTlRfUFJPQ0VTU19JRCA9ICdnaXZlQ29uc2VudCc7XG5leHBvcnQgY29uc3QgV0lUSERSQVdfQ09OU0VOVF9QUk9DRVNTX0lEID0gJ3dpdGhkcmF3Q29uc2VudCc7XG5cbmV4cG9ydCBjb25zdCBVU0VSX0NPTlNFTlRTID0gJ1tVc2VyXSBVc2VyIENvbnNlbnRzJztcbmV4cG9ydCBjb25zdCBVU0VSX1BBWU1FTlRfTUVUSE9EUyA9ICdbVXNlcl0gVXNlciBQYXltZW50IE1ldGhvZHMnO1xuZXhwb3J0IGNvbnN0IFVTRVJfT1JERVJTID0gJ1tVc2VyXSBVc2VyIE9yZGVycyc7XG5leHBvcnQgY29uc3QgVVNFUl9BRERSRVNTRVMgPSAnW1VzZXJdIFVzZXIgQWRkcmVzc2VzJztcblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZVdpdGhVc2VyIHtcbiAgW1VTRVJfRkVBVFVSRV06IFVzZXJTdGF0ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VyU3RhdGUge1xuICBhY2NvdW50OiBVc2VyRGV0YWlsc1N0YXRlO1xuICBhZGRyZXNzZXM6IExvYWRlclN0YXRlPEFkZHJlc3NbXT47XG4gIGNvbnNlbnRzOiBMb2FkZXJTdGF0ZTxDb25zZW50VGVtcGxhdGVMaXN0PjtcbiAgYmlsbGluZ0NvdW50cmllczogQmlsbGluZ0NvdW50cmllc1N0YXRlO1xuICBjb3VudHJpZXM6IERlbGl2ZXJ5Q291bnRyaWVzU3RhdGU7XG4gIHBheW1lbnRzOiBMb2FkZXJTdGF0ZTxQYXltZW50RGV0YWlsc1tdPjtcbiAgb3JkZXJzOiBMb2FkZXJTdGF0ZTxPcmRlckhpc3RvcnlMaXN0PjtcbiAgb3JkZXI6IE9yZGVyRGV0YWlsc1N0YXRlO1xuICB0aXRsZXM6IFRpdGxlc1N0YXRlO1xuICByZWdpb25zOiBSZWdpb25zU3RhdGU7XG4gIHJlc2V0UGFzc3dvcmQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3JkZXJEZXRhaWxzU3RhdGUge1xuICBvcmRlcjogT3JkZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVnaW9uc1N0YXRlIHtcbiAgZW50aXRpZXM6IFJlZ2lvbltdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJpbGxpbmdDb3VudHJ5RW50aXRpZXMge1xuICBba2V5OiBzdHJpbmddOiBDb3VudHJ5O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJpbGxpbmdDb3VudHJpZXNTdGF0ZSB7XG4gIGVudGl0aWVzOiBCaWxsaW5nQ291bnRyeUVudGl0aWVzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlbGl2ZXJ5Q291bnRyeUVudGl0aWVzIHtcbiAgW2tleTogc3RyaW5nXTogQ291bnRyeTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZWxpdmVyeUNvdW50cmllc1N0YXRlIHtcbiAgZW50aXRpZXM6IERlbGl2ZXJ5Q291bnRyeUVudGl0aWVzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRpdGxlRW50aXRpZXMge1xuICBba2V5OiBzdHJpbmddOiBUaXRsZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaXRsZXNTdGF0ZSB7XG4gIGVudGl0aWVzOiBUaXRsZUVudGl0aWVzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJEZXRhaWxzU3RhdGUge1xuICBkZXRhaWxzOiBVc2VyO1xufVxuIl19