import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { UserAuthenticationTokenService } from '../../../auth/services/user-authentication/user-authentication-token.service';
import { AsmActions } from '../actions/index';
var CustomerSupportAgentTokenEffects = /** @class */ (function () {
    function CustomerSupportAgentTokenEffects(actions$, userTokenService) {
        var _this = this;
        this.actions$ = actions$;
        this.userTokenService = userTokenService;
        this.loadCustomerSupportAgentToken$ = this.actions$.pipe(ofType(AsmActions.LOAD_CUSTOMER_SUPPORT_AGENT_TOKEN), map(function (action) { return action.payload; }), switchMap(function (_a) {
            var userId = _a.userId, password = _a.password;
            return _this.userTokenService.loadToken(userId, password).pipe(map(function (token) {
                var date = new Date();
                date.setSeconds(date.getSeconds() + token.expires_in);
                token.expiration_time = date.toJSON();
                return new AsmActions.LoadCustomerSupportAgentTokenSuccess(token);
            }), catchError(function (error) {
                return of(new AsmActions.LoadCustomerSupportAgentTokenFail(makeErrorSerializable(error)));
            }));
        }));
    }
    CustomerSupportAgentTokenEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserAuthenticationTokenService }
    ]; };
    __decorate([
        Effect()
    ], CustomerSupportAgentTokenEffects.prototype, "loadCustomerSupportAgentToken$", void 0);
    CustomerSupportAgentTokenEffects = __decorate([
        Injectable()
    ], CustomerSupportAgentTokenEffects);
    return CustomerSupportAgentTokenEffects;
}());
export { CustomerSupportAgentTokenEffects };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NhZ2VudC10b2tlbi5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXNtL3N0b3JlL2VmZmVjdHMvY3NhZ2VudC10b2tlbi5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFMUUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sOEVBQThFLENBQUM7QUFDOUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRzlDO0lBMEJFLDBDQUNVLFFBQWlCLEVBQ2pCLGdCQUFnRDtRQUYxRCxpQkFHSTtRQUZNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFnQztRQTFCMUQsbUNBQThCLEdBRTFCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsVUFBVSxDQUFDLGlDQUFpQyxDQUFDLEVBQ3BELEdBQUcsQ0FBQyxVQUFDLE1BQWdELElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxFQUN6RSxTQUFTLENBQUMsVUFBQyxFQUFvQjtnQkFBbEIsa0JBQU0sRUFBRSxzQkFBUTtZQUMzQixPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDcEQsR0FBRyxDQUFDLFVBQUMsS0FBZ0I7Z0JBQ25CLElBQU0sSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDdEQsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ3RDLE9BQU8sSUFBSSxVQUFVLENBQUMsb0NBQW9DLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEUsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLFVBQUMsS0FBSztnQkFDZixPQUFBLEVBQUUsQ0FDQSxJQUFJLFVBQVUsQ0FBQyxpQ0FBaUMsQ0FDOUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQzdCLENBQ0Y7WUFKRCxDQUlDLENBQ0YsQ0FDRjtRQWRELENBY0MsQ0FDRixDQUNGLENBQUM7SUFLQyxDQUFDOztnQkFGZ0IsT0FBTztnQkFDQyw4QkFBOEI7O0lBMUIxRDtRQURDLE1BQU0sRUFBRTs0RkF1QlA7SUF4QlMsZ0NBQWdDO1FBRDVDLFVBQVUsRUFBRTtPQUNBLGdDQUFnQyxDQThCNUM7SUFBRCx1Q0FBQztDQUFBLEFBOUJELElBOEJDO1NBOUJZLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgVXNlclRva2VuIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9tb2RlbHMvdG9rZW4tdHlwZXMubW9kZWwnO1xuaW1wb3J0IHsgVXNlckF1dGhlbnRpY2F0aW9uVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9zZXJ2aWNlcy91c2VyLWF1dGhlbnRpY2F0aW9uL3VzZXItYXV0aGVudGljYXRpb24tdG9rZW4uc2VydmljZSc7XG5pbXBvcnQgeyBBc21BY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkQ3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbiQ6IE9ic2VydmFibGU8XG4gICAgQXNtQWN0aW9ucy5DdXN0b21lclN1cHBvcnRBZ2VudFRva2VuQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKEFzbUFjdGlvbnMuTE9BRF9DVVNUT01FUl9TVVBQT1JUX0FHRU5UX1RPS0VOKSxcbiAgICBtYXAoKGFjdGlvbjogQXNtQWN0aW9ucy5Mb2FkQ3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbikgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIHN3aXRjaE1hcCgoeyB1c2VySWQsIHBhc3N3b3JkIH0pID0+XG4gICAgICB0aGlzLnVzZXJUb2tlblNlcnZpY2UubG9hZFRva2VuKHVzZXJJZCwgcGFzc3dvcmQpLnBpcGUoXG4gICAgICAgIG1hcCgodG9rZW46IFVzZXJUb2tlbikgPT4ge1xuICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgIGRhdGUuc2V0U2Vjb25kcyhkYXRlLmdldFNlY29uZHMoKSArIHRva2VuLmV4cGlyZXNfaW4pO1xuICAgICAgICAgIHRva2VuLmV4cGlyYXRpb25fdGltZSA9IGRhdGUudG9KU09OKCk7XG4gICAgICAgICAgcmV0dXJuIG5ldyBBc21BY3Rpb25zLkxvYWRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuU3VjY2Vzcyh0b2tlbik7XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcikgPT5cbiAgICAgICAgICBvZihcbiAgICAgICAgICAgIG5ldyBBc21BY3Rpb25zLkxvYWRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuRmFpbChcbiAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgdXNlclRva2VuU2VydmljZTogVXNlckF1dGhlbnRpY2F0aW9uVG9rZW5TZXJ2aWNlXG4gICkge31cbn1cbiJdfQ==