/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getProductsState } from './feature.selector';
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.references;
/** @type {?} */
export const getProductReferencesState = createSelector(getProductsState, (ɵ0));
/** @type {?} */
export const getSelectedProductReferencesFactory = (/**
 * @param {?} productCode
 * @return {?}
 */
(productCode) => {
    return createSelector(getProductReferencesState, (/**
     * @param {?} referenceTypeData
     * @return {?}
     */
    referenceTypeData => {
        if (referenceTypeData.productCode === productCode) {
            return !!referenceTypeData.list ? referenceTypeData.list : [];
        }
    }));
});
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3N0b3JlL3NlbGVjdG9ycy9wcm9kdWN0LXJlZmVyZW5jZXMuc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFvQixNQUFNLGFBQWEsQ0FBQztBQU8vRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7QUFPcEQsQ0FBQyxLQUFvQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVTs7QUFMNUMsTUFBTSxPQUFPLHlCQUF5QixHQUdsQyxjQUFjLENBQ2hCLGdCQUFnQixPQUVqQjs7QUFFRCxNQUFNLE9BQU8sbUNBQW1DOzs7O0FBQUcsQ0FDakQsV0FBbUIsRUFDcUMsRUFBRTtJQUMxRCxPQUFPLGNBQWMsQ0FDbkIseUJBQXlCOzs7O0lBQ3pCLGlCQUFpQixDQUFDLEVBQUU7UUFDbEIsSUFBSSxpQkFBaUIsQ0FBQyxXQUFXLEtBQUssV0FBVyxFQUFFO1lBQ2pELE9BQU8sQ0FBQyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7U0FDL0Q7SUFDSCxDQUFDLEVBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdFJlZmVyZW5jZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHtcbiAgUHJvZHVjdFJlZmVyZW5jZXNTdGF0ZSxcbiAgUHJvZHVjdHNTdGF0ZSxcbiAgU3RhdGVXaXRoUHJvZHVjdCxcbn0gZnJvbSAnLi4vcHJvZHVjdC1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRQcm9kdWN0c1N0YXRlIH0gZnJvbSAnLi9mZWF0dXJlLnNlbGVjdG9yJztcblxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RSZWZlcmVuY2VzU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFByb2R1Y3QsXG4gIFByb2R1Y3RSZWZlcmVuY2VzU3RhdGVcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0UHJvZHVjdHNTdGF0ZSxcbiAgKHN0YXRlOiBQcm9kdWN0c1N0YXRlKSA9PiBzdGF0ZS5yZWZlcmVuY2VzXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0ZWRQcm9kdWN0UmVmZXJlbmNlc0ZhY3RvcnkgPSAoXG4gIHByb2R1Y3RDb2RlOiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoUHJvZHVjdCwgUHJvZHVjdFJlZmVyZW5jZVtdPiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRQcm9kdWN0UmVmZXJlbmNlc1N0YXRlLFxuICAgIHJlZmVyZW5jZVR5cGVEYXRhID0+IHtcbiAgICAgIGlmIChyZWZlcmVuY2VUeXBlRGF0YS5wcm9kdWN0Q29kZSA9PT0gcHJvZHVjdENvZGUpIHtcbiAgICAgICAgcmV0dXJuICEhcmVmZXJlbmNlVHlwZURhdGEubGlzdCA/IHJlZmVyZW5jZVR5cGVEYXRhLmxpc3QgOiBbXTtcbiAgICAgIH1cbiAgICB9XG4gICk7XG59O1xuIl19