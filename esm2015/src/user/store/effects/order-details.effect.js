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
export class OrderDetailsEffect {
    /**
     * @param {?} actions$
     * @param {?} occOrderService
     * @param {?} productImageConverter
     */
    constructor(actions$, occOrderService, productImageConverter) {
        this.actions$ = actions$;
        this.occOrderService = occOrderService;
        this.productImageConverter = productImageConverter;
        this.loadOrderDetails$ = this.actions$.pipe(ofType(fromOrderDetailsAction.LOAD_ORDER_DETAILS), map((action) => action.payload), switchMap(payload => {
            return this.occOrderService
                .getOrder(payload.userId, payload.orderCode)
                .pipe(map((order) => {
                if (order.consignments) {
                    order.consignments.forEach(element => {
                        element.entries.forEach(entry => {
                            this.productImageConverter.convertProduct(entry.orderEntry.product);
                        });
                    });
                }
                if (order.unconsignedEntries) {
                    order.unconsignedEntries.forEach(entry => {
                        this.productImageConverter.convertProduct(entry.product);
                    });
                }
                return new fromOrderDetailsAction.LoadOrderDetailsSuccess(order);
            }), catchError(error => of(new fromOrderDetailsAction.LoadOrderDetailsFail(error))));
        }));
    }
}
OrderDetailsEffect.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OrderDetailsEffect.ctorParameters = () => [
    { type: Actions },
    { type: OccOrderService },
    { type: ProductImageNormalizer }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], OrderDetailsEffect.prototype, "loadOrderDetails$", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL29yZGVyLWRldGFpbHMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUQsT0FBTyxLQUFLLHNCQUFzQixNQUFNLGlDQUFpQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVsRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUcvRSxNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7SUFtQzdCLFlBQ1UsUUFBaUIsRUFDakIsZUFBZ0MsRUFDaEMscUJBQTZDO1FBRjdDLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBd0I7UUFwQ3ZELHNCQUFpQixHQUViLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsc0JBQXNCLENBQUMsa0JBQWtCLENBQUMsRUFDakQsR0FBRyxDQUFDLENBQUMsTUFBK0MsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUN4RSxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDbEIsT0FBTyxJQUFJLENBQUMsZUFBZTtpQkFDeEIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQztpQkFDM0MsSUFBSSxDQUNILEdBQUcsQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFO2dCQUNuQixJQUFJLEtBQUssQ0FBQyxZQUFZLEVBQUU7b0JBQ3RCLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO3dCQUNuQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTs0QkFDOUIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FDdkMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQ3pCLENBQUM7d0JBQ0osQ0FBQyxDQUFDLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7aUJBQ0o7Z0JBQ0QsSUFBSSxLQUFLLENBQUMsa0JBQWtCLEVBQUU7b0JBQzVCLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQ3ZDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUMzRCxDQUFDLENBQUMsQ0FBQztpQkFDSjtnQkFDRCxPQUFPLElBQUksc0JBQXNCLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkUsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2pCLEVBQUUsQ0FBQyxJQUFJLHNCQUFzQixDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQzNELENBQ0YsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUNILENBQUM7SUFNQyxDQUFDOzs7WUF4Q0wsVUFBVTs7OztZQVZGLE9BQU87WUFNUCxlQUFlO1lBRWYsc0JBQXNCOztBQUs3QjtJQURDLE1BQU0sRUFBRTtzQ0FDVSxVQUFVOzZEQStCM0I7OztJQWhDRiwrQ0FnQ0U7Ozs7O0lBR0Esc0NBQXlCOzs7OztJQUN6Qiw2Q0FBd0M7Ozs7O0lBQ3hDLG1EQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgKiBhcyBmcm9tT3JkZXJEZXRhaWxzQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvb3JkZXItZGV0YWlscy5hY3Rpb24nO1xuaW1wb3J0IHsgT2NjT3JkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb2NjL2luZGV4JztcbmltcG9ydCB7IE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMvaW5kZXgnO1xuaW1wb3J0IHsgUHJvZHVjdEltYWdlTm9ybWFsaXplciB9IGZyb20gJy4uLy4uLy4uL3Byb2R1Y3Qvb2NjL2NvbnZlcnRlcnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3JkZXJEZXRhaWxzRWZmZWN0IHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRPcmRlckRldGFpbHMkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21PcmRlckRldGFpbHNBY3Rpb24uT3JkZXJEZXRhaWxzQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21PcmRlckRldGFpbHNBY3Rpb24uTE9BRF9PUkRFUl9ERVRBSUxTKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbU9yZGVyRGV0YWlsc0FjdGlvbi5Mb2FkT3JkZXJEZXRhaWxzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMub2NjT3JkZXJTZXJ2aWNlXG4gICAgICAgIC5nZXRPcmRlcihwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5vcmRlckNvZGUpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgob3JkZXI6IE9yZGVyKSA9PiB7XG4gICAgICAgICAgICBpZiAob3JkZXIuY29uc2lnbm1lbnRzKSB7XG4gICAgICAgICAgICAgIG9yZGVyLmNvbnNpZ25tZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdEltYWdlQ29udmVydGVyLmNvbnZlcnRQcm9kdWN0KFxuICAgICAgICAgICAgICAgICAgICBlbnRyeS5vcmRlckVudHJ5LnByb2R1Y3RcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9yZGVyLnVuY29uc2lnbmVkRW50cmllcykge1xuICAgICAgICAgICAgICBvcmRlci51bmNvbnNpZ25lZEVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0SW1hZ2VDb252ZXJ0ZXIuY29udmVydFByb2R1Y3QoZW50cnkucHJvZHVjdCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBmcm9tT3JkZXJEZXRhaWxzQWN0aW9uLkxvYWRPcmRlckRldGFpbHNTdWNjZXNzKG9yZGVyKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihuZXcgZnJvbU9yZGVyRGV0YWlsc0FjdGlvbi5Mb2FkT3JkZXJEZXRhaWxzRmFpbChlcnJvcikpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIG9jY09yZGVyU2VydmljZTogT2NjT3JkZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcHJvZHVjdEltYWdlQ29udmVydGVyOiBQcm9kdWN0SW1hZ2VOb3JtYWxpemVyXG4gICkge31cbn1cbiJdfQ==