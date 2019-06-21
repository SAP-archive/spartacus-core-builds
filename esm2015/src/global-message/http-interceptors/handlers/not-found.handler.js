/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpResponseStatus } from '../../models/response-status.model';
import { HttpErrorHandler } from './http-error.handler';
import * as i0 from "@angular/core";
import * as i1 from "../../facade/global-message.service";
export class NotFoundHandler extends HttpErrorHandler {
    constructor() {
        super(...arguments);
        this.responseStatus = HttpResponseStatus.NOT_FOUND;
    }
    // empty error handler to avoid we fallabck to the unknown error handler
    /**
     * @return {?}
     */
    handleError() { }
}
NotFoundHandler.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ NotFoundHandler.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NotFoundHandler_Factory() { return new NotFoundHandler(i0.ɵɵinject(i1.GlobalMessageService)); }, token: NotFoundHandler, providedIn: "root" });
if (false) {
    /** @type {?} */
    NotFoundHandler.prototype.responseStatus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWZvdW5kLmhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvZ2xvYmFsLW1lc3NhZ2UvaHR0cC1pbnRlcmNlcHRvcnMvaGFuZGxlcnMvbm90LWZvdW5kLmhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQUt4RCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxnQkFBZ0I7SUFIckQ7O1FBSUUsbUJBQWMsR0FBRyxrQkFBa0IsQ0FBQyxTQUFTLENBQUM7S0FJL0M7Ozs7O0lBREMsV0FBVyxLQUFVLENBQUM7OztZQVB2QixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7O0lBRUMseUNBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cFJlc3BvbnNlU3RhdHVzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Jlc3BvbnNlLXN0YXR1cy5tb2RlbCc7XG5pbXBvcnQgeyBIdHRwRXJyb3JIYW5kbGVyIH0gZnJvbSAnLi9odHRwLWVycm9yLmhhbmRsZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTm90Rm91bmRIYW5kbGVyIGV4dGVuZHMgSHR0cEVycm9ySGFuZGxlciB7XG4gIHJlc3BvbnNlU3RhdHVzID0gSHR0cFJlc3BvbnNlU3RhdHVzLk5PVF9GT1VORDtcblxuICAvLyBlbXB0eSBlcnJvciBoYW5kbGVyIHRvIGF2b2lkIHdlIGZhbGxhYmNrIHRvIHRoZSB1bmtub3duIGVycm9yIGhhbmRsZXJcbiAgaGFuZGxlRXJyb3IoKTogdm9pZCB7fVxufVxuIl19