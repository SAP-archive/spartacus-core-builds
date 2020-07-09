import { __decorate, __read, __spread, __values } from "tslib";
import { HttpResponse, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap, take, tap, withLatestFrom } from 'rxjs/operators';
import { AuthService } from '../../auth/index';
import { ANONYMOUS_CONSENTS_HEADER, ANONYMOUS_CONSENT_STATUS, } from '../../model/index';
import { OccEndpointsService } from '../../occ/index';
import { AnonymousConsentsConfig } from '../config/anonymous-consents-config';
import { AnonymousConsentsService } from '../facade/anonymous-consents.service';
import * as i0 from "@angular/core";
import * as i1 from "../facade/anonymous-consents.service";
import * as i2 from "../../auth/facade/auth.service";
import * as i3 from "../../occ/services/occ-endpoints.service";
import * as i4 from "../config/anonymous-consents-config";
var AnonymousConsentsInterceptor = /** @class */ (function () {
    function AnonymousConsentsInterceptor(anonymousConsentsService, authService, occEndpoints, config) {
        this.anonymousConsentsService = anonymousConsentsService;
        this.authService = authService;
        this.occEndpoints = occEndpoints;
        this.config = config;
    }
    AnonymousConsentsInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return this.anonymousConsentsService.getConsents().pipe(take(1), withLatestFrom(this.authService.isUserLoggedIn()), switchMap(function (_a) {
            var _b = __read(_a, 2), consents = _b[0], isUserLoggedIn = _b[1];
            if (!_this.isOccUrl(request.url)) {
                return next.handle(request);
            }
            var clonedRequest = _this.handleRequest(consents, request);
            return next.handle(clonedRequest).pipe(tap(function (event) {
                if (event instanceof HttpResponse &&
                    event.url.startsWith(_this.occEndpoints.getUrl('anonymousConsentTemplates'))) {
                    _this.handleResponse(isUserLoggedIn, event.headers.get(ANONYMOUS_CONSENTS_HEADER), consents);
                }
            }));
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLWludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Fub255bW91cy1jb25zZW50cy9odHRwLWludGVyY2VwdG9ycy9hbm9ueW1vdXMtY29uc2VudHMtaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFLTCxZQUFZLEdBQ2IsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUVMLHlCQUF5QixFQUN6Qix3QkFBd0IsR0FDekIsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7O0FBR2hGO0lBQ0Usc0NBQ1Usd0JBQWtELEVBQ2xELFdBQXdCLEVBQ3hCLFlBQWlDLEVBQ2pDLE1BQStCO1FBSC9CLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLFdBQU0sR0FBTixNQUFNLENBQXlCO0lBQ3RDLENBQUM7SUFFSixnREFBUyxHQUFULFVBQ0UsT0FBeUIsRUFDekIsSUFBaUI7UUFGbkIsaUJBK0JDO1FBM0JDLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FDckQs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WUFBWSxHQUFHLHdCQUF3QixDQUFDLEtBQUssQ0FBQztxQkFDdkQ7aUJBQ0Y7Ozs7Ozs7OztTQUNGO1FBQ0QsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQzs7Z0JBeEdtQyx3QkFBd0I7Z0JBQ3JDLFdBQVc7Z0JBQ1YsbUJBQW1CO2dCQUN6Qix1QkFBdUI7OztJQUw5Qiw0QkFBNEI7UUFEeEMsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO09BQ3RCLDRCQUE0QixDQTJHeEM7dUNBaElEO0NBZ0lDLEFBM0dELElBMkdDO1NBM0dZLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEh0dHBFdmVudCxcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBJbnRlcmNlcHRvcixcbiAgSHR0cFJlcXVlc3QsXG4gIEh0dHBSZXNwb25zZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCB0YWtlLCB0YXAsIHdpdGhMYXRlc3RGcm9tIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2luZGV4JztcbmltcG9ydCB7XG4gIEFub255bW91c0NvbnNlbnQsXG4gIEFOT05ZTU9VU19DT05TRU5UU19IRUFERVIsXG4gIEFOT05ZTU9VU19DT05TRU5UX1NUQVRVUyxcbn0gZnJvbSAnLi4vLi4vbW9kZWwvaW5kZXgnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL29jYy9pbmRleCc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50c0NvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9hbm9ueW1vdXMtY29uc2VudHMtY29uZmlnJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9hbm9ueW1vdXMtY29uc2VudHMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQW5vbnltb3VzQ29uc2VudHNJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlOiBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb25maWc6IEFub255bW91c0NvbnNlbnRzQ29uZmlnXG4gICkge31cblxuICBpbnRlcmNlcHQoXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgcmV0dXJuIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmdldENvbnNlbnRzKCkucGlwZShcbiAgICAgIHRha2UoMSksXG4gICAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluKCkpLFxuICAgICAgc3dpdGNoTWFwKChbY29uc2VudHMsIGlzVXNlckxvZ2dlZEluXSkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuaXNPY2NVcmwocmVxdWVzdC51cmwpKSB7XG4gICAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2xvbmVkUmVxdWVzdCA9IHRoaXMuaGFuZGxlUmVxdWVzdChjb25zZW50cywgcmVxdWVzdCk7XG4gICAgICAgIHJldHVybiBuZXh0LmhhbmRsZShjbG9uZWRSZXF1ZXN0KS5waXBlKFxuICAgICAgICAgIHRhcCgoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UgJiZcbiAgICAgICAgICAgICAgZXZlbnQudXJsLnN0YXJ0c1dpdGgoXG4gICAgICAgICAgICAgICAgdGhpcy5vY2NFbmRwb2ludHMuZ2V0VXJsKCdhbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzJylcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHRoaXMuaGFuZGxlUmVzcG9uc2UoXG4gICAgICAgICAgICAgICAgaXNVc2VyTG9nZ2VkSW4sXG4gICAgICAgICAgICAgICAgZXZlbnQuaGVhZGVycy5nZXQoQU5PTllNT1VTX0NPTlNFTlRTX0hFQURFUiksXG4gICAgICAgICAgICAgICAgY29uc2VudHNcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVSZXNwb25zZShcbiAgICBpc1VzZXJMb2dnZWRJbjogYm9vbGVhbixcbiAgICBuZXdSYXdDb25zZW50czogc3RyaW5nLFxuICAgIHByZXZpb3VzQ29uc2VudHM6IEFub255bW91c0NvbnNlbnRbXVxuICApOiB2b2lkIHtcbiAgICBpZiAoIWlzVXNlckxvZ2dlZEluICYmIG5ld1Jhd0NvbnNlbnRzKSB7XG4gICAgICBsZXQgbmV3Q29uc2VudHM6IEFub255bW91c0NvbnNlbnRbXSA9IFtdO1xuICAgICAgbmV3Q29uc2VudHMgPSB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5kZWNvZGVBbmREZXNlcmlhbGl6ZShcbiAgICAgICAgbmV3UmF3Q29uc2VudHNcbiAgICAgICk7XG4gICAgICBuZXdDb25zZW50cyA9IHRoaXMuZ2l2ZVJlcXVpcmVkQ29uc2VudHMobmV3Q29uc2VudHMpO1xuXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmNvbnNlbnRzVXBkYXRlZChcbiAgICAgICAgICBuZXdDb25zZW50cyxcbiAgICAgICAgICBwcmV2aW91c0NvbnNlbnRzXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5zZXRDb25zZW50cyhuZXdDb25zZW50cyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVSZXF1ZXN0KFxuICAgIGNvbnNlbnRzOiBBbm9ueW1vdXNDb25zZW50W10sXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PlxuICApOiBIdHRwUmVxdWVzdDxhbnk+IHtcbiAgICBpZiAoIWNvbnNlbnRzKSB7XG4gICAgICByZXR1cm4gcmVxdWVzdDtcbiAgICB9XG5cbiAgICBjb25zdCByYXdDb25zZW50cyA9IHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLnNlcmlhbGl6ZUFuZEVuY29kZShcbiAgICAgIGNvbnNlbnRzXG4gICAgKTtcbiAgICByZXR1cm4gcmVxdWVzdC5jbG9uZSh7XG4gICAgICBzZXRIZWFkZXJzOiB7XG4gICAgICAgIFtBTk9OWU1PVVNfQ09OU0VOVFNfSEVBREVSXTogcmF3Q29uc2VudHMsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpc09jY1VybCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB1cmwuaW5jbHVkZXModGhpcy5vY2NFbmRwb2ludHMuZ2V0QmFzZUVuZHBvaW50KCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnaXZlUmVxdWlyZWRDb25zZW50cyhcbiAgICBjb25zZW50czogQW5vbnltb3VzQ29uc2VudFtdXG4gICk6IEFub255bW91c0NvbnNlbnRbXSB7XG4gICAgY29uc3QgZ2l2ZW5Db25zZW50cyA9IFsuLi5jb25zZW50c107XG5cbiAgICBpZiAoXG4gICAgICBCb29sZWFuKHRoaXMuY29uZmlnLmFub255bW91c0NvbnNlbnRzKSAmJlxuICAgICAgQm9vbGVhbih0aGlzLmNvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZXF1aXJlZENvbnNlbnRzKVxuICAgICkge1xuICAgICAgZm9yIChjb25zdCBjb25zZW50IG9mIGdpdmVuQ29uc2VudHMpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMuY29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHMuaW5jbHVkZXMoXG4gICAgICAgICAgICBjb25zZW50LnRlbXBsYXRlQ29kZVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc2VudC5jb25zZW50U3RhdGUgPSBBTk9OWU1PVVNfQ09OU0VOVF9TVEFUVVMuR0lWRU47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGdpdmVuQ29uc2VudHM7XG4gIH1cbn1cbiJdfQ==