/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpResponse, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iif } from 'rxjs';
import { switchMap, take, tap, withLatestFrom } from 'rxjs/operators';
import { AuthService } from '../../auth/index';
import { isFeatureLevel } from '../../features-config/index';
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
        // TODO(issue:4989) Anonymous consents - remove `iif()`, `condition` parameter and the `falseResult` parameter of it
        return iif((/**
         * @return {?}
         */
        () => isFeatureLevel(this.config, '1.3')), this.anonymousConsentsService.getConsents().pipe(take(1), withLatestFrom(this.authService.isUserLoggedIn()), switchMap((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLWludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Fub255bW91cy1jb25zZW50cy9odHRwLWludGVyY2VwdG9ycy9hbm9ueW1vdXMtY29uc2VudHMtaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFLTCxZQUFZLEdBQ2IsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxHQUFHLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFvQix3QkFBd0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOztBQUVoRixNQUFNLE9BQU8seUJBQXlCLEdBQUcsc0JBQXNCO0FBRy9ELE1BQU0sT0FBTyw0QkFBNEI7Ozs7Ozs7SUFDdkMsWUFDVSx3QkFBa0QsRUFDbEQsV0FBd0IsRUFDeEIsWUFBaUMsRUFDakMsTUFBK0I7UUFIL0IsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsV0FBTSxHQUFOLE1BQU0s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LENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUN2RDtZQUNBLEtBQUssTUFBTSxPQUFPLElBQUksUUFBUSxFQUFFO2dCQUM5QixJQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUNyRCxPQUFPLENBQUMsWUFBWSxDQUNyQixFQUNEO29CQUNBLE9BQU8sQ0FBQyxZQUFZLEdBQUcsd0JBQXdCLENBQUMsS0FBSyxDQUFDO2lCQUN2RDthQUNGO1NBQ0Y7UUFFRCxJQUFJLENBQUMsd0JBQXdCLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RELENBQUM7OztZQXBHRixVQUFVOzs7O1lBSkYsd0JBQXdCO1lBTHhCLFdBQVc7WUFHWCxtQkFBbUI7WUFDbkIsdUJBQXVCOzs7Ozs7O0lBUTVCLGdFQUEwRDs7Ozs7SUFDMUQsbURBQWdDOzs7OztJQUNoQyxvREFBeUM7Ozs7O0lBQ3pDLDhDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEh0dHBFdmVudCxcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBJbnRlcmNlcHRvcixcbiAgSHR0cFJlcXVlc3QsXG4gIEh0dHBSZXNwb25zZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaWlmLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAsIHRha2UsIHRhcCwgd2l0aExhdGVzdEZyb20gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvaW5kZXgnO1xuaW1wb3J0IHsgaXNGZWF0dXJlTGV2ZWwgfSBmcm9tICcuLi8uLi9mZWF0dXJlcy1jb25maWcvaW5kZXgnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudCwgQU5PTllNT1VTX0NPTlNFTlRfU1RBVFVTIH0gZnJvbSAnLi4vLi4vbW9kZWwvaW5kZXgnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL29jYy9pbmRleCc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50c0NvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9hbm9ueW1vdXMtY29uc2VudHMtY29uZmlnJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9hbm9ueW1vdXMtY29uc2VudHMuc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBBTk9OWU1PVVNfQ09OU0VOVFNfSEVBREVSID0gJ1gtQW5vbnltb3VzLUNvbnNlbnRzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFub255bW91c0NvbnNlbnRzSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFub255bW91c0NvbnNlbnRzU2VydmljZTogQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgY29uZmlnOiBBbm9ueW1vdXNDb25zZW50c0NvbmZpZ1xuICApIHt9XG5cbiAgaW50ZXJjZXB0KFxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgbmV4dDogSHR0cEhhbmRsZXJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIC8vIFRPRE8oaXNzdWU6NDk4OSkgQW5vbnltb3VzIGNvbnNlbnRzIC0gcmVtb3ZlIGBpaWYoKWAsIGBjb25kaXRpb25gIHBhcmFtZXRlciBhbmQgdGhlIGBmYWxzZVJlc3VsdGAgcGFyYW1ldGVyIG9mIGl0XG4gICAgcmV0dXJuIGlpZihcbiAgICAgICgpID0+IGlzRmVhdHVyZUxldmVsKHRoaXMuY29uZmlnLCAnMS4zJyksXG4gICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5nZXRDb25zZW50cygpLnBpcGUoXG4gICAgICAgIHRha2UoMSksXG4gICAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuYXV0aFNlcnZpY2UuaXNVc2VyTG9nZ2VkSW4oKSksXG4gICAgICAgIHN3aXRjaE1hcCgoW2NvbnNlbnRzLCBpc1VzZXJMb2dnZWRJbl0pID0+IHtcbiAgICAgICAgICBpZiAoIXRoaXMuaXNPY2NVcmwocmVxdWVzdC51cmwpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgY2xvbmVkUmVxdWVzdCA9IHRoaXMuaGFuZGxlUmVxdWVzdChjb25zZW50cywgcmVxdWVzdCk7XG4gICAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKGNsb25lZFJlcXVlc3QpLnBpcGUoXG4gICAgICAgICAgICB0YXAoZXZlbnQgPT4ge1xuICAgICAgICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVJlc3BvbnNlKFxuICAgICAgICAgICAgICAgICAgZXZlbnQuaGVhZGVycy5nZXQoQU5PTllNT1VTX0NPTlNFTlRTX0hFQURFUiksXG4gICAgICAgICAgICAgICAgICBpc1VzZXJMb2dnZWRJblxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICBuZXh0LmhhbmRsZShyZXF1ZXN0KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVJlc3BvbnNlKHJhd0NvbnNlbnRzOiBzdHJpbmcsIGlzVXNlckxvZ2dlZEluOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHJhd0NvbnNlbnRzICYmICFpc1VzZXJMb2dnZWRJbikge1xuICAgICAgY29uc3QgY29uc2VudHMgPSB0aGlzLmRlY29kZUFuZERlc2VyaWFsaXplKHJhd0NvbnNlbnRzKTtcbiAgICAgIHRoaXMuZ2l2ZVJlcXVpcmVkQ29uc2VudHMoY29uc2VudHMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZGVjb2RlQW5kRGVzZXJpYWxpemUocmF3Q29uc2VudHM6IHN0cmluZyk6IEFub255bW91c0NvbnNlbnRbXSB7XG4gICAgY29uc3QgZGVjb2RlZCA9IGRlY29kZVVSSUNvbXBvbmVudChyYXdDb25zZW50cyk7XG4gICAgY29uc3QgdW5zZXJpYWxpemVkID0gSlNPTi5wYXJzZShkZWNvZGVkKSBhcyBBbm9ueW1vdXNDb25zZW50W107XG4gICAgcmV0dXJuIHVuc2VyaWFsaXplZDtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlUmVxdWVzdChcbiAgICBjb25zZW50czogQW5vbnltb3VzQ29uc2VudFtdLFxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT5cbiAgKTogSHR0cFJlcXVlc3Q8YW55PiB7XG4gICAgaWYgKCFjb25zZW50cykge1xuICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgfVxuXG4gICAgY29uc3QgcmF3Q29uc2VudHMgPSB0aGlzLnNlcmlhbGl6ZUFuZEVuY29kZShjb25zZW50cyk7XG4gICAgcmV0dXJuIHJlcXVlc3QuY2xvbmUoe1xuICAgICAgc2V0SGVhZGVyczoge1xuICAgICAgICBbQU5PTllNT1VTX0NPTlNFTlRTX0hFQURFUl06IHJhd0NvbnNlbnRzLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2VyaWFsaXplQW5kRW5jb2RlKGNvbnNlbnRzOiBBbm9ueW1vdXNDb25zZW50W10pOiBzdHJpbmcge1xuICAgIGlmICghY29uc2VudHMpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgY29uc3Qgc2VyaWFsaXplZCA9IEpTT04uc3RyaW5naWZ5KGNvbnNlbnRzKTtcbiAgICBjb25zdCBlbmNvZGVkID0gZW5jb2RlVVJJQ29tcG9uZW50KHNlcmlhbGl6ZWQpO1xuICAgIHJldHVybiBlbmNvZGVkO1xuICB9XG5cbiAgcHJpdmF0ZSBpc09jY1VybCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB1cmwuaW5jbHVkZXModGhpcy5vY2NFbmRwb2ludHMuZ2V0QmFzZUVuZHBvaW50KCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnaXZlUmVxdWlyZWRDb25zZW50cyhjb25zZW50czogQW5vbnltb3VzQ29uc2VudFtdKTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgQm9vbGVhbih0aGlzLmNvbmZpZy5hbm9ueW1vdXNDb25zZW50cykgJiZcbiAgICAgIEJvb2xlYW4odGhpcy5jb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVxdWlyZWRDb25zZW50cylcbiAgICApIHtcbiAgICAgIGZvciAoY29uc3QgY29uc2VudCBvZiBjb25zZW50cykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5jb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVxdWlyZWRDb25zZW50cy5pbmNsdWRlcyhcbiAgICAgICAgICAgIGNvbnNlbnQudGVtcGxhdGVDb2RlXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zZW50LmNvbnNlbnRTdGF0ZSA9IEFOT05ZTU9VU19DT05TRU5UX1NUQVRVUy5HSVZFTjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLnNldENvbnNlbnRzKGNvbnNlbnRzKTtcbiAgfVxufVxuIl19