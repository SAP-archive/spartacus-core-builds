/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { loaderLoadingSelector, loaderSuccessSelector, loaderValueSelector, } from '../../../state/utils/loader/loader.selectors';
import { getUserState } from './feature.selector';
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.regions;
/** @type {?} */
export const getRegionsLoaderState = createSelector(getUserState, (ɵ0));
const ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
(state) => {
    return loaderValueSelector(state).entities;
};
/** @type {?} */
export const getAllRegions = createSelector(getRegionsLoaderState, (ɵ1));
const ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
(state) => ({
    loaded: loaderSuccessSelector(state),
    loading: loaderLoadingSelector(state),
    regions: loaderValueSelector(state).entities,
    country: loaderValueSelector(state).country,
});
/** @type {?} */
export const getRegionsDataAndLoading = createSelector(getRegionsLoaderState, (ɵ2));
const ɵ3 = /**
 * @param {?} state
 * @return {?}
 */
(state) => loaderValueSelector(state).country;
/** @type {?} */
export const getRegionsCountry = createSelector(getRegionsLoaderState, (ɵ3));
const ɵ4 = /**
 * @param {?} state
 * @return {?}
 */
(state) => loaderLoadingSelector(state);
/** @type {?} */
export const getRegionsLoading = createSelector(getRegionsLoaderState, (ɵ4));
const ɵ5 = /**
 * @param {?} state
 * @return {?}
 */
(state) => loaderSuccessSelector(state);
/** @type {?} */
export const getRegionsLoaded = createSelector(getRegionsLoaderState, (ɵ5));
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaW9ucy5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9zZWxlY3RvcnMvcmVnaW9ucy5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBRy9ELE9BQU8sRUFDTCxxQkFBcUIsRUFDckIscUJBQXFCLEVBQ3JCLG1CQUFtQixHQUNwQixNQUFNLDhDQUE4QyxDQUFDO0FBRXRELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7QUFPaEQsQ0FBQyxLQUFnQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTzs7QUFMckMsTUFBTSxPQUFPLHFCQUFxQixHQUc5QixjQUFjLENBQ2hCLFlBQVksT0FFYjs7Ozs7QUFPQyxDQUFDLEtBQWdDLEVBQUUsRUFBRTtJQUNuQyxPQUFPLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQztBQUM3QyxDQUFDOztBQVBILE1BQU0sT0FBTyxhQUFhLEdBR3RCLGNBQWMsQ0FDaEIscUJBQXFCLE9BSXRCOzs7OztBQVlDLENBQUMsS0FBZ0MsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNyQyxNQUFNLEVBQUUscUJBQXFCLENBQUMsS0FBSyxDQUFDO0lBQ3BDLE9BQU8sRUFBRSxxQkFBcUIsQ0FBQyxLQUFLLENBQUM7SUFDckMsT0FBTyxFQUFFLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVE7SUFDNUMsT0FBTyxFQUFFLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU87Q0FDNUMsQ0FBQzs7QUFmSixNQUFNLE9BQU8sd0JBQXdCLEdBUWpDLGNBQWMsQ0FDaEIscUJBQXFCLE9BT3RCOzs7OztBQU9DLENBQUMsS0FBZ0MsRUFBRSxFQUFFLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTzs7QUFMMUUsTUFBTSxPQUFPLGlCQUFpQixHQUcxQixjQUFjLENBQ2hCLHFCQUFxQixPQUV0Qjs7Ozs7QUFPQyxDQUFDLEtBQWdDLEVBQUUsRUFBRSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQzs7QUFMcEUsTUFBTSxPQUFPLGlCQUFpQixHQUcxQixjQUFjLENBQ2hCLHFCQUFxQixPQUV0Qjs7Ozs7QUFPQyxDQUFDLEtBQWdDLEVBQUUsRUFBRSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQzs7QUFMcEUsTUFBTSxPQUFPLGdCQUFnQixHQUd6QixjQUFjLENBQ2hCLHFCQUFxQixPQUV0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgUmVnaW9uIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHtcbiAgbG9hZGVyTG9hZGluZ1NlbGVjdG9yLFxuICBsb2FkZXJTdWNjZXNzU2VsZWN0b3IsXG4gIGxvYWRlclZhbHVlU2VsZWN0b3IsXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXIuc2VsZWN0b3JzJztcbmltcG9ydCB7IFJlZ2lvbnNTdGF0ZSwgU3RhdGVXaXRoVXNlciwgVXNlclN0YXRlIH0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRVc2VyU3RhdGUgfSBmcm9tICcuL2ZlYXR1cmUuc2VsZWN0b3InO1xuXG5leHBvcnQgY29uc3QgZ2V0UmVnaW9uc0xvYWRlclN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICBMb2FkZXJTdGF0ZTxSZWdpb25zU3RhdGU+XG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFVzZXJTdGF0ZSxcbiAgKHN0YXRlOiBVc2VyU3RhdGUpID0+IHN0YXRlLnJlZ2lvbnNcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRBbGxSZWdpb25zOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICBSZWdpb25bXVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRSZWdpb25zTG9hZGVyU3RhdGUsXG4gIChzdGF0ZTogTG9hZGVyU3RhdGU8UmVnaW9uc1N0YXRlPikgPT4ge1xuICAgIHJldHVybiBsb2FkZXJWYWx1ZVNlbGVjdG9yKHN0YXRlKS5lbnRpdGllcztcbiAgfVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldFJlZ2lvbnNEYXRhQW5kTG9hZGluZzogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoVXNlcixcbiAge1xuICAgIGxvYWRlZDogYm9vbGVhbjtcbiAgICBsb2FkaW5nOiBib29sZWFuO1xuICAgIHJlZ2lvbnM6IFJlZ2lvbltdO1xuICAgIGNvdW50cnk6IHN0cmluZztcbiAgfVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRSZWdpb25zTG9hZGVyU3RhdGUsXG4gIChzdGF0ZTogTG9hZGVyU3RhdGU8UmVnaW9uc1N0YXRlPikgPT4gKHtcbiAgICBsb2FkZWQ6IGxvYWRlclN1Y2Nlc3NTZWxlY3RvcihzdGF0ZSksXG4gICAgbG9hZGluZzogbG9hZGVyTG9hZGluZ1NlbGVjdG9yKHN0YXRlKSxcbiAgICByZWdpb25zOiBsb2FkZXJWYWx1ZVNlbGVjdG9yKHN0YXRlKS5lbnRpdGllcyxcbiAgICBjb3VudHJ5OiBsb2FkZXJWYWx1ZVNlbGVjdG9yKHN0YXRlKS5jb3VudHJ5LFxuICB9KVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldFJlZ2lvbnNDb3VudHJ5OiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICBzdHJpbmdcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0UmVnaW9uc0xvYWRlclN0YXRlLFxuICAoc3RhdGU6IExvYWRlclN0YXRlPFJlZ2lvbnNTdGF0ZT4pID0+IGxvYWRlclZhbHVlU2VsZWN0b3Ioc3RhdGUpLmNvdW50cnlcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRSZWdpb25zTG9hZGluZzogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoVXNlcixcbiAgYm9vbGVhblxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRSZWdpb25zTG9hZGVyU3RhdGUsXG4gIChzdGF0ZTogTG9hZGVyU3RhdGU8UmVnaW9uc1N0YXRlPikgPT4gbG9hZGVyTG9hZGluZ1NlbGVjdG9yKHN0YXRlKVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldFJlZ2lvbnNMb2FkZWQ6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFVzZXIsXG4gIGJvb2xlYW5cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0UmVnaW9uc0xvYWRlclN0YXRlLFxuICAoc3RhdGU6IExvYWRlclN0YXRlPFJlZ2lvbnNTdGF0ZT4pID0+IGxvYWRlclN1Y2Nlc3NTZWxlY3RvcihzdGF0ZSlcbik7XG4iXX0=