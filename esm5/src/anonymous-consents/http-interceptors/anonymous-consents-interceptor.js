/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
export var ANONYMOUS_CONSENTS_HEADER = 'X-Anonymous-Consents';
var AnonymousConsentsInterceptor = /** @class */ (function () {
    function AnonymousConsentsInterceptor(anonymousConsentsService, authService, occEndpoints, config) {
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
    AnonymousConsentsInterceptor.prototype.intercept = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        var _this = this;
        return iif((/**
         * @return {?}
         */
        function () { return isFeatureEnabled(_this.config, ANONYMOUS_CONSENTS_FEATURE); }), this.anonymousConsentsService.getConsents().pipe(take(1), withLatestFrom(this.authService.isUserLoggedIn()), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), consents = _b[0], isUserLoggedIn = _b[1];
            if (!_this.isOccUrl(request.url)) {
                return next.handle(request);
            }
            /** @type {?} */
            var clonedRequest = _this.handleRequest(consents, request);
            return next.handle(clonedRequest).pipe(tap((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                if (event instanceof HttpResponse) {
                    _this.handleResponse(isUserLoggedIn, event.headers.get(ANONYMOUS_CONSENTS_HEADER), consents);
                }
            })));
        }))), next.handle(request));
    };
    /**
     * @private
     * @param {?} isUserLoggedIn
     * @param {?} newRawConsents
     * @param {?} previousConsents
     * @return {?}
     */
    AnonymousConsentsInterceptor.prototype.handleResponse = /**
     * @private
     * @param {?} isUserLoggedIn
     * @param {?} newRawConsents
     * @param {?} previousConsents
     * @return {?}
     */
    function (isUserLoggedIn, newRawConsents, previousConsents) {
        if (!isUserLoggedIn && newRawConsents) {
            /** @type {?} */
            var newConsents = [];
            newConsents = this.anonymousConsentsService.decodeAndDeserialize(newRawConsents);
            newConsents = this.giveRequiredConsents(newConsents);
            if (this.anonymousConsentsService.consentsUpdated(newConsents, previousConsents)) {
                this.anonymousConsentsService.setConsents(newConsents);
            }
        }
    };
    /**
     * @private
     * @param {?} consents
     * @param {?} request
     * @return {?}
     */
    AnonymousConsentsInterceptor.prototype.handleRequest = /**
     * @private
     * @param {?} consents
     * @param {?} request
     * @return {?}
     */
    function (consents, request) {
        var _a;
        if (!consents) {
            return request;
        }
        /** @type {?} */
        var rawConsents = this.anonymousConsentsService.serializeAndEncode(consents);
        return request.clone({
            setHeaders: (_a = {},
                _a[ANONYMOUS_CONSENTS_HEADER] = rawConsents,
                _a),
        });
    };
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    AnonymousConsentsInterceptor.prototype.isOccUrl = /**
     * @private
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return url.includes(this.occEndpoints.getBaseEndpoint());
    };
    /**
     * @private
     * @param {?} consents
     * @return {?}
     */
    AnonymousConsentsInterceptor.prototype.giveRequiredConsents = /**
     * @private
     * @param {?} consents
     * @return {?}
     */
    function (consents) {
        var e_1, _a;
        /** @type {?} */
        var givenConsents = tslib_1.__spread(consents);
        if (Boolean(this.config.anonymousConsents) &&
            Boolean(this.config.anonymousConsents.requiredConsents)) {
            try {
                for (var givenConsents_1 = tslib_1.__values(givenConsents), givenConsents_1_1 = givenConsents_1.next(); !givenConsents_1_1.done; givenConsents_1_1 = givenConsents_1.next()) {
                    var consent = givenConsents_1_1.value;
                    if (this.config.anonymousConsents.requiredConsents.includes(consent.templateCode)) {
                        consent.consentState = ANONYMOUS_CONSENT_STATUS.GIVEN;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (givenConsents_1_1 && !givenConsents_1_1.done && (_a = givenConsents_1.return)) _a.call(givenConsents_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return givenConsents;
    };
    AnonymousConsentsInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AnonymousConsentsInterceptor.ctorParameters = function () { return [
        { type: AnonymousConsentsService },
        { type: AuthService },
        { type: OccEndpointsService },
        { type: AnonymousConsentsConfig }
    ]; };
    return AnonymousConsentsInterceptor;
}());
export { AnonymousConsentsInterceptor };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLWludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Fub255bW91cy1jb25zZW50cy9odHRwLWludGVyY2VwdG9ycy9hbm9ueW1vdXMtY29uc2VudHMtaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBS0wsWUFBWSxHQUNiLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsR0FBRyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUNMLDBCQUEwQixFQUMxQixnQkFBZ0IsR0FDakIsTUFBTSw2QkFBNkIsQ0FBQztBQUNyQyxPQUFPLEVBQW9CLHdCQUF3QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7O0FBRWhGLE1BQU0sS0FBTyx5QkFBeUIsR0FBRyxzQkFBc0I7QUFFL0Q7SUFFRSxzQ0FDVSx3QkFBa0QsRUFDbEQsV0FBd0IsRUFDeEIsWUFBaUMsRUFDakMsTUFBK0I7UUFIL0IsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsV0FBTSxHQUFOLE1BQU0sQ0FBeUI7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dkQ7O2dCQUNBLEtBQXNCLElBQUEsa0JBQUEsaUJBQUEsYUFBYSxDQUFBLDRDQUFBLHVFQUFFO29CQUFoQyxJQUFNLE9BQU8sMEJBQUE7b0JBQ2hCLElBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQ3JELE9BQU8sQ0FBQyxZQUFZLENBQ3JCLEVBQ0Q7d0JBQ0EsT0FBTyxDQUFDLFlBQVksR0FBRyx3QkFBd0IsQ0FBQyxLQUFLLENBQUM7cUJBQ3ZEO2lCQUNGOzs7Ozs7Ozs7U0FDRjtRQUNELE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7O2dCQTFHRixVQUFVOzs7O2dCQUpGLHdCQUF3QjtnQkFSeEIsV0FBVztnQkFNWCxtQkFBbUI7Z0JBQ25CLHVCQUF1Qjs7SUFnSGhDLG1DQUFDO0NBQUEsQUEzR0QsSUEyR0M7U0ExR1ksNEJBQTRCOzs7Ozs7SUFFckMsZ0VBQTBEOzs7OztJQUMxRCxtREFBZ0M7Ozs7O0lBQ2hDLG9EQUF5Qzs7Ozs7SUFDekMsOENBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSHR0cEV2ZW50LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwUmVxdWVzdCxcbiAgSHR0cFJlc3BvbnNlLFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpaWYsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN3aXRjaE1hcCwgdGFrZSwgdGFwLCB3aXRoTGF0ZXN0RnJvbSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9pbmRleCc7XG5pbXBvcnQge1xuICBBTk9OWU1PVVNfQ09OU0VOVFNfRkVBVFVSRSxcbiAgaXNGZWF0dXJlRW5hYmxlZCxcbn0gZnJvbSAnLi4vLi4vZmVhdHVyZXMtY29uZmlnL2luZGV4JztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnQsIEFOT05ZTU9VU19DT05TRU5UX1NUQVRVUyB9IGZyb20gJy4uLy4uL21vZGVsL2luZGV4JztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vY2MvaW5kZXgnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudHNDb25maWcgfSBmcm9tICcuLi9jb25maWcvYW5vbnltb3VzLWNvbnNlbnRzLWNvbmZpZyc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvYW5vbnltb3VzLWNvbnNlbnRzLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgQU5PTllNT1VTX0NPTlNFTlRTX0hFQURFUiA9ICdYLUFub255bW91cy1Db25zZW50cyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbm9ueW1vdXNDb25zZW50c0ludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhbm9ueW1vdXNDb25zZW50c1NlcnZpY2U6IEFub255bW91c0NvbnNlbnRzU2VydmljZSxcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcml2YXRlIGNvbmZpZzogQW5vbnltb3VzQ29uc2VudHNDb25maWdcbiAgKSB7fVxuXG4gIGludGVyY2VwdChcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICByZXR1cm4gaWlmKFxuICAgICAgKCkgPT4gaXNGZWF0dXJlRW5hYmxlZCh0aGlzLmNvbmZpZywgQU5PTllNT1VTX0NPTlNFTlRTX0ZFQVRVUkUpLFxuICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuZ2V0Q29uc2VudHMoKS5waXBlKFxuICAgICAgICB0YWtlKDEpLFxuICAgICAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluKCkpLFxuICAgICAgICBzd2l0Y2hNYXAoKFtjb25zZW50cywgaXNVc2VyTG9nZ2VkSW5dKSA9PiB7XG4gICAgICAgICAgaWYgKCF0aGlzLmlzT2NjVXJsKHJlcXVlc3QudXJsKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGNsb25lZFJlcXVlc3QgPSB0aGlzLmhhbmRsZVJlcXVlc3QoY29uc2VudHMsIHJlcXVlc3QpO1xuICAgICAgICAgIHJldHVybiBuZXh0LmhhbmRsZShjbG9uZWRSZXF1ZXN0KS5waXBlKFxuICAgICAgICAgICAgdGFwKGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVSZXNwb25zZShcbiAgICAgICAgICAgICAgICAgIGlzVXNlckxvZ2dlZEluLFxuICAgICAgICAgICAgICAgICAgZXZlbnQuaGVhZGVycy5nZXQoQU5PTllNT1VTX0NPTlNFTlRTX0hFQURFUiksXG4gICAgICAgICAgICAgICAgICBjb25zZW50c1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICBuZXh0LmhhbmRsZShyZXF1ZXN0KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVJlc3BvbnNlKFxuICAgIGlzVXNlckxvZ2dlZEluOiBib29sZWFuLFxuICAgIG5ld1Jhd0NvbnNlbnRzOiBzdHJpbmcsXG4gICAgcHJldmlvdXNDb25zZW50czogQW5vbnltb3VzQ29uc2VudFtdXG4gICk6IHZvaWQge1xuICAgIGlmICghaXNVc2VyTG9nZ2VkSW4gJiYgbmV3UmF3Q29uc2VudHMpIHtcbiAgICAgIGxldCBuZXdDb25zZW50czogQW5vbnltb3VzQ29uc2VudFtdID0gW107XG4gICAgICBuZXdDb25zZW50cyA9IHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmRlY29kZUFuZERlc2VyaWFsaXplKFxuICAgICAgICBuZXdSYXdDb25zZW50c1xuICAgICAgKTtcbiAgICAgIG5ld0NvbnNlbnRzID0gdGhpcy5naXZlUmVxdWlyZWRDb25zZW50cyhuZXdDb25zZW50cyk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuY29uc2VudHNVcGRhdGVkKFxuICAgICAgICAgIG5ld0NvbnNlbnRzLFxuICAgICAgICAgIHByZXZpb3VzQ29uc2VudHNcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLnNldENvbnNlbnRzKG5ld0NvbnNlbnRzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVJlcXVlc3QoXG4gICAgY29uc2VudHM6IEFub255bW91c0NvbnNlbnRbXSxcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+XG4gICk6IEh0dHBSZXF1ZXN0PGFueT4ge1xuICAgIGlmICghY29uc2VudHMpIHtcbiAgICAgIHJldHVybiByZXF1ZXN0O1xuICAgIH1cblxuICAgIGNvbnN0IHJhd0NvbnNlbnRzID0gdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2Uuc2VyaWFsaXplQW5kRW5jb2RlKFxuICAgICAgY29uc2VudHNcbiAgICApO1xuICAgIHJldHVybiByZXF1ZXN0LmNsb25lKHtcbiAgICAgIHNldEhlYWRlcnM6IHtcbiAgICAgICAgW0FOT05ZTU9VU19DT05TRU5UU19IRUFERVJdOiByYXdDb25zZW50cyxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGlzT2NjVXJsKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHVybC5pbmNsdWRlcyh0aGlzLm9jY0VuZHBvaW50cy5nZXRCYXNlRW5kcG9pbnQoKSk7XG4gIH1cblxuICBwcml2YXRlIGdpdmVSZXF1aXJlZENvbnNlbnRzKFxuICAgIGNvbnNlbnRzOiBBbm9ueW1vdXNDb25zZW50W11cbiAgKTogQW5vbnltb3VzQ29uc2VudFtdIHtcbiAgICBjb25zdCBnaXZlbkNvbnNlbnRzID0gWy4uLmNvbnNlbnRzXTtcblxuICAgIGlmIChcbiAgICAgIEJvb2xlYW4odGhpcy5jb25maWcuYW5vbnltb3VzQ29uc2VudHMpICYmXG4gICAgICBCb29sZWFuKHRoaXMuY29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHMpXG4gICAgKSB7XG4gICAgICBmb3IgKGNvbnN0IGNvbnNlbnQgb2YgZ2l2ZW5Db25zZW50cykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5jb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVxdWlyZWRDb25zZW50cy5pbmNsdWRlcyhcbiAgICAgICAgICAgIGNvbnNlbnQudGVtcGxhdGVDb2RlXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zZW50LmNvbnNlbnRTdGF0ZSA9IEFOT05ZTU9VU19DT05TRU5UX1NUQVRVUy5HSVZFTjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZ2l2ZW5Db25zZW50cztcbiAgfVxufVxuIl19