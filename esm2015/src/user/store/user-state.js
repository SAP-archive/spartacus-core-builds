/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const USER_FEATURE = 'user';
/** @type {?} */
export const UPDATE_EMAIL_PROCESS_ID = 'updateEmail';
/** @type {?} */
export const UPDATE_PASSWORD_PROCESS_ID = 'updatePassword';
/** @type {?} */
export const UPDATE_USER_DETAILS_PROCESS_ID = 'updateUserDetails';
/** @type {?} */
export const REGISTER_USER_PROCESS_ID = 'registerUser';
/** @type {?} */
export const REMOVE_USER_PROCESS_ID = 'removeUser';
/** @type {?} */
export const GIVE_CONSENT_PROCESS_ID = 'giveConsent';
/** @type {?} */
export const WITHDRAW_CONSENT_PROCESS_ID = 'withdrawConsent';
/** @type {?} */
export const USER_CONSENTS = '[User] User Consents';
/** @type {?} */
export const USER_PAYMENT_METHODS = '[User] User Payment Methods';
/** @type {?} */
export const USER_ORDERS = '[User] User Orders';
/** @type {?} */
export const USER_ADDRESSES = '[User] User Addresses';
/** @type {?} */
export const REGIONS = '[User] Regions';
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
    /** @type {?} */
    RegionsState.prototype.country;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL3VzZXItc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFPQSxNQUFNLE9BQU8sWUFBWSxHQUFHLE1BQU07O0FBQ2xDLE1BQU0sT0FBTyx1QkFBdUIsR0FBRyxhQUFhOztBQUNwRCxNQUFNLE9BQU8sMEJBQTBCLEdBQUcsZ0JBQWdCOztBQUMxRCxNQUFNLE9BQU8sOEJBQThCLEdBQUcsbUJBQW1COztBQUNqRSxNQUFNLE9BQU8sd0JBQXdCLEdBQUcsY0FBYzs7QUFDdEQsTUFBTSxPQUFPLHNCQUFzQixHQUFHLFlBQVk7O0FBQ2xELE1BQU0sT0FBTyx1QkFBdUIsR0FBRyxhQUFhOztBQUNwRCxNQUFNLE9BQU8sMkJBQTJCLEdBQUcsaUJBQWlCOztBQUU1RCxNQUFNLE9BQU8sYUFBYSxHQUFHLHNCQUFzQjs7QUFDbkQsTUFBTSxPQUFPLG9CQUFvQixHQUFHLDZCQUE2Qjs7QUFDakUsTUFBTSxPQUFPLFdBQVcsR0FBRyxvQkFBb0I7O0FBQy9DLE1BQU0sT0FBTyxjQUFjLEdBQUcsdUJBQXVCOztBQUNyRCxNQUFNLE9BQU8sT0FBTyxHQUFHLGdCQUFnQjs7OztBQUV2QyxtQ0FFQzs7Ozs7Ozs7QUFFRCwrQkFZQzs7O0lBWEMsNEJBQTBCOztJQUMxQiw4QkFBa0M7O0lBQ2xDLDZCQUF5Qzs7SUFDekMscUNBQXdDOztJQUN4Qyw4QkFBa0M7O0lBQ2xDLDZCQUF3Qzs7SUFDeEMsMkJBQXNDOztJQUN0QywwQkFBeUI7O0lBQ3pCLDJCQUFvQjs7SUFDcEIsNEJBQW1DOztJQUNuQyxrQ0FBdUI7Ozs7O0FBR3pCLHVDQUVDOzs7SUFEQyxrQ0FBYTs7Ozs7QUFHZixrQ0FHQzs7O0lBRkMsZ0NBQW1COztJQUNuQiwrQkFBZ0I7Ozs7O0FBR2xCLDRDQUVDOzs7O0FBRUQsMkNBRUM7OztJQURDLHlDQUFpQzs7Ozs7QUFHbkMsNkNBRUM7Ozs7QUFFRCw0Q0FFQzs7O0lBREMsMENBQWtDOzs7OztBQUdwQyxtQ0FFQzs7OztBQUVELGlDQUVDOzs7SUFEQywrQkFBd0I7Ozs7O0FBRzFCLHNDQUVDOzs7SUFEQyxtQ0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFkZHJlc3MsIENvdW50cnksIFJlZ2lvbiB9IGZyb20gJy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuaW1wb3J0IHsgUGF5bWVudERldGFpbHMgfSBmcm9tICcuLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IENvbnNlbnRUZW1wbGF0ZSB9IGZyb20gJy4uLy4uL21vZGVsL2NvbnNlbnQubW9kZWwnO1xuaW1wb3J0IHsgVGl0bGUsIFVzZXIgfSBmcm9tICcuLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IE9yZGVyLCBPcmRlckhpc3RvcnlMaXN0IH0gZnJvbSAnLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBVU0VSX0ZFQVRVUkUgPSAndXNlcic7XG5leHBvcnQgY29uc3QgVVBEQVRFX0VNQUlMX1BST0NFU1NfSUQgPSAndXBkYXRlRW1haWwnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9QQVNTV09SRF9QUk9DRVNTX0lEID0gJ3VwZGF0ZVBhc3N3b3JkJztcbmV4cG9ydCBjb25zdCBVUERBVEVfVVNFUl9ERVRBSUxTX1BST0NFU1NfSUQgPSAndXBkYXRlVXNlckRldGFpbHMnO1xuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX1VTRVJfUFJPQ0VTU19JRCA9ICdyZWdpc3RlclVzZXInO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9VU0VSX1BST0NFU1NfSUQgPSAncmVtb3ZlVXNlcic7XG5leHBvcnQgY29uc3QgR0lWRV9DT05TRU5UX1BST0NFU1NfSUQgPSAnZ2l2ZUNvbnNlbnQnO1xuZXhwb3J0IGNvbnN0IFdJVEhEUkFXX0NPTlNFTlRfUFJPQ0VTU19JRCA9ICd3aXRoZHJhd0NvbnNlbnQnO1xuXG5leHBvcnQgY29uc3QgVVNFUl9DT05TRU5UUyA9ICdbVXNlcl0gVXNlciBDb25zZW50cyc7XG5leHBvcnQgY29uc3QgVVNFUl9QQVlNRU5UX01FVEhPRFMgPSAnW1VzZXJdIFVzZXIgUGF5bWVudCBNZXRob2RzJztcbmV4cG9ydCBjb25zdCBVU0VSX09SREVSUyA9ICdbVXNlcl0gVXNlciBPcmRlcnMnO1xuZXhwb3J0IGNvbnN0IFVTRVJfQUREUkVTU0VTID0gJ1tVc2VyXSBVc2VyIEFkZHJlc3Nlcyc7XG5leHBvcnQgY29uc3QgUkVHSU9OUyA9ICdbVXNlcl0gUmVnaW9ucyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGVXaXRoVXNlciB7XG4gIFtVU0VSX0ZFQVRVUkVdOiBVc2VyU3RhdGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlclN0YXRlIHtcbiAgYWNjb3VudDogVXNlckRldGFpbHNTdGF0ZTtcbiAgYWRkcmVzc2VzOiBMb2FkZXJTdGF0ZTxBZGRyZXNzW10+O1xuICBjb25zZW50czogTG9hZGVyU3RhdGU8Q29uc2VudFRlbXBsYXRlW10+O1xuICBiaWxsaW5nQ291bnRyaWVzOiBCaWxsaW5nQ291bnRyaWVzU3RhdGU7XG4gIGNvdW50cmllczogRGVsaXZlcnlDb3VudHJpZXNTdGF0ZTtcbiAgcGF5bWVudHM6IExvYWRlclN0YXRlPFBheW1lbnREZXRhaWxzW10+O1xuICBvcmRlcnM6IExvYWRlclN0YXRlPE9yZGVySGlzdG9yeUxpc3Q+O1xuICBvcmRlcjogT3JkZXJEZXRhaWxzU3RhdGU7XG4gIHRpdGxlczogVGl0bGVzU3RhdGU7XG4gIHJlZ2lvbnM6IExvYWRlclN0YXRlPFJlZ2lvbnNTdGF0ZT47XG4gIHJlc2V0UGFzc3dvcmQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3JkZXJEZXRhaWxzU3RhdGUge1xuICBvcmRlcjogT3JkZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVnaW9uc1N0YXRlIHtcbiAgZW50aXRpZXM6IFJlZ2lvbltdO1xuICBjb3VudHJ5OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmlsbGluZ0NvdW50cnlFbnRpdGllcyB7XG4gIFtrZXk6IHN0cmluZ106IENvdW50cnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmlsbGluZ0NvdW50cmllc1N0YXRlIHtcbiAgZW50aXRpZXM6IEJpbGxpbmdDb3VudHJ5RW50aXRpZXM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVsaXZlcnlDb3VudHJ5RW50aXRpZXMge1xuICBba2V5OiBzdHJpbmddOiBDb3VudHJ5O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlbGl2ZXJ5Q291bnRyaWVzU3RhdGUge1xuICBlbnRpdGllczogRGVsaXZlcnlDb3VudHJ5RW50aXRpZXM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGl0bGVFbnRpdGllcyB7XG4gIFtrZXk6IHN0cmluZ106IFRpdGxlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRpdGxlc1N0YXRlIHtcbiAgZW50aXRpZXM6IFRpdGxlRW50aXRpZXM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckRldGFpbHNTdGF0ZSB7XG4gIGRldGFpbHM6IFVzZXI7XG59XG4iXX0=