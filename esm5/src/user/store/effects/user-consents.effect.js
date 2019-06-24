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
var UserConsentsEffect = /** @class */ (function () {
    function UserConsentsEffect(actions$, userConsentConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userConsentConnector = userConsentConnector;
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
             * @param {?} _
             * @return {?}
             */
            function (_) { return new fromActions.WithdrawUserConsentSuccess(); })), catchError((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb25zZW50cy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL3VzZXItY29uc2VudHMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDdkYsT0FBTyxLQUFLLFdBQVcsTUFBTSxpQ0FBaUMsQ0FBQztBQUUvRDtJQXNERSw0QkFDVSxRQUFpQixFQUNqQixvQkFBMEM7UUFGcEQsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFyRHBELGlCQUFZLEdBQStDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMzRSxNQUFNLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLEVBQ3RDLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQW9DLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxFQUM3RCxTQUFTOzs7O1FBQUMsVUFBQSxNQUFNO1lBQ2QsT0FBQSxLQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDakQsR0FBRzs7OztZQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsSUFBSSxXQUFXLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLEVBQWpELENBQWlELEVBQUMsRUFDbEUsVUFBVTs7OztZQUFDLFVBQUEsS0FBSztnQkFDZCxPQUFBLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQXRFLENBQXNFLEVBQ3ZFLENBQ0Y7UUFMRCxDQUtDLEVBQ0YsQ0FDRixDQUFDO1FBR0YsaUJBQVksR0FBK0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzNFLE1BQU0sQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsRUFDckMsR0FBRzs7OztRQUFDLFVBQUMsTUFBbUMsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxFQUFDLEVBQzVELFNBQVM7Ozs7UUFBQyxVQUFDLEVBQXFEO2dCQUFuRCxrQkFBTSxFQUFFLHdDQUFpQixFQUFFLGtEQUFzQjtZQUM1RCxPQUFBLEtBQUksQ0FBQyxvQkFBb0I7aUJBQ3RCLFdBQVcsQ0FBQyxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsc0JBQXNCLENBQUM7aUJBQzlELElBQUksQ0FDSCxHQUFHOzs7O1lBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxJQUFJLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsRUFBL0MsQ0FBK0MsRUFBQyxFQUMvRCxVQUFVOzs7O1lBQUMsVUFBQSxLQUFLO2dCQUNkLE9BQUEsRUFBRSxDQUNBLElBQUksV0FBVyxDQUFDLG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQ2xFO1lBRkQsQ0FFQyxFQUNGLENBQ0Y7UUFUSCxDQVNHLEVBQ0osQ0FDRixDQUFDO1FBR0YscUJBQWdCLEdBRVosSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsRUFDekMsR0FBRzs7OztRQUFDLFVBQUMsTUFBdUMsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxFQUFDLEVBQ2hFLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQXVCO2dCQUFyQixrQkFBTSxFQUFFLDRCQUFXO1lBQzlCLE9BQUEsS0FBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUNqRSxHQUFHOzs7O1lBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxJQUFJLFdBQVcsQ0FBQywwQkFBMEIsRUFBRSxFQUE1QyxDQUE0QyxFQUFDLEVBQ3RELFVBQVU7Ozs7WUFBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxFQUFFLENBQ0EsSUFBSSxXQUFXLENBQUMsdUJBQXVCLENBQ3JDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUM3QixDQUNGO1lBSkQsQ0FJQyxFQUNGLENBQ0Y7UUFURCxDQVNDLEVBQ0YsQ0FDRixDQUFDO0lBS0MsQ0FBQzs7Z0JBekRMLFVBQVU7Ozs7Z0JBUEYsT0FBTztnQkFJUCxvQkFBb0I7O0lBTTNCO1FBREMsTUFBTSxFQUFFOzBDQUNLLFVBQVU7NERBV3RCO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ0ssVUFBVTs0REFldEI7SUFHRjtRQURDLE1BQU0sRUFBRTswQ0FDUyxVQUFVO2dFQWlCMUI7SUFNSix5QkFBQztDQUFBLEFBMURELElBMERDO1NBekRZLGtCQUFrQjs7O0lBQzdCLDBDQVlFOztJQUVGLDBDQWdCRTs7SUFFRiw4Q0FrQkU7Ozs7O0lBR0Esc0NBQXlCOzs7OztJQUN6QixrREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IFVzZXJDb25zZW50Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9jb25zZW50L3VzZXItY29uc2VudC5jb25uZWN0b3InO1xuaW1wb3J0ICogYXMgZnJvbUFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy91c2VyLWNvbnNlbnRzLmFjdGlvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyQ29uc2VudHNFZmZlY3Qge1xuICBARWZmZWN0KClcbiAgZ2V0Q29uc2VudHMkOiBPYnNlcnZhYmxlPGZyb21BY3Rpb25zLlVzZXJDb25zZW50c0FjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLkxPQURfVVNFUl9DT05TRU5UUyksXG4gICAgbWFwKChhY3Rpb246IGZyb21BY3Rpb25zLkxvYWRVc2VyQ29uc2VudHMpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBzd2l0Y2hNYXAodXNlcklkID0+XG4gICAgICB0aGlzLnVzZXJDb25zZW50Q29ubmVjdG9yLmxvYWRDb25zZW50cyh1c2VySWQpLnBpcGUoXG4gICAgICAgIG1hcChjb25zZW50cyA9PiBuZXcgZnJvbUFjdGlvbnMuTG9hZFVzZXJDb25zZW50c1N1Y2Nlc3MoY29uc2VudHMpKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKG5ldyBmcm9tQWN0aW9ucy5Mb2FkVXNlckNvbnNlbnRzRmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgZ2l2ZUNvbnNlbnQkOiBPYnNlcnZhYmxlPGZyb21BY3Rpb25zLlVzZXJDb25zZW50c0FjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLkdJVkVfVVNFUl9DT05TRU5UKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbnMuR2l2ZVVzZXJDb25zZW50KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKCh7IHVzZXJJZCwgY29uc2VudFRlbXBsYXRlSWQsIGNvbnNlbnRUZW1wbGF0ZVZlcnNpb24gfSkgPT5cbiAgICAgIHRoaXMudXNlckNvbnNlbnRDb25uZWN0b3JcbiAgICAgICAgLmdpdmVDb25zZW50KHVzZXJJZCwgY29uc2VudFRlbXBsYXRlSWQsIGNvbnNlbnRUZW1wbGF0ZVZlcnNpb24pXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChjb25zZW50ID0+IG5ldyBmcm9tQWN0aW9ucy5HaXZlVXNlckNvbnNlbnRTdWNjZXNzKGNvbnNlbnQpKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IGZyb21BY3Rpb25zLkdpdmVVc2VyQ29uc2VudEZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHdpdGhkcmF3Q29uc2VudCQ6IE9ic2VydmFibGU8XG4gICAgZnJvbUFjdGlvbnMuVXNlckNvbnNlbnRzQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLldJVEhEUkFXX1VTRVJfQ09OU0VOVCksXG4gICAgbWFwKChhY3Rpb246IGZyb21BY3Rpb25zLldpdGhkcmF3VXNlckNvbnNlbnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBzd2l0Y2hNYXAoKHsgdXNlcklkLCBjb25zZW50Q29kZSB9KSA9PlxuICAgICAgdGhpcy51c2VyQ29uc2VudENvbm5lY3Rvci53aXRoZHJhd0NvbnNlbnQodXNlcklkLCBjb25zZW50Q29kZSkucGlwZShcbiAgICAgICAgbWFwKF8gPT4gbmV3IGZyb21BY3Rpb25zLldpdGhkcmF3VXNlckNvbnNlbnRTdWNjZXNzKCkpLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgb2YoXG4gICAgICAgICAgICBuZXcgZnJvbUFjdGlvbnMuV2l0aGRyYXdVc2VyQ29uc2VudEZhaWwoXG4gICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHVzZXJDb25zZW50Q29ubmVjdG9yOiBVc2VyQ29uc2VudENvbm5lY3RvclxuICApIHt9XG59XG4iXX0=