/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { makeHttpErrorSerializable } from '../../../util/serialization-utils';
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
                return of(new fromActions.LoadUserConsentsFail(makeHttpErrorSerializable(error)));
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
                return of(new fromActions.GiveUserConsentFail(makeHttpErrorSerializable(error)));
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
                return of(new fromActions.WithdrawUserConsentFail(makeHttpErrorSerializable(error)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb25zZW50cy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL3VzZXItY29uc2VudHMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDOUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDdkYsT0FBTyxLQUFLLFdBQVcsTUFBTSxpQ0FBaUMsQ0FBQztBQUUvRDtJQTRERSw0QkFDVSxRQUFpQixFQUNqQixvQkFBMEM7UUFGcEQsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUEzRHBELGlCQUFZLEdBQStDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMzRSxNQUFNLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLEVBQ3RDLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQW9DLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxFQUM3RCxTQUFTOzs7O1FBQUMsVUFBQSxNQUFNO1lBQ2QsT0FBQSxLQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDakQsR0FBRzs7OztZQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsSUFBSSxXQUFXLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLEVBQWpELENBQWlELEVBQUMsRUFDbEUsVUFBVTs7OztZQUFDLFVBQUEsS0FBSztnQkFDZCxPQUFBLEVBQUUsQ0FDQSxJQUFJLFdBQVcsQ0FBQyxvQkFBb0IsQ0FDbEMseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQ2pDLENBQ0Y7WUFKRCxDQUlDLEVBQ0YsQ0FDRjtRQVRELENBU0MsRUFDRixDQUNGLENBQUM7UUFHRixpQkFBWSxHQUErQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDM0UsTUFBTSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxFQUNyQyxHQUFHOzs7O1FBQUMsVUFBQyxNQUFtQyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLEVBQUMsRUFDNUQsU0FBUzs7OztRQUFDLFVBQUMsRUFBcUQ7Z0JBQW5ELGtCQUFNLEVBQUUsd0NBQWlCLEVBQUUsa0RBQXNCO1lBQzVELE9BQUEsS0FBSSxDQUFDLG9CQUFvQjtpQkFDdEIsV0FBVyxDQUFDLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxzQkFBc0IsQ0FBQztpQkFDOUQsSUFBSSxDQUNILEdBQUc7Ozs7WUFBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLElBQUksV0FBVyxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxFQUEvQyxDQUErQyxFQUFDLEVBQy9ELFVBQVU7Ozs7WUFBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxFQUFFLENBQ0EsSUFBSSxXQUFXLENBQUMsbUJBQW1CLENBQ2pDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUNqQyxDQUNGO1lBSkQsQ0FJQyxFQUNGLENBQ0Y7UUFYSCxDQVdHLEVBQ0osQ0FDRixDQUFDO1FBR0YscUJBQWdCLEdBRVosSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsRUFDekMsR0FBRzs7OztRQUFDLFVBQUMsTUFBdUMsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxFQUFDLEVBQ2hFLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQXVCO2dCQUFyQixrQkFBTSxFQUFFLDRCQUFXO1lBQzlCLE9BQUEsS0FBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUNqRSxHQUFHOzs7O1lBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxJQUFJLFdBQVcsQ0FBQywwQkFBMEIsRUFBRSxFQUE1QyxDQUE0QyxFQUFDLEVBQ3RELFVBQVU7Ozs7WUFBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxFQUFFLENBQ0EsSUFBSSxXQUFXLENBQUMsdUJBQXVCLENBQ3JDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUNqQyxDQUNGO1lBSkQsQ0FJQyxFQUNGLENBQ0Y7UUFURCxDQVNDLEVBQ0YsQ0FDRixDQUFDO0lBS0MsQ0FBQzs7Z0JBL0RMLFVBQVU7Ozs7Z0JBUEYsT0FBTztnQkFJUCxvQkFBb0I7O0lBTTNCO1FBREMsTUFBTSxFQUFFOzBDQUNLLFVBQVU7NERBZXRCO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ0ssVUFBVTs0REFpQnRCO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ1MsVUFBVTtnRUFpQjFCO0lBTUoseUJBQUM7Q0FBQSxBQWhFRCxJQWdFQztTQS9EWSxrQkFBa0I7OztJQUM3QiwwQ0FnQkU7O0lBRUYsMENBa0JFOztJQUVGLDhDQWtCRTs7Ozs7SUFHQSxzQ0FBeUI7Ozs7O0lBQ3pCLGtEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBtYWtlSHR0cEVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IFVzZXJDb25zZW50Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9jb25zZW50L3VzZXItY29uc2VudC5jb25uZWN0b3InO1xuaW1wb3J0ICogYXMgZnJvbUFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy91c2VyLWNvbnNlbnRzLmFjdGlvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyQ29uc2VudHNFZmZlY3Qge1xuICBARWZmZWN0KClcbiAgZ2V0Q29uc2VudHMkOiBPYnNlcnZhYmxlPGZyb21BY3Rpb25zLlVzZXJDb25zZW50c0FjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLkxPQURfVVNFUl9DT05TRU5UUyksXG4gICAgbWFwKChhY3Rpb246IGZyb21BY3Rpb25zLkxvYWRVc2VyQ29uc2VudHMpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBzd2l0Y2hNYXAodXNlcklkID0+XG4gICAgICB0aGlzLnVzZXJDb25zZW50Q29ubmVjdG9yLmxvYWRDb25zZW50cyh1c2VySWQpLnBpcGUoXG4gICAgICAgIG1hcChjb25zZW50cyA9PiBuZXcgZnJvbUFjdGlvbnMuTG9hZFVzZXJDb25zZW50c1N1Y2Nlc3MoY29uc2VudHMpKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKFxuICAgICAgICAgICAgbmV3IGZyb21BY3Rpb25zLkxvYWRVc2VyQ29uc2VudHNGYWlsKFxuICAgICAgICAgICAgICBtYWtlSHR0cEVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgZ2l2ZUNvbnNlbnQkOiBPYnNlcnZhYmxlPGZyb21BY3Rpb25zLlVzZXJDb25zZW50c0FjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLkdJVkVfVVNFUl9DT05TRU5UKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbnMuR2l2ZVVzZXJDb25zZW50KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKCh7IHVzZXJJZCwgY29uc2VudFRlbXBsYXRlSWQsIGNvbnNlbnRUZW1wbGF0ZVZlcnNpb24gfSkgPT5cbiAgICAgIHRoaXMudXNlckNvbnNlbnRDb25uZWN0b3JcbiAgICAgICAgLmdpdmVDb25zZW50KHVzZXJJZCwgY29uc2VudFRlbXBsYXRlSWQsIGNvbnNlbnRUZW1wbGF0ZVZlcnNpb24pXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChjb25zZW50ID0+IG5ldyBmcm9tQWN0aW9ucy5HaXZlVXNlckNvbnNlbnRTdWNjZXNzKGNvbnNlbnQpKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IGZyb21BY3Rpb25zLkdpdmVVc2VyQ29uc2VudEZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUh0dHBFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgd2l0aGRyYXdDb25zZW50JDogT2JzZXJ2YWJsZTxcbiAgICBmcm9tQWN0aW9ucy5Vc2VyQ29uc2VudHNBY3Rpb25cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuV0lUSERSQVdfVVNFUl9DT05TRU5UKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbnMuV2l0aGRyYXdVc2VyQ29uc2VudCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIHN3aXRjaE1hcCgoeyB1c2VySWQsIGNvbnNlbnRDb2RlIH0pID0+XG4gICAgICB0aGlzLnVzZXJDb25zZW50Q29ubmVjdG9yLndpdGhkcmF3Q29uc2VudCh1c2VySWQsIGNvbnNlbnRDb2RlKS5waXBlKFxuICAgICAgICBtYXAoXyA9PiBuZXcgZnJvbUFjdGlvbnMuV2l0aGRyYXdVc2VyQ29uc2VudFN1Y2Nlc3MoKSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihcbiAgICAgICAgICAgIG5ldyBmcm9tQWN0aW9ucy5XaXRoZHJhd1VzZXJDb25zZW50RmFpbChcbiAgICAgICAgICAgICAgbWFrZUh0dHBFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHVzZXJDb25zZW50Q29ubmVjdG9yOiBVc2VyQ29uc2VudENvbm5lY3RvclxuICApIHt9XG59XG4iXX0=