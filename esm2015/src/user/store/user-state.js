/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
export const REMOVE_USER_PROCESS_ID = 'removeUser';
/** @type {?} */
export const USER_PAYMENT_METHODS = '[User] User Payment Methods';
/** @type {?} */
export const USER_ORDERS = '[User] User Orders';
/** @type {?} */
export const USER_ADDRESSES = '[User] User Addresses';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL3VzZXItc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFZQSxNQUFNLE9BQU8sWUFBWSxHQUFHLE1BQU07O0FBQ2xDLE1BQU0sT0FBTyx1QkFBdUIsR0FBRyxhQUFhOztBQUNwRCxNQUFNLE9BQU8sMEJBQTBCLEdBQUcsZ0JBQWdCOztBQUMxRCxNQUFNLE9BQU8sOEJBQThCLEdBQUcsbUJBQW1COztBQUNqRSxNQUFNLE9BQU8sc0JBQXNCLEdBQUcsWUFBWTs7QUFFbEQsTUFBTSxPQUFPLG9CQUFvQixHQUFHLDZCQUE2Qjs7QUFDakUsTUFBTSxPQUFPLFdBQVcsR0FBRyxvQkFBb0I7O0FBQy9DLE1BQU0sT0FBTyxjQUFjLEdBQUcsdUJBQXVCOzs7O0FBRXJELG1DQUVDOzs7Ozs7OztBQUVELCtCQVdDOzs7SUFWQyw0QkFBMEI7O0lBQzFCLDhCQUFrQzs7SUFDbEMscUNBQXdDOztJQUN4Qyw4QkFBa0M7O0lBQ2xDLDZCQUF3Qzs7SUFDeEMsMkJBQXNDOztJQUN0QywwQkFBeUI7O0lBQ3pCLDJCQUFvQjs7SUFDcEIsNEJBQXNCOztJQUN0QixrQ0FBdUI7Ozs7O0FBR3pCLHVDQUVDOzs7SUFEQyxrQ0FBYTs7Ozs7QUFHZixrQ0FFQzs7O0lBREMsZ0NBQW1COzs7OztBQUdyQiw0Q0FFQzs7OztBQUVELDJDQUVDOzs7SUFEQyx5Q0FBaUM7Ozs7O0FBR25DLDZDQUVDOzs7O0FBRUQsNENBRUM7OztJQURDLDBDQUFrQzs7Ozs7QUFHcEMsbUNBRUM7Ozs7QUFFRCxpQ0FFQzs7O0lBREMsK0JBQXdCOzs7OztBQUcxQixzQ0FFQzs7O0lBREMsbUNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZGRyZXNzLFxuICBDb3VudHJ5LFxuICBPcmRlcixcbiAgT3JkZXJIaXN0b3J5TGlzdCxcbiAgUGF5bWVudERldGFpbHMsXG4gIFJlZ2lvbixcbiAgVGl0bGUsXG4gIFVzZXIsXG59IGZyb20gJy4uLy4uL29jYy9vY2MtbW9kZWxzL2luZGV4JztcbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgVVNFUl9GRUFUVVJFID0gJ3VzZXInO1xuZXhwb3J0IGNvbnN0IFVQREFURV9FTUFJTF9QUk9DRVNTX0lEID0gJ3VwZGF0ZUVtYWlsJztcbmV4cG9ydCBjb25zdCBVUERBVEVfUEFTU1dPUkRfUFJPQ0VTU19JRCA9ICd1cGRhdGVQYXNzd29yZCc7XG5leHBvcnQgY29uc3QgVVBEQVRFX1VTRVJfREVUQUlMU19QUk9DRVNTX0lEID0gJ3VwZGF0ZVVzZXJEZXRhaWxzJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfVVNFUl9QUk9DRVNTX0lEID0gJ3JlbW92ZVVzZXInO1xuXG5leHBvcnQgY29uc3QgVVNFUl9QQVlNRU5UX01FVEhPRFMgPSAnW1VzZXJdIFVzZXIgUGF5bWVudCBNZXRob2RzJztcbmV4cG9ydCBjb25zdCBVU0VSX09SREVSUyA9ICdbVXNlcl0gVXNlciBPcmRlcnMnO1xuZXhwb3J0IGNvbnN0IFVTRVJfQUREUkVTU0VTID0gJ1tVc2VyXSBVc2VyIEFkZHJlc3Nlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGVXaXRoVXNlciB7XG4gIFtVU0VSX0ZFQVRVUkVdOiBVc2VyU3RhdGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlclN0YXRlIHtcbiAgYWNjb3VudDogVXNlckRldGFpbHNTdGF0ZTtcbiAgYWRkcmVzc2VzOiBMb2FkZXJTdGF0ZTxBZGRyZXNzW10+O1xuICBiaWxsaW5nQ291bnRyaWVzOiBCaWxsaW5nQ291bnRyaWVzU3RhdGU7XG4gIGNvdW50cmllczogRGVsaXZlcnlDb3VudHJpZXNTdGF0ZTtcbiAgcGF5bWVudHM6IExvYWRlclN0YXRlPFBheW1lbnREZXRhaWxzW10+O1xuICBvcmRlcnM6IExvYWRlclN0YXRlPE9yZGVySGlzdG9yeUxpc3Q+O1xuICBvcmRlcjogT3JkZXJEZXRhaWxzU3RhdGU7XG4gIHRpdGxlczogVGl0bGVzU3RhdGU7XG4gIHJlZ2lvbnM6IFJlZ2lvbnNTdGF0ZTtcbiAgcmVzZXRQYXNzd29yZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPcmRlckRldGFpbHNTdGF0ZSB7XG4gIG9yZGVyOiBPcmRlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZWdpb25zU3RhdGUge1xuICBlbnRpdGllczogUmVnaW9uW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmlsbGluZ0NvdW50cnlFbnRpdGllcyB7XG4gIFtrZXk6IHN0cmluZ106IENvdW50cnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmlsbGluZ0NvdW50cmllc1N0YXRlIHtcbiAgZW50aXRpZXM6IEJpbGxpbmdDb3VudHJ5RW50aXRpZXM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVsaXZlcnlDb3VudHJ5RW50aXRpZXMge1xuICBba2V5OiBzdHJpbmddOiBDb3VudHJ5O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlbGl2ZXJ5Q291bnRyaWVzU3RhdGUge1xuICBlbnRpdGllczogRGVsaXZlcnlDb3VudHJ5RW50aXRpZXM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGl0bGVFbnRpdGllcyB7XG4gIFtrZXk6IHN0cmluZ106IFRpdGxlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRpdGxlc1N0YXRlIHtcbiAgZW50aXRpZXM6IFRpdGxlRW50aXRpZXM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckRldGFpbHNTdGF0ZSB7XG4gIGRldGFpbHM6IFVzZXI7XG59XG4iXX0=