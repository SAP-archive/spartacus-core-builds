/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { CheckoutPaymentConnector } from '../../connectors/payment/checkout-payment.connector';
import { CheckoutActions } from '../actions/index';
var CardTypesEffects = /** @class */ (function () {
    function CardTypesEffects(actions$, checkoutPaymentConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.checkoutPaymentConnector = checkoutPaymentConnector;
        this.loadCardTypes$ = this.actions$.pipe(ofType(CheckoutActions.LOAD_CARD_TYPES), switchMap((/**
         * @return {?}
         */
        function () {
            return _this.checkoutPaymentConnector.getCardTypes().pipe(map((/**
             * @param {?} cardTypes
             * @return {?}
             */
            function (cardTypes) { return new CheckoutActions.LoadCardTypesSuccess(cardTypes); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new CheckoutActions.LoadCardTypesFail(makeErrorSerializable(error)));
            })));
        })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC10eXBlcy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2hlY2tvdXQvc3RvcmUvZWZmZWN0cy9jYXJkLXR5cGVzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVuRDtJQW1CRSwwQkFDVSxRQUFpQixFQUNqQix3QkFBa0Q7UUFGNUQsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFsQjVELG1CQUFjLEdBRVYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLEVBQ3ZDLFNBQVM7OztRQUFDO1lBQ1IsT0FBTyxLQUFJLENBQUMsd0JBQXdCLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUN0RCxHQUFHOzs7O1lBQUMsVUFBQSxTQUFTLElBQUksT0FBQSxJQUFJLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsRUFBbkQsQ0FBbUQsRUFBQyxFQUNyRSxVQUFVOzs7O1lBQUMsVUFBQSxLQUFLO2dCQUNkLE9BQUEsRUFBRSxDQUNBLElBQUksZUFBZSxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQ3BFO1lBRkQsQ0FFQyxFQUNGLENBQ0YsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNILENBQUM7SUFLQyxDQUFDOztnQkF0QkwsVUFBVTs7OztnQkFQRixPQUFPO2dCQUlQLHdCQUF3Qjs7SUFNL0I7UUFEQyxNQUFNLEVBQUU7MENBQ08sVUFBVTs0REFjeEI7SUFNSix1QkFBQztDQUFBLEFBdkJELElBdUJDO1NBdEJZLGdCQUFnQjs7O0lBQzNCLDBDQWVFOzs7OztJQUdBLG9DQUF5Qjs7Ozs7SUFDekIsb0RBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBDaGVja291dFBheW1lbnRDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3BheW1lbnQvY2hlY2tvdXQtcGF5bWVudC5jb25uZWN0b3InO1xuaW1wb3J0IHsgQ2hlY2tvdXRBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXJkVHlwZXNFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRDYXJkVHlwZXMkOiBPYnNlcnZhYmxlPFxuICAgIENoZWNrb3V0QWN0aW9ucy5Mb2FkQ2FyZFR5cGVzU3VjY2VzcyB8IENoZWNrb3V0QWN0aW9ucy5Mb2FkQ2FyZFR5cGVzRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDaGVja291dEFjdGlvbnMuTE9BRF9DQVJEX1RZUEVTKSxcbiAgICBzd2l0Y2hNYXAoKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRQYXltZW50Q29ubmVjdG9yLmdldENhcmRUeXBlcygpLnBpcGUoXG4gICAgICAgIG1hcChjYXJkVHlwZXMgPT4gbmV3IENoZWNrb3V0QWN0aW9ucy5Mb2FkQ2FyZFR5cGVzU3VjY2VzcyhjYXJkVHlwZXMpKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKFxuICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5Mb2FkQ2FyZFR5cGVzRmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBjaGVja291dFBheW1lbnRDb25uZWN0b3I6IENoZWNrb3V0UGF5bWVudENvbm5lY3RvclxuICApIHt9XG59XG4iXX0=