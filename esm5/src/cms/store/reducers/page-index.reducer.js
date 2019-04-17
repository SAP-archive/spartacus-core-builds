/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fromAction from '../actions/page.action';
/** @type {?} */
export var initialState = undefined;
/**
 * @param {?} entityType
 * @return {?}
 */
export function reducer(entityType) {
    return function (state, action) {
        if (state === void 0) { state = initialState; }
        if (action.meta && action.meta.entityType === entityType) {
            switch (action.type) {
                case fromAction.LOAD_PAGE_DATA_SUCCESS: {
                    return action.payload.pageId;
                }
                case fromAction.LOAD_PAGE_DATA_FAIL: {
                    return initialState;
                }
            }
        }
        return state;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1pbmRleC5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Ntcy9zdG9yZS9yZWR1Y2Vycy9wYWdlLWluZGV4LnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxVQUFVLE1BQU0sd0JBQXdCLENBQUM7O0FBRXJELE1BQU0sS0FBTyxZQUFZLEdBQUcsU0FBUzs7Ozs7QUFFckMsTUFBTSxVQUFVLE9BQU8sQ0FDckIsVUFBa0I7SUFLbEIsT0FBTyxVQUNMLEtBQW9CLEVBQ3BCLE1BQW9FO1FBRHBFLHNCQUFBLEVBQUEsb0JBQW9CO1FBR3BCLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxVQUFVLEVBQUU7WUFDeEQsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUNuQixLQUFLLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO29CQUN0QyxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2lCQUM5QjtnQkFFRCxLQUFLLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO29CQUNuQyxPQUFPLFlBQVksQ0FBQztpQkFDckI7YUFDRjtTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnJvbUFjdGlvbiBmcm9tICcuLi9hY3Rpb25zL3BhZ2UuYWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHVuZGVmaW5lZDtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIGVudGl0eVR5cGU6IHN0cmluZ1xuKTogKFxuICBzdGF0ZTogc3RyaW5nLFxuICBhY3Rpb246IGZyb21BY3Rpb24uTG9hZFBhZ2VEYXRhU3VjY2VzcyB8IGZyb21BY3Rpb24uTG9hZFBhZ2VEYXRhRmFpbFxuKSA9PiBzdHJpbmcge1xuICByZXR1cm4gKFxuICAgIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICAgIGFjdGlvbjogZnJvbUFjdGlvbi5Mb2FkUGFnZURhdGFTdWNjZXNzIHwgZnJvbUFjdGlvbi5Mb2FkUGFnZURhdGFGYWlsXG4gICk6IHN0cmluZyA9PiB7XG4gICAgaWYgKGFjdGlvbi5tZXRhICYmIGFjdGlvbi5tZXRhLmVudGl0eVR5cGUgPT09IGVudGl0eVR5cGUpIHtcbiAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBmcm9tQWN0aW9uLkxPQURfUEFHRV9EQVRBX1NVQ0NFU1M6IHtcbiAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQucGFnZUlkO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBmcm9tQWN0aW9uLkxPQURfUEFHRV9EQVRBX0ZBSUw6IHtcbiAgICAgICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZTtcbiAgfTtcbn1cbiJdfQ==