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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kYXRhLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiY2FydC1kYXRhLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgU3RhdGVXaXRoQ2FydCB9IGZyb20gJy4uL3N0b3JlL2NhcnQtc3RhdGUnO1xuLyoqXG4gKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuNFxuICogUmVwbGFjZSBwYXJ0aWN1bGFyIG1ldGhvZHMgdXNhZ2Ugd2l0aCByZXBsYWNlbWVudHMgZnJvbSBvdGhlciBzZXJ2aWNlc1xuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDYXJ0RGF0YVNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoQ2FydD47XG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZTtcbiAgICBwcml2YXRlIF91c2VySWQ7XG4gICAgcHJpdmF0ZSBfY2FydDtcbiAgICBjb25zdHJ1Y3RvcihzdG9yZTogU3RvcmU8U3RhdGVXaXRoQ2FydD4sIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSk7XG4gICAgZ2V0IGhhc0NhcnQoKTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuNFxuICAgICAqIFVzZSBgZ2V0T2NjVXNlcklkYCBmcm9tIGBBdXRoU2VydmljZWAgaW5zdGVhZFxuICAgICAqL1xuICAgIGdldCB1c2VySWQoKTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS40XG4gICAgICogVXNlIGBnZXRBY3RpdmVgIGZyb20gYEFjdGl2ZUNhcnRTZXJ2aWNlYCBpbnN0ZWFkXG4gICAgICovXG4gICAgZ2V0IGNhcnQoKTogQ2FydDtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuNFxuICAgICAqIFVzZSBgZ2V0QWN0aXZlQ2FydElkYCBmcm9tIGBBY3RpdmVDYXJ0U2VydmljZWAgaW5zdGVhZFxuICAgICAqL1xuICAgIGdldCBjYXJ0SWQoKTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS40XG4gICAgICogVXNlIGBpc0d1ZXN0Q2FydGAgZnJvbSBgQWN0aXZlQ2FydFNlcnZpY2VgIGluc3RlYWRcbiAgICAgKi9cbiAgICBnZXQgaXNHdWVzdENhcnQoKTogYm9vbGVhbjtcbiAgICBwcml2YXRlIGlzRW1haWw7XG59XG4iXX0=