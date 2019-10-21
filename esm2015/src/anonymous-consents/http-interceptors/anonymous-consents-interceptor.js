/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
/** @type {?} */
export const ANONYMOUS_CONSENTS_HEADER = 'X-Anonymous-Consents';
export class AnonymousConsentsInterceptor {
    /**
     * @param {?} anonymousConsentsService
     * @param {?} authService
     * @param {?} occEndpoints
     * @param {?} config
     */
    constructor(anonymousConsentsService, authService, occEndpoints, config) {
        this.anonymousConsentsService = anonymousConsentsService;
        this.authService = authService;
        this.occEndpoints = occEndpoints;
        this.config = config;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        return iif((/**
         * @return {?}
         */
        () => isFeatureEnabled(this.config, ANONYMOUS_CONSENTS_FEATURE)), this.anonymousConsentsService.getConsents().pipe(take(1), withLatestFrom(this.authService.isUserLoggedIn()), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([consents, isUserLoggedIn]) => {
            if (!this.isOccUrl(request.url)) {
                return next.handle(request);
            }
            /** @type {?} */
            const clonedRequest = this.handleRequest(consents, request);
            return next.handle(clonedRequest).pipe(tap((/**
             * @param {?} event
             * @return {?}
             */
            event => {
                if (event instanceof HttpResponse) {
                    this.handleResponse(event.headers.get(ANONYMOUS_CONSENTS_HEADER), isUserLoggedIn);
                }
            })));
        }))), next.handle(request));
    }
    /**
     * @private
     * @param {?} rawConsents
     * @param {?} isUserLoggedIn
     * @return {?}
     */
    handleResponse(rawConsents, isUserLoggedIn) {
        if (rawConsents && !isUserLoggedIn) {
            /** @type {?} */
            const consents = this.decodeAndDeserialize(rawConsents);
            this.giveRequiredConsents(consents);
        }
    }
    /**
     * @private
     * @param {?} rawConsents
     * @return {?}
     */
    decodeAndDeserialize(rawConsents) {
        /** @type {?} */
        const decoded = decodeURIComponent(rawConsents);
        /** @type {?} */
        const unserialized = (/** @type {?} */ (JSON.parse(decoded)));
        return unserialized;
    }
    /**
     * @private
     * @param {?} consents
     * @param {?} request
     * @return {?}
     */
    handleRequest(consents, request) {
        if (!consents) {
            return request;
        }
        /** @type {?} */
        const rawConsents = this.serializeAndEncode(consents);
        return request.clone({
            setHeaders: {
                [ANONYMOUS_CONSENTS_HEADER]: rawConsents,
            },
        });
    }
    /**
     * @private
     * @param {?} consents
     * @return {?}
     */
    serializeAndEncode(consents) {
        if (!consents) {
            return '';
        }
        /** @type {?} */
        const serialized = JSON.stringify(consents);
        /** @type {?} */
        const encoded = encodeURIComponent(serialized);
        return encoded;
    }
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    isOccUrl(url) {
        return url.includes(this.occEndpoints.getBaseEndpoint());
    }
    /**
     * @private
     * @param {?} consents
     * @return {?}
     */
    giveRequiredConsents(consents) {
        if (Boolean(this.config.anonymousConsents) &&
            Boolean(this.config.anonymousConsents.requiredConsents)) {
            for (const consent of consents) {
                if (this.config.anonymousConsents.requiredConsents.includes(consent.templateCode)) {
                    consent.consentState = ANONYMOUS_CONSENT_STATUS.GIVEN;
                }
            }
        }
        this.anonymousConsentsService.setConsents(consents);
    }
}
AnonymousConsentsInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AnonymousConsentsInterceptor.ctorParameters = () => [
    { type: AnonymousConsentsService },
    { type: AuthService },
    { type: OccEndpointsService },
    { type: AnonymousConsentsConfig }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AnonymousConsentsInterceptor.prototype.anonymousConsentsService;
    /**
     * @type {?}
     * @private
     */
    AnonymousConsentsInterceptor.prototype.authService;
    /**
     * @type {?}
     * @private
     */
    AnonymousConsentsInterceptor.prototype.occEndpoints;
    /**
     * @type {?}
     * @private
     */
    AnonymousConsentsInterceptor.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLWludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Fub255bW91cy1jb25zZW50cy9odHRwLWludGVyY2VwdG9ycy9hbm9ueW1vdXMtY29uc2VudHMtaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFLTCxZQUFZLEdBQ2IsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxHQUFHLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsMEJBQTBCLEVBQzFCLGdCQUFnQixHQUNqQixNQUFNLDZCQUE2QixDQUFDO0FBQ3JDLE9BQU8sRUFBb0Isd0JBQXdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7QUFFaEYsTUFBTSxPQUFPLHlCQUF5QixHQUFHLHNCQUFzQjtBQUcvRCxNQUFNLE9BQU8sNEJBQTRCOzs7Ozs7O0lBQ3ZDLFlBQ1Usd0JBQWtELEVBQ2xELFdBQXdCLEVBQ3hCLFlBQWlDLEVBQ2pDLE1BQStCO1FBSC9CLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pD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dEMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsRUFDdkQ7WUFDQSxLQUFLLE1BQU0sT0FBTyxJQUFJLFFBQVEsRUFBRTtnQkFDOUIsSUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FDckQsT0FBTyxDQUFDLFlBQVksQ0FDckIsRUFDRDtvQkFDQSxPQUFPLENBQUMsWUFBWSxHQUFHLHdCQUF3QixDQUFDLEtBQUssQ0FBQztpQkFDdkQ7YUFDRjtTQUNGO1FBRUQsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7WUFuR0YsVUFBVTs7OztZQUpGLHdCQUF3QjtZQVJ4QixXQUFXO1lBTVgsbUJBQW1CO1lBQ25CLHVCQUF1Qjs7Ozs7OztJQVE1QixnRUFBMEQ7Ozs7O0lBQzFELG1EQUFnQzs7Ozs7SUFDaEMsb0RBQXlDOzs7OztJQUN6Qyw4Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBIdHRwRXZlbnQsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBSZXF1ZXN0LFxuICBIdHRwUmVzcG9uc2UsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlpZiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCB0YWtlLCB0YXAsIHdpdGhMYXRlc3RGcm9tIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2luZGV4JztcbmltcG9ydCB7XG4gIEFOT05ZTU9VU19DT05TRU5UU19GRUFUVVJFLFxuICBpc0ZlYXR1cmVFbmFibGVkLFxufSBmcm9tICcuLi8uLi9mZWF0dXJlcy1jb25maWcvaW5kZXgnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudCwgQU5PTllNT1VTX0NPTlNFTlRfU1RBVFVTIH0gZnJvbSAnLi4vLi4vbW9kZWwvaW5kZXgnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL29jYy9pbmRleCc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50c0NvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9hbm9ueW1vdXMtY29uc2VudHMtY29uZmlnJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9hbm9ueW1vdXMtY29uc2VudHMuc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBBTk9OWU1PVVNfQ09OU0VOVFNfSEVBREVSID0gJ1gtQW5vbnltb3VzLUNvbnNlbnRzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFub255bW91c0NvbnNlbnRzSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFub255bW91c0NvbnNlbnRzU2VydmljZTogQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgY29uZmlnOiBBbm9ueW1vdXNDb25zZW50c0NvbmZpZ1xuICApIHt9XG5cbiAgaW50ZXJjZXB0KFxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgbmV4dDogSHR0cEhhbmRsZXJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIHJldHVybiBpaWYoXG4gICAgICAoKSA9PiBpc0ZlYXR1cmVFbmFibGVkKHRoaXMuY29uZmlnLCBBTk9OWU1PVVNfQ09OU0VOVFNfRkVBVFVSRSksXG4gICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5nZXRDb25zZW50cygpLnBpcGUoXG4gICAgICAgIHRha2UoMSksXG4gICAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuYXV0aFNlcnZpY2UuaXNVc2VyTG9nZ2VkSW4oKSksXG4gICAgICAgIHN3aXRjaE1hcCgoW2NvbnNlbnRzLCBpc1VzZXJMb2dnZWRJbl0pID0+IHtcbiAgICAgICAgICBpZiAoIXRoaXMuaXNPY2NVcmwocmVxdWVzdC51cmwpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgY2xvbmVkUmVxdWVzdCA9IHRoaXMuaGFuZGxlUmVxdWVzdChjb25zZW50cywgcmVxdWVzdCk7XG4gICAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKGNsb25lZFJlcXVlc3QpLnBpcGUoXG4gICAgICAgICAgICB0YXAoZXZlbnQgPT4ge1xuICAgICAgICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVJlc3BvbnNlKFxuICAgICAgICAgICAgICAgICAgZXZlbnQuaGVhZGVycy5nZXQoQU5PTllNT1VTX0NPTlNFTlRTX0hFQURFUiksXG4gICAgICAgICAgICAgICAgICBpc1VzZXJMb2dnZWRJblxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICBuZXh0LmhhbmRsZShyZXF1ZXN0KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVJlc3BvbnNlKHJhd0NvbnNlbnRzOiBzdHJpbmcsIGlzVXNlckxvZ2dlZEluOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHJhd0NvbnNlbnRzICYmICFpc1VzZXJMb2dnZWRJbikge1xuICAgICAgY29uc3QgY29uc2VudHMgPSB0aGlzLmRlY29kZUFuZERlc2VyaWFsaXplKHJhd0NvbnNlbnRzKTtcbiAgICAgIHRoaXMuZ2l2ZVJlcXVpcmVkQ29uc2VudHMoY29uc2VudHMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZGVjb2RlQW5kRGVzZXJpYWxpemUocmF3Q29uc2VudHM6IHN0cmluZyk6IEFub255bW91c0NvbnNlbnRbXSB7XG4gICAgY29uc3QgZGVjb2RlZCA9IGRlY29kZVVSSUNvbXBvbmVudChyYXdDb25zZW50cyk7XG4gICAgY29uc3QgdW5zZXJpYWxpemVkID0gSlNPTi5wYXJzZShkZWNvZGVkKSBhcyBBbm9ueW1vdXNDb25zZW50W107XG4gICAgcmV0dXJuIHVuc2VyaWFsaXplZDtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlUmVxdWVzdChcbiAgICBjb25zZW50czogQW5vbnltb3VzQ29uc2VudFtdLFxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT5cbiAgKTogSHR0cFJlcXVlc3Q8YW55PiB7XG4gICAgaWYgKCFjb25zZW50cykge1xuICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgfVxuXG4gICAgY29uc3QgcmF3Q29uc2VudHMgPSB0aGlzLnNlcmlhbGl6ZUFuZEVuY29kZShjb25zZW50cyk7XG4gICAgcmV0dXJuIHJlcXVlc3QuY2xvbmUoe1xuICAgICAgc2V0SGVhZGVyczoge1xuICAgICAgICBbQU5PTllNT1VTX0NPTlNFTlRTX0hFQURFUl06IHJhd0NvbnNlbnRzLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2VyaWFsaXplQW5kRW5jb2RlKGNvbnNlbnRzOiBBbm9ueW1vdXNDb25zZW50W10pOiBzdHJpbmcge1xuICAgIGlmICghY29uc2VudHMpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgY29uc3Qgc2VyaWFsaXplZCA9IEpTT04uc3RyaW5naWZ5KGNvbnNlbnRzKTtcbiAgICBjb25zdCBlbmNvZGVkID0gZW5jb2RlVVJJQ29tcG9uZW50KHNlcmlhbGl6ZWQpO1xuICAgIHJldHVybiBlbmNvZGVkO1xuICB9XG5cbiAgcHJpdmF0ZSBpc09jY1VybCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB1cmwuaW5jbHVkZXModGhpcy5vY2NFbmRwb2ludHMuZ2V0QmFzZUVuZHBvaW50KCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnaXZlUmVxdWlyZWRDb25zZW50cyhjb25zZW50czogQW5vbnltb3VzQ29uc2VudFtdKTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgQm9vbGVhbih0aGlzLmNvbmZpZy5hbm9ueW1vdXNDb25zZW50cykgJiZcbiAgICAgIEJvb2xlYW4odGhpcy5jb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVxdWlyZWRDb25zZW50cylcbiAgICApIHtcbiAgICAgIGZvciAoY29uc3QgY29uc2VudCBvZiBjb25zZW50cykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5jb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVxdWlyZWRDb25zZW50cy5pbmNsdWRlcyhcbiAgICAgICAgICAgIGNvbnNlbnQudGVtcGxhdGVDb2RlXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zZW50LmNvbnNlbnRTdGF0ZSA9IEFOT05ZTU9VU19DT05TRU5UX1NUQVRVUy5HSVZFTjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLnNldENvbnNlbnRzKGNvbnNlbnRzKTtcbiAgfVxufVxuIl19