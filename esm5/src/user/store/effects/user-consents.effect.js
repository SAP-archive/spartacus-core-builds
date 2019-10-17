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
var UserConsentsEffect = /** @class */ (function () {
    function UserConsentsEffect(actions$, userConsentConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userConsentConnector = userConsentConnector;
        this.resetConsents$ = this.actions$.pipe(ofType(SiteContextActions.LANGUAGE_CHANGE), map((/**
         * @return {?}
         */
        function () { return new UserActions.ResetLoadUserConsents(); })));
        this.getConsents$ = this.actions$.pipe(ofType(UserActions.LOAD_USER_CONSENTS), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), concatMap((/**
         * @param {?} userId
         * @return {?}
         */
        function (userId) {
            return _this.userConsentConnector.loadConsents(userId).pipe(map((/**
             * @param {?} consents
             * @return {?}
             */
            function (consents) { return new UserActions.LoadUserConsentsSuccess(consents); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new UserActions.LoadUserConsentsFail(makeErrorSerializable(error)));
            })));
        })));
        this.giveConsent$ = this.actions$.pipe(ofType(UserActions.GIVE_USER_CONSENT, UserActions.TRANSFER_ANONYMOUS_CONSENT), concatMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.userConsentConnector
                .giveConsent(action.payload.userId, action.payload.consentTemplateId, action.payload.consentTemplateVersion)
                .pipe(map((/**
             * @param {?} consent
             * @return {?}
             */
            function (consent) { return new UserActions.GiveUserConsentSuccess(consent); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                /** @type {?} */
                var errors = [
                    new UserActions.GiveUserConsentFail(makeErrorSerializable(error)),
                ];
                if (action.type === UserActions.TRANSFER_ANONYMOUS_CONSENT &&
                    error.status === 409) {
                    errors.push(new GlobalMessageActions.RemoveMessagesByType(GlobalMessageType.MSG_TYPE_ERROR));
                }
                return of.apply(void 0, tslib_1.__spread(errors));
            })));
        })));
        this.withdrawConsent$ = this.actions$.pipe(ofType(UserActions.WITHDRAW_USER_CONSENT), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), concatMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var userId = _a.userId, consentCode = _a.consentCode;
            return _this.userConsentConnector.withdrawConsent(userId, consentCode).pipe(map((/**
             * @return {?}
             */
            function () { return new UserActions.WithdrawUserConsentSuccess(); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new UserActions.WithdrawUserConsentFail(makeErrorSerializable(error)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb25zZW50cy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL3VzZXItY29uc2VudHMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDeEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDdkYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRS9DO0lBb0ZFLDRCQUNVLFFBQWlCLEVBQ2pCLG9CQUEwQztRQUZwRCxpQkFHSTtRQUZNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQW5GcEQsbUJBQWMsR0FFVixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxFQUMxQyxHQUFHOzs7UUFBQyxjQUFNLE9BQUEsSUFBSSxXQUFXLENBQUMscUJBQXFCLEVBQUUsRUFB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RixPQUFPO2dCQU9QLG9CQUFvQjs7SUFNM0I7UUFEQyxNQUFNLEVBQUU7MENBQ08sVUFBVTs4REFLeEI7SUFHRjtRQURDLE1BQU0sRUFBRTswQ0FDSyxVQUFVOzREQVd0QjtJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUNLLFVBQVU7NERBcUN0QjtJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUNTLFVBQVU7Z0VBaUIxQjtJQU1KLHlCQUFDO0NBQUEsQUF4RkQsSUF3RkM7U0F2Rlksa0JBQWtCOzs7SUFDN0IsNENBTUU7O0lBRUYsMENBWUU7O0lBRUYsMENBc0NFOztJQUVGLDhDQWtCRTs7Ozs7SUFHQSxzQ0FBeUI7Ozs7O0lBQ3pCLGtEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgY29uY2F0TWFwLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlVHlwZSB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbC1tZXNzYWdlL21vZGVscy9nbG9iYWwtbWVzc2FnZS5tb2RlbCc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbC1tZXNzYWdlL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IFVzZXJDb25zZW50Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9jb25zZW50L3VzZXItY29uc2VudC5jb25uZWN0b3InO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJDb25zZW50c0VmZmVjdCB7XG4gIEBFZmZlY3QoKVxuICByZXNldENvbnNlbnRzJDogT2JzZXJ2YWJsZTxcbiAgICBVc2VyQWN0aW9ucy5SZXNldExvYWRVc2VyQ29uc2VudHNcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoU2l0ZUNvbnRleHRBY3Rpb25zLkxBTkdVQUdFX0NIQU5HRSksXG4gICAgbWFwKCgpID0+IG5ldyBVc2VyQWN0aW9ucy5SZXNldExvYWRVc2VyQ29uc2VudHMoKSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgZ2V0Q29uc2VudHMkOiBPYnNlcnZhYmxlPFVzZXJBY3Rpb25zLlVzZXJDb25zZW50c0FjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLkxPQURfVVNFUl9DT05TRU5UUyksXG4gICAgbWFwKChhY3Rpb246IFVzZXJBY3Rpb25zLkxvYWRVc2VyQ29uc2VudHMpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBjb25jYXRNYXAodXNlcklkID0+XG4gICAgICB0aGlzLnVzZXJDb25zZW50Q29ubmVjdG9yLmxvYWRDb25zZW50cyh1c2VySWQpLnBpcGUoXG4gICAgICAgIG1hcChjb25zZW50cyA9PiBuZXcgVXNlckFjdGlvbnMuTG9hZFVzZXJDb25zZW50c1N1Y2Nlc3MoY29uc2VudHMpKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKG5ldyBVc2VyQWN0aW9ucy5Mb2FkVXNlckNvbnNlbnRzRmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgZ2l2ZUNvbnNlbnQkOiBPYnNlcnZhYmxlPFxuICAgIFVzZXJBY3Rpb25zLlVzZXJDb25zZW50c0FjdGlvbiB8IEdsb2JhbE1lc3NhZ2VBY3Rpb25zLlJlbW92ZU1lc3NhZ2VzQnlUeXBlXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlPFVzZXJBY3Rpb25zLkdpdmVVc2VyQ29uc2VudCB8IFVzZXJBY3Rpb25zLlRyYW5zZmVyQW5vbnltb3VzQ29uc2VudD4oXG4gICAgICBVc2VyQWN0aW9ucy5HSVZFX1VTRVJfQ09OU0VOVCxcbiAgICAgIFVzZXJBY3Rpb25zLlRSQU5TRkVSX0FOT05ZTU9VU19DT05TRU5UXG4gICAgKSxcbiAgICBjb25jYXRNYXAoYWN0aW9uID0+XG4gICAgICB0aGlzLnVzZXJDb25zZW50Q29ubmVjdG9yXG4gICAgICAgIC5naXZlQ29uc2VudChcbiAgICAgICAgICBhY3Rpb24ucGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgYWN0aW9uLnBheWxvYWQuY29uc2VudFRlbXBsYXRlSWQsXG4gICAgICAgICAgYWN0aW9uLnBheWxvYWQuY29uc2VudFRlbXBsYXRlVmVyc2lvblxuICAgICAgICApXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChjb25zZW50ID0+IG5ldyBVc2VyQWN0aW9ucy5HaXZlVXNlckNvbnNlbnRTdWNjZXNzKGNvbnNlbnQpKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yczogQXJyYXk8XG4gICAgICAgICAgICAgIHwgVXNlckFjdGlvbnMuVXNlckNvbnNlbnRzQWN0aW9uXG4gICAgICAgICAgICAgIHwgR2xvYmFsTWVzc2FnZUFjdGlvbnMuUmVtb3ZlTWVzc2FnZXNCeVR5cGVcbiAgICAgICAgICAgID4gPSBbXG4gICAgICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5HaXZlVXNlckNvbnNlbnRGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgYWN0aW9uLnR5cGUgPT09IFVzZXJBY3Rpb25zLlRSQU5TRkVSX0FOT05ZTU9VU19DT05TRU5UICYmXG4gICAgICAgICAgICAgIGVycm9yLnN0YXR1cyA9PT0gNDA5XG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgZXJyb3JzLnB1c2goXG4gICAgICAgICAgICAgICAgbmV3IEdsb2JhbE1lc3NhZ2VBY3Rpb25zLlJlbW92ZU1lc3NhZ2VzQnlUeXBlKFxuICAgICAgICAgICAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb2YoLi4uZXJyb3JzKTtcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICB3aXRoZHJhd0NvbnNlbnQkOiBPYnNlcnZhYmxlPFxuICAgIFVzZXJBY3Rpb25zLlVzZXJDb25zZW50c0FjdGlvblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShVc2VyQWN0aW9ucy5XSVRIRFJBV19VU0VSX0NPTlNFTlQpLFxuICAgIG1hcCgoYWN0aW9uOiBVc2VyQWN0aW9ucy5XaXRoZHJhd1VzZXJDb25zZW50KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgY29uY2F0TWFwKCh7IHVzZXJJZCwgY29uc2VudENvZGUgfSkgPT5cbiAgICAgIHRoaXMudXNlckNvbnNlbnRDb25uZWN0b3Iud2l0aGRyYXdDb25zZW50KHVzZXJJZCwgY29uc2VudENvZGUpLnBpcGUoXG4gICAgICAgIG1hcCgoKSA9PiBuZXcgVXNlckFjdGlvbnMuV2l0aGRyYXdVc2VyQ29uc2VudFN1Y2Nlc3MoKSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihcbiAgICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5XaXRoZHJhd1VzZXJDb25zZW50RmFpbChcbiAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgdXNlckNvbnNlbnRDb25uZWN0b3I6IFVzZXJDb25zZW50Q29ubmVjdG9yXG4gICkge31cbn1cbiJdfQ==