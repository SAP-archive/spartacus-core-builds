import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { InterceptorUtil, USE_CUSTOMER_SUPPORT_AGENT_TOKEN, } from '../../occ/utils/interceptor-util';
import { AsmAuthService } from '../facade/asm-auth.service';
import * as i0 from "@angular/core";
import * as i1 from "../facade/asm-auth.service";
let CustomerSupportAgentTokenInterceptor = class CustomerSupportAgentTokenInterceptor {
    constructor(asmAuthService) {
        this.asmAuthService = asmAuthService;
    }
    intercept(request, next) {
        return this.getCustomerSupportAgentToken(request).pipe(take(1), switchMap((token) => {
            if (token) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `${token.token_type} ${token.access_token}`,
                    },
                });
            }
            return next.handle(request);
        }));
    }
    getCustomerSupportAgentToken(request) {
        if (InterceptorUtil.getInterceptorParam(USE_CUSTOMER_SUPPORT_AGENT_TOKEN, request.headers)) {
            return this.asmAuthService.getCustomerSupportAgentToken();
        }
        return of(null);
    }
};
CustomerSupportAgentTokenInterceptor.ctorParameters = () => [
    { type: AsmAuthService }
];
CustomerSupportAgentTokenInterceptor.ɵprov = i0.ɵɵdefineInjectable({ factory: function CustomerSupportAgentTokenInterceptor_Factory() { return new CustomerSupportAgentTokenInterceptor(i0.ɵɵinject(i1.AsmAuthService)); }, token: CustomerSupportAgentTokenInterceptor, providedIn: "root" });
CustomerSupportAgentTokenInterceptor = __decorate([
    Injectable({ providedIn: 'root' })
], CustomerSupportAgentTokenInterceptor);
export { CustomerSupportAgentTokenInterceptor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NhZ2VudC10b2tlbi5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hc20vaHR0cC1pbnRlcmNlcHRvcnMvY3NhZ2VudC10b2tlbi5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBTUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUNMLGVBQWUsRUFDZixnQ0FBZ0MsR0FDakMsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7OztBQUk1RCxJQUFhLG9DQUFvQyxHQUFqRCxNQUFhLG9DQUFvQztJQUMvQyxZQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFBRyxDQUFDO0lBRXRELFNBQVMsQ0FDUCxPQUF5QixFQUN6QixJQUFpQjtRQUVqQixPQUFPLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQ3BELElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxTQUFTLENBQUMsQ0FBQyxLQUFnQixFQUFFLEVBQUU7WUFDN0IsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7b0JBQ3RCLFVBQVUsRUFBRTt3QkFDVixhQUFhLEVBQUUsR0FBRyxLQUFLLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxZQUFZLEVBQUU7cUJBQzNEO2lCQUNGLENBQUMsQ0FBQzthQUNKO1lBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRU8sNEJBQTRCLENBQ2xDLE9BQXlCO1FBRXpCLElBQ0UsZUFBZSxDQUFDLG1CQUFtQixDQUNqQyxnQ0FBZ0MsRUFDaEMsT0FBTyxDQUFDLE9BQU8sQ0FDaEIsRUFDRDtZQUNBLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO1NBQzNEO1FBQ0QsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsQ0FBQztDQUNGLENBQUE7O1lBbENxQyxjQUFjOzs7QUFEdkMsb0NBQW9DO0lBRGhELFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztHQUN0QixvQ0FBb0MsQ0FtQ2hEO1NBbkNZLG9DQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEh0dHBFdmVudCxcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBJbnRlcmNlcHRvcixcbiAgSHR0cFJlcXVlc3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBJbnRlcmNlcHRvclV0aWwsXG4gIFVTRV9DVVNUT01FUl9TVVBQT1JUX0FHRU5UX1RPS0VOLFxufSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvaW50ZXJjZXB0b3ItdXRpbCc7XG5pbXBvcnQgeyBBc21BdXRoU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9hc20tYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJUb2tlbiB9IGZyb20gJy4uLy4uL2F1dGgvbW9kZWxzL3Rva2VuLXR5cGVzLm1vZGVsJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFzbUF1dGhTZXJ2aWNlOiBBc21BdXRoU2VydmljZSkge31cblxuICBpbnRlcmNlcHQoXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbihyZXF1ZXN0KS5waXBlKFxuICAgICAgdGFrZSgxKSxcbiAgICAgIHN3aXRjaE1hcCgodG9rZW46IFVzZXJUb2tlbikgPT4ge1xuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICByZXF1ZXN0ID0gcmVxdWVzdC5jbG9uZSh7XG4gICAgICAgICAgICBzZXRIZWFkZXJzOiB7XG4gICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke3Rva2VuLnRva2VuX3R5cGV9ICR7dG9rZW4uYWNjZXNzX3Rva2VufWAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbihcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+XG4gICk6IE9ic2VydmFibGU8VXNlclRva2VuPiB7XG4gICAgaWYgKFxuICAgICAgSW50ZXJjZXB0b3JVdGlsLmdldEludGVyY2VwdG9yUGFyYW0oXG4gICAgICAgIFVTRV9DVVNUT01FUl9TVVBQT1JUX0FHRU5UX1RPS0VOLFxuICAgICAgICByZXF1ZXN0LmhlYWRlcnNcbiAgICAgIClcbiAgICApIHtcbiAgICAgIHJldHVybiB0aGlzLmFzbUF1dGhTZXJ2aWNlLmdldEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW4oKTtcbiAgICB9XG4gICAgcmV0dXJuIG9mKG51bGwpO1xuICB9XG59XG4iXX0=