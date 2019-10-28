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
                    this.handleResponse(isUserLoggedIn, event.headers.get(ANONYMOUS_CONSENTS_HEADER), consents);
                }
            })));
        }))), next.handle(request));
    }
    /**
     * @private
     * @param {?} isUserLoggedIn
     * @param {?} newRawConsents
     * @param {?} previousConsents
     * @return {?}
     */
    handleResponse(isUserLoggedIn, newRawConsents, previousConsents) {
        if (!isUserLoggedIn && newRawConsents) {
            /** @type {?} */
            let newConsents = [];
            newConsents = this.anonymousConsentsService.decodeAndDeserialize(newRawConsents);
            newConsents = this.giveRequiredConsents(newConsents);
            if (this.anonymousConsentsService.consentsUpdated(newConsents, previousConsents)) {
                this.anonymousConsentsService.setConsents(newConsents);
            }
        }
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
        const rawConsents = this.anonymousConsentsService.serializeAndEncode(consents);
        return request.clone({
            setHeaders: {
                [ANONYMOUS_CONSENTS_HEADER]: rawConsents,
            },
        });
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
        /** @type {?} */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLWludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Fub255bW91cy1jb25zZW50cy9odHRwLWludGVyY2VwdG9ycy9hbm9ueW1vdXMtY29uc2VudHMtaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFLTCxZQUFZLEdBQ2IsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxHQUFHLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsMEJBQTBCLEVBQzFCLGdCQUFnQixHQUNqQixNQUFNLDZCQUE2QixDQUFDO0FBQ3JDLE9BQU8sRUFBb0Isd0JBQXdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7QUFFaEYsTUFBTSxPQUFPLHlCQUF5QixHQUFHLHNCQUFzQjtBQUcvRCxNQUFNLE9BQU8sNEJBQTRCOzs7Ozs7O0lBQ3ZDLFlBQ1Usd0JBQWtELEVBQ2xELFdBQXdCLEVBQ3hCLFlBQWlDLEVBQ2pDLE1BQStCO1FBSC9CLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pD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QkFDbkMsSUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FDckQsT0FBTyxDQUFDLFlBQVksQ0FDckIsRUFDRDtvQkFDQSxPQUFPLENBQUMsWUFBWSxHQUFHLHdCQUF3QixDQUFDLEtBQUssQ0FBQztpQkFDdkQ7YUFDRjtTQUNGO1FBQ0QsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQzs7O1lBMUdGLFVBQVU7Ozs7WUFKRix3QkFBd0I7WUFSeEIsV0FBVztZQU1YLG1CQUFtQjtZQUNuQix1QkFBdUI7Ozs7Ozs7SUFRNUIsZ0VBQTBEOzs7OztJQUMxRCxtREFBZ0M7Ozs7O0lBQ2hDLG9EQUF5Qzs7Ozs7SUFDekMsOENBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSHR0cEV2ZW50LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwUmVxdWVzdCxcbiAgSHR0cFJlc3BvbnNlLFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpaWYsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN3aXRjaE1hcCwgdGFrZSwgdGFwLCB3aXRoTGF0ZXN0RnJvbSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9pbmRleCc7XG5pbXBvcnQge1xuICBBTk9OWU1PVVNfQ09OU0VOVFNfRkVBVFVSRSxcbiAgaXNGZWF0dXJlRW5hYmxlZCxcbn0gZnJvbSAnLi4vLi4vZmVhdHVyZXMtY29uZmlnL2luZGV4JztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnQsIEFOT05ZTU9VU19DT05TRU5UX1NUQVRVUyB9IGZyb20gJy4uLy4uL21vZGVsL2luZGV4JztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vY2MvaW5kZXgnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudHNDb25maWcgfSBmcm9tICcuLi9jb25maWcvYW5vbnltb3VzLWNvbnNlbnRzLWNvbmZpZyc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvYW5vbnltb3VzLWNvbnNlbnRzLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgQU5PTllNT1VTX0NPTlNFTlRTX0hFQURFUiA9ICdYLUFub255bW91cy1Db25zZW50cyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbm9ueW1vdXNDb25zZW50c0ludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhbm9ueW1vdXNDb25zZW50c1NlcnZpY2U6IEFub255bW91c0NvbnNlbnRzU2VydmljZSxcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcml2YXRlIGNvbmZpZzogQW5vbnltb3VzQ29uc2VudHNDb25maWdcbiAgKSB7fVxuXG4gIGludGVyY2VwdChcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICByZXR1cm4gaWlmKFxuICAgICAgKCkgPT4gaXNGZWF0dXJlRW5hYmxlZCh0aGlzLmNvbmZpZywgQU5PTllNT1VTX0NPTlNFTlRTX0ZFQVRVUkUpLFxuICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuZ2V0Q29uc2VudHMoKS5waXBlKFxuICAgICAgICB0YWtlKDEpLFxuICAgICAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluKCkpLFxuICAgICAgICBzd2l0Y2hNYXAoKFtjb25zZW50cywgaXNVc2VyTG9nZ2VkSW5dKSA9PiB7XG4gICAgICAgICAgaWYgKCF0aGlzLmlzT2NjVXJsKHJlcXVlc3QudXJsKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGNsb25lZFJlcXVlc3QgPSB0aGlzLmhhbmRsZVJlcXVlc3QoY29uc2VudHMsIHJlcXVlc3QpO1xuICAgICAgICAgIHJldHVybiBuZXh0LmhhbmRsZShjbG9uZWRSZXF1ZXN0KS5waXBlKFxuICAgICAgICAgICAgdGFwKGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVSZXNwb25zZShcbiAgICAgICAgICAgICAgICAgIGlzVXNlckxvZ2dlZEluLFxuICAgICAgICAgICAgICAgICAgZXZlbnQuaGVhZGVycy5nZXQoQU5PTllNT1VTX0NPTlNFTlRTX0hFQURFUiksXG4gICAgICAgICAgICAgICAgICBjb25zZW50c1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICBuZXh0LmhhbmRsZShyZXF1ZXN0KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVJlc3BvbnNlKFxuICAgIGlzVXNlckxvZ2dlZEluOiBib29sZWFuLFxuICAgIG5ld1Jhd0NvbnNlbnRzOiBzdHJpbmcsXG4gICAgcHJldmlvdXNDb25zZW50czogQW5vbnltb3VzQ29uc2VudFtdXG4gICk6IHZvaWQge1xuICAgIGlmICghaXNVc2VyTG9nZ2VkSW4gJiYgbmV3UmF3Q29uc2VudHMpIHtcbiAgICAgIGxldCBuZXdDb25zZW50czogQW5vbnltb3VzQ29uc2VudFtdID0gW107XG4gICAgICBuZXdDb25zZW50cyA9IHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmRlY29kZUFuZERlc2VyaWFsaXplKFxuICAgICAgICBuZXdSYXdDb25zZW50c1xuICAgICAgKTtcbiAgICAgIG5ld0NvbnNlbnRzID0gdGhpcy5naXZlUmVxdWlyZWRDb25zZW50cyhuZXdDb25zZW50cyk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuY29uc2VudHNVcGRhdGVkKFxuICAgICAgICAgIG5ld0NvbnNlbnRzLFxuICAgICAgICAgIHByZXZpb3VzQ29uc2VudHNcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLnNldENvbnNlbnRzKG5ld0NvbnNlbnRzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVJlcXVlc3QoXG4gICAgY29uc2VudHM6IEFub255bW91c0NvbnNlbnRbXSxcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+XG4gICk6IEh0dHBSZXF1ZXN0PGFueT4ge1xuICAgIGlmICghY29uc2VudHMpIHtcbiAgICAgIHJldHVybiByZXF1ZXN0O1xuICAgIH1cblxuICAgIGNvbnN0IHJhd0NvbnNlbnRzID0gdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2Uuc2VyaWFsaXplQW5kRW5jb2RlKFxuICAgICAgY29uc2VudHNcbiAgICApO1xuICAgIHJldHVybiByZXF1ZXN0LmNsb25lKHtcbiAgICAgIHNldEhlYWRlcnM6IHtcbiAgICAgICAgW0FOT05ZTU9VU19DT05TRU5UU19IRUFERVJdOiByYXdDb25zZW50cyxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGlzT2NjVXJsKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHVybC5pbmNsdWRlcyh0aGlzLm9jY0VuZHBvaW50cy5nZXRCYXNlRW5kcG9pbnQoKSk7XG4gIH1cblxuICBwcml2YXRlIGdpdmVSZXF1aXJlZENvbnNlbnRzKFxuICAgIGNvbnNlbnRzOiBBbm9ueW1vdXNDb25zZW50W11cbiAgKTogQW5vbnltb3VzQ29uc2VudFtdIHtcbiAgICBjb25zdCBnaXZlbkNvbnNlbnRzID0gWy4uLmNvbnNlbnRzXTtcblxuICAgIGlmIChcbiAgICAgIEJvb2xlYW4odGhpcy5jb25maWcuYW5vbnltb3VzQ29uc2VudHMpICYmXG4gICAgICBCb29sZWFuKHRoaXMuY29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHMpXG4gICAgKSB7XG4gICAgICBmb3IgKGNvbnN0IGNvbnNlbnQgb2YgZ2l2ZW5Db25zZW50cykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5jb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVxdWlyZWRDb25zZW50cy5pbmNsdWRlcyhcbiAgICAgICAgICAgIGNvbnNlbnQudGVtcGxhdGVDb2RlXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zZW50LmNvbnNlbnRTdGF0ZSA9IEFOT05ZTU9VU19DT05TRU5UX1NUQVRVUy5HSVZFTjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZ2l2ZW5Db25zZW50cztcbiAgfVxufVxuIl19