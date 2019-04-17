/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as fromAction from '../actions/address-verification.action';
import { OccUserService } from '../../../user/occ/user.service';
var AddressVerificationEffect = /** @class */ (function () {
    function AddressVerificationEffect(actions$, occUserService) {
        var _this = this;
        this.actions$ = actions$;
        this.occUserService = occUserService;
        this.verifyAddress$ = this.actions$.pipe(ofType(fromAction.VERIFY_ADDRESS), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.occUserService.verifyAddress(payload.userId, payload.address).pipe(map(function (data) {
                return new fromAction.VerifyAddressSuccess(data);
            }), catchError(function (error) { return of(new fromAction.VerifyAddressFail(error)); }));
        }));
    }
    AddressVerificationEffect.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AddressVerificationEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: OccUserService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], AddressVerificationEffect.prototype, "verifyAddress$", void 0);
    return AddressVerificationEffect;
}());
export { AddressVerificationEffect };
if (false) {
    /** @type {?} */
    AddressVerificationEffect.prototype.verifyAddress$;
    /**
     * @type {?}
     * @private
     */
    AddressVerificationEffect.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    AddressVerificationEffect.prototype.occUserService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy12ZXJpZmljYXRpb24uZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL2VmZmVjdHMvYWRkcmVzcy12ZXJpZmljYXRpb24uZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0QsT0FBTyxLQUFLLFVBQVUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFaEU7SUFrQkUsbUNBQ1UsUUFBaUIsRUFDakIsY0FBOEI7UUFGeEMsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQWpCeEMsbUJBQWMsR0FFVixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsRUFDakMsR0FBRyxDQUFDLFVBQUMsTUFBVyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUMsRUFDcEMsUUFBUSxDQUFDLFVBQUEsT0FBTztZQUNkLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUNyRSxHQUFHLENBQUMsVUFBQSxJQUFJO2dCQUNOLE9BQU8sSUFBSSxVQUFVLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkQsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQTNDLENBQTJDLENBQUMsQ0FDakU7UUFMRCxDQUtDLENBQ0YsQ0FDRixDQUFDO0lBS0MsQ0FBQzs7Z0JBckJMLFVBQVU7Ozs7Z0JBUkYsT0FBTztnQkFNUCxjQUFjOztJQUtyQjtRQURDLE1BQU0sRUFBRTswQ0FDTyxVQUFVO3FFQWF4QjtJQU1KLGdDQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FyQlkseUJBQXlCOzs7SUFDcEMsbURBY0U7Ozs7O0lBR0EsNkNBQXlCOzs7OztJQUN6QixtREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIG1lcmdlTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvYWRkcmVzcy12ZXJpZmljYXRpb24uYWN0aW9uJztcbmltcG9ydCB7IE9jY1VzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9vY2MvdXNlci5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFkZHJlc3NWZXJpZmljYXRpb25FZmZlY3Qge1xuICBARWZmZWN0KClcbiAgdmVyaWZ5QWRkcmVzcyQ6IE9ic2VydmFibGU8XG4gICAgZnJvbUFjdGlvbi5WZXJpZnlBZGRyZXNzU3VjY2VzcyB8IGZyb21BY3Rpb24uVmVyaWZ5QWRkcmVzc0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbi5WRVJJRllfQUREUkVTUyksXG4gICAgbWFwKChhY3Rpb246IGFueSkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT5cbiAgICAgIHRoaXMub2NjVXNlclNlcnZpY2UudmVyaWZ5QWRkcmVzcyhwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5hZGRyZXNzKS5waXBlKFxuICAgICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBmcm9tQWN0aW9uLlZlcmlmeUFkZHJlc3NTdWNjZXNzKGRhdGEpO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgZnJvbUFjdGlvbi5WZXJpZnlBZGRyZXNzRmFpbChlcnJvcikpKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgb2NjVXNlclNlcnZpY2U6IE9jY1VzZXJTZXJ2aWNlXG4gICkge31cbn1cbiJdfQ==