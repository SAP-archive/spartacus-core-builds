/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpResponseStatus } from '../../models/response-status.model';
import { HttpErrorHandler } from './http-error.handler';
import * as i0 from "@angular/core";
import * as i1 from "../../facade/global-message.service";
var NotFoundHandler = /** @class */ (function (_super) {
    tslib_1.__extends(NotFoundHandler, _super);
    function NotFoundHandler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.responseStatus = HttpResponseStatus.NOT_FOUND;
        return _this;
    }
    // empty error handler to avoid we fallabck to the unknown error handler
    // empty error handler to avoid we fallabck to the unknown error handler
    /**
     * @return {?}
     */
    NotFoundHandler.prototype.handleError = 
    // empty error handler to avoid we fallabck to the unknown error handler
    /**
     * @return {?}
     */
    function () { };
    NotFoundHandler.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */ NotFoundHandler.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NotFoundHandler_Factory() { return new NotFoundHandler(i0.ɵɵinject(i1.GlobalMessageService)); }, token: NotFoundHandler, providedIn: "root" });
    return NotFoundHandler;
}(HttpErrorHandler));
export { NotFoundHandler };
if (false) {
    /** @type {?} */
    NotFoundHandler.prototype.responseStatus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWZvdW5kLmhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvZ2xvYmFsLW1lc3NhZ2UvaHR0cC1pbnRlcmNlcHRvcnMvaGFuZGxlcnMvbm90LWZvdW5kLmhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFFeEQ7SUFHcUMsMkNBQWdCO0lBSHJEO1FBQUEscUVBUUM7UUFKQyxvQkFBYyxHQUFHLGtCQUFrQixDQUFDLFNBQVMsQ0FBQzs7S0FJL0M7SUFGQyx3RUFBd0U7Ozs7O0lBQ3hFLHFDQUFXOzs7OztJQUFYLGNBQXFCLENBQUM7O2dCQVB2QixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7MEJBTkQ7Q0FZQyxBQVJELENBR3FDLGdCQUFnQixHQUtwRDtTQUxZLGVBQWU7OztJQUMxQix5Q0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwUmVzcG9uc2VTdGF0dXMgfSBmcm9tICcuLi8uLi9tb2RlbHMvcmVzcG9uc2Utc3RhdHVzLm1vZGVsJztcbmltcG9ydCB7IEh0dHBFcnJvckhhbmRsZXIgfSBmcm9tICcuL2h0dHAtZXJyb3IuaGFuZGxlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBOb3RGb3VuZEhhbmRsZXIgZXh0ZW5kcyBIdHRwRXJyb3JIYW5kbGVyIHtcbiAgcmVzcG9uc2VTdGF0dXMgPSBIdHRwUmVzcG9uc2VTdGF0dXMuTk9UX0ZPVU5EO1xuXG4gIC8vIGVtcHR5IGVycm9yIGhhbmRsZXIgdG8gYXZvaWQgd2UgZmFsbGFiY2sgdG8gdGhlIHVua25vd24gZXJyb3IgaGFuZGxlclxuICBoYW5kbGVFcnJvcigpOiB2b2lkIHt9XG59XG4iXX0=