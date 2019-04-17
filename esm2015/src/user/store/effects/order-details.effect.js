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
import { ProductImageConverterService } from '../../../product/store/converters/index';
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
    { type: ProductImageConverterService }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL29yZGVyLWRldGFpbHMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUQsT0FBTyxLQUFLLHNCQUFzQixNQUFNLGlDQUFpQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVsRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUd2RixNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7SUFtQzdCLFlBQ1UsUUFBaUIsRUFDakIsZUFBZ0MsRUFDaEMscUJBQW1EO1FBRm5ELGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBOEI7UUFwQzdELHNCQUFpQixHQUViLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsc0JBQXNCLENBQUMsa0JBQWtCLENBQUMsRUFDakQsR0FBRyxDQUFDLENBQUMsTUFBK0MsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUN4RSxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDbEIsT0FBTyxJQUFJLENBQUMsZUFBZTtpQkFDeEIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQztpQkFDM0MsSUFBSSxDQUNILEdBQUcsQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFO2dCQUNuQixJQUFJLEtBQUssQ0FBQyxZQUFZLEVBQUU7b0JBQ3RCLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO3dCQUNuQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTs0QkFDOUIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FDdkMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQ3pCLENBQUM7d0JBQ0osQ0FBQyxDQUFDLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7aUJBQ0o7Z0JBQ0QsSUFBSSxLQUFLLENBQUMsa0JBQWtCLEVBQUU7b0JBQzVCLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQ3ZDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUMzRCxDQUFDLENBQUMsQ0FBQztpQkFDSjtnQkFDRCxPQUFPLElBQUksc0JBQXNCLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkUsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2pCLEVBQUUsQ0FBQyxJQUFJLHNCQUFzQixDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQzNELENBQ0YsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUNILENBQUM7SUFNQyxDQUFDOzs7WUF4Q0wsVUFBVTs7OztZQVZGLE9BQU87WUFNUCxlQUFlO1lBRWYsNEJBQTRCOztBQUtuQztJQURDLE1BQU0sRUFBRTtzQ0FDVSxVQUFVOzZEQStCM0I7OztJQWhDRiwrQ0FnQ0U7Ozs7O0lBR0Esc0NBQXlCOzs7OztJQUN6Qiw2Q0FBd0M7Ozs7O0lBQ3hDLG1EQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgKiBhcyBmcm9tT3JkZXJEZXRhaWxzQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvb3JkZXItZGV0YWlscy5hY3Rpb24nO1xuaW1wb3J0IHsgT2NjT3JkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb2NjL2luZGV4JztcbmltcG9ydCB7IE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMvaW5kZXgnO1xuaW1wb3J0IHsgUHJvZHVjdEltYWdlQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3Byb2R1Y3Qvc3RvcmUvY29udmVydGVycy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPcmRlckRldGFpbHNFZmZlY3Qge1xuICBARWZmZWN0KClcbiAgbG9hZE9yZGVyRGV0YWlscyQ6IE9ic2VydmFibGU8XG4gICAgZnJvbU9yZGVyRGV0YWlsc0FjdGlvbi5PcmRlckRldGFpbHNBY3Rpb25cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbU9yZGVyRGV0YWlsc0FjdGlvbi5MT0FEX09SREVSX0RFVEFJTFMpLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tT3JkZXJEZXRhaWxzQWN0aW9uLkxvYWRPcmRlckRldGFpbHMpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBzd2l0Y2hNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vY2NPcmRlclNlcnZpY2VcbiAgICAgICAgLmdldE9yZGVyKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLm9yZGVyQ29kZSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChvcmRlcjogT3JkZXIpID0+IHtcbiAgICAgICAgICAgIGlmIChvcmRlci5jb25zaWdubWVudHMpIHtcbiAgICAgICAgICAgICAgb3JkZXIuY29uc2lnbm1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5lbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0SW1hZ2VDb252ZXJ0ZXIuY29udmVydFByb2R1Y3QoXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5Lm9yZGVyRW50cnkucHJvZHVjdFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3JkZXIudW5jb25zaWduZWRFbnRyaWVzKSB7XG4gICAgICAgICAgICAgIG9yZGVyLnVuY29uc2lnbmVkRW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RJbWFnZUNvbnZlcnRlci5jb252ZXJ0UHJvZHVjdChlbnRyeS5wcm9kdWN0KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3IGZyb21PcmRlckRldGFpbHNBY3Rpb24uTG9hZE9yZGVyRGV0YWlsc1N1Y2Nlc3Mob3JkZXIpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKG5ldyBmcm9tT3JkZXJEZXRhaWxzQWN0aW9uLkxvYWRPcmRlckRldGFpbHNGYWlsKGVycm9yKSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgb2NjT3JkZXJTZXJ2aWNlOiBPY2NPcmRlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBwcm9kdWN0SW1hZ2VDb252ZXJ0ZXI6IFByb2R1Y3RJbWFnZUNvbnZlcnRlclNlcnZpY2VcbiAgKSB7fVxufVxuIl19