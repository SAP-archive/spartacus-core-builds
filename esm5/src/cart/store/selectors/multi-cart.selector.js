/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createFeatureSelector, createSelector, } from '@ngrx/store';
import { entityStateSelector, entityValueSelector, } from '../../../state/utils/entity-loader/entity-loader.selectors';
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
    function (state) { return entityStateSelector(state, cartId); }));
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
    function (state) { return entityValueSelector(state, cartId); }));
});
/** @type {?} */
export var getCartEntriesSelectorFactory = (/**
 * @param {?} cartId
 * @return {?}
 */
function (cartId) {
    return createSelector(getMultiCartEntities, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        /** @type {?} */
        var entityValue = entityValueSelector(state, cartId);
        return entityValue && entityValue.entries ? entityValue.entries : [];
    }));
});
/** @type {?} */
export var getCartEntrySelectorFactory = (/**
 * @param {?} cartId
 * @param {?} productCode
 * @return {?}
 */
function (cartId, productCode) {
    return createSelector(getMultiCartEntities, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        /** @type {?} */
        var entityValue = entityValueSelector(state, cartId);
        return entityValue && entityValue.entries
            ? entityValue.entries.find((/**
             * @param {?} entry
             * @return {?}
             */
            function (entry) { return entry.product.code === productCode; }))
            : null;
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
var ɵ3 = /**
 * @param {?} state
 * @return {?}
 */
function (state) {
    return entityStateSelector(state.carts, state.wishList).loading;
};
/** @type {?} */
export var getWishListLoading = createSelector(getMultiCartState, (ɵ3));
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L3N0b3JlL3NlbGVjdG9ycy9tdWx0aS1jYXJ0LnNlbGVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLGNBQWMsR0FFZixNQUFNLGFBQWEsQ0FBQztBQUlyQixPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLG1CQUFtQixHQUNwQixNQUFNLDREQUE0RCxDQUFDO0FBRXBFLE9BQU8sRUFFTCxrQkFBa0IsR0FFbkIsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFN0IsTUFBTSxLQUFPLGlCQUFpQixHQUcxQixxQkFBcUIsQ0FBaUIsa0JBQWtCLENBQUM7Ozs7O0FBTzNELFVBQUMsS0FBcUIsSUFBSyxPQUFBLEtBQUssQ0FBQyxLQUFLLEVBQVgsQ0FBVzs7QUFMeEMsTUFBTSxLQUFPLG9CQUFvQixHQUc3QixjQUFjLENBQ2hCLGlCQUFpQixPQUVsQjs7QUFFRCxNQUFNLEtBQU8sNEJBQTRCOzs7O0FBQUcsVUFDMUMsTUFBYztJQUVkLE9BQU8sY0FBYyxDQUNuQixvQkFBb0I7Ozs7SUFDcEIsVUFBQyxLQUE4QixJQUFLLE9BQUEsbUJBQW1CLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFsQyxDQUFrQyxFQUN2RSxDQUFDO0FBQ0osQ0FBQyxDQUFBOztBQUVELE1BQU0sS0FBTyxzQkFBc0I7Ozs7QUFBRyxVQUNwQyxNQUFjO0lBRWQsT0FBTyxjQUFjLENBQ25CLG9CQUFvQjs7OztJQUNwQixVQUFDLEtBQThCLElBQUssT0FBQSxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEVBQWxDLENBQWtDLEVBQ3ZFLENBQUM7QUFDSixDQUFDLENBQUE7O0FBRUQsTUFBTSxLQUFPLDZCQUE2Qjs7OztBQUFHLFVBQzNDLE1BQWM7SUFFZCxPQUFPLGNBQWMsQ0FDbkIsb0JBQW9COzs7O0lBQ3BCLFVBQUMsS0FBOEI7O1lBQ3ZCLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO1FBQ3RELE9BQU8sV0FBVyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN2RSxDQUFDLEVBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQTs7QUFFRCxNQUFNLEtBQU8sMkJBQTJCOzs7OztBQUFHLFVBQ3pDLE1BQWMsRUFDZCxXQUFtQjtJQUVuQixPQUFPLGNBQWMsQ0FDbkIsb0JBQW9COzs7O0lBQ3BCLFVBQUMsS0FBOEI7O1lBQ3ZCLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO1FBQ3RELE9BQU8sV0FBVyxJQUFJLFdBQVcsQ0FBQyxPQUFPO1lBQ3ZDLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUk7Ozs7WUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLFdBQVcsRUFBbEMsQ0FBa0MsRUFBQztZQUN2RSxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ1gsQ0FBQyxFQUNGLENBQUM7QUFDSixDQUFDLENBQUE7Ozs7O0FBT0MsVUFBQyxLQUFxQixJQUFLLE9BQUEsS0FBSyxDQUFDLE1BQU0sRUFBWixDQUFZOztBQUx6QyxNQUFNLEtBQU8sZUFBZSxHQUd4QixjQUFjLENBQ2hCLGlCQUFpQixPQUVsQjs7Ozs7QUFPQyxVQUFDLEtBQXFCLElBQUssT0FBQSxLQUFLLENBQUMsUUFBUSxFQUFkLENBQWM7O0FBTDNDLE1BQU0sS0FBTyxhQUFhLEdBR3RCLGNBQWMsQ0FDaEIsaUJBQWlCLE9BRWxCOzs7OztBQUlDLFVBQUMsS0FBcUI7SUFDcEIsT0FBQSxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPO0FBQXhELENBQXdEOztBQUg1RCxNQUFNLEtBQU8sa0JBQWtCLEdBQUcsY0FBYyxDQUM5QyxpQkFBaUIsT0FHbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjcmVhdGVGZWF0dXJlU2VsZWN0b3IsXG4gIGNyZWF0ZVNlbGVjdG9yLFxuICBNZW1vaXplZFNlbGVjdG9yLFxufSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBPcmRlckVudHJ5IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgRW50aXR5TG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZSc7XG5pbXBvcnQge1xuICBlbnRpdHlTdGF0ZVNlbGVjdG9yLFxuICBlbnRpdHlWYWx1ZVNlbGVjdG9yLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktbG9hZGVyL2VudGl0eS1sb2FkZXIuc2VsZWN0b3JzJztcbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci1zdGF0ZSc7XG5pbXBvcnQge1xuICBNdWx0aUNhcnRTdGF0ZSxcbiAgTVVMVElfQ0FSVF9GRUFUVVJFLFxuICBTdGF0ZVdpdGhNdWx0aUNhcnQsXG59IGZyb20gJy4uL211bHRpLWNhcnQtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgZ2V0TXVsdGlDYXJ0U3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aE11bHRpQ2FydCxcbiAgTXVsdGlDYXJ0U3RhdGVcbj4gPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8TXVsdGlDYXJ0U3RhdGU+KE1VTFRJX0NBUlRfRkVBVFVSRSk7XG5cbmV4cG9ydCBjb25zdCBnZXRNdWx0aUNhcnRFbnRpdGllczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoTXVsdGlDYXJ0LFxuICBFbnRpdHlMb2FkZXJTdGF0ZTxDYXJ0PlxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRNdWx0aUNhcnRTdGF0ZSxcbiAgKHN0YXRlOiBNdWx0aUNhcnRTdGF0ZSkgPT4gc3RhdGUuY2FydHNcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRDYXJ0RW50aXR5U2VsZWN0b3JGYWN0b3J5ID0gKFxuICBjYXJ0SWQ6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhNdWx0aUNhcnQsIExvYWRlclN0YXRlPENhcnQ+PiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRNdWx0aUNhcnRFbnRpdGllcyxcbiAgICAoc3RhdGU6IEVudGl0eUxvYWRlclN0YXRlPENhcnQ+KSA9PiBlbnRpdHlTdGF0ZVNlbGVjdG9yKHN0YXRlLCBjYXJ0SWQpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q2FydFNlbGVjdG9yRmFjdG9yeSA9IChcbiAgY2FydElkOiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoTXVsdGlDYXJ0LCBDYXJ0PiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRNdWx0aUNhcnRFbnRpdGllcyxcbiAgICAoc3RhdGU6IEVudGl0eUxvYWRlclN0YXRlPENhcnQ+KSA9PiBlbnRpdHlWYWx1ZVNlbGVjdG9yKHN0YXRlLCBjYXJ0SWQpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q2FydEVudHJpZXNTZWxlY3RvckZhY3RvcnkgPSAoXG4gIGNhcnRJZDogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aE11bHRpQ2FydCwgT3JkZXJFbnRyeVtdPiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRNdWx0aUNhcnRFbnRpdGllcyxcbiAgICAoc3RhdGU6IEVudGl0eUxvYWRlclN0YXRlPENhcnQ+KSA9PiB7XG4gICAgICBjb25zdCBlbnRpdHlWYWx1ZSA9IGVudGl0eVZhbHVlU2VsZWN0b3Ioc3RhdGUsIGNhcnRJZCk7XG4gICAgICByZXR1cm4gZW50aXR5VmFsdWUgJiYgZW50aXR5VmFsdWUuZW50cmllcyA/IGVudGl0eVZhbHVlLmVudHJpZXMgOiBbXTtcbiAgICB9XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q2FydEVudHJ5U2VsZWN0b3JGYWN0b3J5ID0gKFxuICBjYXJ0SWQ6IHN0cmluZyxcbiAgcHJvZHVjdENvZGU6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhNdWx0aUNhcnQsIE9yZGVyRW50cnk+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldE11bHRpQ2FydEVudGl0aWVzLFxuICAgIChzdGF0ZTogRW50aXR5TG9hZGVyU3RhdGU8Q2FydD4pID0+IHtcbiAgICAgIGNvbnN0IGVudGl0eVZhbHVlID0gZW50aXR5VmFsdWVTZWxlY3RvcihzdGF0ZSwgY2FydElkKTtcbiAgICAgIHJldHVybiBlbnRpdHlWYWx1ZSAmJiBlbnRpdHlWYWx1ZS5lbnRyaWVzXG4gICAgICAgID8gZW50aXR5VmFsdWUuZW50cmllcy5maW5kKGVudHJ5ID0+IGVudHJ5LnByb2R1Y3QuY29kZSA9PT0gcHJvZHVjdENvZGUpXG4gICAgICAgIDogbnVsbDtcbiAgICB9XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QWN0aXZlQ2FydElkOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhNdWx0aUNhcnQsXG4gIHN0cmluZ1xuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRNdWx0aUNhcnRTdGF0ZSxcbiAgKHN0YXRlOiBNdWx0aUNhcnRTdGF0ZSkgPT4gc3RhdGUuYWN0aXZlXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0V2lzaExpc3RJZDogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoTXVsdGlDYXJ0LFxuICBzdHJpbmdcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0TXVsdGlDYXJ0U3RhdGUsXG4gIChzdGF0ZTogTXVsdGlDYXJ0U3RhdGUpID0+IHN0YXRlLndpc2hMaXN0XG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0V2lzaExpc3RMb2FkaW5nID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldE11bHRpQ2FydFN0YXRlLFxuICAoc3RhdGU6IE11bHRpQ2FydFN0YXRlKSA9PlxuICAgIGVudGl0eVN0YXRlU2VsZWN0b3Ioc3RhdGUuY2FydHMsIHN0YXRlLndpc2hMaXN0KS5sb2FkaW5nXG4pO1xuIl19