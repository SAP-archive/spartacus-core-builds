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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL3VzZXItc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFPQSxNQUFNLE9BQU8sWUFBWSxHQUFHLE1BQU07O0FBQ2xDLE1BQU0sT0FBTyx1QkFBdUIsR0FBRyxhQUFhOztBQUNwRCxNQUFNLE9BQU8sMEJBQTBCLEdBQUcsZ0JBQWdCOztBQUMxRCxNQUFNLE9BQU8sOEJBQThCLEdBQUcsbUJBQW1COztBQUNqRSxNQUFNLE9BQU8sc0JBQXNCLEdBQUcsWUFBWTs7QUFDbEQsTUFBTSxPQUFPLHVCQUF1QixHQUFHLGFBQWE7O0FBQ3BELE1BQU0sT0FBTywyQkFBMkIsR0FBRyxpQkFBaUI7O0FBRTVELE1BQU0sT0FBTyxhQUFhLEdBQUcsc0JBQXNCOztBQUNuRCxNQUFNLE9BQU8sb0JBQW9CLEdBQUcsNkJBQTZCOztBQUNqRSxNQUFNLE9BQU8sV0FBVyxHQUFHLG9CQUFvQjs7QUFDL0MsTUFBTSxPQUFPLGNBQWMsR0FBRyx1QkFBdUI7O0FBQ3JELE1BQU0sT0FBTyxPQUFPLEdBQUcsZ0JBQWdCOzs7O0FBRXZDLG1DQUVDOzs7Ozs7OztBQUVELCtCQVlDOzs7SUFYQyw0QkFBMEI7O0lBQzFCLDhCQUFrQzs7SUFDbEMsNkJBQXlDOztJQUN6QyxxQ0FBd0M7O0lBQ3hDLDhCQUFrQzs7SUFDbEMsNkJBQXdDOztJQUN4QywyQkFBc0M7O0lBQ3RDLDBCQUF5Qjs7SUFDekIsMkJBQW9COztJQUNwQiw0QkFBbUM7O0lBQ25DLGtDQUF1Qjs7Ozs7QUFHekIsdUNBRUM7OztJQURDLGtDQUFhOzs7OztBQUdmLGtDQUdDOzs7SUFGQyxnQ0FBbUI7O0lBQ25CLCtCQUFnQjs7Ozs7QUFHbEIsNENBRUM7Ozs7QUFFRCwyQ0FFQzs7O0lBREMseUNBQWlDOzs7OztBQUduQyw2Q0FFQzs7OztBQUVELDRDQUVDOzs7SUFEQywwQ0FBa0M7Ozs7O0FBR3BDLG1DQUVDOzs7O0FBRUQsaUNBRUM7OztJQURDLCtCQUF3Qjs7Ozs7QUFHMUIsc0NBRUM7OztJQURDLG1DQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWRkcmVzcywgQ291bnRyeSwgUmVnaW9uIH0gZnJvbSAnLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQgeyBQYXltZW50RGV0YWlscyB9IGZyb20gJy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgVGl0bGUsIFVzZXIgfSBmcm9tICcuLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IE9yZGVyLCBPcmRlckhpc3RvcnlMaXN0IH0gZnJvbSAnLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZSc7XG5pbXBvcnQgeyBDb25zZW50VGVtcGxhdGUgfSBmcm9tICcuLi8uLi9tb2RlbC9jb25zZW50Lm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IFVTRVJfRkVBVFVSRSA9ICd1c2VyJztcbmV4cG9ydCBjb25zdCBVUERBVEVfRU1BSUxfUFJPQ0VTU19JRCA9ICd1cGRhdGVFbWFpbCc7XG5leHBvcnQgY29uc3QgVVBEQVRFX1BBU1NXT1JEX1BST0NFU1NfSUQgPSAndXBkYXRlUGFzc3dvcmQnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9VU0VSX0RFVEFJTFNfUFJPQ0VTU19JRCA9ICd1cGRhdGVVc2VyRGV0YWlscyc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1VTRVJfUFJPQ0VTU19JRCA9ICdyZW1vdmVVc2VyJztcbmV4cG9ydCBjb25zdCBHSVZFX0NPTlNFTlRfUFJPQ0VTU19JRCA9ICdnaXZlQ29uc2VudCc7XG5leHBvcnQgY29uc3QgV0lUSERSQVdfQ09OU0VOVF9QUk9DRVNTX0lEID0gJ3dpdGhkcmF3Q29uc2VudCc7XG5cbmV4cG9ydCBjb25zdCBVU0VSX0NPTlNFTlRTID0gJ1tVc2VyXSBVc2VyIENvbnNlbnRzJztcbmV4cG9ydCBjb25zdCBVU0VSX1BBWU1FTlRfTUVUSE9EUyA9ICdbVXNlcl0gVXNlciBQYXltZW50IE1ldGhvZHMnO1xuZXhwb3J0IGNvbnN0IFVTRVJfT1JERVJTID0gJ1tVc2VyXSBVc2VyIE9yZGVycyc7XG5leHBvcnQgY29uc3QgVVNFUl9BRERSRVNTRVMgPSAnW1VzZXJdIFVzZXIgQWRkcmVzc2VzJztcbmV4cG9ydCBjb25zdCBSRUdJT05TID0gJ1tVc2VyXSBSZWdpb25zJztcblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZVdpdGhVc2VyIHtcbiAgW1VTRVJfRkVBVFVSRV06IFVzZXJTdGF0ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VyU3RhdGUge1xuICBhY2NvdW50OiBVc2VyRGV0YWlsc1N0YXRlO1xuICBhZGRyZXNzZXM6IExvYWRlclN0YXRlPEFkZHJlc3NbXT47XG4gIGNvbnNlbnRzOiBMb2FkZXJTdGF0ZTxDb25zZW50VGVtcGxhdGVbXT47XG4gIGJpbGxpbmdDb3VudHJpZXM6IEJpbGxpbmdDb3VudHJpZXNTdGF0ZTtcbiAgY291bnRyaWVzOiBEZWxpdmVyeUNvdW50cmllc1N0YXRlO1xuICBwYXltZW50czogTG9hZGVyU3RhdGU8UGF5bWVudERldGFpbHNbXT47XG4gIG9yZGVyczogTG9hZGVyU3RhdGU8T3JkZXJIaXN0b3J5TGlzdD47XG4gIG9yZGVyOiBPcmRlckRldGFpbHNTdGF0ZTtcbiAgdGl0bGVzOiBUaXRsZXNTdGF0ZTtcbiAgcmVnaW9uczogTG9hZGVyU3RhdGU8UmVnaW9uc1N0YXRlPjtcbiAgcmVzZXRQYXNzd29yZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPcmRlckRldGFpbHNTdGF0ZSB7XG4gIG9yZGVyOiBPcmRlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZWdpb25zU3RhdGUge1xuICBlbnRpdGllczogUmVnaW9uW107XG4gIGNvdW50cnk6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCaWxsaW5nQ291bnRyeUVudGl0aWVzIHtcbiAgW2tleTogc3RyaW5nXTogQ291bnRyeTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCaWxsaW5nQ291bnRyaWVzU3RhdGUge1xuICBlbnRpdGllczogQmlsbGluZ0NvdW50cnlFbnRpdGllcztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZWxpdmVyeUNvdW50cnlFbnRpdGllcyB7XG4gIFtrZXk6IHN0cmluZ106IENvdW50cnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVsaXZlcnlDb3VudHJpZXNTdGF0ZSB7XG4gIGVudGl0aWVzOiBEZWxpdmVyeUNvdW50cnlFbnRpdGllcztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaXRsZUVudGl0aWVzIHtcbiAgW2tleTogc3RyaW5nXTogVGl0bGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGl0bGVzU3RhdGUge1xuICBlbnRpdGllczogVGl0bGVFbnRpdGllcztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VyRGV0YWlsc1N0YXRlIHtcbiAgZGV0YWlsczogVXNlcjtcbn1cbiJdfQ==