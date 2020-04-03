import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { EMPTY, timer } from 'rxjs';
import { debounce, distinctUntilChanged } from 'rxjs/operators';
import * as DeprecatedCartActions from '../store/actions/cart.action';
import { CartActions } from '../store/actions/index';
import { MultiCartSelectors } from '../store/selectors/index';
var MultiCartService = /** @class */ (function () {
    function MultiCartService(store) {
        this.store = store;
    }
    /**
     * Returns cart from store as an observable
     *
     * @param cartId
     */
    MultiCartService.prototype.getCart = function (cartId) {
        return this.store.pipe(select(MultiCartSelectors.getCartSelectorFactory(cartId)));
    };
    /**
     * Returns cart entity from store (cart with loading, error, success flags) as an observable
     *
     * @param cartId
     */
    MultiCartService.prototype.getCartEntity = function (cartId) {
        return this.store.pipe(select(MultiCartSelectors.getCartEntitySelectorFactory(cartId)));
    };
    /**
     * Returns true when there are no operations on that in progress and it is not currently loading
     *
     * @param cartId
     */
    MultiCartService.prototype.isStable = function (cartId) {
        return this.store.pipe(select(MultiCartSelectors.getCartIsStableSelectorFactory(cartId)), 
        // We dispatch a lot of actions just after finishing some process or loading, so we want this flag not to flicker.
        // This flickering should only be avoided when switching from false to true
        // Start of loading should be showed instantly (no debounce)
        // Extra actions are only dispatched after some loading
        debounce(function (isStable) { return (isStable ? timer(0) : EMPTY); }), distinctUntilChanged());
    };
    /**
     * Simple random temp cart id generator
     */
    MultiCartService.prototype.generateTempCartId = function () {
        var pseudoUuid = Math.random().toString(36).substr(2, 9);
        return "temp-" + pseudoUuid;
    };
    /**
     * Create or merge cart
     *
     * @param params Object with userId, oldCartId, toMergeCartGuid and extraData
     */
    MultiCartService.prototype.createCart = function (_a) {
        var userId = _a.userId, oldCartId = _a.oldCartId, toMergeCartGuid = _a.toMergeCartGuid, extraData = _a.extraData;
        // to support creating multiple carts at the same time we need to use different entity for every process
        // simple random uuid generator is used here for entity names
        var tempCartId = this.generateTempCartId();
        this.store.dispatch(new CartActions.CreateCart({
            extraData: extraData,
            userId: userId,
            oldCartId: oldCartId,
            toMergeCartGuid: toMergeCartGuid,
            tempCartId: tempCartId,
        }));
        return this.getCartEntity(tempCartId);
    };
    /**
     * Merge provided cart to current user cart
     *
     * @param params Object with userId, cartId and extraData
     */
    MultiCartService.prototype.mergeToCurrentCart = function (_a) {
        var userId = _a.userId, cartId = _a.cartId, extraData = _a.extraData;
        var tempCartId = this.generateTempCartId();
        this.store.dispatch(new DeprecatedCartActions.MergeCart({
            userId: userId,
            cartId: cartId,
            extraData: extraData,
            tempCartId: tempCartId,
        }));
    };
    /**
     * Load cart
     *
     * @param params Object with userId, cartId and extraData
     */
    MultiCartService.prototype.loadCart = function (_a) {
        var cartId = _a.cartId, userId = _a.userId, extraData = _a.extraData;
        this.store.dispatch(new CartActions.LoadCart({
            userId: userId,
            cartId: cartId,
            extraData: extraData,
        }));
    };
    /**
     * Get cart entries as an observable
     * @param cartId
     */
    MultiCartService.prototype.getEntries = function (cartId) {
        return this.store.pipe(select(MultiCartSelectors.getCartEntriesSelectorFactory(cartId)));
    };
    /**
     * Add entry to cart
     *
     * @param userId
     * @param cartId
     * @param productCode
     * @param quantity
     */
    MultiCartService.prototype.addEntry = function (userId, cartId, productCode, quantity) {
        this.store.dispatch(new CartActions.CartAddEntry({
            userId: userId,
            cartId: cartId,
            productCode: productCode,
            quantity: quantity,
        }));
    };
    /**
     * Add multiple entries to cart
     *
     * @param userId
     * @param cartId
     * @param products Array with items (productCode and quantity)
     */
    MultiCartService.prototype.addEntries = function (userId, cartId, products) {
        var _this = this;
        products.forEach(function (product) {
            _this.store.dispatch(new CartActions.CartAddEntry({
                userId: userId,
                cartId: cartId,
                productCode: product.productCode,
                quantity: product.quantity,
            }));
        });
    };
    /**
     * Remove entry from cart
     *
     * @param userId
     * @param cartId
     * @param entryNumber
     */
    MultiCartService.prototype.removeEntry = function (userId, cartId, entryNumber) {
        this.store.dispatch(new CartActions.CartRemoveEntry({
            userId: userId,
            cartId: cartId,
            entry: "" + entryNumber,
        }));
    };
    /**
     * Update entry in cart. For quantity = 0 it removes entry
     *
     * @param userId
     * @param cartId
     * @param entryNumber
     * @param quantity
     */
    MultiCartService.prototype.updateEntry = function (userId, cartId, entryNumber, quantity) {
        if (quantity > 0) {
            this.store.dispatch(new CartActions.CartUpdateEntry({
                userId: userId,
                cartId: cartId,
                entry: "" + entryNumber,
                qty: quantity,
            }));
        }
        else {
            this.removeEntry(userId, cartId, entryNumber);
        }
    };
    /**
     * Get specific entry from cart
     *
     * @param cartId
     * @param productCode
     */
    MultiCartService.prototype.getEntry = function (cartId, productCode) {
        return this.store.pipe(select(MultiCartSelectors.getCartEntrySelectorFactory(cartId, productCode)));
    };
    /**
     * Assign email to the cart
     *
     * @param cartId
     * @param userId
     * @param email
     */
    MultiCartService.prototype.assignEmail = function (cartId, userId, email) {
        this.store.dispatch(new DeprecatedCartActions.AddEmailToCart({
            userId: userId,
            cartId: cartId,
            email: email,
        }));
    };
    /**
     * Delete cart
     *
     * @param cartId
     * @param userId
     */
    MultiCartService.prototype.deleteCart = function (cartId, userId) {
        this.store.dispatch(new DeprecatedCartActions.DeleteCart({
            userId: userId,
            cartId: cartId,
        }));
    };
    MultiCartService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    MultiCartService = __decorate([
        Injectable()
    ], MultiCartService);
    return MultiCartService;
}());
export { MultiCartService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvZmFjYWRlL211bHRpLWNhcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsS0FBSyxFQUFjLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJaEUsT0FBTyxLQUFLLHFCQUFxQixNQUFNLDhCQUE4QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUc5RDtJQUNFLDBCQUFzQixLQUFnQztRQUFoQyxVQUFLLEdBQUwsS0FBSyxDQUEyQjtJQUFHLENBQUM7SUFFMUQ7Ozs7T0FJRztJQUNILGtDQUFPLEdBQVAsVUFBUSxNQUFjO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUMxRCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSCx3Q0FBYSxHQUFiLFVBQWMsTUFBYztRQUMxQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsa0JBQWtCLENBQUMsNEJBQTRCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FDaEUsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsbUNBQVEsR0FBUixVQUFTLE1BQWM7UUFDckIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLGtCQUFrQixDQUFDLDhCQUE4QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pFLGtIQUFrSDtRQUNsSCwyRUFBMkU7UUFDM0UsNERBQTREO1FBQzVELHVEQUF1RDtRQUN2RCxRQUFRLENBQUMsVUFBQyxRQUFRLElBQUssT0FBQSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBN0IsQ0FBNkIsQ0FBQyxFQUNyRCxvQkFBb0IsRUFBRSxDQUN2QixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0ssNkNBQWtCLEdBQTFCO1FBQ0UsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNELE9BQU8sVUFBUSxVQUFZLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxxQ0FBVSxHQUFWLFVBQVcsRUFVVjtZQVRDLGtCQUFNLEVBQ04sd0JBQVMsRUFDVCxvQ0FBZSxFQUNmLHdCQUFTO1FBT1Qsd0dBQXdHO1FBQ3hHLDZEQUE2RDtRQUM3RCxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxXQUFXLENBQUMsVUFBVSxDQUFDO1lBQ3pCLFNBQVMsV0FBQTtZQUNULE1BQU0sUUFBQTtZQUNOLFNBQVMsV0FBQTtZQUNULGVBQWUsaUJBQUE7WUFDZixVQUFVLFlBQUE7U0FDWCxDQUFDLENBQ0gsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILDZDQUFrQixHQUFsQixVQUFtQixFQUE2QjtZQUEzQixrQkFBTSxFQUFFLGtCQUFNLEVBQUUsd0JBQVM7UUFDNUMsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUkscUJBQXFCLENBQUMsU0FBUyxDQUFDO1lBQ2xDLE1BQU0sUUFBQTtZQUNOLE1BQU0sUUFBQTtZQUNOLFNBQVMsV0FBQTtZQUNULFVBQVUsWUFBQTtTQUNYLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxtQ0FBUSxHQUFSLFVBQVMsRUFRUjtZQVBDLGtCQUFNLEVBQ04sa0JBQU0sRUFDTix3QkFBUztRQU1ULElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUM7WUFDdkIsTUFBTSxRQUFBO1lBQ04sTUFBTSxRQUFBO1lBQ04sU0FBUyxXQUFBO1NBQ1YsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gscUNBQVUsR0FBVixVQUFXLE1BQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLGtCQUFrQixDQUFDLDZCQUE2QixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQ2pFLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILG1DQUFRLEdBQVIsVUFDRSxNQUFjLEVBQ2QsTUFBYyxFQUNkLFdBQW1CLEVBQ25CLFFBQWdCO1FBRWhCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFdBQVcsQ0FBQyxZQUFZLENBQUM7WUFDM0IsTUFBTSxRQUFBO1lBQ04sTUFBTSxRQUFBO1lBQ04sV0FBVyxhQUFBO1lBQ1gsUUFBUSxVQUFBO1NBQ1QsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gscUNBQVUsR0FBVixVQUNFLE1BQWMsRUFDZCxNQUFjLEVBQ2QsUUFBMEQ7UUFINUQsaUJBZUM7UUFWQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztZQUN2QixLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxXQUFXLENBQUMsWUFBWSxDQUFDO2dCQUMzQixNQUFNLFFBQUE7Z0JBQ04sTUFBTSxRQUFBO2dCQUNOLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVztnQkFDaEMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRO2FBQzNCLENBQUMsQ0FDSCxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsc0NBQVcsR0FBWCxVQUFZLE1BQWMsRUFBRSxNQUFjLEVBQUUsV0FBbUI7UUFDN0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksV0FBVyxDQUFDLGVBQWUsQ0FBQztZQUM5QixNQUFNLFFBQUE7WUFDTixNQUFNLFFBQUE7WUFDTixLQUFLLEVBQUUsS0FBRyxXQUFhO1NBQ3hCLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCxzQ0FBVyxHQUFYLFVBQ0UsTUFBYyxFQUNkLE1BQWMsRUFDZCxXQUFtQixFQUNuQixRQUFnQjtRQUVoQixJQUFJLFFBQVEsR0FBRyxDQUFDLEVBQUU7WUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksV0FBVyxDQUFDLGVBQWUsQ0FBQztnQkFDOUIsTUFBTSxRQUFBO2dCQUNOLE1BQU0sUUFBQTtnQkFDTixLQUFLLEVBQUUsS0FBRyxXQUFhO2dCQUN2QixHQUFHLEVBQUUsUUFBUTthQUNkLENBQUMsQ0FDSCxDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztTQUMvQztJQUNILENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILG1DQUFRLEdBQVIsVUFBUyxNQUFjLEVBQUUsV0FBbUI7UUFDMUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUNKLGtCQUFrQixDQUFDLDJCQUEyQixDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FDcEUsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILHNDQUFXLEdBQVgsVUFBWSxNQUFjLEVBQUUsTUFBYyxFQUFFLEtBQWE7UUFDdkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUkscUJBQXFCLENBQUMsY0FBYyxDQUFDO1lBQ3ZDLE1BQU0sUUFBQTtZQUNOLE1BQU0sUUFBQTtZQUNOLEtBQUssT0FBQTtTQUNOLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gscUNBQVUsR0FBVixVQUFXLE1BQWMsRUFBRSxNQUFjO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLHFCQUFxQixDQUFDLFVBQVUsQ0FBQztZQUNuQyxNQUFNLFFBQUE7WUFDTixNQUFNLFFBQUE7U0FDUCxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7O2dCQTNRNEIsS0FBSzs7SUFEdkIsZ0JBQWdCO1FBRDVCLFVBQVUsRUFBRTtPQUNBLGdCQUFnQixDQTZRNUI7SUFBRCx1QkFBQztDQUFBLEFBN1FELElBNlFDO1NBN1FZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFTVBUWSwgT2JzZXJ2YWJsZSwgdGltZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IE9yZGVyRW50cnkgfSBmcm9tICcuLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBQcm9jZXNzZXNMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlL3V0aWxzL3Byb2Nlc3Nlcy1sb2FkZXIvcHJvY2Vzc2VzLWxvYWRlci1zdGF0ZSc7XG5pbXBvcnQgKiBhcyBEZXByZWNhdGVkQ2FydEFjdGlvbnMgZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9jYXJ0LmFjdGlvbic7XG5pbXBvcnQgeyBDYXJ0QWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoTXVsdGlDYXJ0IH0gZnJvbSAnLi4vc3RvcmUvbXVsdGktY2FydC1zdGF0ZSc7XG5pbXBvcnQgeyBNdWx0aUNhcnRTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTXVsdGlDYXJ0U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoTXVsdGlDYXJ0Pikge31cblxuICAvKipcbiAgICogUmV0dXJucyBjYXJ0IGZyb20gc3RvcmUgYXMgYW4gb2JzZXJ2YWJsZVxuICAgKlxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqL1xuICBnZXRDYXJ0KGNhcnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYXJ0PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChNdWx0aUNhcnRTZWxlY3RvcnMuZ2V0Q2FydFNlbGVjdG9yRmFjdG9yeShjYXJ0SWQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBjYXJ0IGVudGl0eSBmcm9tIHN0b3JlIChjYXJ0IHdpdGggbG9hZGluZywgZXJyb3IsIHN1Y2Nlc3MgZmxhZ3MpIGFzIGFuIG9ic2VydmFibGVcbiAgICpcbiAgICogQHBhcmFtIGNhcnRJZFxuICAgKi9cbiAgZ2V0Q2FydEVudGl0eShjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8UHJvY2Vzc2VzTG9hZGVyU3RhdGU8Q2FydD4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KE11bHRpQ2FydFNlbGVjdG9ycy5nZXRDYXJ0RW50aXR5U2VsZWN0b3JGYWN0b3J5KGNhcnRJZCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgd2hlbiB0aGVyZSBhcmUgbm8gb3BlcmF0aW9ucyBvbiB0aGF0IGluIHByb2dyZXNzIGFuZCBpdCBpcyBub3QgY3VycmVudGx5IGxvYWRpbmdcbiAgICpcbiAgICogQHBhcmFtIGNhcnRJZFxuICAgKi9cbiAgaXNTdGFibGUoY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KE11bHRpQ2FydFNlbGVjdG9ycy5nZXRDYXJ0SXNTdGFibGVTZWxlY3RvckZhY3RvcnkoY2FydElkKSksXG4gICAgICAvLyBXZSBkaXNwYXRjaCBhIGxvdCBvZiBhY3Rpb25zIGp1c3QgYWZ0ZXIgZmluaXNoaW5nIHNvbWUgcHJvY2VzcyBvciBsb2FkaW5nLCBzbyB3ZSB3YW50IHRoaXMgZmxhZyBub3QgdG8gZmxpY2tlci5cbiAgICAgIC8vIFRoaXMgZmxpY2tlcmluZyBzaG91bGQgb25seSBiZSBhdm9pZGVkIHdoZW4gc3dpdGNoaW5nIGZyb20gZmFsc2UgdG8gdHJ1ZVxuICAgICAgLy8gU3RhcnQgb2YgbG9hZGluZyBzaG91bGQgYmUgc2hvd2VkIGluc3RhbnRseSAobm8gZGVib3VuY2UpXG4gICAgICAvLyBFeHRyYSBhY3Rpb25zIGFyZSBvbmx5IGRpc3BhdGNoZWQgYWZ0ZXIgc29tZSBsb2FkaW5nXG4gICAgICBkZWJvdW5jZSgoaXNTdGFibGUpID0+IChpc1N0YWJsZSA/IHRpbWVyKDApIDogRU1QVFkpKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNpbXBsZSByYW5kb20gdGVtcCBjYXJ0IGlkIGdlbmVyYXRvclxuICAgKi9cbiAgcHJpdmF0ZSBnZW5lcmF0ZVRlbXBDYXJ0SWQoKTogc3RyaW5nIHtcbiAgICBjb25zdCBwc2V1ZG9VdWlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDkpO1xuICAgIHJldHVybiBgdGVtcC0ke3BzZXVkb1V1aWR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgb3IgbWVyZ2UgY2FydFxuICAgKlxuICAgKiBAcGFyYW0gcGFyYW1zIE9iamVjdCB3aXRoIHVzZXJJZCwgb2xkQ2FydElkLCB0b01lcmdlQ2FydEd1aWQgYW5kIGV4dHJhRGF0YVxuICAgKi9cbiAgY3JlYXRlQ2FydCh7XG4gICAgdXNlcklkLFxuICAgIG9sZENhcnRJZCxcbiAgICB0b01lcmdlQ2FydEd1aWQsXG4gICAgZXh0cmFEYXRhLFxuICB9OiB7XG4gICAgdXNlcklkOiBzdHJpbmc7XG4gICAgb2xkQ2FydElkPzogc3RyaW5nO1xuICAgIHRvTWVyZ2VDYXJ0R3VpZD86IHN0cmluZztcbiAgICBleHRyYURhdGE/OiBhbnk7XG4gIH0pOiBPYnNlcnZhYmxlPFByb2Nlc3Nlc0xvYWRlclN0YXRlPENhcnQ+PiB7XG4gICAgLy8gdG8gc3VwcG9ydCBjcmVhdGluZyBtdWx0aXBsZSBjYXJ0cyBhdCB0aGUgc2FtZSB0aW1lIHdlIG5lZWQgdG8gdXNlIGRpZmZlcmVudCBlbnRpdHkgZm9yIGV2ZXJ5IHByb2Nlc3NcbiAgICAvLyBzaW1wbGUgcmFuZG9tIHV1aWQgZ2VuZXJhdG9yIGlzIHVzZWQgaGVyZSBmb3IgZW50aXR5IG5hbWVzXG4gICAgY29uc3QgdGVtcENhcnRJZCA9IHRoaXMuZ2VuZXJhdGVUZW1wQ2FydElkKCk7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DcmVhdGVDYXJ0KHtcbiAgICAgICAgZXh0cmFEYXRhLFxuICAgICAgICB1c2VySWQsXG4gICAgICAgIG9sZENhcnRJZCxcbiAgICAgICAgdG9NZXJnZUNhcnRHdWlkLFxuICAgICAgICB0ZW1wQ2FydElkLFxuICAgICAgfSlcbiAgICApO1xuICAgIHJldHVybiB0aGlzLmdldENhcnRFbnRpdHkodGVtcENhcnRJZCk7XG4gIH1cblxuICAvKipcbiAgICogTWVyZ2UgcHJvdmlkZWQgY2FydCB0byBjdXJyZW50IHVzZXIgY2FydFxuICAgKlxuICAgKiBAcGFyYW0gcGFyYW1zIE9iamVjdCB3aXRoIHVzZXJJZCwgY2FydElkIGFuZCBleHRyYURhdGFcbiAgICovXG4gIG1lcmdlVG9DdXJyZW50Q2FydCh7IHVzZXJJZCwgY2FydElkLCBleHRyYURhdGEgfSkge1xuICAgIGNvbnN0IHRlbXBDYXJ0SWQgPSB0aGlzLmdlbmVyYXRlVGVtcENhcnRJZCgpO1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLk1lcmdlQ2FydCh7XG4gICAgICAgIHVzZXJJZCxcbiAgICAgICAgY2FydElkLFxuICAgICAgICBleHRyYURhdGEsXG4gICAgICAgIHRlbXBDYXJ0SWQsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZCBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSBwYXJhbXMgT2JqZWN0IHdpdGggdXNlcklkLCBjYXJ0SWQgYW5kIGV4dHJhRGF0YVxuICAgKi9cbiAgbG9hZENhcnQoe1xuICAgIGNhcnRJZCxcbiAgICB1c2VySWQsXG4gICAgZXh0cmFEYXRhLFxuICB9OiB7XG4gICAgY2FydElkOiBzdHJpbmc7XG4gICAgdXNlcklkOiBzdHJpbmc7XG4gICAgZXh0cmFEYXRhPzogYW55O1xuICB9KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkQ2FydCh7XG4gICAgICAgIHVzZXJJZCxcbiAgICAgICAgY2FydElkLFxuICAgICAgICBleHRyYURhdGEsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNhcnQgZW50cmllcyBhcyBhbiBvYnNlcnZhYmxlXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICovXG4gIGdldEVudHJpZXMoY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnlbXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoTXVsdGlDYXJ0U2VsZWN0b3JzLmdldENhcnRFbnRyaWVzU2VsZWN0b3JGYWN0b3J5KGNhcnRJZCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgZW50cnkgdG8gY2FydFxuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICogQHBhcmFtIHByb2R1Y3RDb2RlXG4gICAqIEBwYXJhbSBxdWFudGl0eVxuICAgKi9cbiAgYWRkRW50cnkoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgcHJvZHVjdENvZGU6IHN0cmluZyxcbiAgICBxdWFudGl0eTogbnVtYmVyXG4gICk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQ2FydEFjdGlvbnMuQ2FydEFkZEVudHJ5KHtcbiAgICAgICAgdXNlcklkLFxuICAgICAgICBjYXJ0SWQsXG4gICAgICAgIHByb2R1Y3RDb2RlLFxuICAgICAgICBxdWFudGl0eSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgbXVsdGlwbGUgZW50cmllcyB0byBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIGNhcnRJZFxuICAgKiBAcGFyYW0gcHJvZHVjdHMgQXJyYXkgd2l0aCBpdGVtcyAocHJvZHVjdENvZGUgYW5kIHF1YW50aXR5KVxuICAgKi9cbiAgYWRkRW50cmllcyhcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBwcm9kdWN0czogQXJyYXk8eyBwcm9kdWN0Q29kZTogc3RyaW5nOyBxdWFudGl0eTogbnVtYmVyIH0+XG4gICk6IHZvaWQge1xuICAgIHByb2R1Y3RzLmZvckVhY2goKHByb2R1Y3QpID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0QWRkRW50cnkoe1xuICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQsXG4gICAgICAgICAgcHJvZHVjdENvZGU6IHByb2R1Y3QucHJvZHVjdENvZGUsXG4gICAgICAgICAgcXVhbnRpdHk6IHByb2R1Y3QucXVhbnRpdHksXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBlbnRyeSBmcm9tIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqIEBwYXJhbSBlbnRyeU51bWJlclxuICAgKi9cbiAgcmVtb3ZlRW50cnkodXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nLCBlbnRyeU51bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0UmVtb3ZlRW50cnkoe1xuICAgICAgICB1c2VySWQsXG4gICAgICAgIGNhcnRJZCxcbiAgICAgICAgZW50cnk6IGAke2VudHJ5TnVtYmVyfWAsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGVudHJ5IGluIGNhcnQuIEZvciBxdWFudGl0eSA9IDAgaXQgcmVtb3ZlcyBlbnRyeVxuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICogQHBhcmFtIGVudHJ5TnVtYmVyXG4gICAqIEBwYXJhbSBxdWFudGl0eVxuICAgKi9cbiAgdXBkYXRlRW50cnkoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgZW50cnlOdW1iZXI6IG51bWJlcixcbiAgICBxdWFudGl0eTogbnVtYmVyXG4gICk6IHZvaWQge1xuICAgIGlmIChxdWFudGl0eSA+IDApIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0VXBkYXRlRW50cnkoe1xuICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQsXG4gICAgICAgICAgZW50cnk6IGAke2VudHJ5TnVtYmVyfWAsXG4gICAgICAgICAgcXR5OiBxdWFudGl0eSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlRW50cnkodXNlcklkLCBjYXJ0SWQsIGVudHJ5TnVtYmVyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNwZWNpZmljIGVudHJ5IGZyb20gY2FydFxuICAgKlxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqIEBwYXJhbSBwcm9kdWN0Q29kZVxuICAgKi9cbiAgZ2V0RW50cnkoY2FydElkOiBzdHJpbmcsIHByb2R1Y3RDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnkgfCBudWxsPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChcbiAgICAgICAgTXVsdGlDYXJ0U2VsZWN0b3JzLmdldENhcnRFbnRyeVNlbGVjdG9yRmFjdG9yeShjYXJ0SWQsIHByb2R1Y3RDb2RlKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQXNzaWduIGVtYWlsIHRvIHRoZSBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gZW1haWxcbiAgICovXG4gIGFzc2lnbkVtYWlsKGNhcnRJZDogc3RyaW5nLCB1c2VySWQ6IHN0cmluZywgZW1haWw6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkFkZEVtYWlsVG9DYXJ0KHtcbiAgICAgICAgdXNlcklkLFxuICAgICAgICBjYXJ0SWQsXG4gICAgICAgIGVtYWlsLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKi9cbiAgZGVsZXRlQ2FydChjYXJ0SWQ6IHN0cmluZywgdXNlcklkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5EZWxldGVDYXJ0KHtcbiAgICAgICAgdXNlcklkLFxuICAgICAgICBjYXJ0SWQsXG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==