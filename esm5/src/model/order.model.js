/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function DeliveryMode() { }
if (false) {
    /** @type {?|undefined} */
    DeliveryMode.prototype.code;
    /** @type {?|undefined} */
    DeliveryMode.prototype.deliveryCost;
    /** @type {?|undefined} */
    DeliveryMode.prototype.description;
    /** @type {?|undefined} */
    DeliveryMode.prototype.name;
}
/**
 * @record
 */
export function OrderEntry() { }
if (false) {
    /** @type {?|undefined} */
    OrderEntry.prototype.basePrice;
    /** @type {?|undefined} */
    OrderEntry.prototype.deliveryMode;
    /** @type {?|undefined} */
    OrderEntry.prototype.deliveryPointOfService;
    /** @type {?|undefined} */
    OrderEntry.prototype.entryNumber;
    /** @type {?|undefined} */
    OrderEntry.prototype.product;
    /** @type {?|undefined} */
    OrderEntry.prototype.quantity;
    /** @type {?|undefined} */
    OrderEntry.prototype.totalPrice;
    /** @type {?|undefined} */
    OrderEntry.prototype.updateable;
    /** @type {?|undefined} */
    OrderEntry.prototype.returnedItemsPrice;
    /** @type {?|undefined} */
    OrderEntry.prototype.returnableQuantity;
    /** @type {?|undefined} */
    OrderEntry.prototype.cancelledItemsPrice;
    /** @type {?|undefined} */
    OrderEntry.prototype.cancellableQuantity;
}
/**
 * @record
 */
export function CancelOrReturnRequestEntryInput() { }
if (false) {
    /** @type {?|undefined} */
    CancelOrReturnRequestEntryInput.prototype.orderEntryNumber;
    /** @type {?|undefined} */
    CancelOrReturnRequestEntryInput.prototype.quantity;
}
/**
 * @record
 */
export function ReturnRequestEntryInputList() { }
if (false) {
    /** @type {?|undefined} */
    ReturnRequestEntryInputList.prototype.orderCode;
    /** @type {?|undefined} */
    ReturnRequestEntryInputList.prototype.returnRequestEntryInputs;
}
/**
 * @record
 */
export function CancellationRequestEntryInputList() { }
if (false) {
    /** @type {?|undefined} */
    CancellationRequestEntryInputList.prototype.cancellationRequestEntryInputs;
}
/**
 * @record
 */
export function ReturnRequestEntry() { }
if (false) {
    /** @type {?|undefined} */
    ReturnRequestEntry.prototype.orderEntry;
    /** @type {?|undefined} */
    ReturnRequestEntry.prototype.expectedQuantity;
    /** @type {?|undefined} */
    ReturnRequestEntry.prototype.refundAmount;
}
/**
 * @record
 */
export function ReturnRequest() { }
if (false) {
    /** @type {?|undefined} */
    ReturnRequest.prototype.cancellable;
    /** @type {?|undefined} */
    ReturnRequest.prototype.code;
    /** @type {?|undefined} */
    ReturnRequest.prototype.creationTime;
    /** @type {?|undefined} */
    ReturnRequest.prototype.deliveryCost;
    /** @type {?|undefined} */
    ReturnRequest.prototype.order;
    /** @type {?|undefined} */
    ReturnRequest.prototype.refundDeliveryCost;
    /** @type {?|undefined} */
    ReturnRequest.prototype.returnEntries;
    /** @type {?|undefined} */
    ReturnRequest.prototype.returnLabelDownloadUrl;
    /** @type {?|undefined} */
    ReturnRequest.prototype.rma;
    /** @type {?|undefined} */
    ReturnRequest.prototype.status;
    /** @type {?|undefined} */
    ReturnRequest.prototype.subTotal;
    /** @type {?|undefined} */
    ReturnRequest.prototype.totalPrice;
}
/**
 * @record
 */
export function ReturnRequestList() { }
if (false) {
    /** @type {?|undefined} */
    ReturnRequestList.prototype.returnRequests;
    /** @type {?|undefined} */
    ReturnRequestList.prototype.pagination;
    /** @type {?|undefined} */
    ReturnRequestList.prototype.sorts;
}
/**
 * @record
 */
export function ReturnRequestModification() { }
if (false) {
    /** @type {?|undefined} */
    ReturnRequestModification.prototype.status;
}
/**
 * @record
 */
export function PickupOrderEntryGroup() { }
if (false) {
    /** @type {?|undefined} */
    PickupOrderEntryGroup.prototype.deliveryPointOfService;
    /** @type {?|undefined} */
    PickupOrderEntryGroup.prototype.distance;
    /** @type {?|undefined} */
    PickupOrderEntryGroup.prototype.entries;
    /** @type {?|undefined} */
    PickupOrderEntryGroup.prototype.quantity;
    /** @type {?|undefined} */
    PickupOrderEntryGroup.prototype.totalPriceWithTax;
}
/**
 * @record
 */
export function PromotionOrderEntryConsumed() { }
if (false) {
    /** @type {?|undefined} */
    PromotionOrderEntryConsumed.prototype.adjustedUnitPrice;
    /** @type {?|undefined} */
    PromotionOrderEntryConsumed.prototype.code;
    /** @type {?|undefined} */
    PromotionOrderEntryConsumed.prototype.orderEntryNumber;
    /** @type {?|undefined} */
    PromotionOrderEntryConsumed.prototype.quantity;
}
/**
 * @record
 */
export function ConsignmentEntry() { }
if (false) {
    /** @type {?|undefined} */
    ConsignmentEntry.prototype.orderEntry;
    /** @type {?|undefined} */
    ConsignmentEntry.prototype.quantity;
    /** @type {?|undefined} */
    ConsignmentEntry.prototype.shippedQuantity;
}
/**
 * @record
 */
export function Consignment() { }
if (false) {
    /** @type {?|undefined} */
    Consignment.prototype.code;
    /** @type {?|undefined} */
    Consignment.prototype.deliveryPointOfService;
    /** @type {?|undefined} */
    Consignment.prototype.entries;
    /** @type {?|undefined} */
    Consignment.prototype.shippingAddress;
    /** @type {?|undefined} */
    Consignment.prototype.status;
    /** @type {?|undefined} */
    Consignment.prototype.statusDate;
    /** @type {?|undefined} */
    Consignment.prototype.trackingID;
}
/**
 * @record
 */
export function OrderHistory() { }
if (false) {
    /** @type {?|undefined} */
    OrderHistory.prototype.code;
    /** @type {?|undefined} */
    OrderHistory.prototype.guid;
    /** @type {?|undefined} */
    OrderHistory.prototype.placed;
    /** @type {?|undefined} */
    OrderHistory.prototype.status;
    /** @type {?|undefined} */
    OrderHistory.prototype.statusDisplay;
    /** @type {?|undefined} */
    OrderHistory.prototype.total;
}
/**
 * @record
 */
export function OrderHistoryList() { }
if (false) {
    /** @type {?|undefined} */
    OrderHistoryList.prototype.orders;
    /** @type {?|undefined} */
    OrderHistoryList.prototype.pagination;
    /** @type {?|undefined} */
    OrderHistoryList.prototype.sorts;
}
/**
 * @record
 */
export function Order() { }
if (false) {
    /** @type {?|undefined} */
    Order.prototype.appliedOrderPromotions;
    /** @type {?|undefined} */
    Order.prototype.appliedProductPromotions;
    /** @type {?|undefined} */
    Order.prototype.appliedVouchers;
    /** @type {?|undefined} */
    Order.prototype.calculated;
    /** @type {?|undefined} */
    Order.prototype.code;
    /** @type {?|undefined} */
    Order.prototype.consignments;
    /** @type {?|undefined} */
    Order.prototype.created;
    /** @type {?|undefined} */
    Order.prototype.deliveryAddress;
    /** @type {?|undefined} */
    Order.prototype.deliveryCost;
    /** @type {?|undefined} */
    Order.prototype.deliveryItemsQuantity;
    /** @type {?|undefined} */
    Order.prototype.deliveryMode;
    /** @type {?|undefined} */
    Order.prototype.deliveryOrderGroups;
    /** @type {?|undefined} */
    Order.prototype.deliveryStatus;
    /** @type {?|undefined} */
    Order.prototype.deliveryStatusDisplay;
    /** @type {?|undefined} */
    Order.prototype.entries;
    /** @type {?|undefined} */
    Order.prototype.guestCustomer;
    /** @type {?|undefined} */
    Order.prototype.guid;
    /** @type {?|undefined} */
    Order.prototype.net;
    /** @type {?|undefined} */
    Order.prototype.orderDiscounts;
    /** @type {?|undefined} */
    Order.prototype.paymentInfo;
    /** @type {?|undefined} */
    Order.prototype.pickupItemsQuantity;
    /** @type {?|undefined} */
    Order.prototype.pickupOrderGroups;
    /** @type {?|undefined} */
    Order.prototype.productDiscounts;
    /** @type {?|undefined} */
    Order.prototype.site;
    /** @type {?|undefined} */
    Order.prototype.status;
    /** @type {?|undefined} */
    Order.prototype.statusDisplay;
    /** @type {?|undefined} */
    Order.prototype.store;
    /** @type {?|undefined} */
    Order.prototype.subTotal;
    /** @type {?|undefined} */
    Order.prototype.totalDiscounts;
    /** @type {?|undefined} */
    Order.prototype.totalItems;
    /** @type {?|undefined} */
    Order.prototype.totalPrice;
    /** @type {?|undefined} */
    Order.prototype.totalPriceWithTax;
    /** @type {?|undefined} */
    Order.prototype.totalTax;
    /** @type {?|undefined} */
    Order.prototype.unconsignedEntries;
    /** @type {?|undefined} */
    Order.prototype.user;
    /** @type {?|undefined} */
    Order.prototype.returnable;
    /** @type {?|undefined} */
    Order.prototype.cancellable;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvbW9kZWwvb3JkZXIubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQVlBLGtDQUtDOzs7SUFKQyw0QkFBYzs7SUFDZCxvQ0FBcUI7O0lBQ3JCLG1DQUFxQjs7SUFDckIsNEJBQWM7Ozs7O0FBR2hCLGdDQWFDOzs7SUFaQywrQkFBa0I7O0lBQ2xCLGtDQUE0Qjs7SUFDNUIsNENBQXdDOztJQUN4QyxpQ0FBcUI7O0lBQ3JCLDZCQUFrQjs7SUFDbEIsOEJBQWtCOztJQUNsQixnQ0FBbUI7O0lBQ25CLGdDQUFxQjs7SUFDckIsd0NBQTJCOztJQUMzQix3Q0FBNEI7O0lBQzVCLHlDQUE0Qjs7SUFDNUIseUNBQTZCOzs7OztBQUcvQixxREFHQzs7O0lBRkMsMkRBQTBCOztJQUMxQixtREFBa0I7Ozs7O0FBR3BCLGlEQUdDOzs7SUFGQyxnREFBbUI7O0lBQ25CLCtEQUE2RDs7Ozs7QUFHL0QsdURBRUM7OztJQURDLDJFQUFtRTs7Ozs7QUFHckUsd0NBSUM7OztJQUhDLHdDQUF3Qjs7SUFDeEIsOENBQTBCOztJQUMxQiwwQ0FBcUI7Ozs7O0FBR3ZCLG1DQWFDOzs7SUFaQyxvQ0FBc0I7O0lBQ3RCLDZCQUFjOztJQUNkLHFDQUFvQjs7SUFDcEIscUNBQXFCOztJQUNyQiw4QkFBYzs7SUFDZCwyQ0FBNkI7O0lBQzdCLHNDQUFxQzs7SUFDckMsK0NBQWdDOztJQUNoQyw0QkFBYTs7SUFDYiwrQkFBZ0I7O0lBQ2hCLGlDQUFpQjs7SUFDakIsbUNBQW1COzs7OztBQUdyQix1Q0FJQzs7O0lBSEMsMkNBQWlDOztJQUNqQyx1Q0FBNkI7O0lBQzdCLGtDQUFvQjs7Ozs7QUFHdEIsK0NBRUM7OztJQURDLDJDQUFnQjs7Ozs7QUFHbEIsMkNBTUM7OztJQUxDLHVEQUF3Qzs7SUFDeEMseUNBQWtCOztJQUNsQix3Q0FBdUI7O0lBQ3ZCLHlDQUFrQjs7SUFDbEIsa0RBQTBCOzs7OztBQUc1QixpREFLQzs7O0lBSkMsd0RBQTJCOztJQUMzQiwyQ0FBYzs7SUFDZCx1REFBMEI7O0lBQzFCLCtDQUFrQjs7Ozs7QUFHcEIsc0NBSUM7OztJQUhDLHNDQUF3Qjs7SUFDeEIsb0NBQWtCOztJQUNsQiwyQ0FBeUI7Ozs7O0FBRzNCLGlDQVFDOzs7SUFQQywyQkFBYzs7SUFDZCw2Q0FBd0M7O0lBQ3hDLDhCQUE2Qjs7SUFDN0Isc0NBQTBCOztJQUMxQiw2QkFBZ0I7O0lBQ2hCLGlDQUFrQjs7SUFDbEIsaUNBQW9COzs7OztBQUd0QixrQ0FPQzs7O0lBTkMsNEJBQWM7O0lBQ2QsNEJBQWM7O0lBQ2QsOEJBQWM7O0lBQ2QsOEJBQWdCOztJQUNoQixxQ0FBdUI7O0lBQ3ZCLDZCQUFjOzs7OztBQUdoQixzQ0FJQzs7O0lBSEMsa0NBQXdCOztJQUN4QixzQ0FBNkI7O0lBQzdCLGlDQUFvQjs7Ozs7QUFHdEIsMkJBc0NDOzs7SUFyQ0MsdUNBQTJDOztJQUMzQyx5Q0FBNkM7O0lBQzdDLGdDQUE0Qjs7SUFDNUIsMkJBQXFCOztJQUNyQixxQkFBYzs7SUFDZCw2QkFBNkI7O0lBQzdCLHdCQUFlOztJQUNmLGdDQUEwQjs7SUFDMUIsNkJBQXFCOztJQUNyQixzQ0FBK0I7O0lBQy9CLDZCQUE0Qjs7SUFDNUIsb0NBQWdEOztJQUNoRCwrQkFBd0I7O0lBQ3hCLHNDQUErQjs7SUFDL0Isd0JBQXVCOztJQUN2Qiw4QkFBd0I7O0lBQ3hCLHFCQUFjOztJQUNkLG9CQUFjOztJQUNkLCtCQUF1Qjs7SUFDdkIsNEJBQTZCOztJQUM3QixvQ0FBNkI7O0lBQzdCLGtDQUE0Qzs7SUFDNUMsaUNBQXlCOztJQUN6QixxQkFBYzs7SUFDZCx1QkFBZ0I7O0lBQ2hCLDhCQUF1Qjs7SUFDdkIsc0JBQWU7O0lBQ2YseUJBQWlCOztJQUNqQiwrQkFBdUI7O0lBQ3ZCLDJCQUFvQjs7SUFDcEIsMkJBQW1COztJQUNuQixrQ0FBMEI7O0lBQzFCLHlCQUFpQjs7SUFDakIsbUNBQWtDOztJQUNsQyxxQkFBaUI7O0lBQ2pCLDJCQUFxQjs7SUFDckIsNEJBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpY2UsIFByb2R1Y3QgfSBmcm9tICcuL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbk1vZGVsLCBTb3J0TW9kZWwgfSBmcm9tICcuL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgQWRkcmVzcyB9IGZyb20gJy4vYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQge1xuICBEZWxpdmVyeU9yZGVyRW50cnlHcm91cCxcbiAgUGF5bWVudERldGFpbHMsXG4gIFByaW5jaXBhbCxcbiAgUHJvbW90aW9uUmVzdWx0LFxuICBWb3VjaGVyLFxufSBmcm9tICcuL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgUG9pbnRPZlNlcnZpY2UgfSBmcm9tICcuL3BvaW50LW9mLXNlcnZpY2UubW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERlbGl2ZXJ5TW9kZSB7XG4gIGNvZGU/OiBzdHJpbmc7XG4gIGRlbGl2ZXJ5Q29zdD86IFByaWNlO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgbmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPcmRlckVudHJ5IHtcbiAgYmFzZVByaWNlPzogUHJpY2U7XG4gIGRlbGl2ZXJ5TW9kZT86IERlbGl2ZXJ5TW9kZTtcbiAgZGVsaXZlcnlQb2ludE9mU2VydmljZT86IFBvaW50T2ZTZXJ2aWNlO1xuICBlbnRyeU51bWJlcj86IG51bWJlcjtcbiAgcHJvZHVjdD86IFByb2R1Y3Q7XG4gIHF1YW50aXR5PzogbnVtYmVyO1xuICB0b3RhbFByaWNlPzogUHJpY2U7XG4gIHVwZGF0ZWFibGU/OiBib29sZWFuO1xuICByZXR1cm5lZEl0ZW1zUHJpY2U/OiBQcmljZTtcbiAgcmV0dXJuYWJsZVF1YW50aXR5PzogbnVtYmVyO1xuICBjYW5jZWxsZWRJdGVtc1ByaWNlPzogUHJpY2U7XG4gIGNhbmNlbGxhYmxlUXVhbnRpdHk/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FuY2VsT3JSZXR1cm5SZXF1ZXN0RW50cnlJbnB1dCB7XG4gIG9yZGVyRW50cnlOdW1iZXI/OiBudW1iZXI7XG4gIHF1YW50aXR5PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJldHVyblJlcXVlc3RFbnRyeUlucHV0TGlzdCB7XG4gIG9yZGVyQ29kZT86IHN0cmluZztcbiAgcmV0dXJuUmVxdWVzdEVudHJ5SW5wdXRzPzogQ2FuY2VsT3JSZXR1cm5SZXF1ZXN0RW50cnlJbnB1dFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhbmNlbGxhdGlvblJlcXVlc3RFbnRyeUlucHV0TGlzdCB7XG4gIGNhbmNlbGxhdGlvblJlcXVlc3RFbnRyeUlucHV0cz86IENhbmNlbE9yUmV0dXJuUmVxdWVzdEVudHJ5SW5wdXRbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXR1cm5SZXF1ZXN0RW50cnkge1xuICBvcmRlckVudHJ5PzogT3JkZXJFbnRyeTtcbiAgZXhwZWN0ZWRRdWFudGl0eT86IG51bWJlcjtcbiAgcmVmdW5kQW1vdW50PzogUHJpY2U7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV0dXJuUmVxdWVzdCB7XG4gIGNhbmNlbGxhYmxlPzogYm9vbGVhbjtcbiAgY29kZT86IHN0cmluZztcbiAgY3JlYXRpb25UaW1lPzogRGF0ZTtcbiAgZGVsaXZlcnlDb3N0PzogUHJpY2U7XG4gIG9yZGVyPzogT3JkZXI7XG4gIHJlZnVuZERlbGl2ZXJ5Q29zdD86IGJvb2xlYW47XG4gIHJldHVybkVudHJpZXM/OiBSZXR1cm5SZXF1ZXN0RW50cnlbXTtcbiAgcmV0dXJuTGFiZWxEb3dubG9hZFVybD86IHN0cmluZztcbiAgcm1hPzogc3RyaW5nO1xuICBzdGF0dXM/OiBzdHJpbmc7XG4gIHN1YlRvdGFsPzogUHJpY2U7XG4gIHRvdGFsUHJpY2U/OiBQcmljZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXR1cm5SZXF1ZXN0TGlzdCB7XG4gIHJldHVyblJlcXVlc3RzPzogUmV0dXJuUmVxdWVzdFtdO1xuICBwYWdpbmF0aW9uPzogUGFnaW5hdGlvbk1vZGVsO1xuICBzb3J0cz86IFNvcnRNb2RlbFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJldHVyblJlcXVlc3RNb2RpZmljYXRpb24ge1xuICBzdGF0dXM/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGlja3VwT3JkZXJFbnRyeUdyb3VwIHtcbiAgZGVsaXZlcnlQb2ludE9mU2VydmljZT86IFBvaW50T2ZTZXJ2aWNlO1xuICBkaXN0YW5jZT86IG51bWJlcjtcbiAgZW50cmllcz86IE9yZGVyRW50cnlbXTtcbiAgcXVhbnRpdHk/OiBudW1iZXI7XG4gIHRvdGFsUHJpY2VXaXRoVGF4PzogUHJpY2U7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvbW90aW9uT3JkZXJFbnRyeUNvbnN1bWVkIHtcbiAgYWRqdXN0ZWRVbml0UHJpY2U/OiBudW1iZXI7XG4gIGNvZGU/OiBzdHJpbmc7XG4gIG9yZGVyRW50cnlOdW1iZXI/OiBudW1iZXI7XG4gIHF1YW50aXR5PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbnNpZ25tZW50RW50cnkge1xuICBvcmRlckVudHJ5PzogT3JkZXJFbnRyeTtcbiAgcXVhbnRpdHk/OiBudW1iZXI7XG4gIHNoaXBwZWRRdWFudGl0eT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25zaWdubWVudCB7XG4gIGNvZGU/OiBzdHJpbmc7XG4gIGRlbGl2ZXJ5UG9pbnRPZlNlcnZpY2U/OiBQb2ludE9mU2VydmljZTtcbiAgZW50cmllcz86IENvbnNpZ25tZW50RW50cnlbXTtcbiAgc2hpcHBpbmdBZGRyZXNzPzogQWRkcmVzcztcbiAgc3RhdHVzPzogc3RyaW5nO1xuICBzdGF0dXNEYXRlPzogRGF0ZTtcbiAgdHJhY2tpbmdJRD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPcmRlckhpc3Rvcnkge1xuICBjb2RlPzogc3RyaW5nO1xuICBndWlkPzogc3RyaW5nO1xuICBwbGFjZWQ/OiBEYXRlO1xuICBzdGF0dXM/OiBzdHJpbmc7XG4gIHN0YXR1c0Rpc3BsYXk/OiBzdHJpbmc7XG4gIHRvdGFsPzogUHJpY2U7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3JkZXJIaXN0b3J5TGlzdCB7XG4gIG9yZGVycz86IE9yZGVySGlzdG9yeVtdO1xuICBwYWdpbmF0aW9uPzogUGFnaW5hdGlvbk1vZGVsO1xuICBzb3J0cz86IFNvcnRNb2RlbFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9yZGVyIHtcbiAgYXBwbGllZE9yZGVyUHJvbW90aW9ucz86IFByb21vdGlvblJlc3VsdFtdO1xuICBhcHBsaWVkUHJvZHVjdFByb21vdGlvbnM/OiBQcm9tb3Rpb25SZXN1bHRbXTtcbiAgYXBwbGllZFZvdWNoZXJzPzogVm91Y2hlcltdO1xuICBjYWxjdWxhdGVkPzogYm9vbGVhbjtcbiAgY29kZT86IHN0cmluZztcbiAgY29uc2lnbm1lbnRzPzogQ29uc2lnbm1lbnRbXTtcbiAgY3JlYXRlZD86IERhdGU7XG4gIGRlbGl2ZXJ5QWRkcmVzcz86IEFkZHJlc3M7XG4gIGRlbGl2ZXJ5Q29zdD86IFByaWNlO1xuICBkZWxpdmVyeUl0ZW1zUXVhbnRpdHk/OiBudW1iZXI7XG4gIGRlbGl2ZXJ5TW9kZT86IERlbGl2ZXJ5TW9kZTtcbiAgZGVsaXZlcnlPcmRlckdyb3Vwcz86IERlbGl2ZXJ5T3JkZXJFbnRyeUdyb3VwW107XG4gIGRlbGl2ZXJ5U3RhdHVzPzogc3RyaW5nO1xuICBkZWxpdmVyeVN0YXR1c0Rpc3BsYXk/OiBzdHJpbmc7XG4gIGVudHJpZXM/OiBPcmRlckVudHJ5W107XG4gIGd1ZXN0Q3VzdG9tZXI/OiBib29sZWFuO1xuICBndWlkPzogc3RyaW5nO1xuICBuZXQ/OiBib29sZWFuO1xuICBvcmRlckRpc2NvdW50cz86IFByaWNlO1xuICBwYXltZW50SW5mbz86IFBheW1lbnREZXRhaWxzO1xuICBwaWNrdXBJdGVtc1F1YW50aXR5PzogbnVtYmVyO1xuICBwaWNrdXBPcmRlckdyb3Vwcz86IFBpY2t1cE9yZGVyRW50cnlHcm91cFtdO1xuICBwcm9kdWN0RGlzY291bnRzPzogUHJpY2U7XG4gIHNpdGU/OiBzdHJpbmc7XG4gIHN0YXR1cz86IHN0cmluZztcbiAgc3RhdHVzRGlzcGxheT86IHN0cmluZztcbiAgc3RvcmU/OiBzdHJpbmc7XG4gIHN1YlRvdGFsPzogUHJpY2U7XG4gIHRvdGFsRGlzY291bnRzPzogUHJpY2U7XG4gIHRvdGFsSXRlbXM/OiBudW1iZXI7XG4gIHRvdGFsUHJpY2U/OiBQcmljZTtcbiAgdG90YWxQcmljZVdpdGhUYXg/OiBQcmljZTtcbiAgdG90YWxUYXg/OiBQcmljZTtcbiAgdW5jb25zaWduZWRFbnRyaWVzPzogT3JkZXJFbnRyeVtdO1xuICB1c2VyPzogUHJpbmNpcGFsO1xuICByZXR1cm5hYmxlPzogYm9vbGVhbjtcbiAgY2FuY2VsbGFibGU/OiBib29sZWFuO1xufVxuIl19