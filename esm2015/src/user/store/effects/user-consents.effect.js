/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { UserConsentConnector } from '../../connectors/consent/user-consent.connector';
import * as fromActions from '../actions/user-consents.action';
export class UserConsentsEffect {
    /**
     * @param {?} actions$
     * @param {?} userConsentConnector
     */
    constructor(actions$, userConsentConnector) {
        this.actions$ = actions$;
        this.userConsentConnector = userConsentConnector;
        this.getConsents$ = this.actions$.pipe(ofType(fromActions.LOAD_USER_CONSENTS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), switchMap((/**
         * @param {?} userId
         * @return {?}
         */
        userId => this.userConsentConnector.loadConsents(userId).pipe(map((/**
         * @param {?} consents
         * @return {?}
         */
        consents => new fromActions.LoadUserConsentsSuccess(consents))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new fromActions.LoadUserConsentsFail(makeErrorSerializable(error)))))))));
        this.giveConsent$ = this.actions$.pipe(ofType(fromActions.GIVE_USER_CONSENT), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ({ userId, consentTemplateId, consentTemplateVersion }) => this.userConsentConnector
            .giveConsent(userId, consentTemplateId, consentTemplateVersion)
            .pipe(map((/**
         * @param {?} consent
         * @return {?}
         */
        consent => new fromActions.GiveUserConsentSuccess(consent))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new fromActions.GiveUserConsentFail(makeErrorSerializable(error)))))))));
        this.withdrawConsent$ = this.actions$.pipe(ofType(fromActions.WITHDRAW_USER_CONSENT), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ({ userId, consentCode }) => this.userConsentConnector.withdrawConsent(userId, consentCode).pipe(map((/**
         * @param {?} _
         * @return {?}
         */
        _ => new fromActions.WithdrawUserConsentSuccess())), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new fromActions.WithdrawUserConsentFail(makeErrorSerializable(error)))))))));
    }
}
UserConsentsEffect.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UserConsentsEffect.ctorParameters = () => [
    { type: Actions },
    { type: UserConsentConnector }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], UserConsentsEffect.prototype, "getConsents$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], UserConsentsEffect.prototype, "giveConsent$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], UserConsentsEffect.prototype, "withdrawConsent$", void 0);
if (false) {
    /** @type {?} */
    UserConsentsEffect.prototype.getConsents$;
    /** @type {?} */
    UserConsentsEffect.prototype.giveConsent$;
    /** @type {?} */
    UserConsentsEffect.prototype.withdrawConsent$;
    /**
     * @type {?}
     * @private
     */
    UserConsentsEffect.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    UserConsentsEffect.prototype.userConsentConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb25zZW50cy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL3VzZXItY29uc2VudHMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDdkYsT0FBTyxLQUFLLFdBQVcsTUFBTSxpQ0FBaUMsQ0FBQztBQUcvRCxNQUFNLE9BQU8sa0JBQWtCOzs7OztJQXFEN0IsWUFDVSxRQUFpQixFQUNqQixvQkFBMEM7UUFEMUMsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBckRwRCxpQkFBWSxHQUErQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDM0UsTUFBTSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxFQUN0QyxHQUFHOzs7O1FBQUMsQ0FBQyxNQUFvQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDLEVBQzdELFNBQVM7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUNqQixJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDakQsR0FBRzs7OztRQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLEVBQUMsRUFDbEUsVUFBVTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2pCLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ3ZFLENBQ0YsRUFDRixDQUNGLENBQUM7UUFHRixpQkFBWSxHQUErQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDM0UsTUFBTSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxFQUNyQyxHQUFHOzs7O1FBQUMsQ0FBQyxNQUFtQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDLEVBQzVELFNBQVM7Ozs7UUFBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLHNCQUFzQixFQUFFLEVBQUUsRUFBRSxDQUNsRSxJQUFJLENBQUMsb0JBQW9CO2FBQ3RCLFdBQVcsQ0FBQyxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsc0JBQXNCLENBQUM7YUFDOUQsSUFBSSxDQUNILEdBQUc7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxFQUFDLEVBQy9ELFVBQVU7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUNqQixFQUFFLENBQ0EsSUFBSSxXQUFXLENBQUMsbUJBQW1CLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDbEUsRUFDRixDQUNGLEVBQ0osQ0FDRixDQUFDO1FBR0YscUJBQWdCLEdBRVosSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsRUFDekMsR0FBRzs7OztRQUFDLENBQUMsTUFBdUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxFQUNoRSxTQUFTOzs7O1FBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLENBQ3BDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDakUsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsMEJBQTBCLEVBQUUsRUFBQyxFQUN0RCxVQUFVOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDakIsRUFBRSxDQUNBLElBQUksV0FBVyxDQUFDLHVCQUF1QixDQUNyQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FDN0IsQ0FDRixFQUNGLENBQ0YsRUFDRixDQUNGLENBQUM7SUFLQyxDQUFDOzs7WUF6REwsVUFBVTs7OztZQVBGLE9BQU87WUFJUCxvQkFBb0I7O0FBTTNCO0lBREMsTUFBTSxFQUFFO3NDQUNLLFVBQVU7d0RBV3RCO0FBR0Y7SUFEQyxNQUFNLEVBQUU7c0NBQ0ssVUFBVTt3REFldEI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDUyxVQUFVOzREQWlCMUI7OztJQWxERiwwQ0FZRTs7SUFFRiwwQ0FnQkU7O0lBRUYsOENBa0JFOzs7OztJQUdBLHNDQUF5Qjs7Ozs7SUFDekIsa0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBVc2VyQ29uc2VudENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvY29uc2VudC91c2VyLWNvbnNlbnQuY29ubmVjdG9yJztcbmltcG9ydCAqIGFzIGZyb21BY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvdXNlci1jb25zZW50cy5hY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlckNvbnNlbnRzRWZmZWN0IHtcbiAgQEVmZmVjdCgpXG4gIGdldENvbnNlbnRzJDogT2JzZXJ2YWJsZTxmcm9tQWN0aW9ucy5Vc2VyQ29uc2VudHNBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5MT0FEX1VTRVJfQ09OU0VOVFMpLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tQWN0aW9ucy5Mb2FkVXNlckNvbnNlbnRzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKHVzZXJJZCA9PlxuICAgICAgdGhpcy51c2VyQ29uc2VudENvbm5lY3Rvci5sb2FkQ29uc2VudHModXNlcklkKS5waXBlKFxuICAgICAgICBtYXAoY29uc2VudHMgPT4gbmV3IGZyb21BY3Rpb25zLkxvYWRVc2VyQ29uc2VudHNTdWNjZXNzKGNvbnNlbnRzKSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihuZXcgZnJvbUFjdGlvbnMuTG9hZFVzZXJDb25zZW50c0ZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSkpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGdpdmVDb25zZW50JDogT2JzZXJ2YWJsZTxmcm9tQWN0aW9ucy5Vc2VyQ29uc2VudHNBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5HSVZFX1VTRVJfQ09OU0VOVCksXG4gICAgbWFwKChhY3Rpb246IGZyb21BY3Rpb25zLkdpdmVVc2VyQ29uc2VudCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIHN3aXRjaE1hcCgoeyB1c2VySWQsIGNvbnNlbnRUZW1wbGF0ZUlkLCBjb25zZW50VGVtcGxhdGVWZXJzaW9uIH0pID0+XG4gICAgICB0aGlzLnVzZXJDb25zZW50Q29ubmVjdG9yXG4gICAgICAgIC5naXZlQ29uc2VudCh1c2VySWQsIGNvbnNlbnRUZW1wbGF0ZUlkLCBjb25zZW50VGVtcGxhdGVWZXJzaW9uKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoY29uc2VudCA9PiBuZXcgZnJvbUFjdGlvbnMuR2l2ZVVzZXJDb25zZW50U3VjY2Vzcyhjb25zZW50KSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBmcm9tQWN0aW9ucy5HaXZlVXNlckNvbnNlbnRGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICB3aXRoZHJhd0NvbnNlbnQkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21BY3Rpb25zLlVzZXJDb25zZW50c0FjdGlvblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5XSVRIRFJBV19VU0VSX0NPTlNFTlQpLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tQWN0aW9ucy5XaXRoZHJhd1VzZXJDb25zZW50KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKCh7IHVzZXJJZCwgY29uc2VudENvZGUgfSkgPT5cbiAgICAgIHRoaXMudXNlckNvbnNlbnRDb25uZWN0b3Iud2l0aGRyYXdDb25zZW50KHVzZXJJZCwgY29uc2VudENvZGUpLnBpcGUoXG4gICAgICAgIG1hcChfID0+IG5ldyBmcm9tQWN0aW9ucy5XaXRoZHJhd1VzZXJDb25zZW50U3VjY2VzcygpKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKFxuICAgICAgICAgICAgbmV3IGZyb21BY3Rpb25zLldpdGhkcmF3VXNlckNvbnNlbnRGYWlsKFxuICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSB1c2VyQ29uc2VudENvbm5lY3RvcjogVXNlckNvbnNlbnRDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19