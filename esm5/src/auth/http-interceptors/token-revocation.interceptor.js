/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { EMPTY, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { InterceptorUtil, TOKEN_REVOCATION_HEADER, } from '../../occ/utils/interceptor-util';
import * as i0 from "@angular/core";
var TokenRevocationInterceptor = /** @class */ (function () {
    function TokenRevocationInterceptor() {
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    TokenRevocationInterceptor.prototype.intercept = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        /** @type {?} */
        var isTokenRevocationRequest = this.isTokenRevocationRequest(request);
        if (isTokenRevocationRequest) {
            request = InterceptorUtil.removeHeader(TOKEN_REVOCATION_HEADER, request);
        }
        return next.handle(request).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            if (isTokenRevocationRequest) {
                return EMPTY;
            }
            return throwError(error);
        })));
    };
    /**
     * @protected
     * @param {?} request
     * @return {?}
     */
    TokenRevocationInterceptor.prototype.isTokenRevocationRequest = /**
     * @protected
     * @param {?} request
     * @return {?}
     */
    function (request) {
        /** @type {?} */
        var isTokenRevocationHeaderPresent = InterceptorUtil.getInterceptorParam(TOKEN_REVOCATION_HEADER, request.headers);
        return Boolean(isTokenRevocationHeaderPresent);
    };
    TokenRevocationInterceptor.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    TokenRevocationInterceptor.ctorParameters = function () { return []; };
    /** @nocollapse */ TokenRevocationInterceptor.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TokenRevocationInterceptor_Factory() { return new TokenRevocationInterceptor(); }, token: TokenRevocationInterceptor, providedIn: "root" });
    return TokenRevocationInterceptor;
}());
export { TokenRevocationInterceptor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4tcmV2b2NhdGlvbi5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hdXRoL2h0dHAtaW50ZXJjZXB0b3JzL3Rva2VuLXJldm9jYXRpb24uaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU1BLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEtBQUssRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFDTCxlQUFlLEVBQ2YsdUJBQXVCLEdBQ3hCLE1BQU0sa0NBQWtDLENBQUM7O0FBRTFDO0lBRUU7SUFBZSxDQUFDOzs7Ozs7SUFFaEIsOENBQVM7Ozs7O0lBQVQsVUFDRSxPQUF5QixFQUN6QixJQUFpQjs7WUFFWCx3QkFBd0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsT0FBTyxDQUFDO1FBQ3ZFLElBQUksd0JBQXdCLEVBQUU7WUFDNUIsT0FBTyxHQUFHLGVBQWUsQ0FBQyxZQUFZLENBQUMsdUJBQXVCLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDMUU7UUFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM5QixVQUFVOzs7O1FBQUMsVUFBQyxLQUFVO1lBQ3BCLElBQUksd0JBQXdCLEVBQUU7Z0JBQzVCLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFDRCxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRVMsNkRBQXdCOzs7OztJQUFsQyxVQUFtQyxPQUF5Qjs7WUFDcEQsOEJBQThCLEdBQUcsZUFBZSxDQUFDLG1CQUFtQixDQUV4RSx1QkFBdUIsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQzNDLE9BQU8sT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7SUFDakQsQ0FBQzs7Z0JBNUJGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7O3FDQWRsQztDQTJDQyxBQTdCRCxJQTZCQztTQTVCWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBIdHRwRXZlbnQsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBSZXF1ZXN0LFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFTVBUWSwgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIEludGVyY2VwdG9yVXRpbCxcbiAgVE9LRU5fUkVWT0NBVElPTl9IRUFERVIsXG59IGZyb20gJy4uLy4uL29jYy91dGlscy9pbnRlcmNlcHRvci11dGlsJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBUb2tlblJldm9jYXRpb25JbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBpbnRlcmNlcHQoXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgY29uc3QgaXNUb2tlblJldm9jYXRpb25SZXF1ZXN0ID0gdGhpcy5pc1Rva2VuUmV2b2NhdGlvblJlcXVlc3QocmVxdWVzdCk7XG4gICAgaWYgKGlzVG9rZW5SZXZvY2F0aW9uUmVxdWVzdCkge1xuICAgICAgcmVxdWVzdCA9IEludGVyY2VwdG9yVXRpbC5yZW1vdmVIZWFkZXIoVE9LRU5fUkVWT0NBVElPTl9IRUFERVIsIHJlcXVlc3QpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICBpZiAoaXNUb2tlblJldm9jYXRpb25SZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuIEVNUFRZO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpc1Rva2VuUmV2b2NhdGlvblJlcXVlc3QocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55Pik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlzVG9rZW5SZXZvY2F0aW9uSGVhZGVyUHJlc2VudCA9IEludGVyY2VwdG9yVXRpbC5nZXRJbnRlcmNlcHRvclBhcmFtPFxuICAgICAgc3RyaW5nXG4gICAgPihUT0tFTl9SRVZPQ0FUSU9OX0hFQURFUiwgcmVxdWVzdC5oZWFkZXJzKTtcbiAgICByZXR1cm4gQm9vbGVhbihpc1Rva2VuUmV2b2NhdGlvbkhlYWRlclByZXNlbnQpO1xuICB9XG59XG4iXX0=