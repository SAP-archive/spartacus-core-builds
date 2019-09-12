/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GlobalMessageService } from '../../facade/global-message.service';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../facade/global-message.service";
/**
 * @abstract
 */
var HttpErrorHandler = /** @class */ (function () {
    function HttpErrorHandler(globalMessageService) {
        this.globalMessageService = globalMessageService;
    }
    HttpErrorHandler.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    HttpErrorHandler.ctorParameters = function () { return [
        { type: GlobalMessageService }
    ]; };
    /** @nocollapse */ HttpErrorHandler.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function HttpErrorHandler_Factory() { return new HttpErrorHandler(i0.ɵɵinject(i1.GlobalMessageService)); }, token: HttpErrorHandler, providedIn: "root" });
    return HttpErrorHandler;
}());
export { HttpErrorHandler };
if (false) {
    /**
     * The http response status number which is handled by this handler.
     * Implementations can set the response status number, i.e. 404, so that
     * the handler can be found by the error interceptor.
     * @type {?}
     */
    HttpErrorHandler.prototype.responseStatus;
    /**
     * @type {?}
     * @protected
     */
    HttpErrorHandler.prototype.globalMessageService;
    /**
     * Handles the error response for the respose status that is register for the handler
     * @abstract
     * @param {?} request
     * @param {?} errorResponse
     * @return {?}
     */
    HttpErrorHandler.prototype.handleError = function (request, errorResponse) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1lcnJvci5oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2dsb2JhbC1tZXNzYWdlL2h0dHAtaW50ZXJjZXB0b3JzL2hhbmRsZXJzL2h0dHAtZXJyb3IuaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBRTNDO0lBSUUsMEJBQXNCLG9CQUEwQztRQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQUcsQ0FBQzs7Z0JBSnJFLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTFEsb0JBQW9COzs7MkJBRDdCO0NBMEJDLEFBdEJELElBc0JDO1NBbkJxQixnQkFBZ0I7Ozs7Ozs7O0lBUXBDLDBDQUFnQzs7Ozs7SUFQcEIsZ0RBQW9EOzs7Ozs7OztJQWNoRSwrRUFHUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZmFjYWRlL2dsb2JhbC1tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSHR0cEVycm9ySGFuZGxlciB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqIFRoZSBodHRwIHJlc3BvbnNlIHN0YXR1cyBudW1iZXIgd2hpY2ggaXMgaGFuZGxlZCBieSB0aGlzIGhhbmRsZXIuXG4gICAqIEltcGxlbWVudGF0aW9ucyBjYW4gc2V0IHRoZSByZXNwb25zZSBzdGF0dXMgbnVtYmVyLCBpLmUuIDQwNCwgc28gdGhhdFxuICAgKiB0aGUgaGFuZGxlciBjYW4gYmUgZm91bmQgYnkgdGhlIGVycm9yIGludGVyY2VwdG9yLlxuICAgKi9cbiAgYWJzdHJhY3QgcmVzcG9uc2VTdGF0dXM6IG51bWJlcjtcblxuICAvKipcbiAgICogSGFuZGxlcyB0aGUgZXJyb3IgcmVzcG9uc2UgZm9yIHRoZSByZXNwb3NlIHN0YXR1cyB0aGF0IGlzIHJlZ2lzdGVyIGZvciB0aGUgaGFuZGxlclxuICAgKiBAcGFyYW0geyBIdHRwUmVxdWVzdDxhbnk+IH0gcmVxdWVzdCA6IGh0dHAgcmVxdWVzdFxuICAgKiBAcGFyYW0geyBIdHRwRXJyb3JSZXNwb25zZSB9IGVycm9yUmVzcG9uc2UgOiBIdHRwIGVycm9yIHJlc3BvbnNlXG4gICAqL1xuICBhYnN0cmFjdCBoYW5kbGVFcnJvcihcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIGVycm9yUmVzcG9uc2U6IEh0dHBFcnJvclJlc3BvbnNlXG4gICk6IHZvaWQ7XG59XG4iXX0=