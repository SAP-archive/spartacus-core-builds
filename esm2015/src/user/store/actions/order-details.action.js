/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const LOAD_ORDER_DETAILS = '[User] Load Order Details';
/** @type {?} */
export const LOAD_ORDER_DETAILS_FAIL = '[User] Load Order Details Fail';
/** @type {?} */
export const LOAD_ORDER_DETAILS_SUCCESS = '[User] Load Order Details Success';
/** @type {?} */
export const CLEAR_ORDER_DETAILS = '[User] Clear Order Details';
export class LoadOrderDetails {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_ORDER_DETAILS;
    }
}
if (false) {
    /** @type {?} */
    LoadOrderDetails.prototype.type;
    /** @type {?} */
    LoadOrderDetails.prototype.payload;
}
export class LoadOrderDetailsFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_ORDER_DETAILS_FAIL;
    }
}
if (false) {
    /** @type {?} */
    LoadOrderDetailsFail.prototype.type;
    /** @type {?} */
    LoadOrderDetailsFail.prototype.payload;
}
export class LoadOrderDetailsSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_ORDER_DETAILS_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadOrderDetailsSuccess.prototype.type;
    /** @type {?} */
    LoadOrderDetailsSuccess.prototype.payload;
}
export class ClearOrderDetails {
    constructor() {
        this.type = CLEAR_ORDER_DETAILS;
    }
}
if (false) {
    /** @type {?} */
    ClearOrderDetails.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9hY3Rpb25zL29yZGVyLWRldGFpbHMuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsTUFBTSxPQUFPLGtCQUFrQixHQUFHLDJCQUEyQjs7QUFDN0QsTUFBTSxPQUFPLHVCQUF1QixHQUFHLGdDQUFnQzs7QUFDdkUsTUFBTSxPQUFPLDBCQUEwQixHQUFHLG1DQUFtQzs7QUFDN0UsTUFBTSxPQUFPLG1CQUFtQixHQUFHLDRCQUE0QjtBQUUvRCxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBRTNCLFlBQ1MsT0FHTjtRQUhNLFlBQU8sR0FBUCxPQUFPLENBR2I7UUFMTSxTQUFJLEdBQUcsa0JBQWtCLENBQUM7SUFNaEMsQ0FBQztDQUNMOzs7SUFQQyxnQ0FBbUM7O0lBRWpDLG1DQUdDOztBQUlMLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFFL0IsWUFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLHVCQUF1QixDQUFDO0lBQ04sQ0FBQztDQUNwQzs7O0lBRkMsb0NBQXdDOztJQUM1Qix1Q0FBbUI7O0FBR2pDLE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFFbEMsWUFBbUIsT0FBYztRQUFkLFlBQU8sR0FBUCxPQUFPLENBQU87UUFEeEIsU0FBSSxHQUFHLDBCQUEwQixDQUFDO0lBQ1AsQ0FBQztDQUN0Qzs7O0lBRkMsdUNBQTJDOztJQUMvQiwwQ0FBcUI7O0FBR25DLE1BQU0sT0FBTyxpQkFBaUI7SUFBOUI7UUFDVyxTQUFJLEdBQUcsbUJBQW1CLENBQUM7SUFDdEMsQ0FBQztDQUFBOzs7SUFEQyxpQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPcmRlciB9IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IExPQURfT1JERVJfREVUQUlMUyA9ICdbVXNlcl0gTG9hZCBPcmRlciBEZXRhaWxzJztcbmV4cG9ydCBjb25zdCBMT0FEX09SREVSX0RFVEFJTFNfRkFJTCA9ICdbVXNlcl0gTG9hZCBPcmRlciBEZXRhaWxzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfT1JERVJfREVUQUlMU19TVUNDRVNTID0gJ1tVc2VyXSBMb2FkIE9yZGVyIERldGFpbHMgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgQ0xFQVJfT1JERVJfREVUQUlMUyA9ICdbVXNlcl0gQ2xlYXIgT3JkZXIgRGV0YWlscyc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkT3JkZXJEZXRhaWxzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfT1JERVJfREVUQUlMUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgb3JkZXJDb2RlOiBzdHJpbmc7XG4gICAgfVxuICApIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkT3JkZXJEZXRhaWxzRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX09SREVSX0RFVEFJTFNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRPcmRlckRldGFpbHNTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfT1JERVJfREVUQUlMU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogT3JkZXIpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhck9yZGVyRGV0YWlscyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9PUkRFUl9ERVRBSUxTO1xufVxuXG5leHBvcnQgdHlwZSBPcmRlckRldGFpbHNBY3Rpb24gPVxuICB8IExvYWRPcmRlckRldGFpbHNcbiAgfCBMb2FkT3JkZXJEZXRhaWxzRmFpbFxuICB8IExvYWRPcmRlckRldGFpbHNTdWNjZXNzXG4gIHwgQ2xlYXJPcmRlckRldGFpbHM7XG4iXX0=