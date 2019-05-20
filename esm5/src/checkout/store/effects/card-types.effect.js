/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as fromAction from '../actions/card-types.action';
import { CartPaymentConnector } from '../../../cart/connectors/payment/cart-payment.connector';
var CardTypesEffects = /** @class */ (function () {
    function CardTypesEffects(actions$, cartPaymentConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.cartPaymentConnector = cartPaymentConnector;
        this.loadCardTypes$ = this.actions$.pipe(ofType(fromAction.LOAD_CARD_TYPES), switchMap(function () {
            return _this.cartPaymentConnector.getCardTypes().pipe(map(function (cardTypes) { return new fromAction.LoadCardTypesSuccess(cardTypes); }), catchError(function (error) { return of(new fromAction.LoadCardTypesFail(error)); }));
        }));
    }
    CardTypesEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CardTypesEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: CartPaymentConnector }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], CardTypesEffects.prototype, "loadCardTypes$", void 0);
    return CardTypesEffects;
}());
export { CardTypesEffects };
if (false) {
    /** @type {?} */
    CardTypesEffects.prototype.loadCardTypes$;
    /**
     * @type {?}
     * @private
     */
    CardTypesEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    CardTypesEffects.prototype.cartPaymentConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC10eXBlcy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2hlY2tvdXQvc3RvcmUvZWZmZWN0cy9jYXJkLXR5cGVzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVELE9BQU8sS0FBSyxVQUFVLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFFL0Y7SUFlRSwwQkFDVSxRQUFpQixFQUNqQixvQkFBMEM7UUFGcEQsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFkcEQsbUJBQWMsR0FFVixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsRUFDbEMsU0FBUyxDQUFDO1lBQ1IsT0FBTyxLQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUNsRCxHQUFHLENBQUMsVUFBQSxTQUFTLElBQUksT0FBQSxJQUFJLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsRUFBOUMsQ0FBOEMsQ0FBQyxFQUNoRSxVQUFVLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxFQUFFLENBQUMsSUFBSSxVQUFVLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBM0MsQ0FBMkMsQ0FBQyxDQUNqRSxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUtDLENBQUM7O2dCQWxCTCxVQUFVOzs7O2dCQVJGLE9BQU87Z0JBTVAsb0JBQW9COztJQUszQjtRQURDLE1BQU0sRUFBRTswQ0FDTyxVQUFVOzREQVV4QjtJQU1KLHVCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FsQlksZ0JBQWdCOzs7SUFDM0IsMENBV0U7Ozs7O0lBR0Esb0NBQXlCOzs7OztJQUN6QixnREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0ICogYXMgZnJvbUFjdGlvbiBmcm9tICcuLi9hY3Rpb25zL2NhcmQtdHlwZXMuYWN0aW9uJztcbmltcG9ydCB7IENhcnRQYXltZW50Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vY2FydC9jb25uZWN0b3JzL3BheW1lbnQvY2FydC1wYXltZW50LmNvbm5lY3Rvcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXJkVHlwZXNFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRDYXJkVHlwZXMkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21BY3Rpb24uTG9hZENhcmRUeXBlc1N1Y2Nlc3MgfCBmcm9tQWN0aW9uLkxvYWRDYXJkVHlwZXNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb24uTE9BRF9DQVJEX1RZUEVTKSxcbiAgICBzd2l0Y2hNYXAoKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2FydFBheW1lbnRDb25uZWN0b3IuZ2V0Q2FyZFR5cGVzKCkucGlwZShcbiAgICAgICAgbWFwKGNhcmRUeXBlcyA9PiBuZXcgZnJvbUFjdGlvbi5Mb2FkQ2FyZFR5cGVzU3VjY2VzcyhjYXJkVHlwZXMpKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgZnJvbUFjdGlvbi5Mb2FkQ2FyZFR5cGVzRmFpbChlcnJvcikpKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBjYXJ0UGF5bWVudENvbm5lY3RvcjogQ2FydFBheW1lbnRDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19