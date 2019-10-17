/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { GlobalMessageType } from '../../../global-message/models/global-message.model';
import { GlobalMessageActions } from '../../../global-message/store/actions';
import { SiteContextActions } from '../../../site-context/store/actions/index';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { UserConsentConnector } from '../../connectors/consent/user-consent.connector';
import { UserActions } from '../actions/index';
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
        () => new UserActions.ResetLoadUserConsents())));
        this.getConsents$ = this.actions$.pipe(ofType(UserActions.LOAD_USER_CONSENTS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), concatMap((/**
         * @param {?} userId
         * @return {?}
         */
        userId => this.userConsentConnector.loadConsents(userId).pipe(map((/**
         * @param {?} consents
         * @return {?}
         */
        consents => new UserActions.LoadUserConsentsSuccess(consents))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new UserActions.LoadUserConsentsFail(makeErrorSerializable(error)))))))));
        this.giveConsent$ = this.actions$.pipe(ofType(UserActions.GIVE_USER_CONSENT, UserActions.TRANSFER_ANONYMOUS_CONSENT), concatMap((/**
         * @param {?} action
         * @return {?}
         */
        action => this.userConsentConnector
            .giveConsent(action.payload.userId, action.payload.consentTemplateId, action.payload.consentTemplateVersion)
            .pipe(map((/**
         * @param {?} consent
         * @return {?}
         */
        consent => new UserActions.GiveUserConsentSuccess(consent))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            /** @type {?} */
            const errors = [
                new UserActions.GiveUserConsentFail(makeErrorSerializable(error)),
            ];
            if (action.type === UserActions.TRANSFER_ANONYMOUS_CONSENT &&
                error.status === 409) {
                errors.push(new GlobalMessageActions.RemoveMessagesByType(GlobalMessageType.MSG_TYPE_ERROR));
            }
            return of(...errors);
        }))))));
        this.withdrawConsent$ = this.actions$.pipe(ofType(UserActions.WITHDRAW_USER_CONSENT), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), concatMap((/**
         * @param {?} __0
         * @return {?}
         */
        ({ userId, consentCode }) => this.userConsentConnector.withdrawConsent(userId, consentCode).pipe(map((/**
         * @return {?}
         */
        () => new UserActions.WithdrawUserConsentSuccess())), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new UserActions.WithdrawUserConsentFail(makeErrorSerializable(error)))))))));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb25zZW50cy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL3VzZXItY29uc2VudHMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDeEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDdkYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRy9DLE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBbUY3QixZQUNVLFFBQWlCLEVBQ2pCLG9CQUEwQztRQUQxQyxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFuRnBELG1CQUFjLEdBRVYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsRUFDMUMsR0FBRzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMscUJBQXFCLEVBQUUsRUFBQyxDQUNuRCxDQUFDO1FBR0YsaUJBQVksR0FBK0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzNFLE1BQU0sQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsRUFDdEMsR0FBRzs7OztRQUFDLENBQUMsTUFBb0MsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxFQUM3RCxTQUFTOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FDakIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQ2pELEdBQUc7Ozs7UUFBQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxFQUFDLEVBQ2xFLFVBQVU7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUNqQixFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsb0JBQW9CLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUN2RSxDQUNGLEVBQ0YsQ0FDRixDQUFDO1FBR0YsaUJBQVksR0FFUixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUNKLFdBQVcsQ0FBQyxpQkFBaUIsRUFDN0IsV0FBVyxDQUFDLDBCQUEwQixDQUN2QyxFQUNELFNBQVM7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUNqQixJQUFJLENBQUMsb0JBQW9CO2FBQ3RCLFdBQVcsQ0FDVixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFDckIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFDaEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FDdEM7YUFDQSxJQUFJLENBQ0gsR0FBRzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLEVBQUMsRUFDL0QsVUFBVTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFOztrQkFDWCxNQUFNLEdBR1I7Z0JBQ0YsSUFBSSxXQUFXLENBQUMsbUJBQW1CLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbEU7WUFDRCxJQUNFLE1BQU0sQ0FBQyxJQUFJLEtBQUssV0FBVyxDQUFDLDBCQUEwQjtnQkFDdEQsS0FBSyxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQ3BCO2dCQUNBLE1BQU0sQ0FBQyxJQUFJLENBQ1QsSUFBSSxvQkFBb0IsQ0FBQyxvQkFBb0IsQ0FDM0MsaUJBQWlCLENBQUMsY0FBYyxDQUNqQyxDQUNGLENBQUM7YUFDSDtZQUNELE9BQU8sRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDdkIsQ0FBQyxFQUFDLENBQ0gsRUFDSixDQUNGLENBQUM7UUFHRixxQkFBZ0IsR0FFWixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxFQUN6QyxHQUFHOzs7O1FBQUMsQ0FBQyxNQUF1QyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDLEVBQ2hFLFNBQVM7Ozs7UUFBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsQ0FDcEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUNqRSxHQUFHOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQywwQkFBMEIsRUFBRSxFQUFDLEVBQ3ZELFVBQVU7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUNqQixFQUFFLENBQ0EsSUFBSSxXQUFXLENBQUMsdUJBQXVCLENBQ3JDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUM3QixDQUNGLEVBQ0YsQ0FDRixFQUNGLENBQ0YsQ0FBQztJQUtDLENBQUM7OztZQXZGTCxVQUFVOzs7O1lBVkYsT0FBTztZQU9QLG9CQUFvQjs7QUFNM0I7SUFEQyxNQUFNLEVBQUU7c0NBQ08sVUFBVTswREFLeEI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDSyxVQUFVO3dEQVd0QjtBQUdGO0lBREMsTUFBTSxFQUFFO3NDQUNLLFVBQVU7d0RBcUN0QjtBQUdGO0lBREMsTUFBTSxFQUFFO3NDQUNTLFVBQVU7NERBaUIxQjs7O0lBaEZGLDRDQU1FOztJQUVGLDBDQVlFOztJQUVGLDBDQXNDRTs7SUFFRiw4Q0FrQkU7Ozs7O0lBR0Esc0NBQXlCOzs7OztJQUN6QixrREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGNvbmNhdE1hcCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWwtbWVzc2FnZS9tb2RlbHMvZ2xvYmFsLW1lc3NhZ2UubW9kZWwnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZUFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWwtbWVzc2FnZS9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCB7IFNpdGVDb250ZXh0QWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBVc2VyQ29uc2VudENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvY29uc2VudC91c2VyLWNvbnNlbnQuY29ubmVjdG9yJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyQ29uc2VudHNFZmZlY3Qge1xuICBARWZmZWN0KClcbiAgcmVzZXRDb25zZW50cyQ6IE9ic2VydmFibGU8XG4gICAgVXNlckFjdGlvbnMuUmVzZXRMb2FkVXNlckNvbnNlbnRzXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFNpdGVDb250ZXh0QWN0aW9ucy5MQU5HVUFHRV9DSEFOR0UpLFxuICAgIG1hcCgoKSA9PiBuZXcgVXNlckFjdGlvbnMuUmVzZXRMb2FkVXNlckNvbnNlbnRzKCkpXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGdldENvbnNlbnRzJDogT2JzZXJ2YWJsZTxVc2VyQWN0aW9ucy5Vc2VyQ29uc2VudHNBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShVc2VyQWN0aW9ucy5MT0FEX1VTRVJfQ09OU0VOVFMpLFxuICAgIG1hcCgoYWN0aW9uOiBVc2VyQWN0aW9ucy5Mb2FkVXNlckNvbnNlbnRzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgY29uY2F0TWFwKHVzZXJJZCA9PlxuICAgICAgdGhpcy51c2VyQ29uc2VudENvbm5lY3Rvci5sb2FkQ29uc2VudHModXNlcklkKS5waXBlKFxuICAgICAgICBtYXAoY29uc2VudHMgPT4gbmV3IFVzZXJBY3Rpb25zLkxvYWRVc2VyQ29uc2VudHNTdWNjZXNzKGNvbnNlbnRzKSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihuZXcgVXNlckFjdGlvbnMuTG9hZFVzZXJDb25zZW50c0ZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSkpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGdpdmVDb25zZW50JDogT2JzZXJ2YWJsZTxcbiAgICBVc2VyQWN0aW9ucy5Vc2VyQ29uc2VudHNBY3Rpb24gfCBHbG9iYWxNZXNzYWdlQWN0aW9ucy5SZW1vdmVNZXNzYWdlc0J5VHlwZVxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZTxVc2VyQWN0aW9ucy5HaXZlVXNlckNvbnNlbnQgfCBVc2VyQWN0aW9ucy5UcmFuc2ZlckFub255bW91c0NvbnNlbnQ+KFxuICAgICAgVXNlckFjdGlvbnMuR0lWRV9VU0VSX0NPTlNFTlQsXG4gICAgICBVc2VyQWN0aW9ucy5UUkFOU0ZFUl9BTk9OWU1PVVNfQ09OU0VOVFxuICAgICksXG4gICAgY29uY2F0TWFwKGFjdGlvbiA9PlxuICAgICAgdGhpcy51c2VyQ29uc2VudENvbm5lY3RvclxuICAgICAgICAuZ2l2ZUNvbnNlbnQoXG4gICAgICAgICAgYWN0aW9uLnBheWxvYWQudXNlcklkLFxuICAgICAgICAgIGFjdGlvbi5wYXlsb2FkLmNvbnNlbnRUZW1wbGF0ZUlkLFxuICAgICAgICAgIGFjdGlvbi5wYXlsb2FkLmNvbnNlbnRUZW1wbGF0ZVZlcnNpb25cbiAgICAgICAgKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoY29uc2VudCA9PiBuZXcgVXNlckFjdGlvbnMuR2l2ZVVzZXJDb25zZW50U3VjY2Vzcyhjb25zZW50KSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zdCBlcnJvcnM6IEFycmF5PFxuICAgICAgICAgICAgICB8IFVzZXJBY3Rpb25zLlVzZXJDb25zZW50c0FjdGlvblxuICAgICAgICAgICAgICB8IEdsb2JhbE1lc3NhZ2VBY3Rpb25zLlJlbW92ZU1lc3NhZ2VzQnlUeXBlXG4gICAgICAgICAgICA+ID0gW1xuICAgICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuR2l2ZVVzZXJDb25zZW50RmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGFjdGlvbi50eXBlID09PSBVc2VyQWN0aW9ucy5UUkFOU0ZFUl9BTk9OWU1PVVNfQ09OU0VOVCAmJlxuICAgICAgICAgICAgICBlcnJvci5zdGF0dXMgPT09IDQwOVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGVycm9ycy5wdXNoKFxuICAgICAgICAgICAgICAgIG5ldyBHbG9iYWxNZXNzYWdlQWN0aW9ucy5SZW1vdmVNZXNzYWdlc0J5VHlwZShcbiAgICAgICAgICAgICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9mKC4uLmVycm9ycyk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgd2l0aGRyYXdDb25zZW50JDogT2JzZXJ2YWJsZTxcbiAgICBVc2VyQWN0aW9ucy5Vc2VyQ29uc2VudHNBY3Rpb25cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoVXNlckFjdGlvbnMuV0lUSERSQVdfVVNFUl9DT05TRU5UKSxcbiAgICBtYXAoKGFjdGlvbjogVXNlckFjdGlvbnMuV2l0aGRyYXdVc2VyQ29uc2VudCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIGNvbmNhdE1hcCgoeyB1c2VySWQsIGNvbnNlbnRDb2RlIH0pID0+XG4gICAgICB0aGlzLnVzZXJDb25zZW50Q29ubmVjdG9yLndpdGhkcmF3Q29uc2VudCh1c2VySWQsIGNvbnNlbnRDb2RlKS5waXBlKFxuICAgICAgICBtYXAoKCkgPT4gbmV3IFVzZXJBY3Rpb25zLldpdGhkcmF3VXNlckNvbnNlbnRTdWNjZXNzKCkpLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgb2YoXG4gICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuV2l0aGRyYXdVc2VyQ29uc2VudEZhaWwoXG4gICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHVzZXJDb25zZW50Q29ubmVjdG9yOiBVc2VyQ29uc2VudENvbm5lY3RvclxuICApIHt9XG59XG4iXX0=