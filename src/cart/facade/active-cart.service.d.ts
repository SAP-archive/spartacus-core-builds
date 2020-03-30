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
    isStable(): Observable<boolean>;
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ActiveCartService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ActiveCartService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWNhcnQuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJhY3RpdmUtY2FydC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBGQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2luZGV4JztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IE9yZGVyRW50cnkgfSBmcm9tICcuLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhNdWx0aUNhcnQgfSBmcm9tICcuLi9zdG9yZS9tdWx0aS1jYXJ0LXN0YXRlJztcbmltcG9ydCB7IE11bHRpQ2FydFNlcnZpY2UgfSBmcm9tICcuL211bHRpLWNhcnQuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBY3RpdmVDYXJ0U2VydmljZSB7XG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhNdWx0aUNhcnQ+O1xuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIG11bHRpQ2FydFNlcnZpY2U6IE11bHRpQ2FydFNlcnZpY2U7XG4gICAgcHJpdmF0ZSByZWFkb25seSBQUkVWSU9VU19VU0VSX0lEX0lOSVRJQUxfVkFMVUU7XG4gICAgcHJpdmF0ZSBwcmV2aW91c1VzZXJJZDtcbiAgICBwcml2YXRlIGFjdGl2ZUNhcnQkO1xuICAgIHByaXZhdGUgdXNlcklkO1xuICAgIHByaXZhdGUgY2FydElkO1xuICAgIHByaXZhdGUgY2FydFVzZXI7XG4gICAgcHJpdmF0ZSBhY3RpdmVDYXJ0SWQkO1xuICAgIHByaXZhdGUgY2FydFNlbGVjdG9yJDtcbiAgICBjb25zdHJ1Y3RvcihzdG9yZTogU3RvcmU8U3RhdGVXaXRoTXVsdGlDYXJ0PiwgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBtdWx0aUNhcnRTZXJ2aWNlOiBNdWx0aUNhcnRTZXJ2aWNlKTtcbiAgICBwcml2YXRlIGluaXRBY3RpdmVDYXJ0O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYWN0aXZlIGNhcnRcbiAgICAgKi9cbiAgICBnZXRBY3RpdmUoKTogT2JzZXJ2YWJsZTxDYXJ0PjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFjdGl2ZSBjYXJ0IGlkXG4gICAgICovXG4gICAgZ2V0QWN0aXZlQ2FydElkKCk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGNhcnQgZW50cmllc1xuICAgICAqL1xuICAgIGdldEVudHJpZXMoKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSB3aGVuIGNhcnQgaXMgc3RhYmxlIChub3QgbG9hZGluZyBhbmQgbm90IHBlbmRpbmcgcHJvY2Vzc2VzIG9uIGNhcnQpXG4gICAgICovXG4gICAgaXNTdGFibGUoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBwcml2YXRlIGxvYWRPck1lcmdlO1xuICAgIHByaXZhdGUgbG9hZDtcbiAgICBwcml2YXRlIGFkZEVudHJpZXNHdWVzdE1lcmdlO1xuICAgIHByaXZhdGUgcmVxdWlyZUxvYWRlZENhcnRGb3JHdWVzdE1lcmdlO1xuICAgIHByaXZhdGUgaXNDYXJ0Q3JlYXRpbmc7XG4gICAgcHJpdmF0ZSByZXF1aXJlTG9hZGVkQ2FydDtcbiAgICAvKipcbiAgICAgKiBBZGQgZW50cnkgdG8gYWN0aXZlIGNhcnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwcm9kdWN0Q29kZVxuICAgICAqIEBwYXJhbSBxdWFudGl0eVxuICAgICAqL1xuICAgIGFkZEVudHJ5KHByb2R1Y3RDb2RlOiBzdHJpbmcsIHF1YW50aXR5OiBudW1iZXIpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbnRyeVxuICAgICAqXG4gICAgICogQHBhcmFtIGVudHJ5XG4gICAgICovXG4gICAgcmVtb3ZlRW50cnkoZW50cnk6IE9yZGVyRW50cnkpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBlbnRyeVxuICAgICAqXG4gICAgICogQHBhcmFtIGVudHJ5TnVtYmVyXG4gICAgICogQHBhcmFtIHF1YW50aXR5XG4gICAgICovXG4gICAgdXBkYXRlRW50cnkoZW50cnlOdW1iZXI6IG51bWJlciwgcXVhbnRpdHk6IG51bWJlcik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBjYXJ0IGVudHJ5XG4gICAgICpcbiAgICAgKiBAcGFyYW0gcHJvZHVjdENvZGVcbiAgICAgKi9cbiAgICBnZXRFbnRyeShwcm9kdWN0Q29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5PjtcbiAgICAvKipcbiAgICAgKiBBc3NpZ24gZW1haWwgdG8gY2FydFxuICAgICAqXG4gICAgICogQHBhcmFtIGVtYWlsXG4gICAgICovXG4gICAgYWRkRW1haWwoZW1haWw6IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogR2V0IGFzc2lnbmVkIHVzZXIgdG8gY2FydFxuICAgICAqL1xuICAgIGdldEFzc2lnbmVkVXNlcigpOiBPYnNlcnZhYmxlPFVzZXI+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBmb3IgZ3Vlc3QgY2FydFxuICAgICAqL1xuICAgIGlzR3Vlc3RDYXJ0KCk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQWRkIG11bHRpcGxlIGVudHJpZXMgdG8gYSBjYXJ0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FydEVudHJpZXMgOiBsaXN0IG9mIGVudHJpZXMgdG8gYWRkIChPcmRlckVudHJ5W10pXG4gICAgICovXG4gICAgYWRkRW50cmllcyhjYXJ0RW50cmllczogT3JkZXJFbnRyeVtdKTogdm9pZDtcbiAgICBwcml2YXRlIGlzRW1haWw7XG4gICAgLyoqXG4gICAgICogVGVtcG9yYXJ5IG1ldGhvZCB0byBtZXJnZSBndWVzdCBjYXJ0IHdpdGggdXNlciBjYXJ0IGJlY2F1c2Ugb2YgYmFja2VuZCBsaW1pdGF0aW9uXG4gICAgICogVGhpcyBpcyBmb3IgYW4gZWRnZSBjYXNlXG4gICAgICovXG4gICAgcHJpdmF0ZSBndWVzdENhcnRNZXJnZTtcbiAgICBwcml2YXRlIGlzRW1wdHk7XG4gICAgcHJpdmF0ZSBpc0p1c3RMb2dnZWRJbjtcbn1cbiJdfQ==