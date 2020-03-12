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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImNhcnQuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMENBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvaW5kZXgnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgT3JkZXJFbnRyeSB9IGZyb20gJy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IFN0YXRlV2l0aENhcnQgfSBmcm9tICcuLi9zdG9yZS9jYXJ0LXN0YXRlJztcbmltcG9ydCB7IEFjdGl2ZUNhcnRTZXJ2aWNlIH0gZnJvbSAnLi9hY3RpdmUtY2FydC5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnREYXRhU2VydmljZSB9IGZyb20gJy4vY2FydC1kYXRhLnNlcnZpY2UnO1xuLyoqXG4gKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuNFxuICogVXNlIEFjdGl2ZUNhcnRTZXJ2aWNlIGluc3RlYWQgKEFQSSBpcyBhbG1vc3QgdGhlIHNhbWUpXG4gKiBGcm9tIDEuNCB2ZXJzaW9uIENhcnRTZXJ2aWNlIHVzZXMgQWN0aXZlQ2FydFNlcnZpY2UgaWYgaXQgaXMgYXZhaWxhYmxlXG4gKiBGaXhlcyBhbmQgaW1wcm92ZW1lbnRzIHdpbGwgYmUgb25seSBpbXBsZW1lbnRlZCBpbiBBY3RpdmVDYXJ0U2VydmljZVxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDYXJ0U2VydmljZSB7XG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhDYXJ0PjtcbiAgICBwcm90ZWN0ZWQgY2FydERhdGE6IENhcnREYXRhU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBhY3RpdmVDYXJ0U2VydmljZT86IEFjdGl2ZUNhcnRTZXJ2aWNlO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgUFJFVklPVVNfVVNFUl9JRF9JTklUSUFMX1ZBTFVFO1xuICAgIHByaXZhdGUgcHJldmlvdXNVc2VySWQ7XG4gICAgcHJpdmF0ZSBfYWN0aXZlQ2FydCQ7XG4gICAgY29uc3RydWN0b3Ioc3RvcmU6IFN0b3JlPFN0YXRlV2l0aENhcnQ+LCBjYXJ0RGF0YTogQ2FydERhdGFTZXJ2aWNlLCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIGFjdGl2ZUNhcnRTZXJ2aWNlPzogQWN0aXZlQ2FydFNlcnZpY2UpO1xuICAgIGdldEFjdGl2ZSgpOiBPYnNlcnZhYmxlPENhcnQ+O1xuICAgIGdldEVudHJpZXMoKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+O1xuICAgIGdldENhcnRNZXJnZUNvbXBsZXRlKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgZ2V0TG9hZGVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgcHJpdmF0ZSBsb2FkT3JNZXJnZTtcbiAgICBwcml2YXRlIGxvYWQ7XG4gICAgYWRkRW50cnkocHJvZHVjdENvZGU6IHN0cmluZywgcXVhbnRpdHk6IG51bWJlcik6IHZvaWQ7XG4gICAgcmVtb3ZlRW50cnkoZW50cnk6IE9yZGVyRW50cnkpOiB2b2lkO1xuICAgIHVwZGF0ZUVudHJ5KGVudHJ5TnVtYmVyOiBzdHJpbmcsIHF1YW50aXR5OiBudW1iZXIpOiB2b2lkO1xuICAgIGdldEVudHJ5KHByb2R1Y3RDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnk+O1xuICAgIGFkZEVtYWlsKGVtYWlsOiBzdHJpbmcpOiB2b2lkO1xuICAgIGdldEFzc2lnbmVkVXNlcigpOiBPYnNlcnZhYmxlPFVzZXI+O1xuICAgIGlzR3Vlc3RDYXJ0KCk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQWRkIG11bHRpcGxlIGVudHJpZXMgdG8gYSBjYXJ0XG4gICAgICogUmVxdWlyZXMgYSBjcmVhdGVkIGNhcnRcbiAgICAgKiBAcGFyYW0gY2FydEVudHJpZXMgOiBsaXN0IG9mIGVudHJpZXMgdG8gYWRkIChPcmRlckVudHJ5W10pXG4gICAgICovXG4gICAgYWRkRW50cmllcyhjYXJ0RW50cmllczogT3JkZXJFbnRyeVtdKTogdm9pZDtcbiAgICBwcml2YXRlIGlzQ3JlYXRlZDtcbiAgICAvKipcbiAgICAgKiBDYXJ0IGlzIGluY29tcGxldGUgaWYgaXQgY29udGFpbnMgb25seSBgZ3VpZGAsIGBjb2RlYCBhbmQgYHVzZXJgIHByb3BlcnRpZXMsIHdoaWNoIGNvbWUgZnJvbSBsb2NhbCBzdG9yYWdlLlxuICAgICAqIFRvIGdldCBjYXJ0IGNvbnRlbnQsIHdlIG5lZWQgdG8gbG9hZCBjYXJ0IGZyb20gYmFja2VuZC5cbiAgICAgKi9cbiAgICBwcml2YXRlIGlzSW5jb21wbGV0ZTtcbiAgICBwcml2YXRlIGlzSnVzdExvZ2dlZEluO1xuICAgIHByaXZhdGUgaXNMb2dnZWRJbjtcbiAgICAvKipcbiAgICAgKiBUZW1wb3JhcnkgbWV0aG9kIHRvIG1lcmdlIGd1ZXN0IGNhcnQgd2l0aCB1c2VyIGNhcnQgYmVjYXVzZSBvZiBiYWNrZW5kIGxpbWl0YXRpb25cbiAgICAgKiBUaGlzIGlzIGZvciBhbiBlZGdlIGNhc2VcbiAgICAgKi9cbiAgICBwcml2YXRlIGd1ZXN0Q2FydE1lcmdlO1xuICAgIGFkZFZvdWNoZXIodm91Y2hlcklkOiBzdHJpbmcpOiB2b2lkO1xufVxuIl19