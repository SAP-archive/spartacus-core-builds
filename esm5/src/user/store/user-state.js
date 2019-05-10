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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL3VzZXItc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFNQSxNQUFNLEtBQU8sWUFBWSxHQUFHLE1BQU07O0FBQ2xDLE1BQU0sS0FBTyx1QkFBdUIsR0FBRyxhQUFhOztBQUNwRCxNQUFNLEtBQU8sMEJBQTBCLEdBQUcsZ0JBQWdCOztBQUMxRCxNQUFNLEtBQU8sOEJBQThCLEdBQUcsbUJBQW1COztBQUNqRSxNQUFNLEtBQU8sc0JBQXNCLEdBQUcsWUFBWTs7QUFFbEQsTUFBTSxLQUFPLG9CQUFvQixHQUFHLDZCQUE2Qjs7QUFDakUsTUFBTSxLQUFPLFdBQVcsR0FBRyxvQkFBb0I7O0FBQy9DLE1BQU0sS0FBTyxjQUFjLEdBQUcsdUJBQXVCOzs7O0FBRXJELG1DQUVDOzs7Ozs7OztBQUVELCtCQVdDOzs7SUFWQyw0QkFBMEI7O0lBQzFCLDhCQUFrQzs7SUFDbEMscUNBQXdDOztJQUN4Qyw4QkFBa0M7O0lBQ2xDLDZCQUF3Qzs7SUFDeEMsMkJBQXNDOztJQUN0QywwQkFBeUI7O0lBQ3pCLDJCQUFvQjs7SUFDcEIsNEJBQXNCOztJQUN0QixrQ0FBdUI7Ozs7O0FBR3pCLHVDQUVDOzs7SUFEQyxrQ0FBYTs7Ozs7QUFHZixrQ0FFQzs7O0lBREMsZ0NBQW1COzs7OztBQUdyQiw0Q0FFQzs7OztBQUVELDJDQUVDOzs7SUFEQyx5Q0FBaUM7Ozs7O0FBR25DLDZDQUVDOzs7O0FBRUQsNENBRUM7OztJQURDLDBDQUFrQzs7Ozs7QUFHcEMsbUNBRUM7Ozs7QUFFRCxpQ0FFQzs7O0lBREMsK0JBQXdCOzs7OztBQUcxQixzQ0FFQzs7O0lBREMsbUNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlJztcbmltcG9ydCB7IEFkZHJlc3MsIENvdW50cnksIFJlZ2lvbiB9IGZyb20gJy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuaW1wb3J0IHsgUGF5bWVudERldGFpbHMgfSBmcm9tICcuLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IE9yZGVyLCBPcmRlckhpc3RvcnlMaXN0IH0gZnJvbSAnLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgVGl0bGUsIFVzZXIgfSBmcm9tICcuLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IFVTRVJfRkVBVFVSRSA9ICd1c2VyJztcbmV4cG9ydCBjb25zdCBVUERBVEVfRU1BSUxfUFJPQ0VTU19JRCA9ICd1cGRhdGVFbWFpbCc7XG5leHBvcnQgY29uc3QgVVBEQVRFX1BBU1NXT1JEX1BST0NFU1NfSUQgPSAndXBkYXRlUGFzc3dvcmQnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9VU0VSX0RFVEFJTFNfUFJPQ0VTU19JRCA9ICd1cGRhdGVVc2VyRGV0YWlscyc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1VTRVJfUFJPQ0VTU19JRCA9ICdyZW1vdmVVc2VyJztcblxuZXhwb3J0IGNvbnN0IFVTRVJfUEFZTUVOVF9NRVRIT0RTID0gJ1tVc2VyXSBVc2VyIFBheW1lbnQgTWV0aG9kcyc7XG5leHBvcnQgY29uc3QgVVNFUl9PUkRFUlMgPSAnW1VzZXJdIFVzZXIgT3JkZXJzJztcbmV4cG9ydCBjb25zdCBVU0VSX0FERFJFU1NFUyA9ICdbVXNlcl0gVXNlciBBZGRyZXNzZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlV2l0aFVzZXIge1xuICBbVVNFUl9GRUFUVVJFXTogVXNlclN0YXRlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJTdGF0ZSB7XG4gIGFjY291bnQ6IFVzZXJEZXRhaWxzU3RhdGU7XG4gIGFkZHJlc3NlczogTG9hZGVyU3RhdGU8QWRkcmVzc1tdPjtcbiAgYmlsbGluZ0NvdW50cmllczogQmlsbGluZ0NvdW50cmllc1N0YXRlO1xuICBjb3VudHJpZXM6IERlbGl2ZXJ5Q291bnRyaWVzU3RhdGU7XG4gIHBheW1lbnRzOiBMb2FkZXJTdGF0ZTxQYXltZW50RGV0YWlsc1tdPjtcbiAgb3JkZXJzOiBMb2FkZXJTdGF0ZTxPcmRlckhpc3RvcnlMaXN0PjtcbiAgb3JkZXI6IE9yZGVyRGV0YWlsc1N0YXRlO1xuICB0aXRsZXM6IFRpdGxlc1N0YXRlO1xuICByZWdpb25zOiBSZWdpb25zU3RhdGU7XG4gIHJlc2V0UGFzc3dvcmQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3JkZXJEZXRhaWxzU3RhdGUge1xuICBvcmRlcjogT3JkZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVnaW9uc1N0YXRlIHtcbiAgZW50aXRpZXM6IFJlZ2lvbltdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJpbGxpbmdDb3VudHJ5RW50aXRpZXMge1xuICBba2V5OiBzdHJpbmddOiBDb3VudHJ5O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJpbGxpbmdDb3VudHJpZXNTdGF0ZSB7XG4gIGVudGl0aWVzOiBCaWxsaW5nQ291bnRyeUVudGl0aWVzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlbGl2ZXJ5Q291bnRyeUVudGl0aWVzIHtcbiAgW2tleTogc3RyaW5nXTogQ291bnRyeTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZWxpdmVyeUNvdW50cmllc1N0YXRlIHtcbiAgZW50aXRpZXM6IERlbGl2ZXJ5Q291bnRyeUVudGl0aWVzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRpdGxlRW50aXRpZXMge1xuICBba2V5OiBzdHJpbmddOiBUaXRsZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaXRsZXNTdGF0ZSB7XG4gIGVudGl0aWVzOiBUaXRsZUVudGl0aWVzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJEZXRhaWxzU3RhdGUge1xuICBkZXRhaWxzOiBVc2VyO1xufVxuIl19