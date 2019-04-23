/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as fromAction from './../actions/user-token.action';
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
        case fromAction.LOAD_USER_TOKEN:
        case fromAction.REFRESH_USER_TOKEN: {
            return tslib_1.__assign({}, state);
        }
        case fromAction.LOAD_USER_TOKEN_SUCCESS:
        case fromAction.REFRESH_USER_TOKEN_SUCCESS: {
            return tslib_1.__assign({}, state, action.payload);
        }
        case fromAction.LOAD_USER_TOKEN_FAIL:
        case fromAction.REFRESH_USER_TOKEN_FAIL: {
            return tslib_1.__assign({}, state);
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci10b2tlbi5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2F1dGgvc3RvcmUvcmVkdWNlcnMvdXNlci10b2tlbi5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxLQUFLLFVBQVUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFFN0QsTUFBTSxLQUFPLFlBQVksR0FBYyxtQkFBVyxFQUFFLEVBQUE7Ozs7OztBQUVwRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFvQixFQUNwQixNQUVrRDtJQUhsRCxzQkFBQSxFQUFBLG9CQUFvQjtJQUtwQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxVQUFVLENBQUMsZUFBZSxDQUFDO1FBQ2hDLEtBQUssVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDbEMsNEJBQ0ssS0FBSyxFQUNSO1NBQ0g7UUFFRCxLQUFLLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQztRQUN4QyxLQUFLLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1lBQzFDLDRCQUNLLEtBQUssRUFDTCxNQUFNLENBQUMsT0FBTyxFQUNqQjtTQUNIO1FBRUQsS0FBSyxVQUFVLENBQUMsb0JBQW9CLENBQUM7UUFDckMsS0FBSyxVQUFVLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUN2Qyw0QkFDSyxLQUFLLEVBQ1I7U0FDSDtLQUNGO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlclRva2VuIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Rva2VuLXR5cGVzLm1vZGVsJztcbmltcG9ydCAqIGFzIGZyb21VcGRhdGVFbWFpbEFjdGlvbiBmcm9tICcuLy4uLy4uLy4uL3VzZXIvc3RvcmUvYWN0aW9ucy91cGRhdGUtZW1haWwuYWN0aW9uJztcbmltcG9ydCAqIGFzIGZyb21BY3Rpb24gZnJvbSAnLi8uLi9hY3Rpb25zL3VzZXItdG9rZW4uYWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogVXNlclRva2VuID0gPFVzZXJUb2tlbj57fTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246XG4gICAgfCBmcm9tQWN0aW9uLlVzZXJUb2tlbkFjdGlvblxuICAgIHwgZnJvbVVwZGF0ZUVtYWlsQWN0aW9uLlVwZGF0ZUVtYWlsU3VjY2Vzc0FjdGlvblxuKTogVXNlclRva2VuIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgZnJvbUFjdGlvbi5MT0FEX1VTRVJfVE9LRU46XG4gICAgY2FzZSBmcm9tQWN0aW9uLlJFRlJFU0hfVVNFUl9UT0tFTjoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgZnJvbUFjdGlvbi5MT0FEX1VTRVJfVE9LRU5fU1VDQ0VTUzpcbiAgICBjYXNlIGZyb21BY3Rpb24uUkVGUkVTSF9VU0VSX1RPS0VOX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tQWN0aW9uLkxPQURfVVNFUl9UT0tFTl9GQUlMOlxuICAgIGNhc2UgZnJvbUFjdGlvbi5SRUZSRVNIX1VTRVJfVE9LRU5fRkFJTDoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=