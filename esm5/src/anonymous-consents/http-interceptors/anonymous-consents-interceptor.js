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
import * as i0 from "@angular/core";
import * as i1 from "../facade/anonymous-consents.service";
import * as i2 from "../../auth/facade/auth.service";
import * as i3 from "../../occ/services/occ-endpoints.service";
import * as i4 from "../config/anonymous-consents-config";
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
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    AnonymousConsentsInterceptor.ctorParameters = function () { return [
        { type: AnonymousConsentsService },
        { type: AuthService },
        { type: OccEndpointsService },
        { type: AnonymousConsentsConfig }
    ]; };
    /** @nocollapse */ AnonymousConsentsInterceptor.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AnonymousConsentsInterceptor_Factory() { return new AnonymousConsentsInterceptor(i0.ɵɵinject(i1.AnonymousConsentsService), i0.ɵɵinject(i2.AuthService), i0.ɵɵinject(i3.OccEndpointsService), i0.ɵɵinject(i4.AnonymousConsentsConfig)); }, token: AnonymousConsentsInterceptor, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLWludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Fub255bW91cy1jb25zZW50cy9odHRwLWludGVyY2VwdG9ycy9hbm9ueW1vdXMtY29uc2VudHMtaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBS0wsWUFBWSxHQUNiLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsR0FBRyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUNMLDBCQUEwQixFQUMxQixnQkFBZ0IsR0FDakIsTUFBTSw2QkFBNkIsQ0FBQztBQUNyQyxPQUFPLEVBQW9CLHdCQUF3QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7Ozs7QUFFaEYsTUFBTSxLQUFPLHlCQUF5QixHQUFHLHNCQUFzQjtBQUUvRDtJQUVFLHNDQUNVLHdCQUFrRCxFQUNsRCxXQUF3QixFQUN4QixZQUFpQyxFQUNqQyxNQUErQjtRQUgvQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNqQyxXQUFNLEdBQU4sTUFBTSxD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QyxFQUN2RDs7Z0JBQ0EsS0FBc0IsSUFBQSxrQkFBQSxpQkFBQSxhQUFhLENBQUEsNENBQUEsdUVBQUU7b0JBQWhDLElBQU0sT0FBTywwQkFBQTtvQkFDaEIsSUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FDckQsT0FBTyxDQUFDLFlBQVksQ0FDckIsRUFDRDt3QkFDQSxPQUFPLENBQUMsWUFBWSxHQUFHLHdCQUF3QixDQUFDLEtBQUssQ0FBQztxQkFDdkQ7aUJBQ0Y7Ozs7Ozs7OztTQUNGO1FBQ0QsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQzs7Z0JBMUdGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBSnpCLHdCQUF3QjtnQkFSeEIsV0FBVztnQkFNWCxtQkFBbUI7Z0JBQ25CLHVCQUF1Qjs7O3VDQWpCaEM7Q0FpSUMsQUEzR0QsSUEyR0M7U0ExR1ksNEJBQTRCOzs7Ozs7SUFFckMsZ0VBQTBEOzs7OztJQUMxRCxtREFBZ0M7Ozs7O0lBQ2hDLG9EQUF5Qzs7Ozs7SUFDekMsOENBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSHR0cEV2ZW50LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwUmVxdWVzdCxcbiAgSHR0cFJlc3BvbnNlLFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpaWYsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN3aXRjaE1hcCwgdGFrZSwgdGFwLCB3aXRoTGF0ZXN0RnJvbSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9pbmRleCc7XG5pbXBvcnQge1xuICBBTk9OWU1PVVNfQ09OU0VOVFNfRkVBVFVSRSxcbiAgaXNGZWF0dXJlRW5hYmxlZCxcbn0gZnJvbSAnLi4vLi4vZmVhdHVyZXMtY29uZmlnL2luZGV4JztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnQsIEFOT05ZTU9VU19DT05TRU5UX1NUQVRVUyB9IGZyb20gJy4uLy4uL21vZGVsL2luZGV4JztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vY2MvaW5kZXgnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudHNDb25maWcgfSBmcm9tICcuLi9jb25maWcvYW5vbnltb3VzLWNvbnNlbnRzLWNvbmZpZyc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvYW5vbnltb3VzLWNvbnNlbnRzLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgQU5PTllNT1VTX0NPTlNFTlRTX0hFQURFUiA9ICdYLUFub255bW91cy1Db25zZW50cyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQW5vbnltb3VzQ29uc2VudHNJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlOiBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb25maWc6IEFub255bW91c0NvbnNlbnRzQ29uZmlnXG4gICkge31cblxuICBpbnRlcmNlcHQoXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgcmV0dXJuIGlpZihcbiAgICAgICgpID0+IGlzRmVhdHVyZUVuYWJsZWQodGhpcy5jb25maWcsIEFOT05ZTU9VU19DT05TRU5UU19GRUFUVVJFKSxcbiAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmdldENvbnNlbnRzKCkucGlwZShcbiAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5hdXRoU2VydmljZS5pc1VzZXJMb2dnZWRJbigpKSxcbiAgICAgICAgc3dpdGNoTWFwKChbY29uc2VudHMsIGlzVXNlckxvZ2dlZEluXSkgPT4ge1xuICAgICAgICAgIGlmICghdGhpcy5pc09jY1VybChyZXF1ZXN0LnVybCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBjbG9uZWRSZXF1ZXN0ID0gdGhpcy5oYW5kbGVSZXF1ZXN0KGNvbnNlbnRzLCByZXF1ZXN0KTtcbiAgICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUoY2xvbmVkUmVxdWVzdCkucGlwZShcbiAgICAgICAgICAgIHRhcChldmVudCA9PiB7XG4gICAgICAgICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlUmVzcG9uc2UoXG4gICAgICAgICAgICAgICAgICBpc1VzZXJMb2dnZWRJbixcbiAgICAgICAgICAgICAgICAgIGV2ZW50LmhlYWRlcnMuZ2V0KEFOT05ZTU9VU19DT05TRU5UU19IRUFERVIpLFxuICAgICAgICAgICAgICAgICAgY29uc2VudHNcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICApLFxuICAgICAgbmV4dC5oYW5kbGUocmVxdWVzdClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVSZXNwb25zZShcbiAgICBpc1VzZXJMb2dnZWRJbjogYm9vbGVhbixcbiAgICBuZXdSYXdDb25zZW50czogc3RyaW5nLFxuICAgIHByZXZpb3VzQ29uc2VudHM6IEFub255bW91c0NvbnNlbnRbXVxuICApOiB2b2lkIHtcbiAgICBpZiAoIWlzVXNlckxvZ2dlZEluICYmIG5ld1Jhd0NvbnNlbnRzKSB7XG4gICAgICBsZXQgbmV3Q29uc2VudHM6IEFub255bW91c0NvbnNlbnRbXSA9IFtdO1xuICAgICAgbmV3Q29uc2VudHMgPSB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5kZWNvZGVBbmREZXNlcmlhbGl6ZShcbiAgICAgICAgbmV3UmF3Q29uc2VudHNcbiAgICAgICk7XG4gICAgICBuZXdDb25zZW50cyA9IHRoaXMuZ2l2ZVJlcXVpcmVkQ29uc2VudHMobmV3Q29uc2VudHMpO1xuXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmNvbnNlbnRzVXBkYXRlZChcbiAgICAgICAgICBuZXdDb25zZW50cyxcbiAgICAgICAgICBwcmV2aW91c0NvbnNlbnRzXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5zZXRDb25zZW50cyhuZXdDb25zZW50cyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVSZXF1ZXN0KFxuICAgIGNvbnNlbnRzOiBBbm9ueW1vdXNDb25zZW50W10sXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PlxuICApOiBIdHRwUmVxdWVzdDxhbnk+IHtcbiAgICBpZiAoIWNvbnNlbnRzKSB7XG4gICAgICByZXR1cm4gcmVxdWVzdDtcbiAgICB9XG5cbiAgICBjb25zdCByYXdDb25zZW50cyA9IHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLnNlcmlhbGl6ZUFuZEVuY29kZShcbiAgICAgIGNvbnNlbnRzXG4gICAgKTtcbiAgICByZXR1cm4gcmVxdWVzdC5jbG9uZSh7XG4gICAgICBzZXRIZWFkZXJzOiB7XG4gICAgICAgIFtBTk9OWU1PVVNfQ09OU0VOVFNfSEVBREVSXTogcmF3Q29uc2VudHMsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpc09jY1VybCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB1cmwuaW5jbHVkZXModGhpcy5vY2NFbmRwb2ludHMuZ2V0QmFzZUVuZHBvaW50KCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnaXZlUmVxdWlyZWRDb25zZW50cyhcbiAgICBjb25zZW50czogQW5vbnltb3VzQ29uc2VudFtdXG4gICk6IEFub255bW91c0NvbnNlbnRbXSB7XG4gICAgY29uc3QgZ2l2ZW5Db25zZW50cyA9IFsuLi5jb25zZW50c107XG5cbiAgICBpZiAoXG4gICAgICBCb29sZWFuKHRoaXMuY29uZmlnLmFub255bW91c0NvbnNlbnRzKSAmJlxuICAgICAgQm9vbGVhbih0aGlzLmNvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZXF1aXJlZENvbnNlbnRzKVxuICAgICkge1xuICAgICAgZm9yIChjb25zdCBjb25zZW50IG9mIGdpdmVuQ29uc2VudHMpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMuY29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHMuaW5jbHVkZXMoXG4gICAgICAgICAgICBjb25zZW50LnRlbXBsYXRlQ29kZVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc2VudC5jb25zZW50U3RhdGUgPSBBTk9OWU1PVVNfQ09OU0VOVF9TVEFUVVMuR0lWRU47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGdpdmVuQ29uc2VudHM7XG4gIH1cbn1cbiJdfQ==