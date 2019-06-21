/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as fromUserDetailsAction from '../actions/user-details.action';
/** @type {?} */
export var initialState = (/** @type {?} */ ({}));
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case fromUserDetailsAction.LOAD_USER_DETAILS_SUCCESS: {
            return action.payload;
        }
        case fromUserDetailsAction.UPDATE_USER_DETAILS_SUCCESS: {
            /** @type {?} */
            var updatedDetails = tslib_1.__assign({}, state, action.userUpdates);
            return tslib_1.__assign({}, updatedDetails, { name: updatedDetails.firstName + " " + updatedDetails.lastName });
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1kZXRhaWxzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9yZWR1Y2Vycy91c2VyLWRldGFpbHMucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sS0FBSyxxQkFBcUIsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFHeEUsTUFBTSxLQUFPLFlBQVksR0FBUyxtQkFBTSxFQUFFLEVBQUE7Ozs7OztBQUUxQyxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFvQixFQUNwQixNQUVzQztJQUh0QyxzQkFBQSxFQUFBLG9CQUFvQjtJQUtwQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxxQkFBcUIsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQ3BELE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUN2QjtRQUVELEtBQUsscUJBQXFCLENBQUMsMkJBQTJCLENBQUMsQ0FBQzs7Z0JBQ2hELGNBQWMsd0JBQ2YsS0FBSyxFQUNMLE1BQU0sQ0FBQyxXQUFXLENBQ3RCO1lBQ0QsNEJBQ0ssY0FBYyxJQUNqQixJQUFJLEVBQUssY0FBYyxDQUFDLFNBQVMsU0FBSSxjQUFjLENBQUMsUUFBVSxJQUM5RDtTQUNIO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcm9tVXBkYXRlRW1haWxBY3Rpb24gZnJvbSAnLi4vYWN0aW9ucy91cGRhdGUtZW1haWwuYWN0aW9uJztcbmltcG9ydCAqIGFzIGZyb21Vc2VyRGV0YWlsc0FjdGlvbiBmcm9tICcuLi9hY3Rpb25zL3VzZXItZGV0YWlscy5hY3Rpb24nO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBVc2VyID0gPFVzZXI+e307XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOlxuICAgIHwgZnJvbVVzZXJEZXRhaWxzQWN0aW9uLlVzZXJEZXRhaWxzQWN0aW9uXG4gICAgfCBmcm9tVXBkYXRlRW1haWxBY3Rpb24uRW1haWxBY3Rpb25zXG4pOiBVc2VyIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgZnJvbVVzZXJEZXRhaWxzQWN0aW9uLkxPQURfVVNFUl9ERVRBSUxTX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21Vc2VyRGV0YWlsc0FjdGlvbi5VUERBVEVfVVNFUl9ERVRBSUxTX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IHVwZGF0ZWREZXRhaWxzOiBVc2VyID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4uYWN0aW9uLnVzZXJVcGRhdGVzLFxuICAgICAgfTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnVwZGF0ZWREZXRhaWxzLFxuICAgICAgICBuYW1lOiBgJHt1cGRhdGVkRGV0YWlscy5maXJzdE5hbWV9ICR7dXBkYXRlZERldGFpbHMubGFzdE5hbWV9YCxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19