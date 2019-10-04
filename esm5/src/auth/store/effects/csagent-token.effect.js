/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { UserAuthenticationTokenService } from '../../services/user-authentication/user-authentication-token.service';
import { AuthActions } from '../actions/index';
var CustomerSupportAgentTokenEffects = /** @class */ (function () {
    function CustomerSupportAgentTokenEffects(actions$, userTokenService) {
        var _this = this;
        this.actions$ = actions$;
        this.userTokenService = userTokenService;
        this.loadCustomerSupportAgentToken$ = this.actions$.pipe(ofType(AuthActions.LOAD_CUSTOMER_SUPPORT_AGENT_TOKEN), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var userId = _a.userId, password = _a.password;
            return _this.userTokenService.loadToken(userId, password).pipe(map((/**
             * @param {?} token
             * @return {?}
             */
            function (token) {
                /** @type {?} */
                var date = new Date();
                date.setSeconds(date.getSeconds() + token.expires_in);
                token.expiration_time = date.toJSON();
                return new AuthActions.LoadCustomerSupportAgentTokenSuccess(token);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new AuthActions.LoadCustomerSupportAgentTokenFail(makeErrorSerializable(error)));
            })));
        })));
    }
    CustomerSupportAgentTokenEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CustomerSupportAgentTokenEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserAuthenticationTokenService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], CustomerSupportAgentTokenEffects.prototype, "loadCustomerSupportAgentToken$", void 0);
    return CustomerSupportAgentTokenEffects;
}());
export { CustomerSupportAgentTokenEffects };
if (false) {
    /** @type {?} */
    CustomerSupportAgentTokenEffects.prototype.loadCustomerSupportAgentToken$;
    /**
     * @type {?}
     * @private
     */
    CustomerSupportAgentTokenEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    CustomerSupportAgentTokenEffects.prototype.userTokenService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NhZ2VudC10b2tlbi5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9zdG9yZS9lZmZlY3RzL2NzYWdlbnQtdG9rZW4uZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFMUUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFDdEgsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRS9DO0lBMkJFLDBDQUNVLFFBQWlCLEVBQ2pCLGdCQUFnRDtRQUYxRCxpQkFHSTtRQUZNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFnQztRQTFCMUQsbUNBQThCLEdBRTFCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLGlDQUFpQyxDQUFDLEVBQ3JELEdBQUc7Ozs7UUFBQyxVQUFDLE1BQWlELElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxFQUMxRSxTQUFTOzs7O1FBQUMsVUFBQyxFQUFvQjtnQkFBbEIsa0JBQU0sRUFBRSxzQkFBUTtZQUMzQixPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDcEQsR0FBRzs7OztZQUFDLFVBQUMsS0FBZ0I7O29CQUNiLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtnQkFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN0RCxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDdEMsT0FBTyxJQUFJLFdBQVcsQ0FBQyxvQ0FBb0MsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyRSxDQUFDLEVBQUMsRUFDRixVQUFVOzs7O1lBQUMsVUFBQSxLQUFLO2dCQUNkLE9BQUEsRUFBRSxDQUNBLElBQUksV0FBVyxDQUFDLGlDQUFpQyxDQUMvQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FDN0IsQ0FDRjtZQUpELENBSUMsRUFDRixDQUNGO1FBZEQsQ0FjQyxFQUNGLENBQ0YsQ0FBQztJQUtDLENBQUM7O2dCQTlCTCxVQUFVOzs7O2dCQVJGLE9BQU87Z0JBS1AsOEJBQThCOztJQU1yQztRQURDLE1BQU0sRUFBRTswQ0FDdUIsVUFBVTs0RkFzQnhDO0lBTUosdUNBQUM7Q0FBQSxBQS9CRCxJQStCQztTQTlCWSxnQ0FBZ0M7OztJQUMzQywwRUF1QkU7Ozs7O0lBR0Esb0RBQXlCOzs7OztJQUN6Qiw0REFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IFVzZXJUb2tlbiB9IGZyb20gJy4uLy4uL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyQXV0aGVudGljYXRpb25Ub2tlblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91c2VyLWF1dGhlbnRpY2F0aW9uL3VzZXItYXV0aGVudGljYXRpb24tdG9rZW4uc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbkVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW4kOiBPYnNlcnZhYmxlPFxuICAgIEF1dGhBY3Rpb25zLkN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW5BY3Rpb25cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQXV0aEFjdGlvbnMuTE9BRF9DVVNUT01FUl9TVVBQT1JUX0FHRU5UX1RPS0VOKSxcbiAgICBtYXAoKGFjdGlvbjogQXV0aEFjdGlvbnMuTG9hZEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW4pID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBzd2l0Y2hNYXAoKHsgdXNlcklkLCBwYXNzd29yZCB9KSA9PlxuICAgICAgdGhpcy51c2VyVG9rZW5TZXJ2aWNlLmxvYWRUb2tlbih1c2VySWQsIHBhc3N3b3JkKS5waXBlKFxuICAgICAgICBtYXAoKHRva2VuOiBVc2VyVG9rZW4pID0+IHtcbiAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICBkYXRlLnNldFNlY29uZHMoZGF0ZS5nZXRTZWNvbmRzKCkgKyB0b2tlbi5leHBpcmVzX2luKTtcbiAgICAgICAgICB0b2tlbi5leHBpcmF0aW9uX3RpbWUgPSBkYXRlLnRvSlNPTigpO1xuICAgICAgICAgIHJldHVybiBuZXcgQXV0aEFjdGlvbnMuTG9hZEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW5TdWNjZXNzKHRva2VuKTtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihcbiAgICAgICAgICAgIG5ldyBBdXRoQWN0aW9ucy5Mb2FkQ3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbkZhaWwoXG4gICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHVzZXJUb2tlblNlcnZpY2U6IFVzZXJBdXRoZW50aWNhdGlvblRva2VuU2VydmljZVxuICApIHt9XG59XG4iXX0=