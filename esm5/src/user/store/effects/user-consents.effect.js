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
import * as fromSiteContextActions from '../../../site-context/store/actions/index';
var UserConsentsEffect = /** @class */ (function () {
    function UserConsentsEffect(actions$, userConsentConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userConsentConnector = userConsentConnector;
        this.resetConsents$ = this.actions$.pipe(ofType(fromSiteContextActions.LANGUAGE_CHANGE), map((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb25zZW50cy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL3VzZXItY29uc2VudHMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDdkYsT0FBTyxLQUFLLFdBQVcsTUFBTSxpQ0FBaUMsQ0FBQztBQUMvRCxPQUFPLEtBQUssc0JBQXNCLE1BQU0sMkNBQTJDLENBQUM7QUFFcEY7SUE4REUsNEJBQ1UsUUFBaUIsRUFDakIsb0JBQTBDO1FBRnBELGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBN0RwRCxtQkFBYyxHQUVWLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLEVBQzlDLEdBQUc7OztRQUFDLGNBQU0sT0FBQSxJQUFJLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxFQUF2QyxDQUF1QyxFQUFDLENBQ25ELENBQUM7UUFHRixpQkFBWSxHQUErQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDM0UsTUFBTSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0Is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a0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBVc2VyQ29uc2VudENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvY29uc2VudC91c2VyLWNvbnNlbnQuY29ubmVjdG9yJztcbmltcG9ydCAqIGFzIGZyb21BY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvdXNlci1jb25zZW50cy5hY3Rpb24nO1xuaW1wb3J0ICogYXMgZnJvbVNpdGVDb250ZXh0QWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyQ29uc2VudHNFZmZlY3Qge1xuICBARWZmZWN0KClcbiAgcmVzZXRDb25zZW50cyQ6IE9ic2VydmFibGU8XG4gICAgZnJvbUFjdGlvbnMuUmVzZXRMb2FkVXNlckNvbnNlbnRzXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21TaXRlQ29udGV4dEFjdGlvbnMuTEFOR1VBR0VfQ0hBTkdFKSxcbiAgICBtYXAoKCkgPT4gbmV3IGZyb21BY3Rpb25zLlJlc2V0TG9hZFVzZXJDb25zZW50cygpKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBnZXRDb25zZW50cyQ6IE9ic2VydmFibGU8ZnJvbUFjdGlvbnMuVXNlckNvbnNlbnRzQWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuTE9BRF9VU0VSX0NPTlNFTlRTKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbnMuTG9hZFVzZXJDb25zZW50cykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIHN3aXRjaE1hcCh1c2VySWQgPT5cbiAgICAgIHRoaXMudXNlckNvbnNlbnRDb25uZWN0b3IubG9hZENvbnNlbnRzKHVzZXJJZCkucGlwZShcbiAgICAgICAgbWFwKGNvbnNlbnRzID0+IG5ldyBmcm9tQWN0aW9ucy5Mb2FkVXNlckNvbnNlbnRzU3VjY2Vzcyhjb25zZW50cykpLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgb2YobmV3IGZyb21BY3Rpb25zLkxvYWRVc2VyQ29uc2VudHNGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBnaXZlQ29uc2VudCQ6IE9ic2VydmFibGU8ZnJvbUFjdGlvbnMuVXNlckNvbnNlbnRzQWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuR0lWRV9VU0VSX0NPTlNFTlQpLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tQWN0aW9ucy5HaXZlVXNlckNvbnNlbnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBzd2l0Y2hNYXAoKHsgdXNlcklkLCBjb25zZW50VGVtcGxhdGVJZCwgY29uc2VudFRlbXBsYXRlVmVyc2lvbiB9KSA9PlxuICAgICAgdGhpcy51c2VyQ29uc2VudENvbm5lY3RvclxuICAgICAgICAuZ2l2ZUNvbnNlbnQodXNlcklkLCBjb25zZW50VGVtcGxhdGVJZCwgY29uc2VudFRlbXBsYXRlVmVyc2lvbilcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKGNvbnNlbnQgPT4gbmV3IGZyb21BY3Rpb25zLkdpdmVVc2VyQ29uc2VudFN1Y2Nlc3MoY29uc2VudCkpLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgZnJvbUFjdGlvbnMuR2l2ZVVzZXJDb25zZW50RmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgd2l0aGRyYXdDb25zZW50JDogT2JzZXJ2YWJsZTxcbiAgICBmcm9tQWN0aW9ucy5Vc2VyQ29uc2VudHNBY3Rpb25cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuV0lUSERSQVdfVVNFUl9DT05TRU5UKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbnMuV2l0aGRyYXdVc2VyQ29uc2VudCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIHN3aXRjaE1hcCgoeyB1c2VySWQsIGNvbnNlbnRDb2RlIH0pID0+XG4gICAgICB0aGlzLnVzZXJDb25zZW50Q29ubmVjdG9yLndpdGhkcmF3Q29uc2VudCh1c2VySWQsIGNvbnNlbnRDb2RlKS5waXBlKFxuICAgICAgICBtYXAoKCkgPT4gbmV3IGZyb21BY3Rpb25zLldpdGhkcmF3VXNlckNvbnNlbnRTdWNjZXNzKCkpLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgb2YoXG4gICAgICAgICAgICBuZXcgZnJvbUFjdGlvbnMuV2l0aGRyYXdVc2VyQ29uc2VudEZhaWwoXG4gICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHVzZXJDb25zZW50Q29ubmVjdG9yOiBVc2VyQ29uc2VudENvbm5lY3RvclxuICApIHt9XG59XG4iXX0=