/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { filter, map, shareReplay, take, tap, switchMap, withLatestFrom, distinctUntilChanged, } from 'rxjs/operators';
import { AuthService } from '../../auth/index';
import { CartActions } from '../store/actions/index';
import { MultiCartSelectors } from '../store/selectors/index';
import { MultiCartService } from './multi-cart.service';
import { OCC_USER_ID_ANONYMOUS, OCC_CART_ID_CURRENT, OCC_USER_ID_GUEST, } from '../../occ/utils/occ-constants';
import { getCartIdByUserId } from '../utils/utils';
import { ADD_ENTRY_PROCESS_ID } from '../store';
import { getProcessStateFactory } from '../../process/store/selectors/process.selectors';
import { EMAIL_PATTERN } from '../../util/regex-pattern';
export class ActiveCartService {
    /**
     * @param {?} store
     * @param {?} authService
     * @param {?} multiCartService
     */
    constructor(store, authService, multiCartService) {
        this.store = store;
        this.authService = authService;
        this.multiCartService = multiCartService;
        this.PREVIOUS_USER_ID_INITIAL_VALUE = 'PREVIOUS_USER_ID_INITIAL_VALUE';
        this.previousUserId = this.PREVIOUS_USER_ID_INITIAL_VALUE;
        this.userId = OCC_USER_ID_ANONYMOUS;
        this.entriesToAdd = [];
        this.activeCartId$ = this.store.pipe(select(MultiCartSelectors.getActiveCartId));
        this.cartSelector$ = this.activeCartId$.pipe(switchMap((/**
         * @param {?} cartId
         * @return {?}
         */
        cartId => {
            if (!cartId) {
                return this.multiCartService.getCartEntity(OCC_CART_ID_CURRENT);
            }
            return this.multiCartService.getCartEntity(cartId);
        })));
        this.authService.getOccUserId().subscribe((/**
         * @param {?} userId
         * @return {?}
         */
        userId => {
            this.userId = userId;
            if (this.userId !== OCC_USER_ID_ANONYMOUS) {
                if (this.isJustLoggedIn(userId)) {
                    this.loadOrMerge(this.cartId);
                }
            }
            this.previousUserId = userId;
        }));
        this.activeCartId$.subscribe((/**
         * @param {?} cartId
         * @return {?}
         */
        cartId => {
            this.cartId = cartId;
        }));
        this.initActiveCart();
    }
    /**
     * @private
     * @return {?}
     */
    initActiveCart() {
        this.activeCart$ = this.cartSelector$.pipe(withLatestFrom(this.activeCartId$), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([cartEntity, activeCartId]) => {
            return {
                cart: cartEntity.value,
                cartId: activeCartId,
                loading: cartEntity.loading,
                loaded: (cartEntity.error || cartEntity.success) && !cartEntity.loading,
            };
        })), filter((/**
         * @param {?} __0
         * @return {?}
         */
        ({ loading }) => !loading)), tap((/**
         * @param {?} __0
         * @return {?}
         */
        ({ cart, cartId, loaded }) => {
            if (this.isEmpty(cart) && !loaded) {
                this.load(cartId);
            }
        })), map((/**
         * @param {?} __0
         * @return {?}
         */
        ({ cart }) => (cart ? cart : {}))), tap((/**
         * @param {?} cart
         * @return {?}
         */
        cart => {
            if (cart) {
                this.cartUser = cart.user;
            }
        })), shareReplay({ bufferSize: 1, refCount: true }));
    }
    /**
     * Returns active cart
     * @return {?}
     */
    getActive() {
        return this.activeCart$;
    }
    /**
     * Returns active cart id
     * @return {?}
     */
    getActiveCartId() {
        return this.activeCart$.pipe(map((/**
         * @param {?} cart
         * @return {?}
         */
        cart => getCartIdByUserId(cart, this.userId))), distinctUntilChanged());
    }
    /**
     * Returns cart entries
     * @return {?}
     */
    getEntries() {
        return this.activeCartId$.pipe(switchMap((/**
         * @param {?} cartId
         * @return {?}
         */
        cartId => this.multiCartService.getEntries(cartId))));
    }
    /**
     * Returns loaded flag (success or error)
     * @return {?}
     */
    getLoaded() {
        return this.cartSelector$.pipe(map((/**
         * @param {?} cart
         * @return {?}
         */
        cart => (cart.success || cart.error) && !cart.loading)));
    }
    /**
     * @private
     * @param {?} cartId
     * @return {?}
     */
    loadOrMerge(cartId) {
        // for login user, whenever there's an existing cart, we will load the user
        // current cart and merge it into the existing cart
        if (!cartId) {
            this.multiCartService.loadCart({
                userId: this.userId,
                cartId: OCC_CART_ID_CURRENT,
                extraData: {
                    active: true,
                },
            });
        }
        else if (this.isGuestCart()) {
            this.guestCartMerge(cartId);
        }
        else {
            this.store.dispatch(new CartActions.MergeCart({
                userId: this.userId,
                cartId: cartId,
                extraData: {
                    active: true,
                },
            }));
        }
    }
    /**
     * @private
     * @param {?} cartId
     * @return {?}
     */
    load(cartId) {
        if (this.userId !== OCC_USER_ID_ANONYMOUS) {
            this.multiCartService.loadCart({
                userId: this.userId,
                cartId: cartId ? cartId : OCC_CART_ID_CURRENT,
                extraData: {
                    active: true,
                },
            });
        }
        else if (cartId) {
            this.multiCartService.loadCart({
                userId: this.userId,
                cartId: cartId,
                extraData: {
                    active: true,
                },
            });
        }
    }
    /**
     * Returns loaded flag for add entry process (success)
     * @return {?}
     */
    getAddEntryLoaded() {
        return this.store.pipe(select(getProcessStateFactory(ADD_ENTRY_PROCESS_ID)), map((/**
         * @param {?} payload
         * @return {?}
         */
        payload => !payload.loading && payload.success)));
    }
    /**
     * Add entry to active cart
     *
     * @param {?} productCode
     * @param {?} quantity
     * @param {?=} guestMerge
     * @return {?}
     */
    addEntry(productCode, quantity, guestMerge = false) {
        /** @type {?} */
        let createInitialized = false;
        /** @type {?} */
        let attemptedLoad = false;
        // In case there is no new cart trying to load current cart cause flicker in loaders (loader, pause and then loader again)
        // That's why add entry process was used instead of relying on loading flag from entity
        this.multiCartService.initAddEntryProcess();
        this.entriesToAdd.push({ productCode, quantity });
        if (!this.addEntrySub) {
            this.addEntrySub = this.cartSelector$
                .pipe(filter((/**
             * @return {?}
             */
            () => !createInitialized)), switchMap((/**
             * @param {?} cartState
             * @return {?}
             */
            cartState => {
                if ((this.isEmpty(cartState.value) && !cartState.loading) ||
                    (guestMerge && this.isGuestCart() && !cartState.loading)) {
                    if (!attemptedLoad && this.userId !== OCC_USER_ID_ANONYMOUS) {
                        this.load(undefined);
                        attemptedLoad = true;
                        return of(cartState);
                    }
                    createInitialized = true;
                    return this.multiCartService.createCart({
                        userId: this.userId,
                        extraData: {
                            active: true,
                        },
                    });
                }
                return of(cartState);
            })), filter((/**
             * @param {?} cartState
             * @return {?}
             */
            cartState => (!guestMerge && !this.isEmpty(cartState.value)) ||
                (guestMerge &&
                    !this.isGuestCart() &&
                    !this.isEmpty(cartState.value)))), take(1))
                .subscribe((/**
             * @param {?} cartState
             * @return {?}
             */
            cartState => {
                this.multiCartService.addEntries(this.userId, getCartIdByUserId(cartState.value, this.userId), this.entriesToAdd);
                this.entriesToAdd = [];
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.addEntrySub.unsubscribe();
                    this.addEntrySub = undefined;
                }));
            }));
        }
    }
    /**
     * Remove entry
     *
     * @param {?} entry
     * @return {?}
     */
    removeEntry(entry) {
        this.multiCartService.removeEntry(this.userId, this.cartId, entry.entryNumber);
    }
    /**
     * Update entry
     *
     * @param {?} entryNumber
     * @param {?} quantity
     * @return {?}
     */
    updateEntry(entryNumber, quantity) {
        this.multiCartService.updateEntry(this.userId, this.cartId, entryNumber, quantity);
    }
    /**
     * Returns cart entry
     *
     * @param {?} productCode
     * @return {?}
     */
    getEntry(productCode) {
        return this.activeCartId$.pipe(switchMap((/**
         * @param {?} cartId
         * @return {?}
         */
        cartId => this.multiCartService.getEntry(cartId, productCode))));
    }
    /**
     * Assign email to cart
     *
     * @param {?} email
     * @return {?}
     */
    addEmail(email) {
        this.multiCartService.assignEmail(this.cartId, this.userId, email);
    }
    /**
     * Get assigned user to cart
     * @return {?}
     */
    getAssignedUser() {
        return this.getActive().pipe(map((/**
         * @param {?} cart
         * @return {?}
         */
        cart => cart.user)));
    }
    /**
     * Returns true for guest cart
     * @return {?}
     */
    isGuestCart() {
        return (this.cartUser &&
            (this.cartUser.name === OCC_USER_ID_GUEST ||
                this.isEmail(this.cartUser.uid
                    .split('|')
                    .slice(1)
                    .join('|'))));
    }
    /**
     * Add multiple entries to a cart
     *
     * @param {?} cartEntries : list of entries to add (OrderEntry[])
     * @param {?=} guestMerge
     * @return {?}
     */
    addEntries(cartEntries, guestMerge = false) {
        cartEntries.forEach((/**
         * @param {?} entry
         * @return {?}
         */
        entry => {
            this.addEntry(entry.product.code, entry.quantity, guestMerge);
        }));
    }
    /**
     * @private
     * @param {?} str
     * @return {?}
     */
    isEmail(str) {
        if (str) {
            return str.match(EMAIL_PATTERN) ? true : false;
        }
        return false;
    }
    // TODO: Remove once backend is updated
    /**
     * Temporary method to merge guest cart with user cart because of backend limitation
     * This is for an edge case
     * @private
     * @param {?} cartId
     * @return {?}
     */
    guestCartMerge(cartId) {
        /** @type {?} */
        let cartEntries;
        this.getEntries()
            .pipe(take(1))
            .subscribe((/**
         * @param {?} entries
         * @return {?}
         */
        entries => {
            cartEntries = entries;
        }));
        this.multiCartService.deleteCart(cartId, OCC_USER_ID_ANONYMOUS);
        this.addEntries(cartEntries, true);
    }
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    isEmpty(cart) {
        return (!cart || (typeof cart === 'object' && Object.keys(cart).length === 0));
    }
    /**
     * @private
     * @param {?} userId
     * @return {?}
     */
    isJustLoggedIn(userId) {
        return (this.previousUserId !== userId && // *just* logged in
            this.previousUserId !== this.PREVIOUS_USER_ID_INITIAL_VALUE // not app initialization
        );
    }
}
ActiveCartService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ActiveCartService.ctorParameters = () => [
    { type: Store },
    { type: AuthService },
    { type: MultiCartService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ActiveCartService.prototype.PREVIOUS_USER_ID_INITIAL_VALUE;
    /**
     * @type {?}
     * @private
     */
    ActiveCartService.prototype.previousUserId;
    /**
     * @type {?}
     * @private
     */
    ActiveCartService.prototype.activeCart$;
    /**
     * @type {?}
     * @private
     */
    ActiveCartService.prototype.userId;
    /**
     * @type {?}
     * @private
     */
    ActiveCartService.prototype.cartId;
    /**
     * @type {?}
     * @private
     */
    ActiveCartService.prototype.cartUser;
    /**
     * @type {?}
     * @private
     */
    ActiveCartService.prototype.addEntrySub;
    /**
     * @type {?}
     * @private
     */
    ActiveCartService.prototype.entriesToAdd;
    /**
     * @type {?}
     * @private
     */
    ActiveCartService.prototype.activeCartId$;
    /**
     * @type {?}
     * @private
     */
    ActiveCartService.prototype.cartSelector$;
    /**
     * @type {?}
     * @protected
     */
    ActiveCartService.prototype.store;
    /**
     * @type {?}
     * @protected
     */
    ActiveCartService.prototype.authService;
    /**
     * @type {?}
     * @protected
     */
    ActiveCartService.prototype.multiCartService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWNhcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L2ZhY2FkZS9hY3RpdmUtY2FydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBYyxFQUFFLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFDTCxNQUFNLEVBQ04sR0FBRyxFQUNILFdBQVcsRUFDWCxJQUFJLEVBQ0osR0FBRyxFQUNILFNBQVMsRUFDVCxjQUFjLEVBQ2Qsb0JBQW9CLEdBQ3JCLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUU5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RCxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLG1CQUFtQixFQUNuQixpQkFBaUIsR0FDbEIsTUFBTSwrQkFBK0IsQ0FBQztBQUN2QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDaEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFFekYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBR3pELE1BQU0sT0FBTyxpQkFBaUI7Ozs7OztJQXdCNUIsWUFDWSxLQUF5RCxFQUN6RCxXQUF3QixFQUN4Qixn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SSxDQUFDLGNBQWMsS0FBSyxNQUFNLElBQUksbUJBQW1CO1lBQ3JELElBQUksQ0FBQyxjQUFjLEtBQUssSUFBSSxDQUFDLDhCQUE4QixDQUFDLHlCQUF5QjtTQUN0RixDQUFDO0lBQ0osQ0FBQzs7O1lBbldGLFVBQVU7Ozs7WUFoQ00sS0FBSztZQVliLFdBQVc7WUFNWCxnQkFBZ0I7Ozs7Ozs7SUFnQnZCLDJEQUNtQzs7Ozs7SUFDbkMsMkNBQTZEOzs7OztJQUM3RCx3Q0FBc0M7Ozs7O0lBRXRDLG1DQUF1Qzs7Ozs7SUFDdkMsbUNBQWU7Ozs7O0lBQ2YscUNBQXVCOzs7OztJQUN2Qix3Q0FBa0M7Ozs7O0lBQ2xDLHlDQUE0RTs7Ozs7SUFFNUUsMENBRUU7Ozs7O0lBQ0YsMENBT0U7Ozs7O0lBR0Esa0NBQW1FOzs7OztJQUNuRSx3Q0FBa0M7Ozs7O0lBQ2xDLDZDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBmaWx0ZXIsXG4gIG1hcCxcbiAgc2hhcmVSZXBsYXksXG4gIHRha2UsXG4gIHRhcCxcbiAgc3dpdGNoTWFwLFxuICB3aXRoTGF0ZXN0RnJvbSxcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9pbmRleCc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBPcmRlckVudHJ5IH0gZnJvbSAnLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgQ2FydEFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IE11bHRpQ2FydFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhNdWx0aUNhcnQgfSBmcm9tICcuLi9zdG9yZS9tdWx0aS1jYXJ0LXN0YXRlJztcbmltcG9ydCB7IE11bHRpQ2FydFNlcnZpY2UgfSBmcm9tICcuL211bHRpLWNhcnQuc2VydmljZSc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHtcbiAgT0NDX1VTRVJfSURfQU5PTllNT1VTLFxuICBPQ0NfQ0FSVF9JRF9DVVJSRU5ULFxuICBPQ0NfVVNFUl9JRF9HVUVTVCxcbn0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuaW1wb3J0IHsgZ2V0Q2FydElkQnlVc2VySWQgfSBmcm9tICcuLi91dGlscy91dGlscyc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9jZXNzIH0gZnJvbSAnLi4vLi4vcHJvY2Vzcyc7XG5pbXBvcnQgeyBBRERfRU5UUllfUFJPQ0VTU19JRCB9IGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCB7IGdldFByb2Nlc3NTdGF0ZUZhY3RvcnkgfSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3NlbGVjdG9ycy9wcm9jZXNzLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBFTUFJTF9QQVRURVJOIH0gZnJvbSAnLi4vLi4vdXRpbC9yZWdleC1wYXR0ZXJuJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFjdGl2ZUNhcnRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBQUkVWSU9VU19VU0VSX0lEX0lOSVRJQUxfVkFMVUUgPVxuICAgICdQUkVWSU9VU19VU0VSX0lEX0lOSVRJQUxfVkFMVUUnO1xuICBwcml2YXRlIHByZXZpb3VzVXNlcklkID0gdGhpcy5QUkVWSU9VU19VU0VSX0lEX0lOSVRJQUxfVkFMVUU7XG4gIHByaXZhdGUgYWN0aXZlQ2FydCQ6IE9ic2VydmFibGU8Q2FydD47XG5cbiAgcHJpdmF0ZSB1c2VySWQgPSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVM7XG4gIHByaXZhdGUgY2FydElkO1xuICBwcml2YXRlIGNhcnRVc2VyOiBVc2VyO1xuICBwcml2YXRlIGFkZEVudHJ5U3ViOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgZW50cmllc1RvQWRkOiBBcnJheTx7IHByb2R1Y3RDb2RlOiBzdHJpbmc7IHF1YW50aXR5OiBudW1iZXIgfT4gPSBbXTtcblxuICBwcml2YXRlIGFjdGl2ZUNhcnRJZCQgPSB0aGlzLnN0b3JlLnBpcGUoXG4gICAgc2VsZWN0KE11bHRpQ2FydFNlbGVjdG9ycy5nZXRBY3RpdmVDYXJ0SWQpXG4gICk7XG4gIHByaXZhdGUgY2FydFNlbGVjdG9yJCA9IHRoaXMuYWN0aXZlQ2FydElkJC5waXBlKFxuICAgIHN3aXRjaE1hcChjYXJ0SWQgPT4ge1xuICAgICAgaWYgKCFjYXJ0SWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubXVsdGlDYXJ0U2VydmljZS5nZXRDYXJ0RW50aXR5KE9DQ19DQVJUX0lEX0NVUlJFTlQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMubXVsdGlDYXJ0U2VydmljZS5nZXRDYXJ0RW50aXR5KGNhcnRJZCk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aE11bHRpQ2FydCB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+LFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIG11bHRpQ2FydFNlcnZpY2U6IE11bHRpQ2FydFNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5hdXRoU2VydmljZS5nZXRPY2NVc2VySWQoKS5zdWJzY3JpYmUodXNlcklkID0+IHtcbiAgICAgIHRoaXMudXNlcklkID0gdXNlcklkO1xuICAgICAgaWYgKHRoaXMudXNlcklkICE9PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNKdXN0TG9nZ2VkSW4odXNlcklkKSkge1xuICAgICAgICAgIHRoaXMubG9hZE9yTWVyZ2UodGhpcy5jYXJ0SWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnByZXZpb3VzVXNlcklkID0gdXNlcklkO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hY3RpdmVDYXJ0SWQkLnN1YnNjcmliZShjYXJ0SWQgPT4ge1xuICAgICAgdGhpcy5jYXJ0SWQgPSBjYXJ0SWQ7XG4gICAgfSk7XG5cbiAgICB0aGlzLmluaXRBY3RpdmVDYXJ0KCk7XG4gIH1cblxuICBwcml2YXRlIGluaXRBY3RpdmVDYXJ0KCkge1xuICAgIHRoaXMuYWN0aXZlQ2FydCQgPSB0aGlzLmNhcnRTZWxlY3RvciQucGlwZShcbiAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuYWN0aXZlQ2FydElkJCksXG4gICAgICBtYXAoKFtjYXJ0RW50aXR5LCBhY3RpdmVDYXJ0SWRdOiBbTG9hZGVyU3RhdGU8Q2FydD4sIHN0cmluZ10pOiB7XG4gICAgICAgIGNhcnQ6IENhcnQ7XG4gICAgICAgIGNhcnRJZDogc3RyaW5nO1xuICAgICAgICBsb2FkaW5nOiBib29sZWFuO1xuICAgICAgICBsb2FkZWQ6IGJvb2xlYW47XG4gICAgICB9ID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjYXJ0OiBjYXJ0RW50aXR5LnZhbHVlLFxuICAgICAgICAgIGNhcnRJZDogYWN0aXZlQ2FydElkLFxuICAgICAgICAgIGxvYWRpbmc6IGNhcnRFbnRpdHkubG9hZGluZyxcbiAgICAgICAgICBsb2FkZWQ6XG4gICAgICAgICAgICAoY2FydEVudGl0eS5lcnJvciB8fCBjYXJ0RW50aXR5LnN1Y2Nlc3MpICYmICFjYXJ0RW50aXR5LmxvYWRpbmcsXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcigoeyBsb2FkaW5nIH0pID0+ICFsb2FkaW5nKSxcbiAgICAgIHRhcCgoeyBjYXJ0LCBjYXJ0SWQsIGxvYWRlZCB9KSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlzRW1wdHkoY2FydCkgJiYgIWxvYWRlZCkge1xuICAgICAgICAgIHRoaXMubG9hZChjYXJ0SWQpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgoeyBjYXJ0IH0pID0+IChjYXJ0ID8gY2FydCA6IHt9KSksXG4gICAgICB0YXAoY2FydCA9PiB7XG4gICAgICAgIGlmIChjYXJ0KSB7XG4gICAgICAgICAgdGhpcy5jYXJ0VXNlciA9IGNhcnQudXNlcjtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBzaGFyZVJlcGxheSh7IGJ1ZmZlclNpemU6IDEsIHJlZkNvdW50OiB0cnVlIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFjdGl2ZSBjYXJ0XG4gICAqL1xuICBnZXRBY3RpdmUoKTogT2JzZXJ2YWJsZTxDYXJ0PiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlQ2FydCQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhY3RpdmUgY2FydCBpZFxuICAgKi9cbiAgZ2V0QWN0aXZlQ2FydElkKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlQ2FydCQucGlwZShcbiAgICAgIG1hcChjYXJ0ID0+IGdldENhcnRJZEJ5VXNlcklkKGNhcnQsIHRoaXMudXNlcklkKSksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGNhcnQgZW50cmllc1xuICAgKi9cbiAgZ2V0RW50cmllcygpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnlbXT4ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUNhcnRJZCQucGlwZShcbiAgICAgIHN3aXRjaE1hcChjYXJ0SWQgPT4gdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmdldEVudHJpZXMoY2FydElkKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgbG9hZGVkIGZsYWcgKHN1Y2Nlc3Mgb3IgZXJyb3IpXG4gICAqL1xuICBnZXRMb2FkZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuY2FydFNlbGVjdG9yJC5waXBlKFxuICAgICAgbWFwKGNhcnQgPT4gKGNhcnQuc3VjY2VzcyB8fCBjYXJ0LmVycm9yKSAmJiAhY2FydC5sb2FkaW5nKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGxvYWRPck1lcmdlKGNhcnRJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgLy8gZm9yIGxvZ2luIHVzZXIsIHdoZW5ldmVyIHRoZXJlJ3MgYW4gZXhpc3RpbmcgY2FydCwgd2Ugd2lsbCBsb2FkIHRoZSB1c2VyXG4gICAgLy8gY3VycmVudCBjYXJ0IGFuZCBtZXJnZSBpdCBpbnRvIHRoZSBleGlzdGluZyBjYXJ0XG4gICAgaWYgKCFjYXJ0SWQpIHtcbiAgICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5sb2FkQ2FydCh7XG4gICAgICAgIHVzZXJJZDogdGhpcy51c2VySWQsXG4gICAgICAgIGNhcnRJZDogT0NDX0NBUlRfSURfQ1VSUkVOVCxcbiAgICAgICAgZXh0cmFEYXRhOiB7XG4gICAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzR3Vlc3RDYXJ0KCkpIHtcbiAgICAgIHRoaXMuZ3Vlc3RDYXJ0TWVyZ2UoY2FydElkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IENhcnRBY3Rpb25zLk1lcmdlQ2FydCh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IGNhcnRJZCxcbiAgICAgICAgICBleHRyYURhdGE6IHtcbiAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGxvYWQoY2FydElkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51c2VySWQgIT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUykge1xuICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmxvYWRDYXJ0KHtcbiAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZCxcbiAgICAgICAgY2FydElkOiBjYXJ0SWQgPyBjYXJ0SWQgOiBPQ0NfQ0FSVF9JRF9DVVJSRU5ULFxuICAgICAgICBleHRyYURhdGE6IHtcbiAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGNhcnRJZCkge1xuICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmxvYWRDYXJ0KHtcbiAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZCxcbiAgICAgICAgY2FydElkOiBjYXJ0SWQsXG4gICAgICAgIGV4dHJhRGF0YToge1xuICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGxvYWRlZCBmbGFnIGZvciBhZGQgZW50cnkgcHJvY2VzcyAoc3VjY2VzcylcbiAgICovXG4gIGdldEFkZEVudHJ5TG9hZGVkKCkge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc1N0YXRlRmFjdG9yeShBRERfRU5UUllfUFJPQ0VTU19JRCkpLFxuICAgICAgbWFwKHBheWxvYWQgPT4gIXBheWxvYWQubG9hZGluZyAmJiBwYXlsb2FkLnN1Y2Nlc3MpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgZW50cnkgdG8gYWN0aXZlIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIHByb2R1Y3RDb2RlXG4gICAqIEBwYXJhbSBxdWFudGl0eVxuICAgKiBAcGFyYW0gZ3Vlc3RNZXJnZVxuICAgKi9cbiAgYWRkRW50cnkoXG4gICAgcHJvZHVjdENvZGU6IHN0cmluZyxcbiAgICBxdWFudGl0eTogbnVtYmVyLFxuICAgIGd1ZXN0TWVyZ2U6IGJvb2xlYW4gPSBmYWxzZVxuICApOiB2b2lkIHtcbiAgICBsZXQgY3JlYXRlSW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICBsZXQgYXR0ZW1wdGVkTG9hZCA9IGZhbHNlO1xuICAgIC8vIEluIGNhc2UgdGhlcmUgaXMgbm8gbmV3IGNhcnQgdHJ5aW5nIHRvIGxvYWQgY3VycmVudCBjYXJ0IGNhdXNlIGZsaWNrZXIgaW4gbG9hZGVycyAobG9hZGVyLCBwYXVzZSBhbmQgdGhlbiBsb2FkZXIgYWdhaW4pXG4gICAgLy8gVGhhdCdzIHdoeSBhZGQgZW50cnkgcHJvY2VzcyB3YXMgdXNlZCBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gbG9hZGluZyBmbGFnIGZyb20gZW50aXR5XG4gICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmluaXRBZGRFbnRyeVByb2Nlc3MoKTtcbiAgICB0aGlzLmVudHJpZXNUb0FkZC5wdXNoKHsgcHJvZHVjdENvZGUsIHF1YW50aXR5IH0pO1xuICAgIGlmICghdGhpcy5hZGRFbnRyeVN1Yikge1xuICAgICAgdGhpcy5hZGRFbnRyeVN1YiA9IHRoaXMuY2FydFNlbGVjdG9yJFxuICAgICAgICAucGlwZShcbiAgICAgICAgICBmaWx0ZXIoKCkgPT4gIWNyZWF0ZUluaXRpYWxpemVkKSxcbiAgICAgICAgICBzd2l0Y2hNYXAoY2FydFN0YXRlID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgKHRoaXMuaXNFbXB0eShjYXJ0U3RhdGUudmFsdWUpICYmICFjYXJ0U3RhdGUubG9hZGluZykgfHxcbiAgICAgICAgICAgICAgKGd1ZXN0TWVyZ2UgJiYgdGhpcy5pc0d1ZXN0Q2FydCgpICYmICFjYXJ0U3RhdGUubG9hZGluZylcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBpZiAoIWF0dGVtcHRlZExvYWQgJiYgdGhpcy51c2VySWQgIT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUykge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZCh1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgIGF0dGVtcHRlZExvYWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBvZihjYXJ0U3RhdGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNyZWF0ZUluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubXVsdGlDYXJ0U2VydmljZS5jcmVhdGVDYXJ0KHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHRoaXMudXNlcklkLFxuICAgICAgICAgICAgICAgIGV4dHJhRGF0YToge1xuICAgICAgICAgICAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9mKGNhcnRTdGF0ZSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZmlsdGVyKFxuICAgICAgICAgICAgY2FydFN0YXRlID0+XG4gICAgICAgICAgICAgICghZ3Vlc3RNZXJnZSAmJiAhdGhpcy5pc0VtcHR5KGNhcnRTdGF0ZS52YWx1ZSkpIHx8XG4gICAgICAgICAgICAgIChndWVzdE1lcmdlICYmXG4gICAgICAgICAgICAgICAgIXRoaXMuaXNHdWVzdENhcnQoKSAmJlxuICAgICAgICAgICAgICAgICF0aGlzLmlzRW1wdHkoY2FydFN0YXRlLnZhbHVlKSlcbiAgICAgICAgICApLFxuICAgICAgICAgIHRha2UoMSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKGNhcnRTdGF0ZSA9PiB7XG4gICAgICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmFkZEVudHJpZXMoXG4gICAgICAgICAgICB0aGlzLnVzZXJJZCxcbiAgICAgICAgICAgIGdldENhcnRJZEJ5VXNlcklkKGNhcnRTdGF0ZS52YWx1ZSwgdGhpcy51c2VySWQpLFxuICAgICAgICAgICAgdGhpcy5lbnRyaWVzVG9BZGRcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuZW50cmllc1RvQWRkID0gW107XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZEVudHJ5U3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB0aGlzLmFkZEVudHJ5U3ViID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGVudHJ5XG4gICAqXG4gICAqIEBwYXJhbSBlbnRyeVxuICAgKi9cbiAgcmVtb3ZlRW50cnkoZW50cnk6IE9yZGVyRW50cnkpOiB2b2lkIHtcbiAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UucmVtb3ZlRW50cnkoXG4gICAgICB0aGlzLnVzZXJJZCxcbiAgICAgIHRoaXMuY2FydElkLFxuICAgICAgZW50cnkuZW50cnlOdW1iZXJcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBlbnRyeVxuICAgKlxuICAgKiBAcGFyYW0gZW50cnlOdW1iZXJcbiAgICogQHBhcmFtIHF1YW50aXR5XG4gICAqL1xuICB1cGRhdGVFbnRyeShlbnRyeU51bWJlcjogbnVtYmVyLCBxdWFudGl0eTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLnVwZGF0ZUVudHJ5KFxuICAgICAgdGhpcy51c2VySWQsXG4gICAgICB0aGlzLmNhcnRJZCxcbiAgICAgIGVudHJ5TnVtYmVyLFxuICAgICAgcXVhbnRpdHlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgY2FydCBlbnRyeVxuICAgKlxuICAgKiBAcGFyYW0gcHJvZHVjdENvZGVcbiAgICovXG4gIGdldEVudHJ5KHByb2R1Y3RDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnk+IHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVDYXJ0SWQkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoY2FydElkID0+IHRoaXMubXVsdGlDYXJ0U2VydmljZS5nZXRFbnRyeShjYXJ0SWQsIHByb2R1Y3RDb2RlKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFzc2lnbiBlbWFpbCB0byBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSBlbWFpbFxuICAgKi9cbiAgYWRkRW1haWwoZW1haWw6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS5hc3NpZ25FbWFpbCh0aGlzLmNhcnRJZCwgdGhpcy51c2VySWQsIGVtYWlsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXNzaWduZWQgdXNlciB0byBjYXJ0XG4gICAqL1xuICBnZXRBc3NpZ25lZFVzZXIoKTogT2JzZXJ2YWJsZTxVc2VyPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QWN0aXZlKCkucGlwZShtYXAoY2FydCA9PiBjYXJ0LnVzZXIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgZm9yIGd1ZXN0IGNhcnRcbiAgICovXG4gIGlzR3Vlc3RDYXJ0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmNhcnRVc2VyICYmXG4gICAgICAodGhpcy5jYXJ0VXNlci5uYW1lID09PSBPQ0NfVVNFUl9JRF9HVUVTVCB8fFxuICAgICAgICB0aGlzLmlzRW1haWwoXG4gICAgICAgICAgdGhpcy5jYXJ0VXNlci51aWRcbiAgICAgICAgICAgIC5zcGxpdCgnfCcpXG4gICAgICAgICAgICAuc2xpY2UoMSlcbiAgICAgICAgICAgIC5qb2luKCd8JylcbiAgICAgICAgKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBtdWx0aXBsZSBlbnRyaWVzIHRvIGEgY2FydFxuICAgKlxuICAgKiBAcGFyYW0gY2FydEVudHJpZXMgOiBsaXN0IG9mIGVudHJpZXMgdG8gYWRkIChPcmRlckVudHJ5W10pXG4gICAqL1xuICBhZGRFbnRyaWVzKGNhcnRFbnRyaWVzOiBPcmRlckVudHJ5W10sIGd1ZXN0TWVyZ2U6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIGNhcnRFbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgdGhpcy5hZGRFbnRyeShlbnRyeS5wcm9kdWN0LmNvZGUsIGVudHJ5LnF1YW50aXR5LCBndWVzdE1lcmdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaXNFbWFpbChzdHI6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmIChzdHIpIHtcbiAgICAgIHJldHVybiBzdHIubWF0Y2goRU1BSUxfUEFUVEVSTikgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFRPRE86IFJlbW92ZSBvbmNlIGJhY2tlbmQgaXMgdXBkYXRlZFxuICAvKipcbiAgICogVGVtcG9yYXJ5IG1ldGhvZCB0byBtZXJnZSBndWVzdCBjYXJ0IHdpdGggdXNlciBjYXJ0IGJlY2F1c2Ugb2YgYmFja2VuZCBsaW1pdGF0aW9uXG4gICAqIFRoaXMgaXMgZm9yIGFuIGVkZ2UgY2FzZVxuICAgKi9cbiAgcHJpdmF0ZSBndWVzdENhcnRNZXJnZShjYXJ0SWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGxldCBjYXJ0RW50cmllczogT3JkZXJFbnRyeVtdO1xuICAgIHRoaXMuZ2V0RW50cmllcygpXG4gICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZShlbnRyaWVzID0+IHtcbiAgICAgICAgY2FydEVudHJpZXMgPSBlbnRyaWVzO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UuZGVsZXRlQ2FydChjYXJ0SWQsIE9DQ19VU0VSX0lEX0FOT05ZTU9VUyk7XG5cbiAgICB0aGlzLmFkZEVudHJpZXMoY2FydEVudHJpZXMsIHRydWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0VtcHR5KGNhcnQ6IENhcnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgIWNhcnQgfHwgKHR5cGVvZiBjYXJ0ID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyhjYXJ0KS5sZW5ndGggPT09IDApXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNKdXN0TG9nZ2VkSW4odXNlcklkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5wcmV2aW91c1VzZXJJZCAhPT0gdXNlcklkICYmIC8vICpqdXN0KiBsb2dnZWQgaW5cbiAgICAgIHRoaXMucHJldmlvdXNVc2VySWQgIT09IHRoaXMuUFJFVklPVVNfVVNFUl9JRF9JTklUSUFMX1ZBTFVFIC8vIG5vdCBhcHAgaW5pdGlhbGl6YXRpb25cbiAgICApO1xuICB9XG59XG4iXX0=