/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { EMPTY, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { InterceptorUtil, TOKEN_REVOCATION_HEADER, } from '../../occ/utils/interceptor-util';
import * as i0 from "@angular/core";
export class TokenRevocationInterceptor {
    constructor() { }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        /** @type {?} */
        const isTokenRevocationRequest = this.isTokenRevocationRequest(request);
        if (isTokenRevocationRequest) {
            request = InterceptorUtil.removeHeader(TOKEN_REVOCATION_HEADER, request);
        }
        return next.handle(request).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            if (isTokenRevocationRequest) {
                return EMPTY;
            }
            return throwError(error);
        })));
    }
    /**
     * @protected
     * @param {?} request
     * @return {?}
     */
    isTokenRevocationRequest(request) {
        /** @type {?} */
        const isTokenRevocationHeaderPresent = InterceptorUtil.getInterceptorParam(TOKEN_REVOCATION_HEADER, request.headers);
        return Boolean(isTokenRevocationHeaderPresent);
    }
}
TokenRevocationInterceptor.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
TokenRevocationInterceptor.ctorParameters = () => [];
/** @nocollapse */ TokenRevocationInterceptor.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TokenRevocationInterceptor_Factory() { return new TokenRevocationInterceptor(); }, token: TokenRevocationInterceptor, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4tcmV2b2NhdGlvbi5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hdXRoL2h0dHAtaW50ZXJjZXB0b3JzL3Rva2VuLXJldm9jYXRpb24uaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU1BLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEtBQUssRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFDTCxlQUFlLEVBQ2YsdUJBQXVCLEdBQ3hCLE1BQU0sa0NBQWtDLENBQUM7O0FBRzFDLE1BQU0sT0FBTywwQkFBMEI7SUFDckMsZ0JBQWUsQ0FBQzs7Ozs7O0lBRWhCLFNBQVMsQ0FDUCxPQUF5QixFQUN6QixJQUFpQjs7Y0FFWCx3QkFBd0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsT0FBTyxDQUFDO1FBQ3ZFLElBQUksd0JBQXdCLEVBQUU7WUFDNUIsT0FBTyxHQUFHLGVBQWUsQ0FBQyxZQUFZLENBQUMsdUJBQXVCLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDMUU7UUFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM5QixVQUFVOzs7O1FBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUN4QixJQUFJLHdCQUF3QixFQUFFO2dCQUM1QixPQUFPLEtBQUssQ0FBQzthQUNkO1lBQ0QsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVTLHdCQUF3QixDQUFDLE9BQXlCOztjQUNwRCw4QkFBOEIsR0FBRyxlQUFlLENBQUMsbUJBQW1CLENBRXhFLHVCQUF1QixFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDM0MsT0FBTyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7WUE1QkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEh0dHBFdmVudCxcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBJbnRlcmNlcHRvcixcbiAgSHR0cFJlcXVlc3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVNUFRZLCBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgSW50ZXJjZXB0b3JVdGlsLFxuICBUT0tFTl9SRVZPQ0FUSU9OX0hFQURFUixcbn0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL2ludGVyY2VwdG9yLXV0aWwnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFRva2VuUmV2b2NhdGlvbkludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGludGVyY2VwdChcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICBjb25zdCBpc1Rva2VuUmV2b2NhdGlvblJlcXVlc3QgPSB0aGlzLmlzVG9rZW5SZXZvY2F0aW9uUmVxdWVzdChyZXF1ZXN0KTtcbiAgICBpZiAoaXNUb2tlblJldm9jYXRpb25SZXF1ZXN0KSB7XG4gICAgICByZXF1ZXN0ID0gSW50ZXJjZXB0b3JVdGlsLnJlbW92ZUhlYWRlcihUT0tFTl9SRVZPQ0FUSU9OX0hFQURFUiwgcmVxdWVzdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgIGlmIChpc1Rva2VuUmV2b2NhdGlvblJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm4gRU1QVFk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzVG9rZW5SZXZvY2F0aW9uUmVxdWVzdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+KTogYm9vbGVhbiB7XG4gICAgY29uc3QgaXNUb2tlblJldm9jYXRpb25IZWFkZXJQcmVzZW50ID0gSW50ZXJjZXB0b3JVdGlsLmdldEludGVyY2VwdG9yUGFyYW08XG4gICAgICBzdHJpbmdcbiAgICA+KFRPS0VOX1JFVk9DQVRJT05fSEVBREVSLCByZXF1ZXN0LmhlYWRlcnMpO1xuICAgIHJldHVybiBCb29sZWFuKGlzVG9rZW5SZXZvY2F0aW9uSGVhZGVyUHJlc2VudCk7XG4gIH1cbn1cbiJdfQ==