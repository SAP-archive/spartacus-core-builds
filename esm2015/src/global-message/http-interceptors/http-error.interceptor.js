/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpErrorResponse, } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpResponseStatus } from '../models/response-status.model';
import { HttpErrorHandler } from './handlers/http-error.handler';
export class HttpErrorInterceptor {
    /**
     * @param {?} handlers
     */
    constructor(handlers) {
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
    intercept(request, next) {
        return next.handle(request).pipe(catchError((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            if (response instanceof HttpErrorResponse) {
                this.handleErrorResponse(request, response);
                return throwError(response);
            }
        })));
    }
    /**
     * @protected
     * @param {?} request
     * @param {?} response
     * @return {?}
     */
    handleErrorResponse(request, response) {
        /** @type {?} */
        const handler = this.getResponseHandler(response);
        if (handler) {
            handler.handleError(request, response);
        }
    }
    /**
     * return the error handler that matches the `HttpResponseStatus` code.
     * If no handler is available, the UNKNOWN handler is returned.
     * @protected
     * @param {?} response
     * @return {?}
     */
    getResponseHandler(response) {
        /** @type {?} */
        const status = response.status;
        /** @type {?} */
        let handler = this.handlers.find((/**
         * @param {?} h
         * @return {?}
         */
        h => h.responseStatus === status));
        if (!handler) {
            handler = this.handlers.find((/**
             * @param {?} h
             * @return {?}
             */
            h => h.responseStatus === HttpResponseStatus.UNKNOWN));
        }
        return handler;
    }
}
HttpErrorInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
HttpErrorInterceptor.ctorParameters = () => [
    { type: Array, decorators: [{ type: Inject, args: [HttpErrorHandler,] }] }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    HttpErrorInterceptor.prototype.handlers;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1lcnJvci5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9odHRwLWludGVyY2VwdG9ycy9odHRwLWVycm9yLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEdBS2xCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDckUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFHakUsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUMvQixZQUNzQyxRQUE0QjtRQUE1QixhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUVoRSx1REFBdUQ7UUFDdkQsaUNBQWlDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUNQLE9BQXlCLEVBQ3pCLElBQWlCO1FBRWpCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQzlCLFVBQVU7Ozs7UUFBQyxDQUFDLFFBQWEsRUFBRSxFQUFFO1lBQzNCLElBQUksUUFBUSxZQUFZLGlCQUFpQixFQUFFO2dCQUN6QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUM1QyxPQUFPLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM3QjtRQUNILENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7O0lBRVMsbUJBQW1CLENBQzNCLE9BQXlCLEVBQ3pCLFFBQTJCOztjQUVyQixPQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQztRQUNqRCxJQUFJLE9BQU8sRUFBRTtZQUNYLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQzs7Ozs7Ozs7SUFNUyxrQkFBa0IsQ0FBQyxRQUEyQjs7Y0FDaEQsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNOztZQUMxQixPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxLQUFLLE1BQU0sRUFBQztRQUNsRSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSTs7OztZQUMxQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLEtBQUssa0JBQWtCLENBQUMsT0FBTyxFQUNyRCxDQUFDO1NBQ0g7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs7WUEvQ0YsVUFBVTs7Ozt3Q0FHTixNQUFNLFNBQUMsZ0JBQWdCOzs7Ozs7O0lBQXhCLHdDQUFnRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEh0dHBFcnJvclJlc3BvbnNlLFxuICBIdHRwRXZlbnQsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBSZXF1ZXN0LFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBIdHRwUmVzcG9uc2VTdGF0dXMgfSBmcm9tICcuLi9tb2RlbHMvcmVzcG9uc2Utc3RhdHVzLm1vZGVsJztcbmltcG9ydCB7IEh0dHBFcnJvckhhbmRsZXIgfSBmcm9tICcuL2hhbmRsZXJzL2h0dHAtZXJyb3IuaGFuZGxlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIdHRwRXJyb3JJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoSHR0cEVycm9ySGFuZGxlcikgcHJvdGVjdGVkIGhhbmRsZXJzOiBIdHRwRXJyb3JIYW5kbGVyW11cbiAgKSB7XG4gICAgLy8gV2UgcmV2ZXJzZSB0aGUgaGFuZGxlcnMgdG8gYWxsb3cgZm9yIGN1c3RvbSBoYW5kbGVyc1xuICAgIC8vIHRoYXQgcmVwbGFjZSBzdGFuZGFyZCBoYW5kbGVyc1xuICAgIHRoaXMuaGFuZGxlcnMucmV2ZXJzZSgpO1xuICB9XG5cbiAgaW50ZXJjZXB0KFxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgbmV4dDogSHR0cEhhbmRsZXJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkge1xuICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3JSZXNwb25zZShyZXF1ZXN0LCByZXNwb25zZSk7XG4gICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaGFuZGxlRXJyb3JSZXNwb25zZShcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIHJlc3BvbnNlOiBIdHRwRXJyb3JSZXNwb25zZVxuICApOiB2b2lkIHtcbiAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5nZXRSZXNwb25zZUhhbmRsZXIocmVzcG9uc2UpO1xuICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICBoYW5kbGVyLmhhbmRsZUVycm9yKHJlcXVlc3QsIHJlc3BvbnNlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJuIHRoZSBlcnJvciBoYW5kbGVyIHRoYXQgbWF0Y2hlcyB0aGUgYEh0dHBSZXNwb25zZVN0YXR1c2AgY29kZS5cbiAgICogSWYgbm8gaGFuZGxlciBpcyBhdmFpbGFibGUsIHRoZSBVTktOT1dOIGhhbmRsZXIgaXMgcmV0dXJuZWQuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0UmVzcG9uc2VIYW5kbGVyKHJlc3BvbnNlOiBIdHRwRXJyb3JSZXNwb25zZSk6IEh0dHBFcnJvckhhbmRsZXIge1xuICAgIGNvbnN0IHN0YXR1cyA9IHJlc3BvbnNlLnN0YXR1cztcbiAgICBsZXQgaGFuZGxlciA9IHRoaXMuaGFuZGxlcnMuZmluZChoID0+IGgucmVzcG9uc2VTdGF0dXMgPT09IHN0YXR1cyk7XG4gICAgaWYgKCFoYW5kbGVyKSB7XG4gICAgICBoYW5kbGVyID0gdGhpcy5oYW5kbGVycy5maW5kKFxuICAgICAgICBoID0+IGgucmVzcG9uc2VTdGF0dXMgPT09IEh0dHBSZXNwb25zZVN0YXR1cy5VTktOT1dOXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gaGFuZGxlcjtcbiAgfVxufVxuIl19