/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as fromBaseSite from '../actions/base-site.action';
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
        case fromBaseSite.LOAD_BASE_SITE_SUCCESS: {
            return tslib_1.__assign({}, state, { details: action.payload });
        }
        case fromBaseSite.SET_ACTIVE_BASE_SITE: {
            return tslib_1.__assign({}, state, { activeSite: action.payload });
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zaXRlLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L3N0b3JlL3JlZHVjZXJzL2Jhc2Utc2l0ZS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxLQUFLLFlBQVksTUFBTSw2QkFBNkIsQ0FBQzs7QUFHNUQsTUFBTSxLQUFPLFlBQVksR0FBa0I7SUFDekMsT0FBTyxFQUFFLEVBQUU7SUFDWCxVQUFVLEVBQUUsRUFBRTtDQUNmOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFvQixFQUNwQixNQUFtQztJQURuQyxzQkFBQSxFQUFBLG9CQUFvQjtJQUdwQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxZQUFZLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUN4Qyw0QkFDSyxLQUFLLElBQ1IsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLElBQ3ZCO1NBQ0g7UUFFRCxLQUFLLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ3RDLDRCQUNLLEtBQUssSUFDUixVQUFVLEVBQUUsTUFBTSxDQUFDLE9BQU8sSUFDMUI7U0FDSDtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnJvbUJhc2VTaXRlIGZyb20gJy4uL2FjdGlvbnMvYmFzZS1zaXRlLmFjdGlvbic7XG5pbXBvcnQgeyBCYXNlU2l0ZVN0YXRlIH0gZnJvbSAnLi4vc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBCYXNlU2l0ZVN0YXRlID0ge1xuICBkZXRhaWxzOiB7fSxcbiAgYWN0aXZlU2l0ZTogJycsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogZnJvbUJhc2VTaXRlLkJhc2VTaXRlQWN0aW9uXG4pOiBCYXNlU2l0ZVN0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgZnJvbUJhc2VTaXRlLkxPQURfQkFTRV9TSVRFX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBkZXRhaWxzOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tQmFzZVNpdGUuU0VUX0FDVElWRV9CQVNFX1NJVEU6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhY3RpdmVTaXRlOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19