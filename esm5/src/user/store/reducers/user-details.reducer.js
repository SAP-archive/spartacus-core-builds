/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { UserActions } from '../actions/index';
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
        case UserActions.LOAD_USER_DETAILS_SUCCESS: {
            return action.payload;
        }
        case UserActions.UPDATE_USER_DETAILS_SUCCESS: {
            /** @type {?} */
            var updatedDetails = tslib_1.__assign({}, state, action.userUpdates);
            return tslib_1.__assign({}, updatedDetails, { name: updatedDetails.firstName + " " + updatedDetails.lastName });
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1kZXRhaWxzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9yZWR1Y2Vycy91c2VyLWRldGFpbHMucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFFL0MsTUFBTSxLQUFPLFlBQVksR0FBUyxtQkFBTSxFQUFFLEVBQUE7Ozs7OztBQUUxQyxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFvQixFQUNwQixNQUFnRTtJQURoRSxzQkFBQSxFQUFBLG9CQUFvQjtJQUdwQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxXQUFXLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUMxQyxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDdkI7UUFFRCxLQUFLLFdBQVcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDOztnQkFDdEMsY0FBYyx3QkFDZixLQUFLLEVBQ0wsTUFBTSxDQUFDLFdBQVcsQ0FDdEI7WUFDRCw0QkFDSyxjQUFjLElBQ2pCLElBQUksRUFBSyxjQUFjLENBQUMsU0FBUyxTQUFJLGNBQWMsQ0FBQyxRQUFVLElBQzlEO1NBQ0g7S0FDRjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFVzZXIgPSA8VXNlcj57fTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IFVzZXJBY3Rpb25zLlVzZXJEZXRhaWxzQWN0aW9uIHwgVXNlckFjdGlvbnMuRW1haWxBY3Rpb25zXG4pOiBVc2VyIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgVXNlckFjdGlvbnMuTE9BRF9VU0VSX0RFVEFJTFNfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xuICAgIH1cblxuICAgIGNhc2UgVXNlckFjdGlvbnMuVVBEQVRFX1VTRVJfREVUQUlMU19TVUNDRVNTOiB7XG4gICAgICBjb25zdCB1cGRhdGVkRGV0YWlsczogVXNlciA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC4uLmFjdGlvbi51c2VyVXBkYXRlcyxcbiAgICAgIH07XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi51cGRhdGVkRGV0YWlscyxcbiAgICAgICAgbmFtZTogYCR7dXBkYXRlZERldGFpbHMuZmlyc3ROYW1lfSAke3VwZGF0ZWREZXRhaWxzLmxhc3ROYW1lfWAsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==