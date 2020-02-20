import { __decorate } from "tslib";
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
    CustomerSupportAgentTokenInterceptor.prototype.intercept = function (request, next) {
        return this.getCustomerSupportAgentToken(request).pipe(take(1), switchMap(function (token) {
            if (token) {
                request = request.clone({
                    setHeaders: {
                        Authorization: token.token_type + " " + token.access_token,
                    },
                });
            }
            return next.handle(request);
        }));
    };
    CustomerSupportAgentTokenInterceptor.prototype.getCustomerSupportAgentToken = function (request) {
        if (InterceptorUtil.getInterceptorParam(USE_CUSTOMER_SUPPORT_AGENT_TOKEN, request.headers)) {
            return this.asmAuthService.getCustomerSupportAgentToken();
        }
        return of(null);
    };
    CustomerSupportAgentTokenInterceptor.ctorParameters = function () { return [
        { type: AsmAuthService }
    ]; };
    CustomerSupportAgentTokenInterceptor.ɵprov = i0.ɵɵdefineInjectable({ factory: function CustomerSupportAgentTokenInterceptor_Factory() { return new CustomerSupportAgentTokenInterceptor(i0.ɵɵinject(i1.AsmAuthService)); }, token: CustomerSupportAgentTokenInterceptor, providedIn: "root" });
    CustomerSupportAgentTokenInterceptor = __decorate([
        Injectable({ providedIn: 'root' })
    ], CustomerSupportAgentTokenInterceptor);
    return CustomerSupportAgentTokenInterceptor;
}());
export { CustomerSupportAgentTokenInterceptor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NhZ2VudC10b2tlbi5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hc20vaHR0cC1pbnRlcmNlcHRvcnMvY3NhZ2VudC10b2tlbi5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBTUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUNMLGVBQWUsRUFDZixnQ0FBZ0MsR0FDakMsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7OztBQUk1RDtJQUNFLDhDQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFBRyxDQUFDO0lBRXRELHdEQUFTLEdBQVQsVUFDRSxPQUF5QixFQUN6QixJQUFpQjtRQUVqQixPQUFPLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQ3BELElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxTQUFTLENBQUMsVUFBQyxLQUFnQjtZQUN6QixJQUFJLEtBQUssRUFBRTtnQkFDVCxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFDdEIsVUFBVSxFQUFFO3dCQUNWLGFBQWEsRUFBSyxLQUFLLENBQUMsVUFBVSxTQUFJLEtBQUssQ0FBQyxZQUFjO3FCQUMzRDtpQkFDRixDQUFDLENBQUM7YUFDSjtZQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVPLDJFQUE0QixHQUFwQyxVQUNFLE9BQXlCO1FBRXpCLElBQ0UsZUFBZSxDQUFDLG1CQUFtQixDQUNqQyxnQ0FBZ0MsRUFDaEMsT0FBTyxDQUFDLE9BQU8sQ0FDaEIsRUFDRDtZQUNBLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO1NBQzNEO1FBQ0QsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsQ0FBQzs7Z0JBakNtQyxjQUFjOzs7SUFEdkMsb0NBQW9DO1FBRGhELFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztPQUN0QixvQ0FBb0MsQ0FtQ2hEOytDQXBERDtDQW9EQyxBQW5DRCxJQW1DQztTQW5DWSxvQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBIdHRwRXZlbnQsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBSZXF1ZXN0LFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgSW50ZXJjZXB0b3JVdGlsLFxuICBVU0VfQ1VTVE9NRVJfU1VQUE9SVF9BR0VOVF9UT0tFTixcbn0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL2ludGVyY2VwdG9yLXV0aWwnO1xuaW1wb3J0IHsgQXNtQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvYXNtLWF1dGguc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyVG9rZW4gfSBmcm9tICcuLi8uLi9hdXRoL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbkludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhc21BdXRoU2VydmljZTogQXNtQXV0aFNlcnZpY2UpIHt9XG5cbiAgaW50ZXJjZXB0KFxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgbmV4dDogSHR0cEhhbmRsZXJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIHJldHVybiB0aGlzLmdldEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW4ocmVxdWVzdCkucGlwZShcbiAgICAgIHRha2UoMSksXG4gICAgICBzd2l0Y2hNYXAoKHRva2VuOiBVc2VyVG9rZW4pID0+IHtcbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgcmVxdWVzdCA9IHJlcXVlc3QuY2xvbmUoe1xuICAgICAgICAgICAgc2V0SGVhZGVyczoge1xuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHt0b2tlbi50b2tlbl90eXBlfSAke3Rva2VuLmFjY2Vzc190b2tlbn1gLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW4oXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PlxuICApOiBPYnNlcnZhYmxlPFVzZXJUb2tlbj4ge1xuICAgIGlmIChcbiAgICAgIEludGVyY2VwdG9yVXRpbC5nZXRJbnRlcmNlcHRvclBhcmFtKFxuICAgICAgICBVU0VfQ1VTVE9NRVJfU1VQUE9SVF9BR0VOVF9UT0tFTixcbiAgICAgICAgcmVxdWVzdC5oZWFkZXJzXG4gICAgICApXG4gICAgKSB7XG4gICAgICByZXR1cm4gdGhpcy5hc21BdXRoU2VydmljZS5nZXRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuKCk7XG4gICAgfVxuICAgIHJldHVybiBvZihudWxsKTtcbiAgfVxufVxuIl19