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
export class CustomerSupportAgentTokenEffects {
    /**
     * @param {?} actions$
     * @param {?} userTokenService
     */
    constructor(actions$, userTokenService) {
        this.actions$ = actions$;
        this.userTokenService = userTokenService;
        this.loadCustomerSupportAgentToken$ = this.actions$.pipe(ofType(AsmActions.LOAD_CUSTOMER_SUPPORT_AGENT_TOKEN), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ({ userId, password }) => this.userTokenService.loadToken(userId, password).pipe(map((/**
         * @param {?} token
         * @return {?}
         */
        (token) => {
            /** @type {?} */
            const date = new Date();
            date.setSeconds(date.getSeconds() + token.expires_in);
            token.expiration_time = date.toJSON();
            return new AsmActions.LoadCustomerSupportAgentTokenSuccess(token);
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new AsmActions.LoadCustomerSupportAgentTokenFail(makeErrorSerializable(error)))))))));
    }
}
CustomerSupportAgentTokenEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CustomerSupportAgentTokenEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserAuthenticationTokenService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], CustomerSupportAgentTokenEffects.prototype, "loadCustomerSupportAgentToken$", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NhZ2VudC10b2tlbi5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXNtL3N0b3JlL2VmZmVjdHMvY3NhZ2VudC10b2tlbi5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUUxRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw4RUFBOEUsQ0FBQztBQUM5SCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHOUMsTUFBTSxPQUFPLGdDQUFnQzs7Ozs7SUEwQjNDLFlBQ1UsUUFBaUIsRUFDakIsZ0JBQWdEO1FBRGhELGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFnQztRQTFCMUQsbUNBQThCLEdBRTFCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsVUFBVSxDQUFDLGlDQUFpQyxDQUFDLEVBQ3BELEdBQUc7Ozs7UUFBQyxDQUFDLE1BQWdELEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsRUFDekUsU0FBUzs7OztRQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUNqQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQ3BELEdBQUc7Ozs7UUFBQyxDQUFDLEtBQWdCLEVBQUUsRUFBRTs7a0JBQ2pCLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtZQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDdEQsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDdEMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxvQ0FBb0MsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwRSxDQUFDLEVBQUMsRUFDRixVQUFVOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDakIsRUFBRSxDQUNBLElBQUksVUFBVSxDQUFDLGlDQUFpQyxDQUM5QyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FDN0IsQ0FDRixFQUNGLENBQ0YsRUFDRixDQUNGLENBQUM7SUFLQyxDQUFDOzs7WUE5QkwsVUFBVTs7OztZQVJGLE9BQU87WUFLUCw4QkFBOEI7O0FBTXJDO0lBREMsTUFBTSxFQUFFO3NDQUN1QixVQUFVO3dGQXNCeEM7OztJQXZCRiwwRUF1QkU7Ozs7O0lBR0Esb0RBQXlCOzs7OztJQUN6Qiw0REFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IFVzZXJUb2tlbiB9IGZyb20gJy4uLy4uLy4uL2F1dGgvbW9kZWxzL3Rva2VuLXR5cGVzLm1vZGVsJztcbmltcG9ydCB7IFVzZXJBdXRoZW50aWNhdGlvblRva2VuU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2F1dGgvc2VydmljZXMvdXNlci1hdXRoZW50aWNhdGlvbi91c2VyLWF1dGhlbnRpY2F0aW9uLXRva2VuLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXNtQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbkVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW4kOiBPYnNlcnZhYmxlPFxuICAgIEFzbUFjdGlvbnMuQ3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbkFjdGlvblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShBc21BY3Rpb25zLkxPQURfQ1VTVE9NRVJfU1VQUE9SVF9BR0VOVF9UT0tFTiksXG4gICAgbWFwKChhY3Rpb246IEFzbUFjdGlvbnMuTG9hZEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW4pID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBzd2l0Y2hNYXAoKHsgdXNlcklkLCBwYXNzd29yZCB9KSA9PlxuICAgICAgdGhpcy51c2VyVG9rZW5TZXJ2aWNlLmxvYWRUb2tlbih1c2VySWQsIHBhc3N3b3JkKS5waXBlKFxuICAgICAgICBtYXAoKHRva2VuOiBVc2VyVG9rZW4pID0+IHtcbiAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICBkYXRlLnNldFNlY29uZHMoZGF0ZS5nZXRTZWNvbmRzKCkgKyB0b2tlbi5leHBpcmVzX2luKTtcbiAgICAgICAgICB0b2tlbi5leHBpcmF0aW9uX3RpbWUgPSBkYXRlLnRvSlNPTigpO1xuICAgICAgICAgIHJldHVybiBuZXcgQXNtQWN0aW9ucy5Mb2FkQ3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlblN1Y2Nlc3ModG9rZW4pO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKFxuICAgICAgICAgICAgbmV3IEFzbUFjdGlvbnMuTG9hZEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW5GYWlsKFxuICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSB1c2VyVG9rZW5TZXJ2aWNlOiBVc2VyQXV0aGVudGljYXRpb25Ub2tlblNlcnZpY2VcbiAgKSB7fVxufVxuIl19