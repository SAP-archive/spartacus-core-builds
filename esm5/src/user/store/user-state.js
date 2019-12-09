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
export var USER_CONSENTS = '[User] User Consents';
/** @type {?} */
export var USER_PAYMENT_METHODS = '[User] User Payment Methods';
/** @type {?} */
export var USER_ORDERS = '[User] User Orders';
/** @type {?} */
export var USER_ADDRESSES = '[User] User Addresses';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL3VzZXItc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFVQSxNQUFNLEtBQU8sWUFBWSxHQUFHLE1BQU07O0FBQ2xDLE1BQU0sS0FBTyx1QkFBdUIsR0FBRyxhQUFhOztBQUNwRCxNQUFNLEtBQU8sMEJBQTBCLEdBQUcsZ0JBQWdCOztBQUMxRCxNQUFNLEtBQU8sOEJBQThCLEdBQUcsbUJBQW1COztBQUNqRSxNQUFNLEtBQU8sd0JBQXdCLEdBQUcsY0FBYzs7QUFDdEQsTUFBTSxLQUFPLHNCQUFzQixHQUFHLFlBQVk7O0FBQ2xELE1BQU0sS0FBTyx1QkFBdUIsR0FBRyxhQUFhOztBQUNwRCxNQUFNLEtBQU8sMkJBQTJCLEdBQUcsaUJBQWlCOztBQUM1RCxNQUFNLEtBQU8sMENBQTBDLEdBQ3JELCtCQUErQjs7QUFDakMsTUFBTSxLQUFPLCtCQUErQixHQUFHLHFCQUFxQjs7QUFDcEUsTUFBTSxLQUFPLG1DQUFtQyxHQUFHLHdCQUF3Qjs7QUFFM0UsTUFBTSxLQUFPLGFBQWEsR0FBRyxzQkFBc0I7O0FBQ25ELE1BQU0sS0FBTyxvQkFBb0IsR0FBRyw2QkFBNkI7O0FBQ2pFLE1BQU0sS0FBTyxXQUFXLEdBQUcsb0JBQW9COztBQUMvQyxNQUFNLEtBQU8sY0FBYyxHQUFHLHVCQUF1Qjs7QUFDckQsTUFBTSxLQUFPLE9BQU8sR0FBRyxnQkFBZ0I7O0FBRXZDLE1BQU0sS0FBTyx3QkFBd0IsR0FBRyxpQ0FBaUM7O0FBQ3pFLE1BQU0sS0FBTyxpQkFBaUIsR0FBRywwQkFBMEI7Ozs7QUFFM0QsbUNBRUM7Ozs7Ozs7O0FBRUQsK0JBZUM7OztJQWRDLDRCQUEwQjs7SUFDMUIsOEJBQWtDOztJQUNsQyw2QkFBeUM7O0lBQ3pDLHFDQUF3Qzs7SUFDeEMsOEJBQWtDOztJQUNsQyw2QkFBd0M7O0lBQ3hDLDJCQUFzQzs7SUFDdEMsMEJBQXlCOztJQUN6QiwyQkFBb0I7O0lBQ3BCLDRCQUFtQzs7SUFDbkMsa0NBQXVCOztJQUN2Qix3Q0FBOEM7O0lBQzlDLDRDQUErRDs7SUFDL0QscUNBQTJEOzs7OztBQUc3RCx1Q0FFQzs7O0lBREMsa0NBQWE7Ozs7O0FBR2Ysa0NBR0M7OztJQUZDLGdDQUFtQjs7SUFDbkIsK0JBQWdCOzs7OztBQUdsQiw0Q0FFQzs7OztBQUVELDJDQUVDOzs7SUFEQyx5Q0FBaUM7Ozs7O0FBR25DLDZDQUVDOzs7O0FBRUQsNENBRUM7OztJQURDLDBDQUFrQzs7Ozs7QUFHcEMsbUNBRUM7Ozs7QUFFRCxpQ0FFQzs7O0lBREMsK0JBQXdCOzs7OztBQUcxQixzQ0FFQzs7O0lBREMsbUNBQWM7Ozs7O0FBR2hCLDhDQUVDOzs7SUFEQyw0Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZGRyZXNzLCBDb3VudHJ5LCBSZWdpb24gfSBmcm9tICcuLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcbmltcG9ydCB7IFBheW1lbnREZXRhaWxzIH0gZnJvbSAnLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBDb25zZW50VGVtcGxhdGUgfSBmcm9tICcuLi8uLi9tb2RlbC9jb25zZW50Lm1vZGVsJztcbmltcG9ydCB7IENvbnNpZ25tZW50VHJhY2tpbmcgfSBmcm9tICcuLi8uLi9tb2RlbC9jb25zaWdubWVudC10cmFja2luZy5tb2RlbCc7XG5pbXBvcnQgeyBUaXRsZSwgVXNlciB9IGZyb20gJy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgT3JkZXIsIE9yZGVySGlzdG9yeUxpc3QgfSBmcm9tICcuLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblByZWZlcmVuY2UgfSBmcm9tICcuLi8uLi9tb2RlbCc7XG5pbXBvcnQgeyBQcm9kdWN0SW50ZXJlc3RTZWFyY2hSZXN1bHQgfSBmcm9tICcuLi8uLi9tb2RlbC9wcm9kdWN0LWludGVyZXN0Lm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IFVTRVJfRkVBVFVSRSA9ICd1c2VyJztcbmV4cG9ydCBjb25zdCBVUERBVEVfRU1BSUxfUFJPQ0VTU19JRCA9ICd1cGRhdGVFbWFpbCc7XG5leHBvcnQgY29uc3QgVVBEQVRFX1BBU1NXT1JEX1BST0NFU1NfSUQgPSAndXBkYXRlUGFzc3dvcmQnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9VU0VSX0RFVEFJTFNfUFJPQ0VTU19JRCA9ICd1cGRhdGVVc2VyRGV0YWlscyc7XG5leHBvcnQgY29uc3QgUkVHSVNURVJfVVNFUl9QUk9DRVNTX0lEID0gJ3JlZ2lzdGVyVXNlcic7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1VTRVJfUFJPQ0VTU19JRCA9ICdyZW1vdmVVc2VyJztcbmV4cG9ydCBjb25zdCBHSVZFX0NPTlNFTlRfUFJPQ0VTU19JRCA9ICdnaXZlQ29uc2VudCc7XG5leHBvcnQgY29uc3QgV0lUSERSQVdfQ09OU0VOVF9QUk9DRVNTX0lEID0gJ3dpdGhkcmF3Q29uc2VudCc7XG5leHBvcnQgY29uc3QgVVBEQVRFX05PVElGSUNBVElPTl9QUkVGRVJFTkNFU19QUk9DRVNTX0lEID1cbiAgJ3VwZGF0ZU5vdGlmaWNhdGlvblByZWZlcmVuY2VzJztcbmV4cG9ydCBjb25zdCBBRERfUFJPRFVDVF9JTlRFUkVTVF9QUk9DRVNTX0lEID0gJ2FkZFByb2R1Y3RJbnRlcmVzdHMnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9QUk9EVUNUX0lOVEVSRVNUU19QUk9DRVNTX0lEID0gJ3JlbW92ZVByb2R1Y3RJbnRlcmVzdHMnO1xuXG5leHBvcnQgY29uc3QgVVNFUl9DT05TRU5UUyA9ICdbVXNlcl0gVXNlciBDb25zZW50cyc7XG5leHBvcnQgY29uc3QgVVNFUl9QQVlNRU5UX01FVEhPRFMgPSAnW1VzZXJdIFVzZXIgUGF5bWVudCBNZXRob2RzJztcbmV4cG9ydCBjb25zdCBVU0VSX09SREVSUyA9ICdbVXNlcl0gVXNlciBPcmRlcnMnO1xuZXhwb3J0IGNvbnN0IFVTRVJfQUREUkVTU0VTID0gJ1tVc2VyXSBVc2VyIEFkZHJlc3Nlcyc7XG5leHBvcnQgY29uc3QgUkVHSU9OUyA9ICdbVXNlcl0gUmVnaW9ucyc7XG5cbmV4cG9ydCBjb25zdCBOT1RJRklDQVRJT05fUFJFRkVSRU5DRVMgPSAnW1VzZXJdIE5vdGlmaWNhdGlvbiBQcmVmZXJlbmNlcyc7XG5leHBvcnQgY29uc3QgUFJPRFVDVF9JTlRFUkVTVFMgPSAnW1VzZXJdIFByb2R1Y3QgSW50ZXJlc3RzJztcblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZVdpdGhVc2VyIHtcbiAgW1VTRVJfRkVBVFVSRV06IFVzZXJTdGF0ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VyU3RhdGUge1xuICBhY2NvdW50OiBVc2VyRGV0YWlsc1N0YXRlO1xuICBhZGRyZXNzZXM6IExvYWRlclN0YXRlPEFkZHJlc3NbXT47XG4gIGNvbnNlbnRzOiBMb2FkZXJTdGF0ZTxDb25zZW50VGVtcGxhdGVbXT47XG4gIGJpbGxpbmdDb3VudHJpZXM6IEJpbGxpbmdDb3VudHJpZXNTdGF0ZTtcbiAgY291bnRyaWVzOiBEZWxpdmVyeUNvdW50cmllc1N0YXRlO1xuICBwYXltZW50czogTG9hZGVyU3RhdGU8UGF5bWVudERldGFpbHNbXT47XG4gIG9yZGVyczogTG9hZGVyU3RhdGU8T3JkZXJIaXN0b3J5TGlzdD47XG4gIG9yZGVyOiBPcmRlckRldGFpbHNTdGF0ZTtcbiAgdGl0bGVzOiBUaXRsZXNTdGF0ZTtcbiAgcmVnaW9uczogTG9hZGVyU3RhdGU8UmVnaW9uc1N0YXRlPjtcbiAgcmVzZXRQYXNzd29yZDogYm9vbGVhbjtcbiAgY29uc2lnbm1lbnRUcmFja2luZzogQ29uc2lnbm1lbnRUcmFja2luZ1N0YXRlO1xuICBub3RpZmljYXRpb25QcmVmZXJlbmNlczogTG9hZGVyU3RhdGU8Tm90aWZpY2F0aW9uUHJlZmVyZW5jZVtdPjtcbiAgcHJvZHVjdEludGVyZXN0czogTG9hZGVyU3RhdGU8UHJvZHVjdEludGVyZXN0U2VhcmNoUmVzdWx0Pjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPcmRlckRldGFpbHNTdGF0ZSB7XG4gIG9yZGVyOiBPcmRlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZWdpb25zU3RhdGUge1xuICBlbnRpdGllczogUmVnaW9uW107XG4gIGNvdW50cnk6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCaWxsaW5nQ291bnRyeUVudGl0aWVzIHtcbiAgW2tleTogc3RyaW5nXTogQ291bnRyeTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCaWxsaW5nQ291bnRyaWVzU3RhdGUge1xuICBlbnRpdGllczogQmlsbGluZ0NvdW50cnlFbnRpdGllcztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZWxpdmVyeUNvdW50cnlFbnRpdGllcyB7XG4gIFtrZXk6IHN0cmluZ106IENvdW50cnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVsaXZlcnlDb3VudHJpZXNTdGF0ZSB7XG4gIGVudGl0aWVzOiBEZWxpdmVyeUNvdW50cnlFbnRpdGllcztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaXRsZUVudGl0aWVzIHtcbiAgW2tleTogc3RyaW5nXTogVGl0bGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGl0bGVzU3RhdGUge1xuICBlbnRpdGllczogVGl0bGVFbnRpdGllcztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VyRGV0YWlsc1N0YXRlIHtcbiAgZGV0YWlsczogVXNlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25zaWdubWVudFRyYWNraW5nU3RhdGUge1xuICB0cmFja2luZz86IENvbnNpZ25tZW50VHJhY2tpbmc7XG59XG4iXX0=