/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getUserState } from './feature.selector';
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.billingCountries;
/** @type {?} */
export const getBillingCountriesState = createSelector(getUserState, (ɵ0));
const ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.entities;
/** @type {?} */
export const getBillingCountriesEntites = createSelector(getBillingCountriesState, (ɵ1));
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
export const getAllBillingCountries = createSelector(getBillingCountriesEntites, (ɵ2));
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbGluZy1jb3VudHJpZXMuc2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvc2VsZWN0b3JzL2JpbGxpbmctY291bnRyaWVzLnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFRL0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7OztBQU9oRCxDQUFDLEtBQWdCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0I7O0FBTDlDLE1BQU0sT0FBTyx3QkFBd0IsR0FHakMsY0FBYyxDQUNoQixZQUFZLE9BRWI7Ozs7O0FBT0MsQ0FBQyxLQUE0QixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUTs7QUFMbEQsTUFBTSxPQUFPLDBCQUEwQixHQUduQyxjQUFjLENBQ2hCLHdCQUF3QixPQUV6Qjs7Ozs7QUFPQyxPQUFPLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRzs7OztBQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFDOztBQUxsRSxNQUFNLE9BQU8sc0JBQXNCLEdBRy9CLGNBQWMsQ0FDaEIsMEJBQTBCLE9BRTNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBDb3VudHJ5IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQge1xuICBCaWxsaW5nQ291bnRyaWVzU3RhdGUsXG4gIEJpbGxpbmdDb3VudHJ5RW50aXRpZXMsXG4gIFN0YXRlV2l0aFVzZXIsXG4gIFVzZXJTdGF0ZSxcbn0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRVc2VyU3RhdGUgfSBmcm9tICcuL2ZlYXR1cmUuc2VsZWN0b3InO1xuXG5leHBvcnQgY29uc3QgZ2V0QmlsbGluZ0NvdW50cmllc1N0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICBCaWxsaW5nQ291bnRyaWVzU3RhdGVcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0VXNlclN0YXRlLFxuICAoc3RhdGU6IFVzZXJTdGF0ZSkgPT4gc3RhdGUuYmlsbGluZ0NvdW50cmllc1xuKTtcblxuZXhwb3J0IGNvbnN0IGdldEJpbGxpbmdDb3VudHJpZXNFbnRpdGVzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICBCaWxsaW5nQ291bnRyeUVudGl0aWVzXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldEJpbGxpbmdDb3VudHJpZXNTdGF0ZSxcbiAgKHN0YXRlOiBCaWxsaW5nQ291bnRyaWVzU3RhdGUpID0+IHN0YXRlLmVudGl0aWVzXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0QWxsQmlsbGluZ0NvdW50cmllczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoVXNlcixcbiAgQ291bnRyeVtdXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldEJpbGxpbmdDb3VudHJpZXNFbnRpdGVzLFxuICBlbnRpdGVzID0+IE9iamVjdC5rZXlzKGVudGl0ZXMpLm1hcChpc29jb2RlID0+IGVudGl0ZXNbaXNvY29kZV0pXG4pO1xuIl19