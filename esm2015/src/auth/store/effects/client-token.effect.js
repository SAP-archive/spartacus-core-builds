/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { makeHttpErrorSerializable } from '../../../util/serialization-utils';
import { ClientAuthenticationTokenService } from './../../services/client-authentication/client-authentication-token.service';
import * as fromActions from './../actions';
export class ClientTokenEffect {
    /**
     * @param {?} actions$
     * @param {?} clientAuthenticationTokenService
     */
    constructor(actions$, clientAuthenticationTokenService) {
        this.actions$ = actions$;
        this.clientAuthenticationTokenService = clientAuthenticationTokenService;
        this.loadClientToken$ = this.actions$.pipe(ofType(fromActions.LOAD_CLIENT_TOKEN), exhaustMap((/**
         * @return {?}
         */
        () => {
            return this.clientAuthenticationTokenService
                .loadClientAuthenticationToken()
                .pipe(map((/**
             * @param {?} token
             * @return {?}
             */
            (token) => {
                return new fromActions.LoadClientTokenSuccess(token);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new fromActions.LoadClientTokenFail(makeHttpErrorSerializable(error))))));
        })));
    }
}
ClientTokenEffect.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ClientTokenEffect.ctorParameters = () => [
    { type: Actions },
    { type: ClientAuthenticationTokenService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], ClientTokenEffect.prototype, "loadClientToken$", void 0);
if (false) {
    /** @type {?} */
    ClientTokenEffect.prototype.loadClientToken$;
    /**
     * @type {?}
     * @private
     */
    ClientTokenEffect.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    ClientTokenEffect.prototype.clientAuthenticationTokenService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LXRva2VuLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hdXRoL3N0b3JlL2VmZmVjdHMvY2xpZW50LXRva2VuLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRzlFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDRFQUE0RSxDQUFDO0FBQzlILE9BQU8sS0FBSyxXQUFXLE1BQU0sY0FBYyxDQUFDO0FBRzVDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBc0I1QixZQUNVLFFBQWlCLEVBQ2pCLGdDQUFrRTtRQURsRSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHFDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBa0M7UUF0QjVFLHFCQUFnQixHQUFrQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDbEUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxFQUNyQyxVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQyxnQ0FBZ0M7aUJBQ3pDLDZCQUE2QixFQUFFO2lCQUMvQixJQUFJLENBQ0gsR0FBRzs7OztZQUFDLENBQUMsS0FBa0IsRUFBRSxFQUFFO2dCQUN6QixPQUFPLElBQUksV0FBVyxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZELENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7WUFBQyxLQUFLLENBQUMsRUFBRSxDQUNqQixFQUFFLENBQ0EsSUFBSSxXQUFXLENBQUMsbUJBQW1CLENBQ2pDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUNqQyxDQUNGLEVBQ0YsQ0FDRixDQUFDO1FBQ04sQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUtDLENBQUM7OztZQTFCTCxVQUFVOzs7O1lBVEYsT0FBTztZQU1QLGdDQUFnQzs7QUFNdkM7SUFEQyxNQUFNLEVBQUU7c0NBQ1MsVUFBVTsyREFrQjFCOzs7SUFuQkYsNkNBbUJFOzs7OztJQUdBLHFDQUF5Qjs7Ozs7SUFDekIsNkRBQTBFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBleGhhdXN0TWFwLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBtYWtlSHR0cEVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IENsaWVudFRva2VuQWN0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucy9jbGllbnQtdG9rZW4uYWN0aW9uJztcbmltcG9ydCB7IENsaWVudFRva2VuIH0gZnJvbSAnLi8uLi8uLi9tb2RlbHMvdG9rZW4tdHlwZXMubW9kZWwnO1xuaW1wb3J0IHsgQ2xpZW50QXV0aGVudGljYXRpb25Ub2tlblNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL2NsaWVudC1hdXRoZW50aWNhdGlvbi9jbGllbnQtYXV0aGVudGljYXRpb24tdG9rZW4uc2VydmljZSc7XG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9ucyBmcm9tICcuLy4uL2FjdGlvbnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2xpZW50VG9rZW5FZmZlY3Qge1xuICBARWZmZWN0KClcbiAgbG9hZENsaWVudFRva2VuJDogT2JzZXJ2YWJsZTxDbGllbnRUb2tlbkFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLkxPQURfQ0xJRU5UX1RPS0VOKSxcbiAgICBleGhhdXN0TWFwKCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNsaWVudEF1dGhlbnRpY2F0aW9uVG9rZW5TZXJ2aWNlXG4gICAgICAgIC5sb2FkQ2xpZW50QXV0aGVudGljYXRpb25Ub2tlbigpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgodG9rZW46IENsaWVudFRva2VuKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IGZyb21BY3Rpb25zLkxvYWRDbGllbnRUb2tlblN1Y2Nlc3ModG9rZW4pO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgZnJvbUFjdGlvbnMuTG9hZENsaWVudFRva2VuRmFpbChcbiAgICAgICAgICAgICAgICBtYWtlSHR0cEVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIGNsaWVudEF1dGhlbnRpY2F0aW9uVG9rZW5TZXJ2aWNlOiBDbGllbnRBdXRoZW50aWNhdGlvblRva2VuU2VydmljZVxuICApIHt9XG59XG4iXX0=