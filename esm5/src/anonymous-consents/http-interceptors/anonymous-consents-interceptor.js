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
                    _this.handleResponse(event.headers.get(ANONYMOUS_CONSENTS_HEADER), isUserLoggedIn);
                }
            })));
        }))), next.handle(request));
    };
    /**
     * @private
     * @param {?} rawConsents
     * @param {?} isUserLoggedIn
     * @return {?}
     */
    AnonymousConsentsInterceptor.prototype.handleResponse = /**
     * @private
     * @param {?} rawConsents
     * @param {?} isUserLoggedIn
     * @return {?}
     */
    function (rawConsents, isUserLoggedIn) {
        if (rawConsents && !isUserLoggedIn) {
            /** @type {?} */
            var consents = this.decodeAndDeserialize(rawConsents);
            this.giveRequiredConsents(consents);
        }
    };
    /**
     * @private
     * @param {?} rawConsents
     * @return {?}
     */
    AnonymousConsentsInterceptor.prototype.decodeAndDeserialize = /**
     * @private
     * @param {?} rawConsents
     * @return {?}
     */
    function (rawConsents) {
        /** @type {?} */
        var decoded = decodeURIComponent(rawConsents);
        /** @type {?} */
        var unserialized = (/** @type {?} */ (JSON.parse(decoded)));
        return unserialized;
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
        var rawConsents = this.serializeAndEncode(consents);
        return request.clone({
            setHeaders: (_a = {},
                _a[ANONYMOUS_CONSENTS_HEADER] = rawConsents,
                _a),
        });
    };
    /**
     * @private
     * @param {?} consents
     * @return {?}
     */
    AnonymousConsentsInterceptor.prototype.serializeAndEncode = /**
     * @private
     * @param {?} consents
     * @return {?}
     */
    function (consents) {
        if (!consents) {
            return '';
        }
        /** @type {?} */
        var serialized = JSON.stringify(consents);
        /** @type {?} */
        var encoded = encodeURIComponent(serialized);
        return encoded;
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
        if (Boolean(this.config.anonymousConsents) &&
            Boolean(this.config.anonymousConsents.requiredConsents)) {
            try {
                for (var consents_1 = tslib_1.__values(consents), consents_1_1 = consents_1.next(); !consents_1_1.done; consents_1_1 = consents_1.next()) {
                    var consent = consents_1_1.value;
                    if (this.config.anonymousConsents.requiredConsents.includes(consent.templateCode)) {
                        consent.consentState = ANONYMOUS_CONSENT_STATUS.GIVEN;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (consents_1_1 && !consents_1_1.done && (_a = consents_1.return)) _a.call(consents_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        this.anonymousConsentsService.setConsents(consents);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLWludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Fub255bW91cy1jb25zZW50cy9odHRwLWludGVyY2VwdG9ycy9hbm9ueW1vdXMtY29uc2VudHMtaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBS0wsWUFBWSxHQUNiLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsR0FBRyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUNMLDBCQUEwQixFQUMxQixnQkFBZ0IsR0FDakIsTUFBTSw2QkFBNkIsQ0FBQztBQUNyQyxPQUFPLEVBQW9CLHdCQUF3QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7O0FBRWhGLE1BQU0sS0FBTyx5QkFBeUIsR0FBRyxzQkFBc0I7QUFFL0Q7SUFFRSxzQ0FDVSx3QkFBa0QsRUFDbEQsV0FBd0IsRUFDeEIsWUFBaUMsRUFDakMsTUFBK0I7UUFIL0IsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsV0FBTSxHQUFOLE1BQU0sQ0FBeUI7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QTVCLFVBQTZCLFFBQTRCOztRQUN2RCxJQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDO1lBQ3RDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLEVBQ3ZEOztnQkFDQSxLQUFzQixJQUFBLGFBQUEsaUJBQUEsUUFBUSxDQUFBLGtDQUFBLHdEQUFFO29CQUEzQixJQUFNLE9BQU8scUJBQUE7b0JBQ2hCLElBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQ3JELE9BQU8sQ0FBQyxZQUFZLENBQ3JCLEVBQ0Q7d0JBQ0EsT0FBTyxDQUFDLFlBQVksR0FBRyx3QkFBd0IsQ0FBQyxLQUFLLENBQUM7cUJBQ3ZEO2lCQUNGOzs7Ozs7Ozs7U0FDRjtRQUVELElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Z0JBbkdGLFVBQVU7Ozs7Z0JBSkYsd0JBQXdCO2dCQVJ4QixXQUFXO2dCQU1YLG1CQUFtQjtnQkFDbkIsdUJBQXVCOztJQXlHaEMsbUNBQUM7Q0FBQSxBQXBHRCxJQW9HQztTQW5HWSw0QkFBNEI7Ozs7OztJQUVyQyxnRUFBMEQ7Ozs7O0lBQzFELG1EQUFnQzs7Ozs7SUFDaEMsb0RBQXlDOzs7OztJQUN6Qyw4Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBIdHRwRXZlbnQsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBSZXF1ZXN0LFxuICBIdHRwUmVzcG9uc2UsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlpZiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCB0YWtlLCB0YXAsIHdpdGhMYXRlc3RGcm9tIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2luZGV4JztcbmltcG9ydCB7XG4gIEFOT05ZTU9VU19DT05TRU5UU19GRUFUVVJFLFxuICBpc0ZlYXR1cmVFbmFibGVkLFxufSBmcm9tICcuLi8uLi9mZWF0dXJlcy1jb25maWcvaW5kZXgnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudCwgQU5PTllNT1VTX0NPTlNFTlRfU1RBVFVTIH0gZnJvbSAnLi4vLi4vbW9kZWwvaW5kZXgnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL29jYy9pbmRleCc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50c0NvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9hbm9ueW1vdXMtY29uc2VudHMtY29uZmlnJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9hbm9ueW1vdXMtY29uc2VudHMuc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBBTk9OWU1PVVNfQ09OU0VOVFNfSEVBREVSID0gJ1gtQW5vbnltb3VzLUNvbnNlbnRzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFub255bW91c0NvbnNlbnRzSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFub255bW91c0NvbnNlbnRzU2VydmljZTogQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgY29uZmlnOiBBbm9ueW1vdXNDb25zZW50c0NvbmZpZ1xuICApIHt9XG5cbiAgaW50ZXJjZXB0KFxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgbmV4dDogSHR0cEhhbmRsZXJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIHJldHVybiBpaWYoXG4gICAgICAoKSA9PiBpc0ZlYXR1cmVFbmFibGVkKHRoaXMuY29uZmlnLCBBTk9OWU1PVVNfQ09OU0VOVFNfRkVBVFVSRSksXG4gICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5nZXRDb25zZW50cygpLnBpcGUoXG4gICAgICAgIHRha2UoMSksXG4gICAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuYXV0aFNlcnZpY2UuaXNVc2VyTG9nZ2VkSW4oKSksXG4gICAgICAgIHN3aXRjaE1hcCgoW2NvbnNlbnRzLCBpc1VzZXJMb2dnZWRJbl0pID0+IHtcbiAgICAgICAgICBpZiAoIXRoaXMuaXNPY2NVcmwocmVxdWVzdC51cmwpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgY2xvbmVkUmVxdWVzdCA9IHRoaXMuaGFuZGxlUmVxdWVzdChjb25zZW50cywgcmVxdWVzdCk7XG4gICAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKGNsb25lZFJlcXVlc3QpLnBpcGUoXG4gICAgICAgICAgICB0YXAoZXZlbnQgPT4ge1xuICAgICAgICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVJlc3BvbnNlKFxuICAgICAgICAgICAgICAgICAgZXZlbnQuaGVhZGVycy5nZXQoQU5PTllNT1VTX0NPTlNFTlRTX0hFQURFUiksXG4gICAgICAgICAgICAgICAgICBpc1VzZXJMb2dnZWRJblxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICBuZXh0LmhhbmRsZShyZXF1ZXN0KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVJlc3BvbnNlKHJhd0NvbnNlbnRzOiBzdHJpbmcsIGlzVXNlckxvZ2dlZEluOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHJhd0NvbnNlbnRzICYmICFpc1VzZXJMb2dnZWRJbikge1xuICAgICAgY29uc3QgY29uc2VudHMgPSB0aGlzLmRlY29kZUFuZERlc2VyaWFsaXplKHJhd0NvbnNlbnRzKTtcbiAgICAgIHRoaXMuZ2l2ZVJlcXVpcmVkQ29uc2VudHMoY29uc2VudHMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZGVjb2RlQW5kRGVzZXJpYWxpemUocmF3Q29uc2VudHM6IHN0cmluZyk6IEFub255bW91c0NvbnNlbnRbXSB7XG4gICAgY29uc3QgZGVjb2RlZCA9IGRlY29kZVVSSUNvbXBvbmVudChyYXdDb25zZW50cyk7XG4gICAgY29uc3QgdW5zZXJpYWxpemVkID0gSlNPTi5wYXJzZShkZWNvZGVkKSBhcyBBbm9ueW1vdXNDb25zZW50W107XG4gICAgcmV0dXJuIHVuc2VyaWFsaXplZDtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlUmVxdWVzdChcbiAgICBjb25zZW50czogQW5vbnltb3VzQ29uc2VudFtdLFxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT5cbiAgKTogSHR0cFJlcXVlc3Q8YW55PiB7XG4gICAgaWYgKCFjb25zZW50cykge1xuICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgfVxuXG4gICAgY29uc3QgcmF3Q29uc2VudHMgPSB0aGlzLnNlcmlhbGl6ZUFuZEVuY29kZShjb25zZW50cyk7XG4gICAgcmV0dXJuIHJlcXVlc3QuY2xvbmUoe1xuICAgICAgc2V0SGVhZGVyczoge1xuICAgICAgICBbQU5PTllNT1VTX0NPTlNFTlRTX0hFQURFUl06IHJhd0NvbnNlbnRzLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2VyaWFsaXplQW5kRW5jb2RlKGNvbnNlbnRzOiBBbm9ueW1vdXNDb25zZW50W10pOiBzdHJpbmcge1xuICAgIGlmICghY29uc2VudHMpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgY29uc3Qgc2VyaWFsaXplZCA9IEpTT04uc3RyaW5naWZ5KGNvbnNlbnRzKTtcbiAgICBjb25zdCBlbmNvZGVkID0gZW5jb2RlVVJJQ29tcG9uZW50KHNlcmlhbGl6ZWQpO1xuICAgIHJldHVybiBlbmNvZGVkO1xuICB9XG5cbiAgcHJpdmF0ZSBpc09jY1VybCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB1cmwuaW5jbHVkZXModGhpcy5vY2NFbmRwb2ludHMuZ2V0QmFzZUVuZHBvaW50KCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnaXZlUmVxdWlyZWRDb25zZW50cyhjb25zZW50czogQW5vbnltb3VzQ29uc2VudFtdKTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgQm9vbGVhbih0aGlzLmNvbmZpZy5hbm9ueW1vdXNDb25zZW50cykgJiZcbiAgICAgIEJvb2xlYW4odGhpcy5jb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVxdWlyZWRDb25zZW50cylcbiAgICApIHtcbiAgICAgIGZvciAoY29uc3QgY29uc2VudCBvZiBjb25zZW50cykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5jb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVxdWlyZWRDb25zZW50cy5pbmNsdWRlcyhcbiAgICAgICAgICAgIGNvbnNlbnQudGVtcGxhdGVDb2RlXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zZW50LmNvbnNlbnRTdGF0ZSA9IEFOT05ZTU9VU19DT05TRU5UX1NUQVRVUy5HSVZFTjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLnNldENvbnNlbnRzKGNvbnNlbnRzKTtcbiAgfVxufVxuIl19