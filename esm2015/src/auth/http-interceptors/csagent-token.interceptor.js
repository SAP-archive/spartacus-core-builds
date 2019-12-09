/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { InterceptorUtil, USE_CUSTOMER_SUPPORT_AGENT_TOKEN, } from '../../occ/utils/interceptor-util';
import { AuthService } from '../facade/auth.service';
export class CustomerSupportAgentTokenInterceptor {
    /**
     * @param {?} authService
     */
    constructor(authService) {
        this.authService = authService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        return this.getCustomerSupportAgentToken(request).pipe(take(1), switchMap((/**
         * @param {?} token
         * @return {?}
         */
        (token) => {
            if (token) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `${token.token_type} ${token.access_token}`,
                    },
                });
            }
            return next.handle(request);
        })));
    }
    /**
     * @private
     * @param {?} request
     * @return {?}
     */
    getCustomerSupportAgentToken(request) {
        if (InterceptorUtil.getInterceptorParam(USE_CUSTOMER_SUPPORT_AGENT_TOKEN, request.headers)) {
            return this.authService.getCustomerSupportAgentToken();
        }
        return of(null);
    }
}
CustomerSupportAgentTokenInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CustomerSupportAgentTokenInterceptor.ctorParameters = () => [
    { type: AuthService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomerSupportAgentTokenInterceptor.prototype.authService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NhZ2VudC10b2tlbi5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hdXRoL2h0dHAtaW50ZXJjZXB0b3JzL2NzYWdlbnQtdG9rZW4uaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU1BLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFDTCxlQUFlLEVBQ2YsZ0NBQWdDLEdBQ2pDLE1BQU0sa0NBQWtDLENBQUM7QUFDMUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBSXJELE1BQU0sT0FBTyxvQ0FBb0M7Ozs7SUFDL0MsWUFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBRyxDQUFDOzs7Ozs7SUFFaEQsU0FBUyxDQUNQLE9BQXlCLEVBQ3pCLElBQWlCO1FBRWpCLE9BQU8sSUFBSSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDcEQsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQWdCLEVBQUUsRUFBRTtZQUM3QixJQUFJLEtBQUssRUFBRTtnQkFDVCxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFDdEIsVUFBVSxFQUFFO3dCQUNWLGFBQWEsRUFBRSxHQUFHLEtBQUssQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDLFlBQVksRUFBRTtxQkFDM0Q7aUJBQ0YsQ0FBQyxDQUFDO2FBQ0o7WUFDRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLDRCQUE0QixDQUNsQyxPQUF5QjtRQUV6QixJQUNFLGVBQWUsQ0FBQyxtQkFBbUIsQ0FDakMsZ0NBQWdDLEVBQ2hDLE9BQU8sQ0FBQyxPQUFPLENBQ2hCLEVBQ0Q7WUFDQSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztTQUN4RDtRQUNELE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xCLENBQUM7OztZQW5DRixVQUFVOzs7O1lBSEYsV0FBVzs7Ozs7OztJQUtOLDJEQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEh0dHBFdmVudCxcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBJbnRlcmNlcHRvcixcbiAgSHR0cFJlcXVlc3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBJbnRlcmNlcHRvclV0aWwsXG4gIFVTRV9DVVNUT01FUl9TVVBQT1JUX0FHRU5UX1RPS0VOLFxufSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvaW50ZXJjZXB0b3ItdXRpbCc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlclRva2VuIH0gZnJvbSAnLi4vbW9kZWxzL3Rva2VuLXR5cGVzLm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW5JbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7fVxuXG4gIGludGVyY2VwdChcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuKHJlcXVlc3QpLnBpcGUoXG4gICAgICB0YWtlKDEpLFxuICAgICAgc3dpdGNoTWFwKCh0b2tlbjogVXNlclRva2VuKSA9PiB7XG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgIHJlcXVlc3QgPSByZXF1ZXN0LmNsb25lKHtcbiAgICAgICAgICAgIHNldEhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7dG9rZW4udG9rZW5fdHlwZX0gJHt0b2tlbi5hY2Nlc3NfdG9rZW59YCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuKFxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT5cbiAgKTogT2JzZXJ2YWJsZTxVc2VyVG9rZW4+IHtcbiAgICBpZiAoXG4gICAgICBJbnRlcmNlcHRvclV0aWwuZ2V0SW50ZXJjZXB0b3JQYXJhbShcbiAgICAgICAgVVNFX0NVU1RPTUVSX1NVUFBPUlRfQUdFTlRfVE9LRU4sXG4gICAgICAgIHJlcXVlc3QuaGVhZGVyc1xuICAgICAgKVxuICAgICkge1xuICAgICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuZ2V0Q3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbigpO1xuICAgIH1cbiAgICByZXR1cm4gb2YobnVsbCk7XG4gIH1cbn1cbiJdfQ==