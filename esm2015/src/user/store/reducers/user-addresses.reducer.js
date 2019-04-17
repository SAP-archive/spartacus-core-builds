/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fromActions from '../actions/user-addresses.action';
/** @type {?} */
export const initialState = [];
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state = initialState, action) {
    switch (action.type) {
        case fromActions.LOAD_USER_ADDRESSES_FAIL: {
            return initialState;
        }
        case fromActions.LOAD_USER_ADDRESSES_SUCCESS: {
            return action.payload ? action.payload : initialState;
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hZGRyZXNzZXMucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL3JlZHVjZXJzL3VzZXItYWRkcmVzc2VzLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxXQUFXLE1BQU0sa0NBQWtDLENBQUM7O0FBR2hFLE1BQU0sT0FBTyxZQUFZLEdBQWMsRUFBRTs7Ozs7O0FBRXpDLE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BQXVDO0lBRXZDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQ3pDLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO1FBRUQsS0FBSyxXQUFXLENBQUMsMkJBQTJCLENBQUMsQ0FBQztZQUM1QyxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztTQUN2RDtLQUNGO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnJvbUFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy91c2VyLWFkZHJlc3Nlcy5hY3Rpb24nO1xuaW1wb3J0IHsgQWRkcmVzcyB9IGZyb20gJy4uLy4uLy4uL29jYyc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IEFkZHJlc3NbXSA9IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogZnJvbUFjdGlvbnMuVXNlckFkZHJlc3Nlc0FjdGlvblxuKTogQWRkcmVzc1tdIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgZnJvbUFjdGlvbnMuTE9BRF9VU0VSX0FERFJFU1NFU19GQUlMOiB7XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIH1cblxuICAgIGNhc2UgZnJvbUFjdGlvbnMuTE9BRF9VU0VSX0FERFJFU1NFU19TVUNDRVNTOiB7XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQgPyBhY3Rpb24ucGF5bG9hZCA6IGluaXRpYWxTdGF0ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19