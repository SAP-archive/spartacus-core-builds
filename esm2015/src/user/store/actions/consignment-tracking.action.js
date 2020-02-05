/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const LOAD_CONSIGNMENT_TRACKING = '[User] Load Consignment Tracking';
/** @type {?} */
export const LOAD_CONSIGNMENT_TRACKING_FAIL = '[User] Load Consignment Tracking Fail';
/** @type {?} */
export const LOAD_CONSIGNMENT_TRACKING_SUCCESS = '[User] Load Consignment Tracking Success';
/** @type {?} */
export const CLEAR_CONSIGNMENT_TRACKING = '[User] Clear Consignment Tracking';
export class LoadConsignmentTracking {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_CONSIGNMENT_TRACKING;
    }
}
if (false) {
    /** @type {?} */
    LoadConsignmentTracking.prototype.type;
    /** @type {?} */
    LoadConsignmentTracking.prototype.payload;
}
export class LoadConsignmentTrackingFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_CONSIGNMENT_TRACKING_FAIL;
    }
}
if (false) {
    /** @type {?} */
    LoadConsignmentTrackingFail.prototype.type;
    /** @type {?} */
    LoadConsignmentTrackingFail.prototype.payload;
}
export class LoadConsignmentTrackingSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_CONSIGNMENT_TRACKING_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadConsignmentTrackingSuccess.prototype.type;
    /** @type {?} */
    LoadConsignmentTrackingSuccess.prototype.payload;
}
export class ClearConsignmentTracking {
    constructor() {
        this.type = CLEAR_CONSIGNMENT_TRACKING;
    }
}
if (false) {
    /** @type {?} */
    ClearConsignmentTracking.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2lnbm1lbnQtdHJhY2tpbmcuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvYWN0aW9ucy9jb25zaWdubWVudC10cmFja2luZy5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxNQUFNLE9BQU8seUJBQXlCLEdBQUcsa0NBQWtDOztBQUMzRSxNQUFNLE9BQU8sOEJBQThCLEdBQ3pDLHVDQUF1Qzs7QUFDekMsTUFBTSxPQUFPLGlDQUFpQyxHQUM1QywwQ0FBMEM7O0FBQzVDLE1BQU0sT0FBTywwQkFBMEIsR0FBRyxtQ0FBbUM7QUFFN0UsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQUVsQyxZQUNTLE9BSU47UUFKTSxZQUFPLEdBQVAsT0FBTyxDQUliO1FBTk0sU0FBSSxHQUFHLHlCQUF5QixDQUFDO0lBT3ZDLENBQUM7Q0FDTDs7O0lBUkMsdUNBQTBDOztJQUV4QywwQ0FJQzs7QUFJTCxNQUFNLE9BQU8sMkJBQTJCOzs7O0lBRXRDLFlBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyw4QkFBOEIsQ0FBQztJQUNiLENBQUM7Q0FDcEM7OztJQUZDLDJDQUErQzs7SUFDbkMsOENBQW1COztBQUdqQyxNQUFNLE9BQU8sOEJBQThCOzs7O0lBRXpDLFlBQW1CLE9BQTRCO1FBQTVCLFlBQU8sR0FBUCxPQUFPLENBQXFCO1FBRHRDLFNBQUksR0FBRyxpQ0FBaUMsQ0FBQztJQUNBLENBQUM7Q0FDcEQ7OztJQUZDLDhDQUFrRDs7SUFDdEMsaURBQW1DOztBQUdqRCxNQUFNLE9BQU8sd0JBQXdCO0lBRW5DO1FBRFMsU0FBSSxHQUFHLDBCQUEwQixDQUFDO0lBQzVCLENBQUM7Q0FDakI7OztJQUZDLHdDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IENvbnNpZ25tZW50VHJhY2tpbmcgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9pbmRleCc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0NPTlNJR05NRU5UX1RSQUNLSU5HID0gJ1tVc2VyXSBMb2FkIENvbnNpZ25tZW50IFRyYWNraW5nJztcbmV4cG9ydCBjb25zdCBMT0FEX0NPTlNJR05NRU5UX1RSQUNLSU5HX0ZBSUwgPVxuICAnW1VzZXJdIExvYWQgQ29uc2lnbm1lbnQgVHJhY2tpbmcgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9DT05TSUdOTUVOVF9UUkFDS0lOR19TVUNDRVNTID1cbiAgJ1tVc2VyXSBMb2FkIENvbnNpZ25tZW50IFRyYWNraW5nIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IENMRUFSX0NPTlNJR05NRU5UX1RSQUNLSU5HID0gJ1tVc2VyXSBDbGVhciBDb25zaWdubWVudCBUcmFja2luZyc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ29uc2lnbm1lbnRUcmFja2luZyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NPTlNJR05NRU5UX1RSQUNLSU5HO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDoge1xuICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgICBvcmRlckNvZGU6IHN0cmluZztcbiAgICAgIGNvbnNpZ25tZW50Q29kZTogc3RyaW5nO1xuICAgIH1cbiAgKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENvbnNpZ25tZW50VHJhY2tpbmdGYWlsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ09OU0lHTk1FTlRfVFJBQ0tJTkdfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDb25zaWdubWVudFRyYWNraW5nU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NPTlNJR05NRU5UX1RSQUNLSU5HX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDb25zaWdubWVudFRyYWNraW5nKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xlYXJDb25zaWdubWVudFRyYWNraW5nIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX0NPTlNJR05NRU5UX1RSQUNLSU5HO1xuICBjb25zdHJ1Y3RvcigpIHt9XG59XG5cbmV4cG9ydCB0eXBlIENvbnNpZ25tZW50VHJhY2tpbmdBY3Rpb24gPVxuICB8IExvYWRDb25zaWdubWVudFRyYWNraW5nXG4gIHwgTG9hZENvbnNpZ25tZW50VHJhY2tpbmdGYWlsXG4gIHwgTG9hZENvbnNpZ25tZW50VHJhY2tpbmdTdWNjZXNzXG4gIHwgQ2xlYXJDb25zaWdubWVudFRyYWNraW5nO1xuIl19