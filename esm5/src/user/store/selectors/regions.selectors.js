/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getUserState } from './feature.selector';
import { loaderValueSelector, loaderLoadingSelector, loaderSuccessSelector, } from '../../../state/utils/loader/loader.selectors';
var ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.regions; };
/** @type {?} */
export var getRegionsLoaderState = createSelector(getUserState, (ɵ0));
var ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
function (state) {
    return loaderValueSelector(state).entities;
};
/** @type {?} */
export var getAllRegions = createSelector(getRegionsLoaderState, (ɵ1));
var ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return loaderValueSelector(state).country; };
/** @type {?} */
export var getRegionsCountry = createSelector(getRegionsLoaderState, (ɵ2));
var ɵ3 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return loaderLoadingSelector(state); };
/** @type {?} */
export var getRegionsLoading = createSelector(getRegionsLoaderState, (ɵ3));
var ɵ4 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return loaderSuccessSelector(state); };
/** @type {?} */
export var getRegionsLoaded = createSelector(getRegionsLoaderState, (ɵ4));
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaW9ucy5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9zZWxlY3RvcnMvcmVnaW9ucy5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBb0IsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRy9ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdsRCxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLHFCQUFxQixFQUNyQixxQkFBcUIsR0FDdEIsTUFBTSw4Q0FBOEMsQ0FBQzs7Ozs7QUFPcEQsVUFBQyxLQUFnQixJQUFLLE9BQUEsS0FBSyxDQUFDLE9BQU8sRUFBYixDQUFhOztBQUxyQyxNQUFNLEtBQU8scUJBQXFCLEdBRzlCLGNBQWMsQ0FDaEIsWUFBWSxPQUViOzs7OztBQU9DLFVBQUMsS0FBZ0M7SUFDL0IsT0FBTyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUM7QUFDN0MsQ0FBQzs7QUFQSCxNQUFNLEtBQU8sYUFBYSxHQUd0QixjQUFjLENBQ2hCLHFCQUFxQixPQUl0Qjs7Ozs7QUFPQyxVQUFDLEtBQWdDLElBQUssT0FBQSxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQWxDLENBQWtDOztBQUwxRSxNQUFNLEtBQU8saUJBQWlCLEdBRzFCLGNBQWMsQ0FDaEIscUJBQXFCLE9BRXRCOzs7OztBQU9DLFVBQUMsS0FBZ0MsSUFBSyxPQUFBLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxFQUE1QixDQUE0Qjs7QUFMcEUsTUFBTSxLQUFPLGlCQUFpQixHQUcxQixjQUFjLENBQ2hCLHFCQUFxQixPQUV0Qjs7Ozs7QUFPQyxVQUFDLEtBQWdDLElBQUssT0FBQSxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsRUFBNUIsQ0FBNEI7O0FBTHBFLE1BQU0sS0FBTyxnQkFBZ0IsR0FHekIsY0FBYyxDQUNoQixxQkFBcUIsT0FFdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZW1vaXplZFNlbGVjdG9yLCBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgVXNlclN0YXRlLCBSZWdpb25zU3RhdGUsIFN0YXRlV2l0aFVzZXIgfSBmcm9tICcuLi91c2VyLXN0YXRlJztcbmltcG9ydCB7IGdldFVzZXJTdGF0ZSB9IGZyb20gJy4vZmVhdHVyZS5zZWxlY3Rvcic7XG5pbXBvcnQgeyBSZWdpb24gfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci1zdGF0ZSc7XG5pbXBvcnQge1xuICBsb2FkZXJWYWx1ZVNlbGVjdG9yLFxuICBsb2FkZXJMb2FkaW5nU2VsZWN0b3IsXG4gIGxvYWRlclN1Y2Nlc3NTZWxlY3Rvcixcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci5zZWxlY3RvcnMnO1xuXG5leHBvcnQgY29uc3QgZ2V0UmVnaW9uc0xvYWRlclN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICBMb2FkZXJTdGF0ZTxSZWdpb25zU3RhdGU+XG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFVzZXJTdGF0ZSxcbiAgKHN0YXRlOiBVc2VyU3RhdGUpID0+IHN0YXRlLnJlZ2lvbnNcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRBbGxSZWdpb25zOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICBSZWdpb25bXVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRSZWdpb25zTG9hZGVyU3RhdGUsXG4gIChzdGF0ZTogTG9hZGVyU3RhdGU8UmVnaW9uc1N0YXRlPikgPT4ge1xuICAgIHJldHVybiBsb2FkZXJWYWx1ZVNlbGVjdG9yKHN0YXRlKS5lbnRpdGllcztcbiAgfVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldFJlZ2lvbnNDb3VudHJ5OiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICBzdHJpbmdcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0UmVnaW9uc0xvYWRlclN0YXRlLFxuICAoc3RhdGU6IExvYWRlclN0YXRlPFJlZ2lvbnNTdGF0ZT4pID0+IGxvYWRlclZhbHVlU2VsZWN0b3Ioc3RhdGUpLmNvdW50cnlcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRSZWdpb25zTG9hZGluZzogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoVXNlcixcbiAgYm9vbGVhblxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRSZWdpb25zTG9hZGVyU3RhdGUsXG4gIChzdGF0ZTogTG9hZGVyU3RhdGU8UmVnaW9uc1N0YXRlPikgPT4gbG9hZGVyTG9hZGluZ1NlbGVjdG9yKHN0YXRlKVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldFJlZ2lvbnNMb2FkZWQ6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFVzZXIsXG4gIGJvb2xlYW5cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0UmVnaW9uc0xvYWRlclN0YXRlLFxuICAoc3RhdGU6IExvYWRlclN0YXRlPFJlZ2lvbnNTdGF0ZT4pID0+IGxvYWRlclN1Y2Nlc3NTZWxlY3RvcihzdGF0ZSlcbik7XG4iXX0=