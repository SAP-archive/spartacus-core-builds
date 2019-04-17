/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var LOAD_ORDER_DETAILS = '[User] Load Order Details';
/** @type {?} */
export var LOAD_ORDER_DETAILS_FAIL = '[User] Load Order Details Fail';
/** @type {?} */
export var LOAD_ORDER_DETAILS_SUCCESS = '[User] Load Order Details Success';
/** @type {?} */
export var CLEAR_ORDER_DETAILS = '[User] Clear Order Details';
var LoadOrderDetails = /** @class */ (function () {
    function LoadOrderDetails(payload) {
        this.payload = payload;
        this.type = LOAD_ORDER_DETAILS;
    }
    return LoadOrderDetails;
}());
export { LoadOrderDetails };
if (false) {
    /** @type {?} */
    LoadOrderDetails.prototype.type;
    /** @type {?} */
    LoadOrderDetails.prototype.payload;
}
var LoadOrderDetailsFail = /** @class */ (function () {
    function LoadOrderDetailsFail(payload) {
        this.payload = payload;
        this.type = LOAD_ORDER_DETAILS_FAIL;
    }
    return LoadOrderDetailsFail;
}());
export { LoadOrderDetailsFail };
if (false) {
    /** @type {?} */
    LoadOrderDetailsFail.prototype.type;
    /** @type {?} */
    LoadOrderDetailsFail.prototype.payload;
}
var LoadOrderDetailsSuccess = /** @class */ (function () {
    function LoadOrderDetailsSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_ORDER_DETAILS_SUCCESS;
    }
    return LoadOrderDetailsSuccess;
}());
export { LoadOrderDetailsSuccess };
if (false) {
    /** @type {?} */
    LoadOrderDetailsSuccess.prototype.type;
    /** @type {?} */
    LoadOrderDetailsSuccess.prototype.payload;
}
var ClearOrderDetails = /** @class */ (function () {
    function ClearOrderDetails() {
        this.type = CLEAR_ORDER_DETAILS;
    }
    return ClearOrderDetails;
}());
export { ClearOrderDetails };
if (false) {
    /** @type {?} */
    ClearOrderDetails.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9hY3Rpb25zL29yZGVyLWRldGFpbHMuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsTUFBTSxLQUFPLGtCQUFrQixHQUFHLDJCQUEyQjs7QUFDN0QsTUFBTSxLQUFPLHVCQUF1QixHQUFHLGdDQUFnQzs7QUFDdkUsTUFBTSxLQUFPLDBCQUEwQixHQUFHLG1DQUFtQzs7QUFDN0UsTUFBTSxLQUFPLG1CQUFtQixHQUFHLDRCQUE0QjtBQUUvRDtJQUVFLDBCQUNTLE9BR047UUFITSxZQUFPLEdBQVAsT0FBTyxDQUdiO1FBTE0sU0FBSSxHQUFHLGtCQUFrQixDQUFDO0lBTWhDLENBQUM7SUFDTix1QkFBQztBQUFELENBQUMsQUFSRCxJQVFDOzs7O0lBUEMsZ0NBQW1DOztJQUVqQyxtQ0FHQzs7QUFJTDtJQUVFLDhCQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsdUJBQXVCLENBQUM7SUFDTixDQUFDO0lBQ3JDLDJCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyxvQ0FBd0M7O0lBQzVCLHVDQUFtQjs7QUFHakM7SUFFRSxpQ0FBbUIsT0FBYztRQUFkLFlBQU8sR0FBUCxPQUFPLENBQU87UUFEeEIsU0FBSSxHQUFHLDBCQUEwQixDQUFDO0lBQ1AsQ0FBQztJQUN2Qyw4QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsdUNBQTJDOztJQUMvQiwwQ0FBcUI7O0FBR25DO0lBQUE7UUFDVyxTQUFJLEdBQUcsbUJBQW1CLENBQUM7SUFDdEMsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7SUFEQyxpQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPcmRlciB9IGZyb20gJy4uLy4uLy4uL29jYy9vY2MtbW9kZWxzL2luZGV4JztcblxuZXhwb3J0IGNvbnN0IExPQURfT1JERVJfREVUQUlMUyA9ICdbVXNlcl0gTG9hZCBPcmRlciBEZXRhaWxzJztcbmV4cG9ydCBjb25zdCBMT0FEX09SREVSX0RFVEFJTFNfRkFJTCA9ICdbVXNlcl0gTG9hZCBPcmRlciBEZXRhaWxzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfT1JERVJfREVUQUlMU19TVUNDRVNTID0gJ1tVc2VyXSBMb2FkIE9yZGVyIERldGFpbHMgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgQ0xFQVJfT1JERVJfREVUQUlMUyA9ICdbVXNlcl0gQ2xlYXIgT3JkZXIgRGV0YWlscyc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkT3JkZXJEZXRhaWxzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfT1JERVJfREVUQUlMUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgb3JkZXJDb2RlOiBzdHJpbmc7XG4gICAgfVxuICApIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkT3JkZXJEZXRhaWxzRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX09SREVSX0RFVEFJTFNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRPcmRlckRldGFpbHNTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfT1JERVJfREVUQUlMU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogT3JkZXIpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhck9yZGVyRGV0YWlscyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9PUkRFUl9ERVRBSUxTO1xufVxuXG5leHBvcnQgdHlwZSBPcmRlckRldGFpbHNBY3Rpb24gPVxuICB8IExvYWRPcmRlckRldGFpbHNcbiAgfCBMb2FkT3JkZXJEZXRhaWxzRmFpbFxuICB8IExvYWRPcmRlckRldGFpbHNTdWNjZXNzXG4gIHwgQ2xlYXJPcmRlckRldGFpbHM7XG4iXX0=