/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { GlobalMessageType } from '../../models/global-message.model';
import { HttpResponseStatus } from '../../models/response-status.model';
import { HttpErrorHandler } from './http-error.handler';
import * as i0 from "@angular/core";
import * as i1 from "../../facade/global-message.service";
var GatewayTimeoutHandler = /** @class */ (function (_super) {
    tslib_1.__extends(GatewayTimeoutHandler, _super);
    function GatewayTimeoutHandler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.responseStatus = HttpResponseStatus.GATEWAY_TIMEOUT;
        return _this;
    }
    /**
     * @return {?}
     */
    GatewayTimeoutHandler.prototype.handleError = /**
     * @return {?}
     */
    function () {
        this.globalMessageService.add('The server did not responded, please try again later.', GlobalMessageType.MSG_TYPE_ERROR);
    };
    GatewayTimeoutHandler.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */ GatewayTimeoutHandler.ngInjectableDef = i0.defineInjectable({ factory: function GatewayTimeoutHandler_Factory() { return new GatewayTimeoutHandler(i0.inject(i1.GlobalMessageService)); }, token: GatewayTimeoutHandler, providedIn: "root" });
    return GatewayTimeoutHandler;
}(HttpErrorHandler));
export { GatewayTimeoutHandler };
if (false) {
    /** @type {?} */
    GatewayTimeoutHandler.prototype.responseStatus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F0ZXdheS10aW1lb3V0LmhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvZ2xvYmFsLW1lc3NhZ2UvaHR0cC1pbnRlcmNlcHRvcnMvaGFuZGxlcnMvZ2F0ZXdheS10aW1lb3V0LmhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFFeEQ7SUFHMkMsaURBQWdCO0lBSDNEO1FBQUEscUVBWUM7UUFSQyxvQkFBYyxHQUFHLGtCQUFrQixDQUFDLGVBQWUsQ0FBQzs7S0FRckQ7Ozs7SUFOQywyQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUMzQix1REFBdUQsRUFDdkQsaUJBQWlCLENBQUMsY0FBYyxDQUNqQyxDQUFDO0lBQ0osQ0FBQzs7Z0JBWEYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7O2dDQVBEO0NBaUJDLEFBWkQsQ0FHMkMsZ0JBQWdCLEdBUzFEO1NBVFkscUJBQXFCOzs7SUFDaEMsK0NBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvZ2xvYmFsLW1lc3NhZ2UubW9kZWwnO1xuaW1wb3J0IHsgSHR0cFJlc3BvbnNlU3RhdHVzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Jlc3BvbnNlLXN0YXR1cy5tb2RlbCc7XG5pbXBvcnQgeyBIdHRwRXJyb3JIYW5kbGVyIH0gZnJvbSAnLi9odHRwLWVycm9yLmhhbmRsZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgR2F0ZXdheVRpbWVvdXRIYW5kbGVyIGV4dGVuZHMgSHR0cEVycm9ySGFuZGxlciB7XG4gIHJlc3BvbnNlU3RhdHVzID0gSHR0cFJlc3BvbnNlU3RhdHVzLkdBVEVXQVlfVElNRU9VVDtcblxuICBoYW5kbGVFcnJvcigpIHtcbiAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICdUaGUgc2VydmVyIGRpZCBub3QgcmVzcG9uZGVkLCBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicsXG4gICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUlxuICAgICk7XG4gIH1cbn1cbiJdfQ==