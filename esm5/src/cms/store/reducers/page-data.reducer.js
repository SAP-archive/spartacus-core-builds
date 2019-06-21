/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as fromAction from '../actions';
/** @type {?} */
export var initialState = { entities: {} };
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state, action) {
    var _a;
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case fromAction.LOAD_PAGE_DATA_SUCCESS: {
            /** @type {?} */
            var page = action.payload;
            return tslib_1.__assign({}, state, { entities: tslib_1.__assign({}, state.entities, (_a = {}, _a[page.pageId] = page, _a)) });
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1kYXRhLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL3JlZHVjZXJzL3BhZ2UtZGF0YS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxLQUFLLFVBQVUsTUFBTSxZQUFZLENBQUM7O0FBSXpDLE1BQU0sS0FBTyxZQUFZLEdBQXNCLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTs7Ozs7O0FBRS9ELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQW9CLEVBQ3BCLE1BQXNDOztJQUR0QyxzQkFBQSxFQUFBLG9CQUFvQjtJQUdwQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxVQUFVLENBQUMsc0JBQXNCLENBQUMsQ0FBQzs7Z0JBQ2hDLElBQUksR0FBUyxNQUFNLENBQUMsT0FBTztZQUNqQyw0QkFBWSxLQUFLLElBQUUsUUFBUSx1QkFBTyxLQUFLLENBQUMsUUFBUSxlQUFHLElBQUksQ0FBQyxNQUFNLElBQUcsSUFBSSxVQUFLO1NBQzNFO0tBQ0Y7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcm9tQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4uLy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgRW50aXR5U3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHkvZW50aXR5LXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogRW50aXR5U3RhdGU8UGFnZT4gPSB7IGVudGl0aWVzOiB7fSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogZnJvbUFjdGlvbi5Mb2FkUGFnZURhdGFTdWNjZXNzXG4pOiBFbnRpdHlTdGF0ZTxQYWdlPiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGZyb21BY3Rpb24uTE9BRF9QQUdFX0RBVEFfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgcGFnZTogUGFnZSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVudGl0aWVzOiB7IC4uLnN0YXRlLmVudGl0aWVzLCBbcGFnZS5wYWdlSWRdOiBwYWdlIH0gfTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19