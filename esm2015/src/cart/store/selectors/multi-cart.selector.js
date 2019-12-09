/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createFeatureSelector, createSelector, } from '@ngrx/store';
import { entityStateSelector, entityValueSelector, } from '../../../state/utils/entity-loader/entity-loader.selectors';
import { MULTI_CART_FEATURE, } from '../multi-cart-state';
/** @type {?} */
export const getMultiCartState = createFeatureSelector(MULTI_CART_FEATURE);
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.carts;
/** @type {?} */
export const getMultiCartEntities = createSelector(getMultiCartState, (ɵ0));
/** @type {?} */
export const getCartEntitySelectorFactory = (/**
 * @param {?} cartId
 * @return {?}
 */
(cartId) => {
    return createSelector(getMultiCartEntities, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => entityStateSelector(state, cartId)));
});
/** @type {?} */
export const getCartSelectorFactory = (/**
 * @param {?} cartId
 * @return {?}
 */
(cartId) => {
    return createSelector(getMultiCartEntities, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => entityValueSelector(state, cartId)));
});
/** @type {?} */
export const getCartEntriesSelectorFactory = (/**
 * @param {?} cartId
 * @return {?}
 */
(cartId) => {
    return createSelector(getMultiCartEntities, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => {
        /** @type {?} */
        const entityValue = entityValueSelector(state, cartId);
        return entityValue && entityValue.entries ? entityValue.entries : [];
    }));
});
/** @type {?} */
export const getCartEntrySelectorFactory = (/**
 * @param {?} cartId
 * @param {?} productCode
 * @return {?}
 */
(cartId, productCode) => {
    return createSelector(getMultiCartEntities, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => {
        /** @type {?} */
        const entityValue = entityValueSelector(state, cartId);
        return entityValue && entityValue.entries
            ? entityValue.entries.find((/**
             * @param {?} entry
             * @return {?}
             */
            entry => entry.product.code === productCode))
            : null;
    }));
});
const ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.active;
/** @type {?} */
export const getActiveCartId = createSelector(getMultiCartState, (ɵ1));
const ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.wishList;
/** @type {?} */
export const getWishListId = createSelector(getMultiCartState, (ɵ2));
const ɵ3 = /**
 * @param {?} state
 * @return {?}
 */
(state) => entityStateSelector(state.carts, state.wishList).loading;
/** @type {?} */
export const getWishListLoading = createSelector(getMultiCartState, (ɵ3));
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L3N0b3JlL3NlbGVjdG9ycy9tdWx0aS1jYXJ0LnNlbGVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLGNBQWMsR0FFZixNQUFNLGFBQWEsQ0FBQztBQUlyQixPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLG1CQUFtQixHQUNwQixNQUFNLDREQUE0RCxDQUFDO0FBRXBFLE9BQU8sRUFFTCxrQkFBa0IsR0FFbkIsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFN0IsTUFBTSxPQUFPLGlCQUFpQixHQUcxQixxQkFBcUIsQ0FBaUIsa0JBQWtCLENBQUM7Ozs7O0FBTzNELENBQUMsS0FBcUIsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUs7O0FBTHhDLE1BQU0sT0FBTyxvQkFBb0IsR0FHN0IsY0FBYyxDQUNoQixpQkFBaUIsT0FFbEI7O0FBRUQsTUFBTSxPQUFPLDRCQUE0Qjs7OztBQUFHLENBQzFDLE1BQWMsRUFDMkMsRUFBRTtJQUMzRCxPQUFPLGNBQWMsQ0FDbkIsb0JBQW9COzs7O0lBQ3BCLENBQUMsS0FBOEIsRUFBRSxFQUFFLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUN2RSxDQUFDO0FBQ0osQ0FBQyxDQUFBOztBQUVELE1BQU0sT0FBTyxzQkFBc0I7Ozs7QUFBRyxDQUNwQyxNQUFjLEVBQzhCLEVBQUU7SUFDOUMsT0FBTyxjQUFjLENBQ25CLG9CQUFvQjs7OztJQUNwQixDQUFDLEtBQThCLEVBQUUsRUFBRSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsRUFDdkUsQ0FBQztBQUNKLENBQUMsQ0FBQTs7QUFFRCxNQUFNLE9BQU8sNkJBQTZCOzs7O0FBQUcsQ0FDM0MsTUFBYyxFQUNzQyxFQUFFO0lBQ3RELE9BQU8sY0FBYyxDQUNuQixvQkFBb0I7Ozs7SUFDcEIsQ0FBQyxLQUE4QixFQUFFLEVBQUU7O2NBQzNCLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO1FBQ3RELE9BQU8sV0FBVyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN2RSxDQUFDLEVBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQTs7QUFFRCxNQUFNLE9BQU8sMkJBQTJCOzs7OztBQUFHLENBQ3pDLE1BQWMsRUFDZCxXQUFtQixFQUMrQixFQUFFO0lBQ3BELE9BQU8sY0FBYyxDQUNuQixvQkFBb0I7Ozs7SUFDcEIsQ0FBQyxLQUE4QixFQUFFLEVBQUU7O2NBQzNCLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO1FBQ3RELE9BQU8sV0FBVyxJQUFJLFdBQVcsQ0FBQyxPQUFPO1lBQ3ZDLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUk7Ozs7WUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLFdBQVcsRUFBQztZQUN2RSxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ1gsQ0FBQyxFQUNGLENBQUM7QUFDSixDQUFDLENBQUE7Ozs7O0FBT0MsQ0FBQyxLQUFxQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTTs7QUFMekMsTUFBTSxPQUFPLGVBQWUsR0FHeEIsY0FBYyxDQUNoQixpQkFBaUIsT0FFbEI7Ozs7O0FBT0MsQ0FBQyxLQUFxQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUTs7QUFMM0MsTUFBTSxPQUFPLGFBQWEsR0FHdEIsY0FBYyxDQUNoQixpQkFBaUIsT0FFbEI7Ozs7O0FBSUMsQ0FBQyxLQUFxQixFQUFFLEVBQUUsQ0FDeEIsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTzs7QUFINUQsTUFBTSxPQUFPLGtCQUFrQixHQUFHLGNBQWMsQ0FDOUMsaUJBQWlCLE9BR2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLFxuICBjcmVhdGVTZWxlY3RvcixcbiAgTWVtb2l6ZWRTZWxlY3Rvcixcbn0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgT3JkZXJFbnRyeSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IEVudGl0eUxvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUnO1xuaW1wb3J0IHtcbiAgZW50aXR5U3RhdGVTZWxlY3RvcixcbiAgZW50aXR5VmFsdWVTZWxlY3Rvcixcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvZW50aXR5LWxvYWRlci9lbnRpdHktbG9hZGVyLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHtcbiAgTXVsdGlDYXJ0U3RhdGUsXG4gIE1VTFRJX0NBUlRfRkVBVFVSRSxcbiAgU3RhdGVXaXRoTXVsdGlDYXJ0LFxufSBmcm9tICcuLi9tdWx0aS1jYXJ0LXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IGdldE11bHRpQ2FydFN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhNdWx0aUNhcnQsXG4gIE11bHRpQ2FydFN0YXRlXG4+ID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yPE11bHRpQ2FydFN0YXRlPihNVUxUSV9DQVJUX0ZFQVRVUkUpO1xuXG5leHBvcnQgY29uc3QgZ2V0TXVsdGlDYXJ0RW50aXRpZXM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aE11bHRpQ2FydCxcbiAgRW50aXR5TG9hZGVyU3RhdGU8Q2FydD5cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0TXVsdGlDYXJ0U3RhdGUsXG4gIChzdGF0ZTogTXVsdGlDYXJ0U3RhdGUpID0+IHN0YXRlLmNhcnRzXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2FydEVudGl0eVNlbGVjdG9yRmFjdG9yeSA9IChcbiAgY2FydElkOiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoTXVsdGlDYXJ0LCBMb2FkZXJTdGF0ZTxDYXJ0Pj4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0TXVsdGlDYXJ0RW50aXRpZXMsXG4gICAgKHN0YXRlOiBFbnRpdHlMb2FkZXJTdGF0ZTxDYXJ0PikgPT4gZW50aXR5U3RhdGVTZWxlY3RvcihzdGF0ZSwgY2FydElkKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldENhcnRTZWxlY3RvckZhY3RvcnkgPSAoXG4gIGNhcnRJZDogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aE11bHRpQ2FydCwgQ2FydD4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0TXVsdGlDYXJ0RW50aXRpZXMsXG4gICAgKHN0YXRlOiBFbnRpdHlMb2FkZXJTdGF0ZTxDYXJ0PikgPT4gZW50aXR5VmFsdWVTZWxlY3RvcihzdGF0ZSwgY2FydElkKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldENhcnRFbnRyaWVzU2VsZWN0b3JGYWN0b3J5ID0gKFxuICBjYXJ0SWQ6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhNdWx0aUNhcnQsIE9yZGVyRW50cnlbXT4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0TXVsdGlDYXJ0RW50aXRpZXMsXG4gICAgKHN0YXRlOiBFbnRpdHlMb2FkZXJTdGF0ZTxDYXJ0PikgPT4ge1xuICAgICAgY29uc3QgZW50aXR5VmFsdWUgPSBlbnRpdHlWYWx1ZVNlbGVjdG9yKHN0YXRlLCBjYXJ0SWQpO1xuICAgICAgcmV0dXJuIGVudGl0eVZhbHVlICYmIGVudGl0eVZhbHVlLmVudHJpZXMgPyBlbnRpdHlWYWx1ZS5lbnRyaWVzIDogW107XG4gICAgfVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldENhcnRFbnRyeVNlbGVjdG9yRmFjdG9yeSA9IChcbiAgY2FydElkOiBzdHJpbmcsXG4gIHByb2R1Y3RDb2RlOiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoTXVsdGlDYXJ0LCBPcmRlckVudHJ5PiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRNdWx0aUNhcnRFbnRpdGllcyxcbiAgICAoc3RhdGU6IEVudGl0eUxvYWRlclN0YXRlPENhcnQ+KSA9PiB7XG4gICAgICBjb25zdCBlbnRpdHlWYWx1ZSA9IGVudGl0eVZhbHVlU2VsZWN0b3Ioc3RhdGUsIGNhcnRJZCk7XG4gICAgICByZXR1cm4gZW50aXR5VmFsdWUgJiYgZW50aXR5VmFsdWUuZW50cmllc1xuICAgICAgICA/IGVudGl0eVZhbHVlLmVudHJpZXMuZmluZChlbnRyeSA9PiBlbnRyeS5wcm9kdWN0LmNvZGUgPT09IHByb2R1Y3RDb2RlKVxuICAgICAgICA6IG51bGw7XG4gICAgfVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEFjdGl2ZUNhcnRJZDogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoTXVsdGlDYXJ0LFxuICBzdHJpbmdcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0TXVsdGlDYXJ0U3RhdGUsXG4gIChzdGF0ZTogTXVsdGlDYXJ0U3RhdGUpID0+IHN0YXRlLmFjdGl2ZVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldFdpc2hMaXN0SWQ6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aE11bHRpQ2FydCxcbiAgc3RyaW5nXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldE11bHRpQ2FydFN0YXRlLFxuICAoc3RhdGU6IE11bHRpQ2FydFN0YXRlKSA9PiBzdGF0ZS53aXNoTGlzdFxuKTtcblxuZXhwb3J0IGNvbnN0IGdldFdpc2hMaXN0TG9hZGluZyA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRNdWx0aUNhcnRTdGF0ZSxcbiAgKHN0YXRlOiBNdWx0aUNhcnRTdGF0ZSkgPT5cbiAgICBlbnRpdHlTdGF0ZVNlbGVjdG9yKHN0YXRlLmNhcnRzLCBzdGF0ZS53aXNoTGlzdCkubG9hZGluZ1xuKTtcbiJdfQ==