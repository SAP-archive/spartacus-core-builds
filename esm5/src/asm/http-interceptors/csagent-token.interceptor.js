/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { InterceptorUtil, USE_CUSTOMER_SUPPORT_AGENT_TOKEN, } from '../../occ/utils/interceptor-util';
import { AsmAuthService } from '../facade/asm-auth.service';
import * as i0 from "@angular/core";
import * as i1 from "../facade/asm-auth.service";
var CustomerSupportAgentTokenInterceptor = /** @class */ (function () {
    function CustomerSupportAgentTokenInterceptor(asmAuthService) {
        this.asmAuthService = asmAuthService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    CustomerSupportAgentTokenInterceptor.prototype.intercept = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        return this.getCustomerSupportAgentToken(request).pipe(take(1), switchMap((/**
         * @param {?} token
         * @return {?}
         */
        function (token) {
            if (token) {
                request = request.clone({
                    setHeaders: {
                        Authorization: token.token_type + " " + token.access_token,
                    },
                });
            }
            return next.handle(request);
        })));
    };
    /**
     * @private
     * @param {?} request
     * @return {?}
     */
    CustomerSupportAgentTokenInterceptor.prototype.getCustomerSupportAgentToken = /**
     * @private
     * @param {?} request
     * @return {?}
     */
    function (request) {
        if (InterceptorUtil.getInterceptorParam(USE_CUSTOMER_SUPPORT_AGENT_TOKEN, request.headers)) {
            return this.asmAuthService.getCustomerSupportAgentToken();
        }
        return of(null);
    };
    CustomerSupportAgentTokenInterceptor.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    CustomerSupportAgentTokenInterceptor.ctorParameters = function () { return [
        { type: AsmAuthService }
    ]; };
    /** @nocollapse */ CustomerSupportAgentTokenInterceptor.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CustomerSupportAgentTokenInterceptor_Factory() { return new CustomerSupportAgentTokenInterceptor(i0.ɵɵinject(i1.AsmAuthService)); }, token: CustomerSupportAgentTokenInterceptor, providedIn: "root" });
    return CustomerSupportAgentTokenInterceptor;
}());
export { CustomerSupportAgentTokenInterceptor };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomerSupportAgentTokenInterceptor.prototype.asmAuthService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NhZ2VudC10b2tlbi5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hc20vaHR0cC1pbnRlcmNlcHRvcnMvY3NhZ2VudC10b2tlbi5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBTUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUNMLGVBQWUsRUFDZixnQ0FBZ0MsR0FDakMsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7OztBQUc1RDtJQUVFLDhDQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFBRyxDQUFDOzs7Ozs7SUFFdEQsd0RBQVM7Ozs7O0lBQVQsVUFDRSxPQUF5QixFQUN6QixJQUFpQjtRQUVqQixPQUFPLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQ3BELElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxTQUFTOzs7O1FBQUMsVUFBQyxLQUFnQjtZQUN6QixJQUFJLEtBQUssRUFBRTtnQkFDVCxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFDdEIsVUFBVSxFQUFFO3dCQUNWLGFBQWEsRUFBSyxLQUFLLENBQUMsVUFBVSxTQUFJLEtBQUssQ0FBQyxZQUFjO3FCQUMzRDtpQkFDRixDQUFDLENBQUM7YUFDSjtZQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sMkVBQTRCOzs7OztJQUFwQyxVQUNFLE9BQXlCO1FBRXpCLElBQ0UsZUFBZSxDQUFDLG1CQUFtQixDQUNqQyxnQ0FBZ0MsRUFDaEMsT0FBTyxDQUFDLE9BQU8sQ0FDaEIsRUFDRDtZQUNBLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO1NBQzNEO1FBQ0QsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsQ0FBQzs7Z0JBbkNGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBSHpCLGNBQWM7OzsrQ0FidkI7Q0FvREMsQUFwQ0QsSUFvQ0M7U0FuQ1ksb0NBQW9DOzs7Ozs7SUFDbkMsOERBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSHR0cEV2ZW50LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwUmVxdWVzdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN3aXRjaE1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIEludGVyY2VwdG9yVXRpbCxcbiAgVVNFX0NVU1RPTUVSX1NVUFBPUlRfQUdFTlRfVE9LRU4sXG59IGZyb20gJy4uLy4uL29jYy91dGlscy9pbnRlcmNlcHRvci11dGlsJztcbmltcG9ydCB7IEFzbUF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL2FzbS1hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlclRva2VuIH0gZnJvbSAnLi4vLi4vYXV0aC9tb2RlbHMvdG9rZW4tdHlwZXMubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW5JbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXNtQXV0aFNlcnZpY2U6IEFzbUF1dGhTZXJ2aWNlKSB7fVxuXG4gIGludGVyY2VwdChcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuKHJlcXVlc3QpLnBpcGUoXG4gICAgICB0YWtlKDEpLFxuICAgICAgc3dpdGNoTWFwKCh0b2tlbjogVXNlclRva2VuKSA9PiB7XG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgIHJlcXVlc3QgPSByZXF1ZXN0LmNsb25lKHtcbiAgICAgICAgICAgIHNldEhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7dG9rZW4udG9rZW5fdHlwZX0gJHt0b2tlbi5hY2Nlc3NfdG9rZW59YCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuKFxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT5cbiAgKTogT2JzZXJ2YWJsZTxVc2VyVG9rZW4+IHtcbiAgICBpZiAoXG4gICAgICBJbnRlcmNlcHRvclV0aWwuZ2V0SW50ZXJjZXB0b3JQYXJhbShcbiAgICAgICAgVVNFX0NVU1RPTUVSX1NVUFBPUlRfQUdFTlRfVE9LRU4sXG4gICAgICAgIHJlcXVlc3QuaGVhZGVyc1xuICAgICAgKVxuICAgICkge1xuICAgICAgcmV0dXJuIHRoaXMuYXNtQXV0aFNlcnZpY2UuZ2V0Q3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbigpO1xuICAgIH1cbiAgICByZXR1cm4gb2YobnVsbCk7XG4gIH1cbn1cbiJdfQ==