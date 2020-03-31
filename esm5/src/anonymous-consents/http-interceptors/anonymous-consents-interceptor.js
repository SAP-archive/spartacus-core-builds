import { __decorate, __read, __spread, __values } from "tslib";
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
export var ANONYMOUS_CONSENTS_HEADER = 'X-Anonymous-Consents';
var AnonymousConsentsInterceptor = /** @class */ (function () {
    function AnonymousConsentsInterceptor(anonymousConsentsService, authService, occEndpoints, config) {
        this.anonymousConsentsService = anonymousConsentsService;
        this.authService = authService;
        this.occEndpoints = occEndpoints;
        this.config = config;
    }
    AnonymousConsentsInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return iif(function () { return isFeatureEnabled(_this.config, ANONYMOUS_CONSENTS_FEATURE); }, this.anonymousConsentsService.getConsents().pipe(take(1), withLatestFrom(this.authService.isUserLoggedIn()), switchMap(function (_a) {
            var _b = __read(_a, 2), consents = _b[0], isUserLoggedIn = _b[1];
            if (!_this.isOccUrl(request.url)) {
                return next.handle(request);
            }
            var clonedRequest = _this.handleRequest(consents, request);
            return next.handle(clonedRequest).pipe(tap(function (event) {
                if (event instanceof HttpResponse) {
                    _this.handleResponse(isUserLoggedIn, event.headers.get(ANONYMOUS_CONSENTS_HEADER), consents);
                }
            }));
        })), next.handle(request));
    };
    AnonymousConsentsInterceptor.prototype.handleResponse = function (isUserLoggedIn, newRawConsents, previousConsents) {
        if (!isUserLoggedIn && newRawConsents) {
            var newConsents = [];
            newConsents = this.anonymousConsentsService.decodeAndDeserialize(newRawConsents);
            newConsents = this.giveRequiredConsents(newConsents);
            if (this.anonymousConsentsService.consentsUpdated(newConsents, previousConsents)) {
                this.anonymousConsentsService.setConsents(newConsents);
            }
        }
    };
    AnonymousConsentsInterceptor.prototype.handleRequest = function (consents, request) {
        var _a;
        if (!consents) {
            return request;
        }
        var rawConsents = this.anonymousConsentsService.serializeAndEncode(consents);
        return request.clone({
            setHeaders: (_a = {},
                _a[ANONYMOUS_CONSENTS_HEADER] = rawConsents,
                _a),
        });
    };
    AnonymousConsentsInterceptor.prototype.isOccUrl = function (url) {
        return url.includes(this.occEndpoints.getBaseEndpoint());
    };
    AnonymousConsentsInterceptor.prototype.giveRequiredConsents = function (consents) {
        var e_1, _a;
        var givenConsents = __spread(consents);
        if (Boolean(this.config.anonymousConsents) &&
            Boolean(this.config.anonymousConsents.requiredConsents)) {
            try {
                for (var givenConsents_1 = __values(givenConsents), givenConsents_1_1 = givenConsents_1.next(); !givenConsents_1_1.done; givenConsents_1_1 = givenConsents_1.next()) {
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
    AnonymousConsentsInterceptor.ctorParameters = function () { return [
        { type: AnonymousConsentsService },
        { type: AuthService },
        { type: OccEndpointsService },
        { type: AnonymousConsentsConfig }
    ]; };
    AnonymousConsentsInterceptor.ɵprov = i0.ɵɵdefineInjectable({ factory: function AnonymousConsentsInterceptor_Factory() { return new AnonymousConsentsInterceptor(i0.ɵɵinject(i1.AnonymousConsentsService), i0.ɵɵinject(i2.AuthService), i0.ɵɵinject(i3.OccEndpointsService), i0.ɵɵinject(i4.AnonymousConsentsConfig)); }, token: AnonymousConsentsInterceptor, providedIn: "root" });
    AnonymousConsentsInterceptor = __decorate([
        Injectable({ providedIn: 'root' })
    ], AnonymousConsentsInterceptor);
    return AnonymousConsentsInterceptor;
}());
export { AnonymousConsentsInterceptor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLWludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Fub255bW91cy1jb25zZW50cy9odHRwLWludGVyY2VwdG9ycy9hbm9ueW1vdXMtY29uc2VudHMtaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFLTCxZQUFZLEdBQ2IsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxHQUFHLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsMEJBQTBCLEVBQzFCLGdCQUFnQixHQUNqQixNQUFNLDZCQUE2QixDQUFDO0FBQ3JDLE9BQU8sRUFBb0Isd0JBQXdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7O0FBRWhGLE1BQU0sQ0FBQyxJQUFNLHlCQUF5QixHQUFHLHNCQUFzQixDQUFDO0FBR2hFO0lBQ0Usc0NBQ1Usd0JBQWtELEVBQ2xELFdBQXdCLEVBQ3hCLFlBQWlDLEVBQ2pDLE1BQStCO1FBSC9CLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLFdBQU0sR0FBTixN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SUFBQSxrQkFBQSxTQUFBLGFBQWEsQ0FBQSw0Q0FBQSx1RUFBRTtvQkFBaEMsSUFBTSxPQUFPLDBCQUFBO29CQUNoQixJQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUNyRCxPQUFPLENBQUMsWUFBWSxDQUNyQixFQUNEO3dCQUNBLE9BQU8sQ0FBQyxZQUFZLEdBQUcsd0JBQXdCLENBQUMsS0FBSyxDQUFDO3FCQUN2RDtpQkFDRjs7Ozs7Ozs7O1NBQ0Y7UUFDRCxPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDOztnQkF2R21DLHdCQUF3QjtnQkFDckMsV0FBVztnQkFDVixtQkFBbUI7Z0JBQ3pCLHVCQUF1Qjs7O0lBTDlCLDRCQUE0QjtRQUR4QyxVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7T0FDdEIsNEJBQTRCLENBMEd4Qzt1Q0FqSUQ7Q0FpSUMsQUExR0QsSUEwR0M7U0ExR1ksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSHR0cEV2ZW50LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwUmVxdWVzdCxcbiAgSHR0cFJlc3BvbnNlLFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpaWYsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN3aXRjaE1hcCwgdGFrZSwgdGFwLCB3aXRoTGF0ZXN0RnJvbSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9pbmRleCc7XG5pbXBvcnQge1xuICBBTk9OWU1PVVNfQ09OU0VOVFNfRkVBVFVSRSxcbiAgaXNGZWF0dXJlRW5hYmxlZCxcbn0gZnJvbSAnLi4vLi4vZmVhdHVyZXMtY29uZmlnL2luZGV4JztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnQsIEFOT05ZTU9VU19DT05TRU5UX1NUQVRVUyB9IGZyb20gJy4uLy4uL21vZGVsL2luZGV4JztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vY2MvaW5kZXgnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudHNDb25maWcgfSBmcm9tICcuLi9jb25maWcvYW5vbnltb3VzLWNvbnNlbnRzLWNvbmZpZyc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvYW5vbnltb3VzLWNvbnNlbnRzLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgQU5PTllNT1VTX0NPTlNFTlRTX0hFQURFUiA9ICdYLUFub255bW91cy1Db25zZW50cyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQW5vbnltb3VzQ29uc2VudHNJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlOiBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb25maWc6IEFub255bW91c0NvbnNlbnRzQ29uZmlnXG4gICkge31cblxuICBpbnRlcmNlcHQoXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgcmV0dXJuIGlpZihcbiAgICAgICgpID0+IGlzRmVhdHVyZUVuYWJsZWQodGhpcy5jb25maWcsIEFOT05ZTU9VU19DT05TRU5UU19GRUFUVVJFKSxcbiAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmdldENvbnNlbnRzKCkucGlwZShcbiAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5hdXRoU2VydmljZS5pc1VzZXJMb2dnZWRJbigpKSxcbiAgICAgICAgc3dpdGNoTWFwKChbY29uc2VudHMsIGlzVXNlckxvZ2dlZEluXSkgPT4ge1xuICAgICAgICAgIGlmICghdGhpcy5pc09jY1VybChyZXF1ZXN0LnVybCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBjbG9uZWRSZXF1ZXN0ID0gdGhpcy5oYW5kbGVSZXF1ZXN0KGNvbnNlbnRzLCByZXF1ZXN0KTtcbiAgICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUoY2xvbmVkUmVxdWVzdCkucGlwZShcbiAgICAgICAgICAgIHRhcCgoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVSZXNwb25zZShcbiAgICAgICAgICAgICAgICAgIGlzVXNlckxvZ2dlZEluLFxuICAgICAgICAgICAgICAgICAgZXZlbnQuaGVhZGVycy5nZXQoQU5PTllNT1VTX0NPTlNFTlRTX0hFQURFUiksXG4gICAgICAgICAgICAgICAgICBjb25zZW50c1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICBuZXh0LmhhbmRsZShyZXF1ZXN0KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVJlc3BvbnNlKFxuICAgIGlzVXNlckxvZ2dlZEluOiBib29sZWFuLFxuICAgIG5ld1Jhd0NvbnNlbnRzOiBzdHJpbmcsXG4gICAgcHJldmlvdXNDb25zZW50czogQW5vbnltb3VzQ29uc2VudFtdXG4gICk6IHZvaWQge1xuICAgIGlmICghaXNVc2VyTG9nZ2VkSW4gJiYgbmV3UmF3Q29uc2VudHMpIHtcbiAgICAgIGxldCBuZXdDb25zZW50czogQW5vbnltb3VzQ29uc2VudFtdID0gW107XG4gICAgICBuZXdDb25zZW50cyA9IHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmRlY29kZUFuZERlc2VyaWFsaXplKFxuICAgICAgICBuZXdSYXdDb25zZW50c1xuICAgICAgKTtcbiAgICAgIG5ld0NvbnNlbnRzID0gdGhpcy5naXZlUmVxdWlyZWRDb25zZW50cyhuZXdDb25zZW50cyk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuY29uc2VudHNVcGRhdGVkKFxuICAgICAgICAgIG5ld0NvbnNlbnRzLFxuICAgICAgICAgIHByZXZpb3VzQ29uc2VudHNcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLnNldENvbnNlbnRzKG5ld0NvbnNlbnRzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVJlcXVlc3QoXG4gICAgY29uc2VudHM6IEFub255bW91c0NvbnNlbnRbXSxcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+XG4gICk6IEh0dHBSZXF1ZXN0PGFueT4ge1xuICAgIGlmICghY29uc2VudHMpIHtcbiAgICAgIHJldHVybiByZXF1ZXN0O1xuICAgIH1cblxuICAgIGNvbnN0IHJhd0NvbnNlbnRzID0gdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2Uuc2VyaWFsaXplQW5kRW5jb2RlKFxuICAgICAgY29uc2VudHNcbiAgICApO1xuICAgIHJldHVybiByZXF1ZXN0LmNsb25lKHtcbiAgICAgIHNldEhlYWRlcnM6IHtcbiAgICAgICAgW0FOT05ZTU9VU19DT05TRU5UU19IRUFERVJdOiByYXdDb25zZW50cyxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGlzT2NjVXJsKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHVybC5pbmNsdWRlcyh0aGlzLm9jY0VuZHBvaW50cy5nZXRCYXNlRW5kcG9pbnQoKSk7XG4gIH1cblxuICBwcml2YXRlIGdpdmVSZXF1aXJlZENvbnNlbnRzKFxuICAgIGNvbnNlbnRzOiBBbm9ueW1vdXNDb25zZW50W11cbiAgKTogQW5vbnltb3VzQ29uc2VudFtdIHtcbiAgICBjb25zdCBnaXZlbkNvbnNlbnRzID0gWy4uLmNvbnNlbnRzXTtcblxuICAgIGlmIChcbiAgICAgIEJvb2xlYW4odGhpcy5jb25maWcuYW5vbnltb3VzQ29uc2VudHMpICYmXG4gICAgICBCb29sZWFuKHRoaXMuY29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHMpXG4gICAgKSB7XG4gICAgICBmb3IgKGNvbnN0IGNvbnNlbnQgb2YgZ2l2ZW5Db25zZW50cykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5jb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVxdWlyZWRDb25zZW50cy5pbmNsdWRlcyhcbiAgICAgICAgICAgIGNvbnNlbnQudGVtcGxhdGVDb2RlXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zZW50LmNvbnNlbnRTdGF0ZSA9IEFOT05ZTU9VU19DT05TRU5UX1NUQVRVUy5HSVZFTjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZ2l2ZW5Db25zZW50cztcbiAgfVxufVxuIl19