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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hZGRyZXNzZXMucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL3JlZHVjZXJzL3VzZXItYWRkcmVzc2VzLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxXQUFXLE1BQU0sa0NBQWtDLENBQUM7O0FBR2hFLE1BQU0sT0FBTyxZQUFZLEdBQWMsRUFBRTs7Ozs7O0FBRXpDLE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BQXVDO0lBRXZDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQ3pDLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO1FBRUQsS0FBSyxXQUFXLENBQUMsMkJBQTJCLENBQUMsQ0FBQztZQUM1QyxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztTQUN2RDtLQUNGO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnJvbUFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy91c2VyLWFkZHJlc3Nlcy5hY3Rpb24nO1xuaW1wb3J0IHsgQWRkcmVzcyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBBZGRyZXNzW10gPSBbXTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IGZyb21BY3Rpb25zLlVzZXJBZGRyZXNzZXNBY3Rpb25cbik6IEFkZHJlc3NbXSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGZyb21BY3Rpb25zLkxPQURfVVNFUl9BRERSRVNTRVNfRkFJTDoge1xuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21BY3Rpb25zLkxPQURfVVNFUl9BRERSRVNTRVNfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkID8gYWN0aW9uLnBheWxvYWQgOiBpbml0aWFsU3RhdGU7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==