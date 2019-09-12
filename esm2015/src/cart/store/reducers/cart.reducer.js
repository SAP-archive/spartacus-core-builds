/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CartActions } from '../actions/index';
/** @type {?} */
export const initialState = {
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
export function reducer(state = initialState, action) {
    switch (action.type) {
        case CartActions.MERGE_CART: {
            return Object.assign({}, state, { cartMergeComplete: false });
        }
        case CartActions.MERGE_CART_SUCCESS: {
            return Object.assign({}, state, { cartMergeComplete: true, refresh: true });
        }
        case CartActions.LOAD_CART_SUCCESS:
        case CartActions.CREATE_CART_SUCCESS: {
            /** @type {?} */
            const content = Object.assign({}, action.payload);
            /** @type {?} */
            let entries = {};
            if (content.entries) {
                entries = content.entries.reduce((/**
                 * @param {?} entryMap
                 * @param {?} entry
                 * @return {?}
                 */
                (entryMap, entry) => {
                    return Object.assign({}, entryMap, { [entry.product.code]: state.entries && state.entries[entry.product.code]
                            ? Object.assign({}, state.entries[entry.product.code], entry) : entry });
                }), Object.assign({}, entries));
                delete content['entries'];
            }
            return Object.assign({}, state, { content,
                entries, refresh: false });
        }
        case CartActions.CART_REMOVE_ENTRY_SUCCESS:
        case CartActions.CART_UPDATE_ENTRY_SUCCESS:
        case CartActions.CART_ADD_ENTRY_SUCCESS: {
            return Object.assign({}, state, { refresh: true });
        }
        case CartActions.RESET_CART_DETAILS: {
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
        case CartActions.CLEAR_CART: {
            return initialState;
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvc3RvcmUvcmVkdWNlcnMvY2FydC5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBRy9DLE1BQU0sT0FBTyxZQUFZLEdBQWM7SUFDckMsT0FBTyxFQUFFLEVBQUU7SUFDWCxPQUFPLEVBQUUsRUFBRTtJQUNYLE9BQU8sRUFBRSxLQUFLO0lBQ2QsaUJBQWlCLEVBQUUsS0FBSztDQUN6Qjs7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FDckIsS0FBSyxHQUFHLFlBQVksRUFDcEIsTUFBNEQ7SUFFNUQsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzNCLHlCQUNLLEtBQUssSUFDUixpQkFBaUIsRUFBRSxLQUFLLElBQ3hCO1NBQ0g7UUFFRCxLQUFLLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ25DLHlCQUNLLEtBQUssSUFDUixpQkFBaUIsRUFBRSxJQUFJLEVBQ3ZCLE9BQU8sRUFBRSxJQUFJLElBQ2I7U0FDSDtRQUVELEtBQUssV0FBVyxDQUFDLGlCQUFpQixDQUFDO1FBQ25DLEtBQUssV0FBVyxDQUFDLG1CQUFtQixDQUFDLENBQUM7O2tCQUM5QixPQUFPLHFCQUFRLE1BQU0sQ0FBQyxPQUFPLENBQUU7O2dCQUNqQyxPQUFPLEdBQUcsRUFBRTtZQUNoQixJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7Z0JBQ25CLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU07Ozs7O2dCQUM5QixDQUFDLFFBQWlDLEVBQUUsS0FBaUIsRUFBRSxFQUFFO29CQUN2RCx5QkFDSyxRQUFRLElBT1gsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUNsQixLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7NEJBQ2hELENBQUMsbUJBQ00sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUNqQyxLQUFLLEVBRVosQ0FBQyxDQUFDLEtBQUssSUFDWDtnQkFDSixDQUFDLHFCQUVJLE9BQU8sRUFFYixDQUFDO2dCQUNGLE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzNCO1lBQ0QseUJBQ0ssS0FBSyxJQUNSLE9BQU87Z0JBQ1AsT0FBTyxFQUNQLE9BQU8sRUFBRSxLQUFLLElBQ2Q7U0FDSDtRQUVELEtBQUssV0FBVyxDQUFDLHlCQUF5QixDQUFDO1FBQzNDLEtBQUssV0FBVyxDQUFDLHlCQUF5QixDQUFDO1FBQzNDLEtBQUssV0FBVyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDdkMseUJBQ0ssS0FBSyxJQUNSLE9BQU8sRUFBRSxJQUFJLElBQ2I7U0FDSDtRQUVELEtBQUssV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDbkMsT0FBTztnQkFDTCxPQUFPLEVBQUU7b0JBQ1AsSUFBSSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSTtvQkFDeEIsSUFBSSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSTtpQkFDekI7Z0JBQ0QsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsaUJBQWlCLEVBQUUsS0FBSzthQUN6QixDQUFDO1NBQ0g7UUFFRCxLQUFLLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMzQixPQUFPLFlBQVksQ0FBQztTQUNyQjtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3JkZXJFbnRyeSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IENhcnRBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBDYXJ0U3RhdGUgfSBmcm9tICcuLi9jYXJ0LXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogQ2FydFN0YXRlID0ge1xuICBjb250ZW50OiB7fSxcbiAgZW50cmllczoge30sXG4gIHJlZnJlc2g6IGZhbHNlLFxuICBjYXJ0TWVyZ2VDb21wbGV0ZTogZmFsc2UsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogQ2FydEFjdGlvbnMuQ2FydEFjdGlvbiB8IENhcnRBY3Rpb25zLkNhcnRFbnRyeUFjdGlvblxuKTogQ2FydFN0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQ2FydEFjdGlvbnMuTUVSR0VfQ0FSVDoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnRNZXJnZUNvbXBsZXRlOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBDYXJ0QWN0aW9ucy5NRVJHRV9DQVJUX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJ0TWVyZ2VDb21wbGV0ZTogdHJ1ZSxcbiAgICAgICAgcmVmcmVzaDogdHJ1ZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBDYXJ0QWN0aW9ucy5MT0FEX0NBUlRfU1VDQ0VTUzpcbiAgICBjYXNlIENhcnRBY3Rpb25zLkNSRUFURV9DQVJUX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB7IC4uLmFjdGlvbi5wYXlsb2FkIH07XG4gICAgICBsZXQgZW50cmllcyA9IHt9O1xuICAgICAgaWYgKGNvbnRlbnQuZW50cmllcykge1xuICAgICAgICBlbnRyaWVzID0gY29udGVudC5lbnRyaWVzLnJlZHVjZShcbiAgICAgICAgICAoZW50cnlNYXA6IHsgW2NvZGU6IHN0cmluZ106IGFueSB9LCBlbnRyeTogT3JkZXJFbnRyeSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgLi4uZW50cnlNYXAsXG4gICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgIElmIHdlIHJlZnJlc2ggdGhlIHBhZ2UgZnJvbSBjYXJ0IGRldGFpbHMgcGFnZSwgMiBsb2FkIGNhcnRcbiAgICAgICAgICAgICAgQWN0aW9ucyBnZXRzIGRpc3BhdGNoZWQuIE9uZSBpcyBub24tZGV0YWlsLCBhbmQgdGhlIHNlY29uZCBpcyBkZXRhaWxlZC5cbiAgICAgICAgICAgICAgSW4gdGhlIGNhc2Ugd2hlcmUgdGhlIGRldGFpbGVkIG9uY2UgZ2V0IHJlc29sdmVkIGZpcnN0LCB3ZSBtZXJnZSB0aGUgZXhpc3RpbmdcbiAgICAgICAgICAgICAgZGF0YSB3aXRoIHRoZSBuZXcgZGF0YSBmcm9tIHRoZSByZXNwb25zZSAodG8gbm90IGRlbGV0ZSBleGlzdGluZyBkZXRhaWxlZCBkYXRhKS5cbiAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgW2VudHJ5LnByb2R1Y3QuY29kZV06XG4gICAgICAgICAgICAgICAgc3RhdGUuZW50cmllcyAmJiBzdGF0ZS5lbnRyaWVzW2VudHJ5LnByb2R1Y3QuY29kZV1cbiAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmVudHJpZXNbZW50cnkucHJvZHVjdC5jb2RlXSxcbiAgICAgICAgICAgICAgICAgICAgICAuLi5lbnRyeSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgOiBlbnRyeSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAuLi5lbnRyaWVzLFxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgZGVsZXRlIGNvbnRlbnRbJ2VudHJpZXMnXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjb250ZW50LFxuICAgICAgICBlbnRyaWVzLFxuICAgICAgICByZWZyZXNoOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBDYXJ0QWN0aW9ucy5DQVJUX1JFTU9WRV9FTlRSWV9TVUNDRVNTOlxuICAgIGNhc2UgQ2FydEFjdGlvbnMuQ0FSVF9VUERBVEVfRU5UUllfU1VDQ0VTUzpcbiAgICBjYXNlIENhcnRBY3Rpb25zLkNBUlRfQUREX0VOVFJZX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICByZWZyZXNoOiB0cnVlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIENhcnRBY3Rpb25zLlJFU0VUX0NBUlRfREVUQUlMUzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29udGVudDoge1xuICAgICAgICAgIGd1aWQ6IHN0YXRlLmNvbnRlbnQuZ3VpZCxcbiAgICAgICAgICBjb2RlOiBzdGF0ZS5jb250ZW50LmNvZGUsXG4gICAgICAgIH0sXG4gICAgICAgIGVudHJpZXM6IHt9LFxuICAgICAgICByZWZyZXNoOiBmYWxzZSxcbiAgICAgICAgY2FydE1lcmdlQ29tcGxldGU6IGZhbHNlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIENhcnRBY3Rpb25zLkNMRUFSX0NBUlQ6IHtcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19