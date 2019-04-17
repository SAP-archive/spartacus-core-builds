/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const USER_FEATURE = 'user';
/** @type {?} */
export const UPDATE_PASSWORD_PROCESS_ID = 'updatePassword';
/** @type {?} */
export const UPDATE_USER_DETAILS_PROCESS_ID = 'updateUserDetails';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL3VzZXItc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFZQSxNQUFNLE9BQU8sWUFBWSxHQUFHLE1BQU07O0FBQ2xDLE1BQU0sT0FBTywwQkFBMEIsR0FBRyxnQkFBZ0I7O0FBQzFELE1BQU0sT0FBTyw4QkFBOEIsR0FBRyxtQkFBbUI7O0FBRWpFLE1BQU0sT0FBTyxvQkFBb0IsR0FBRyw2QkFBNkI7O0FBQ2pFLE1BQU0sT0FBTyxXQUFXLEdBQUcsb0JBQW9COztBQUMvQyxNQUFNLE9BQU8sY0FBYyxHQUFHLHVCQUF1Qjs7OztBQUVyRCxtQ0FFQzs7Ozs7Ozs7QUFFRCwrQkFXQzs7O0lBVkMsNEJBQTBCOztJQUMxQiw4QkFBa0M7O0lBQ2xDLHFDQUF3Qzs7SUFDeEMsOEJBQWtDOztJQUNsQyw2QkFBd0M7O0lBQ3hDLDJCQUFzQzs7SUFDdEMsMEJBQXlCOztJQUN6QiwyQkFBb0I7O0lBQ3BCLDRCQUFzQjs7SUFDdEIsa0NBQXVCOzs7OztBQUd6Qix1Q0FFQzs7O0lBREMsa0NBQWE7Ozs7O0FBR2Ysa0NBRUM7OztJQURDLGdDQUFtQjs7Ozs7QUFHckIsNENBRUM7Ozs7QUFFRCwyQ0FFQzs7O0lBREMseUNBQWlDOzs7OztBQUduQyw2Q0FFQzs7OztBQUVELDRDQUVDOzs7SUFEQywwQ0FBa0M7Ozs7O0FBR3BDLG1DQUVDOzs7O0FBRUQsaUNBRUM7OztJQURDLCtCQUF3Qjs7Ozs7QUFHMUIsc0NBRUM7OztJQURDLG1DQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWRkcmVzcyxcbiAgQ291bnRyeSxcbiAgT3JkZXIsXG4gIE9yZGVySGlzdG9yeUxpc3QsXG4gIFBheW1lbnREZXRhaWxzLFxuICBSZWdpb24sXG4gIFRpdGxlLFxuICBVc2VyLFxufSBmcm9tICcuLi8uLi9vY2Mvb2NjLW1vZGVscy9pbmRleCc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlJztcblxuZXhwb3J0IGNvbnN0IFVTRVJfRkVBVFVSRSA9ICd1c2VyJztcbmV4cG9ydCBjb25zdCBVUERBVEVfUEFTU1dPUkRfUFJPQ0VTU19JRCA9ICd1cGRhdGVQYXNzd29yZCc7XG5leHBvcnQgY29uc3QgVVBEQVRFX1VTRVJfREVUQUlMU19QUk9DRVNTX0lEID0gJ3VwZGF0ZVVzZXJEZXRhaWxzJztcblxuZXhwb3J0IGNvbnN0IFVTRVJfUEFZTUVOVF9NRVRIT0RTID0gJ1tVc2VyXSBVc2VyIFBheW1lbnQgTWV0aG9kcyc7XG5leHBvcnQgY29uc3QgVVNFUl9PUkRFUlMgPSAnW1VzZXJdIFVzZXIgT3JkZXJzJztcbmV4cG9ydCBjb25zdCBVU0VSX0FERFJFU1NFUyA9ICdbVXNlcl0gVXNlciBBZGRyZXNzZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlV2l0aFVzZXIge1xuICBbVVNFUl9GRUFUVVJFXTogVXNlclN0YXRlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJTdGF0ZSB7XG4gIGFjY291bnQ6IFVzZXJEZXRhaWxzU3RhdGU7XG4gIGFkZHJlc3NlczogTG9hZGVyU3RhdGU8QWRkcmVzc1tdPjtcbiAgYmlsbGluZ0NvdW50cmllczogQmlsbGluZ0NvdW50cmllc1N0YXRlO1xuICBjb3VudHJpZXM6IERlbGl2ZXJ5Q291bnRyaWVzU3RhdGU7XG4gIHBheW1lbnRzOiBMb2FkZXJTdGF0ZTxQYXltZW50RGV0YWlsc1tdPjtcbiAgb3JkZXJzOiBMb2FkZXJTdGF0ZTxPcmRlckhpc3RvcnlMaXN0PjtcbiAgb3JkZXI6IE9yZGVyRGV0YWlsc1N0YXRlO1xuICB0aXRsZXM6IFRpdGxlc1N0YXRlO1xuICByZWdpb25zOiBSZWdpb25zU3RhdGU7XG4gIHJlc2V0UGFzc3dvcmQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3JkZXJEZXRhaWxzU3RhdGUge1xuICBvcmRlcjogT3JkZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVnaW9uc1N0YXRlIHtcbiAgZW50aXRpZXM6IFJlZ2lvbltdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJpbGxpbmdDb3VudHJ5RW50aXRpZXMge1xuICBba2V5OiBzdHJpbmddOiBDb3VudHJ5O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJpbGxpbmdDb3VudHJpZXNTdGF0ZSB7XG4gIGVudGl0aWVzOiBCaWxsaW5nQ291bnRyeUVudGl0aWVzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlbGl2ZXJ5Q291bnRyeUVudGl0aWVzIHtcbiAgW2tleTogc3RyaW5nXTogQ291bnRyeTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZWxpdmVyeUNvdW50cmllc1N0YXRlIHtcbiAgZW50aXRpZXM6IERlbGl2ZXJ5Q291bnRyeUVudGl0aWVzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRpdGxlRW50aXRpZXMge1xuICBba2V5OiBzdHJpbmddOiBUaXRsZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaXRsZXNTdGF0ZSB7XG4gIGVudGl0aWVzOiBUaXRsZUVudGl0aWVzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJEZXRhaWxzU3RhdGUge1xuICBkZXRhaWxzOiBVc2VyO1xufVxuIl19