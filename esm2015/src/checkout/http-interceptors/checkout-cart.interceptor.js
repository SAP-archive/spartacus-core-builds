import { HttpErrorResponse, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, switchMap, take } from 'rxjs/operators';
import { MultiCartService } from '../../cart/facade/multi-cart.service';
import { RoutingService } from '../../routing/index';
import * as i0 from "@angular/core";
import * as i1 from "../../routing/facade/routing.service";
import * as i2 from "../../cart/facade/multi-cart.service";
/**
 * Interceptor that handles "Cart not found" errors while a user is in a checkout step.
 *
 * When a user doing a checkout has a "Cart not found" error, he is redirected to checkout and the cart is reloaded.
 * If a "Cart not found" error happens and the user is not on checkout, this interceptor does not perform any actions.
 */
export class CheckoutCartInterceptor {
    constructor(routingService, multiCartService) {
        this.routingService = routingService;
        this.multiCartService = multiCartService;
    }
    intercept(request, next) {
        return this.routingService.getRouterState().pipe(take(1), switchMap((state) => {
            return next.handle(request).pipe(catchError((response) => {
                var _a;
                if (response instanceof HttpErrorResponse &&
                    this.isUserInCheckoutRoute((_a = state.state) === null || _a === void 0 ? void 0 : _a.semanticRoute)) {
                    if (this.isCartNotFoundError(response)) {
                        this.routingService.go({ cxRoute: 'cart' });
                        const cartCode = this.getCartIdFromError(response);
                        if (cartCode) {
                            this.multiCartService.reloadCart(cartCode);
                        }
                    }
                }
                return throwError(response);
            }));
        }));
    }
    /**
     * Returns true if the parameter semantic route is part of "checkout"
     * Checkout semantic routes:
     * checkout
     * checkoutPaymentType
     * CheckoutShippingAddress
     * checkoutDeliveryMode
     * checkoutPaymentDetails
     * checkoutReviewOrder
     * checkoutLogin
     * @param semanticRoute
     */
    isUserInCheckoutRoute(semanticRoute) {
        return semanticRoute.toLowerCase().startsWith('checkout');
    }
    /**
     * Checks of the error is for a cart not found, i.e. the cart doesn't exist anymore
     *
     * @param response
     */
    isCartNotFoundError(response) {
        var _a, _b, _c, _d, _e, _f;
        return (response.status === 400 &&
            ((_c = (_b = (_a = response.error) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.type) === 'CartError' &&
            ((_f = (_e = (_d = response.error) === null || _d === void 0 ? void 0 : _d.errors) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.reason) === 'notFound');
    }
    getCartIdFromError(response) {
        var _a, _b, _c;
        return (_c = (_b = (_a = response.error) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.subject;
    }
}
CheckoutCartInterceptor.ɵprov = i0.ɵɵdefineInjectable({ factory: function CheckoutCartInterceptor_Factory() { return new CheckoutCartInterceptor(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i2.MultiCartService)); }, token: CheckoutCartInterceptor, providedIn: "root" });
CheckoutCartInterceptor.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
CheckoutCartInterceptor.ctorParameters = () => [
    { type: RoutingService },
    { type: MultiCartService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtY2FydC5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2NoZWNrb3V0L2h0dHAtaW50ZXJjZXB0b3JzL2NoZWNrb3V0LWNhcnQuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLGlCQUFpQixHQUtsQixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN4RSxPQUFPLEVBQWUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFFbEU7Ozs7O0dBS0c7QUFFSCxNQUFNLE9BQU8sdUJBQXVCO0lBQ2xDLFlBQ1ksY0FBOEIsRUFDOUIsZ0JBQWtDO1FBRGxDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQzNDLENBQUM7SUFFSixTQUFTLENBQ1AsT0FBeUIsRUFDekIsSUFBaUI7UUFFakIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FDOUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLFNBQVMsQ0FBQyxDQUFDLEtBQWtCLEVBQUUsRUFBRTtZQUMvQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM5QixVQUFVLENBQUMsQ0FBQyxRQUFhLEVBQUUsRUFBRTs7Z0JBQzNCLElBQ0UsUUFBUSxZQUFZLGlCQUFpQjtvQkFDckMsSUFBSSxDQUFDLHFCQUFxQixPQUFDLEtBQUssQ0FBQyxLQUFLLDBDQUFFLGFBQWEsQ0FBQyxFQUN0RDtvQkFDQSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsRUFBRTt3QkFDdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQzt3QkFFNUMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUNuRCxJQUFJLFFBQVEsRUFBRTs0QkFDWixJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3lCQUM1QztxQkFDRjtpQkFDRjtnQkFDRCxPQUFPLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FDSCxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7T0FXRztJQUNPLHFCQUFxQixDQUFDLGFBQXFCO1FBQ25ELE9BQU8sYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLG1CQUFtQixDQUFDLFFBQTJCOztRQUN2RCxPQUFPLENBQ0wsUUFBUSxDQUFDLE1BQU0sS0FBSyxHQUFHO1lBQ3ZCLG1CQUFBLFFBQVEsQ0FBQyxLQUFLLDBDQUFFLE1BQU0sMENBQUcsQ0FBQywyQ0FBRyxJQUFJLE1BQUssV0FBVztZQUNqRCxtQkFBQSxRQUFRLENBQUMsS0FBSywwQ0FBRSxNQUFNLDBDQUFHLENBQUMsMkNBQUcsTUFBTSxNQUFLLFVBQVUsQ0FDbkQsQ0FBQztJQUNKLENBQUM7SUFFUyxrQkFBa0IsQ0FBQyxRQUEyQjs7UUFDdEQseUJBQU8sUUFBUSxDQUFDLEtBQUssMENBQUUsTUFBTSwwQ0FBRyxDQUFDLDJDQUFHLE9BQU8sQ0FBQztJQUM5QyxDQUFDOzs7O1lBbkVGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OztZQVJaLGNBQWM7WUFEM0IsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSHR0cEVycm9yUmVzcG9uc2UsXG4gIEh0dHBFdmVudCxcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBJbnRlcmNlcHRvcixcbiAgSHR0cFJlcXVlc3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIHN3aXRjaE1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE11bHRpQ2FydFNlcnZpY2UgfSBmcm9tICcuLi8uLi9jYXJ0L2ZhY2FkZS9tdWx0aS1jYXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyU3RhdGUsIFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcm91dGluZy9pbmRleCc7XG5cbi8qKlxuICogSW50ZXJjZXB0b3IgdGhhdCBoYW5kbGVzIFwiQ2FydCBub3QgZm91bmRcIiBlcnJvcnMgd2hpbGUgYSB1c2VyIGlzIGluIGEgY2hlY2tvdXQgc3RlcC5cbiAqXG4gKiBXaGVuIGEgdXNlciBkb2luZyBhIGNoZWNrb3V0IGhhcyBhIFwiQ2FydCBub3QgZm91bmRcIiBlcnJvciwgaGUgaXMgcmVkaXJlY3RlZCB0byBjaGVja291dCBhbmQgdGhlIGNhcnQgaXMgcmVsb2FkZWQuXG4gKiBJZiBhIFwiQ2FydCBub3QgZm91bmRcIiBlcnJvciBoYXBwZW5zIGFuZCB0aGUgdXNlciBpcyBub3Qgb24gY2hlY2tvdXQsIHRoaXMgaW50ZXJjZXB0b3IgZG9lcyBub3QgcGVyZm9ybSBhbnkgYWN0aW9ucy5cbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBDaGVja291dENhcnRJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIG11bHRpQ2FydFNlcnZpY2U6IE11bHRpQ2FydFNlcnZpY2VcbiAgKSB7fVxuXG4gIGludGVyY2VwdChcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICByZXR1cm4gdGhpcy5yb3V0aW5nU2VydmljZS5nZXRSb3V0ZXJTdGF0ZSgpLnBpcGUoXG4gICAgICB0YWtlKDEpLFxuICAgICAgc3dpdGNoTWFwKChzdGF0ZTogUm91dGVyU3RhdGUpID0+IHtcbiAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpLnBpcGUoXG4gICAgICAgICAgY2F0Y2hFcnJvcigocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICByZXNwb25zZSBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlICYmXG4gICAgICAgICAgICAgIHRoaXMuaXNVc2VySW5DaGVja291dFJvdXRlKHN0YXRlLnN0YXRlPy5zZW1hbnRpY1JvdXRlKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmlzQ2FydE5vdEZvdW5kRXJyb3IocmVzcG9uc2UpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IGN4Um91dGU6ICdjYXJ0JyB9KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNhcnRDb2RlID0gdGhpcy5nZXRDYXJ0SWRGcm9tRXJyb3IocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIGlmIChjYXJ0Q29kZSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLnJlbG9hZENhcnQoY2FydENvZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IocmVzcG9uc2UpO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXJhbWV0ZXIgc2VtYW50aWMgcm91dGUgaXMgcGFydCBvZiBcImNoZWNrb3V0XCJcbiAgICogQ2hlY2tvdXQgc2VtYW50aWMgcm91dGVzOlxuICAgKiBjaGVja291dFxuICAgKiBjaGVja291dFBheW1lbnRUeXBlXG4gICAqIENoZWNrb3V0U2hpcHBpbmdBZGRyZXNzXG4gICAqIGNoZWNrb3V0RGVsaXZlcnlNb2RlXG4gICAqIGNoZWNrb3V0UGF5bWVudERldGFpbHNcbiAgICogY2hlY2tvdXRSZXZpZXdPcmRlclxuICAgKiBjaGVja291dExvZ2luXG4gICAqIEBwYXJhbSBzZW1hbnRpY1JvdXRlXG4gICAqL1xuICBwcm90ZWN0ZWQgaXNVc2VySW5DaGVja291dFJvdXRlKHNlbWFudGljUm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBzZW1hbnRpY1JvdXRlLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aCgnY2hlY2tvdXQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3Mgb2YgdGhlIGVycm9yIGlzIGZvciBhIGNhcnQgbm90IGZvdW5kLCBpLmUuIHRoZSBjYXJ0IGRvZXNuJ3QgZXhpc3QgYW55bW9yZVxuICAgKlxuICAgKiBAcGFyYW0gcmVzcG9uc2VcbiAgICovXG4gIHByb3RlY3RlZCBpc0NhcnROb3RGb3VuZEVycm9yKHJlc3BvbnNlOiBIdHRwRXJyb3JSZXNwb25zZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICByZXNwb25zZS5zdGF0dXMgPT09IDQwMCAmJlxuICAgICAgcmVzcG9uc2UuZXJyb3I/LmVycm9ycz8uWzBdPy50eXBlID09PSAnQ2FydEVycm9yJyAmJlxuICAgICAgcmVzcG9uc2UuZXJyb3I/LmVycm9ycz8uWzBdPy5yZWFzb24gPT09ICdub3RGb3VuZCdcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldENhcnRJZEZyb21FcnJvcihyZXNwb25zZTogSHR0cEVycm9yUmVzcG9uc2UpOiBzdHJpbmcge1xuICAgIHJldHVybiByZXNwb25zZS5lcnJvcj8uZXJyb3JzPy5bMF0/LnN1YmplY3Q7XG4gIH1cbn1cbiJdfQ==