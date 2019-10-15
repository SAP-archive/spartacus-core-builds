/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getProductsState } from './feature.selector';
var ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.references; };
/** @type {?} */
export var getProductReferencesState = createSelector(getProductsState, (ɵ0));
/** @type {?} */
export var getSelectedProductReferencesFactory = (/**
 * @param {?} productCode
 * @param {?} referenceType
 * @return {?}
 */
function (productCode, referenceType) {
    return createSelector(getProductReferencesState, (/**
     * @param {?} referenceTypeData
     * @return {?}
     */
    function (referenceTypeData) {
        if (referenceTypeData.productCode === productCode) {
            if (!!referenceTypeData.list) {
                if (referenceType) {
                    return referenceTypeData.list.filter((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) { return item.referenceType === referenceType; }));
                }
                return referenceTypeData.list;
            }
            else {
                return [];
            }
        }
    }));
});
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3N0b3JlL3NlbGVjdG9ycy9wcm9kdWN0LXJlZmVyZW5jZXMuc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFvQixNQUFNLGFBQWEsQ0FBQztBQU8vRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7QUFPcEQsVUFBQyxLQUFvQixJQUFLLE9BQUEsS0FBSyxDQUFDLFVBQVUsRUFBaEIsQ0FBZ0I7O0FBTDVDLE1BQU0sS0FBTyx5QkFBeUIsR0FHbEMsY0FBYyxDQUNoQixnQkFBZ0IsT0FFakI7O0FBRUQsTUFBTSxLQUFPLG1DQUFtQzs7Ozs7QUFBRyxVQUNqRCxXQUFtQixFQUNuQixhQUFxQjtJQUVyQixPQUFPLGNBQWMsQ0FDbkIseUJBQXlCOzs7O0lBQ3pCLFVBQUEsaUJBQWlCO1FBQ2YsSUFBSSxpQkFBaUIsQ0FBQyxXQUFXLEtBQUssV0FBVyxFQUFFO1lBQ2pELElBQUksQ0FBQyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRTtnQkFDNUIsSUFBSSxhQUFhLEVBQUU7b0JBQ2pCLE9BQU8saUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU07Ozs7b0JBQ2xDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLGFBQWEsS0FBSyxhQUFhLEVBQXBDLENBQW9DLEVBQzdDLENBQUM7aUJBQ0g7Z0JBRUQsT0FBTyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7YUFDL0I7aUJBQU07Z0JBQ0wsT0FBTyxFQUFFLENBQUM7YUFDWDtTQUNGO0lBQ0gsQ0FBQyxFQUNGLENBQUM7QUFDSixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFByb2R1Y3RSZWZlcmVuY2UgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7XG4gIFByb2R1Y3RSZWZlcmVuY2VzU3RhdGUsXG4gIFByb2R1Y3RzU3RhdGUsXG4gIFN0YXRlV2l0aFByb2R1Y3QsXG59IGZyb20gJy4uL3Byb2R1Y3Qtc3RhdGUnO1xuaW1wb3J0IHsgZ2V0UHJvZHVjdHNTdGF0ZSB9IGZyb20gJy4vZmVhdHVyZS5zZWxlY3Rvcic7XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0UmVmZXJlbmNlc1N0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhQcm9kdWN0LFxuICBQcm9kdWN0UmVmZXJlbmNlc1N0YXRlXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFByb2R1Y3RzU3RhdGUsXG4gIChzdGF0ZTogUHJvZHVjdHNTdGF0ZSkgPT4gc3RhdGUucmVmZXJlbmNlc1xuKTtcblxuZXhwb3J0IGNvbnN0IGdldFNlbGVjdGVkUHJvZHVjdFJlZmVyZW5jZXNGYWN0b3J5ID0gKFxuICBwcm9kdWN0Q29kZTogc3RyaW5nLFxuICByZWZlcmVuY2VUeXBlOiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoUHJvZHVjdCwgUHJvZHVjdFJlZmVyZW5jZVtdPiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRQcm9kdWN0UmVmZXJlbmNlc1N0YXRlLFxuICAgIHJlZmVyZW5jZVR5cGVEYXRhID0+IHtcbiAgICAgIGlmIChyZWZlcmVuY2VUeXBlRGF0YS5wcm9kdWN0Q29kZSA9PT0gcHJvZHVjdENvZGUpIHtcbiAgICAgICAgaWYgKCEhcmVmZXJlbmNlVHlwZURhdGEubGlzdCkge1xuICAgICAgICAgIGlmIChyZWZlcmVuY2VUeXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVmZXJlbmNlVHlwZURhdGEubGlzdC5maWx0ZXIoXG4gICAgICAgICAgICAgIGl0ZW0gPT4gaXRlbS5yZWZlcmVuY2VUeXBlID09PSByZWZlcmVuY2VUeXBlXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiByZWZlcmVuY2VUeXBlRGF0YS5saXN0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgKTtcbn07XG4iXX0=