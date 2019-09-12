/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { GlobalMessageType } from '../../models/global-message.model';
import { HttpResponseStatus } from '../../models/response-status.model';
import { HttpErrorHandler } from './http-error.handler';
import * as i0 from "@angular/core";
import * as i1 from "../../facade/global-message.service";
export class InternalServerErrorHandler extends HttpErrorHandler {
    constructor() {
        super(...arguments);
        this.responseStatus = HttpResponseStatus.INTERNAL_SERVER_ERROR;
    }
    /**
     * @return {?}
     */
    handleError() {
        this.globalMessageService.add({ key: 'httpHandlers.internalServerError' }, GlobalMessageType.MSG_TYPE_ERROR);
    }
}
InternalServerErrorHandler.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ InternalServerErrorHandler.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function InternalServerErrorHandler_Factory() { return new InternalServerErrorHandler(i0.ɵɵinject(i1.GlobalMessageService)); }, token: InternalServerErrorHandler, providedIn: "root" });
if (false) {
    /** @type {?} */
    InternalServerErrorHandler.prototype.responseStatus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJuYWwtc2VydmVyLWVycm9yLmhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvZ2xvYmFsLW1lc3NhZ2UvaHR0cC1pbnRlcmNlcHRvcnMvaGFuZGxlcnMvaW50ZXJuYWwtc2VydmVyLWVycm9yLmhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQUt4RCxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsZ0JBQWdCO0lBSGhFOztRQUlFLG1CQUFjLEdBQUcsa0JBQWtCLENBQUMscUJBQXFCLENBQUM7S0FRM0Q7Ozs7SUFOQyxXQUFXO1FBQ1QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FDM0IsRUFBRSxHQUFHLEVBQUUsa0NBQWtDLEVBQUUsRUFDM0MsaUJBQWlCLENBQUMsY0FBYyxDQUNqQyxDQUFDO0lBQ0osQ0FBQzs7O1lBWEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7OztJQUVDLG9EQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2dsb2JhbC1tZXNzYWdlLm1vZGVsJztcbmltcG9ydCB7IEh0dHBSZXNwb25zZVN0YXR1cyB9IGZyb20gJy4uLy4uL21vZGVscy9yZXNwb25zZS1zdGF0dXMubW9kZWwnO1xuaW1wb3J0IHsgSHR0cEVycm9ySGFuZGxlciB9IGZyb20gJy4vaHR0cC1lcnJvci5oYW5kbGVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEludGVybmFsU2VydmVyRXJyb3JIYW5kbGVyIGV4dGVuZHMgSHR0cEVycm9ySGFuZGxlciB7XG4gIHJlc3BvbnNlU3RhdHVzID0gSHR0cFJlc3BvbnNlU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUjtcblxuICBoYW5kbGVFcnJvcigpIHtcbiAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgIHsga2V5OiAnaHR0cEhhbmRsZXJzLmludGVybmFsU2VydmVyRXJyb3InIH0sXG4gICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUlxuICAgICk7XG4gIH1cbn1cbiJdfQ==