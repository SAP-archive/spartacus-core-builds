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
var UserConsentsEffect = /** @class */ (function () {
    function UserConsentsEffect(actions$, userConsentConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userConsentConnector = userConsentConnector;
        this.resetConsents$ = this.actions$.pipe(ofType(SiteContextActions.LANGUAGE_CHANGE), map((/**
         * @return {?}
         */
        function () { return new fromActions.ResetLoadUserConsents(); })));
        this.getConsents$ = this.actions$.pipe(ofType(fromActions.LOAD_USER_CONSENTS), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), switchMap((/**
         * @param {?} userId
         * @return {?}
         */
        function (userId) {
            return _this.userConsentConnector.loadConsents(userId).pipe(map((/**
             * @param {?} consents
             * @return {?}
             */
            function (consents) { return new fromActions.LoadUserConsentsSuccess(consents); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new fromActions.LoadUserConsentsFail(makeErrorSerializable(error)));
            })));
        })));
        this.giveConsent$ = this.actions$.pipe(ofType(fromActions.GIVE_USER_CONSENT), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var userId = _a.userId, consentTemplateId = _a.consentTemplateId, consentTemplateVersion = _a.consentTemplateVersion;
            return _this.userConsentConnector
                .giveConsent(userId, consentTemplateId, consentTemplateVersion)
                .pipe(map((/**
             * @param {?} consent
             * @return {?}
             */
            function (consent) { return new fromActions.GiveUserConsentSuccess(consent); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new fromActions.GiveUserConsentFail(makeErrorSerializable(error)));
            })));
        })));
        this.withdrawConsent$ = this.actions$.pipe(ofType(fromActions.WITHDRAW_USER_CONSENT), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var userId = _a.userId, consentCode = _a.consentCode;
            return _this.userConsentConnector.withdrawConsent(userId, consentCode).pipe(map((/**
             * @return {?}
             */
            function () { return new fromActions.WithdrawUserConsentSuccess(); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new fromActions.WithdrawUserConsentFail(makeErrorSerializable(error)));
            })));
        })));
    }
    UserConsentsEffect.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserConsentsEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: UserConsentConnector }
    ]; };
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
    return UserConsentsEffect;
}());
export { UserConsentsEffect };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb25zZW50cy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL3VzZXItY29uc2VudHMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDdkYsT0FBTyxLQUFLLFdBQVcsTUFBTSxpQ0FBaUMsQ0FBQztBQUUvRDtJQThERSw0QkFDVSxRQUFpQixFQUNqQixvQkFBMEM7UUFGcEQsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUE3RHBELG1CQUFjLEdBRVYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsRUFDMUMsR0FBRzs7O1FBQUMsY0FBTSxPQUFBLElBQUksV0FBVyxDQUFDLHFCQUFxQixFQUFFLEVBQXZDLENBQXVDLEVBQUMsQ0FDbkQsQ0FBQztRQUdGLGlCQUFZLEdBQStDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMzRSxNQUFNLENBQUMsV0FBVyxDQUFDLGtC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QUN6QixrREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IFVzZXJDb25zZW50Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9jb25zZW50L3VzZXItY29uc2VudC5jb25uZWN0b3InO1xuaW1wb3J0ICogYXMgZnJvbUFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy91c2VyLWNvbnNlbnRzLmFjdGlvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyQ29uc2VudHNFZmZlY3Qge1xuICBARWZmZWN0KClcbiAgcmVzZXRDb25zZW50cyQ6IE9ic2VydmFibGU8XG4gICAgZnJvbUFjdGlvbnMuUmVzZXRMb2FkVXNlckNvbnNlbnRzXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFNpdGVDb250ZXh0QWN0aW9ucy5MQU5HVUFHRV9DSEFOR0UpLFxuICAgIG1hcCgoKSA9PiBuZXcgZnJvbUFjdGlvbnMuUmVzZXRMb2FkVXNlckNvbnNlbnRzKCkpXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGdldENvbnNlbnRzJDogT2JzZXJ2YWJsZTxmcm9tQWN0aW9ucy5Vc2VyQ29uc2VudHNBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5MT0FEX1VTRVJfQ09OU0VOVFMpLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tQWN0aW9ucy5Mb2FkVXNlckNvbnNlbnRzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKHVzZXJJZCA9PlxuICAgICAgdGhpcy51c2VyQ29uc2VudENvbm5lY3Rvci5sb2FkQ29uc2VudHModXNlcklkKS5waXBlKFxuICAgICAgICBtYXAoY29uc2VudHMgPT4gbmV3IGZyb21BY3Rpb25zLkxvYWRVc2VyQ29uc2VudHNTdWNjZXNzKGNvbnNlbnRzKSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihuZXcgZnJvbUFjdGlvbnMuTG9hZFVzZXJDb25zZW50c0ZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSkpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGdpdmVDb25zZW50JDogT2JzZXJ2YWJsZTxmcm9tQWN0aW9ucy5Vc2VyQ29uc2VudHNBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5HSVZFX1VTRVJfQ09OU0VOVCksXG4gICAgbWFwKChhY3Rpb246IGZyb21BY3Rpb25zLkdpdmVVc2VyQ29uc2VudCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIHN3aXRjaE1hcCgoeyB1c2VySWQsIGNvbnNlbnRUZW1wbGF0ZUlkLCBjb25zZW50VGVtcGxhdGVWZXJzaW9uIH0pID0+XG4gICAgICB0aGlzLnVzZXJDb25zZW50Q29ubmVjdG9yXG4gICAgICAgIC5naXZlQ29uc2VudCh1c2VySWQsIGNvbnNlbnRUZW1wbGF0ZUlkLCBjb25zZW50VGVtcGxhdGVWZXJzaW9uKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoY29uc2VudCA9PiBuZXcgZnJvbUFjdGlvbnMuR2l2ZVVzZXJDb25zZW50U3VjY2Vzcyhjb25zZW50KSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBmcm9tQWN0aW9ucy5HaXZlVXNlckNvbnNlbnRGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICB3aXRoZHJhd0NvbnNlbnQkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21BY3Rpb25zLlVzZXJDb25zZW50c0FjdGlvblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5XSVRIRFJBV19VU0VSX0NPTlNFTlQpLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tQWN0aW9ucy5XaXRoZHJhd1VzZXJDb25zZW50KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKCh7IHVzZXJJZCwgY29uc2VudENvZGUgfSkgPT5cbiAgICAgIHRoaXMudXNlckNvbnNlbnRDb25uZWN0b3Iud2l0aGRyYXdDb25zZW50KHVzZXJJZCwgY29uc2VudENvZGUpLnBpcGUoXG4gICAgICAgIG1hcCgoKSA9PiBuZXcgZnJvbUFjdGlvbnMuV2l0aGRyYXdVc2VyQ29uc2VudFN1Y2Nlc3MoKSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihcbiAgICAgICAgICAgIG5ldyBmcm9tQWN0aW9ucy5XaXRoZHJhd1VzZXJDb25zZW50RmFpbChcbiAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgdXNlckNvbnNlbnRDb25uZWN0b3I6IFVzZXJDb25zZW50Q29ubmVjdG9yXG4gICkge31cbn1cbiJdfQ==