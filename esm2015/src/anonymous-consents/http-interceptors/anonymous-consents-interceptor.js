import { __decorate } from "tslib";
import { HttpResponse, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iif } from 'rxjs';
import { switchMap, take, tap, withLatestFrom } from 'rxjs/operators';
import { AuthService } from '../../auth/index';
import { ANONYMOUS_CONSENTS_FEATURE, isFeatureEnabled, } from '../../features-config/index';
import { ANONYMOUS_CONSENT_STATUS } from '../../model/index';
import { OccEndpointsService } from '../../occ/index';
import { AnonymousConsentsConfig } from '../config/anonymous-consents-config';
import { AnonymousConsentsService } from '../facade/anonymous-consents.service';
import * as i0 from "@angular/core";
import * as i1 from "../facade/anonymous-consents.service";
import * as i2 from "../../auth/facade/auth.service";
import * as i3 from "../../occ/services/occ-endpoints.service";
import * as i4 from "../config/anonymous-consents-config";
export const ANONYMOUS_CONSENTS_HEADER = 'X-Anonymous-Consents';
let AnonymousConsentsInterceptor = class AnonymousConsentsInterceptor {
    constructor(anonymousConsentsService, authService, occEndpoints, config) {
        this.anonymousConsentsService = anonymousConsentsService;
        this.authService = authService;
        this.occEndpoints = occEndpoints;
        this.config = config;
    }
    intercept(request, next) {
        return iif(() => isFeatureEnabled(this.config, ANONYMOUS_CONSENTS_FEATURE), this.anonymousConsentsService.getConsents().pipe(take(1), withLatestFrom(this.authService.isUserLoggedIn()), switchMap(([consents, isUserLoggedIn]) => {
            if (!this.isOccUrl(request.url)) {
                return next.handle(request);
            }
            const clonedRequest = this.handleRequest(consents, request);
            return next.handle(clonedRequest).pipe(tap(event => {
                if (event instanceof HttpResponse) {
                    this.handleResponse(isUserLoggedIn, event.headers.get(ANONYMOUS_CONSENTS_HEADER), consents);
                }
            }));
        })), next.handle(request));
    }
    handleResponse(isUserLoggedIn, newRawConsents, previousConsents) {
        if (!isUserLoggedIn && newRawConsents) {
            let newConsents = [];
            newConsents = this.anonymousConsentsService.decodeAndDeserialize(newRawConsents);
            newConsents = this.giveRequiredConsents(newConsents);
            if (this.anonymousConsentsService.consentsUpdated(newConsents, previousConsents)) {
                this.anonymousConsentsService.setConsents(newConsents);
            }
        }
    }
    handleRequest(consents, request) {
        if (!consents) {
            return request;
        }
        const rawConsents = this.anonymousConsentsService.serializeAndEncode(consents);
        return request.clone({
            setHeaders: {
                [ANONYMOUS_CONSENTS_HEADER]: rawConsents,
            },
        });
    }
    isOccUrl(url) {
        return url.includes(this.occEndpoints.getBaseEndpoint());
    }
    giveRequiredConsents(consents) {
        const givenConsents = [...consents];
        if (Boolean(this.config.anonymousConsents) &&
            Boolean(this.config.anonymousConsents.requiredConsents)) {
            for (const consent of givenConsents) {
                if (this.config.anonymousConsents.requiredConsents.includes(consent.templateCode)) {
                    consent.consentState = ANONYMOUS_CONSENT_STATUS.GIVEN;
                }
            }
        }
        return givenConsents;
    }
};
AnonymousConsentsInterceptor.ctorParameters = () => [
    { type: AnonymousConsentsService },
    { type: AuthService },
    { type: OccEndpointsService },
    { type: AnonymousConsentsConfig }
];
AnonymousConsentsInterceptor.ɵprov = i0.ɵɵdefineInjectable({ factory: function AnonymousConsentsInterceptor_Factory() { return new AnonymousConsentsInterceptor(i0.ɵɵinject(i1.AnonymousConsentsService), i0.ɵɵinject(i2.AuthService), i0.ɵɵinject(i3.OccEndpointsService), i0.ɵɵinject(i4.AnonymousConsentsConfig)); }, token: AnonymousConsentsInterceptor, providedIn: "root" });
AnonymousConsentsInterceptor = __decorate([
    Injectable({ providedIn: 'root' })
], AnonymousConsentsInterceptor);
export { AnonymousConsentsInterceptor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLWludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Fub255bW91cy1jb25zZW50cy9odHRwLWludGVyY2VwdG9ycy9hbm9ueW1vdXMtY29uc2VudHMtaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFLTCxZQUFZLEdBQ2IsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxHQUFHLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsMEJBQTBCLEVBQzFCLGdCQUFnQixHQUNqQixNQUFNLDZCQUE2QixDQUFDO0FBQ3JDLE9BQU8sRUFBb0Isd0JBQXdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7O0FBRWhGLE1BQU0sQ0FBQyxNQUFNLHlCQUF5QixHQUFHLHNCQUFzQixDQUFDO0FBR2hFLElBQWEsNEJBQTRCLEdBQXpDLE1BQWEsNEJBQTRCO0lBQ3ZDLFlBQ1Usd0JBQWtELEVBQ2xELFdBQXdCLEVBQ3hCLFlBQWlDLEVBQ2pDLE1BQStCO1FBSC9CLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsaUJBQVksR0FB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SUFBSSxhQUFhLEVBQUU7Z0JBQ25DLElBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQ3JELE9BQU8sQ0FBQyxZQUFZLENBQ3JCLEVBQ0Q7b0JBQ0EsT0FBTyxDQUFDLFlBQVksR0FBRyx3QkFBd0IsQ0FBQyxLQUFLLENBQUM7aUJBQ3ZEO2FBQ0Y7U0FDRjtRQUNELE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7Q0FDRixDQUFBOztZQXhHcUMsd0JBQXdCO1lBQ3JDLFdBQVc7WUFDVixtQkFBbUI7WUFDekIsdUJBQXVCOzs7QUFMOUIsNEJBQTRCO0lBRHhDLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztHQUN0Qiw0QkFBNEIsQ0EwR3hDO1NBMUdZLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEh0dHBFdmVudCxcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBJbnRlcmNlcHRvcixcbiAgSHR0cFJlcXVlc3QsXG4gIEh0dHBSZXNwb25zZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaWlmLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAsIHRha2UsIHRhcCwgd2l0aExhdGVzdEZyb20gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvaW5kZXgnO1xuaW1wb3J0IHtcbiAgQU5PTllNT1VTX0NPTlNFTlRTX0ZFQVRVUkUsXG4gIGlzRmVhdHVyZUVuYWJsZWQsXG59IGZyb20gJy4uLy4uL2ZlYXR1cmVzLWNvbmZpZy9pbmRleCc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50LCBBTk9OWU1PVVNfQ09OU0VOVF9TVEFUVVMgfSBmcm9tICcuLi8uLi9tb2RlbC9pbmRleCc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb2NjL2luZGV4JztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2Fub255bW91cy1jb25zZW50cy1jb25maWcnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL2Fub255bW91cy1jb25zZW50cy5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IEFOT05ZTU9VU19DT05TRU5UU19IRUFERVIgPSAnWC1Bbm9ueW1vdXMtQ29uc2VudHMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFub255bW91c0NvbnNlbnRzSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFub255bW91c0NvbnNlbnRzU2VydmljZTogQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgY29uZmlnOiBBbm9ueW1vdXNDb25zZW50c0NvbmZpZ1xuICApIHt9XG5cbiAgaW50ZXJjZXB0KFxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgbmV4dDogSHR0cEhhbmRsZXJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIHJldHVybiBpaWYoXG4gICAgICAoKSA9PiBpc0ZlYXR1cmVFbmFibGVkKHRoaXMuY29uZmlnLCBBTk9OWU1PVVNfQ09OU0VOVFNfRkVBVFVSRSksXG4gICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5nZXRDb25zZW50cygpLnBpcGUoXG4gICAgICAgIHRha2UoMSksXG4gICAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuYXV0aFNlcnZpY2UuaXNVc2VyTG9nZ2VkSW4oKSksXG4gICAgICAgIHN3aXRjaE1hcCgoW2NvbnNlbnRzLCBpc1VzZXJMb2dnZWRJbl0pID0+IHtcbiAgICAgICAgICBpZiAoIXRoaXMuaXNPY2NVcmwocmVxdWVzdC51cmwpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgY2xvbmVkUmVxdWVzdCA9IHRoaXMuaGFuZGxlUmVxdWVzdChjb25zZW50cywgcmVxdWVzdCk7XG4gICAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKGNsb25lZFJlcXVlc3QpLnBpcGUoXG4gICAgICAgICAgICB0YXAoZXZlbnQgPT4ge1xuICAgICAgICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVJlc3BvbnNlKFxuICAgICAgICAgICAgICAgICAgaXNVc2VyTG9nZ2VkSW4sXG4gICAgICAgICAgICAgICAgICBldmVudC5oZWFkZXJzLmdldChBTk9OWU1PVVNfQ09OU0VOVFNfSEVBREVSKSxcbiAgICAgICAgICAgICAgICAgIGNvbnNlbnRzXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgKSxcbiAgICAgIG5leHQuaGFuZGxlKHJlcXVlc3QpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlUmVzcG9uc2UoXG4gICAgaXNVc2VyTG9nZ2VkSW46IGJvb2xlYW4sXG4gICAgbmV3UmF3Q29uc2VudHM6IHN0cmluZyxcbiAgICBwcmV2aW91c0NvbnNlbnRzOiBBbm9ueW1vdXNDb25zZW50W11cbiAgKTogdm9pZCB7XG4gICAgaWYgKCFpc1VzZXJMb2dnZWRJbiAmJiBuZXdSYXdDb25zZW50cykge1xuICAgICAgbGV0IG5ld0NvbnNlbnRzOiBBbm9ueW1vdXNDb25zZW50W10gPSBbXTtcbiAgICAgIG5ld0NvbnNlbnRzID0gdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuZGVjb2RlQW5kRGVzZXJpYWxpemUoXG4gICAgICAgIG5ld1Jhd0NvbnNlbnRzXG4gICAgICApO1xuICAgICAgbmV3Q29uc2VudHMgPSB0aGlzLmdpdmVSZXF1aXJlZENvbnNlbnRzKG5ld0NvbnNlbnRzKTtcblxuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5jb25zZW50c1VwZGF0ZWQoXG4gICAgICAgICAgbmV3Q29uc2VudHMsXG4gICAgICAgICAgcHJldmlvdXNDb25zZW50c1xuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2Uuc2V0Q29uc2VudHMobmV3Q29uc2VudHMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlUmVxdWVzdChcbiAgICBjb25zZW50czogQW5vbnltb3VzQ29uc2VudFtdLFxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT5cbiAgKTogSHR0cFJlcXVlc3Q8YW55PiB7XG4gICAgaWYgKCFjb25zZW50cykge1xuICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgfVxuXG4gICAgY29uc3QgcmF3Q29uc2VudHMgPSB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5zZXJpYWxpemVBbmRFbmNvZGUoXG4gICAgICBjb25zZW50c1xuICAgICk7XG4gICAgcmV0dXJuIHJlcXVlc3QuY2xvbmUoe1xuICAgICAgc2V0SGVhZGVyczoge1xuICAgICAgICBbQU5PTllNT1VTX0NPTlNFTlRTX0hFQURFUl06IHJhd0NvbnNlbnRzLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaXNPY2NVcmwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdXJsLmluY2x1ZGVzKHRoaXMub2NjRW5kcG9pbnRzLmdldEJhc2VFbmRwb2ludCgpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2l2ZVJlcXVpcmVkQ29uc2VudHMoXG4gICAgY29uc2VudHM6IEFub255bW91c0NvbnNlbnRbXVxuICApOiBBbm9ueW1vdXNDb25zZW50W10ge1xuICAgIGNvbnN0IGdpdmVuQ29uc2VudHMgPSBbLi4uY29uc2VudHNdO1xuXG4gICAgaWYgKFxuICAgICAgQm9vbGVhbih0aGlzLmNvbmZpZy5hbm9ueW1vdXNDb25zZW50cykgJiZcbiAgICAgIEJvb2xlYW4odGhpcy5jb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVxdWlyZWRDb25zZW50cylcbiAgICApIHtcbiAgICAgIGZvciAoY29uc3QgY29uc2VudCBvZiBnaXZlbkNvbnNlbnRzKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLmNvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZXF1aXJlZENvbnNlbnRzLmluY2x1ZGVzKFxuICAgICAgICAgICAgY29uc2VudC50ZW1wbGF0ZUNvZGVcbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnNlbnQuY29uc2VudFN0YXRlID0gQU5PTllNT1VTX0NPTlNFTlRfU1RBVFVTLkdJVkVOO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBnaXZlbkNvbnNlbnRzO1xuICB9XG59XG4iXX0=