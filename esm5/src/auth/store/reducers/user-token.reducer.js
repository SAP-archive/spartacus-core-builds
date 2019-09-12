/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AuthActions } from '../actions/index';
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
        case AuthActions.LOAD_USER_TOKEN:
        case AuthActions.REFRESH_USER_TOKEN: {
            return tslib_1.__assign({}, state);
        }
        case AuthActions.LOAD_USER_TOKEN_SUCCESS:
        case AuthActions.REFRESH_USER_TOKEN_SUCCESS: {
            return tslib_1.__assign({}, state, action.payload);
        }
        case AuthActions.LOAD_USER_TOKEN_FAIL:
        case AuthActions.REFRESH_USER_TOKEN_FAIL: {
            return tslib_1.__assign({}, state);
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci10b2tlbi5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2F1dGgvc3RvcmUvcmVkdWNlcnMvdXNlci10b2tlbi5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUUvQyxNQUFNLEtBQU8sWUFBWSxHQUFjLG1CQUFXLEVBQUUsRUFBQTs7Ozs7O0FBRXBELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQW9CLEVBQ3BCLE1BRWtEO0lBSGxELHNCQUFBLEVBQUEsb0JBQW9CO0lBS3BCLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLFdBQVcsQ0FBQyxlQUFlLENBQUM7UUFDakMsS0FBSyxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUNuQyw0QkFDSyxLQUFLLEVBQ1I7U0FDSDtRQUVELEtBQUssV0FBVyxDQUFDLHVCQUF1QixDQUFDO1FBQ3pDLEtBQUssV0FBVyxDQUFDLDBCQUEwQixDQUFDLENBQUM7WUFDM0MsNEJBQ0ssS0FBSyxFQUNMLE1BQU0sQ0FBQyxPQUFPLEVBQ2pCO1NBQ0g7UUFFRCxLQUFLLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztRQUN0QyxLQUFLLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ3hDLDRCQUNLLEtBQUssRUFDUjtTQUNIO0tBQ0Y7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcm9tVXBkYXRlRW1haWxBY3Rpb24gZnJvbSAnLi4vLi4vLi4vdXNlci9zdG9yZS9hY3Rpb25zL3VwZGF0ZS1lbWFpbC5hY3Rpb24nO1xuaW1wb3J0IHsgVXNlclRva2VuIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Rva2VuLXR5cGVzLm1vZGVsJztcbmltcG9ydCB7IEF1dGhBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFVzZXJUb2tlbiA9IDxVc2VyVG9rZW4+e307XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOlxuICAgIHwgQXV0aEFjdGlvbnMuVXNlclRva2VuQWN0aW9uXG4gICAgfCBmcm9tVXBkYXRlRW1haWxBY3Rpb24uVXBkYXRlRW1haWxTdWNjZXNzQWN0aW9uXG4pOiBVc2VyVG9rZW4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBBdXRoQWN0aW9ucy5MT0FEX1VTRVJfVE9LRU46XG4gICAgY2FzZSBBdXRoQWN0aW9ucy5SRUZSRVNIX1VTRVJfVE9LRU46IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIEF1dGhBY3Rpb25zLkxPQURfVVNFUl9UT0tFTl9TVUNDRVNTOlxuICAgIGNhc2UgQXV0aEFjdGlvbnMuUkVGUkVTSF9VU0VSX1RPS0VOX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBBdXRoQWN0aW9ucy5MT0FEX1VTRVJfVE9LRU5fRkFJTDpcbiAgICBjYXNlIEF1dGhBY3Rpb25zLlJFRlJFU0hfVVNFUl9UT0tFTl9GQUlMOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==