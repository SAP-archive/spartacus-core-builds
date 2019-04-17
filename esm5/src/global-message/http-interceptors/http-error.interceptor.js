/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { HttpErrorResponse, } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler } from './handlers/http-error.handler';
import { HttpResponseStatus } from '../models/response-status.model';
var HttpErrorInterceptor = /** @class */ (function () {
    function HttpErrorInterceptor(handlers) {
        this.handlers = handlers;
        // We reverse the handlers to allow for custom handlers
        // that replace standard handlers
        this.handlers.reverse();
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    HttpErrorInterceptor.prototype.intercept = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        var _this = this;
        return next.handle(request).pipe(catchError(function (response) {
            if (response instanceof HttpErrorResponse) {
                _this.handleErrorResponse(request, response);
                return throwError(response);
            }
        }));
    };
    /**
     * @protected
     * @param {?} request
     * @param {?} response
     * @return {?}
     */
    HttpErrorInterceptor.prototype.handleErrorResponse = /**
     * @protected
     * @param {?} request
     * @param {?} response
     * @return {?}
     */
    function (request, response) {
        /** @type {?} */
        var handler = this.getResponseHandler(response);
        if (handler) {
            handler.handleError(request, response);
        }
    };
    /**
     * return the error handler that matches the `HttpResponseStatus` code.
     * If no handler is available, the UNKNOWN handler is returned.
     */
    /**
     * return the error handler that matches the `HttpResponseStatus` code.
     * If no handler is available, the UNKNOWN handler is returned.
     * @protected
     * @param {?} response
     * @return {?}
     */
    HttpErrorInterceptor.prototype.getResponseHandler = /**
     * return the error handler that matches the `HttpResponseStatus` code.
     * If no handler is available, the UNKNOWN handler is returned.
     * @protected
     * @param {?} response
     * @return {?}
     */
    function (response) {
        /** @type {?} */
        var status = response.status;
        /** @type {?} */
        var handler = this.handlers.find(function (h) { return h.responseStatus === status; });
        if (!handler) {
            handler = this.handlers.find(function (h) { return h.responseStatus === HttpResponseStatus.UNKNOWN; });
        }
        return handler;
    };
    HttpErrorInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    HttpErrorInterceptor.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: Inject, args: [HttpErrorHandler,] }] }
    ]; };
    return HttpErrorInterceptor;
}());
export { HttpErrorInterceptor };
if (false) {
    /**
     * @type {?}
     * @private
     */
    HttpErrorInterceptor.prototype.handlers;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1lcnJvci5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9odHRwLWludGVyY2VwdG9ycy9odHRwLWVycm9yLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQ0wsaUJBQWlCLEdBS2xCLE1BQU0sc0JBQXNCLENBQUM7QUFFOUIsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFckU7SUFFRSw4QkFBOEMsUUFBNEI7UUFBNUIsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFDeEUsdURBQXVEO1FBQ3ZELGlDQUFpQztRQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7OztJQUVELHdDQUFTOzs7OztJQUFULFVBQ0UsT0FBeUIsRUFDekIsSUFBaUI7UUFGbkIsaUJBWUM7UUFSQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM5QixVQUFVLENBQUMsVUFBQyxRQUFhO1lBQ3ZCLElBQUksUUFBUSxZQUFZLGlCQUFpQixFQUFFO2dCQUN6QyxLQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUM1QyxPQUFPLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM3QjtRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7O0lBRVMsa0RBQW1COzs7Ozs7SUFBN0IsVUFDRSxPQUF5QixFQUN6QixRQUEyQjs7WUFFckIsT0FBTyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUM7UUFDakQsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztTQUN4QztJQUNILENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7O0lBQ08saURBQWtCOzs7Ozs7O0lBQTVCLFVBQTZCLFFBQTJCOztZQUNoRCxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU07O1lBQzFCLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxjQUFjLEtBQUssTUFBTSxFQUEzQixDQUEyQixDQUFDO1FBQ2xFLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDWixPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzFCLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLGNBQWMsS0FBSyxrQkFBa0IsQ0FBQyxPQUFPLEVBQS9DLENBQStDLENBQ3JELENBQUM7U0FDSDtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7O2dCQTdDRixVQUFVOzs7OzRDQUVJLE1BQU0sU0FBQyxnQkFBZ0I7O0lBNEN0QywyQkFBQztDQUFBLEFBOUNELElBOENDO1NBN0NZLG9CQUFvQjs7Ozs7O0lBQ25CLHdDQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSHR0cEVycm9yUmVzcG9uc2UsXG4gIEh0dHBFdmVudCxcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBJbnRlcmNlcHRvcixcbiAgSHR0cFJlcXVlc3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgSHR0cEVycm9ySGFuZGxlciB9IGZyb20gJy4vaGFuZGxlcnMvaHR0cC1lcnJvci5oYW5kbGVyJztcbmltcG9ydCB7IEh0dHBSZXNwb25zZVN0YXR1cyB9IGZyb20gJy4uL21vZGVscy9yZXNwb25zZS1zdGF0dXMubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSHR0cEVycm9ySW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KEh0dHBFcnJvckhhbmRsZXIpIHByaXZhdGUgaGFuZGxlcnM6IEh0dHBFcnJvckhhbmRsZXJbXSkge1xuICAgIC8vIFdlIHJldmVyc2UgdGhlIGhhbmRsZXJzIHRvIGFsbG93IGZvciBjdXN0b20gaGFuZGxlcnNcbiAgICAvLyB0aGF0IHJlcGxhY2Ugc3RhbmRhcmQgaGFuZGxlcnNcbiAgICB0aGlzLmhhbmRsZXJzLnJldmVyc2UoKTtcbiAgfVxuXG4gIGludGVyY2VwdChcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yUmVzcG9uc2UocmVxdWVzdCwgcmVzcG9uc2UpO1xuICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGhhbmRsZUVycm9yUmVzcG9uc2UoXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICByZXNwb25zZTogSHR0cEVycm9yUmVzcG9uc2VcbiAgKSB7XG4gICAgY29uc3QgaGFuZGxlciA9IHRoaXMuZ2V0UmVzcG9uc2VIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICBpZiAoaGFuZGxlcikge1xuICAgICAgaGFuZGxlci5oYW5kbGVFcnJvcihyZXF1ZXN0LCByZXNwb25zZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybiB0aGUgZXJyb3IgaGFuZGxlciB0aGF0IG1hdGNoZXMgdGhlIGBIdHRwUmVzcG9uc2VTdGF0dXNgIGNvZGUuXG4gICAqIElmIG5vIGhhbmRsZXIgaXMgYXZhaWxhYmxlLCB0aGUgVU5LTk9XTiBoYW5kbGVyIGlzIHJldHVybmVkLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldFJlc3BvbnNlSGFuZGxlcihyZXNwb25zZTogSHR0cEVycm9yUmVzcG9uc2UpOiBIdHRwRXJyb3JIYW5kbGVyIHtcbiAgICBjb25zdCBzdGF0dXMgPSByZXNwb25zZS5zdGF0dXM7XG4gICAgbGV0IGhhbmRsZXIgPSB0aGlzLmhhbmRsZXJzLmZpbmQoaCA9PiBoLnJlc3BvbnNlU3RhdHVzID09PSBzdGF0dXMpO1xuICAgIGlmICghaGFuZGxlcikge1xuICAgICAgaGFuZGxlciA9IHRoaXMuaGFuZGxlcnMuZmluZChcbiAgICAgICAgaCA9PiBoLnJlc3BvbnNlU3RhdHVzID09PSBIdHRwUmVzcG9uc2VTdGF0dXMuVU5LTk9XTlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGhhbmRsZXI7XG4gIH1cbn1cbiJdfQ==