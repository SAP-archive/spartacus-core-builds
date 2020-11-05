import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MultiCartService } from '../../cart/facade/multi-cart.service';
import { RoutingService } from '../../routing/index';
/**
 * Interceptor that handles "Cart not found" errors while a user is in a checkout step.
 *
 * When a user doing a checkout has a "Cart not found" error, he is redirected to checkout and the cart is reloaded.
 * If a "Cart not found" error happens and the user is not on checkout, this interceptor does not perform any actions.
 */
import * as ɵngcc0 from '@angular/core';
export declare class CheckoutCartInterceptor implements HttpInterceptor {
    protected routingService: RoutingService;
    protected multiCartService: MultiCartService;
    constructor(routingService: RoutingService, multiCartService: MultiCartService);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
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
    protected isUserInCheckoutRoute(semanticRoute: string): boolean;
    /**
     * Checks of the error is for a cart not found, i.e. the cart doesn't exist anymore
     *
     * @param response
     */
    protected isCartNotFoundError(response: HttpErrorResponse): boolean;
    protected getCartIdFromError(response: HttpErrorResponse): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutCartInterceptor, never>;
}

//# sourceMappingURL=checkout-cart.interceptor.d.ts.map