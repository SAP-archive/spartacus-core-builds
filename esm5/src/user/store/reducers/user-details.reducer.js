/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1kZXRhaWxzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9yZWR1Y2Vycy91c2VyLWRldGFpbHMucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sS0FBSyxxQkFBcUIsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFFeEUsTUFBTSxLQUFPLFlBQVksR0FBUyxtQkFBTSxFQUFFLEVBQUE7Ozs7OztBQUUxQyxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFvQixFQUNwQixNQUErQztJQUQvQyxzQkFBQSxFQUFBLG9CQUFvQjtJQUdwQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxxQkFBcUIsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQ3BELE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUN2QjtRQUVELEtBQUsscUJBQXFCLENBQUMsMkJBQTJCLENBQUMsQ0FBQzs7Z0JBQ2hELGNBQWMsd0JBQ2YsS0FBSyxFQUNMLE1BQU0sQ0FBQyxXQUFXLENBQ3RCO1lBQ0QsNEJBQ0ssY0FBYyxJQUNqQixJQUFJLEVBQUssY0FBYyxDQUFDLFNBQVMsU0FBSSxjQUFjLENBQUMsUUFBVSxJQUM5RDtTQUNIO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMvaW5kZXgnO1xuaW1wb3J0ICogYXMgZnJvbVVzZXJEZXRhaWxzQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvdXNlci1kZXRhaWxzLmFjdGlvbic7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFVzZXIgPSA8VXNlcj57fTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IGZyb21Vc2VyRGV0YWlsc0FjdGlvbi5Vc2VyRGV0YWlsc0FjdGlvblxuKTogVXNlciB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGZyb21Vc2VyRGV0YWlsc0FjdGlvbi5MT0FEX1VTRVJfREVUQUlMU19TVUNDRVNTOiB7XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tVXNlckRldGFpbHNBY3Rpb24uVVBEQVRFX1VTRVJfREVUQUlMU19TVUNDRVNTOiB7XG4gICAgICBjb25zdCB1cGRhdGVkRGV0YWlsczogVXNlciA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC4uLmFjdGlvbi51c2VyVXBkYXRlcyxcbiAgICAgIH07XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi51cGRhdGVkRGV0YWlscyxcbiAgICAgICAgbmFtZTogYCR7dXBkYXRlZERldGFpbHMuZmlyc3ROYW1lfSAke3VwZGF0ZWREZXRhaWxzLmxhc3ROYW1lfWAsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==