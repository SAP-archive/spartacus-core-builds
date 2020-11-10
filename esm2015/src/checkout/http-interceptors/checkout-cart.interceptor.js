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
        return semanticRoute === null || semanticRoute === void 0 ? void 0 : semanticRoute.toLowerCase().startsWith('checkout');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtY2FydC5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2NoZWNrb3V0L2h0dHAtaW50ZXJjZXB0b3JzL2NoZWNrb3V0LWNhcnQuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLGlCQUFpQixHQUtsQixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN4RSxPQUFPLEVBQWUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFFbEU7Ozs7O0dBS0c7QUFFSCxNQUFNLE9BQU8sdUJBQXVCO0lBQ2xDLFlBQ1ksY0FBOEIsRUFDOUIsZ0JBQWtDO1FBRGxDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQzNDLENBQUM7SUFFSixTQUFTLENBQ1AsT0FBeUIsRUFDekIsSUFBaUI7UUFFakIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FDOUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLFNBQVMsQ0FBQyxDQUFDLEtBQWtCLEVBQUUsRUFBRTtZQUMvQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM5QixVQUFVLENBQUMsQ0FBQyxRQUFhLEVBQUUsRUFBRTs7Z0JBQzNCLElBQ0UsUUFBUSxZQUFZLGlCQUFpQjtvQkFDckMsSUFBSSxDQUFDLHFCQUFxQixPQUFDLEtBQUssQ0FBQyxLQUFLLDBDQUFFLGFBQWEsQ0FBQyxFQUN0RDtvQkFDQSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsRUFBRTt3QkFDdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQzt3QkFFNUMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUNuRCxJQUFJLFFBQVEsRUFBRTs0QkFDWixJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3lCQUM1QztxQkFDRjtpQkFDRjtnQkFDRCxPQUFPLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FDSCxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7T0FXRztJQUNPLHFCQUFxQixDQUFDLGFBQXFCO1FBQ25ELE9BQU8sYUFBYSxhQUFiLGFBQWEsdUJBQWIsYUFBYSxDQUFFLFdBQVcsR0FBRyxVQUFVLENBQUMsVUFBVSxFQUFFO0lBQzdELENBQUM7SUFFRDs7OztPQUlHO0lBQ08sbUJBQW1CLENBQUMsUUFBMkI7O1FBQ3ZELE9BQU8sQ0FDTCxRQUFRLENBQUMsTUFBTSxLQUFLLEdBQUc7WUFDdkIsbUJBQUEsUUFBUSxDQUFDLEtBQUssMENBQUUsTUFBTSwwQ0FBRyxDQUFDLDJDQUFHLElBQUksTUFBSyxXQUFXO1lBQ2pELG1CQUFBLFFBQVEsQ0FBQyxLQUFLLDBDQUFFLE1BQU0sMENBQUcsQ0FBQywyQ0FBRyxNQUFNLE1BQUssVUFBVSxDQUNuRCxDQUFDO0lBQ0osQ0FBQztJQUVTLGtCQUFrQixDQUFDLFFBQTJCOztRQUN0RCx5QkFBTyxRQUFRLENBQUMsS0FBSywwQ0FBRSxNQUFNLDBDQUFHLENBQUMsMkNBQUcsT0FBTyxDQUFDO0lBQzlDLENBQUM7Ozs7WUFuRUYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7O1lBUlosY0FBYztZQUQzQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBIdHRwRXJyb3JSZXNwb25zZSxcbiAgSHR0cEV2ZW50LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwUmVxdWVzdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgc3dpdGNoTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTXVsdGlDYXJ0U2VydmljZSB9IGZyb20gJy4uLy4uL2NhcnQvZmFjYWRlL211bHRpLWNhcnQuc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXJTdGF0ZSwgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2luZGV4JztcblxuLyoqXG4gKiBJbnRlcmNlcHRvciB0aGF0IGhhbmRsZXMgXCJDYXJ0IG5vdCBmb3VuZFwiIGVycm9ycyB3aGlsZSBhIHVzZXIgaXMgaW4gYSBjaGVja291dCBzdGVwLlxuICpcbiAqIFdoZW4gYSB1c2VyIGRvaW5nIGEgY2hlY2tvdXQgaGFzIGEgXCJDYXJ0IG5vdCBmb3VuZFwiIGVycm9yLCBoZSBpcyByZWRpcmVjdGVkIHRvIGNoZWNrb3V0IGFuZCB0aGUgY2FydCBpcyByZWxvYWRlZC5cbiAqIElmIGEgXCJDYXJ0IG5vdCBmb3VuZFwiIGVycm9yIGhhcHBlbnMgYW5kIHRoZSB1c2VyIGlzIG5vdCBvbiBjaGVja291dCwgdGhpcyBpbnRlcmNlcHRvciBkb2VzIG5vdCBwZXJmb3JtIGFueSBhY3Rpb25zLlxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0Q2FydEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgbXVsdGlDYXJ0U2VydmljZTogTXVsdGlDYXJ0U2VydmljZVxuICApIHt9XG5cbiAgaW50ZXJjZXB0KFxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgbmV4dDogSHR0cEhhbmRsZXJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKCkucGlwZShcbiAgICAgIHRha2UoMSksXG4gICAgICBzd2l0Y2hNYXAoKHN0YXRlOiBSb3V0ZXJTdGF0ZSkgPT4ge1xuICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCkucGlwZShcbiAgICAgICAgICBjYXRjaEVycm9yKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHJlc3BvbnNlIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UgJiZcbiAgICAgICAgICAgICAgdGhpcy5pc1VzZXJJbkNoZWNrb3V0Um91dGUoc3RhdGUuc3RhdGU/LnNlbWFudGljUm91dGUpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuaXNDYXJ0Tm90Rm91bmRFcnJvcihyZXNwb25zZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgY3hSb3V0ZTogJ2NhcnQnIH0pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY2FydENvZGUgPSB0aGlzLmdldENhcnRJZEZyb21FcnJvcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgaWYgKGNhcnRDb2RlKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UucmVsb2FkQ2FydChjYXJ0Q29kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihyZXNwb25zZSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhcmFtZXRlciBzZW1hbnRpYyByb3V0ZSBpcyBwYXJ0IG9mIFwiY2hlY2tvdXRcIlxuICAgKiBDaGVja291dCBzZW1hbnRpYyByb3V0ZXM6XG4gICAqIGNoZWNrb3V0XG4gICAqIGNoZWNrb3V0UGF5bWVudFR5cGVcbiAgICogQ2hlY2tvdXRTaGlwcGluZ0FkZHJlc3NcbiAgICogY2hlY2tvdXREZWxpdmVyeU1vZGVcbiAgICogY2hlY2tvdXRQYXltZW50RGV0YWlsc1xuICAgKiBjaGVja291dFJldmlld09yZGVyXG4gICAqIGNoZWNrb3V0TG9naW5cbiAgICogQHBhcmFtIHNlbWFudGljUm91dGVcbiAgICovXG4gIHByb3RlY3RlZCBpc1VzZXJJbkNoZWNrb3V0Um91dGUoc2VtYW50aWNSb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHNlbWFudGljUm91dGU/LnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aCgnY2hlY2tvdXQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3Mgb2YgdGhlIGVycm9yIGlzIGZvciBhIGNhcnQgbm90IGZvdW5kLCBpLmUuIHRoZSBjYXJ0IGRvZXNuJ3QgZXhpc3QgYW55bW9yZVxuICAgKlxuICAgKiBAcGFyYW0gcmVzcG9uc2VcbiAgICovXG4gIHByb3RlY3RlZCBpc0NhcnROb3RGb3VuZEVycm9yKHJlc3BvbnNlOiBIdHRwRXJyb3JSZXNwb25zZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICByZXNwb25zZS5zdGF0dXMgPT09IDQwMCAmJlxuICAgICAgcmVzcG9uc2UuZXJyb3I/LmVycm9ycz8uWzBdPy50eXBlID09PSAnQ2FydEVycm9yJyAmJlxuICAgICAgcmVzcG9uc2UuZXJyb3I/LmVycm9ycz8uWzBdPy5yZWFzb24gPT09ICdub3RGb3VuZCdcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldENhcnRJZEZyb21FcnJvcihyZXNwb25zZTogSHR0cEVycm9yUmVzcG9uc2UpOiBzdHJpbmcge1xuICAgIHJldHVybiByZXNwb25zZS5lcnJvcj8uZXJyb3JzPy5bMF0/LnN1YmplY3Q7XG4gIH1cbn1cbiJdfQ==