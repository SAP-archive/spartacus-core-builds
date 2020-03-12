import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/index';
import { Cart } from '../../model/cart.model';
import { User } from '../../model/misc.model';
import { OrderEntry } from '../../model/order.model';
import { StateWithMultiCart } from '../store/multi-cart-state';
import { MultiCartService } from './multi-cart.service';
import * as ɵngcc0 from '@angular/core';
export declare class ActiveCartService {
    protected store: Store<StateWithMultiCart>;
    protected authService: AuthService;
    protected multiCartService: MultiCartService;
    private readonly PREVIOUS_USER_ID_INITIAL_VALUE;
    private previousUserId;
    private activeCart$;
    private userId;
    private cartId;
    private cartUser;
    private activeCartId$;
    private cartSelector$;
    constructor(store: Store<StateWithMultiCart>, authService: AuthService, multiCartService: MultiCartService);
    private initActiveCart;
    /**
     * Returns active cart
     */
    getActive(): Observable<Cart>;
    /**
     * Returns active cart id
     */
    getActiveCartId(): Observable<string>;
    /**
     * Returns cart entries
     */
    getEntries(): Observable<OrderEntry[]>;
    /**
     * Returns true when cart is stable (not loading and not pending processes on cart)
     */
    getLoaded(): Observable<boolean>;
    private loadOrMerge;
    private load;
    private addEntriesGuestMerge;
    private requireLoadedCartForGuestMerge;
    private isCartCreating;
    private requireLoadedCart;
    /**
     * Add entry to active cart
     *
     * @param productCode
     * @param quantity
     */
    addEntry(productCode: string, quantity: number): void;
    /**
     * Remove entry
     *
     * @param entry
     */
    removeEntry(entry: OrderEntry): void;
    /**
     * Update entry
     *
     * @param entryNumber
     * @param quantity
     */
    updateEntry(entryNumber: number, quantity: number): void;
    /**
     * Returns cart entry
     *
     * @param productCode
     */
    getEntry(productCode: string): Observable<OrderEntry>;
    /**
     * Assign email to cart
     *
     * @param email
     */
    addEmail(email: string): void;
    /**
     * Get assigned user to cart
     */
    getAssignedUser(): Observable<User>;
    /**
     * Returns true for guest cart
     */
    isGuestCart(): boolean;
    /**
     * Add multiple entries to a cart
     *
     * @param cartEntries : list of entries to add (OrderEntry[])
     */
    addEntries(cartEntries: OrderEntry[]): void;
    private isEmail;
    /**
     * Temporary method to merge guest cart with user cart because of backend limitation
     * This is for an edge case
     */
    private guestCartMerge;
    private isEmpty;
    private isJustLoggedIn;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ActiveCartService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ActiveCartService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWNhcnQuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJhY3RpdmUtY2FydC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBGQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2luZGV4JztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IE9yZGVyRW50cnkgfSBmcm9tICcuLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhNdWx0aUNhcnQgfSBmcm9tICcuLi9zdG9yZS9tdWx0aS1jYXJ0LXN0YXRlJztcbmltcG9ydCB7IE11bHRpQ2FydFNlcnZpY2UgfSBmcm9tICcuL211bHRpLWNhcnQuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBY3RpdmVDYXJ0U2VydmljZSB7XG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhNdWx0aUNhcnQ+O1xuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIG11bHRpQ2FydFNlcnZpY2U6IE11bHRpQ2FydFNlcnZpY2U7XG4gICAgcHJpdmF0ZSByZWFkb25seSBQUkVWSU9VU19VU0VSX0lEX0lOSVRJQUxfVkFMVUU7XG4gICAgcHJpdmF0ZSBwcmV2aW91c1VzZXJJZDtcbiAgICBwcml2YXRlIGFjdGl2ZUNhcnQkO1xuICAgIHByaXZhdGUgdXNlcklkO1xuICAgIHByaXZhdGUgY2FydElkO1xuICAgIHByaXZhdGUgY2FydFVzZXI7XG4gICAgcHJpdmF0ZSBhY3RpdmVDYXJ0SWQkO1xuICAgIHByaXZhdGUgY2FydFNlbGVjdG9yJDtcbiAgICBjb25zdHJ1Y3RvcihzdG9yZTogU3RvcmU8U3RhdGVXaXRoTXVsdGlDYXJ0PiwgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBtdWx0aUNhcnRTZXJ2aWNlOiBNdWx0aUNhcnRTZXJ2aWNlKTtcbiAgICBwcml2YXRlIGluaXRBY3RpdmVDYXJ0O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYWN0aXZlIGNhcnRcbiAgICAgKi9cbiAgICBnZXRBY3RpdmUoKTogT2JzZXJ2YWJsZTxDYXJ0PjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFjdGl2ZSBjYXJ0IGlkXG4gICAgICovXG4gICAgZ2V0QWN0aXZlQ2FydElkKCk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGNhcnQgZW50cmllc1xuICAgICAqL1xuICAgIGdldEVudHJpZXMoKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSB3aGVuIGNhcnQgaXMgc3RhYmxlIChub3QgbG9hZGluZyBhbmQgbm90IHBlbmRpbmcgcHJvY2Vzc2VzIG9uIGNhcnQpXG4gICAgICovXG4gICAgZ2V0TG9hZGVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgcHJpdmF0ZSBsb2FkT3JNZXJnZTtcbiAgICBwcml2YXRlIGxvYWQ7XG4gICAgcHJpdmF0ZSBhZGRFbnRyaWVzR3Vlc3RNZXJnZTtcbiAgICBwcml2YXRlIHJlcXVpcmVMb2FkZWRDYXJ0Rm9yR3Vlc3RNZXJnZTtcbiAgICBwcml2YXRlIGlzQ2FydENyZWF0aW5nO1xuICAgIHByaXZhdGUgcmVxdWlyZUxvYWRlZENhcnQ7XG4gICAgLyoqXG4gICAgICogQWRkIGVudHJ5IHRvIGFjdGl2ZSBjYXJ0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gcHJvZHVjdENvZGVcbiAgICAgKiBAcGFyYW0gcXVhbnRpdHlcbiAgICAgKi9cbiAgICBhZGRFbnRyeShwcm9kdWN0Q29kZTogc3RyaW5nLCBxdWFudGl0eTogbnVtYmVyKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZW50cnlcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbnRyeVxuICAgICAqL1xuICAgIHJlbW92ZUVudHJ5KGVudHJ5OiBPcmRlckVudHJ5KTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgZW50cnlcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbnRyeU51bWJlclxuICAgICAqIEBwYXJhbSBxdWFudGl0eVxuICAgICAqL1xuICAgIHVwZGF0ZUVudHJ5KGVudHJ5TnVtYmVyOiBudW1iZXIsIHF1YW50aXR5OiBudW1iZXIpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgY2FydCBlbnRyeVxuICAgICAqXG4gICAgICogQHBhcmFtIHByb2R1Y3RDb2RlXG4gICAgICovXG4gICAgZ2V0RW50cnkocHJvZHVjdENvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8T3JkZXJFbnRyeT47XG4gICAgLyoqXG4gICAgICogQXNzaWduIGVtYWlsIHRvIGNhcnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbWFpbFxuICAgICAqL1xuICAgIGFkZEVtYWlsKGVtYWlsOiBzdHJpbmcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEdldCBhc3NpZ25lZCB1c2VyIHRvIGNhcnRcbiAgICAgKi9cbiAgICBnZXRBc3NpZ25lZFVzZXIoKTogT2JzZXJ2YWJsZTxVc2VyPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgZm9yIGd1ZXN0IGNhcnRcbiAgICAgKi9cbiAgICBpc0d1ZXN0Q2FydCgpOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEFkZCBtdWx0aXBsZSBlbnRyaWVzIHRvIGEgY2FydFxuICAgICAqXG4gICAgICogQHBhcmFtIGNhcnRFbnRyaWVzIDogbGlzdCBvZiBlbnRyaWVzIHRvIGFkZCAoT3JkZXJFbnRyeVtdKVxuICAgICAqL1xuICAgIGFkZEVudHJpZXMoY2FydEVudHJpZXM6IE9yZGVyRW50cnlbXSk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBpc0VtYWlsO1xuICAgIC8qKlxuICAgICAqIFRlbXBvcmFyeSBtZXRob2QgdG8gbWVyZ2UgZ3Vlc3QgY2FydCB3aXRoIHVzZXIgY2FydCBiZWNhdXNlIG9mIGJhY2tlbmQgbGltaXRhdGlvblxuICAgICAqIFRoaXMgaXMgZm9yIGFuIGVkZ2UgY2FzZVxuICAgICAqL1xuICAgIHByaXZhdGUgZ3Vlc3RDYXJ0TWVyZ2U7XG4gICAgcHJpdmF0ZSBpc0VtcHR5O1xuICAgIHByaXZhdGUgaXNKdXN0TG9nZ2VkSW47XG59XG4iXX0=