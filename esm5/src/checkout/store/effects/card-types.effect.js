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
import { CheckoutPaymentConnector } from '../../connectors/payment/checkout-payment.connector';
var CardTypesEffects = /** @class */ (function () {
    function CardTypesEffects(actions$, checkoutPaymentConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.checkoutPaymentConnector = checkoutPaymentConnector;
        this.loadCardTypes$ = this.actions$.pipe(ofType(fromAction.LOAD_CARD_TYPES), switchMap(function () {
            return _this.checkoutPaymentConnector.getCardTypes().pipe(map(function (cardTypes) { return new fromAction.LoadCardTypesSuccess(cardTypes); }), catchError(function (error) { return of(new fromAction.LoadCardTypesFail(error)); }));
        }));
    }
    CardTypesEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CardTypesEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: CheckoutPaymentConnector }
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
    CardTypesEffects.prototype.checkoutPaymentConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC10eXBlcy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2hlY2tvdXQvc3RvcmUvZWZmZWN0cy9jYXJkLXR5cGVzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVELE9BQU8sS0FBSyxVQUFVLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFFL0Y7SUFlRSwwQkFDVSxRQUFpQixFQUNqQix3QkFBa0Q7UUFGNUQsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFkNUQsbUJBQWMsR0FFVixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsRUFDbEMsU0FBUyxDQUFDO1lBQ1IsT0FBTyxLQUFJLENBQUMsd0JBQXdCLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUN0RCxHQUFHLENBQUMsVUFBQSxTQUFTLElBQUksT0FBQSxJQUFJLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsRUFBOUMsQ0FBOEMsQ0FBQyxFQUNoRSxVQUFVLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxFQUFFLENBQUMsSUFBSSxVQUFVLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBM0MsQ0FBMkMsQ0FBQyxDQUNqRSxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUtDLENBQUM7O2dCQWxCTCxVQUFVOzs7O2dCQVJGLE9BQU87Z0JBTVAsd0JBQXdCOztJQUsvQjtRQURDLE1BQU0sRUFBRTswQ0FDTyxVQUFVOzREQVV4QjtJQU1KLHVCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FsQlksZ0JBQWdCOzs7SUFDM0IsMENBV0U7Ozs7O0lBR0Esb0NBQXlCOzs7OztJQUN6QixvREFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0ICogYXMgZnJvbUFjdGlvbiBmcm9tICcuLi9hY3Rpb25zL2NhcmQtdHlwZXMuYWN0aW9uJztcbmltcG9ydCB7IENoZWNrb3V0UGF5bWVudENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvcGF5bWVudC9jaGVja291dC1wYXltZW50LmNvbm5lY3Rvcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXJkVHlwZXNFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRDYXJkVHlwZXMkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21BY3Rpb24uTG9hZENhcmRUeXBlc1N1Y2Nlc3MgfCBmcm9tQWN0aW9uLkxvYWRDYXJkVHlwZXNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb24uTE9BRF9DQVJEX1RZUEVTKSxcbiAgICBzd2l0Y2hNYXAoKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRQYXltZW50Q29ubmVjdG9yLmdldENhcmRUeXBlcygpLnBpcGUoXG4gICAgICAgIG1hcChjYXJkVHlwZXMgPT4gbmV3IGZyb21BY3Rpb24uTG9hZENhcmRUeXBlc1N1Y2Nlc3MoY2FyZFR5cGVzKSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IGZyb21BY3Rpb24uTG9hZENhcmRUeXBlc0ZhaWwoZXJyb3IpKSlcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgY2hlY2tvdXRQYXltZW50Q29ubmVjdG9yOiBDaGVja291dFBheW1lbnRDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19