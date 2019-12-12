/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createFeatureSelector, createSelector, } from '@ngrx/store';
import { entityValueSelector } from '../../../state/utils/entity-loader/entity-loader.selectors';
import { entityHasPendingProcessesSelector, entityIsStableSelector, entityProcessesLoaderStateSelector, } from '../../../state/utils/entity-processes-loader/entity-processes-loader.selectors';
import { MULTI_CART_FEATURE, } from '../multi-cart-state';
/** @type {?} */
export var getMultiCartState = createFeatureSelector(MULTI_CART_FEATURE);
var ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.carts; };
/** @type {?} */
export var getMultiCartEntities = createSelector(getMultiCartState, (ɵ0));
/** @type {?} */
export var getCartEntitySelectorFactory = (/**
 * @param {?} cartId
 * @return {?}
 */
function (cartId) {
    return createSelector(getMultiCartEntities, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        return entityProcessesLoaderStateSelector(state, cartId);
    }));
});
/** @type {?} */
export var getCartSelectorFactory = (/**
 * @param {?} cartId
 * @return {?}
 */
function (cartId) {
    return createSelector(getMultiCartEntities, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        return entityValueSelector(state, cartId);
    }));
});
/** @type {?} */
export var getCartIsStableSelectorFactory = (/**
 * @param {?} cartId
 * @return {?}
 */
function (cartId) {
    return createSelector(getMultiCartEntities, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        return entityIsStableSelector(state, cartId);
    }));
});
/** @type {?} */
export var getCartHasPendingProcessesSelectorFactory = (/**
 * @param {?} cartId
 * @return {?}
 */
function (cartId) {
    return createSelector(getMultiCartEntities, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        return entityHasPendingProcessesSelector(state, cartId);
    }));
});
/** @type {?} */
export var getCartEntriesSelectorFactory = (/**
 * @param {?} cartId
 * @return {?}
 */
function (cartId) {
    return createSelector(getCartSelectorFactory(cartId), (/**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        return state && state.entries ? state.entries : [];
    }));
});
/** @type {?} */
export var getCartEntrySelectorFactory = (/**
 * @param {?} cartId
 * @param {?} productCode
 * @return {?}
 */
function (cartId, productCode) {
    return createSelector(getCartEntriesSelectorFactory(cartId), (/**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        return state
            ? state.find((/**
             * @param {?} entry
             * @return {?}
             */
            function (entry) { return entry.product.code === productCode; }))
            : undefined;
    }));
});
var ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.active; };
/** @type {?} */
export var getActiveCartId = createSelector(getMultiCartState, (ɵ1));
var ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.wishList; };
/** @type {?} */
export var getWishListId = createSelector(getMultiCartState, (ɵ2));
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L3N0b3JlL3NlbGVjdG9ycy9tdWx0aS1jYXJ0LnNlbGVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLGNBQWMsR0FFZixNQUFNLGFBQWEsQ0FBQztBQUdyQixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUVqRyxPQUFPLEVBQ0wsaUNBQWlDLEVBQ2pDLHNCQUFzQixFQUN0QixrQ0FBa0MsR0FDbkMsTUFBTSxnRkFBZ0YsQ0FBQztBQUV4RixPQUFPLEVBRUwsa0JBQWtCLEdBRW5CLE1BQU0scUJBQXFCLENBQUM7O0FBRTdCLE1BQU0sS0FBTyxpQkFBaUIsR0FHMUIscUJBQXFCLENBQWlCLGtCQUFrQixDQUFDOzs7OztBQU8zRCxVQUFDLEtBQXFCLElBQUssT0FBQSxLQUFLLENBQUMsS0FBSyxFQUFYLENBQVc7O0FBTHhDLE1BQU0sS0FBTyxvQkFBb0IsR0FHN0IsY0FBYyxDQUNoQixpQkFBaUIsT0FFbEI7O0FBRUQsTUFBTSxLQUFPLDRCQUE0Qjs7OztBQUFHLFVBQzFDLE1BQWM7SUFFZCxPQUFPLGNBQWMsQ0FDbkIsb0JBQW9COzs7O0lBQ3BCLFVBQUMsS0FBdUM7UUFDdEMsT0FBQSxrQ0FBa0MsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO0lBQWpELENBQWlELEVBQ3BELENBQUM7QUFDSixDQUFDLENBQUE7O0FBRUQsTUFBTSxLQUFPLHNCQUFzQjs7OztBQUFHLFVBQ3BDLE1BQWM7SUFFZCxPQUFPLGNBQWMsQ0FDbkIsb0JBQW9COzs7O0lBQ3BCLFVBQUMsS0FBdUM7UUFDdEMsT0FBQSxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO0lBQWxDLENBQWtDLEVBQ3JDLENBQUM7QUFDSixDQUFDLENBQUE7O0FBRUQsTUFBTSxLQUFPLDhCQUE4Qjs7OztBQUFHLFVBQzVDLE1BQWM7SUFFZCxPQUFPLGNBQWMsQ0FDbkIsb0JBQW9COzs7O0lBQ3BCLFVBQUMsS0FBdUM7UUFDdEMsT0FBQSxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO0lBQXJDLENBQXFDLEVBQ3hDLENBQUM7QUFDSixDQUFDLENBQUE7O0FBRUQsTUFBTSxLQUFPLHlDQUF5Qzs7OztBQUFHLFVBQ3ZELE1BQWM7SUFFZCxPQUFPLGNBQWMsQ0FDbkIsb0JBQW9COzs7O0lBQ3BCLFVBQUMsS0FBdUM7UUFDdEMsT0FBQSxpQ0FBaUMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO0lBQWhELENBQWdELEVBQ25ELENBQUM7QUFDSixDQUFDLENBQUE7O0FBRUQsTUFBTSxLQUFPLDZCQUE2Qjs7OztBQUFHLFVBQzNDLE1BQWM7SUFFZCxPQUFPLGNBQWMsQ0FDbkIsc0JBQXNCLENBQUMsTUFBTSxDQUFDOzs7O0lBQzlCLFVBQUMsS0FBVztRQUNWLE9BQU8sS0FBSyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNyRCxDQUFDLEVBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQTs7QUFFRCxNQUFNLEtBQU8sMkJBQTJCOzs7OztBQUFHLFVBQ3pDLE1BQWMsRUFDZCxXQUFtQjtJQUVuQixPQUFPLGNBQWMsQ0FDbkIsNkJBQTZCLENBQUMsTUFBTSxDQUFDOzs7O0lBQ3JDLFVBQUMsS0FBbUI7UUFDbEIsT0FBTyxLQUFLO1lBQ1YsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxXQUFXLEVBQWxDLENBQWtDLEVBQUM7WUFDekQsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNoQixDQUFDLEVBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQTs7Ozs7QUFPQyxVQUFDLEtBQXFCLElBQUssT0FBQSxLQUFLLENBQUMsTUFBTSxFQUFaLENBQVk7O0FBTHpDLE1BQU0sS0FBTyxlQUFlLEdBR3hCLGNBQWMsQ0FDaEIsaUJBQWlCLE9BRWxCOzs7OztBQU9DLFVBQUMsS0FBcUIsSUFBSyxPQUFBLEtBQUssQ0FBQyxRQUFRLEVBQWQsQ0FBYzs7QUFMM0MsTUFBTSxLQUFPLGFBQWEsR0FHdEIsY0FBYyxDQUNoQixpQkFBaUIsT0FFbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjcmVhdGVGZWF0dXJlU2VsZWN0b3IsXG4gIGNyZWF0ZVNlbGVjdG9yLFxuICBNZW1vaXplZFNlbGVjdG9yLFxufSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBPcmRlckVudHJ5IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgZW50aXR5VmFsdWVTZWxlY3RvciB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1sb2FkZXIvZW50aXR5LWxvYWRlci5zZWxlY3RvcnMnO1xuaW1wb3J0IHsgRW50aXR5UHJvY2Vzc2VzTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktcHJvY2Vzc2VzLWxvYWRlci9lbnRpdHktcHJvY2Vzc2VzLWxvYWRlci1zdGF0ZSc7XG5pbXBvcnQge1xuICBlbnRpdHlIYXNQZW5kaW5nUHJvY2Vzc2VzU2VsZWN0b3IsXG4gIGVudGl0eUlzU3RhYmxlU2VsZWN0b3IsXG4gIGVudGl0eVByb2Nlc3Nlc0xvYWRlclN0YXRlU2VsZWN0b3IsXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1wcm9jZXNzZXMtbG9hZGVyL2VudGl0eS1wcm9jZXNzZXMtbG9hZGVyLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBQcm9jZXNzZXNMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL3Byb2Nlc3Nlcy1sb2FkZXIvcHJvY2Vzc2VzLWxvYWRlci1zdGF0ZSc7XG5pbXBvcnQge1xuICBNdWx0aUNhcnRTdGF0ZSxcbiAgTVVMVElfQ0FSVF9GRUFUVVJFLFxuICBTdGF0ZVdpdGhNdWx0aUNhcnQsXG59IGZyb20gJy4uL211bHRpLWNhcnQtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgZ2V0TXVsdGlDYXJ0U3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aE11bHRpQ2FydCxcbiAgTXVsdGlDYXJ0U3RhdGVcbj4gPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8TXVsdGlDYXJ0U3RhdGU+KE1VTFRJX0NBUlRfRkVBVFVSRSk7XG5cbmV4cG9ydCBjb25zdCBnZXRNdWx0aUNhcnRFbnRpdGllczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoTXVsdGlDYXJ0LFxuICBFbnRpdHlQcm9jZXNzZXNMb2FkZXJTdGF0ZTxDYXJ0PlxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRNdWx0aUNhcnRTdGF0ZSxcbiAgKHN0YXRlOiBNdWx0aUNhcnRTdGF0ZSkgPT4gc3RhdGUuY2FydHNcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRDYXJ0RW50aXR5U2VsZWN0b3JGYWN0b3J5ID0gKFxuICBjYXJ0SWQ6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhNdWx0aUNhcnQsIFByb2Nlc3Nlc0xvYWRlclN0YXRlPENhcnQ+PiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRNdWx0aUNhcnRFbnRpdGllcyxcbiAgICAoc3RhdGU6IEVudGl0eVByb2Nlc3Nlc0xvYWRlclN0YXRlPENhcnQ+KSA9PlxuICAgICAgZW50aXR5UHJvY2Vzc2VzTG9hZGVyU3RhdGVTZWxlY3RvcihzdGF0ZSwgY2FydElkKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldENhcnRTZWxlY3RvckZhY3RvcnkgPSAoXG4gIGNhcnRJZDogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aE11bHRpQ2FydCwgQ2FydD4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0TXVsdGlDYXJ0RW50aXRpZXMsXG4gICAgKHN0YXRlOiBFbnRpdHlQcm9jZXNzZXNMb2FkZXJTdGF0ZTxDYXJ0PikgPT5cbiAgICAgIGVudGl0eVZhbHVlU2VsZWN0b3Ioc3RhdGUsIGNhcnRJZClcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDYXJ0SXNTdGFibGVTZWxlY3RvckZhY3RvcnkgPSAoXG4gIGNhcnRJZDogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aE11bHRpQ2FydCwgYm9vbGVhbj4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0TXVsdGlDYXJ0RW50aXRpZXMsXG4gICAgKHN0YXRlOiBFbnRpdHlQcm9jZXNzZXNMb2FkZXJTdGF0ZTxDYXJ0PikgPT5cbiAgICAgIGVudGl0eUlzU3RhYmxlU2VsZWN0b3Ioc3RhdGUsIGNhcnRJZClcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDYXJ0SGFzUGVuZGluZ1Byb2Nlc3Nlc1NlbGVjdG9yRmFjdG9yeSA9IChcbiAgY2FydElkOiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoTXVsdGlDYXJ0LCBib29sZWFuPiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRNdWx0aUNhcnRFbnRpdGllcyxcbiAgICAoc3RhdGU6IEVudGl0eVByb2Nlc3Nlc0xvYWRlclN0YXRlPENhcnQ+KSA9PlxuICAgICAgZW50aXR5SGFzUGVuZGluZ1Byb2Nlc3Nlc1NlbGVjdG9yKHN0YXRlLCBjYXJ0SWQpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q2FydEVudHJpZXNTZWxlY3RvckZhY3RvcnkgPSAoXG4gIGNhcnRJZDogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aE11bHRpQ2FydCwgT3JkZXJFbnRyeVtdPiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRDYXJ0U2VsZWN0b3JGYWN0b3J5KGNhcnRJZCksXG4gICAgKHN0YXRlOiBDYXJ0KSA9PiB7XG4gICAgICByZXR1cm4gc3RhdGUgJiYgc3RhdGUuZW50cmllcyA/IHN0YXRlLmVudHJpZXMgOiBbXTtcbiAgICB9XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q2FydEVudHJ5U2VsZWN0b3JGYWN0b3J5ID0gKFxuICBjYXJ0SWQ6IHN0cmluZyxcbiAgcHJvZHVjdENvZGU6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhNdWx0aUNhcnQsIE9yZGVyRW50cnk+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldENhcnRFbnRyaWVzU2VsZWN0b3JGYWN0b3J5KGNhcnRJZCksXG4gICAgKHN0YXRlOiBPcmRlckVudHJ5W10pID0+IHtcbiAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgICA/IHN0YXRlLmZpbmQoZW50cnkgPT4gZW50cnkucHJvZHVjdC5jb2RlID09PSBwcm9kdWN0Q29kZSlcbiAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgfVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEFjdGl2ZUNhcnRJZDogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoTXVsdGlDYXJ0LFxuICBzdHJpbmdcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0TXVsdGlDYXJ0U3RhdGUsXG4gIChzdGF0ZTogTXVsdGlDYXJ0U3RhdGUpID0+IHN0YXRlLmFjdGl2ZVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldFdpc2hMaXN0SWQ6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aE11bHRpQ2FydCxcbiAgc3RyaW5nXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldE11bHRpQ2FydFN0YXRlLFxuICAoc3RhdGU6IE11bHRpQ2FydFN0YXRlKSA9PiBzdGF0ZS53aXNoTGlzdFxuKTtcbiJdfQ==