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
import { ProductImageNormalizer } from '../../../product/occ/converters/index';
var OrderDetailsEffect = /** @class */ (function () {
    function OrderDetailsEffect(actions$, occOrderService, productImageConverter) {
        var _this = this;
        this.actions$ = actions$;
        this.occOrderService = occOrderService;
        this.productImageConverter = productImageConverter;
        this.loadOrderDetails$ = this.actions$.pipe(ofType(fromOrderDetailsAction.LOAD_ORDER_DETAILS), map(function (action) { return action.payload; }), switchMap(function (payload) {
            return _this.occOrderService
                .getOrder(payload.userId, payload.orderCode)
                .pipe(map(function (order) {
                if (order.consignments) {
                    order.consignments.forEach(function (element) {
                        element.entries.forEach(function (entry) {
                            _this.productImageConverter.convertProduct(entry.orderEntry.product);
                        });
                    });
                }
                if (order.unconsignedEntries) {
                    order.unconsignedEntries.forEach(function (entry) {
                        _this.productImageConverter.convertProduct(entry.product);
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
        { type: ProductImageNormalizer }
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
    OrderDetailsEffect.prototype.productImageConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL29yZGVyLWRldGFpbHMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUQsT0FBTyxLQUFLLHNCQUFzQixNQUFNLGlDQUFpQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVsRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUUvRTtJQW9DRSw0QkFDVSxRQUFpQixFQUNqQixlQUFnQyxFQUNoQyxxQkFBNkM7UUFIdkQsaUJBSUk7UUFITSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQywwQkFBcUIsR0FBckIscUJBQXFCLENBQXdCO1FBcEN2RCxzQkFBaUIsR0FFYixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDLEVBQ2pELEdBQUcsQ0FBQyxVQUFDLE1BQStDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxFQUN4RSxTQUFTLENBQUMsVUFBQSxPQUFPO1lBQ2YsT0FBTyxLQUFJLENBQUMsZUFBZTtpQkFDeEIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQztpQkFDM0MsSUFBSSxDQUNILEdBQUcsQ0FBQyxVQUFDLEtBQVk7Z0JBQ2YsSUFBSSxLQUFLLENBQUMsWUFBWSxFQUFFO29CQUN0QixLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87d0JBQ2hDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSzs0QkFDM0IsS0FBSSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FDdkMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQ3pCLENBQUM7d0JBQ0osQ0FBQyxDQUFDLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7aUJBQ0o7Z0JBQ0QsSUFBSSxLQUFLLENBQUMsa0JBQWtCLEVBQUU7b0JBQzVCLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLO3dCQUNwQyxLQUFJLENBQUMscUJBQXFCLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDM0QsQ0FBQyxDQUFDLENBQUM7aUJBQ0o7Z0JBQ0QsT0FBTyxJQUFJLHNCQUFzQixDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25FLENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxFQUFFLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUExRCxDQUEwRCxDQUMzRCxDQUNGLENBQUM7UUFDTixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBTUMsQ0FBQzs7Z0JBeENMLFVBQVU7Ozs7Z0JBVkYsT0FBTztnQkFNUCxlQUFlO2dCQUVmLHNCQUFzQjs7SUFLN0I7UUFEQyxNQUFNLEVBQUU7MENBQ1UsVUFBVTtpRUErQjNCO0lBT0oseUJBQUM7Q0FBQSxBQXpDRCxJQXlDQztTQXhDWSxrQkFBa0I7OztJQUM3QiwrQ0FnQ0U7Ozs7O0lBR0Esc0NBQXlCOzs7OztJQUN6Qiw2Q0FBd0M7Ozs7O0lBQ3hDLG1EQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgKiBhcyBmcm9tT3JkZXJEZXRhaWxzQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvb3JkZXItZGV0YWlscy5hY3Rpb24nO1xuaW1wb3J0IHsgT2NjT3JkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb2NjL2luZGV4JztcbmltcG9ydCB7IE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMvaW5kZXgnO1xuaW1wb3J0IHsgUHJvZHVjdEltYWdlTm9ybWFsaXplciB9IGZyb20gJy4uLy4uLy4uL3Byb2R1Y3Qvb2NjL2NvbnZlcnRlcnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3JkZXJEZXRhaWxzRWZmZWN0IHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRPcmRlckRldGFpbHMkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21PcmRlckRldGFpbHNBY3Rpb24uT3JkZXJEZXRhaWxzQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21PcmRlckRldGFpbHNBY3Rpb24uTE9BRF9PUkRFUl9ERVRBSUxTKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbU9yZGVyRGV0YWlsc0FjdGlvbi5Mb2FkT3JkZXJEZXRhaWxzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMub2NjT3JkZXJTZXJ2aWNlXG4gICAgICAgIC5nZXRPcmRlcihwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5vcmRlckNvZGUpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgob3JkZXI6IE9yZGVyKSA9PiB7XG4gICAgICAgICAgICBpZiAob3JkZXIuY29uc2lnbm1lbnRzKSB7XG4gICAgICAgICAgICAgIG9yZGVyLmNvbnNpZ25tZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdEltYWdlQ29udmVydGVyLmNvbnZlcnRQcm9kdWN0KFxuICAgICAgICAgICAgICAgICAgICBlbnRyeS5vcmRlckVudHJ5LnByb2R1Y3RcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9yZGVyLnVuY29uc2lnbmVkRW50cmllcykge1xuICAgICAgICAgICAgICBvcmRlci51bmNvbnNpZ25lZEVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0SW1hZ2VDb252ZXJ0ZXIuY29udmVydFByb2R1Y3QoZW50cnkucHJvZHVjdCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBmcm9tT3JkZXJEZXRhaWxzQWN0aW9uLkxvYWRPcmRlckRldGFpbHNTdWNjZXNzKG9yZGVyKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihuZXcgZnJvbU9yZGVyRGV0YWlsc0FjdGlvbi5Mb2FkT3JkZXJEZXRhaWxzRmFpbChlcnJvcikpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIG9jY09yZGVyU2VydmljZTogT2NjT3JkZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcHJvZHVjdEltYWdlQ29udmVydGVyOiBQcm9kdWN0SW1hZ2VOb3JtYWxpemVyXG4gICkge31cbn1cbiJdfQ==