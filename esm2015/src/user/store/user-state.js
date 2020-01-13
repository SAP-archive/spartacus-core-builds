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
export const UPDATE_NOTIFICATION_PREFERENCES_PROCESS_ID = 'updateNotificationPreferences';
/** @type {?} */
export const ADD_PRODUCT_INTEREST_PROCESS_ID = 'addProductInterests';
/** @type {?} */
export const REMOVE_PRODUCT_INTERESTS_PROCESS_ID = 'removeProductInterests';
/** @type {?} */
export const CANCEL_ORDER_PROCESS_ID = 'cancelOrder';
/** @type {?} */
export const CANCEL_RETURN_PROCESS_ID = 'cancelReturn';
/** @type {?} */
export const USER_CONSENTS = '[User] User Consents';
/** @type {?} */
export const USER_PAYMENT_METHODS = '[User] User Payment Methods';
/** @type {?} */
export const USER_ORDERS = '[User] User Orders';
/** @type {?} */
export const USER_ADDRESSES = '[User] User Addresses';
/** @type {?} */
export const USER_RETURN_REQUESTS = '[User] Order Return Requests';
/** @type {?} */
export const USER_RETURN_REQUEST_DETAILS = '[User] Return Request Details';
/** @type {?} */
export const USER_ORDER_DETAILS = '[User] User Order Details';
/** @type {?} */
export const REGIONS = '[User] Regions';
/** @type {?} */
export const CUSTOMER_COUPONS = '[User] Customer Coupons';
/** @type {?} */
export const SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID = 'subscribeCustomerCoupon';
/** @type {?} */
export const UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID = 'unsubscribeCustomerCoupon';
/** @type {?} */
export const CLAIM_CUSTOMER_COUPON_PROCESS_ID = 'claimCustomerCoupon';
/** @type {?} */
export const NOTIFICATION_PREFERENCES = '[User] Notification Preferences';
/** @type {?} */
export const PRODUCT_INTERESTS = '[User] Product Interests';
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
    UserState.prototype.customerCoupons;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL3VzZXItc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFnQkEsTUFBTSxPQUFPLFlBQVksR0FBRyxNQUFNOztBQUNsQyxNQUFNLE9BQU8sdUJBQXVCLEdBQUcsYUFBYTs7QUFDcEQsTUFBTSxPQUFPLDBCQUEwQixHQUFHLGdCQUFnQjs7QUFDMUQsTUFBTSxPQUFPLDhCQUE4QixHQUFHLG1CQUFtQjs7QUFDakUsTUFBTSxPQUFPLHdCQUF3QixHQUFHLGNBQWM7O0FBQ3RELE1BQU0sT0FBTyxzQkFBc0IsR0FBRyxZQUFZOztBQUNsRCxNQUFNLE9BQU8sdUJBQXVCLEdBQUcsYUFBYTs7QUFDcEQsTUFBTSxPQUFPLDJCQUEyQixHQUFHLGlCQUFpQjs7QUFDNUQsTUFBTSxPQUFPLDBDQUEwQyxHQUNyRCwrQkFBK0I7O0FBQ2pDLE1BQU0sT0FBTywrQkFBK0IsR0FBRyxxQkFBcUI7O0FBQ3BFLE1BQU0sT0FBTyxtQ0FBbUMsR0FBRyx3QkFBd0I7O0FBQzNFLE1BQU0sT0FBTyx1QkFBdUIsR0FBRyxhQUFhOztBQUNwRCxNQUFNLE9BQU8sd0JBQXdCLEdBQUcsY0FBYzs7QUFFdEQsTUFBTSxPQUFPLGFBQWEsR0FBRyxzQkFBc0I7O0FBQ25ELE1BQU0sT0FBTyxvQkFBb0IsR0FBRyw2QkFBNkI7O0FBQ2pFLE1BQU0sT0FBTyxXQUFXLEdBQUcsb0JBQW9COztBQUMvQyxNQUFNLE9BQU8sY0FBYyxHQUFHLHVCQUF1Qjs7QUFDckQsTUFBTSxPQUFPLG9CQUFvQixHQUFHLDhCQUE4Qjs7QUFDbEUsTUFBTSxPQUFPLDJCQUEyQixHQUFHLCtCQUErQjs7QUFDMUUsTUFBTSxPQUFPLGtCQUFrQixHQUFHLDJCQUEyQjs7QUFDN0QsTUFBTSxPQUFPLE9BQU8sR0FBRyxnQkFBZ0I7O0FBRXZDLE1BQU0sT0FBTyxnQkFBZ0IsR0FBRyx5QkFBeUI7O0FBQ3pELE1BQU0sT0FBTyxvQ0FBb0MsR0FBRyx5QkFBeUI7O0FBQzdFLE1BQU0sT0FBTyxzQ0FBc0MsR0FDakQsMkJBQTJCOztBQUM3QixNQUFNLE9BQU8sZ0NBQWdDLEdBQUcscUJBQXFCOztBQUNyRSxNQUFNLE9BQU8sd0JBQXdCLEdBQUcsaUNBQWlDOztBQUN6RSxNQUFNLE9BQU8saUJBQWlCLEdBQUcsMEJBQTBCOzs7O0FBRTNELG1DQUVDOzs7Ozs7OztBQUVELCtCQWtCQzs7O0lBakJDLDRCQUEwQjs7SUFDMUIsOEJBQWtDOztJQUNsQyw2QkFBeUM7O0lBQ3pDLHFDQUF3Qzs7SUFDeEMsOEJBQWtDOztJQUNsQyw2QkFBd0M7O0lBQ3hDLDJCQUFzQzs7SUFDdEMsMEJBQTBCOztJQUMxQixnQ0FBd0M7O0lBQ3hDLG9DQUFnRDs7SUFDaEQsMkJBQW9COztJQUNwQiw0QkFBbUM7O0lBQ25DLGtDQUF1Qjs7SUFDdkIsd0NBQThDOztJQUM5QyxvQ0FBeUQ7O0lBQ3pELDRDQUErRDs7SUFDL0QscUNBQTJEOzs7OztBQUc3RCxrQ0FHQzs7O0lBRkMsZ0NBQW1COztJQUNuQiwrQkFBZ0I7Ozs7O0FBR2xCLDRDQUVDOzs7O0FBRUQsMkNBRUM7OztJQURDLHlDQUFpQzs7Ozs7QUFHbkMsNkNBRUM7Ozs7QUFFRCw0Q0FFQzs7O0lBREMsMENBQWtDOzs7OztBQUdwQyxtQ0FFQzs7OztBQUVELGlDQUVDOzs7SUFEQywrQkFBd0I7Ozs7O0FBRzFCLHNDQUVDOzs7SUFEQyxtQ0FBYzs7Ozs7QUFHaEIsOENBRUM7OztJQURDLDRDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFkZHJlc3MsIENvdW50cnksIFJlZ2lvbiB9IGZyb20gJy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuaW1wb3J0IHsgUGF5bWVudERldGFpbHMgfSBmcm9tICcuLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IENvbnNlbnRUZW1wbGF0ZSB9IGZyb20gJy4uLy4uL21vZGVsL2NvbnNlbnQubW9kZWwnO1xuaW1wb3J0IHsgQ29uc2lnbm1lbnRUcmFja2luZyB9IGZyb20gJy4uLy4uL21vZGVsL2NvbnNpZ25tZW50LXRyYWNraW5nLm1vZGVsJztcbmltcG9ydCB7IFRpdGxlLCBVc2VyIH0gZnJvbSAnLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQge1xuICBPcmRlcixcbiAgT3JkZXJIaXN0b3J5TGlzdCxcbiAgUmV0dXJuUmVxdWVzdCxcbiAgUmV0dXJuUmVxdWVzdExpc3QsXG59IGZyb20gJy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUnO1xuaW1wb3J0IHsgQ3VzdG9tZXJDb3Vwb25TZWFyY2hSZXN1bHQgfSBmcm9tICcuLi8uLi9tb2RlbC9jdXN0b21lci1jb3Vwb24ubW9kZWwnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uUHJlZmVyZW5jZSB9IGZyb20gJy4uLy4uL21vZGVsJztcbmltcG9ydCB7IFByb2R1Y3RJbnRlcmVzdFNlYXJjaFJlc3VsdCB9IGZyb20gJy4uLy4uL21vZGVsL3Byb2R1Y3QtaW50ZXJlc3QubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgVVNFUl9GRUFUVVJFID0gJ3VzZXInO1xuZXhwb3J0IGNvbnN0IFVQREFURV9FTUFJTF9QUk9DRVNTX0lEID0gJ3VwZGF0ZUVtYWlsJztcbmV4cG9ydCBjb25zdCBVUERBVEVfUEFTU1dPUkRfUFJPQ0VTU19JRCA9ICd1cGRhdGVQYXNzd29yZCc7XG5leHBvcnQgY29uc3QgVVBEQVRFX1VTRVJfREVUQUlMU19QUk9DRVNTX0lEID0gJ3VwZGF0ZVVzZXJEZXRhaWxzJztcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9VU0VSX1BST0NFU1NfSUQgPSAncmVnaXN0ZXJVc2VyJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfVVNFUl9QUk9DRVNTX0lEID0gJ3JlbW92ZVVzZXInO1xuZXhwb3J0IGNvbnN0IEdJVkVfQ09OU0VOVF9QUk9DRVNTX0lEID0gJ2dpdmVDb25zZW50JztcbmV4cG9ydCBjb25zdCBXSVRIRFJBV19DT05TRU5UX1BST0NFU1NfSUQgPSAnd2l0aGRyYXdDb25zZW50JztcbmV4cG9ydCBjb25zdCBVUERBVEVfTk9USUZJQ0FUSU9OX1BSRUZFUkVOQ0VTX1BST0NFU1NfSUQgPVxuICAndXBkYXRlTm90aWZpY2F0aW9uUHJlZmVyZW5jZXMnO1xuZXhwb3J0IGNvbnN0IEFERF9QUk9EVUNUX0lOVEVSRVNUX1BST0NFU1NfSUQgPSAnYWRkUHJvZHVjdEludGVyZXN0cyc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1BST0RVQ1RfSU5URVJFU1RTX1BST0NFU1NfSUQgPSAncmVtb3ZlUHJvZHVjdEludGVyZXN0cyc7XG5leHBvcnQgY29uc3QgQ0FOQ0VMX09SREVSX1BST0NFU1NfSUQgPSAnY2FuY2VsT3JkZXInO1xuZXhwb3J0IGNvbnN0IENBTkNFTF9SRVRVUk5fUFJPQ0VTU19JRCA9ICdjYW5jZWxSZXR1cm4nO1xuXG5leHBvcnQgY29uc3QgVVNFUl9DT05TRU5UUyA9ICdbVXNlcl0gVXNlciBDb25zZW50cyc7XG5leHBvcnQgY29uc3QgVVNFUl9QQVlNRU5UX01FVEhPRFMgPSAnW1VzZXJdIFVzZXIgUGF5bWVudCBNZXRob2RzJztcbmV4cG9ydCBjb25zdCBVU0VSX09SREVSUyA9ICdbVXNlcl0gVXNlciBPcmRlcnMnO1xuZXhwb3J0IGNvbnN0IFVTRVJfQUREUkVTU0VTID0gJ1tVc2VyXSBVc2VyIEFkZHJlc3Nlcyc7XG5leHBvcnQgY29uc3QgVVNFUl9SRVRVUk5fUkVRVUVTVFMgPSAnW1VzZXJdIE9yZGVyIFJldHVybiBSZXF1ZXN0cyc7XG5leHBvcnQgY29uc3QgVVNFUl9SRVRVUk5fUkVRVUVTVF9ERVRBSUxTID0gJ1tVc2VyXSBSZXR1cm4gUmVxdWVzdCBEZXRhaWxzJztcbmV4cG9ydCBjb25zdCBVU0VSX09SREVSX0RFVEFJTFMgPSAnW1VzZXJdIFVzZXIgT3JkZXIgRGV0YWlscyc7XG5leHBvcnQgY29uc3QgUkVHSU9OUyA9ICdbVXNlcl0gUmVnaW9ucyc7XG5cbmV4cG9ydCBjb25zdCBDVVNUT01FUl9DT1VQT05TID0gJ1tVc2VyXSBDdXN0b21lciBDb3Vwb25zJztcbmV4cG9ydCBjb25zdCBTVUJTQ1JJQkVfQ1VTVE9NRVJfQ09VUE9OX1BST0NFU1NfSUQgPSAnc3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb24nO1xuZXhwb3J0IGNvbnN0IFVOU1VCU0NSSUJFX0NVU1RPTUVSX0NPVVBPTl9QUk9DRVNTX0lEID1cbiAgJ3Vuc3Vic2NyaWJlQ3VzdG9tZXJDb3Vwb24nO1xuZXhwb3J0IGNvbnN0IENMQUlNX0NVU1RPTUVSX0NPVVBPTl9QUk9DRVNTX0lEID0gJ2NsYWltQ3VzdG9tZXJDb3Vwb24nO1xuZXhwb3J0IGNvbnN0IE5PVElGSUNBVElPTl9QUkVGRVJFTkNFUyA9ICdbVXNlcl0gTm90aWZpY2F0aW9uIFByZWZlcmVuY2VzJztcbmV4cG9ydCBjb25zdCBQUk9EVUNUX0lOVEVSRVNUUyA9ICdbVXNlcl0gUHJvZHVjdCBJbnRlcmVzdHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlV2l0aFVzZXIge1xuICBbVVNFUl9GRUFUVVJFXTogVXNlclN0YXRlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJTdGF0ZSB7XG4gIGFjY291bnQ6IFVzZXJEZXRhaWxzU3RhdGU7XG4gIGFkZHJlc3NlczogTG9hZGVyU3RhdGU8QWRkcmVzc1tdPjtcbiAgY29uc2VudHM6IExvYWRlclN0YXRlPENvbnNlbnRUZW1wbGF0ZVtdPjtcbiAgYmlsbGluZ0NvdW50cmllczogQmlsbGluZ0NvdW50cmllc1N0YXRlO1xuICBjb3VudHJpZXM6IERlbGl2ZXJ5Q291bnRyaWVzU3RhdGU7XG4gIHBheW1lbnRzOiBMb2FkZXJTdGF0ZTxQYXltZW50RGV0YWlsc1tdPjtcbiAgb3JkZXJzOiBMb2FkZXJTdGF0ZTxPcmRlckhpc3RvcnlMaXN0PjtcbiAgb3JkZXI6IExvYWRlclN0YXRlPE9yZGVyPjtcbiAgb3JkZXJSZXR1cm46IExvYWRlclN0YXRlPFJldHVyblJlcXVlc3Q+O1xuICBvcmRlclJldHVybkxpc3Q6IExvYWRlclN0YXRlPFJldHVyblJlcXVlc3RMaXN0PjtcbiAgdGl0bGVzOiBUaXRsZXNTdGF0ZTtcbiAgcmVnaW9uczogTG9hZGVyU3RhdGU8UmVnaW9uc1N0YXRlPjtcbiAgcmVzZXRQYXNzd29yZDogYm9vbGVhbjtcbiAgY29uc2lnbm1lbnRUcmFja2luZzogQ29uc2lnbm1lbnRUcmFja2luZ1N0YXRlO1xuICBjdXN0b21lckNvdXBvbnM6IExvYWRlclN0YXRlPEN1c3RvbWVyQ291cG9uU2VhcmNoUmVzdWx0PjtcbiAgbm90aWZpY2F0aW9uUHJlZmVyZW5jZXM6IExvYWRlclN0YXRlPE5vdGlmaWNhdGlvblByZWZlcmVuY2VbXT47XG4gIHByb2R1Y3RJbnRlcmVzdHM6IExvYWRlclN0YXRlPFByb2R1Y3RJbnRlcmVzdFNlYXJjaFJlc3VsdD47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVnaW9uc1N0YXRlIHtcbiAgZW50aXRpZXM6IFJlZ2lvbltdO1xuICBjb3VudHJ5OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmlsbGluZ0NvdW50cnlFbnRpdGllcyB7XG4gIFtrZXk6IHN0cmluZ106IENvdW50cnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmlsbGluZ0NvdW50cmllc1N0YXRlIHtcbiAgZW50aXRpZXM6IEJpbGxpbmdDb3VudHJ5RW50aXRpZXM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVsaXZlcnlDb3VudHJ5RW50aXRpZXMge1xuICBba2V5OiBzdHJpbmddOiBDb3VudHJ5O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlbGl2ZXJ5Q291bnRyaWVzU3RhdGUge1xuICBlbnRpdGllczogRGVsaXZlcnlDb3VudHJ5RW50aXRpZXM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGl0bGVFbnRpdGllcyB7XG4gIFtrZXk6IHN0cmluZ106IFRpdGxlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRpdGxlc1N0YXRlIHtcbiAgZW50aXRpZXM6IFRpdGxlRW50aXRpZXM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckRldGFpbHNTdGF0ZSB7XG4gIGRldGFpbHM6IFVzZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uc2lnbm1lbnRUcmFja2luZ1N0YXRlIHtcbiAgdHJhY2tpbmc/OiBDb25zaWdubWVudFRyYWNraW5nO1xufVxuIl19