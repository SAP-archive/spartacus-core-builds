import { __decorate, __read, __spread, __values } from "tslib";
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
        return this.anonymousConsentsService.getConsents().pipe(take(1), withLatestFrom(this.authService.isUserLoggedIn()), switchMap(function (_a) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLWludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Fub255bW91cy1jb25zZW50cy9odHRwLWludGVyY2VwdG9ycy9hbm9ueW1vdXMtY29uc2VudHMtaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFLTCxZQUFZLEdBQ2IsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFvQix3QkFBd0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7Ozs7QUFFaEYsTUFBTSxDQUFDLElBQU0seUJBQXlCLEdBQUcsc0JBQXNCLENBQUM7QUFHaEU7SUFDRSxzQ0FDVSx3QkFBa0QsRUFDbEQsV0FBd0IsRUFDeEIsWUFBaUMsRUFDakMsTUFBK0I7UUFIL0IsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsV0FBTSxHQUFOLE1BQU0sQ0FBeUI7SUFDdEMsQ0FBQztJQUVKLGdEQUFTLEdBQVQsVUFDRSxPQUF5QixFQUN6QixJQUFpQjtRQUZuQixpQkEwQkM7UUF0QkMsT0FBTyxJQUFJLENBQUMsd0JBQXdC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U0FDRjtRQUNELE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7O2dCQW5HbUMsd0JBQXdCO2dCQUNyQyxXQUFXO2dCQUNWLG1CQUFtQjtnQkFDekIsdUJBQXVCOzs7SUFMOUIsNEJBQTRCO1FBRHhDLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztPQUN0Qiw0QkFBNEIsQ0FzR3hDO3VDQXpIRDtDQXlIQyxBQXRHRCxJQXNHQztTQXRHWSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBIdHRwRXZlbnQsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBSZXF1ZXN0LFxuICBIdHRwUmVzcG9uc2UsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN3aXRjaE1hcCwgdGFrZSwgdGFwLCB3aXRoTGF0ZXN0RnJvbSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9pbmRleCc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50LCBBTk9OWU1PVVNfQ09OU0VOVF9TVEFUVVMgfSBmcm9tICcuLi8uLi9tb2RlbC9pbmRleCc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb2NjL2luZGV4JztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2Fub255bW91cy1jb25zZW50cy1jb25maWcnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL2Fub255bW91cy1jb25zZW50cy5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IEFOT05ZTU9VU19DT05TRU5UU19IRUFERVIgPSAnWC1Bbm9ueW1vdXMtQ29uc2VudHMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFub255bW91c0NvbnNlbnRzSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFub255bW91c0NvbnNlbnRzU2VydmljZTogQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgY29uZmlnOiBBbm9ueW1vdXNDb25zZW50c0NvbmZpZ1xuICApIHt9XG5cbiAgaW50ZXJjZXB0KFxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgbmV4dDogSHR0cEhhbmRsZXJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIHJldHVybiB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5nZXRDb25zZW50cygpLnBpcGUoXG4gICAgICB0YWtlKDEpLFxuICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5hdXRoU2VydmljZS5pc1VzZXJMb2dnZWRJbigpKSxcbiAgICAgIHN3aXRjaE1hcCgoW2NvbnNlbnRzLCBpc1VzZXJMb2dnZWRJbl0pID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmlzT2NjVXJsKHJlcXVlc3QudXJsKSkge1xuICAgICAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNsb25lZFJlcXVlc3QgPSB0aGlzLmhhbmRsZVJlcXVlc3QoY29uc2VudHMsIHJlcXVlc3QpO1xuICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUoY2xvbmVkUmVxdWVzdCkucGlwZShcbiAgICAgICAgICB0YXAoKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgdGhpcy5oYW5kbGVSZXNwb25zZShcbiAgICAgICAgICAgICAgICBpc1VzZXJMb2dnZWRJbixcbiAgICAgICAgICAgICAgICBldmVudC5oZWFkZXJzLmdldChBTk9OWU1PVVNfQ09OU0VOVFNfSEVBREVSKSxcbiAgICAgICAgICAgICAgICBjb25zZW50c1xuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVJlc3BvbnNlKFxuICAgIGlzVXNlckxvZ2dlZEluOiBib29sZWFuLFxuICAgIG5ld1Jhd0NvbnNlbnRzOiBzdHJpbmcsXG4gICAgcHJldmlvdXNDb25zZW50czogQW5vbnltb3VzQ29uc2VudFtdXG4gICk6IHZvaWQge1xuICAgIGlmICghaXNVc2VyTG9nZ2VkSW4gJiYgbmV3UmF3Q29uc2VudHMpIHtcbiAgICAgIGxldCBuZXdDb25zZW50czogQW5vbnltb3VzQ29uc2VudFtdID0gW107XG4gICAgICBuZXdDb25zZW50cyA9IHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmRlY29kZUFuZERlc2VyaWFsaXplKFxuICAgICAgICBuZXdSYXdDb25zZW50c1xuICAgICAgKTtcbiAgICAgIG5ld0NvbnNlbnRzID0gdGhpcy5naXZlUmVxdWlyZWRDb25zZW50cyhuZXdDb25zZW50cyk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuY29uc2VudHNVcGRhdGVkKFxuICAgICAgICAgIG5ld0NvbnNlbnRzLFxuICAgICAgICAgIHByZXZpb3VzQ29uc2VudHNcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLnNldENvbnNlbnRzKG5ld0NvbnNlbnRzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVJlcXVlc3QoXG4gICAgY29uc2VudHM6IEFub255bW91c0NvbnNlbnRbXSxcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+XG4gICk6IEh0dHBSZXF1ZXN0PGFueT4ge1xuICAgIGlmICghY29uc2VudHMpIHtcbiAgICAgIHJldHVybiByZXF1ZXN0O1xuICAgIH1cblxuICAgIGNvbnN0IHJhd0NvbnNlbnRzID0gdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2Uuc2VyaWFsaXplQW5kRW5jb2RlKFxuICAgICAgY29uc2VudHNcbiAgICApO1xuICAgIHJldHVybiByZXF1ZXN0LmNsb25lKHtcbiAgICAgIHNldEhlYWRlcnM6IHtcbiAgICAgICAgW0FOT05ZTU9VU19DT05TRU5UU19IRUFERVJdOiByYXdDb25zZW50cyxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGlzT2NjVXJsKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHVybC5pbmNsdWRlcyh0aGlzLm9jY0VuZHBvaW50cy5nZXRCYXNlRW5kcG9pbnQoKSk7XG4gIH1cblxuICBwcml2YXRlIGdpdmVSZXF1aXJlZENvbnNlbnRzKFxuICAgIGNvbnNlbnRzOiBBbm9ueW1vdXNDb25zZW50W11cbiAgKTogQW5vbnltb3VzQ29uc2VudFtdIHtcbiAgICBjb25zdCBnaXZlbkNvbnNlbnRzID0gWy4uLmNvbnNlbnRzXTtcblxuICAgIGlmIChcbiAgICAgIEJvb2xlYW4odGhpcy5jb25maWcuYW5vbnltb3VzQ29uc2VudHMpICYmXG4gICAgICBCb29sZWFuKHRoaXMuY29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHMpXG4gICAgKSB7XG4gICAgICBmb3IgKGNvbnN0IGNvbnNlbnQgb2YgZ2l2ZW5Db25zZW50cykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5jb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVxdWlyZWRDb25zZW50cy5pbmNsdWRlcyhcbiAgICAgICAgICAgIGNvbnNlbnQudGVtcGxhdGVDb2RlXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zZW50LmNvbnNlbnRTdGF0ZSA9IEFOT05ZTU9VU19DT05TRU5UX1NUQVRVUy5HSVZFTjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZ2l2ZW5Db25zZW50cztcbiAgfVxufVxuIl19