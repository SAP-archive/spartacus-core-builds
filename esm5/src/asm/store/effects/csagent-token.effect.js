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
import { UserAuthenticationTokenService } from '../../../auth/services/user-authentication/user-authentication-token.service';
import { AsmActions } from '../actions/index';
var CustomerSupportAgentTokenEffects = /** @class */ (function () {
    function CustomerSupportAgentTokenEffects(actions$, userTokenService) {
        var _this = this;
        this.actions$ = actions$;
        this.userTokenService = userTokenService;
        this.loadCustomerSupportAgentToken$ = this.actions$.pipe(ofType(AsmActions.LOAD_CUSTOMER_SUPPORT_AGENT_TOKEN), map((/**
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
                return new AsmActions.LoadCustomerSupportAgentTokenSuccess(token);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new AsmActions.LoadCustomerSupportAgentTokenFail(makeErrorSerializable(error)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NhZ2VudC10b2tlbi5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXNtL3N0b3JlL2VmZmVjdHMvY3NhZ2VudC10b2tlbi5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUUxRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw4RUFBOEUsQ0FBQztBQUM5SCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFOUM7SUEyQkUsMENBQ1UsUUFBaUIsRUFDakIsZ0JBQWdEO1FBRjFELGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWdDO1FBMUIxRCxtQ0FBOEIsR0FFMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxVQUFVLENBQUMsaUNBQWlDLENBQUMsRUFDcEQsR0FBRzs7OztRQUFDLFVBQUMsTUFBZ0QsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxFQUFDLEVBQ3pFLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQW9CO2dCQUFsQixrQkFBTSxFQUFFLHNCQUFRO1lBQzNCLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUNwRCxHQUFHOzs7O1lBQUMsVUFBQyxLQUFnQjs7b0JBQ2IsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO2dCQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3RELEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUN0QyxPQUFPLElBQUksVUFBVSxDQUFDLG9DQUFvQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BFLENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7WUFBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxFQUFFLENBQ0EsSUFBSSxVQUFVLENBQUMsaUNBQWlDLENBQzlDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUM3QixDQUNGO1lBSkQsQ0FJQyxFQUNGLENBQ0Y7UUFkRCxDQWNDLEVBQ0YsQ0FDRixDQUFDO0lBS0MsQ0FBQzs7Z0JBOUJMLFVBQVU7Ozs7Z0JBUkYsT0FBTztnQkFLUCw4QkFBOEI7O0lBTXJDO1FBREMsTUFBTSxFQUFFOzBDQUN1QixVQUFVOzRGQXNCeEM7SUFNSix1Q0FBQztDQUFBLEFBL0JELElBK0JDO1NBOUJZLGdDQUFnQzs7O0lBQzNDLDBFQXVCRTs7Ozs7SUFHQSxvREFBeUI7Ozs7O0lBQ3pCLDREQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgVXNlclRva2VuIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9tb2RlbHMvdG9rZW4tdHlwZXMubW9kZWwnO1xuaW1wb3J0IHsgVXNlckF1dGhlbnRpY2F0aW9uVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9zZXJ2aWNlcy91c2VyLWF1dGhlbnRpY2F0aW9uL3VzZXItYXV0aGVudGljYXRpb24tdG9rZW4uc2VydmljZSc7XG5pbXBvcnQgeyBBc21BY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkQ3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbiQ6IE9ic2VydmFibGU8XG4gICAgQXNtQWN0aW9ucy5DdXN0b21lclN1cHBvcnRBZ2VudFRva2VuQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKEFzbUFjdGlvbnMuTE9BRF9DVVNUT01FUl9TVVBQT1JUX0FHRU5UX1RPS0VOKSxcbiAgICBtYXAoKGFjdGlvbjogQXNtQWN0aW9ucy5Mb2FkQ3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbikgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIHN3aXRjaE1hcCgoeyB1c2VySWQsIHBhc3N3b3JkIH0pID0+XG4gICAgICB0aGlzLnVzZXJUb2tlblNlcnZpY2UubG9hZFRva2VuKHVzZXJJZCwgcGFzc3dvcmQpLnBpcGUoXG4gICAgICAgIG1hcCgodG9rZW46IFVzZXJUb2tlbikgPT4ge1xuICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgIGRhdGUuc2V0U2Vjb25kcyhkYXRlLmdldFNlY29uZHMoKSArIHRva2VuLmV4cGlyZXNfaW4pO1xuICAgICAgICAgIHRva2VuLmV4cGlyYXRpb25fdGltZSA9IGRhdGUudG9KU09OKCk7XG4gICAgICAgICAgcmV0dXJuIG5ldyBBc21BY3Rpb25zLkxvYWRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuU3VjY2Vzcyh0b2tlbik7XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgb2YoXG4gICAgICAgICAgICBuZXcgQXNtQWN0aW9ucy5Mb2FkQ3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbkZhaWwoXG4gICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHVzZXJUb2tlblNlcnZpY2U6IFVzZXJBdXRoZW50aWNhdGlvblRva2VuU2VydmljZVxuICApIHt9XG59XG4iXX0=