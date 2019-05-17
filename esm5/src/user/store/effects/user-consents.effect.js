/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UserAccountConnector } from '../../connectors/account/user-account.connector';
import * as fromActions from '../actions/user-consents.action';
var UserConsentsEffect = /** @class */ (function () {
    function UserConsentsEffect(actions$, userAccountConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userAccountConnector = userAccountConnector;
        this.getConsents$ = this.actions$.pipe(ofType(fromActions.LOAD_USER_CONSENTS), map(function (action) { return action.payload; }), switchMap(function (userId) {
            return _this.userAccountConnector.loadConsents(userId).pipe(map(function (consents) { return new fromActions.LoadUserConsentsSuccess(consents); }), catchError(function (error) { return of(new fromActions.LoadUserConsentsFail(error)); }));
        }));
        this.giveConsent$ = this.actions$.pipe(ofType(fromActions.GIVE_USER_CONSENT), map(function (action) { return action.payload; }), switchMap(function (_a) {
            var userId = _a.userId, consentTemplateId = _a.consentTemplateId, consentTemplateVersion = _a.consentTemplateVersion;
            return _this.userAccountConnector
                .giveConsent(userId, consentTemplateId, consentTemplateVersion)
                .pipe(map(function (consent) { return new fromActions.GiveUserConsentSuccess(consent); }), catchError(function (error) { return of(new fromActions.GiveUserConsentFail(error)); }));
        }));
        this.withdrawConsent$ = this.actions$.pipe(ofType(fromActions.WITHDRAW_USER_CONSENT), map(function (action) { return action.payload; }), switchMap(function (_a) {
            var userId = _a.userId, consentCode = _a.consentCode;
            return _this.userAccountConnector.withdrawConsent(userId, consentCode).pipe(map(function (_) { return new fromActions.WithdrawUserConsentSuccess(); }), catchError(function (error) { return of(new fromActions.WithdrawUserConsentFail(error)); }));
        }));
    }
    UserConsentsEffect.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserConsentsEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: UserAccountConnector }
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
    UserConsentsEffect.prototype.userAccountConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb25zZW50cy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL3VzZXItY29uc2VudHMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDdkYsT0FBTyxLQUFLLFdBQVcsTUFBTSxpQ0FBaUMsQ0FBQztBQUUvRDtJQTBDRSw0QkFDVSxRQUFpQixFQUNqQixvQkFBMEM7UUFGcEQsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUF6Q3BELGlCQUFZLEdBQStDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMzRSxNQUFNLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLEVBQ3RDLEdBQUcsQ0FBQyxVQUFDLE1BQW9DLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxFQUM3RCxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2QsT0FBQSxLQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDakQsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsSUFBSSxXQUFXLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLEVBQWpELENBQWlELENBQUMsRUFDbEUsVUFBVSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQS9DLENBQStDLENBQUMsQ0FDckU7UUFIRCxDQUdDLENBQ0YsQ0FDRixDQUFDO1FBR0YsaUJBQVksR0FBK0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzNFLE1BQU0sQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsRUFDckMsR0FBRyxDQUFDLFVBQUMsTUFBbUMsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDLEVBQzVELFNBQVMsQ0FBQyxVQUFDLEVBQXFEO2dCQUFuRCxrQkFBTSxFQUFFLHdDQUFpQixFQUFFLGtEQUFzQjtZQUM1RCxPQUFBLEtBQUksQ0FBQyxvQkFBb0I7aUJBQ3RCLFdBQVcsQ0FBQyxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsc0JBQXNCLENBQUM7aUJBQzlELElBQUksQ0FDSCxHQUFHLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxJQUFJLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsRUFBL0MsQ0FBK0MsQ0FBQyxFQUMvRCxVQUFVLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBOUMsQ0FBOEMsQ0FBQyxDQUNwRTtRQUxILENBS0csQ0FDSixDQUNGLENBQUM7UUFHRixxQkFBZ0IsR0FFWixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxFQUN6QyxHQUFHLENBQUMsVUFBQyxNQUF1QyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUMsRUFDaEUsU0FBUyxDQUFDLFVBQUMsRUFBdUI7Z0JBQXJCLGtCQUFNLEVBQUUsNEJBQVc7WUFDOUIsT0FBQSxLQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQ2pFLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLElBQUksV0FBVyxDQUFDLDBCQUEwQixFQUFFLEVBQTVDLENBQTRDLENBQUMsRUFDdEQsVUFBVSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQWxELENBQWtELENBQUMsQ0FDeEU7UUFIRCxDQUdDLENBQ0YsQ0FDRixDQUFDO0lBS0MsQ0FBQzs7Z0JBN0NMLFVBQVU7Ozs7Z0JBTkYsT0FBTztnQkFHUCxvQkFBb0I7O0lBTTNCO1FBREMsTUFBTSxFQUFFOzBDQUNLLFVBQVU7NERBU3RCO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ0ssVUFBVTs0REFXdEI7SUFHRjtRQURDLE1BQU0sRUFBRTswQ0FDUyxVQUFVO2dFQVcxQjtJQU1KLHlCQUFDO0NBQUEsQUE5Q0QsSUE4Q0M7U0E3Q1ksa0JBQWtCOzs7SUFDN0IsMENBVUU7O0lBRUYsMENBWUU7O0lBRUYsOENBWUU7Ozs7O0lBR0Esc0NBQXlCOzs7OztJQUN6QixrREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVXNlckFjY291bnRDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2FjY291bnQvdXNlci1hY2NvdW50LmNvbm5lY3Rvcic7XG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3VzZXItY29uc2VudHMuYWN0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJDb25zZW50c0VmZmVjdCB7XG4gIEBFZmZlY3QoKVxuICBnZXRDb25zZW50cyQ6IE9ic2VydmFibGU8ZnJvbUFjdGlvbnMuVXNlckNvbnNlbnRzQWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuTE9BRF9VU0VSX0NPTlNFTlRTKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbnMuTG9hZFVzZXJDb25zZW50cykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIHN3aXRjaE1hcCh1c2VySWQgPT5cbiAgICAgIHRoaXMudXNlckFjY291bnRDb25uZWN0b3IubG9hZENvbnNlbnRzKHVzZXJJZCkucGlwZShcbiAgICAgICAgbWFwKGNvbnNlbnRzID0+IG5ldyBmcm9tQWN0aW9ucy5Mb2FkVXNlckNvbnNlbnRzU3VjY2Vzcyhjb25zZW50cykpLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBmcm9tQWN0aW9ucy5Mb2FkVXNlckNvbnNlbnRzRmFpbChlcnJvcikpKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgZ2l2ZUNvbnNlbnQkOiBPYnNlcnZhYmxlPGZyb21BY3Rpb25zLlVzZXJDb25zZW50c0FjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLkdJVkVfVVNFUl9DT05TRU5UKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbnMuR2l2ZVVzZXJDb25zZW50KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKCh7IHVzZXJJZCwgY29uc2VudFRlbXBsYXRlSWQsIGNvbnNlbnRUZW1wbGF0ZVZlcnNpb24gfSkgPT5cbiAgICAgIHRoaXMudXNlckFjY291bnRDb25uZWN0b3JcbiAgICAgICAgLmdpdmVDb25zZW50KHVzZXJJZCwgY29uc2VudFRlbXBsYXRlSWQsIGNvbnNlbnRUZW1wbGF0ZVZlcnNpb24pXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChjb25zZW50ID0+IG5ldyBmcm9tQWN0aW9ucy5HaXZlVXNlckNvbnNlbnRTdWNjZXNzKGNvbnNlbnQpKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBmcm9tQWN0aW9ucy5HaXZlVXNlckNvbnNlbnRGYWlsKGVycm9yKSkpXG4gICAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHdpdGhkcmF3Q29uc2VudCQ6IE9ic2VydmFibGU8XG4gICAgZnJvbUFjdGlvbnMuVXNlckNvbnNlbnRzQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLldJVEhEUkFXX1VTRVJfQ09OU0VOVCksXG4gICAgbWFwKChhY3Rpb246IGZyb21BY3Rpb25zLldpdGhkcmF3VXNlckNvbnNlbnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBzd2l0Y2hNYXAoKHsgdXNlcklkLCBjb25zZW50Q29kZSB9KSA9PlxuICAgICAgdGhpcy51c2VyQWNjb3VudENvbm5lY3Rvci53aXRoZHJhd0NvbnNlbnQodXNlcklkLCBjb25zZW50Q29kZSkucGlwZShcbiAgICAgICAgbWFwKF8gPT4gbmV3IGZyb21BY3Rpb25zLldpdGhkcmF3VXNlckNvbnNlbnRTdWNjZXNzKCkpLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBmcm9tQWN0aW9ucy5XaXRoZHJhd1VzZXJDb25zZW50RmFpbChlcnJvcikpKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgdXNlckFjY291bnRDb25uZWN0b3I6IFVzZXJBY2NvdW50Q29ubmVjdG9yXG4gICkge31cbn1cbiJdfQ==