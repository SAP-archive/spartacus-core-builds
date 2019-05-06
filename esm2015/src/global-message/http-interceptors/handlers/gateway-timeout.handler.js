/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpErrorHandler } from './http-error.handler';
import { GlobalMessageType } from '../../models/global-message.model';
import { HttpResponseStatus } from '../../models/response-status.model';
import * as i0 from "@angular/core";
import * as i1 from "../../facade/global-message.service";
export class GatewayTimeoutHandler extends HttpErrorHandler {
    constructor() {
        super(...arguments);
        this.responseStatus = HttpResponseStatus.GATEWAY_TIMEOUT;
    }
    /**
     * @return {?}
     */
    handleError() {
        this.globalMessageService.add('The server did not responded, please try again later.', GlobalMessageType.MSG_TYPE_ERROR);
    }
}
GatewayTimeoutHandler.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ GatewayTimeoutHandler.ngInjectableDef = i0.defineInjectable({ factory: function GatewayTimeoutHandler_Factory() { return new GatewayTimeoutHandler(i0.inject(i1.GlobalMessageService)); }, token: GatewayTimeoutHandler, providedIn: "root" });
if (false) {
    /** @type {?} */
    GatewayTimeoutHandler.prototype.responseStatus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F0ZXdheS10aW1lb3V0LmhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvZ2xvYmFsLW1lc3NhZ2UvaHR0cC1pbnRlcmNlcHRvcnMvaGFuZGxlcnMvZ2F0ZXdheS10aW1lb3V0LmhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7OztBQUt4RSxNQUFNLE9BQU8scUJBQXNCLFNBQVEsZ0JBQWdCO0lBSDNEOztRQUlFLG1CQUFjLEdBQUcsa0JBQWtCLENBQUMsZUFBZSxDQUFDO0tBUXJEOzs7O0lBTkMsV0FBVztRQUNULElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQzNCLHVEQUF1RCxFQUN2RCxpQkFBaUIsQ0FBQyxjQUFjLENBQ2pDLENBQUM7SUFDSixDQUFDOzs7WUFYRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7O0lBRUMsK0NBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEVycm9ySGFuZGxlciB9IGZyb20gJy4vaHR0cC1lcnJvci5oYW5kbGVyJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2dsb2JhbC1tZXNzYWdlLm1vZGVsJztcbmltcG9ydCB7IEh0dHBSZXNwb25zZVN0YXR1cyB9IGZyb20gJy4uLy4uL21vZGVscy9yZXNwb25zZS1zdGF0dXMubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgR2F0ZXdheVRpbWVvdXRIYW5kbGVyIGV4dGVuZHMgSHR0cEVycm9ySGFuZGxlciB7XG4gIHJlc3BvbnNlU3RhdHVzID0gSHR0cFJlc3BvbnNlU3RhdHVzLkdBVEVXQVlfVElNRU9VVDtcblxuICBoYW5kbGVFcnJvcigpIHtcbiAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICdUaGUgc2VydmVyIGRpZCBub3QgcmVzcG9uZGVkLCBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicsXG4gICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUlxuICAgICk7XG4gIH1cbn1cbiJdfQ==