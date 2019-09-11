/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var LOAD_CONSIGNMENT_TRACKING = '[User] Load Consignment Tracking';
/** @type {?} */
export var LOAD_CONSIGNMENT_TRACKING_FAIL = '[User] Load Consignment Tracking Fail';
/** @type {?} */
export var LOAD_CONSIGNMENT_TRACKING_SUCCESS = '[User] Load Consignment Tracking Success';
/** @type {?} */
export var CLEAR_CONSIGNMENT_TRACKING = '[User] Clear Consignment Tracking';
var LoadConsignmentTracking = /** @class */ (function () {
    function LoadConsignmentTracking(payload) {
        this.payload = payload;
        this.type = LOAD_CONSIGNMENT_TRACKING;
    }
    return LoadConsignmentTracking;
}());
export { LoadConsignmentTracking };
if (false) {
    /** @type {?} */
    LoadConsignmentTracking.prototype.type;
    /** @type {?} */
    LoadConsignmentTracking.prototype.payload;
}
var LoadConsignmentTrackingFail = /** @class */ (function () {
    function LoadConsignmentTrackingFail(payload) {
        this.payload = payload;
        this.type = LOAD_CONSIGNMENT_TRACKING_FAIL;
    }
    return LoadConsignmentTrackingFail;
}());
export { LoadConsignmentTrackingFail };
if (false) {
    /** @type {?} */
    LoadConsignmentTrackingFail.prototype.type;
    /** @type {?} */
    LoadConsignmentTrackingFail.prototype.payload;
}
var LoadConsignmentTrackingSuccess = /** @class */ (function () {
    function LoadConsignmentTrackingSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_CONSIGNMENT_TRACKING_SUCCESS;
    }
    return LoadConsignmentTrackingSuccess;
}());
export { LoadConsignmentTrackingSuccess };
if (false) {
    /** @type {?} */
    LoadConsignmentTrackingSuccess.prototype.type;
    /** @type {?} */
    LoadConsignmentTrackingSuccess.prototype.payload;
}
var ClearConsignmentTracking = /** @class */ (function () {
    function ClearConsignmentTracking() {
        this.type = CLEAR_CONSIGNMENT_TRACKING;
    }
    return ClearConsignmentTracking;
}());
export { ClearConsignmentTracking };
if (false) {
    /** @type {?} */
    ClearConsignmentTracking.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2lnbm1lbnQtdHJhY2tpbmcuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvYWN0aW9ucy9jb25zaWdubWVudC10cmFja2luZy5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxNQUFNLEtBQU8seUJBQXlCLEdBQUcsa0NBQWtDOztBQUMzRSxNQUFNLEtBQU8sOEJBQThCLEdBQ3pDLHVDQUF1Qzs7QUFDekMsTUFBTSxLQUFPLGlDQUFpQyxHQUM1QywwQ0FBMEM7O0FBQzVDLE1BQU0sS0FBTywwQkFBMEIsR0FBRyxtQ0FBbUM7QUFFN0U7SUFFRSxpQ0FDUyxPQUdOO1FBSE0sWUFBTyxHQUFQLE9BQU8sQ0FHYjtRQUxNLFNBQUksR0FBRyx5QkFBeUIsQ0FBQztJQU12QyxDQUFDO0lBQ04sOEJBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQzs7OztJQVBDLHVDQUEwQzs7SUFFeEMsMENBR0M7O0FBSUw7SUFFRSxxQ0FBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLDhCQUE4QixDQUFDO0lBQ2IsQ0FBQztJQUNyQyxrQ0FBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsMkNBQStDOztJQUNuQyw4Q0FBbUI7O0FBR2pDO0lBRUUsd0NBQW1CLE9BQTRCO1FBQTVCLFlBQU8sR0FBUCxPQUFPLENBQXFCO1FBRHRDLFNBQUksR0FBRyxpQ0FBaUMsQ0FBQztJQUNBLENBQUM7SUFDckQscUNBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLDhDQUFrRDs7SUFDdEMsaURBQW1DOztBQUdqRDtJQUVFO1FBRFMsU0FBSSxHQUFHLDBCQUEwQixDQUFDO0lBQzVCLENBQUM7SUFDbEIsK0JBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLHdDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IENvbnNpZ25tZW50VHJhY2tpbmcgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9pbmRleCc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0NPTlNJR05NRU5UX1RSQUNLSU5HID0gJ1tVc2VyXSBMb2FkIENvbnNpZ25tZW50IFRyYWNraW5nJztcbmV4cG9ydCBjb25zdCBMT0FEX0NPTlNJR05NRU5UX1RSQUNLSU5HX0ZBSUwgPVxuICAnW1VzZXJdIExvYWQgQ29uc2lnbm1lbnQgVHJhY2tpbmcgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9DT05TSUdOTUVOVF9UUkFDS0lOR19TVUNDRVNTID1cbiAgJ1tVc2VyXSBMb2FkIENvbnNpZ25tZW50IFRyYWNraW5nIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IENMRUFSX0NPTlNJR05NRU5UX1RSQUNLSU5HID0gJ1tVc2VyXSBDbGVhciBDb25zaWdubWVudCBUcmFja2luZyc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ29uc2lnbm1lbnRUcmFja2luZyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NPTlNJR05NRU5UX1RSQUNLSU5HO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDoge1xuICAgICAgb3JkZXJDb2RlOiBzdHJpbmc7XG4gICAgICBjb25zaWdubWVudENvZGU6IHN0cmluZztcbiAgICB9XG4gICkge31cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDb25zaWdubWVudFRyYWNraW5nRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NPTlNJR05NRU5UX1RSQUNLSU5HX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ29uc2lnbm1lbnRUcmFja2luZ1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DT05TSUdOTUVOVF9UUkFDS0lOR19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ29uc2lnbm1lbnRUcmFja2luZykge31cbn1cblxuZXhwb3J0IGNsYXNzIENsZWFyQ29uc2lnbm1lbnRUcmFja2luZyB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9DT05TSUdOTUVOVF9UUkFDS0lORztcbiAgY29uc3RydWN0b3IoKSB7fVxufVxuXG5leHBvcnQgdHlwZSBDb25zaWdubWVudFRyYWNraW5nQWN0aW9uID1cbiAgfCBMb2FkQ29uc2lnbm1lbnRUcmFja2luZ1xuICB8IExvYWRDb25zaWdubWVudFRyYWNraW5nRmFpbFxuICB8IExvYWRDb25zaWdubWVudFRyYWNraW5nU3VjY2Vzc1xuICB8IENsZWFyQ29uc2lnbm1lbnRUcmFja2luZztcbiJdfQ==