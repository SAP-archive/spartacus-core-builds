/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getUserState } from './feature.selector';
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.countries;
/** @type {?} */
export const getDeliveryCountriesState = createSelector(getUserState, (ɵ0));
const ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.entities;
/** @type {?} */
export const getDeliveryCountriesEntites = createSelector(getDeliveryCountriesState, (ɵ1));
const ɵ2 = /**
 * @param {?} entites
 * @return {?}
 */
entites => Object.keys(entites).map((/**
 * @param {?} isocode
 * @return {?}
 */
isocode => entites[isocode]));
/** @type {?} */
export const getAllDeliveryCountries = createSelector(getDeliveryCountriesEntites, (ɵ2));
/** @type {?} */
export const countrySelectorFactory = (/**
 * @param {?} isocode
 * @return {?}
 */
(isocode) => createSelector(getDeliveryCountriesEntites, (/**
 * @param {?} entities
 * @return {?}
 */
entities => (Object.keys(entities).length !== 0 ? entities[isocode] : null))));
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnktY291bnRyaWVzLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL3NlbGVjdG9ycy9kZWxpdmVyeS1jb3VudHJpZXMuc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFvQixNQUFNLGFBQWEsQ0FBQztBQVEvRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7O0FBT2hELENBQUMsS0FBZ0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVM7O0FBTHZDLE1BQU0sT0FBTyx5QkFBeUIsR0FHbEMsY0FBYyxDQUNoQixZQUFZLE9BRWI7Ozs7O0FBT0MsQ0FBQyxLQUE2QixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUTs7QUFMbkQsTUFBTSxPQUFPLDJCQUEyQixHQUdwQyxjQUFjLENBQ2hCLHlCQUF5QixPQUUxQjs7Ozs7QUFPQyxPQUFPLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRzs7OztBQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFDOztBQUxsRSxNQUFNLE9BQU8sdUJBQXVCLEdBR2hDLGNBQWMsQ0FDaEIsMkJBQTJCLE9BRTVCOztBQUVELE1BQU0sT0FBTyxzQkFBc0I7Ozs7QUFBRyxDQUNwQyxPQUFlLEVBQzJCLEVBQUUsQ0FDNUMsY0FBYyxDQUNaLDJCQUEyQjs7OztBQUMzQixRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUM1RSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBDb3VudHJ5IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQge1xuICBEZWxpdmVyeUNvdW50cmllc1N0YXRlLFxuICBEZWxpdmVyeUNvdW50cnlFbnRpdGllcyxcbiAgU3RhdGVXaXRoVXNlcixcbiAgVXNlclN0YXRlLFxufSBmcm9tICcuLi91c2VyLXN0YXRlJztcbmltcG9ydCB7IGdldFVzZXJTdGF0ZSB9IGZyb20gJy4vZmVhdHVyZS5zZWxlY3Rvcic7XG5cbmV4cG9ydCBjb25zdCBnZXREZWxpdmVyeUNvdW50cmllc1N0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICBEZWxpdmVyeUNvdW50cmllc1N0YXRlXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFVzZXJTdGF0ZSxcbiAgKHN0YXRlOiBVc2VyU3RhdGUpID0+IHN0YXRlLmNvdW50cmllc1xuKTtcblxuZXhwb3J0IGNvbnN0IGdldERlbGl2ZXJ5Q291bnRyaWVzRW50aXRlczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoVXNlcixcbiAgRGVsaXZlcnlDb3VudHJ5RW50aXRpZXNcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0RGVsaXZlcnlDb3VudHJpZXNTdGF0ZSxcbiAgKHN0YXRlOiBEZWxpdmVyeUNvdW50cmllc1N0YXRlKSA9PiBzdGF0ZS5lbnRpdGllc1xuKTtcblxuZXhwb3J0IGNvbnN0IGdldEFsbERlbGl2ZXJ5Q291bnRyaWVzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICBDb3VudHJ5W11cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0RGVsaXZlcnlDb3VudHJpZXNFbnRpdGVzLFxuICBlbnRpdGVzID0+IE9iamVjdC5rZXlzKGVudGl0ZXMpLm1hcChpc29jb2RlID0+IGVudGl0ZXNbaXNvY29kZV0pXG4pO1xuXG5leHBvcnQgY29uc3QgY291bnRyeVNlbGVjdG9yRmFjdG9yeSA9IChcbiAgaXNvY29kZTogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aFVzZXIsIENvdW50cnk+ID0+XG4gIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldERlbGl2ZXJ5Q291bnRyaWVzRW50aXRlcyxcbiAgICBlbnRpdGllcyA9PiAoT2JqZWN0LmtleXMoZW50aXRpZXMpLmxlbmd0aCAhPT0gMCA/IGVudGl0aWVzW2lzb2NvZGVdIDogbnVsbClcbiAgKTtcbiJdfQ==