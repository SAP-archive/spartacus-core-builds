/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, catchError, exhaustMap } from 'rxjs/operators';
import * as fromActions from './../actions';
import { ClientAuthenticationTokenService } from './../../services/client-authentication/client-authentication-token.service';
export class ClientTokenEffect {
    /**
     * @param {?} actions$
     * @param {?} clientAuthenticationTokenService
     */
    constructor(actions$, clientAuthenticationTokenService) {
        this.actions$ = actions$;
        this.clientAuthenticationTokenService = clientAuthenticationTokenService;
        this.loadClientToken$ = this.actions$.pipe(ofType(fromActions.LOAD_CLIENT_TOKEN), exhaustMap(() => {
            return this.clientAuthenticationTokenService
                .loadClientAuthenticationToken()
                .pipe(map((token) => {
                return new fromActions.LoadClientTokenSuccess(token);
            }), catchError(error => of(new fromActions.LoadClientTokenFail(error))));
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LXRva2VuLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hdXRoL3N0b3JlL2VmZmVjdHMvY2xpZW50LXRva2VuLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdELE9BQU8sS0FBSyxXQUFXLE1BQU0sY0FBYyxDQUFDO0FBRzVDLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDRFQUE0RSxDQUFDO0FBRzlILE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBZ0I1QixZQUNVLFFBQWlCLEVBQ2pCLGdDQUFrRTtRQURsRSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHFDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBa0M7UUFoQjVFLHFCQUFnQixHQUFrQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDbEUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxFQUNyQyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsT0FBTyxJQUFJLENBQUMsZ0NBQWdDO2lCQUN6Qyw2QkFBNkIsRUFBRTtpQkFDL0IsSUFBSSxDQUNILEdBQUcsQ0FBQyxDQUFDLEtBQWtCLEVBQUUsRUFBRTtnQkFDekIsT0FBTyxJQUFJLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2RCxDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUNwRSxDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUtDLENBQUM7OztZQXBCTCxVQUFVOzs7O1lBVkYsT0FBTztZQVFQLGdDQUFnQzs7QUFLdkM7SUFEQyxNQUFNLEVBQUU7c0NBQ1MsVUFBVTsyREFZMUI7OztJQWJGLDZDQWFFOzs7OztJQUdBLHFDQUF5Qjs7Ozs7SUFDekIsNkRBQTBFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yLCBleGhhdXN0TWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9ucyBmcm9tICcuLy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgQ2xpZW50VG9rZW5BY3Rpb24gfSBmcm9tICcuLi9hY3Rpb25zL2NsaWVudC10b2tlbi5hY3Rpb24nO1xuaW1wb3J0IHsgQ2xpZW50VG9rZW4gfSBmcm9tICcuLy4uLy4uL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5pbXBvcnQgeyBDbGllbnRBdXRoZW50aWNhdGlvblRva2VuU2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvY2xpZW50LWF1dGhlbnRpY2F0aW9uL2NsaWVudC1hdXRoZW50aWNhdGlvbi10b2tlbi5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENsaWVudFRva2VuRWZmZWN0IHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRDbGllbnRUb2tlbiQ6IE9ic2VydmFibGU8Q2xpZW50VG9rZW5BY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5MT0FEX0NMSUVOVF9UT0tFTiksXG4gICAgZXhoYXVzdE1hcCgoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jbGllbnRBdXRoZW50aWNhdGlvblRva2VuU2VydmljZVxuICAgICAgICAubG9hZENsaWVudEF1dGhlbnRpY2F0aW9uVG9rZW4oKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKHRva2VuOiBDbGllbnRUb2tlbikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBmcm9tQWN0aW9ucy5Mb2FkQ2xpZW50VG9rZW5TdWNjZXNzKHRva2VuKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBmcm9tQWN0aW9ucy5Mb2FkQ2xpZW50VG9rZW5GYWlsKGVycm9yKSkpXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgY2xpZW50QXV0aGVudGljYXRpb25Ub2tlblNlcnZpY2U6IENsaWVudEF1dGhlbnRpY2F0aW9uVG9rZW5TZXJ2aWNlXG4gICkge31cbn1cbiJdfQ==