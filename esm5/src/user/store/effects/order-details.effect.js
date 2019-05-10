/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as fromOrderDetailsAction from '../actions/order-details.action';
import { OccOrderService } from '../../occ/index';
import { ConverterService } from '../../../util/converter.service';
import { PRODUCT_NORMALIZER } from '../../../product/connectors/product/converters';
var OrderDetailsEffect = /** @class */ (function () {
    function OrderDetailsEffect(actions$, occOrderService, converter) {
        var _this = this;
        this.actions$ = actions$;
        this.occOrderService = occOrderService;
        this.converter = converter;
        this.loadOrderDetails$ = this.actions$.pipe(ofType(fromOrderDetailsAction.LOAD_ORDER_DETAILS), map(function (action) { return action.payload; }), switchMap(function (payload) {
            return _this.occOrderService
                .getOrder(payload.userId, payload.orderCode)
                .pipe(map(function (order) {
                if (order.consignments) {
                    order.consignments.forEach(function (element) {
                        element.entries.forEach(function (entry) {
                            entry.orderEntry.product = (/** @type {?} */ (_this.converter.convert(entry.orderEntry.product, PRODUCT_NORMALIZER)));
                        });
                    });
                }
                if (order.unconsignedEntries) {
                    order.unconsignedEntries.forEach(function (entry) {
                        entry.product = (/** @type {?} */ (_this.converter.convert(entry.product, PRODUCT_NORMALIZER)));
                    });
                }
                return new fromOrderDetailsAction.LoadOrderDetailsSuccess(order);
            }), catchError(function (error) {
                return of(new fromOrderDetailsAction.LoadOrderDetailsFail(error));
            }));
        }));
    }
    OrderDetailsEffect.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OrderDetailsEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: OccOrderService },
        { type: ConverterService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], OrderDetailsEffect.prototype, "loadOrderDetails$", void 0);
    return OrderDetailsEffect;
}());
export { OrderDetailsEffect };
if (false) {
    /** @type {?} */
    OrderDetailsEffect.prototype.loadOrderDetails$;
    /**
     * @type {?}
     * @private
     */
    OrderDetailsEffect.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    OrderDetailsEffect.prototype.occOrderService;
    /**
     * @type {?}
     * @private
     */
    OrderDetailsEffect.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL29yZGVyLWRldGFpbHMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxLQUFLLHNCQUFzQixNQUFNLGlDQUFpQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUdwRjtJQXdDRSw0QkFDVSxRQUFpQixFQUNqQixlQUFnQyxFQUNoQyxTQUEyQjtRQUhyQyxpQkFJSTtRQUhNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBeENyQyxzQkFBaUIsR0FFYixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDLEVBQ2pELEdBQUcsQ0FBQyxVQUFDLE1BQStDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxFQUN4RSxTQUFTLENBQUMsVUFBQSxPQUFPO1lBQ2YsT0FBTyxLQUFJLENBQUMsZUFBZTtpQkFDeEIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQztpQkFDM0MsSUFBSSxDQUNILEdBQUcsQ0FBQyxVQUFDLEtBQVk7Z0JBQ2YsSUFBSSxLQUFLLENBQUMsWUFBWSxFQUFFO29CQUN0QixLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87d0JBQ2hDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSzs0QkFDM0IsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsbUJBQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQy9DLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUN4QixrQkFBa0IsQ0FDbkIsRUFBTyxDQUFDO3dCQUNYLENBQUMsQ0FBQyxDQUFDO29CQUNMLENBQUMsQ0FBQyxDQUFDO2lCQUNKO2dCQUNELElBQUksS0FBSyxDQUFDLGtCQUFrQixFQUFFO29CQUM1QixLQUFLLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSzt3QkFDcEMsS0FBSyxDQUFDLE9BQU8sR0FBRyxtQkFBQSxLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FDcEMsS0FBSyxDQUFDLE9BQU8sRUFDYixrQkFBa0IsQ0FDbkIsRUFBTyxDQUFDO29CQUNYLENBQUMsQ0FBQyxDQUFDO2lCQUNKO2dCQUNELE9BQU8sSUFBSSxzQkFBc0IsQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuRSxDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsVUFBQSxLQUFLO2dCQUNkLE9BQUEsRUFBRSxDQUFDLElBQUksc0JBQXNCLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7WUFBMUQsQ0FBMEQsQ0FDM0QsQ0FDRixDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQU1DLENBQUM7O2dCQTVDTCxVQUFVOzs7O2dCQVRGLE9BQU87Z0JBSVAsZUFBZTtnQkFDZixnQkFBZ0I7O0lBT3ZCO1FBREMsTUFBTSxFQUFFOzBDQUNVLFVBQVU7aUVBbUMzQjtJQU9KLHlCQUFDO0NBQUEsQUE3Q0QsSUE2Q0M7U0E1Q1ksa0JBQWtCOzs7SUFDN0IsK0NBb0NFOzs7OztJQUdBLHNDQUF5Qjs7Ozs7SUFDekIsNkNBQXdDOzs7OztJQUN4Qyx1Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0ICogYXMgZnJvbU9yZGVyRGV0YWlsc0FjdGlvbiBmcm9tICcuLi9hY3Rpb25zL29yZGVyLWRldGFpbHMuYWN0aW9uJztcbmltcG9ydCB7IE9jY09yZGVyU2VydmljZSB9IGZyb20gJy4uLy4uL29jYy9pbmRleCc7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBQUk9EVUNUX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi9wcm9kdWN0L2Nvbm5lY3RvcnMvcHJvZHVjdC9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3JkZXJEZXRhaWxzRWZmZWN0IHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRPcmRlckRldGFpbHMkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21PcmRlckRldGFpbHNBY3Rpb24uT3JkZXJEZXRhaWxzQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21PcmRlckRldGFpbHNBY3Rpb24uTE9BRF9PUkRFUl9ERVRBSUxTKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbU9yZGVyRGV0YWlsc0FjdGlvbi5Mb2FkT3JkZXJEZXRhaWxzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMub2NjT3JkZXJTZXJ2aWNlXG4gICAgICAgIC5nZXRPcmRlcihwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5vcmRlckNvZGUpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgob3JkZXI6IE9yZGVyKSA9PiB7XG4gICAgICAgICAgICBpZiAob3JkZXIuY29uc2lnbm1lbnRzKSB7XG4gICAgICAgICAgICAgIG9yZGVyLmNvbnNpZ25tZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICAgICAgICAgIGVudHJ5Lm9yZGVyRW50cnkucHJvZHVjdCA9IHRoaXMuY29udmVydGVyLmNvbnZlcnQoXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5Lm9yZGVyRW50cnkucHJvZHVjdCxcbiAgICAgICAgICAgICAgICAgICAgUFJPRFVDVF9OT1JNQUxJWkVSXG4gICAgICAgICAgICAgICAgICApIGFzIGFueTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3JkZXIudW5jb25zaWduZWRFbnRyaWVzKSB7XG4gICAgICAgICAgICAgIG9yZGVyLnVuY29uc2lnbmVkRW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICAgICAgICBlbnRyeS5wcm9kdWN0ID0gdGhpcy5jb252ZXJ0ZXIuY29udmVydChcbiAgICAgICAgICAgICAgICAgIGVudHJ5LnByb2R1Y3QsXG4gICAgICAgICAgICAgICAgICBQUk9EVUNUX05PUk1BTElaRVJcbiAgICAgICAgICAgICAgICApIGFzIGFueTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3IGZyb21PcmRlckRldGFpbHNBY3Rpb24uTG9hZE9yZGVyRGV0YWlsc1N1Y2Nlc3Mob3JkZXIpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKG5ldyBmcm9tT3JkZXJEZXRhaWxzQWN0aW9uLkxvYWRPcmRlckRldGFpbHNGYWlsKGVycm9yKSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgb2NjT3JkZXJTZXJ2aWNlOiBPY2NPcmRlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2VcbiAgKSB7fVxufVxuIl19