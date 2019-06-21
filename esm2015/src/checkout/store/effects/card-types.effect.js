/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as fromAction from '../actions/card-types.action';
import { CheckoutPaymentConnector } from '../../connectors/payment/checkout-payment.connector';
export class CardTypesEffects {
    /**
     * @param {?} actions$
     * @param {?} checkoutPaymentConnector
     */
    constructor(actions$, checkoutPaymentConnector) {
        this.actions$ = actions$;
        this.checkoutPaymentConnector = checkoutPaymentConnector;
        this.loadCardTypes$ = this.actions$.pipe(ofType(fromAction.LOAD_CARD_TYPES), switchMap((/**
         * @return {?}
         */
        () => {
            return this.checkoutPaymentConnector.getCardTypes().pipe(map((/**
             * @param {?} cardTypes
             * @return {?}
             */
            cardTypes => new fromAction.LoadCardTypesSuccess(cardTypes))), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new fromAction.LoadCardTypesFail(error)))));
        })));
    }
}
CardTypesEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CardTypesEffects.ctorParameters = () => [
    { type: Actions },
    { type: CheckoutPaymentConnector }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], CardTypesEffects.prototype, "loadCardTypes$", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC10eXBlcy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2hlY2tvdXQvc3RvcmUvZWZmZWN0cy9jYXJkLXR5cGVzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVELE9BQU8sS0FBSyxVQUFVLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFHL0YsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFjM0IsWUFDVSxRQUFpQixFQUNqQix3QkFBa0Q7UUFEbEQsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBZDVELG1CQUFjLEdBRVYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLEVBQ2xDLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUNiLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDdEQsR0FBRzs7OztZQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxVQUFVLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLEVBQUMsRUFDaEUsVUFBVTs7OztZQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FDakUsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNILENBQUM7SUFLQyxDQUFDOzs7WUFsQkwsVUFBVTs7OztZQVJGLE9BQU87WUFNUCx3QkFBd0I7O0FBSy9CO0lBREMsTUFBTSxFQUFFO3NDQUNPLFVBQVU7d0RBVXhCOzs7SUFYRiwwQ0FXRTs7Ozs7SUFHQSxvQ0FBeUI7Ozs7O0lBQ3pCLG9EQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvY2FyZC10eXBlcy5hY3Rpb24nO1xuaW1wb3J0IHsgQ2hlY2tvdXRQYXltZW50Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9wYXltZW50L2NoZWNrb3V0LXBheW1lbnQuY29ubmVjdG9yJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcmRUeXBlc0VmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZENhcmRUeXBlcyQ6IE9ic2VydmFibGU8XG4gICAgZnJvbUFjdGlvbi5Mb2FkQ2FyZFR5cGVzU3VjY2VzcyB8IGZyb21BY3Rpb24uTG9hZENhcmRUeXBlc0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbi5MT0FEX0NBUkRfVFlQRVMpLFxuICAgIHN3aXRjaE1hcCgoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jaGVja291dFBheW1lbnRDb25uZWN0b3IuZ2V0Q2FyZFR5cGVzKCkucGlwZShcbiAgICAgICAgbWFwKGNhcmRUeXBlcyA9PiBuZXcgZnJvbUFjdGlvbi5Mb2FkQ2FyZFR5cGVzU3VjY2VzcyhjYXJkVHlwZXMpKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgZnJvbUFjdGlvbi5Mb2FkQ2FyZFR5cGVzRmFpbChlcnJvcikpKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBjaGVja291dFBheW1lbnRDb25uZWN0b3I6IENoZWNrb3V0UGF5bWVudENvbm5lY3RvclxuICApIHt9XG59XG4iXX0=