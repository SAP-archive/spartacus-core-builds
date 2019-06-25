/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getSiteContextState } from './site-context.selector';
/** @type {?} */
const currenciesEntitiesSelector = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.entities);
const ɵ0 = currenciesEntitiesSelector;
/** @type {?} */
const activeCurrencySelector = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.activeCurrency);
const ɵ1 = activeCurrencySelector;
const ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.currencies;
/** @type {?} */
export const getCurrenciesState = createSelector(getSiteContextState, (ɵ2));
/** @type {?} */
export const getCurrenciesEntities = createSelector(getCurrenciesState, currenciesEntitiesSelector);
/** @type {?} */
export const getActiveCurrency = createSelector(getCurrenciesState, activeCurrencySelector);
const ɵ3 = /**
 * @param {?} entities
 * @return {?}
 */
entities => {
    return entities
        ? Object.keys(entities).map((/**
         * @param {?} isocode
         * @return {?}
         */
        isocode => entities[isocode]))
        : null;
};
/** @type {?} */
export const getAllCurrencies = createSelector(getCurrenciesEntities, (ɵ3));
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY2llcy5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L3N0b3JlL3NlbGVjdG9ycy9jdXJyZW5jaWVzLnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFRL0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O01BRXhELDBCQUEwQjs7OztBQUFHLENBQUMsS0FBc0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQTs7O01BQ3ZFLHNCQUFzQjs7OztBQUFHLENBQUMsS0FBc0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQTs7Ozs7O0FBTzdFLENBQUMsS0FBdUIsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVU7O0FBTC9DLE1BQU0sT0FBTyxrQkFBa0IsR0FHM0IsY0FBYyxDQUNoQixtQkFBbUIsT0FFcEI7O0FBRUQsTUFBTSxPQUFPLHFCQUFxQixHQUc5QixjQUFjLENBQ2hCLGtCQUFrQixFQUNsQiwwQkFBMEIsQ0FDM0I7O0FBRUQsTUFBTSxPQUFPLGlCQUFpQixHQUcxQixjQUFjLENBQ2hCLGtCQUFrQixFQUNsQixzQkFBc0IsQ0FDdkI7Ozs7O0FBT0MsUUFBUSxDQUFDLEVBQUU7SUFDVCxPQUFPLFFBQVE7UUFDYixDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUM7UUFDekQsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUNYLENBQUM7O0FBVEgsTUFBTSxPQUFPLGdCQUFnQixHQUd6QixjQUFjLENBQ2hCLHFCQUFxQixPQU10QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQ3VycmVuY3kgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7XG4gIEN1cnJlbmNpZXNTdGF0ZSxcbiAgQ3VycmVuY3lFbnRpdGllcyxcbiAgU2l0ZUNvbnRleHRTdGF0ZSxcbiAgU3RhdGVXaXRoU2l0ZUNvbnRleHQsXG59IGZyb20gJy4uL3N0YXRlJztcbmltcG9ydCB7IGdldFNpdGVDb250ZXh0U3RhdGUgfSBmcm9tICcuL3NpdGUtY29udGV4dC5zZWxlY3Rvcic7XG5cbmNvbnN0IGN1cnJlbmNpZXNFbnRpdGllc1NlbGVjdG9yID0gKHN0YXRlOiBDdXJyZW5jaWVzU3RhdGUpID0+IHN0YXRlLmVudGl0aWVzO1xuY29uc3QgYWN0aXZlQ3VycmVuY3lTZWxlY3RvciA9IChzdGF0ZTogQ3VycmVuY2llc1N0YXRlKSA9PiBzdGF0ZS5hY3RpdmVDdXJyZW5jeTtcblxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbmNpZXNTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoU2l0ZUNvbnRleHQsXG4gIEN1cnJlbmNpZXNTdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRTaXRlQ29udGV4dFN0YXRlLFxuICAoc3RhdGU6IFNpdGVDb250ZXh0U3RhdGUpID0+IHN0YXRlLmN1cnJlbmNpZXNcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRDdXJyZW5jaWVzRW50aXRpZXM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFNpdGVDb250ZXh0LFxuICBDdXJyZW5jeUVudGl0aWVzXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldEN1cnJlbmNpZXNTdGF0ZSxcbiAgY3VycmVuY2llc0VudGl0aWVzU2VsZWN0b3Jcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRBY3RpdmVDdXJyZW5jeTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoU2l0ZUNvbnRleHQsXG4gIHN0cmluZ1xuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDdXJyZW5jaWVzU3RhdGUsXG4gIGFjdGl2ZUN1cnJlbmN5U2VsZWN0b3Jcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRBbGxDdXJyZW5jaWVzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhTaXRlQ29udGV4dCxcbiAgQ3VycmVuY3lbXVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDdXJyZW5jaWVzRW50aXRpZXMsXG4gIGVudGl0aWVzID0+IHtcbiAgICByZXR1cm4gZW50aXRpZXNcbiAgICAgID8gT2JqZWN0LmtleXMoZW50aXRpZXMpLm1hcChpc29jb2RlID0+IGVudGl0aWVzW2lzb2NvZGVdKVxuICAgICAgOiBudWxsO1xuICB9XG4pO1xuIl19