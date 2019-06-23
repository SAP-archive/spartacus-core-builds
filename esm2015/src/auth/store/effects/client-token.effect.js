/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
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
            error => of(new fromActions.LoadClientTokenFail(makeErrorSerializable(error))))));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LXRva2VuLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hdXRoL3N0b3JlL2VmZmVjdHMvY2xpZW50LXRva2VuLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRzFFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDRFQUE0RSxDQUFDO0FBQzlILE9BQU8sS0FBSyxXQUFXLE1BQU0sY0FBYyxDQUFDO0FBRzVDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBb0I1QixZQUNVLFFBQWlCLEVBQ2pCLGdDQUFrRTtRQURsRSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHFDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBa0M7UUFwQjVFLHFCQUFnQixHQUFrQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDbEUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxFQUNyQyxVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQyxnQ0FBZ0M7aUJBQ3pDLDZCQUE2QixFQUFFO2lCQUMvQixJQUFJLENBQ0gsR0FBRzs7OztZQUFDLENBQUMsS0FBa0IsRUFBRSxFQUFFO2dCQUN6QixPQUFPLElBQUksV0FBVyxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZELENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7WUFBQyxLQUFLLENBQUMsRUFBRSxDQUNqQixFQUFFLENBQ0EsSUFBSSxXQUFXLENBQUMsbUJBQW1CLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDbEUsRUFDRixDQUNGLENBQUM7UUFDTixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBS0MsQ0FBQzs7O1lBeEJMLFVBQVU7Ozs7WUFURixPQUFPO1lBTVAsZ0NBQWdDOztBQU12QztJQURDLE1BQU0sRUFBRTtzQ0FDUyxVQUFVOzJEQWdCMUI7OztJQWpCRiw2Q0FpQkU7Ozs7O0lBR0EscUNBQXlCOzs7OztJQUN6Qiw2REFBMEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGV4aGF1c3RNYXAsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBDbGllbnRUb2tlbkFjdGlvbiB9IGZyb20gJy4uL2FjdGlvbnMvY2xpZW50LXRva2VuLmFjdGlvbic7XG5pbXBvcnQgeyBDbGllbnRUb2tlbiB9IGZyb20gJy4vLi4vLi4vbW9kZWxzL3Rva2VuLXR5cGVzLm1vZGVsJztcbmltcG9ydCB7IENsaWVudEF1dGhlbnRpY2F0aW9uVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9jbGllbnQtYXV0aGVudGljYXRpb24vY2xpZW50LWF1dGhlbnRpY2F0aW9uLXRva2VuLnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgZnJvbUFjdGlvbnMgZnJvbSAnLi8uLi9hY3Rpb25zJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENsaWVudFRva2VuRWZmZWN0IHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRDbGllbnRUb2tlbiQ6IE9ic2VydmFibGU8Q2xpZW50VG9rZW5BY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5MT0FEX0NMSUVOVF9UT0tFTiksXG4gICAgZXhoYXVzdE1hcCgoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jbGllbnRBdXRoZW50aWNhdGlvblRva2VuU2VydmljZVxuICAgICAgICAubG9hZENsaWVudEF1dGhlbnRpY2F0aW9uVG9rZW4oKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKHRva2VuOiBDbGllbnRUb2tlbikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBmcm9tQWN0aW9ucy5Mb2FkQ2xpZW50VG9rZW5TdWNjZXNzKHRva2VuKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IGZyb21BY3Rpb25zLkxvYWRDbGllbnRUb2tlbkZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgY2xpZW50QXV0aGVudGljYXRpb25Ub2tlblNlcnZpY2U6IENsaWVudEF1dGhlbnRpY2F0aW9uVG9rZW5TZXJ2aWNlXG4gICkge31cbn1cbiJdfQ==