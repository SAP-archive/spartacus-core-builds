/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
export var REGISTER_USER_PROCESS_ID = 'registerUser';
/** @type {?} */
export var REMOVE_USER_PROCESS_ID = 'removeUser';
/** @type {?} */
export var GIVE_CONSENT_PROCESS_ID = 'giveConsent';
/** @type {?} */
export var WITHDRAW_CONSENT_PROCESS_ID = 'withdrawConsent';
/** @type {?} */
export var UPDATE_NOTIFICATION_PREFERENCES_PROCESS_ID = 'updateNotificationPreferences';
/** @type {?} */
export var ADD_PRODUCT_INTEREST_PROCESS_ID = 'addProductInterests';
/** @type {?} */
export var REMOVE_PRODUCT_INTERESTS_PROCESS_ID = 'removeProductInterests';
/** @type {?} */
export var CANCEL_ORDER_PROCESS_ID = 'cancelOrder';
/** @type {?} */
export var CANCEL_RETURN_PROCESS_ID = 'cancelReturn';
/** @type {?} */
export var USER_CONSENTS = '[User] User Consents';
/** @type {?} */
export var USER_PAYMENT_METHODS = '[User] User Payment Methods';
/** @type {?} */
export var USER_ORDERS = '[User] User Orders';
/** @type {?} */
export var USER_ADDRESSES = '[User] User Addresses';
/** @type {?} */
export var USER_RETURN_REQUESTS = '[User] Order Return Requests';
/** @type {?} */
export var USER_RETURN_REQUEST_DETAILS = '[User] Return Request Details';
/** @type {?} */
export var USER_ORDER_DETAILS = '[User] User Order Details';
/** @type {?} */
export var REGIONS = '[User] Regions';
/** @type {?} */
export var NOTIFICATION_PREFERENCES = '[User] Notification Preferences';
/** @type {?} */
export var PRODUCT_INTERESTS = '[User] Product Interests';
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
    UserState.prototype.orderReturn;
    /** @type {?} */
    UserState.prototype.orderReturnList;
    /** @type {?} */
    UserState.prototype.titles;
    /** @type {?} */
    UserState.prototype.regions;
    /** @type {?} */
    UserState.prototype.resetPassword;
    /** @type {?} */
    UserState.prototype.consignmentTracking;
    /** @type {?} */
    UserState.prototype.notificationPreferences;
    /** @type {?} */
    UserState.prototype.productInterests;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL3VzZXItc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFlQSxNQUFNLEtBQU8sWUFBWSxHQUFHLE1BQU07O0FBQ2xDLE1BQU0sS0FBTyx1QkFBdUIsR0FBRyxhQUFhOztBQUNwRCxNQUFNLEtBQU8sMEJBQTBCLEdBQUcsZ0JBQWdCOztBQUMxRCxNQUFNLEtBQU8sOEJBQThCLEdBQUcsbUJBQW1COztBQUNqRSxNQUFNLEtBQU8sd0JBQXdCLEdBQUcsY0FBYzs7QUFDdEQsTUFBTSxLQUFPLHNCQUFzQixHQUFHLFlBQVk7O0FBQ2xELE1BQU0sS0FBTyx1QkFBdUIsR0FBRyxhQUFhOztBQUNwRCxNQUFNLEtBQU8sMkJBQTJCLEdBQUcsaUJBQWlCOztBQUM1RCxNQUFNLEtBQU8sMENBQTBDLEdBQ3JELCtCQUErQjs7QUFDakMsTUFBTSxLQUFPLCtCQUErQixHQUFHLHFCQUFxQjs7QUFDcEUsTUFBTSxLQUFPLG1DQUFtQyxHQUFHLHdCQUF3Qjs7QUFDM0UsTUFBTSxLQUFPLHVCQUF1QixHQUFHLGFBQWE7O0FBQ3BELE1BQU0sS0FBTyx3QkFBd0IsR0FBRyxjQUFjOztBQUV0RCxNQUFNLEtBQU8sYUFBYSxHQUFHLHNCQUFzQjs7QUFDbkQsTUFBTSxLQUFPLG9CQUFvQixHQUFHLDZCQUE2Qjs7QUFDakUsTUFBTSxLQUFPLFdBQVcsR0FBRyxvQkFBb0I7O0FBQy9DLE1BQU0sS0FBTyxjQUFjLEdBQUcsdUJBQXVCOztBQUNyRCxNQUFNLEtBQU8sb0JBQW9CLEdBQUcsOEJBQThCOztBQUNsRSxNQUFNLEtBQU8sMkJBQTJCLEdBQUcsK0JBQStCOztBQUMxRSxNQUFNLEtBQU8sa0JBQWtCLEdBQUcsMkJBQTJCOztBQUM3RCxNQUFNLEtBQU8sT0FBTyxHQUFHLGdCQUFnQjs7QUFFdkMsTUFBTSxLQUFPLHdCQUF3QixHQUFHLGlDQUFpQzs7QUFDekUsTUFBTSxLQUFPLGlCQUFpQixHQUFHLDBCQUEwQjs7OztBQUUzRCxtQ0FFQzs7Ozs7Ozs7QUFFRCwrQkFpQkM7OztJQWhCQyw0QkFBMEI7O0lBQzFCLDhCQUFrQzs7SUFDbEMsNkJBQXlDOztJQUN6QyxxQ0FBd0M7O0lBQ3hDLDhCQUFrQzs7SUFDbEMsNkJBQXdDOztJQUN4QywyQkFBc0M7O0lBQ3RDLDBCQUEwQjs7SUFDMUIsZ0NBQXdDOztJQUN4QyxvQ0FBZ0Q7O0lBQ2hELDJCQUFvQjs7SUFDcEIsNEJBQW1DOztJQUNuQyxrQ0FBdUI7O0lBQ3ZCLHdDQUE4Qzs7SUFDOUMsNENBQStEOztJQUMvRCxxQ0FBMkQ7Ozs7O0FBRzdELGtDQUdDOzs7SUFGQyxnQ0FBbUI7O0lBQ25CLCtCQUFnQjs7Ozs7QUFHbEIsNENBRUM7Ozs7QUFFRCwyQ0FFQzs7O0lBREMseUNBQWlDOzs7OztBQUduQyw2Q0FFQzs7OztBQUVELDRDQUVDOzs7SUFEQywwQ0FBa0M7Ozs7O0FBR3BDLG1DQUVDOzs7O0FBRUQsaUNBRUM7OztJQURDLCtCQUF3Qjs7Ozs7QUFHMUIsc0NBRUM7OztJQURDLG1DQUFjOzs7OztBQUdoQiw4Q0FFQzs7O0lBREMsNENBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWRkcmVzcywgQ291bnRyeSwgUmVnaW9uIH0gZnJvbSAnLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQgeyBQYXltZW50RGV0YWlscyB9IGZyb20gJy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgQ29uc2VudFRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vbW9kZWwvY29uc2VudC5tb2RlbCc7XG5pbXBvcnQgeyBDb25zaWdubWVudFRyYWNraW5nIH0gZnJvbSAnLi4vLi4vbW9kZWwvY29uc2lnbm1lbnQtdHJhY2tpbmcubW9kZWwnO1xuaW1wb3J0IHsgVGl0bGUsIFVzZXIgfSBmcm9tICcuLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7XG4gIE9yZGVyLFxuICBPcmRlckhpc3RvcnlMaXN0LFxuICBSZXR1cm5SZXF1ZXN0LFxuICBSZXR1cm5SZXF1ZXN0TGlzdCxcbn0gZnJvbSAnLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25QcmVmZXJlbmNlIH0gZnJvbSAnLi4vLi4vbW9kZWwnO1xuaW1wb3J0IHsgUHJvZHVjdEludGVyZXN0U2VhcmNoUmVzdWx0IH0gZnJvbSAnLi4vLi4vbW9kZWwvcHJvZHVjdC1pbnRlcmVzdC5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBVU0VSX0ZFQVRVUkUgPSAndXNlcic7XG5leHBvcnQgY29uc3QgVVBEQVRFX0VNQUlMX1BST0NFU1NfSUQgPSAndXBkYXRlRW1haWwnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9QQVNTV09SRF9QUk9DRVNTX0lEID0gJ3VwZGF0ZVBhc3N3b3JkJztcbmV4cG9ydCBjb25zdCBVUERBVEVfVVNFUl9ERVRBSUxTX1BST0NFU1NfSUQgPSAndXBkYXRlVXNlckRldGFpbHMnO1xuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX1VTRVJfUFJPQ0VTU19JRCA9ICdyZWdpc3RlclVzZXInO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9VU0VSX1BST0NFU1NfSUQgPSAncmVtb3ZlVXNlcic7XG5leHBvcnQgY29uc3QgR0lWRV9DT05TRU5UX1BST0NFU1NfSUQgPSAnZ2l2ZUNvbnNlbnQnO1xuZXhwb3J0IGNvbnN0IFdJVEhEUkFXX0NPTlNFTlRfUFJPQ0VTU19JRCA9ICd3aXRoZHJhd0NvbnNlbnQnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9OT1RJRklDQVRJT05fUFJFRkVSRU5DRVNfUFJPQ0VTU19JRCA9XG4gICd1cGRhdGVOb3RpZmljYXRpb25QcmVmZXJlbmNlcyc7XG5leHBvcnQgY29uc3QgQUREX1BST0RVQ1RfSU5URVJFU1RfUFJPQ0VTU19JRCA9ICdhZGRQcm9kdWN0SW50ZXJlc3RzJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfUFJPRFVDVF9JTlRFUkVTVFNfUFJPQ0VTU19JRCA9ICdyZW1vdmVQcm9kdWN0SW50ZXJlc3RzJztcbmV4cG9ydCBjb25zdCBDQU5DRUxfT1JERVJfUFJPQ0VTU19JRCA9ICdjYW5jZWxPcmRlcic7XG5leHBvcnQgY29uc3QgQ0FOQ0VMX1JFVFVSTl9QUk9DRVNTX0lEID0gJ2NhbmNlbFJldHVybic7XG5cbmV4cG9ydCBjb25zdCBVU0VSX0NPTlNFTlRTID0gJ1tVc2VyXSBVc2VyIENvbnNlbnRzJztcbmV4cG9ydCBjb25zdCBVU0VSX1BBWU1FTlRfTUVUSE9EUyA9ICdbVXNlcl0gVXNlciBQYXltZW50IE1ldGhvZHMnO1xuZXhwb3J0IGNvbnN0IFVTRVJfT1JERVJTID0gJ1tVc2VyXSBVc2VyIE9yZGVycyc7XG5leHBvcnQgY29uc3QgVVNFUl9BRERSRVNTRVMgPSAnW1VzZXJdIFVzZXIgQWRkcmVzc2VzJztcbmV4cG9ydCBjb25zdCBVU0VSX1JFVFVSTl9SRVFVRVNUUyA9ICdbVXNlcl0gT3JkZXIgUmV0dXJuIFJlcXVlc3RzJztcbmV4cG9ydCBjb25zdCBVU0VSX1JFVFVSTl9SRVFVRVNUX0RFVEFJTFMgPSAnW1VzZXJdIFJldHVybiBSZXF1ZXN0IERldGFpbHMnO1xuZXhwb3J0IGNvbnN0IFVTRVJfT1JERVJfREVUQUlMUyA9ICdbVXNlcl0gVXNlciBPcmRlciBEZXRhaWxzJztcbmV4cG9ydCBjb25zdCBSRUdJT05TID0gJ1tVc2VyXSBSZWdpb25zJztcblxuZXhwb3J0IGNvbnN0IE5PVElGSUNBVElPTl9QUkVGRVJFTkNFUyA9ICdbVXNlcl0gTm90aWZpY2F0aW9uIFByZWZlcmVuY2VzJztcbmV4cG9ydCBjb25zdCBQUk9EVUNUX0lOVEVSRVNUUyA9ICdbVXNlcl0gUHJvZHVjdCBJbnRlcmVzdHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlV2l0aFVzZXIge1xuICBbVVNFUl9GRUFUVVJFXTogVXNlclN0YXRlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJTdGF0ZSB7XG4gIGFjY291bnQ6IFVzZXJEZXRhaWxzU3RhdGU7XG4gIGFkZHJlc3NlczogTG9hZGVyU3RhdGU8QWRkcmVzc1tdPjtcbiAgY29uc2VudHM6IExvYWRlclN0YXRlPENvbnNlbnRUZW1wbGF0ZVtdPjtcbiAgYmlsbGluZ0NvdW50cmllczogQmlsbGluZ0NvdW50cmllc1N0YXRlO1xuICBjb3VudHJpZXM6IERlbGl2ZXJ5Q291bnRyaWVzU3RhdGU7XG4gIHBheW1lbnRzOiBMb2FkZXJTdGF0ZTxQYXltZW50RGV0YWlsc1tdPjtcbiAgb3JkZXJzOiBMb2FkZXJTdGF0ZTxPcmRlckhpc3RvcnlMaXN0PjtcbiAgb3JkZXI6IExvYWRlclN0YXRlPE9yZGVyPjtcbiAgb3JkZXJSZXR1cm46IExvYWRlclN0YXRlPFJldHVyblJlcXVlc3Q+O1xuICBvcmRlclJldHVybkxpc3Q6IExvYWRlclN0YXRlPFJldHVyblJlcXVlc3RMaXN0PjtcbiAgdGl0bGVzOiBUaXRsZXNTdGF0ZTtcbiAgcmVnaW9uczogTG9hZGVyU3RhdGU8UmVnaW9uc1N0YXRlPjtcbiAgcmVzZXRQYXNzd29yZDogYm9vbGVhbjtcbiAgY29uc2lnbm1lbnRUcmFja2luZzogQ29uc2lnbm1lbnRUcmFja2luZ1N0YXRlO1xuICBub3RpZmljYXRpb25QcmVmZXJlbmNlczogTG9hZGVyU3RhdGU8Tm90aWZpY2F0aW9uUHJlZmVyZW5jZVtdPjtcbiAgcHJvZHVjdEludGVyZXN0czogTG9hZGVyU3RhdGU8UHJvZHVjdEludGVyZXN0U2VhcmNoUmVzdWx0Pjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZWdpb25zU3RhdGUge1xuICBlbnRpdGllczogUmVnaW9uW107XG4gIGNvdW50cnk6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCaWxsaW5nQ291bnRyeUVudGl0aWVzIHtcbiAgW2tleTogc3RyaW5nXTogQ291bnRyeTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCaWxsaW5nQ291bnRyaWVzU3RhdGUge1xuICBlbnRpdGllczogQmlsbGluZ0NvdW50cnlFbnRpdGllcztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZWxpdmVyeUNvdW50cnlFbnRpdGllcyB7XG4gIFtrZXk6IHN0cmluZ106IENvdW50cnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVsaXZlcnlDb3VudHJpZXNTdGF0ZSB7XG4gIGVudGl0aWVzOiBEZWxpdmVyeUNvdW50cnlFbnRpdGllcztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaXRsZUVudGl0aWVzIHtcbiAgW2tleTogc3RyaW5nXTogVGl0bGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGl0bGVzU3RhdGUge1xuICBlbnRpdGllczogVGl0bGVFbnRpdGllcztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VyRGV0YWlsc1N0YXRlIHtcbiAgZGV0YWlsczogVXNlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25zaWdubWVudFRyYWNraW5nU3RhdGUge1xuICB0cmFja2luZz86IENvbnNpZ25tZW50VHJhY2tpbmc7XG59XG4iXX0=