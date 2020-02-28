import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/index';
import { Cart } from '../../model/cart.model';
import { User } from '../../model/misc.model';
import { OrderEntry } from '../../model/order.model';
import { StateWithCart } from '../store/cart-state';
import { ActiveCartService } from './active-cart.service';
import { CartDataService } from './cart-data.service';
/**
 * @deprecated since version 1.4
 * Use ActiveCartService instead (API is almost the same)
 * From 1.4 version CartService uses ActiveCartService if it is available
 * Fixes and improvements will be only implemented in ActiveCartService
 */
import * as ɵngcc0 from '@angular/core';
export declare class CartService {
    protected store: Store<StateWithCart>;
    protected cartData: CartDataService;
    protected authService: AuthService;
    protected activeCartService?: ActiveCartService;
    private readonly PREVIOUS_USER_ID_INITIAL_VALUE;
    private previousUserId;
    private _activeCart$;
    constructor(store: Store<StateWithCart>, cartData: CartDataService, authService: AuthService, activeCartService?: ActiveCartService);
    getActive(): Observable<Cart>;
    getEntries(): Observable<OrderEntry[]>;
    getCartMergeComplete(): Observable<boolean>;
    getLoaded(): Observable<boolean>;
    private loadOrMerge;
    private load;
    addEntry(productCode: string, quantity: number): void;
    removeEntry(entry: OrderEntry): void;
    updateEntry(entryNumber: string, quantity: number): void;
    getEntry(productCode: string): Observable<OrderEntry>;
    addEmail(email: string): void;
    getAssignedUser(): Observable<User>;
    isGuestCart(): boolean;
    /**
     * Add multiple entries to a cart
     * Requires a created cart
     * @param cartEntries : list of entries to add (OrderEntry[])
     */
    addEntries(cartEntries: OrderEntry[]): void;
    private isCreated;
    /**
     * Cart is incomplete if it contains only `guid`, `code` and `user` properties, which come from local storage.
     * To get cart content, we need to load cart from backend.
     */
    private isIncomplete;
    private isJustLoggedIn;
    private isLoggedIn;
    /**
     * Temporary method to merge guest cart with user cart because of backend limitation
     * This is for an edge case
     */
    private guestCartMerge;
    addVoucher(voucherId: string): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CartService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImNhcnQuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMENBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2luZGV4JztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IE9yZGVyRW50cnkgfSBmcm9tICcuLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhDYXJ0IH0gZnJvbSAnLi4vc3RvcmUvY2FydC1zdGF0ZSc7XG5pbXBvcnQgeyBBY3RpdmVDYXJ0U2VydmljZSB9IGZyb20gJy4vYWN0aXZlLWNhcnQuc2VydmljZSc7XG5pbXBvcnQgeyBDYXJ0RGF0YVNlcnZpY2UgfSBmcm9tICcuL2NhcnQtZGF0YS5zZXJ2aWNlJztcbi8qKlxuICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjRcbiAqIFVzZSBBY3RpdmVDYXJ0U2VydmljZSBpbnN0ZWFkIChBUEkgaXMgYWxtb3N0IHRoZSBzYW1lKVxuICogRnJvbSAxLjQgdmVyc2lvbiBDYXJ0U2VydmljZSB1c2VzIEFjdGl2ZUNhcnRTZXJ2aWNlIGlmIGl0IGlzIGF2YWlsYWJsZVxuICogRml4ZXMgYW5kIGltcHJvdmVtZW50cyB3aWxsIGJlIG9ubHkgaW1wbGVtZW50ZWQgaW4gQWN0aXZlQ2FydFNlcnZpY2VcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2FydFNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoQ2FydD47XG4gICAgcHJvdGVjdGVkIGNhcnREYXRhOiBDYXJ0RGF0YVNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgYWN0aXZlQ2FydFNlcnZpY2U/OiBBY3RpdmVDYXJ0U2VydmljZTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IFBSRVZJT1VTX1VTRVJfSURfSU5JVElBTF9WQUxVRTtcbiAgICBwcml2YXRlIHByZXZpb3VzVXNlcklkO1xuICAgIHByaXZhdGUgX2FjdGl2ZUNhcnQkO1xuICAgIGNvbnN0cnVjdG9yKHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhDYXJ0PiwgY2FydERhdGE6IENhcnREYXRhU2VydmljZSwgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBhY3RpdmVDYXJ0U2VydmljZT86IEFjdGl2ZUNhcnRTZXJ2aWNlKTtcbiAgICBnZXRBY3RpdmUoKTogT2JzZXJ2YWJsZTxDYXJ0PjtcbiAgICBnZXRFbnRyaWVzKCk6IE9ic2VydmFibGU8T3JkZXJFbnRyeVtdPjtcbiAgICBnZXRDYXJ0TWVyZ2VDb21wbGV0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIGdldExvYWRlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIHByaXZhdGUgbG9hZE9yTWVyZ2U7XG4gICAgcHJpdmF0ZSBsb2FkO1xuICAgIGFkZEVudHJ5KHByb2R1Y3RDb2RlOiBzdHJpbmcsIHF1YW50aXR5OiBudW1iZXIpOiB2b2lkO1xuICAgIHJlbW92ZUVudHJ5KGVudHJ5OiBPcmRlckVudHJ5KTogdm9pZDtcbiAgICB1cGRhdGVFbnRyeShlbnRyeU51bWJlcjogc3RyaW5nLCBxdWFudGl0eTogbnVtYmVyKTogdm9pZDtcbiAgICBnZXRFbnRyeShwcm9kdWN0Q29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5PjtcbiAgICBhZGRFbWFpbChlbWFpbDogc3RyaW5nKTogdm9pZDtcbiAgICBnZXRBc3NpZ25lZFVzZXIoKTogT2JzZXJ2YWJsZTxVc2VyPjtcbiAgICBpc0d1ZXN0Q2FydCgpOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEFkZCBtdWx0aXBsZSBlbnRyaWVzIHRvIGEgY2FydFxuICAgICAqIFJlcXVpcmVzIGEgY3JlYXRlZCBjYXJ0XG4gICAgICogQHBhcmFtIGNhcnRFbnRyaWVzIDogbGlzdCBvZiBlbnRyaWVzIHRvIGFkZCAoT3JkZXJFbnRyeVtdKVxuICAgICAqL1xuICAgIGFkZEVudHJpZXMoY2FydEVudHJpZXM6IE9yZGVyRW50cnlbXSk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBpc0NyZWF0ZWQ7XG4gICAgLyoqXG4gICAgICogQ2FydCBpcyBpbmNvbXBsZXRlIGlmIGl0IGNvbnRhaW5zIG9ubHkgYGd1aWRgLCBgY29kZWAgYW5kIGB1c2VyYCBwcm9wZXJ0aWVzLCB3aGljaCBjb21lIGZyb20gbG9jYWwgc3RvcmFnZS5cbiAgICAgKiBUbyBnZXQgY2FydCBjb250ZW50LCB3ZSBuZWVkIHRvIGxvYWQgY2FydCBmcm9tIGJhY2tlbmQuXG4gICAgICovXG4gICAgcHJpdmF0ZSBpc0luY29tcGxldGU7XG4gICAgcHJpdmF0ZSBpc0p1c3RMb2dnZWRJbjtcbiAgICBwcml2YXRlIGlzTG9nZ2VkSW47XG4gICAgLyoqXG4gICAgICogVGVtcG9yYXJ5IG1ldGhvZCB0byBtZXJnZSBndWVzdCBjYXJ0IHdpdGggdXNlciBjYXJ0IGJlY2F1c2Ugb2YgYmFja2VuZCBsaW1pdGF0aW9uXG4gICAgICogVGhpcyBpcyBmb3IgYW4gZWRnZSBjYXNlXG4gICAgICovXG4gICAgcHJpdmF0ZSBndWVzdENhcnRNZXJnZTtcbiAgICBhZGRWb3VjaGVyKHZvdWNoZXJJZDogc3RyaW5nKTogdm9pZDtcbn1cbiJdfQ==