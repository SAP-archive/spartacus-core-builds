import { HttpErrorResponse, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError, switchMap, take } from 'rxjs/operators';
import { OccEndpointsService } from '../../../occ/services/occ-endpoints.service';
import { InterceptorUtil, USE_CLIENT_TOKEN, } from '../../../occ/utils/interceptor-util';
import { ClientErrorHandlingService } from '../services/client-error-handling.service';
import { ClientTokenService } from '../services/client-token.service';
import * as i0 from "@angular/core";
import * as i1 from "../services/client-token.service";
import * as i2 from "../services/client-error-handling.service";
import * as i3 from "../../../occ/services/occ-endpoints.service";
/**
 * Interceptor for handling requests with `USE_CLIENT_TOKEN` header.
 * Provides `Authorization` header with client token and handles errors related to client auth.
 */
export class ClientTokenInterceptor {
    constructor(clientTokenService, clientErrorHandlingService, occEndpoints) {
        this.clientTokenService = clientTokenService;
        this.clientErrorHandlingService = clientErrorHandlingService;
        this.occEndpoints = occEndpoints;
    }
    intercept(request, next) {
        const isClientTokenRequest = this.isClientTokenRequest(request);
        if (isClientTokenRequest) {
            request = InterceptorUtil.removeHeader(USE_CLIENT_TOKEN, request);
        }
        return this.getClientToken(isClientTokenRequest).pipe(take(1), switchMap((token) => {
            if ((token === null || token === void 0 ? void 0 : token.access_token) &&
                request.url.includes(this.occEndpoints.getBaseEndpoint())) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `${token.token_type || 'Bearer'} ${token.access_token}`,
                    },
                });
            }
            return next.handle(request).pipe(catchError((errResponse) => {
                if (errResponse instanceof HttpErrorResponse) {
                    if (errResponse.status === 401) {
                        if (isClientTokenRequest) {
                            if (this.isExpiredToken(errResponse)) {
                                return this.clientErrorHandlingService.handleExpiredClientToken(request, next);
                            }
                        }
                    }
                }
                return throwError(errResponse);
            }));
        }));
    }
    getClientToken(isClientTokenRequest) {
        if (isClientTokenRequest) {
            return this.clientTokenService.getClientToken();
        }
        return of(null);
    }
    isClientTokenRequest(request) {
        const isRequestMapping = InterceptorUtil.getInterceptorParam(USE_CLIENT_TOKEN, request.headers);
        return Boolean(isRequestMapping);
    }
    isExpiredToken(resp) {
        var _a, _b, _c;
        return ((_c = (_b = (_a = resp.error) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.type) === 'InvalidTokenError';
    }
}
ClientTokenInterceptor.ɵprov = i0.ɵɵdefineInjectable({ factory: function ClientTokenInterceptor_Factory() { return new ClientTokenInterceptor(i0.ɵɵinject(i1.ClientTokenService), i0.ɵɵinject(i2.ClientErrorHandlingService), i0.ɵɵinject(i3.OccEndpointsService)); }, token: ClientTokenInterceptor, providedIn: "root" });
ClientTokenInterceptor.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
ClientTokenInterceptor.ctorParameters = () => [
    { type: ClientTokenService },
    { type: ClientErrorHandlingService },
    { type: OccEndpointsService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LXRva2VuLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvYXV0aC9jbGllbnQtYXV0aC9odHRwLWludGVyY2VwdG9ycy9jbGllbnQtdG9rZW4uaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLGlCQUFpQixHQUtsQixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUNMLGVBQWUsRUFDZixnQkFBZ0IsR0FDakIsTUFBTSxxQ0FBcUMsQ0FBQztBQUU3QyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN2RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7QUFFdEU7OztHQUdHO0FBRUgsTUFBTSxPQUFPLHNCQUFzQjtJQUNqQyxZQUNZLGtCQUFzQyxFQUN0QywwQkFBc0QsRUFDdEQsWUFBaUM7UUFGakMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QywrQkFBMEIsR0FBMUIsMEJBQTBCLENBQTRCO1FBQ3RELGlCQUFZLEdBQVosWUFBWSxDQUFxQjtJQUMxQyxDQUFDO0lBRUosU0FBUyxDQUNQLE9BQXlCLEVBQ3pCLElBQWlCO1FBRWpCLE1BQU0sb0JBQW9CLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hFLElBQUksb0JBQW9CLEVBQUU7WUFDeEIsT0FBTyxHQUFHLGVBQWUsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDbkU7UUFFRCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxJQUFJLENBQ25ELElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxTQUFTLENBQUMsQ0FBQyxLQUFrQixFQUFFLEVBQUU7WUFDL0IsSUFDRSxDQUFBLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxZQUFZO2dCQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDLEVBQ3pEO2dCQUNBLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO29CQUN0QixVQUFVLEVBQUU7d0JBQ1YsYUFBYSxFQUFFLEdBQUcsS0FBSyxDQUFDLFVBQVUsSUFBSSxRQUFRLElBQzVDLEtBQUssQ0FBQyxZQUNSLEVBQUU7cUJBQ0g7aUJBQ0YsQ0FBQyxDQUFDO2FBQ0o7WUFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM5QixVQUFVLENBQUMsQ0FBQyxXQUFnQixFQUFFLEVBQUU7Z0JBQzlCLElBQUksV0FBVyxZQUFZLGlCQUFpQixFQUFFO29CQUM1QyxJQUFJLFdBQVcsQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFFO3dCQUM5QixJQUFJLG9CQUFvQixFQUFFOzRCQUN4QixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0NBQ3BDLE9BQU8sSUFBSSxDQUFDLDBCQUEwQixDQUFDLHdCQUF3QixDQUM3RCxPQUFPLEVBQ1AsSUFBSSxDQUNMLENBQUM7NkJBQ0g7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7Z0JBQ0QsT0FBTyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDakMsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRVMsY0FBYyxDQUN0QixvQkFBNkI7UUFFN0IsSUFBSSxvQkFBb0IsRUFBRTtZQUN4QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUNqRDtRQUNELE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFFUyxvQkFBb0IsQ0FBQyxPQUF5QjtRQUN0RCxNQUFNLGdCQUFnQixHQUFHLGVBQWUsQ0FBQyxtQkFBbUIsQ0FDMUQsZ0JBQWdCLEVBQ2hCLE9BQU8sQ0FBQyxPQUFPLENBQ2hCLENBQUM7UUFDRixPQUFPLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFUyxjQUFjLENBQUMsSUFBdUI7O1FBQzlDLE9BQU8sbUJBQUEsSUFBSSxDQUFDLEtBQUssMENBQUUsTUFBTSwwQ0FBRyxDQUFDLDJDQUFHLElBQUksTUFBSyxtQkFBbUIsQ0FBQztJQUMvRCxDQUFDOzs7O1lBekVGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OztZQU56QixrQkFBa0I7WUFEbEIsMEJBQTBCO1lBTjFCLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEh0dHBFcnJvclJlc3BvbnNlLFxuICBIdHRwRXZlbnQsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBSZXF1ZXN0LFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgc3dpdGNoTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL29jYy9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgSW50ZXJjZXB0b3JVdGlsLFxuICBVU0VfQ0xJRU5UX1RPS0VOLFxufSBmcm9tICcuLi8uLi8uLi9vY2MvdXRpbHMvaW50ZXJjZXB0b3ItdXRpbCc7XG5pbXBvcnQgeyBDbGllbnRUb2tlbiB9IGZyb20gJy4uL21vZGVscy9jbGllbnQtdG9rZW4ubW9kZWwnO1xuaW1wb3J0IHsgQ2xpZW50RXJyb3JIYW5kbGluZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jbGllbnQtZXJyb3ItaGFuZGxpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBDbGllbnRUb2tlblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jbGllbnQtdG9rZW4uc2VydmljZSc7XG5cbi8qKlxuICogSW50ZXJjZXB0b3IgZm9yIGhhbmRsaW5nIHJlcXVlc3RzIHdpdGggYFVTRV9DTElFTlRfVE9LRU5gIGhlYWRlci5cbiAqIFByb3ZpZGVzIGBBdXRob3JpemF0aW9uYCBoZWFkZXIgd2l0aCBjbGllbnQgdG9rZW4gYW5kIGhhbmRsZXMgZXJyb3JzIHJlbGF0ZWQgdG8gY2xpZW50IGF1dGguXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ2xpZW50VG9rZW5JbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjbGllbnRUb2tlblNlcnZpY2U6IENsaWVudFRva2VuU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2xpZW50RXJyb3JIYW5kbGluZ1NlcnZpY2U6IENsaWVudEVycm9ySGFuZGxpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2VcbiAgKSB7fVxuXG4gIGludGVyY2VwdChcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICBjb25zdCBpc0NsaWVudFRva2VuUmVxdWVzdCA9IHRoaXMuaXNDbGllbnRUb2tlblJlcXVlc3QocmVxdWVzdCk7XG4gICAgaWYgKGlzQ2xpZW50VG9rZW5SZXF1ZXN0KSB7XG4gICAgICByZXF1ZXN0ID0gSW50ZXJjZXB0b3JVdGlsLnJlbW92ZUhlYWRlcihVU0VfQ0xJRU5UX1RPS0VOLCByZXF1ZXN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5nZXRDbGllbnRUb2tlbihpc0NsaWVudFRva2VuUmVxdWVzdCkucGlwZShcbiAgICAgIHRha2UoMSksXG4gICAgICBzd2l0Y2hNYXAoKHRva2VuOiBDbGllbnRUb2tlbikgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdG9rZW4/LmFjY2Vzc190b2tlbiAmJlxuICAgICAgICAgIHJlcXVlc3QudXJsLmluY2x1ZGVzKHRoaXMub2NjRW5kcG9pbnRzLmdldEJhc2VFbmRwb2ludCgpKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXF1ZXN0ID0gcmVxdWVzdC5jbG9uZSh7XG4gICAgICAgICAgICBzZXRIZWFkZXJzOiB7XG4gICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke3Rva2VuLnRva2VuX3R5cGUgfHwgJ0JlYXJlcid9ICR7XG4gICAgICAgICAgICAgICAgdG9rZW4uYWNjZXNzX3Rva2VuXG4gICAgICAgICAgICAgIH1gLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KS5waXBlKFxuICAgICAgICAgIGNhdGNoRXJyb3IoKGVyclJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJSZXNwb25zZSBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIGlmIChlcnJSZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgICAgICAgIGlmIChpc0NsaWVudFRva2VuUmVxdWVzdCkge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNFeHBpcmVkVG9rZW4oZXJyUmVzcG9uc2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNsaWVudEVycm9ySGFuZGxpbmdTZXJ2aWNlLmhhbmRsZUV4cGlyZWRDbGllbnRUb2tlbihcbiAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LFxuICAgICAgICAgICAgICAgICAgICAgIG5leHRcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVyclJlc3BvbnNlKTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldENsaWVudFRva2VuKFxuICAgIGlzQ2xpZW50VG9rZW5SZXF1ZXN0OiBib29sZWFuXG4gICk6IE9ic2VydmFibGU8Q2xpZW50VG9rZW4+IHtcbiAgICBpZiAoaXNDbGllbnRUb2tlblJlcXVlc3QpIHtcbiAgICAgIHJldHVybiB0aGlzLmNsaWVudFRva2VuU2VydmljZS5nZXRDbGllbnRUb2tlbigpO1xuICAgIH1cbiAgICByZXR1cm4gb2YobnVsbCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaXNDbGllbnRUb2tlblJlcXVlc3QocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55Pik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlzUmVxdWVzdE1hcHBpbmcgPSBJbnRlcmNlcHRvclV0aWwuZ2V0SW50ZXJjZXB0b3JQYXJhbShcbiAgICAgIFVTRV9DTElFTlRfVE9LRU4sXG4gICAgICByZXF1ZXN0LmhlYWRlcnNcbiAgICApO1xuICAgIHJldHVybiBCb29sZWFuKGlzUmVxdWVzdE1hcHBpbmcpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzRXhwaXJlZFRva2VuKHJlc3A6IEh0dHBFcnJvclJlc3BvbnNlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHJlc3AuZXJyb3I/LmVycm9ycz8uWzBdPy50eXBlID09PSAnSW52YWxpZFRva2VuRXJyb3InO1xuICB9XG59XG4iXX0=