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
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L3N0b3JlL3NlbGVjdG9ycy9tdWx0aS1jYXJ0LnNlbGVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLGNBQWMsR0FFZixNQUFNLGFBQWEsQ0FBQztBQUdyQixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUVqRyxPQUFPLEVBQ0wsaUNBQWlDLEVBQ2pDLHNCQUFzQixFQUN0QixrQ0FBa0MsR0FDbkMsTUFBTSxnRkFBZ0YsQ0FBQztBQUV4RixPQUFPLEVBRUwsa0JBQWtCLEdBRW5CLE1BQU0scUJBQXFCLENBQUM7O0FBRTdCLE1BQU0sS0FBTyxpQkFBaUIsR0FHMUIscUJBQXFCLENBQWlCLGtCQUFrQixDQUFDOzs7OztBQU8zRCxVQUFDLEtBQXFCLElBQUssT0FBQSxLQUFLLENBQUMsS0FBSyxFQUFYLENBQVc7O0FBTHhDLE1BQU0sS0FBTyxvQkFBb0IsR0FHN0IsY0FBYyxDQUNoQixpQkFBaUIsT0FFbEI7O0FBRUQsTUFBTSxLQUFPLDRCQUE0Qjs7OztBQUFHLFVBQzFDLE1BQWM7SUFFZCxPQUFPLGNBQWMsQ0FDbkIsb0JBQW9COzs7O0lBQ3BCLFVBQUMsS0FBdUM7UUFDdEMsT0FBQSxrQ0FBa0MsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO0lBQWpELENBQWlELEVBQ3BELENBQUM7QUFDSixDQUFDLENBQUE7O0FBRUQsTUFBTSxLQUFPLHNCQUFzQjs7OztBQUFHLFVBQ3BDLE1BQWM7SUFFZCxPQUFPLGNBQWMsQ0FDbkIsb0JBQW9COzs7O0lBQ3BCLFVBQUMsS0FBdUM7UUFDdEMsT0FBQSxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO0lBQWxDLENBQWtDLEVBQ3JDLENBQUM7QUFDSixDQUFDLENBQUE7O0FBRUQsTUFBTSxLQUFPLDhCQUE4Qjs7OztBQUFHLFVBQzVDLE1BQWM7SUFFZCxPQUFPLGNBQWMsQ0FDbkIsb0JBQW9COzs7O0lBQ3BCLFVBQUMsS0FBdUM7UUFDdEMsT0FBQSxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO0lBQXJDLENBQXFDLEVBQ3hDLENBQUM7QUFDSixDQUFDLENBQUE7O0FBRUQsTUFBTSxLQUFPLHlDQUF5Qzs7OztBQUFHLFVBQ3ZELE1BQWM7SUFFZCxPQUFPLGNBQWMsQ0FDbkIsb0JBQW9COzs7O0lBQ3BCLFVBQUMsS0FBdUM7UUFDdEMsT0FBQSxpQ0FBaUMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO0lBQWhELENBQWdELEVBQ25ELENBQUM7QUFDSixDQUFDLENBQUE7O0FBRUQsTUFBTSxLQUFPLDZCQUE2Qjs7OztBQUFHLFVBQzNDLE1BQWM7SUFFZCxPQUFPLGNBQWMsQ0FDbkIsc0JBQXNCLENBQUMsTUFBTSxDQUFDOzs7O0lBQzlCLFVBQUMsS0FBVztRQUNWLE9BQU8sS0FBSyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNyRCxDQUFDLEVBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQTs7QUFFRCxNQUFNLEtBQU8sMkJBQTJCOzs7OztBQUFHLFVBQ3pDLE1BQWMsRUFDZCxXQUFtQjtJQUVuQixPQUFPLGNBQWMsQ0FDbkIsNkJBQTZCLENBQUMsTUFBTSxDQUFDOzs7O0lBQ3JDLFVBQUMsS0FBbUI7UUFDbEIsT0FBTyxLQUFLO1lBQ1YsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxXQUFXLEVBQWxDLENBQWtDLEVBQUM7WUFDekQsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNoQixDQUFDLEVBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQTs7Ozs7QUFPQyxVQUFDLEtBQXFCLElBQUssT0FBQSxLQUFLLENBQUMsTUFBTSxFQUFaLENBQVk7O0FBTHpDLE1BQU0sS0FBTyxlQUFlLEdBR3hCLGNBQWMsQ0FDaEIsaUJBQWlCLE9BRWxCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLFxuICBjcmVhdGVTZWxlY3RvcixcbiAgTWVtb2l6ZWRTZWxlY3Rvcixcbn0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgT3JkZXJFbnRyeSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IGVudGl0eVZhbHVlU2VsZWN0b3IgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktbG9hZGVyL2VudGl0eS1sb2FkZXIuc2VsZWN0b3JzJztcbmltcG9ydCB7IEVudGl0eVByb2Nlc3Nlc0xvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvZW50aXR5LXByb2Nlc3Nlcy1sb2FkZXIvZW50aXR5LXByb2Nlc3Nlcy1sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHtcbiAgZW50aXR5SGFzUGVuZGluZ1Byb2Nlc3Nlc1NlbGVjdG9yLFxuICBlbnRpdHlJc1N0YWJsZVNlbGVjdG9yLFxuICBlbnRpdHlQcm9jZXNzZXNMb2FkZXJTdGF0ZVNlbGVjdG9yLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktcHJvY2Vzc2VzLWxvYWRlci9lbnRpdHktcHJvY2Vzc2VzLWxvYWRlci5zZWxlY3RvcnMnO1xuaW1wb3J0IHsgUHJvY2Vzc2VzTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9wcm9jZXNzZXMtbG9hZGVyL3Byb2Nlc3Nlcy1sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHtcbiAgTXVsdGlDYXJ0U3RhdGUsXG4gIE1VTFRJX0NBUlRfRkVBVFVSRSxcbiAgU3RhdGVXaXRoTXVsdGlDYXJ0LFxufSBmcm9tICcuLi9tdWx0aS1jYXJ0LXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IGdldE11bHRpQ2FydFN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhNdWx0aUNhcnQsXG4gIE11bHRpQ2FydFN0YXRlXG4+ID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yPE11bHRpQ2FydFN0YXRlPihNVUxUSV9DQVJUX0ZFQVRVUkUpO1xuXG5leHBvcnQgY29uc3QgZ2V0TXVsdGlDYXJ0RW50aXRpZXM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aE11bHRpQ2FydCxcbiAgRW50aXR5UHJvY2Vzc2VzTG9hZGVyU3RhdGU8Q2FydD5cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0TXVsdGlDYXJ0U3RhdGUsXG4gIChzdGF0ZTogTXVsdGlDYXJ0U3RhdGUpID0+IHN0YXRlLmNhcnRzXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2FydEVudGl0eVNlbGVjdG9yRmFjdG9yeSA9IChcbiAgY2FydElkOiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoTXVsdGlDYXJ0LCBQcm9jZXNzZXNMb2FkZXJTdGF0ZTxDYXJ0Pj4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0TXVsdGlDYXJ0RW50aXRpZXMsXG4gICAgKHN0YXRlOiBFbnRpdHlQcm9jZXNzZXNMb2FkZXJTdGF0ZTxDYXJ0PikgPT5cbiAgICAgIGVudGl0eVByb2Nlc3Nlc0xvYWRlclN0YXRlU2VsZWN0b3Ioc3RhdGUsIGNhcnRJZClcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDYXJ0U2VsZWN0b3JGYWN0b3J5ID0gKFxuICBjYXJ0SWQ6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhNdWx0aUNhcnQsIENhcnQ+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldE11bHRpQ2FydEVudGl0aWVzLFxuICAgIChzdGF0ZTogRW50aXR5UHJvY2Vzc2VzTG9hZGVyU3RhdGU8Q2FydD4pID0+XG4gICAgICBlbnRpdHlWYWx1ZVNlbGVjdG9yKHN0YXRlLCBjYXJ0SWQpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q2FydElzU3RhYmxlU2VsZWN0b3JGYWN0b3J5ID0gKFxuICBjYXJ0SWQ6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhNdWx0aUNhcnQsIGJvb2xlYW4+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldE11bHRpQ2FydEVudGl0aWVzLFxuICAgIChzdGF0ZTogRW50aXR5UHJvY2Vzc2VzTG9hZGVyU3RhdGU8Q2FydD4pID0+XG4gICAgICBlbnRpdHlJc1N0YWJsZVNlbGVjdG9yKHN0YXRlLCBjYXJ0SWQpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q2FydEhhc1BlbmRpbmdQcm9jZXNzZXNTZWxlY3RvckZhY3RvcnkgPSAoXG4gIGNhcnRJZDogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aE11bHRpQ2FydCwgYm9vbGVhbj4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0TXVsdGlDYXJ0RW50aXRpZXMsXG4gICAgKHN0YXRlOiBFbnRpdHlQcm9jZXNzZXNMb2FkZXJTdGF0ZTxDYXJ0PikgPT5cbiAgICAgIGVudGl0eUhhc1BlbmRpbmdQcm9jZXNzZXNTZWxlY3RvcihzdGF0ZSwgY2FydElkKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldENhcnRFbnRyaWVzU2VsZWN0b3JGYWN0b3J5ID0gKFxuICBjYXJ0SWQ6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhNdWx0aUNhcnQsIE9yZGVyRW50cnlbXT4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0Q2FydFNlbGVjdG9yRmFjdG9yeShjYXJ0SWQpLFxuICAgIChzdGF0ZTogQ2FydCkgPT4ge1xuICAgICAgcmV0dXJuIHN0YXRlICYmIHN0YXRlLmVudHJpZXMgPyBzdGF0ZS5lbnRyaWVzIDogW107XG4gICAgfVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldENhcnRFbnRyeVNlbGVjdG9yRmFjdG9yeSA9IChcbiAgY2FydElkOiBzdHJpbmcsXG4gIHByb2R1Y3RDb2RlOiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoTXVsdGlDYXJ0LCBPcmRlckVudHJ5PiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRDYXJ0RW50cmllc1NlbGVjdG9yRmFjdG9yeShjYXJ0SWQpLFxuICAgIChzdGF0ZTogT3JkZXJFbnRyeVtdKSA9PiB7XG4gICAgICByZXR1cm4gc3RhdGVcbiAgICAgICAgPyBzdGF0ZS5maW5kKGVudHJ5ID0+IGVudHJ5LnByb2R1Y3QuY29kZSA9PT0gcHJvZHVjdENvZGUpXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRBY3RpdmVDYXJ0SWQ6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aE11bHRpQ2FydCxcbiAgc3RyaW5nXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldE11bHRpQ2FydFN0YXRlLFxuICAoc3RhdGU6IE11bHRpQ2FydFN0YXRlKSA9PiBzdGF0ZS5hY3RpdmVcbik7XG4iXX0=