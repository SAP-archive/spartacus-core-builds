/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var CHECKOUT_FEATURE = 'checkout';
/** @type {?} */
export var CHECKOUT_DETAILS = '[Checkout] Checkout Details';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtc3RhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2hlY2tvdXQvc3RvcmUvY2hlY2tvdXQtc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFVQSxNQUFNLEtBQU8sZ0JBQWdCLEdBQUcsVUFBVTs7QUFDMUMsTUFBTSxLQUFPLGdCQUFnQixHQUFHLDZCQUE2Qjs7OztBQUU3RCx1Q0FFQzs7Ozs7Ozs7QUFFRCw4Q0FFQzs7O0lBREMsMkNBQW9DOzs7OztBQUd0QyxvQ0FFQzs7O0lBREMsa0NBQXVDOzs7OztBQUd6Qyx3Q0FRQzs7O0lBUEMscUNBQWlCOztJQUNqQiwwQ0FHRTs7SUFDRiw0Q0FBK0I7O0lBQy9CLDBDQUFvQjs7Ozs7QUFHdEIsbUNBSUM7OztJQUhDLDhCQUF1Qzs7SUFDdkMsa0NBQTBCOztJQUMxQiw0Q0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDYXJkVHlwZSxcbiAgQWRkcmVzcyxcbiAgRGVsaXZlcnlNb2RlLFxuICBPcmRlcixcbiAgUGF5bWVudERldGFpbHMsXG4gIEFkZHJlc3NWYWxpZGF0aW9uLFxufSBmcm9tICcuLi8uLi9vY2Mvb2NjLW1vZGVscy9pbmRleCc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXItc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgQ0hFQ0tPVVRfRkVBVFVSRSA9ICdjaGVja291dCc7XG5leHBvcnQgY29uc3QgQ0hFQ0tPVVRfREVUQUlMUyA9ICdbQ2hlY2tvdXRdIENoZWNrb3V0IERldGFpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlV2l0aENoZWNrb3V0IHtcbiAgW0NIRUNLT1VUX0ZFQVRVUkVdOiBDaGVja291dFN0YXRlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkZHJlc3NWZXJpZmljYXRpb25TdGF0ZSB7XG4gIHJlc3VsdHM6IEFkZHJlc3NWYWxpZGF0aW9uIHwgc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhcmRUeXBlc1N0YXRlIHtcbiAgZW50aXRpZXM6IHsgW2NvZGU6IHN0cmluZ106IENhcmRUeXBlIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hlY2tvdXRTdGVwc1N0YXRlIHtcbiAgYWRkcmVzczogQWRkcmVzcztcbiAgZGVsaXZlcnlNb2RlOiB7XG4gICAgc3VwcG9ydGVkOiB7IFtjb2RlOiBzdHJpbmddOiBEZWxpdmVyeU1vZGUgfTtcbiAgICBzZWxlY3RlZDogc3RyaW5nO1xuICB9O1xuICBwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHM7XG4gIG9yZGVyRGV0YWlsczogT3JkZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hlY2tvdXRTdGF0ZSB7XG4gIHN0ZXBzOiBMb2FkZXJTdGF0ZTxDaGVja291dFN0ZXBzU3RhdGU+O1xuICBjYXJkVHlwZXM6IENhcmRUeXBlc1N0YXRlO1xuICBhZGRyZXNzVmVyaWZpY2F0aW9uOiBBZGRyZXNzVmVyaWZpY2F0aW9uU3RhdGU7XG59XG4iXX0=