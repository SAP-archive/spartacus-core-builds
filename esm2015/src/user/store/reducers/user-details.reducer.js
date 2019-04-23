/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fromUserDetailsAction from '../actions/user-details.action';
/** @type {?} */
export const initialState = (/** @type {?} */ ({}));
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state = initialState, action) {
    switch (action.type) {
        case fromUserDetailsAction.LOAD_USER_DETAILS_SUCCESS: {
            return action.payload;
        }
        case fromUserDetailsAction.UPDATE_USER_DETAILS_SUCCESS: {
            /** @type {?} */
            const updatedDetails = Object.assign({}, state, action.userUpdates);
            return Object.assign({}, updatedDetails, { name: `${updatedDetails.firstName} ${updatedDetails.lastName}` });
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1kZXRhaWxzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9yZWR1Y2Vycy91c2VyLWRldGFpbHMucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxLQUFLLHFCQUFxQixNQUFNLGdDQUFnQyxDQUFDOztBQUV4RSxNQUFNLE9BQU8sWUFBWSxHQUFTLG1CQUFNLEVBQUUsRUFBQTs7Ozs7O0FBRTFDLE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BRXNDO0lBRXRDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLHFCQUFxQixDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDcEQsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDO1NBQ3ZCO1FBRUQsS0FBSyxxQkFBcUIsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDOztrQkFDaEQsY0FBYyxxQkFDZixLQUFLLEVBQ0wsTUFBTSxDQUFDLFdBQVcsQ0FDdEI7WUFDRCx5QkFDSyxjQUFjLElBQ2pCLElBQUksRUFBRSxHQUFHLGNBQWMsQ0FBQyxTQUFTLElBQUksY0FBYyxDQUFDLFFBQVEsRUFBRSxJQUM5RDtTQUNIO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMvaW5kZXgnO1xuaW1wb3J0ICogYXMgZnJvbVVwZGF0ZUVtYWlsQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvdXBkYXRlLWVtYWlsLmFjdGlvbic7XG5pbXBvcnQgKiBhcyBmcm9tVXNlckRldGFpbHNBY3Rpb24gZnJvbSAnLi4vYWN0aW9ucy91c2VyLWRldGFpbHMuYWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogVXNlciA9IDxVc2VyPnt9O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjpcbiAgICB8IGZyb21Vc2VyRGV0YWlsc0FjdGlvbi5Vc2VyRGV0YWlsc0FjdGlvblxuICAgIHwgZnJvbVVwZGF0ZUVtYWlsQWN0aW9uLkVtYWlsQWN0aW9uc1xuKTogVXNlciB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGZyb21Vc2VyRGV0YWlsc0FjdGlvbi5MT0FEX1VTRVJfREVUQUlMU19TVUNDRVNTOiB7XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tVXNlckRldGFpbHNBY3Rpb24uVVBEQVRFX1VTRVJfREVUQUlMU19TVUNDRVNTOiB7XG4gICAgICBjb25zdCB1cGRhdGVkRGV0YWlsczogVXNlciA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC4uLmFjdGlvbi51c2VyVXBkYXRlcyxcbiAgICAgIH07XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi51cGRhdGVkRGV0YWlscyxcbiAgICAgICAgbmFtZTogYCR7dXBkYXRlZERldGFpbHMuZmlyc3ROYW1lfSAke3VwZGF0ZWREZXRhaWxzLmxhc3ROYW1lfWAsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==