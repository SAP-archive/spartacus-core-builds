import { __decorate } from "tslib";
import { HttpResponse, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap, take, tap, withLatestFrom } from 'rxjs/operators';
import { AuthService } from '../../auth/index';
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
        return this.anonymousConsentsService.getConsents().pipe(take(1), withLatestFrom(this.authService.isUserLoggedIn()), switchMap(([consents, isUserLoggedIn]) => {
            if (!this.isOccUrl(request.url)) {
                return next.handle(request);
            }
            const clonedRequest = this.handleRequest(consents, request);
            return next.handle(clonedRequest).pipe(tap((event) => {
                if (event instanceof HttpResponse) {
                    this.handleResponse(isUserLoggedIn, event.headers.get(ANONYMOUS_CONSENTS_HEADER), consents);
                }
            }));
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLWludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Fub255bW91cy1jb25zZW50cy9odHRwLWludGVyY2VwdG9ycy9hbm9ueW1vdXMtY29uc2VudHMtaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFLTCxZQUFZLEdBQ2IsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFvQix3QkFBd0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7Ozs7QUFFaEYsTUFBTSxDQUFDLE1BQU0seUJBQXlCLEdBQUcsc0JBQXNCLENBQUM7QUFHaEUsSUFBYSw0QkFBNEIsR0FBekMsTUFBYSw0QkFBNEI7SUFDdkMsWUFDVSx3QkFBa0QsRUFDbEQsV0FBd0IsRUFDeEIsWUFBaUMsRUFDakMsTUFBK0I7UUFIL0IsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsV0FBTSxHQUFOLE1BQU0sQ0FBeUI7SUFDdEMsQ0FBQztJQUVKLFNBQVMsQ0FDUCxPQUF5QixFQUN6QixJQUFpQjtRQUVqQixPQUFPLElBQUks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QUE7O1lBcEdxQyx3QkFBd0I7WUFDckMsV0FBVztZQUNWLG1CQUFtQjtZQUN6Qix1QkFBdUI7OztBQUw5Qiw0QkFBNEI7SUFEeEMsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO0dBQ3RCLDRCQUE0QixDQXNHeEM7U0F0R1ksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSHR0cEV2ZW50LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwUmVxdWVzdCxcbiAgSHR0cFJlc3BvbnNlLFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAsIHRha2UsIHRhcCwgd2l0aExhdGVzdEZyb20gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvaW5kZXgnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudCwgQU5PTllNT1VTX0NPTlNFTlRfU1RBVFVTIH0gZnJvbSAnLi4vLi4vbW9kZWwvaW5kZXgnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL29jYy9pbmRleCc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50c0NvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9hbm9ueW1vdXMtY29uc2VudHMtY29uZmlnJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9hbm9ueW1vdXMtY29uc2VudHMuc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBBTk9OWU1PVVNfQ09OU0VOVFNfSEVBREVSID0gJ1gtQW5vbnltb3VzLUNvbnNlbnRzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBbm9ueW1vdXNDb25zZW50c0ludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhbm9ueW1vdXNDb25zZW50c1NlcnZpY2U6IEFub255bW91c0NvbnNlbnRzU2VydmljZSxcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcml2YXRlIGNvbmZpZzogQW5vbnltb3VzQ29uc2VudHNDb25maWdcbiAgKSB7fVxuXG4gIGludGVyY2VwdChcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICByZXR1cm4gdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuZ2V0Q29uc2VudHMoKS5waXBlKFxuICAgICAgdGFrZSgxKSxcbiAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuYXV0aFNlcnZpY2UuaXNVc2VyTG9nZ2VkSW4oKSksXG4gICAgICBzd2l0Y2hNYXAoKFtjb25zZW50cywgaXNVc2VyTG9nZ2VkSW5dKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5pc09jY1VybChyZXF1ZXN0LnVybCkpIHtcbiAgICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjbG9uZWRSZXF1ZXN0ID0gdGhpcy5oYW5kbGVSZXF1ZXN0KGNvbnNlbnRzLCByZXF1ZXN0KTtcbiAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKGNsb25lZFJlcXVlc3QpLnBpcGUoXG4gICAgICAgICAgdGFwKChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIHRoaXMuaGFuZGxlUmVzcG9uc2UoXG4gICAgICAgICAgICAgICAgaXNVc2VyTG9nZ2VkSW4sXG4gICAgICAgICAgICAgICAgZXZlbnQuaGVhZGVycy5nZXQoQU5PTllNT1VTX0NPTlNFTlRTX0hFQURFUiksXG4gICAgICAgICAgICAgICAgY29uc2VudHNcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVSZXNwb25zZShcbiAgICBpc1VzZXJMb2dnZWRJbjogYm9vbGVhbixcbiAgICBuZXdSYXdDb25zZW50czogc3RyaW5nLFxuICAgIHByZXZpb3VzQ29uc2VudHM6IEFub255bW91c0NvbnNlbnRbXVxuICApOiB2b2lkIHtcbiAgICBpZiAoIWlzVXNlckxvZ2dlZEluICYmIG5ld1Jhd0NvbnNlbnRzKSB7XG4gICAgICBsZXQgbmV3Q29uc2VudHM6IEFub255bW91c0NvbnNlbnRbXSA9IFtdO1xuICAgICAgbmV3Q29uc2VudHMgPSB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5kZWNvZGVBbmREZXNlcmlhbGl6ZShcbiAgICAgICAgbmV3UmF3Q29uc2VudHNcbiAgICAgICk7XG4gICAgICBuZXdDb25zZW50cyA9IHRoaXMuZ2l2ZVJlcXVpcmVkQ29uc2VudHMobmV3Q29uc2VudHMpO1xuXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmNvbnNlbnRzVXBkYXRlZChcbiAgICAgICAgICBuZXdDb25zZW50cyxcbiAgICAgICAgICBwcmV2aW91c0NvbnNlbnRzXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5zZXRDb25zZW50cyhuZXdDb25zZW50cyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVSZXF1ZXN0KFxuICAgIGNvbnNlbnRzOiBBbm9ueW1vdXNDb25zZW50W10sXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PlxuICApOiBIdHRwUmVxdWVzdDxhbnk+IHtcbiAgICBpZiAoIWNvbnNlbnRzKSB7XG4gICAgICByZXR1cm4gcmVxdWVzdDtcbiAgICB9XG5cbiAgICBjb25zdCByYXdDb25zZW50cyA9IHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLnNlcmlhbGl6ZUFuZEVuY29kZShcbiAgICAgIGNvbnNlbnRzXG4gICAgKTtcbiAgICByZXR1cm4gcmVxdWVzdC5jbG9uZSh7XG4gICAgICBzZXRIZWFkZXJzOiB7XG4gICAgICAgIFtBTk9OWU1PVVNfQ09OU0VOVFNfSEVBREVSXTogcmF3Q29uc2VudHMsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpc09jY1VybCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB1cmwuaW5jbHVkZXModGhpcy5vY2NFbmRwb2ludHMuZ2V0QmFzZUVuZHBvaW50KCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnaXZlUmVxdWlyZWRDb25zZW50cyhcbiAgICBjb25zZW50czogQW5vbnltb3VzQ29uc2VudFtdXG4gICk6IEFub255bW91c0NvbnNlbnRbXSB7XG4gICAgY29uc3QgZ2l2ZW5Db25zZW50cyA9IFsuLi5jb25zZW50c107XG5cbiAgICBpZiAoXG4gICAgICBCb29sZWFuKHRoaXMuY29uZmlnLmFub255bW91c0NvbnNlbnRzKSAmJlxuICAgICAgQm9vbGVhbih0aGlzLmNvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZXF1aXJlZENvbnNlbnRzKVxuICAgICkge1xuICAgICAgZm9yIChjb25zdCBjb25zZW50IG9mIGdpdmVuQ29uc2VudHMpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMuY29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHMuaW5jbHVkZXMoXG4gICAgICAgICAgICBjb25zZW50LnRlbXBsYXRlQ29kZVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc2VudC5jb25zZW50U3RhdGUgPSBBTk9OWU1PVVNfQ09OU0VOVF9TVEFUVVMuR0lWRU47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGdpdmVuQ29uc2VudHM7XG4gIH1cbn1cbiJdfQ==