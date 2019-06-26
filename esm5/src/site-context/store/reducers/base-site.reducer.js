/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { SiteContextActions } from '../actions/index';
/** @type {?} */
export var initialState = {
    details: {},
    activeSite: '',
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case SiteContextActions.LOAD_BASE_SITE_SUCCESS: {
            return tslib_1.__assign({}, state, { details: action.payload });
        }
        case SiteContextActions.SET_ACTIVE_BASE_SITE: {
            return tslib_1.__assign({}, state, { activeSite: action.payload });
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zaXRlLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L3N0b3JlL3JlZHVjZXJzL2Jhc2Utc2l0ZS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBR3RELE1BQU0sS0FBTyxZQUFZLEdBQWtCO0lBQ3pDLE9BQU8sRUFBRSxFQUFFO0lBQ1gsVUFBVSxFQUFFLEVBQUU7Q0FDZjs7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FDckIsS0FBb0IsRUFDcEIsTUFBeUM7SUFEekMsc0JBQUEsRUFBQSxvQkFBb0I7SUFHcEIsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssa0JBQWtCLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUM5Qyw0QkFDSyxLQUFLLElBQ1IsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLElBQ3ZCO1NBQ0g7UUFFRCxLQUFLLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDNUMsNEJBQ0ssS0FBSyxJQUNSLFVBQVUsRUFBRSxNQUFNLENBQUMsT0FBTyxJQUMxQjtTQUNIO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaXRlQ29udGV4dEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IEJhc2VTaXRlU3RhdGUgfSBmcm9tICcuLi9zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IEJhc2VTaXRlU3RhdGUgPSB7XG4gIGRldGFpbHM6IHt9LFxuICBhY3RpdmVTaXRlOiAnJyxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBTaXRlQ29udGV4dEFjdGlvbnMuQmFzZVNpdGVBY3Rpb25cbik6IEJhc2VTaXRlU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTaXRlQ29udGV4dEFjdGlvbnMuTE9BRF9CQVNFX1NJVEVfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGRldGFpbHM6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIFNpdGVDb250ZXh0QWN0aW9ucy5TRVRfQUNUSVZFX0JBU0VfU0lURToge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFjdGl2ZVNpdGU6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=