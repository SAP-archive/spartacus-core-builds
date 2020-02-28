import { Store } from '@ngrx/store';
import { AuthService } from '../../auth/facade/auth.service';
import { Cart } from '../../model/cart.model';
import { StateWithCart } from '../store/cart-state';
/**
 * @deprecated since version 1.4
 * Replace particular methods usage with replacements from other services
 */
import * as ɵngcc0 from '@angular/core';
export declare class CartDataService {
    protected store: Store<StateWithCart>;
    protected authService: AuthService;
    private _userId;
    private _cart;
    constructor(store: Store<StateWithCart>, authService: AuthService);
    get hasCart(): boolean;
    /**
     * @deprecated since version 1.4
     * Use `getOccUserId` from `AuthService` instead
     */
    get userId(): string;
    /**
     * @deprecated since version 1.4
     * Use `getActive` from `ActiveCartService` instead
     */
    get cart(): Cart;
    /**
     * @deprecated since version 1.4
     * Use `getActiveCartId` from `ActiveCartService` instead
     */
    get cartId(): string;
    /**
     * @deprecated since version 1.4
     * Use `isGuestCart` from `ActiveCartService` instead
     */
    get isGuestCart(): boolean;
    private isEmail;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartDataService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CartDataService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kYXRhLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiY2FydC1kYXRhLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IFN0YXRlV2l0aENhcnQgfSBmcm9tICcuLi9zdG9yZS9jYXJ0LXN0YXRlJztcbi8qKlxuICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjRcbiAqIFJlcGxhY2UgcGFydGljdWxhciBtZXRob2RzIHVzYWdlIHdpdGggcmVwbGFjZW1lbnRzIGZyb20gb3RoZXIgc2VydmljZXNcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2FydERhdGFTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aENhcnQ+O1xuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2U7XG4gICAgcHJpdmF0ZSBfdXNlcklkO1xuICAgIHByaXZhdGUgX2NhcnQ7XG4gICAgY29uc3RydWN0b3Ioc3RvcmU6IFN0b3JlPFN0YXRlV2l0aENhcnQ+LCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpO1xuICAgIGdldCBoYXNDYXJ0KCk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjRcbiAgICAgKiBVc2UgYGdldE9jY1VzZXJJZGAgZnJvbSBgQXV0aFNlcnZpY2VgIGluc3RlYWRcbiAgICAgKi9cbiAgICBnZXQgdXNlcklkKCk6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuNFxuICAgICAqIFVzZSBgZ2V0QWN0aXZlYCBmcm9tIGBBY3RpdmVDYXJ0U2VydmljZWAgaW5zdGVhZFxuICAgICAqL1xuICAgIGdldCBjYXJ0KCk6IENhcnQ7XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjRcbiAgICAgKiBVc2UgYGdldEFjdGl2ZUNhcnRJZGAgZnJvbSBgQWN0aXZlQ2FydFNlcnZpY2VgIGluc3RlYWRcbiAgICAgKi9cbiAgICBnZXQgY2FydElkKCk6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuNFxuICAgICAqIFVzZSBgaXNHdWVzdENhcnRgIGZyb20gYEFjdGl2ZUNhcnRTZXJ2aWNlYCBpbnN0ZWFkXG4gICAgICovXG4gICAgZ2V0IGlzR3Vlc3RDYXJ0KCk6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBpc0VtYWlsO1xufVxuIl19