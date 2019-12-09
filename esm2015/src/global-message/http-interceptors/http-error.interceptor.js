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
import * as i0 from "@angular/core";
import * as i1 from "./handlers/http-error.handler";
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
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
HttpErrorInterceptor.ctorParameters = () => [
    { type: Array, decorators: [{ type: Inject, args: [HttpErrorHandler,] }] }
];
/** @nocollapse */ HttpErrorInterceptor.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function HttpErrorInterceptor_Factory() { return new HttpErrorInterceptor(i0.ɵɵinject(i1.HttpErrorHandler)); }, token: HttpErrorInterceptor, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    HttpErrorInterceptor.prototype.handlers;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1lcnJvci5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9odHRwLWludGVyY2VwdG9ycy9odHRwLWVycm9yLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEdBS2xCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDckUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7OztBQUdqRSxNQUFNLE9BQU8sb0JBQW9COzs7O0lBQy9CLFlBQ3NDLFFBQTRCO1FBQTVCLGFBQVEsR0FBUixRQUFRLENBQW9CO1FBRWhFLHVEQUF1RDtRQUN2RCxpQ0FBaUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQ1AsT0FBeUIsRUFDekIsSUFBaUI7UUFFakIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDOUIsVUFBVTs7OztRQUFDLENBQUMsUUFBYSxFQUFFLEVBQUU7WUFDM0IsSUFBSSxRQUFRLFlBQVksaUJBQWlCLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQzVDLE9BQU8sVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzdCO1FBQ0gsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFFUyxtQkFBbUIsQ0FDM0IsT0FBeUIsRUFDekIsUUFBMkI7O2NBRXJCLE9BQU8sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDO1FBQ2pELElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDeEM7SUFDSCxDQUFDOzs7Ozs7OztJQU1TLGtCQUFrQixDQUFDLFFBQTJCOztjQUNoRCxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU07O1lBQzFCLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUk7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLEtBQUssTUFBTSxFQUFDO1FBQ2xFLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDWixPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJOzs7O1lBQzFCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsS0FBSyxrQkFBa0IsQ0FBQyxPQUFPLEVBQ3JELENBQUM7U0FDSDtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7OztZQS9DRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O3dDQUc3QixNQUFNLFNBQUMsZ0JBQWdCOzs7Ozs7OztJQUF4Qix3Q0FBZ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBIdHRwRXJyb3JSZXNwb25zZSxcbiAgSHR0cEV2ZW50LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwUmVxdWVzdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSHR0cFJlc3BvbnNlU3RhdHVzIH0gZnJvbSAnLi4vbW9kZWxzL3Jlc3BvbnNlLXN0YXR1cy5tb2RlbCc7XG5pbXBvcnQgeyBIdHRwRXJyb3JIYW5kbGVyIH0gZnJvbSAnLi9oYW5kbGVycy9odHRwLWVycm9yLmhhbmRsZXInO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEh0dHBFcnJvckludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChIdHRwRXJyb3JIYW5kbGVyKSBwcm90ZWN0ZWQgaGFuZGxlcnM6IEh0dHBFcnJvckhhbmRsZXJbXVxuICApIHtcbiAgICAvLyBXZSByZXZlcnNlIHRoZSBoYW5kbGVycyB0byBhbGxvdyBmb3IgY3VzdG9tIGhhbmRsZXJzXG4gICAgLy8gdGhhdCByZXBsYWNlIHN0YW5kYXJkIGhhbmRsZXJzXG4gICAgdGhpcy5oYW5kbGVycy5yZXZlcnNlKCk7XG4gIH1cblxuICBpbnRlcmNlcHQoXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZSBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgICAgICAgdGhpcy5oYW5kbGVFcnJvclJlc3BvbnNlKHJlcXVlc3QsIHJlc3BvbnNlKTtcbiAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBoYW5kbGVFcnJvclJlc3BvbnNlKFxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgcmVzcG9uc2U6IEh0dHBFcnJvclJlc3BvbnNlXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmdldFJlc3BvbnNlSGFuZGxlcihyZXNwb25zZSk7XG4gICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgIGhhbmRsZXIuaGFuZGxlRXJyb3IocmVxdWVzdCwgcmVzcG9uc2UpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm4gdGhlIGVycm9yIGhhbmRsZXIgdGhhdCBtYXRjaGVzIHRoZSBgSHR0cFJlc3BvbnNlU3RhdHVzYCBjb2RlLlxuICAgKiBJZiBubyBoYW5kbGVyIGlzIGF2YWlsYWJsZSwgdGhlIFVOS05PV04gaGFuZGxlciBpcyByZXR1cm5lZC5cbiAgICovXG4gIHByb3RlY3RlZCBnZXRSZXNwb25zZUhhbmRsZXIocmVzcG9uc2U6IEh0dHBFcnJvclJlc3BvbnNlKTogSHR0cEVycm9ySGFuZGxlciB7XG4gICAgY29uc3Qgc3RhdHVzID0gcmVzcG9uc2Uuc3RhdHVzO1xuICAgIGxldCBoYW5kbGVyID0gdGhpcy5oYW5kbGVycy5maW5kKGggPT4gaC5yZXNwb25zZVN0YXR1cyA9PT0gc3RhdHVzKTtcbiAgICBpZiAoIWhhbmRsZXIpIHtcbiAgICAgIGhhbmRsZXIgPSB0aGlzLmhhbmRsZXJzLmZpbmQoXG4gICAgICAgIGggPT4gaC5yZXNwb25zZVN0YXR1cyA9PT0gSHR0cFJlc3BvbnNlU3RhdHVzLlVOS05PV05cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBoYW5kbGVyO1xuICB9XG59XG4iXX0=