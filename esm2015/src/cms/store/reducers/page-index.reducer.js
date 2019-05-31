/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fromAction from '../actions/page.action';
/** @type {?} */
export const initialState = undefined;
/**
 * @param {?} entityType
 * @return {?}
 */
export function reducer(entityType) {
    return (state = initialState, action) => {
        if (action.meta && action.meta.entityType === entityType) {
            switch (action.type) {
                case fromAction.LOAD_PAGE_DATA_SUCCESS: {
                    return action.payload.pageId;
                }
                case fromAction.LOAD_PAGE_DATA_FAIL: {
                    return initialState;
                }
                case fromAction.SET_PAGE_FAIL_INDEX: {
                    return action.payload;
                }
            }
        }
        return state;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1pbmRleC5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Ntcy9zdG9yZS9yZWR1Y2Vycy9wYWdlLWluZGV4LnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxVQUFVLE1BQU0sd0JBQXdCLENBQUM7O0FBRXJELE1BQU0sT0FBTyxZQUFZLEdBQUcsU0FBUzs7Ozs7QUFFckMsTUFBTSxVQUFVLE9BQU8sQ0FDckIsVUFBa0I7SUFRbEIsT0FBTyxDQUNMLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BRytCLEVBQ3ZCLEVBQUU7UUFDVixJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUFFO1lBQ3hELFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtnQkFDbkIsS0FBSyxVQUFVLENBQUMsc0JBQXNCLENBQUMsQ0FBQztvQkFDdEMsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztpQkFDOUI7Z0JBRUQsS0FBSyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQztvQkFDbkMsT0FBTyxZQUFZLENBQUM7aUJBQ3JCO2dCQUVELEtBQUssVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUM7b0JBQ25DLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQztpQkFDdkI7YUFDRjtTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnJvbUFjdGlvbiBmcm9tICcuLi9hY3Rpb25zL3BhZ2UuYWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHVuZGVmaW5lZDtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIGVudGl0eVR5cGU6IHN0cmluZ1xuKTogKFxuICBzdGF0ZTogc3RyaW5nLFxuICBhY3Rpb246XG4gICAgfCBmcm9tQWN0aW9uLkxvYWRQYWdlRGF0YVN1Y2Nlc3NcbiAgICB8IGZyb21BY3Rpb24uTG9hZFBhZ2VEYXRhRmFpbFxuICAgIHwgZnJvbUFjdGlvbi5TZXRQYWdlRmFpbEluZGV4XG4pID0+IHN0cmluZyB7XG4gIHJldHVybiAoXG4gICAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gICAgYWN0aW9uOlxuICAgICAgfCBmcm9tQWN0aW9uLkxvYWRQYWdlRGF0YVN1Y2Nlc3NcbiAgICAgIHwgZnJvbUFjdGlvbi5Mb2FkUGFnZURhdGFGYWlsXG4gICAgICB8IGZyb21BY3Rpb24uU2V0UGFnZUZhaWxJbmRleFxuICApOiBzdHJpbmcgPT4ge1xuICAgIGlmIChhY3Rpb24ubWV0YSAmJiBhY3Rpb24ubWV0YS5lbnRpdHlUeXBlID09PSBlbnRpdHlUeXBlKSB7XG4gICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgZnJvbUFjdGlvbi5MT0FEX1BBR0VfREFUQV9TVUNDRVNTOiB7XG4gICAgICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkLnBhZ2VJZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgZnJvbUFjdGlvbi5MT0FEX1BBR0VfREFUQV9GQUlMOiB7XG4gICAgICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgZnJvbUFjdGlvbi5TRVRfUEFHRV9GQUlMX0lOREVYOiB7XG4gICAgICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZTtcbiAgfTtcbn1cbiJdfQ==