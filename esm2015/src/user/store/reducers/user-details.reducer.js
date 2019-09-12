/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { UserActions } from '../actions/index';
/** @type {?} */
export const initialState = (/** @type {?} */ ({}));
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state = initialState, action) {
    switch (action.type) {
        case UserActions.LOAD_USER_DETAILS_SUCCESS: {
            return action.payload;
        }
        case UserActions.UPDATE_USER_DETAILS_SUCCESS: {
            /** @type {?} */
            const updatedDetails = Object.assign({}, state, action.userUpdates);
            return Object.assign({}, updatedDetails, { name: `${updatedDetails.firstName} ${updatedDetails.lastName}` });
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1kZXRhaWxzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9yZWR1Y2Vycy91c2VyLWRldGFpbHMucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUUvQyxNQUFNLE9BQU8sWUFBWSxHQUFTLG1CQUFNLEVBQUUsRUFBQTs7Ozs7O0FBRTFDLE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BQWdFO0lBRWhFLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQzFDLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUN2QjtRQUVELEtBQUssV0FBVyxDQUFDLDJCQUEyQixDQUFDLENBQUM7O2tCQUN0QyxjQUFjLHFCQUNmLEtBQUssRUFDTCxNQUFNLENBQUMsV0FBVyxDQUN0QjtZQUNELHlCQUNLLGNBQWMsSUFDakIsSUFBSSxFQUFFLEdBQUcsY0FBYyxDQUFDLFNBQVMsSUFBSSxjQUFjLENBQUMsUUFBUSxFQUFFLElBQzlEO1NBQ0g7S0FDRjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFVzZXIgPSA8VXNlcj57fTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IFVzZXJBY3Rpb25zLlVzZXJEZXRhaWxzQWN0aW9uIHwgVXNlckFjdGlvbnMuRW1haWxBY3Rpb25zXG4pOiBVc2VyIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgVXNlckFjdGlvbnMuTE9BRF9VU0VSX0RFVEFJTFNfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xuICAgIH1cblxuICAgIGNhc2UgVXNlckFjdGlvbnMuVVBEQVRFX1VTRVJfREVUQUlMU19TVUNDRVNTOiB7XG4gICAgICBjb25zdCB1cGRhdGVkRGV0YWlsczogVXNlciA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC4uLmFjdGlvbi51c2VyVXBkYXRlcyxcbiAgICAgIH07XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi51cGRhdGVkRGV0YWlscyxcbiAgICAgICAgbmFtZTogYCR7dXBkYXRlZERldGFpbHMuZmlyc3ROYW1lfSAke3VwZGF0ZWREZXRhaWxzLmxhc3ROYW1lfWAsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==