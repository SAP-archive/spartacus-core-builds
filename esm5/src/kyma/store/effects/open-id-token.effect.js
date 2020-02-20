import { __decorate, __read } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { iif, of } from 'rxjs';
import { catchError, exhaustMap, map, withLatestFrom } from 'rxjs/operators';
import { AuthActions } from '../../../auth/store/actions/index';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { KymaConfig } from '../../config/kyma-config';
import { OpenIdAuthenticationTokenService } from '../../services/open-id-token/open-id-token.service';
import { KymaActions } from '../actions/index';
var OpenIdTokenEffect = /** @class */ (function () {
    function OpenIdTokenEffect(actions$, openIdTokenService, config) {
        var _this = this;
        this.actions$ = actions$;
        this.openIdTokenService = openIdTokenService;
        this.config = config;
        this.triggerOpenIdTokenLoading$ = iif(function () { return _this.config.authentication && _this.config.authentication.kyma_enabled; }, this.actions$.pipe(ofType(AuthActions.LOAD_USER_TOKEN_SUCCESS), withLatestFrom(this.actions$.pipe(ofType(AuthActions.LOAD_USER_TOKEN))), map(function (_a) {
            var _b = __read(_a, 2), loginAction = _b[1];
            return new KymaActions.LoadOpenIdToken({
                username: loginAction.payload.userId,
                password: loginAction.payload.password,
            });
        })));
        this.loadOpenIdToken$ = this.actions$.pipe(ofType(KymaActions.LOAD_OPEN_ID_TOKEN), map(function (action) { return action.payload; }), exhaustMap(function (payload) {
            return _this.openIdTokenService
                .loadOpenIdAuthenticationToken(payload.username, payload.password)
                .pipe(map(function (token) { return new KymaActions.LoadOpenIdTokenSuccess(token); }), catchError(function (error) {
                return of(new KymaActions.LoadOpenIdTokenFail(makeErrorSerializable(error)));
            }));
        }));
    }
    OpenIdTokenEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: OpenIdAuthenticationTokenService },
        { type: KymaConfig }
    ]; };
    __decorate([
        Effect()
    ], OpenIdTokenEffect.prototype, "triggerOpenIdTokenLoading$", void 0);
    __decorate([
        Effect()
    ], OpenIdTokenEffect.prototype, "loadOpenIdToken$", void 0);
    OpenIdTokenEffect = __decorate([
        Injectable()
    ], OpenIdTokenEffect);
    return OpenIdTokenEffect;
}());
export { OpenIdTokenEffect };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbi1pZC10b2tlbi5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMva3ltYS9zdG9yZS9lZmZlY3RzL29wZW4taWQtdG9rZW4uZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsR0FBRyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUN0RyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHL0M7SUE4Q0UsMkJBQ1UsUUFBaUIsRUFDakIsa0JBQW9ELEVBQ3BELE1BQWtCO1FBSDVCLGlCQUlJO1FBSE0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQWtDO1FBQ3BELFdBQU0sR0FBTixNQUFNLENBQVk7UUEvQzVCLCtCQUEwQixHQUE0QyxHQUFHLENBSXZFLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsSUFBSSxLQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQXJFLENBQXFFLEVBQzNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNoQixNQUFNLENBQ0osV0FBVyxDQUFDLHVCQUF1QixDQUNwQyxFQUNELGNBQWMsQ0FDWixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDaEIsTUFBTSxDQUE0QixXQUFXLENBQUMsZUFBZSxDQUFDLENBQy9ELENBQ0YsRUFDRCxHQUFHLENBQ0QsVUFBQyxFQUFlO2dCQUFmLGtCQUFlLEVBQVosbUJBQVc7WUFDYixPQUFBLElBQUksV0FBVyxDQUFDLGVBQWUsQ0FBQztnQkFDOUIsUUFBUSxFQUFFLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTTtnQkFDcEMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUTthQUN2QyxDQUFDO1FBSEYsQ0FHRSxDQUNMLENBQ0YsQ0FDRixDQUFDO1FBR0YscUJBQWdCLEdBRVosSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsRUFDdEMsR0FBRyxDQUFDLFVBQUMsTUFBbUMsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDLEVBQzVELFVBQVUsQ0FBQyxVQUFBLE9BQU87WUFDaEIsT0FBQSxLQUFJLENBQUMsa0JBQWtCO2lCQUNwQiw2QkFBNkIsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUM7aUJBQ2pFLElBQUksQ0FDSCxHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxJQUFJLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsRUFBN0MsQ0FBNkMsQ0FBQyxFQUMzRCxVQUFVLENBQUMsVUFBQSxLQUFLO2dCQUNkLE9BQUEsRUFBRSxDQUNBLElBQUksV0FBVyxDQUFDLG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQ2xFO1lBRkQsQ0FFQyxDQUNGLENBQ0Y7UUFUSCxDQVNHLENBQ0osQ0FDRixDQUFDO0lBTUMsQ0FBQzs7Z0JBSGdCLE9BQU87Z0JBQ0csZ0NBQWdDO2dCQUM1QyxVQUFVOztJQS9DNUI7UUFEQyxNQUFNLEVBQUU7eUVBdUJQO0lBR0Y7UUFEQyxNQUFNLEVBQUU7K0RBa0JQO0lBNUNTLGlCQUFpQjtRQUQ3QixVQUFVLEVBQUU7T0FDQSxpQkFBaUIsQ0FtRDdCO0lBQUQsd0JBQUM7Q0FBQSxBQW5ERCxJQW1EQztTQW5EWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgaWlmLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZXhoYXVzdE1hcCwgbWFwLCB3aXRoTGF0ZXN0RnJvbSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBLeW1hQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2t5bWEtY29uZmlnJztcbmltcG9ydCB7IE9wZW5JZEF1dGhlbnRpY2F0aW9uVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb3Blbi1pZC10b2tlbi9vcGVuLWlkLXRva2VuLnNlcnZpY2UnO1xuaW1wb3J0IHsgS3ltYUFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9wZW5JZFRva2VuRWZmZWN0IHtcbiAgQEVmZmVjdCgpXG4gIHRyaWdnZXJPcGVuSWRUb2tlbkxvYWRpbmckOiBPYnNlcnZhYmxlPEt5bWFBY3Rpb25zLkxvYWRPcGVuSWRUb2tlbj4gPSBpaWY8XG4gICAgS3ltYUFjdGlvbnMuTG9hZE9wZW5JZFRva2VuLFxuICAgIEt5bWFBY3Rpb25zLkxvYWRPcGVuSWRUb2tlblxuICA+KFxuICAgICgpID0+IHRoaXMuY29uZmlnLmF1dGhlbnRpY2F0aW9uICYmIHRoaXMuY29uZmlnLmF1dGhlbnRpY2F0aW9uLmt5bWFfZW5hYmxlZCxcbiAgICB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgICBvZlR5cGU8S3ltYUFjdGlvbnMuTG9hZE9wZW5JZFRva2VuU3VjY2Vzcz4oXG4gICAgICAgIEF1dGhBY3Rpb25zLkxPQURfVVNFUl9UT0tFTl9TVUNDRVNTXG4gICAgICApLFxuICAgICAgd2l0aExhdGVzdEZyb20oXG4gICAgICAgIHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICAgICAgICBvZlR5cGU8QXV0aEFjdGlvbnMuTG9hZFVzZXJUb2tlbj4oQXV0aEFjdGlvbnMuTE9BRF9VU0VSX1RPS0VOKVxuICAgICAgICApXG4gICAgICApLFxuICAgICAgbWFwKFxuICAgICAgICAoWywgbG9naW5BY3Rpb25dKSA9PlxuICAgICAgICAgIG5ldyBLeW1hQWN0aW9ucy5Mb2FkT3BlbklkVG9rZW4oe1xuICAgICAgICAgICAgdXNlcm5hbWU6IGxvZ2luQWN0aW9uLnBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IGxvZ2luQWN0aW9uLnBheWxvYWQucGFzc3dvcmQsXG4gICAgICAgICAgfSlcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGxvYWRPcGVuSWRUb2tlbiQ6IE9ic2VydmFibGU8XG4gICAgS3ltYUFjdGlvbnMuT3BlbklkVG9rZW5BY3Rpb25zXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKEt5bWFBY3Rpb25zLkxPQURfT1BFTl9JRF9UT0tFTiksXG4gICAgbWFwKChhY3Rpb246IEt5bWFBY3Rpb25zLkxvYWRPcGVuSWRUb2tlbikgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIGV4aGF1c3RNYXAocGF5bG9hZCA9PlxuICAgICAgdGhpcy5vcGVuSWRUb2tlblNlcnZpY2VcbiAgICAgICAgLmxvYWRPcGVuSWRBdXRoZW50aWNhdGlvblRva2VuKHBheWxvYWQudXNlcm5hbWUsIHBheWxvYWQucGFzc3dvcmQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCh0b2tlbiA9PiBuZXcgS3ltYUFjdGlvbnMuTG9hZE9wZW5JZFRva2VuU3VjY2Vzcyh0b2tlbikpLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgS3ltYUFjdGlvbnMuTG9hZE9wZW5JZFRva2VuRmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgb3BlbklkVG9rZW5TZXJ2aWNlOiBPcGVuSWRBdXRoZW50aWNhdGlvblRva2VuU2VydmljZSxcbiAgICBwcml2YXRlIGNvbmZpZzogS3ltYUNvbmZpZ1xuICApIHt9XG59XG4iXX0=