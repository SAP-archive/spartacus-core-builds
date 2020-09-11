import { OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../../auth/index';
import { Cart } from '../../model/cart.model';
import { User } from '../../model/misc.model';
import { OrderEntry } from '../../model/order.model';
import { StateWithMultiCart } from '../store/multi-cart-state';
import { MultiCartService } from './multi-cart.service';
import * as ɵngcc0 from '@angular/core';
export declare class ActiveCartService implements OnDestroy {
    protected store: Store<StateWithMultiCart>;
    protected authService: AuthService;
    protected multiCartService: MultiCartService;
    private readonly PREVIOUS_USER_ID_INITIAL_VALUE;
    private previousUserId;
    private activeCart$;
    protected subscription: Subscription;
    private userId;
    private cartId;
    private cartUser;
    private activeCartId$;
    private cartSelector$;
    constructor(store: Store<StateWithMultiCart>, authService: AuthService, multiCartService: MultiCartService);
    ngOnDestroy(): void;
    protected initActiveCart(): void;
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
     * Returns cart loading state
     */
    getLoading(): Observable<boolean>;
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
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWNhcnQuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJhY3RpdmUtY2FydC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdHQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9pbmRleCc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBPcmRlckVudHJ5IH0gZnJvbSAnLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgU3RhdGVXaXRoTXVsdGlDYXJ0IH0gZnJvbSAnLi4vc3RvcmUvbXVsdGktY2FydC1zdGF0ZSc7XG5pbXBvcnQgeyBNdWx0aUNhcnRTZXJ2aWNlIH0gZnJvbSAnLi9tdWx0aS1jYXJ0LnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQWN0aXZlQ2FydFNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoTXVsdGlDYXJ0PjtcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBtdWx0aUNhcnRTZXJ2aWNlOiBNdWx0aUNhcnRTZXJ2aWNlO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgUFJFVklPVVNfVVNFUl9JRF9JTklUSUFMX1ZBTFVFO1xuICAgIHByaXZhdGUgcHJldmlvdXNVc2VySWQ7XG4gICAgcHJpdmF0ZSBhY3RpdmVDYXJ0JDtcbiAgICBwcm90ZWN0ZWQgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gICAgcHJpdmF0ZSB1c2VySWQ7XG4gICAgcHJpdmF0ZSBjYXJ0SWQ7XG4gICAgcHJpdmF0ZSBjYXJ0VXNlcjtcbiAgICBwcml2YXRlIGFjdGl2ZUNhcnRJZCQ7XG4gICAgcHJpdmF0ZSBjYXJ0U2VsZWN0b3IkO1xuICAgIGNvbnN0cnVjdG9yKHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhNdWx0aUNhcnQ+LCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIG11bHRpQ2FydFNlcnZpY2U6IE11bHRpQ2FydFNlcnZpY2UpO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgcHJvdGVjdGVkIGluaXRBY3RpdmVDYXJ0KCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhY3RpdmUgY2FydFxuICAgICAqL1xuICAgIGdldEFjdGl2ZSgpOiBPYnNlcnZhYmxlPENhcnQ+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYWN0aXZlIGNhcnQgaWRcbiAgICAgKi9cbiAgICBnZXRBY3RpdmVDYXJ0SWQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgY2FydCBlbnRyaWVzXG4gICAgICovXG4gICAgZ2V0RW50cmllcygpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnlbXT47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBjYXJ0IGxvYWRpbmcgc3RhdGVcbiAgICAgKi9cbiAgICBnZXRMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIHdoZW4gY2FydCBpcyBzdGFibGUgKG5vdCBsb2FkaW5nIGFuZCBub3QgcGVuZGluZyBwcm9jZXNzZXMgb24gY2FydClcbiAgICAgKi9cbiAgICBpc1N0YWJsZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIHByaXZhdGUgbG9hZE9yTWVyZ2U7XG4gICAgcHJpdmF0ZSBsb2FkO1xuICAgIHByaXZhdGUgYWRkRW50cmllc0d1ZXN0TWVyZ2U7XG4gICAgcHJpdmF0ZSByZXF1aXJlTG9hZGVkQ2FydEZvckd1ZXN0TWVyZ2U7XG4gICAgcHJpdmF0ZSBpc0NhcnRDcmVhdGluZztcbiAgICBwcml2YXRlIHJlcXVpcmVMb2FkZWRDYXJ0O1xuICAgIC8qKlxuICAgICAqIEFkZCBlbnRyeSB0byBhY3RpdmUgY2FydFxuICAgICAqXG4gICAgICogQHBhcmFtIHByb2R1Y3RDb2RlXG4gICAgICogQHBhcmFtIHF1YW50aXR5XG4gICAgICovXG4gICAgYWRkRW50cnkocHJvZHVjdENvZGU6IHN0cmluZywgcXVhbnRpdHk6IG51bWJlcik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGVudHJ5XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZW50cnlcbiAgICAgKi9cbiAgICByZW1vdmVFbnRyeShlbnRyeTogT3JkZXJFbnRyeSk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogVXBkYXRlIGVudHJ5XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZW50cnlOdW1iZXJcbiAgICAgKiBAcGFyYW0gcXVhbnRpdHlcbiAgICAgKi9cbiAgICB1cGRhdGVFbnRyeShlbnRyeU51bWJlcjogbnVtYmVyLCBxdWFudGl0eTogbnVtYmVyKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGNhcnQgZW50cnlcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwcm9kdWN0Q29kZVxuICAgICAqL1xuICAgIGdldEVudHJ5KHByb2R1Y3RDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnk+O1xuICAgIC8qKlxuICAgICAqIEFzc2lnbiBlbWFpbCB0byBjYXJ0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZW1haWxcbiAgICAgKi9cbiAgICBhZGRFbWFpbChlbWFpbDogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBHZXQgYXNzaWduZWQgdXNlciB0byBjYXJ0XG4gICAgICovXG4gICAgZ2V0QXNzaWduZWRVc2VyKCk6IE9ic2VydmFibGU8VXNlcj47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGZvciBndWVzdCBjYXJ0XG4gICAgICovXG4gICAgaXNHdWVzdENhcnQoKTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBBZGQgbXVsdGlwbGUgZW50cmllcyB0byBhIGNhcnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYXJ0RW50cmllcyA6IGxpc3Qgb2YgZW50cmllcyB0byBhZGQgKE9yZGVyRW50cnlbXSlcbiAgICAgKi9cbiAgICBhZGRFbnRyaWVzKGNhcnRFbnRyaWVzOiBPcmRlckVudHJ5W10pOiB2b2lkO1xuICAgIHByaXZhdGUgaXNFbWFpbDtcbiAgICAvKipcbiAgICAgKiBUZW1wb3JhcnkgbWV0aG9kIHRvIG1lcmdlIGd1ZXN0IGNhcnQgd2l0aCB1c2VyIGNhcnQgYmVjYXVzZSBvZiBiYWNrZW5kIGxpbWl0YXRpb25cbiAgICAgKiBUaGlzIGlzIGZvciBhbiBlZGdlIGNhc2VcbiAgICAgKi9cbiAgICBwcml2YXRlIGd1ZXN0Q2FydE1lcmdlO1xuICAgIHByaXZhdGUgaXNFbXB0eTtcbiAgICBwcml2YXRlIGlzSnVzdExvZ2dlZEluO1xufVxuIl19