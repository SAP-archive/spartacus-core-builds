/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createFeatureSelector, createSelector, } from '@ngrx/store';
import { ROUTING_FEATURE } from '../routing-state';
/** @type {?} */
export const getRouterFeatureState = createFeatureSelector(ROUTING_FEATURE);
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
state => state.router;
/** @type {?} */
export const getRouterState = createSelector(getRouterFeatureState, (ɵ0));
const ɵ1 = /**
 * @param {?} routingState
 * @return {?}
 */
(routingState) => (routingState.state && routingState.state.context) || { id: '' };
/** @type {?} */
export const getPageContext = createSelector(getRouterState, (ɵ1));
const ɵ2 = /**
 * @param {?} routingState
 * @return {?}
 */
(routingState) => routingState.nextState && routingState.nextState.context;
/** @type {?} */
export const getNextPageContext = createSelector(getRouterState, (ɵ2));
const ɵ3 = /**
 * @param {?} context
 * @return {?}
 */
context => !!context;
/** @type {?} */
export const isNavigating = createSelector(getNextPageContext, (ɵ3));
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy5zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9yb3V0aW5nL3N0b3JlL3NlbGVjdG9ycy9yb3V0aW5nLnNlbGVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLGNBQWMsR0FFZixNQUFNLGFBQWEsQ0FBQztBQUVyQixPQUFPLEVBQWUsZUFBZSxFQUFTLE1BQU0sa0JBQWtCLENBQUM7O0FBRXZFLE1BQU0sT0FBTyxxQkFBcUIsR0FHOUIscUJBQXFCLENBQVEsZUFBZSxDQUFDOzs7OztBQU8vQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNOztBQUx2QixNQUFNLE9BQU8sY0FBYyxHQUd2QixjQUFjLENBQ2hCLHFCQUFxQixPQUV0Qjs7Ozs7QUFPQyxDQUFDLFlBQXlCLEVBQUUsRUFBRSxDQUM1QixDQUFDLFlBQVksQ0FBQyxLQUFLLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7O0FBTnBFLE1BQU0sT0FBTyxjQUFjLEdBR3ZCLGNBQWMsQ0FDaEIsY0FBYyxPQUdmOzs7OztBQU9DLENBQUMsWUFBeUIsRUFBRSxFQUFFLENBQzVCLFlBQVksQ0FBQyxTQUFTLElBQUksWUFBWSxDQUFDLFNBQVMsQ0FBQyxPQUFPOztBQU41RCxNQUFNLE9BQU8sa0JBQWtCLEdBRzNCLGNBQWMsQ0FDaEIsY0FBYyxPQUdmOzs7OztBQUlDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU87O0FBRnRCLE1BQU0sT0FBTyxZQUFZLEdBQW1DLGNBQWMsQ0FDeEUsa0JBQWtCLE9BRW5CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLFxuICBjcmVhdGVTZWxlY3RvcixcbiAgTWVtb2l6ZWRTZWxlY3Rvcixcbn0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi9tb2RlbHMvcGFnZS1jb250ZXh0Lm1vZGVsJztcbmltcG9ydCB7IFJvdXRlclN0YXRlLCBST1VUSU5HX0ZFQVRVUkUsIFN0YXRlIH0gZnJvbSAnLi4vcm91dGluZy1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBnZXRSb3V0ZXJGZWF0dXJlU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIGFueSxcbiAgU3RhdGVcbj4gPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8U3RhdGU+KFJPVVRJTkdfRkVBVFVSRSk7XG5cbmV4cG9ydCBjb25zdCBnZXRSb3V0ZXJTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgYW55LFxuICBSb3V0ZXJTdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRSb3V0ZXJGZWF0dXJlU3RhdGUsXG4gIHN0YXRlID0+IHN0YXRlLnJvdXRlclxuKTtcblxuZXhwb3J0IGNvbnN0IGdldFBhZ2VDb250ZXh0OiBNZW1vaXplZFNlbGVjdG9yPFxuICBhbnksXG4gIFBhZ2VDb250ZXh0XG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFJvdXRlclN0YXRlLFxuICAocm91dGluZ1N0YXRlOiBSb3V0ZXJTdGF0ZSkgPT5cbiAgICAocm91dGluZ1N0YXRlLnN0YXRlICYmIHJvdXRpbmdTdGF0ZS5zdGF0ZS5jb250ZXh0KSB8fCB7IGlkOiAnJyB9XG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0TmV4dFBhZ2VDb250ZXh0OiBNZW1vaXplZFNlbGVjdG9yPFxuICBhbnksXG4gIFBhZ2VDb250ZXh0XG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFJvdXRlclN0YXRlLFxuICAocm91dGluZ1N0YXRlOiBSb3V0ZXJTdGF0ZSkgPT5cbiAgICByb3V0aW5nU3RhdGUubmV4dFN0YXRlICYmIHJvdXRpbmdTdGF0ZS5uZXh0U3RhdGUuY29udGV4dFxuKTtcblxuZXhwb3J0IGNvbnN0IGlzTmF2aWdhdGluZzogTWVtb2l6ZWRTZWxlY3RvcjxhbnksIGJvb2xlYW4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldE5leHRQYWdlQ29udGV4dCxcbiAgY29udGV4dCA9PiAhIWNvbnRleHRcbik7XG4iXX0=