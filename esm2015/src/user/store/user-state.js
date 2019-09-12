/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    /** @type {?} */
    UserState.prototype.consignmentTracking;
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
/**
 * @record
 */
export function ConsignmentTrackingState() { }
if (false) {
    /** @type {?|undefined} */
    ConsignmentTrackingState.prototype.tracking;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL3VzZXItc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFRQSxNQUFNLE9BQU8sWUFBWSxHQUFHLE1BQU07O0FBQ2xDLE1BQU0sT0FBTyx1QkFBdUIsR0FBRyxhQUFhOztBQUNwRCxNQUFNLE9BQU8sMEJBQTBCLEdBQUcsZ0JBQWdCOztBQUMxRCxNQUFNLE9BQU8sOEJBQThCLEdBQUcsbUJBQW1COztBQUNqRSxNQUFNLE9BQU8sd0JBQXdCLEdBQUcsY0FBYzs7QUFDdEQsTUFBTSxPQUFPLHNCQUFzQixHQUFHLFlBQVk7O0FBQ2xELE1BQU0sT0FBTyx1QkFBdUIsR0FBRyxhQUFhOztBQUNwRCxNQUFNLE9BQU8sMkJBQTJCLEdBQUcsaUJBQWlCOztBQUU1RCxNQUFNLE9BQU8sYUFBYSxHQUFHLHNCQUFzQjs7QUFDbkQsTUFBTSxPQUFPLG9CQUFvQixHQUFHLDZCQUE2Qjs7QUFDakUsTUFBTSxPQUFPLFdBQVcsR0FBRyxvQkFBb0I7O0FBQy9DLE1BQU0sT0FBTyxjQUFjLEdBQUcsdUJBQXVCOztBQUNyRCxNQUFNLE9BQU8sT0FBTyxHQUFHLGdCQUFnQjs7OztBQUV2QyxtQ0FFQzs7Ozs7Ozs7QUFFRCwrQkFhQzs7O0lBWkMsNEJBQTBCOztJQUMxQiw4QkFBa0M7O0lBQ2xDLDZCQUF5Qzs7SUFDekMscUNBQXdDOztJQUN4Qyw4QkFBa0M7O0lBQ2xDLDZCQUF3Qzs7SUFDeEMsMkJBQXNDOztJQUN0QywwQkFBeUI7O0lBQ3pCLDJCQUFvQjs7SUFDcEIsNEJBQW1DOztJQUNuQyxrQ0FBdUI7O0lBQ3ZCLHdDQUE4Qzs7Ozs7QUFHaEQsdUNBRUM7OztJQURDLGtDQUFhOzs7OztBQUdmLGtDQUdDOzs7SUFGQyxnQ0FBbUI7O0lBQ25CLCtCQUFnQjs7Ozs7QUFHbEIsNENBRUM7Ozs7QUFFRCwyQ0FFQzs7O0lBREMseUNBQWlDOzs7OztBQUduQyw2Q0FFQzs7OztBQUVELDRDQUVDOzs7SUFEQywwQ0FBa0M7Ozs7O0FBR3BDLG1DQUVDOzs7O0FBRUQsaUNBRUM7OztJQURDLCtCQUF3Qjs7Ozs7QUFHMUIsc0NBRUM7OztJQURDLG1DQUFjOzs7OztBQUdoQiw4Q0FFQzs7O0lBREMsNENBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWRkcmVzcywgQ291bnRyeSwgUmVnaW9uIH0gZnJvbSAnLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQgeyBQYXltZW50RGV0YWlscyB9IGZyb20gJy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgQ29uc2VudFRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vbW9kZWwvY29uc2VudC5tb2RlbCc7XG5pbXBvcnQgeyBDb25zaWdubWVudFRyYWNraW5nIH0gZnJvbSAnLi4vLi4vbW9kZWwvY29uc2lnbm1lbnQtdHJhY2tpbmcubW9kZWwnO1xuaW1wb3J0IHsgVGl0bGUsIFVzZXIgfSBmcm9tICcuLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IE9yZGVyLCBPcmRlckhpc3RvcnlMaXN0IH0gZnJvbSAnLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBVU0VSX0ZFQVRVUkUgPSAndXNlcic7XG5leHBvcnQgY29uc3QgVVBEQVRFX0VNQUlMX1BST0NFU1NfSUQgPSAndXBkYXRlRW1haWwnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9QQVNTV09SRF9QUk9DRVNTX0lEID0gJ3VwZGF0ZVBhc3N3b3JkJztcbmV4cG9ydCBjb25zdCBVUERBVEVfVVNFUl9ERVRBSUxTX1BST0NFU1NfSUQgPSAndXBkYXRlVXNlckRldGFpbHMnO1xuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX1VTRVJfUFJPQ0VTU19JRCA9ICdyZWdpc3RlclVzZXInO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9VU0VSX1BST0NFU1NfSUQgPSAncmVtb3ZlVXNlcic7XG5leHBvcnQgY29uc3QgR0lWRV9DT05TRU5UX1BST0NFU1NfSUQgPSAnZ2l2ZUNvbnNlbnQnO1xuZXhwb3J0IGNvbnN0IFdJVEhEUkFXX0NPTlNFTlRfUFJPQ0VTU19JRCA9ICd3aXRoZHJhd0NvbnNlbnQnO1xuXG5leHBvcnQgY29uc3QgVVNFUl9DT05TRU5UUyA9ICdbVXNlcl0gVXNlciBDb25zZW50cyc7XG5leHBvcnQgY29uc3QgVVNFUl9QQVlNRU5UX01FVEhPRFMgPSAnW1VzZXJdIFVzZXIgUGF5bWVudCBNZXRob2RzJztcbmV4cG9ydCBjb25zdCBVU0VSX09SREVSUyA9ICdbVXNlcl0gVXNlciBPcmRlcnMnO1xuZXhwb3J0IGNvbnN0IFVTRVJfQUREUkVTU0VTID0gJ1tVc2VyXSBVc2VyIEFkZHJlc3Nlcyc7XG5leHBvcnQgY29uc3QgUkVHSU9OUyA9ICdbVXNlcl0gUmVnaW9ucyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGVXaXRoVXNlciB7XG4gIFtVU0VSX0ZFQVRVUkVdOiBVc2VyU3RhdGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlclN0YXRlIHtcbiAgYWNjb3VudDogVXNlckRldGFpbHNTdGF0ZTtcbiAgYWRkcmVzc2VzOiBMb2FkZXJTdGF0ZTxBZGRyZXNzW10+O1xuICBjb25zZW50czogTG9hZGVyU3RhdGU8Q29uc2VudFRlbXBsYXRlW10+O1xuICBiaWxsaW5nQ291bnRyaWVzOiBCaWxsaW5nQ291bnRyaWVzU3RhdGU7XG4gIGNvdW50cmllczogRGVsaXZlcnlDb3VudHJpZXNTdGF0ZTtcbiAgcGF5bWVudHM6IExvYWRlclN0YXRlPFBheW1lbnREZXRhaWxzW10+O1xuICBvcmRlcnM6IExvYWRlclN0YXRlPE9yZGVySGlzdG9yeUxpc3Q+O1xuICBvcmRlcjogT3JkZXJEZXRhaWxzU3RhdGU7XG4gIHRpdGxlczogVGl0bGVzU3RhdGU7XG4gIHJlZ2lvbnM6IExvYWRlclN0YXRlPFJlZ2lvbnNTdGF0ZT47XG4gIHJlc2V0UGFzc3dvcmQ6IGJvb2xlYW47XG4gIGNvbnNpZ25tZW50VHJhY2tpbmc6IENvbnNpZ25tZW50VHJhY2tpbmdTdGF0ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPcmRlckRldGFpbHNTdGF0ZSB7XG4gIG9yZGVyOiBPcmRlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZWdpb25zU3RhdGUge1xuICBlbnRpdGllczogUmVnaW9uW107XG4gIGNvdW50cnk6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCaWxsaW5nQ291bnRyeUVudGl0aWVzIHtcbiAgW2tleTogc3RyaW5nXTogQ291bnRyeTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCaWxsaW5nQ291bnRyaWVzU3RhdGUge1xuICBlbnRpdGllczogQmlsbGluZ0NvdW50cnlFbnRpdGllcztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZWxpdmVyeUNvdW50cnlFbnRpdGllcyB7XG4gIFtrZXk6IHN0cmluZ106IENvdW50cnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVsaXZlcnlDb3VudHJpZXNTdGF0ZSB7XG4gIGVudGl0aWVzOiBEZWxpdmVyeUNvdW50cnlFbnRpdGllcztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaXRsZUVudGl0aWVzIHtcbiAgW2tleTogc3RyaW5nXTogVGl0bGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGl0bGVzU3RhdGUge1xuICBlbnRpdGllczogVGl0bGVFbnRpdGllcztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VyRGV0YWlsc1N0YXRlIHtcbiAgZGV0YWlsczogVXNlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25zaWdubWVudFRyYWNraW5nU3RhdGUge1xuICB0cmFja2luZz86IENvbnNpZ25tZW50VHJhY2tpbmc7XG59XG4iXX0=