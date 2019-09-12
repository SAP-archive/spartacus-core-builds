/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const CHECKOUT_FEATURE = 'checkout';
/** @type {?} */
export const CHECKOUT_DETAILS = '[Checkout] Checkout Details';
/** @type {?} */
export const SET_DELIVERY_ADDRESS_PROCESS_ID = 'setDeliveryAddress';
/** @type {?} */
export const SET_DELIVERY_MODE_PROCESS_ID = 'setDeliveryMode';
/** @type {?} */
export const SET_SUPPORTED_DELIVERY_MODE_PROCESS_ID = 'setSupportedDeliveryMode';
/** @type {?} */
export const SET_PAYMENT_DETAILS_PROCESS_ID = 'setPaymentDetails';
/**
 * @record
 */
export function StateWithCheckout() { }
if (false) {
    /* Skipping unnamed member:
    [CHECKOUT_FEATURE]: CheckoutState;*/
}
/**
 * @record
 */
export function AddressVerificationState() { }
if (false) {
    /** @type {?} */
    AddressVerificationState.prototype.results;
}
/**
 * @record
 */
export function CardTypesState() { }
if (false) {
    /** @type {?} */
    CardTypesState.prototype.entities;
}
/**
 * @record
 */
export function CheckoutStepsState() { }
if (false) {
    /** @type {?} */
    CheckoutStepsState.prototype.address;
    /** @type {?} */
    CheckoutStepsState.prototype.deliveryMode;
    /** @type {?} */
    CheckoutStepsState.prototype.paymentDetails;
    /** @type {?} */
    CheckoutStepsState.prototype.orderDetails;
}
/**
 * @record
 */
export function CheckoutState() { }
if (false) {
    /** @type {?} */
    CheckoutState.prototype.steps;
    /** @type {?} */
    CheckoutState.prototype.cardTypes;
    /** @type {?} */
    CheckoutState.prototype.addressVerification;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtc3RhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2hlY2tvdXQvc3RvcmUvY2hlY2tvdXQtc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxNQUFNLE9BQU8sZ0JBQWdCLEdBQUcsVUFBVTs7QUFDMUMsTUFBTSxPQUFPLGdCQUFnQixHQUFHLDZCQUE2Qjs7QUFFN0QsTUFBTSxPQUFPLCtCQUErQixHQUFHLG9CQUFvQjs7QUFDbkUsTUFBTSxPQUFPLDRCQUE0QixHQUFHLGlCQUFpQjs7QUFDN0QsTUFBTSxPQUFPLHNDQUFzQyxHQUNqRCwwQkFBMEI7O0FBQzVCLE1BQU0sT0FBTyw4QkFBOEIsR0FBRyxtQkFBbUI7Ozs7QUFFakUsdUNBRUM7Ozs7Ozs7O0FBRUQsOENBRUM7OztJQURDLDJDQUFvQzs7Ozs7QUFHdEMsb0NBRUM7OztJQURDLGtDQUF1Qzs7Ozs7QUFHekMsd0NBUUM7OztJQVBDLHFDQUFpQjs7SUFDakIsMENBR0U7O0lBQ0YsNENBQStCOztJQUMvQiwwQ0FBb0I7Ozs7O0FBR3RCLG1DQUlDOzs7SUFIQyw4QkFBdUM7O0lBQ3ZDLGtDQUEwQjs7SUFDMUIsNENBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7IENhcmRUeXBlLCBQYXltZW50RGV0YWlscyB9IGZyb20gJy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgQWRkcmVzcywgQWRkcmVzc1ZhbGlkYXRpb24gfSBmcm9tICcuLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcbmltcG9ydCB7IERlbGl2ZXJ5TW9kZSwgT3JkZXIgfSBmcm9tICcuLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBDSEVDS09VVF9GRUFUVVJFID0gJ2NoZWNrb3V0JztcbmV4cG9ydCBjb25zdCBDSEVDS09VVF9ERVRBSUxTID0gJ1tDaGVja291dF0gQ2hlY2tvdXQgRGV0YWlscyc7XG5cbmV4cG9ydCBjb25zdCBTRVRfREVMSVZFUllfQUREUkVTU19QUk9DRVNTX0lEID0gJ3NldERlbGl2ZXJ5QWRkcmVzcyc7XG5leHBvcnQgY29uc3QgU0VUX0RFTElWRVJZX01PREVfUFJPQ0VTU19JRCA9ICdzZXREZWxpdmVyeU1vZGUnO1xuZXhwb3J0IGNvbnN0IFNFVF9TVVBQT1JURURfREVMSVZFUllfTU9ERV9QUk9DRVNTX0lEID1cbiAgJ3NldFN1cHBvcnRlZERlbGl2ZXJ5TW9kZSc7XG5leHBvcnQgY29uc3QgU0VUX1BBWU1FTlRfREVUQUlMU19QUk9DRVNTX0lEID0gJ3NldFBheW1lbnREZXRhaWxzJztcblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZVdpdGhDaGVja291dCB7XG4gIFtDSEVDS09VVF9GRUFUVVJFXTogQ2hlY2tvdXRTdGF0ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZGRyZXNzVmVyaWZpY2F0aW9uU3RhdGUge1xuICByZXN1bHRzOiBBZGRyZXNzVmFsaWRhdGlvbiB8IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXJkVHlwZXNTdGF0ZSB7XG4gIGVudGl0aWVzOiB7IFtjb2RlOiBzdHJpbmddOiBDYXJkVHlwZSB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoZWNrb3V0U3RlcHNTdGF0ZSB7XG4gIGFkZHJlc3M6IEFkZHJlc3M7XG4gIGRlbGl2ZXJ5TW9kZToge1xuICAgIHN1cHBvcnRlZDogeyBbY29kZTogc3RyaW5nXTogRGVsaXZlcnlNb2RlIH07XG4gICAgc2VsZWN0ZWQ6IHN0cmluZztcbiAgfTtcbiAgcGF5bWVudERldGFpbHM6IFBheW1lbnREZXRhaWxzO1xuICBvcmRlckRldGFpbHM6IE9yZGVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoZWNrb3V0U3RhdGUge1xuICBzdGVwczogTG9hZGVyU3RhdGU8Q2hlY2tvdXRTdGVwc1N0YXRlPjtcbiAgY2FyZFR5cGVzOiBDYXJkVHlwZXNTdGF0ZTtcbiAgYWRkcmVzc1ZlcmlmaWNhdGlvbjogQWRkcmVzc1ZlcmlmaWNhdGlvblN0YXRlO1xufVxuIl19