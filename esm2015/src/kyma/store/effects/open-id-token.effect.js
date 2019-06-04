/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.triggerOpenIdTokenLoading$ = iif(() => this.config.authentication && this.config.authentication.kyma_enabled, this.actions$.pipe(ofType(LOAD_USER_TOKEN_SUCCESS), withLatestFrom(this.actions$.pipe(ofType(LOAD_USER_TOKEN))), map(([, loginAction]) => new fromActions.LoadOpenIdToken({
            username: loginAction.payload.userId,
            password: loginAction.payload.password,
        }))));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbi1pZC10b2tlbi5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMva3ltYS9zdG9yZS9lZmZlY3RzL29wZW4taWQtdG9rZW4uZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RSxPQUFPLEVBRUwsZUFBZSxFQUNmLHVCQUF1QixHQUN4QixNQUFNLG1DQUFtQyxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUN0RyxPQUFPLEtBQUssV0FBVyxNQUFNLGlDQUFpQyxDQUFDO0FBRy9ELE1BQU0sT0FBTyxpQkFBaUI7Ozs7OztJQXNDNUIsWUFDVSxRQUFpQixFQUNqQixrQkFBb0QsRUFDcEQsTUFBa0I7UUFGbEIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQWtDO1FBQ3BELFdBQU0sR0FBTixNQUFNLENBQVk7UUF2QzVCLCtCQUEwQixHQUE0QyxHQUFHLENBSXZFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFlBQVksRUFDM0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2hCLE1BQU0sQ0FBcUMsdUJBQXVCLENBQUMsRUFDbkUsY0FBYyxDQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBZ0IsZUFBZSxDQUFDLENBQUMsQ0FDM0QsRUFDRCxHQUFHLENBQ0QsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUNsQixJQUFJLFdBQVcsQ0FBQyxlQUFlLENBQUM7WUFDOUIsUUFBUSxFQUFFLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTTtZQUNwQyxRQUFRLEVBQUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRO1NBQ3ZDLENBQUMsQ0FDTCxDQUNGLENBQ0YsQ0FBQztRQUdGLHFCQUFnQixHQUVaLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLEVBQ3RDLEdBQUcsQ0FBQyxDQUFDLE1BQW1DLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDNUQsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ25CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQjtpQkFDM0IsNkJBQTZCLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDO2lCQUNqRSxJQUFJLENBQ0gsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDM0QsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FDcEUsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUNILENBQUM7SUFNQyxDQUFDOzs7WUEzQ0wsVUFBVTs7OztZQVpGLE9BQU87WUFTUCxnQ0FBZ0M7WUFEaEMsVUFBVTs7QUFPakI7SUFEQyxNQUFNLEVBQUU7c0NBQ21CLFVBQVU7cUVBa0JwQztBQUdGO0lBREMsTUFBTSxFQUFFO3NDQUNTLFVBQVU7MkRBYTFCOzs7SUFuQ0YsdURBbUJFOztJQUVGLDZDQWNFOzs7OztJQUdBLHFDQUF5Qjs7Ozs7SUFDekIsK0NBQTREOzs7OztJQUM1RCxtQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgaWlmLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZXhoYXVzdE1hcCwgbWFwLCB3aXRoTGF0ZXN0RnJvbSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIExvYWRVc2VyVG9rZW4sXG4gIExPQURfVVNFUl9UT0tFTixcbiAgTE9BRF9VU0VSX1RPS0VOX1NVQ0NFU1MsXG59IGZyb20gJy4uLy4uLy4uL2F1dGgvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBLeW1hQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2t5bWEtY29uZmlnJztcbmltcG9ydCB7IE9wZW5JZEF1dGhlbnRpY2F0aW9uVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb3Blbi1pZC10b2tlbi9vcGVuLWlkLXRva2VuLnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgZnJvbUFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9vcGVuLWlkLXRva2VuLmFjdGlvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPcGVuSWRUb2tlbkVmZmVjdCB7XG4gIEBFZmZlY3QoKVxuICB0cmlnZ2VyT3BlbklkVG9rZW5Mb2FkaW5nJDogT2JzZXJ2YWJsZTxmcm9tQWN0aW9ucy5Mb2FkT3BlbklkVG9rZW4+ID0gaWlmPFxuICAgIGZyb21BY3Rpb25zLkxvYWRPcGVuSWRUb2tlbixcbiAgICBmcm9tQWN0aW9ucy5Mb2FkT3BlbklkVG9rZW5cbiAgPihcbiAgICAoKSA9PiB0aGlzLmNvbmZpZy5hdXRoZW50aWNhdGlvbiAmJiB0aGlzLmNvbmZpZy5hdXRoZW50aWNhdGlvbi5reW1hX2VuYWJsZWQsXG4gICAgdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgICAgb2ZUeXBlPGZyb21BY3Rpb25zLkxvYWRPcGVuSWRUb2tlblN1Y2Nlc3M+KExPQURfVVNFUl9UT0tFTl9TVUNDRVNTKSxcbiAgICAgIHdpdGhMYXRlc3RGcm9tKFxuICAgICAgICB0aGlzLmFjdGlvbnMkLnBpcGUob2ZUeXBlPExvYWRVc2VyVG9rZW4+KExPQURfVVNFUl9UT0tFTikpXG4gICAgICApLFxuICAgICAgbWFwKFxuICAgICAgICAoWywgbG9naW5BY3Rpb25dKSA9PlxuICAgICAgICAgIG5ldyBmcm9tQWN0aW9ucy5Mb2FkT3BlbklkVG9rZW4oe1xuICAgICAgICAgICAgdXNlcm5hbWU6IGxvZ2luQWN0aW9uLnBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IGxvZ2luQWN0aW9uLnBheWxvYWQucGFzc3dvcmQsXG4gICAgICAgICAgfSlcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGxvYWRPcGVuSWRUb2tlbiQ6IE9ic2VydmFibGU8XG4gICAgZnJvbUFjdGlvbnMuT3BlbklkVG9rZW5BY3Rpb25zXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLkxPQURfT1BFTl9JRF9UT0tFTiksXG4gICAgbWFwKChhY3Rpb246IGZyb21BY3Rpb25zLkxvYWRPcGVuSWRUb2tlbikgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIGV4aGF1c3RNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vcGVuSWRUb2tlblNlcnZpY2VcbiAgICAgICAgLmxvYWRPcGVuSWRBdXRoZW50aWNhdGlvblRva2VuKHBheWxvYWQudXNlcm5hbWUsIHBheWxvYWQucGFzc3dvcmQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCh0b2tlbiA9PiBuZXcgZnJvbUFjdGlvbnMuTG9hZE9wZW5JZFRva2VuU3VjY2Vzcyh0b2tlbikpLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IGZyb21BY3Rpb25zLkxvYWRPcGVuSWRUb2tlbkZhaWwoZXJyb3IpKSlcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBvcGVuSWRUb2tlblNlcnZpY2U6IE9wZW5JZEF1dGhlbnRpY2F0aW9uVG9rZW5TZXJ2aWNlLFxuICAgIHByaXZhdGUgY29uZmlnOiBLeW1hQ29uZmlnXG4gICkge31cbn1cbiJdfQ==