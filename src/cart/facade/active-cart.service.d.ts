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
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ActiveCartService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWNhcnQuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJhY3RpdmUtY2FydC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4RkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9pbmRleCc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBPcmRlckVudHJ5IH0gZnJvbSAnLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgU3RhdGVXaXRoTXVsdGlDYXJ0IH0gZnJvbSAnLi4vc3RvcmUvbXVsdGktY2FydC1zdGF0ZSc7XG5pbXBvcnQgeyBNdWx0aUNhcnRTZXJ2aWNlIH0gZnJvbSAnLi9tdWx0aS1jYXJ0LnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQWN0aXZlQ2FydFNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoTXVsdGlDYXJ0PjtcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBtdWx0aUNhcnRTZXJ2aWNlOiBNdWx0aUNhcnRTZXJ2aWNlO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgUFJFVklPVVNfVVNFUl9JRF9JTklUSUFMX1ZBTFVFO1xuICAgIHByaXZhdGUgcHJldmlvdXNVc2VySWQ7XG4gICAgcHJpdmF0ZSBhY3RpdmVDYXJ0JDtcbiAgICBwcml2YXRlIHVzZXJJZDtcbiAgICBwcml2YXRlIGNhcnRJZDtcbiAgICBwcml2YXRlIGNhcnRVc2VyO1xuICAgIHByaXZhdGUgYWN0aXZlQ2FydElkJDtcbiAgICBwcml2YXRlIGNhcnRTZWxlY3RvciQ7XG4gICAgY29uc3RydWN0b3Ioc3RvcmU6IFN0b3JlPFN0YXRlV2l0aE11bHRpQ2FydD4sIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgbXVsdGlDYXJ0U2VydmljZTogTXVsdGlDYXJ0U2VydmljZSk7XG4gICAgcHJpdmF0ZSBpbml0QWN0aXZlQ2FydDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFjdGl2ZSBjYXJ0XG4gICAgICovXG4gICAgZ2V0QWN0aXZlKCk6IE9ic2VydmFibGU8Q2FydD47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhY3RpdmUgY2FydCBpZFxuICAgICAqL1xuICAgIGdldEFjdGl2ZUNhcnRJZCgpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBjYXJ0IGVudHJpZXNcbiAgICAgKi9cbiAgICBnZXRFbnRyaWVzKCk6IE9ic2VydmFibGU8T3JkZXJFbnRyeVtdPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGNhcnQgbG9hZGluZyBzdGF0ZVxuICAgICAqL1xuICAgIGdldExvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgd2hlbiBjYXJ0IGlzIHN0YWJsZSAobm90IGxvYWRpbmcgYW5kIG5vdCBwZW5kaW5nIHByb2Nlc3NlcyBvbiBjYXJ0KVxuICAgICAqL1xuICAgIGlzU3RhYmxlKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgcHJpdmF0ZSBsb2FkT3JNZXJnZTtcbiAgICBwcml2YXRlIGxvYWQ7XG4gICAgcHJpdmF0ZSBhZGRFbnRyaWVzR3Vlc3RNZXJnZTtcbiAgICBwcml2YXRlIHJlcXVpcmVMb2FkZWRDYXJ0Rm9yR3Vlc3RNZXJnZTtcbiAgICBwcml2YXRlIGlzQ2FydENyZWF0aW5nO1xuICAgIHByaXZhdGUgcmVxdWlyZUxvYWRlZENhcnQ7XG4gICAgLyoqXG4gICAgICogQWRkIGVudHJ5IHRvIGFjdGl2ZSBjYXJ0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gcHJvZHVjdENvZGVcbiAgICAgKiBAcGFyYW0gcXVhbnRpdHlcbiAgICAgKi9cbiAgICBhZGRFbnRyeShwcm9kdWN0Q29kZTogc3RyaW5nLCBxdWFudGl0eTogbnVtYmVyKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZW50cnlcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbnRyeVxuICAgICAqL1xuICAgIHJlbW92ZUVudHJ5KGVudHJ5OiBPcmRlckVudHJ5KTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgZW50cnlcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbnRyeU51bWJlclxuICAgICAqIEBwYXJhbSBxdWFudGl0eVxuICAgICAqL1xuICAgIHVwZGF0ZUVudHJ5KGVudHJ5TnVtYmVyOiBudW1iZXIsIHF1YW50aXR5OiBudW1iZXIpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgY2FydCBlbnRyeVxuICAgICAqXG4gICAgICogQHBhcmFtIHByb2R1Y3RDb2RlXG4gICAgICovXG4gICAgZ2V0RW50cnkocHJvZHVjdENvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8T3JkZXJFbnRyeT47XG4gICAgLyoqXG4gICAgICogQXNzaWduIGVtYWlsIHRvIGNhcnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbWFpbFxuICAgICAqL1xuICAgIGFkZEVtYWlsKGVtYWlsOiBzdHJpbmcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEdldCBhc3NpZ25lZCB1c2VyIHRvIGNhcnRcbiAgICAgKi9cbiAgICBnZXRBc3NpZ25lZFVzZXIoKTogT2JzZXJ2YWJsZTxVc2VyPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgZm9yIGd1ZXN0IGNhcnRcbiAgICAgKi9cbiAgICBpc0d1ZXN0Q2FydCgpOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEFkZCBtdWx0aXBsZSBlbnRyaWVzIHRvIGEgY2FydFxuICAgICAqXG4gICAgICogQHBhcmFtIGNhcnRFbnRyaWVzIDogbGlzdCBvZiBlbnRyaWVzIHRvIGFkZCAoT3JkZXJFbnRyeVtdKVxuICAgICAqL1xuICAgIGFkZEVudHJpZXMoY2FydEVudHJpZXM6IE9yZGVyRW50cnlbXSk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBpc0VtYWlsO1xuICAgIC8qKlxuICAgICAqIFRlbXBvcmFyeSBtZXRob2QgdG8gbWVyZ2UgZ3Vlc3QgY2FydCB3aXRoIHVzZXIgY2FydCBiZWNhdXNlIG9mIGJhY2tlbmQgbGltaXRhdGlvblxuICAgICAqIFRoaXMgaXMgZm9yIGFuIGVkZ2UgY2FzZVxuICAgICAqL1xuICAgIHByaXZhdGUgZ3Vlc3RDYXJ0TWVyZ2U7XG4gICAgcHJpdmF0ZSBpc0VtcHR5O1xuICAgIHByaXZhdGUgaXNKdXN0TG9nZ2VkSW47XG59XG4iXX0=