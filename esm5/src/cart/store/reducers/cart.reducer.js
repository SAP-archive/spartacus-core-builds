/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as fromAction from '../actions/index';
/** @type {?} */
export var initialState = {
    content: {},
    entries: {},
    refresh: false,
    cartMergeComplete: false,
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case fromAction.MERGE_CART: {
            return tslib_1.__assign({}, state, { cartMergeComplete: false });
        }
        case fromAction.MERGE_CART_SUCCESS: {
            return tslib_1.__assign({}, state, { cartMergeComplete: true, refresh: true });
        }
        case fromAction.LOAD_CART_SUCCESS:
        case fromAction.CREATE_CART_SUCCESS: {
            /** @type {?} */
            var content = tslib_1.__assign({}, action.payload);
            /** @type {?} */
            var entries = {};
            if (content.entries) {
                entries = content.entries.reduce((/**
                 * @param {?} entryMap
                 * @param {?} entry
                 * @return {?}
                 */
                function (entryMap, entry) {
                    var _a;
                    return tslib_1.__assign({}, entryMap, (_a = {}, _a[entry.product.code] = state.entries && state.entries[entry.product.code]
                        ? tslib_1.__assign({}, state.entries[entry.product.code], entry) : entry, _a));
                }), tslib_1.__assign({}, entries));
                delete content['entries'];
            }
            return tslib_1.__assign({}, state, { content: content,
                entries: entries, refresh: false });
        }
        case fromAction.REMOVE_ENTRY_SUCCESS:
        case fromAction.UPDATE_ENTRY_SUCCESS:
        case fromAction.ADD_ENTRY_SUCCESS: {
            return tslib_1.__assign({}, state, { refresh: true });
        }
        case fromAction.RESET_CART_DETAILS: {
            return {
                content: {
                    guid: state.content.guid,
                    code: state.content.code,
                },
                entries: {},
                refresh: false,
                cartMergeComplete: false,
            };
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvc3RvcmUvcmVkdWNlcnMvY2FydC5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxLQUFLLFVBQVUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFHL0MsTUFBTSxLQUFPLFlBQVksR0FBYztJQUNyQyxPQUFPLEVBQUUsRUFBRTtJQUNYLE9BQU8sRUFBRSxFQUFFO0lBQ1gsT0FBTyxFQUFFLEtBQUs7SUFDZCxpQkFBaUIsRUFBRSxLQUFLO0NBQ3pCOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFvQixFQUNwQixNQUEwRDtJQUQxRCxzQkFBQSxFQUFBLG9CQUFvQjtJQUdwQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDMUIsNEJBQ0ssS0FBSyxJQUNSLGlCQUFpQixFQUFFLEtBQUssSUFDeEI7U0FDSDtRQUVELEtBQUssVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDbEMsNEJBQ0ssS0FBSyxJQUNSLGlCQUFpQixFQUFFLElBQUksRUFDdkIsT0FBTyxFQUFFLElBQUksSUFDYjtTQUNIO1FBRUQsS0FBSyxVQUFVLENBQUMsaUJBQWlCLENBQUM7UUFDbEMsS0FBSyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQzs7Z0JBQzdCLE9BQU8sd0JBQVEsTUFBTSxDQUFDLE9BQU8sQ0FBRTs7Z0JBQ2pDLE9BQU8sR0FBRyxFQUFFO1lBQ2hCLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtnQkFDbkIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTTs7Ozs7Z0JBQzlCLFVBQUMsUUFBaUMsRUFBRSxLQUFpQjs7b0JBQ25ELDRCQUNLLFFBQVEsZUFPVixLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksSUFDakIsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO3dCQUNoRCxDQUFDLHNCQUNNLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFDakMsS0FBSyxFQUVaLENBQUMsQ0FBQyxLQUFLLE9BQ1g7Z0JBQ0osQ0FBQyx3QkFFSSxPQUFPLEVBRWIsQ0FBQztnQkFDRixPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMzQjtZQUNELDRCQUNLLEtBQUssSUFDUixPQUFPLFNBQUE7Z0JBQ1AsT0FBTyxTQUFBLEVBQ1AsT0FBTyxFQUFFLEtBQUssSUFDZDtTQUNIO1FBRUQsS0FBSyxVQUFVLENBQUMsb0JBQW9CLENBQUM7UUFDckMsS0FBSyxVQUFVLENBQUMsb0JBQW9CLENBQUM7UUFDckMsS0FBSyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUNqQyw0QkFDSyxLQUFLLElBQ1IsT0FBTyxFQUFFLElBQUksSUFDYjtTQUNIO1FBRUQsS0FBSyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUNsQyxPQUFPO2dCQUNMLE9BQU8sRUFBRTtvQkFDUCxJQUFJLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJO29CQUN4QixJQUFJLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJO2lCQUN6QjtnQkFDRCxPQUFPLEVBQUUsRUFBRTtnQkFDWCxPQUFPLEVBQUUsS0FBSztnQkFDZCxpQkFBaUIsRUFBRSxLQUFLO2FBQ3pCLENBQUM7U0FDSDtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3JkZXJFbnRyeSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCAqIGFzIGZyb21BY3Rpb24gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBDYXJ0U3RhdGUgfSBmcm9tICcuLi9jYXJ0LXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogQ2FydFN0YXRlID0ge1xuICBjb250ZW50OiB7fSxcbiAgZW50cmllczoge30sXG4gIHJlZnJlc2g6IGZhbHNlLFxuICBjYXJ0TWVyZ2VDb21wbGV0ZTogZmFsc2UsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogZnJvbUFjdGlvbi5DYXJ0QWN0aW9uIHwgZnJvbUFjdGlvbi5DYXJ0RW50cnlBY3Rpb25cbik6IENhcnRTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGZyb21BY3Rpb24uTUVSR0VfQ0FSVDoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnRNZXJnZUNvbXBsZXRlOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tQWN0aW9uLk1FUkdFX0NBUlRfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnRNZXJnZUNvbXBsZXRlOiB0cnVlLFxuICAgICAgICByZWZyZXNoOiB0cnVlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21BY3Rpb24uTE9BRF9DQVJUX1NVQ0NFU1M6XG4gICAgY2FzZSBmcm9tQWN0aW9uLkNSRUFURV9DQVJUX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB7IC4uLmFjdGlvbi5wYXlsb2FkIH07XG4gICAgICBsZXQgZW50cmllcyA9IHt9O1xuICAgICAgaWYgKGNvbnRlbnQuZW50cmllcykge1xuICAgICAgICBlbnRyaWVzID0gY29udGVudC5lbnRyaWVzLnJlZHVjZShcbiAgICAgICAgICAoZW50cnlNYXA6IHsgW2NvZGU6IHN0cmluZ106IGFueSB9LCBlbnRyeTogT3JkZXJFbnRyeSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgLi4uZW50cnlNYXAsXG4gICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgIElmIHdlIHJlZnJlc2ggdGhlIHBhZ2UgZnJvbSBjYXJ0IGRldGFpbHMgcGFnZSwgMiBsb2FkIGNhcnRcbiAgICAgICAgICAgICAgQWN0aW9ucyBnZXRzIGRpc3BhdGNoZWQuIE9uZSBpcyBub24tZGV0YWlsLCBhbmQgdGhlIHNlY29uZCBpcyBkZXRhaWxlZC5cbiAgICAgICAgICAgICAgSW4gdGhlIGNhc2Ugd2hlcmUgdGhlIGRldGFpbGVkIG9uY2UgZ2V0IHJlc29sdmVkIGZpcnN0LCB3ZSBtZXJnZSB0aGUgZXhpc3RpbmdcbiAgICAgICAgICAgICAgZGF0YSB3aXRoIHRoZSBuZXcgZGF0YSBmcm9tIHRoZSByZXNwb25zZSAodG8gbm90IGRlbGV0ZSBleGlzdGluZyBkZXRhaWxlZCBkYXRhKS5cbiAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgW2VudHJ5LnByb2R1Y3QuY29kZV06XG4gICAgICAgICAgICAgICAgc3RhdGUuZW50cmllcyAmJiBzdGF0ZS5lbnRyaWVzW2VudHJ5LnByb2R1Y3QuY29kZV1cbiAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmVudHJpZXNbZW50cnkucHJvZHVjdC5jb2RlXSxcbiAgICAgICAgICAgICAgICAgICAgICAuLi5lbnRyeSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgOiBlbnRyeSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAuLi5lbnRyaWVzLFxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgZGVsZXRlIGNvbnRlbnRbJ2VudHJpZXMnXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjb250ZW50LFxuICAgICAgICBlbnRyaWVzLFxuICAgICAgICByZWZyZXNoOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tQWN0aW9uLlJFTU9WRV9FTlRSWV9TVUNDRVNTOlxuICAgIGNhc2UgZnJvbUFjdGlvbi5VUERBVEVfRU5UUllfU1VDQ0VTUzpcbiAgICBjYXNlIGZyb21BY3Rpb24uQUREX0VOVFJZX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICByZWZyZXNoOiB0cnVlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21BY3Rpb24uUkVTRVRfQ0FSVF9ERVRBSUxTOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgZ3VpZDogc3RhdGUuY29udGVudC5ndWlkLFxuICAgICAgICAgIGNvZGU6IHN0YXRlLmNvbnRlbnQuY29kZSxcbiAgICAgICAgfSxcbiAgICAgICAgZW50cmllczoge30sXG4gICAgICAgIHJlZnJlc2g6IGZhbHNlLFxuICAgICAgICBjYXJ0TWVyZ2VDb21wbGV0ZTogZmFsc2UsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==