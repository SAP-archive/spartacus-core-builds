/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { iif, Observable, of } from 'rxjs';
import { catchError, exhaustMap, map, withLatestFrom } from 'rxjs/operators';
import { LOAD_USER_TOKEN, LOAD_USER_TOKEN_SUCCESS, } from '../../../auth/store/actions/index';
import { KymaConfig } from '../../config/kyma-config';
import { OpenIdAuthenticationTokenService } from '../../services/open-id-token/open-id-token.service';
import * as fromActions from '../actions/open-id-token.action';
export class OpenIdTokenEffect {
    /**
     * @param {?} actions$
     * @param {?} openIdTokenService
     * @param {?} config
     */
    constructor(actions$, openIdTokenService, config) {
        this.actions$ = actions$;
        this.openIdTokenService = openIdTokenService;
        this.config = config;
        this.triggerOpenIdTokenLoading$ = iif((/**
         * @return {?}
         */
        () => this.config.authentication && this.config.authentication.kyma_enabled), this.actions$.pipe(ofType(LOAD_USER_TOKEN_SUCCESS), withLatestFrom(this.actions$.pipe(ofType(LOAD_USER_TOKEN))), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([, loginAction]) => new fromActions.LoadOpenIdToken({
            username: loginAction.payload.userId,
            password: loginAction.payload.password,
        })))));
        this.loadOpenIdToken$ = this.actions$.pipe(ofType(fromActions.LOAD_OPEN_ID_TOKEN), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), exhaustMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.openIdTokenService
                .loadOpenIdAuthenticationToken(payload.username, payload.password)
                .pipe(map((/**
             * @param {?} token
             * @return {?}
             */
            token => new fromActions.LoadOpenIdTokenSuccess(token))), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new fromActions.LoadOpenIdTokenFail(error)))));
        })));
    }
}
OpenIdTokenEffect.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OpenIdTokenEffect.ctorParameters = () => [
    { type: Actions },
    { type: OpenIdAuthenticationTokenService },
    { type: KymaConfig }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], OpenIdTokenEffect.prototype, "triggerOpenIdTokenLoading$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], OpenIdTokenEffect.prototype, "loadOpenIdToken$", void 0);
if (false) {
    /** @type {?} */
    OpenIdTokenEffect.prototype.triggerOpenIdTokenLoading$;
    /** @type {?} */
    OpenIdTokenEffect.prototype.loadOpenIdToken$;
    /**
     * @type {?}
     * @private
     */
    OpenIdTokenEffect.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    OpenIdTokenEffect.prototype.openIdTokenService;
    /**
     * @type {?}
     * @private
     */
    OpenIdTokenEffect.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbi1pZC10b2tlbi5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMva3ltYS9zdG9yZS9lZmZlY3RzL29wZW4taWQtdG9rZW4uZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RSxPQUFPLEVBRUwsZUFBZSxFQUNmLHVCQUF1QixHQUN4QixNQUFNLG1DQUFtQyxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUN0RyxPQUFPLEtBQUssV0FBVyxNQUFNLGlDQUFpQyxDQUFDO0FBRy9ELE1BQU0sT0FBTyxpQkFBaUI7Ozs7OztJQXNDNUIsWUFDVSxRQUFpQixFQUNqQixrQkFBb0QsRUFDcEQsTUFBa0I7UUFGbEIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQWtDO1FBQ3BELFdBQU0sR0FBTixNQUFNLENBQVk7UUF2QzVCLCtCQUEwQixHQUE0QyxHQUFHOzs7UUFJdkUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsWUFBWSxHQUMzRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDaEIsTUFBTSxDQUFxQyx1QkFBdUIsQ0FBQyxFQUNuRSxjQUFjLENBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFnQixlQUFlLENBQUMsQ0FBQyxDQUMzRCxFQUNELEdBQUc7Ozs7UUFDRCxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQ2xCLElBQUksV0FBVyxDQUFDLGVBQWUsQ0FBQztZQUM5QixRQUFRLEVBQUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNO1lBQ3BDLFFBQVEsRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVE7U0FDdkMsQ0FBQyxFQUNMLENBQ0YsQ0FDRixDQUFDO1FBR0YscUJBQWdCLEdBRVosSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsRUFDdEMsR0FBRzs7OztRQUFDLENBQUMsTUFBbUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxFQUM1RCxVQUFVOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCO2lCQUMzQiw2QkFBNkIsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUM7aUJBQ2pFLElBQUksQ0FDSCxHQUFHOzs7O1lBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsRUFBQyxFQUMzRCxVQUFVOzs7O1lBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUNwRSxDQUFDO1FBQ04sQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQU1DLENBQUM7OztZQTNDTCxVQUFVOzs7O1lBWkYsT0FBTztZQVNQLGdDQUFnQztZQURoQyxVQUFVOztBQU9qQjtJQURDLE1BQU0sRUFBRTtzQ0FDbUIsVUFBVTtxRUFrQnBDO0FBR0Y7SUFEQyxNQUFNLEVBQUU7c0NBQ1MsVUFBVTsyREFhMUI7OztJQW5DRix1REFtQkU7O0lBRUYsNkNBY0U7Ozs7O0lBR0EscUNBQXlCOzs7OztJQUN6QiwrQ0FBNEQ7Ozs7O0lBQzVELG1DQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBpaWYsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBleGhhdXN0TWFwLCBtYXAsIHdpdGhMYXRlc3RGcm9tIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgTG9hZFVzZXJUb2tlbixcbiAgTE9BRF9VU0VSX1RPS0VOLFxuICBMT0FEX1VTRVJfVE9LRU5fU1VDQ0VTUyxcbn0gZnJvbSAnLi4vLi4vLi4vYXV0aC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IEt5bWFDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcva3ltYS1jb25maWcnO1xuaW1wb3J0IHsgT3BlbklkQXV0aGVudGljYXRpb25Ub2tlblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vcGVuLWlkLXRva2VuL29wZW4taWQtdG9rZW4uc2VydmljZSc7XG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL29wZW4taWQtdG9rZW4uYWN0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9wZW5JZFRva2VuRWZmZWN0IHtcbiAgQEVmZmVjdCgpXG4gIHRyaWdnZXJPcGVuSWRUb2tlbkxvYWRpbmckOiBPYnNlcnZhYmxlPGZyb21BY3Rpb25zLkxvYWRPcGVuSWRUb2tlbj4gPSBpaWY8XG4gICAgZnJvbUFjdGlvbnMuTG9hZE9wZW5JZFRva2VuLFxuICAgIGZyb21BY3Rpb25zLkxvYWRPcGVuSWRUb2tlblxuICA+KFxuICAgICgpID0+IHRoaXMuY29uZmlnLmF1dGhlbnRpY2F0aW9uICYmIHRoaXMuY29uZmlnLmF1dGhlbnRpY2F0aW9uLmt5bWFfZW5hYmxlZCxcbiAgICB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgICBvZlR5cGU8ZnJvbUFjdGlvbnMuTG9hZE9wZW5JZFRva2VuU3VjY2Vzcz4oTE9BRF9VU0VSX1RPS0VOX1NVQ0NFU1MpLFxuICAgICAgd2l0aExhdGVzdEZyb20oXG4gICAgICAgIHRoaXMuYWN0aW9ucyQucGlwZShvZlR5cGU8TG9hZFVzZXJUb2tlbj4oTE9BRF9VU0VSX1RPS0VOKSlcbiAgICAgICksXG4gICAgICBtYXAoXG4gICAgICAgIChbLCBsb2dpbkFjdGlvbl0pID0+XG4gICAgICAgICAgbmV3IGZyb21BY3Rpb25zLkxvYWRPcGVuSWRUb2tlbih7XG4gICAgICAgICAgICB1c2VybmFtZTogbG9naW5BY3Rpb24ucGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICBwYXNzd29yZDogbG9naW5BY3Rpb24ucGF5bG9hZC5wYXNzd29yZCxcbiAgICAgICAgICB9KVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgbG9hZE9wZW5JZFRva2VuJDogT2JzZXJ2YWJsZTxcbiAgICBmcm9tQWN0aW9ucy5PcGVuSWRUb2tlbkFjdGlvbnNcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuTE9BRF9PUEVOX0lEX1RPS0VOKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbnMuTG9hZE9wZW5JZFRva2VuKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgZXhoYXVzdE1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLm9wZW5JZFRva2VuU2VydmljZVxuICAgICAgICAubG9hZE9wZW5JZEF1dGhlbnRpY2F0aW9uVG9rZW4ocGF5bG9hZC51c2VybmFtZSwgcGF5bG9hZC5wYXNzd29yZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKHRva2VuID0+IG5ldyBmcm9tQWN0aW9ucy5Mb2FkT3BlbklkVG9rZW5TdWNjZXNzKHRva2VuKSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgZnJvbUFjdGlvbnMuTG9hZE9wZW5JZFRva2VuRmFpbChlcnJvcikpKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIG9wZW5JZFRva2VuU2VydmljZTogT3BlbklkQXV0aGVudGljYXRpb25Ub2tlblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb25maWc6IEt5bWFDb25maWdcbiAgKSB7fVxufVxuIl19