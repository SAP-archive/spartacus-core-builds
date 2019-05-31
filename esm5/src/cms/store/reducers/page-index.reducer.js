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
                case fromAction.SET_PAGE_FAIL_INDEX: {
                    return action.payload;
                }
            }
        }
        return state;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1pbmRleC5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Ntcy9zdG9yZS9yZWR1Y2Vycy9wYWdlLWluZGV4LnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxVQUFVLE1BQU0sd0JBQXdCLENBQUM7O0FBRXJELE1BQU0sS0FBTyxZQUFZLEdBQUcsU0FBUzs7Ozs7QUFFckMsTUFBTSxVQUFVLE9BQU8sQ0FDckIsVUFBa0I7SUFRbEIsT0FBTyxVQUNMLEtBQW9CLEVBQ3BCLE1BRytCO1FBSi9CLHNCQUFBLEVBQUEsb0JBQW9CO1FBTXBCLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxVQUFVLEVBQUU7WUFDeEQsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUNuQixLQUFLLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO29CQUN0QyxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2lCQUM5QjtnQkFFRCxLQUFLLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO29CQUNuQyxPQUFPLFlBQVksQ0FBQztpQkFDckI7Z0JBRUQsS0FBSyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQztvQkFDbkMsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDO2lCQUN2QjthQUNGO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcm9tQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvcGFnZS5hY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0gdW5kZWZpbmVkO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgZW50aXR5VHlwZTogc3RyaW5nXG4pOiAoXG4gIHN0YXRlOiBzdHJpbmcsXG4gIGFjdGlvbjpcbiAgICB8IGZyb21BY3Rpb24uTG9hZFBhZ2VEYXRhU3VjY2Vzc1xuICAgIHwgZnJvbUFjdGlvbi5Mb2FkUGFnZURhdGFGYWlsXG4gICAgfCBmcm9tQWN0aW9uLlNldFBhZ2VGYWlsSW5kZXhcbikgPT4gc3RyaW5nIHtcbiAgcmV0dXJuIChcbiAgICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgICBhY3Rpb246XG4gICAgICB8IGZyb21BY3Rpb24uTG9hZFBhZ2VEYXRhU3VjY2Vzc1xuICAgICAgfCBmcm9tQWN0aW9uLkxvYWRQYWdlRGF0YUZhaWxcbiAgICAgIHwgZnJvbUFjdGlvbi5TZXRQYWdlRmFpbEluZGV4XG4gICk6IHN0cmluZyA9PiB7XG4gICAgaWYgKGFjdGlvbi5tZXRhICYmIGFjdGlvbi5tZXRhLmVudGl0eVR5cGUgPT09IGVudGl0eVR5cGUpIHtcbiAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBmcm9tQWN0aW9uLkxPQURfUEFHRV9EQVRBX1NVQ0NFU1M6IHtcbiAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQucGFnZUlkO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBmcm9tQWN0aW9uLkxPQURfUEFHRV9EQVRBX0ZBSUw6IHtcbiAgICAgICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBmcm9tQWN0aW9uLlNFVF9QQUdFX0ZBSUxfSU5ERVg6IHtcbiAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9O1xufVxuIl19