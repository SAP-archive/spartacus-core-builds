/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fromBaseSite from '../actions/base-site.action';
/** @type {?} */
export const initialState = {
    details: {},
    activeSite: '',
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state = initialState, action) {
    switch (action.type) {
        case fromBaseSite.LOAD_BASE_SITE_SUCCESS: {
            return Object.assign({}, state, { details: action.payload });
        }
        case fromBaseSite.SET_ACTIVE_BASE_SITE: {
            return Object.assign({}, state, { activeSite: action.payload });
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zaXRlLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L3N0b3JlL3JlZHVjZXJzL2Jhc2Utc2l0ZS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssWUFBWSxNQUFNLDZCQUE2QixDQUFDOztBQUc1RCxNQUFNLE9BQU8sWUFBWSxHQUFrQjtJQUN6QyxPQUFPLEVBQUUsRUFBRTtJQUNYLFVBQVUsRUFBRSxFQUFFO0NBQ2Y7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BQW1DO0lBRW5DLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQ3hDLHlCQUNLLEtBQUssSUFDUixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sSUFDdkI7U0FDSDtRQUVELEtBQUssWUFBWSxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDdEMseUJBQ0ssS0FBSyxJQUNSLFVBQVUsRUFBRSxNQUFNLENBQUMsT0FBTyxJQUMxQjtTQUNIO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcm9tQmFzZVNpdGUgZnJvbSAnLi4vYWN0aW9ucy9iYXNlLXNpdGUuYWN0aW9uJztcbmltcG9ydCB7IEJhc2VTaXRlU3RhdGUgfSBmcm9tICcuLi9zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IEJhc2VTaXRlU3RhdGUgPSB7XG4gIGRldGFpbHM6IHt9LFxuICBhY3RpdmVTaXRlOiAnJyxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBmcm9tQmFzZVNpdGUuQmFzZVNpdGVBY3Rpb25cbik6IEJhc2VTaXRlU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBmcm9tQmFzZVNpdGUuTE9BRF9CQVNFX1NJVEVfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGRldGFpbHM6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21CYXNlU2l0ZS5TRVRfQUNUSVZFX0JBU0VfU0lURToge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFjdGl2ZVNpdGU6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=