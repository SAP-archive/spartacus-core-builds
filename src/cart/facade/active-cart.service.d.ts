import { OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { UserIdService } from '../../auth/index';
import { Cart } from '../../model/cart.model';
import { User } from '../../model/misc.model';
import { OrderEntry } from '../../model/order.model';
import { StateWithMultiCart } from '../store/multi-cart-state';
import { MultiCartService } from './multi-cart.service';
import * as ɵngcc0 from '@angular/core';
export declare class ActiveCartService implements OnDestroy {
    protected store: Store<StateWithMultiCart>;
    protected multiCartService: MultiCartService;
    protected userIdService: UserIdService;
    private readonly PREVIOUS_USER_ID_INITIAL_VALUE;
    private previousUserId;
    private activeCart$;
    protected subscription: Subscription;
    private userId;
    private cartId;
    private cartUser;
    private activeCartId$;
    private cartSelector$;
    constructor(store: Store<StateWithMultiCart>, multiCartService: MultiCartService, userIdService: UserIdService);
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
     * Returns last cart entry for provided product code.
     * Needed to cover processes where multiple entries can share the same product code
     * (e.g. promotions or configurable products)
     *
     * @param productCode
     */
    getLastEntry(productCode: string): Observable<OrderEntry>;
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

//# sourceMappingURL=active-cart.service.d.ts.map