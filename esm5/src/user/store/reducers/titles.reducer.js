/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as fromAction from '../actions/index';
/** @type {?} */
export var initialState = {
    entities: {},
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case fromAction.LOAD_TITLES_SUCCESS: {
            /** @type {?} */
            var titles = action.payload;
            /** @type {?} */
            var entities = titles.reduce(function (titleEntities, name) {
                var _a;
                return tslib_1.__assign({}, titleEntities, (_a = {}, _a[name.code] = name, _a));
            }, tslib_1.__assign({}, state.entities));
            return tslib_1.__assign({}, state, { entities: entities });
        }
        case fromAction.CLEAR_MISCS_DATA: {
            return initialState;
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGVzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9yZWR1Y2Vycy90aXRsZXMucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sS0FBSyxVQUFVLE1BQU0sa0JBQWtCLENBQUM7O0FBRy9DLE1BQU0sS0FBTyxZQUFZLEdBQWdCO0lBQ3ZDLFFBQVEsRUFBRSxFQUFFO0NBQ2I7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQW9CLEVBQ3BCLE1BQTJEO0lBRDNELHNCQUFBLEVBQUEsb0JBQW9CO0lBR3BCLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDOztnQkFDN0IsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPOztnQkFDdkIsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQzVCLFVBQUMsYUFBd0MsRUFBRSxJQUFXOztnQkFDcEQsNEJBQ0ssYUFBYSxlQUNmLElBQUksQ0FBQyxJQUFJLElBQUcsSUFBSSxPQUNqQjtZQUNKLENBQUMsdUJBRUksS0FBSyxDQUFDLFFBQVEsRUFFcEI7WUFFRCw0QkFDSyxLQUFLLElBQ1IsUUFBUSxVQUFBLElBQ1I7U0FDSDtRQUVELEtBQUssVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDaEMsT0FBTyxZQUFZLENBQUM7U0FDckI7S0FDRjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRpdGxlc1N0YXRlIH0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogVGl0bGVzU3RhdGUgPSB7XG4gIGVudGl0aWVzOiB7fSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBmcm9tQWN0aW9uLlRpdGxlc0FjdGlvbiB8IGZyb21BY3Rpb24uQ2xlYXJNaXNjc0RhdGFcbik6IFRpdGxlc1N0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgZnJvbUFjdGlvbi5MT0FEX1RJVExFU19TVUNDRVNTOiB7XG4gICAgICBjb25zdCB0aXRsZXMgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIGNvbnN0IGVudGl0aWVzID0gdGl0bGVzLnJlZHVjZShcbiAgICAgICAgKHRpdGxlRW50aXRpZXM6IHsgW2NvZGU6IHN0cmluZ106IFRpdGxlIH0sIG5hbWU6IFRpdGxlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnRpdGxlRW50aXRpZXMsXG4gICAgICAgICAgICBbbmFtZS5jb2RlXTogbmFtZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgLi4uc3RhdGUuZW50aXRpZXMsXG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlbnRpdGllcyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tQWN0aW9uLkNMRUFSX01JU0NTX0RBVEE6IHtcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19