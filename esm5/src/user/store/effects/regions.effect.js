/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as fromActions from '../actions/index';
import { UserPaymentConnector } from '../../connectors/payment/user-payment.connector';
var RegionsEffects = /** @class */ (function () {
    function RegionsEffects(actions$, userPaymentConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userPaymentConnector = userPaymentConnector;
        this.loadRegions$ = this.actions$.pipe(ofType(fromActions.LOAD_REGIONS), map(function (action) {
            return action.payload;
        }), switchMap(function (countryCode) {
            return _this.userPaymentConnector.getRegions(countryCode).pipe(map(function (regions) { return new fromActions.LoadRegionsSuccess(regions); }), catchError(function (error) { return of(new fromActions.LoadRegionsFail(error)); }));
        }));
    }
    RegionsEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    RegionsEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserPaymentConnector }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], RegionsEffects.prototype, "loadRegions$", void 0);
    return RegionsEffects;
}());
export { RegionsEffects };
if (false) {
    /** @type {?} */
    RegionsEffects.prototype.loadRegions$;
    /**
     * @type {?}
     * @private
     */
    RegionsEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    RegionsEffects.prototype.userPaymentConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaW9ucy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL3JlZ2lvbnMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUQsT0FBTyxLQUFLLFdBQVcsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUV2RjtJQWdCRSx3QkFDVSxRQUFpQixFQUNqQixvQkFBMEM7UUFGcEQsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFmcEQsaUJBQVksR0FBMEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3RFLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEVBQ2hDLEdBQUcsQ0FBQyxVQUFDLE1BQStCO1lBQ2xDLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDLENBQUMsRUFDRixTQUFTLENBQUMsVUFBQyxXQUFtQjtZQUM1QixPQUFPLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUMzRCxHQUFHLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxJQUFJLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsRUFBM0MsQ0FBMkMsQ0FBQyxFQUMzRCxVQUFVLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQTFDLENBQTBDLENBQUMsQ0FDaEUsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7SUFLQyxDQUFDOztnQkFuQkwsVUFBVTs7OztnQkFSRixPQUFPO2dCQU1QLG9CQUFvQjs7SUFLM0I7UUFEQyxNQUFNLEVBQUU7MENBQ0ssVUFBVTt3REFXdEI7SUFNSixxQkFBQztDQUFBLEFBcEJELElBb0JDO1NBbkJZLGNBQWM7OztJQUN6QixzQ0FZRTs7Ozs7SUFHQSxrQ0FBeUI7Ozs7O0lBQ3pCLDhDQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFVzZXJQYXltZW50Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9wYXltZW50L3VzZXItcGF5bWVudC5jb25uZWN0b3InO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVnaW9uc0VmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZFJlZ2lvbnMkOiBPYnNlcnZhYmxlPGZyb21BY3Rpb25zLlJlZ2lvbnNBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5MT0FEX1JFR0lPTlMpLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tQWN0aW9ucy5Mb2FkUmVnaW9ucykgPT4ge1xuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xuICAgIH0pLFxuICAgIHN3aXRjaE1hcCgoY291bnRyeUNvZGU6IHN0cmluZykgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlclBheW1lbnRDb25uZWN0b3IuZ2V0UmVnaW9ucyhjb3VudHJ5Q29kZSkucGlwZShcbiAgICAgICAgbWFwKHJlZ2lvbnMgPT4gbmV3IGZyb21BY3Rpb25zLkxvYWRSZWdpb25zU3VjY2VzcyhyZWdpb25zKSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IGZyb21BY3Rpb25zLkxvYWRSZWdpb25zRmFpbChlcnJvcikpKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSB1c2VyUGF5bWVudENvbm5lY3RvcjogVXNlclBheW1lbnRDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19