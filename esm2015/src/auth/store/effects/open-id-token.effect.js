/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map, withLatestFrom } from 'rxjs/operators';
import { OpenIdAuthenticationTokenService } from '../../services/open-id-token/open-id-token.service';
import * as fromActions from '../actions/open-id-token.action';
import { LOAD_USER_TOKEN, LOAD_USER_TOKEN_SUCCESS, } from '../actions/user-token.action';
export class OpenIdTokenEffect {
    /**
     * @param {?} actions$
     * @param {?} openIdTokenService
     */
    constructor(actions$, openIdTokenService) {
        this.actions$ = actions$;
        this.openIdTokenService = openIdTokenService;
        this.triggerOpenIdTokenLoading$ = this.actions$.pipe(ofType(LOAD_USER_TOKEN_SUCCESS), withLatestFrom(this.actions$.pipe(ofType(LOAD_USER_TOKEN))), map(([, loginAction]) => new fromActions.LoadOpenIdToken({
            username: loginAction.payload.userId,
            password: loginAction.payload.password,
        })));
        this.loadOpenIdToken$ = this.actions$.pipe(ofType(fromActions.LOAD_OPEN_ID_TOKEN), map((action) => action.payload), exhaustMap(payload => {
            return this.openIdTokenService
                .loadOpenIdAuthenticationToken(payload.username, payload.password)
                .pipe(map(token => new fromActions.LoadOpenIdTokenSuccess(token)), catchError(error => of(new fromActions.LoadOpenIdTokenFail(error))));
        }));
    }
}
OpenIdTokenEffect.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OpenIdTokenEffect.ctorParameters = () => [
    { type: Actions },
    { type: OpenIdAuthenticationTokenService }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbi1pZC10b2tlbi5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9zdG9yZS9lZmZlY3RzL29wZW4taWQtdG9rZW4uZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3RHLE9BQU8sS0FBSyxXQUFXLE1BQU0saUNBQWlDLENBQUM7QUFDL0QsT0FBTyxFQUVMLGVBQWUsRUFDZix1QkFBdUIsR0FDeEIsTUFBTSw4QkFBOEIsQ0FBQztBQUd0QyxNQUFNLE9BQU8saUJBQWlCOzs7OztJQWdDNUIsWUFDVSxRQUFpQixFQUNqQixrQkFBb0Q7UUFEcEQsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQWtDO1FBaEM5RCwrQkFBMEIsR0FFdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBcUMsdUJBQXVCLENBQUMsRUFDbkUsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBZ0IsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUMxRSxHQUFHLENBQ0QsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUNsQixJQUFJLFdBQVcsQ0FBQyxlQUFlLENBQUM7WUFDOUIsUUFBUSxFQUFFLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTTtZQUNwQyxRQUFRLEVBQUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRO1NBQ3ZDLENBQUMsQ0FDTCxDQUNGLENBQUM7UUFHRixxQkFBZ0IsR0FFWixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxFQUN0QyxHQUFHLENBQUMsQ0FBQyxNQUFtQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQzVELFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNuQixPQUFPLElBQUksQ0FBQyxrQkFBa0I7aUJBQzNCLDZCQUE2QixDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQztpQkFDakUsSUFBSSxDQUNILEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQzNELFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQ3BFLENBQUM7UUFDTixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBS0MsQ0FBQzs7O1lBcENMLFVBQVU7Ozs7WUFYRixPQUFPO1lBR1AsZ0NBQWdDOztBQVd2QztJQURDLE1BQU0sRUFBRTtzQ0FDbUIsVUFBVTtxRUFZcEM7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDUyxVQUFVOzJEQWExQjs7O0lBN0JGLHVEQWFFOztJQUVGLDZDQWNFOzs7OztJQUdBLHFDQUF5Qjs7Ozs7SUFDekIsK0NBQTREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBleGhhdXN0TWFwLCBtYXAsIHdpdGhMYXRlc3RGcm9tIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT3BlbklkQXV0aGVudGljYXRpb25Ub2tlblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vcGVuLWlkLXRva2VuL29wZW4taWQtdG9rZW4uc2VydmljZSc7XG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL29wZW4taWQtdG9rZW4uYWN0aW9uJztcbmltcG9ydCB7XG4gIExvYWRVc2VyVG9rZW4sXG4gIExPQURfVVNFUl9UT0tFTixcbiAgTE9BRF9VU0VSX1RPS0VOX1NVQ0NFU1MsXG59IGZyb20gJy4uL2FjdGlvbnMvdXNlci10b2tlbi5hY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3BlbklkVG9rZW5FZmZlY3Qge1xuICBARWZmZWN0KClcbiAgdHJpZ2dlck9wZW5JZFRva2VuTG9hZGluZyQ6IE9ic2VydmFibGU8XG4gICAgZnJvbUFjdGlvbnMuTG9hZE9wZW5JZFRva2VuXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlPGZyb21BY3Rpb25zLkxvYWRPcGVuSWRUb2tlblN1Y2Nlc3M+KExPQURfVVNFUl9UT0tFTl9TVUNDRVNTKSxcbiAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLmFjdGlvbnMkLnBpcGUob2ZUeXBlPExvYWRVc2VyVG9rZW4+KExPQURfVVNFUl9UT0tFTikpKSxcbiAgICBtYXAoXG4gICAgICAoWywgbG9naW5BY3Rpb25dKSA9PlxuICAgICAgICBuZXcgZnJvbUFjdGlvbnMuTG9hZE9wZW5JZFRva2VuKHtcbiAgICAgICAgICB1c2VybmFtZTogbG9naW5BY3Rpb24ucGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgcGFzc3dvcmQ6IGxvZ2luQWN0aW9uLnBheWxvYWQucGFzc3dvcmQsXG4gICAgICAgIH0pXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBsb2FkT3BlbklkVG9rZW4kOiBPYnNlcnZhYmxlPFxuICAgIGZyb21BY3Rpb25zLk9wZW5JZFRva2VuQWN0aW9uc1xuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5MT0FEX09QRU5fSURfVE9LRU4pLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tQWN0aW9ucy5Mb2FkT3BlbklkVG9rZW4pID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBleGhhdXN0TWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMub3BlbklkVG9rZW5TZXJ2aWNlXG4gICAgICAgIC5sb2FkT3BlbklkQXV0aGVudGljYXRpb25Ub2tlbihwYXlsb2FkLnVzZXJuYW1lLCBwYXlsb2FkLnBhc3N3b3JkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAodG9rZW4gPT4gbmV3IGZyb21BY3Rpb25zLkxvYWRPcGVuSWRUb2tlblN1Y2Nlc3ModG9rZW4pKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBmcm9tQWN0aW9ucy5Mb2FkT3BlbklkVG9rZW5GYWlsKGVycm9yKSkpXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgb3BlbklkVG9rZW5TZXJ2aWNlOiBPcGVuSWRBdXRoZW50aWNhdGlvblRva2VuU2VydmljZVxuICApIHt9XG59XG4iXX0=