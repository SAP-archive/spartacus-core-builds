/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { SiteContextActions } from '../../../site-context/store/actions/index';
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
        this.resetConsents$ = this.actions$.pipe(ofType(SiteContextActions.LANGUAGE_CHANGE), map((/**
         * @return {?}
         */
        () => new fromActions.ResetLoadUserConsents())));
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
         * @return {?}
         */
        () => new fromActions.WithdrawUserConsentSuccess())), catchError((/**
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
], UserConsentsEffect.prototype, "resetConsents$", void 0);
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
    UserConsentsEffect.prototype.resetConsents$;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb25zZW50cy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL3VzZXItY29uc2VudHMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDdkYsT0FBTyxLQUFLLFdBQVcsTUFBTSxpQ0FBaUMsQ0FBQztBQUcvRCxNQUFNLE9BQU8sa0JBQWtCOzs7OztJQTZEN0IsWUFDVSxRQUFpQixFQUNqQixvQkFBMEM7UUFEMUMsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBN0RwRCxtQkFBYyxHQUVWLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLEVBQzFDLEdBQUc7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLHFCQUFxQixFQUFFLEVBQUMsQ0FDbkQsQ0FBQztRQUdGLGlCQUFZLEdBQStDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMzRSxNQUFNLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLEVBQ3RDLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQW9DLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsRUFDN0QsU0FBUzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFLENBQ2pCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUNqRCxHQUFHOzs7O1FBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsRUFBQyxFQUNsRSxVQUFVOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDakIsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLG9CQUFvQixDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDdkUsQ0FDRixFQUNGLENBQ0YsQ0FBQztRQUdGLGlCQUFZLEdBQStDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMzRSxNQUFNLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLEVBQ3JDLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQW1DLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsRUFDNUQsU0FBUzs7OztRQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsc0JBQXNCLEVBQUUsRUFBRSxFQUFFLENBQ2xFLElBQUksQ0FBQyxvQkFBb0I7YUFDdEIsV0FBVyxDQUFDLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxzQkFBc0IsQ0FBQzthQUM5RCxJQUFJLENBQ0gsR0FBRzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLEVBQUMsRUFDL0QsVUFBVTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2pCLEVBQUUsQ0FDQSxJQUFJLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUNsRSxFQUNGLENBQ0YsRUFDSixDQUNGLENBQUM7UUFHRixxQkFBZ0IsR0FFWixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxFQUN6QyxHQUFHOzs7O1FBQUMsQ0FBQyxNQUF1QyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDLEVBQ2hFLFNBQVM7Ozs7UUFBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsQ0FDcEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUNqRSxHQUFHOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQywwQkFBMEIsRUFBRSxFQUFDLEVBQ3ZELFVBQVU7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUNqQixFQUFFLENBQ0EsSUFBSSxXQUFXLENBQUMsdUJBQXVCLENBQ3JDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUM3QixDQUNGLEVBQ0YsQ0FDRixFQUNGLENBQ0YsQ0FBQztJQUtDLENBQUM7OztZQWpFTCxVQUFVOzs7O1lBUkYsT0FBTztZQUtQLG9CQUFvQjs7QUFNM0I7SUFEQyxNQUFNLEVBQUU7c0NBQ08sVUFBVTswREFLeEI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDSyxVQUFVO3dEQVd0QjtBQUdGO0lBREMsTUFBTSxFQUFFO3NDQUNLLFVBQVU7d0RBZXRCO0FBR0Y7SUFEQyxNQUFNLEVBQUU7c0NBQ1MsVUFBVTs0REFpQjFCOzs7SUExREYsNENBTUU7O0lBRUYsMENBWUU7O0lBRUYsMENBZ0JFOztJQUVGLDhDQWtCRTs7Ozs7SUFHQSxzQ0FBeUI7Ozs7O0lBQ3pCLGtEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgVXNlckNvbnNlbnRDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2NvbnNlbnQvdXNlci1jb25zZW50LmNvbm5lY3Rvcic7XG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3VzZXItY29uc2VudHMuYWN0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJDb25zZW50c0VmZmVjdCB7XG4gIEBFZmZlY3QoKVxuICByZXNldENvbnNlbnRzJDogT2JzZXJ2YWJsZTxcbiAgICBmcm9tQWN0aW9ucy5SZXNldExvYWRVc2VyQ29uc2VudHNcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoU2l0ZUNvbnRleHRBY3Rpb25zLkxBTkdVQUdFX0NIQU5HRSksXG4gICAgbWFwKCgpID0+IG5ldyBmcm9tQWN0aW9ucy5SZXNldExvYWRVc2VyQ29uc2VudHMoKSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgZ2V0Q29uc2VudHMkOiBPYnNlcnZhYmxlPGZyb21BY3Rpb25zLlVzZXJDb25zZW50c0FjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLkxPQURfVVNFUl9DT05TRU5UUyksXG4gICAgbWFwKChhY3Rpb246IGZyb21BY3Rpb25zLkxvYWRVc2VyQ29uc2VudHMpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBzd2l0Y2hNYXAodXNlcklkID0+XG4gICAgICB0aGlzLnVzZXJDb25zZW50Q29ubmVjdG9yLmxvYWRDb25zZW50cyh1c2VySWQpLnBpcGUoXG4gICAgICAgIG1hcChjb25zZW50cyA9PiBuZXcgZnJvbUFjdGlvbnMuTG9hZFVzZXJDb25zZW50c1N1Y2Nlc3MoY29uc2VudHMpKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKG5ldyBmcm9tQWN0aW9ucy5Mb2FkVXNlckNvbnNlbnRzRmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgZ2l2ZUNvbnNlbnQkOiBPYnNlcnZhYmxlPGZyb21BY3Rpb25zLlVzZXJDb25zZW50c0FjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLkdJVkVfVVNFUl9DT05TRU5UKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbnMuR2l2ZVVzZXJDb25zZW50KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKCh7IHVzZXJJZCwgY29uc2VudFRlbXBsYXRlSWQsIGNvbnNlbnRUZW1wbGF0ZVZlcnNpb24gfSkgPT5cbiAgICAgIHRoaXMudXNlckNvbnNlbnRDb25uZWN0b3JcbiAgICAgICAgLmdpdmVDb25zZW50KHVzZXJJZCwgY29uc2VudFRlbXBsYXRlSWQsIGNvbnNlbnRUZW1wbGF0ZVZlcnNpb24pXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChjb25zZW50ID0+IG5ldyBmcm9tQWN0aW9ucy5HaXZlVXNlckNvbnNlbnRTdWNjZXNzKGNvbnNlbnQpKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IGZyb21BY3Rpb25zLkdpdmVVc2VyQ29uc2VudEZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHdpdGhkcmF3Q29uc2VudCQ6IE9ic2VydmFibGU8XG4gICAgZnJvbUFjdGlvbnMuVXNlckNvbnNlbnRzQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLldJVEhEUkFXX1VTRVJfQ09OU0VOVCksXG4gICAgbWFwKChhY3Rpb246IGZyb21BY3Rpb25zLldpdGhkcmF3VXNlckNvbnNlbnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBzd2l0Y2hNYXAoKHsgdXNlcklkLCBjb25zZW50Q29kZSB9KSA9PlxuICAgICAgdGhpcy51c2VyQ29uc2VudENvbm5lY3Rvci53aXRoZHJhd0NvbnNlbnQodXNlcklkLCBjb25zZW50Q29kZSkucGlwZShcbiAgICAgICAgbWFwKCgpID0+IG5ldyBmcm9tQWN0aW9ucy5XaXRoZHJhd1VzZXJDb25zZW50U3VjY2VzcygpKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKFxuICAgICAgICAgICAgbmV3IGZyb21BY3Rpb25zLldpdGhkcmF3VXNlckNvbnNlbnRGYWlsKFxuICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSB1c2VyQ29uc2VudENvbm5lY3RvcjogVXNlckNvbnNlbnRDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19