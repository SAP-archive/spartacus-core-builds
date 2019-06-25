/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvc3RvcmUvcmVkdWNlcnMvY2FydC5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBRy9DLE1BQU0sT0FBTyxZQUFZLEdBQWM7SUFDckMsT0FBTyxFQUFFLEVBQUU7SUFDWCxPQUFPLEVBQUUsRUFBRTtJQUNYLE9BQU8sRUFBRSxLQUFLO0lBQ2QsaUJBQWlCLEVBQUUsS0FBSztDQUN6Qjs7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FDckIsS0FBSyxHQUFHLFlBQVksRUFDcEIsTUFBNEQ7SUFFNUQsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzNCLHlCQUNLLEtBQUssSUFDUixpQkFBaUIsRUFBRSxLQUFLLElBQ3hCO1NBQ0g7UUFFRCxLQUFLLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ25DLHlCQUNLLEtBQUssSUFDUixpQkFBaUIsRUFBRSxJQUFJLEVBQ3ZCLE9BQU8sRUFBRSxJQUFJLElBQ2I7U0FDSDtRQUVELEtBQUssV0FBVyxDQUFDLGlCQUFpQixDQUFDO1FBQ25DLEtBQUssV0FBVyxDQUFDLG1CQUFtQixDQUFDLENBQUM7O2tCQUM5QixPQUFPLHFCQUFRLE1BQU0sQ0FBQyxPQUFPLENBQUU7O2dCQUNqQyxPQUFPLEdBQUcsRUFBRTtZQUNoQixJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7Z0JBQ25CLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU07Ozs7O2dCQUM5QixDQUFDLFFBQWlDLEVBQUUsS0FBaUIsRUFBRSxFQUFFO29CQUN2RCx5QkFDSyxRQUFRLElBT1gsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUNsQixLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7NEJBQ2hELENBQUMsbUJBQ00sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUNqQyxLQUFLLEVBRVosQ0FBQyxDQUFDLEtBQUssSUFDWDtnQkFDSixDQUFDLHFCQUVJLE9BQU8sRUFFYixDQUFDO2dCQUNGLE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzNCO1lBQ0QseUJBQ0ssS0FBSyxJQUNSLE9BQU87Z0JBQ1AsT0FBTyxFQUNQLE9BQU8sRUFBRSxLQUFLLElBQ2Q7U0FDSDtRQUVELEtBQUssV0FBVyxDQUFDLHlCQUF5QixDQUFDO1FBQzNDLEtBQUssV0FBVyxDQUFDLHlCQUF5QixDQUFDO1FBQzNDLEtBQUssV0FBVyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDdkMseUJBQ0ssS0FBSyxJQUNSLE9BQU8sRUFBRSxJQUFJLElBQ2I7U0FDSDtRQUVELEtBQUssV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDbkMsT0FBTztnQkFDTCxPQUFPLEVBQUU7b0JBQ1AsSUFBSSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSTtvQkFDeEIsSUFBSSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSTtpQkFDekI7Z0JBQ0QsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsaUJBQWlCLEVBQUUsS0FBSzthQUN6QixDQUFDO1NBQ0g7S0FDRjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9yZGVyRW50cnkgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBDYXJ0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgQ2FydFN0YXRlIH0gZnJvbSAnLi4vY2FydC1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IENhcnRTdGF0ZSA9IHtcbiAgY29udGVudDoge30sXG4gIGVudHJpZXM6IHt9LFxuICByZWZyZXNoOiBmYWxzZSxcbiAgY2FydE1lcmdlQ29tcGxldGU6IGZhbHNlLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IENhcnRBY3Rpb25zLkNhcnRBY3Rpb24gfCBDYXJ0QWN0aW9ucy5DYXJ0RW50cnlBY3Rpb25cbik6IENhcnRTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIENhcnRBY3Rpb25zLk1FUkdFX0NBUlQ6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJ0TWVyZ2VDb21wbGV0ZTogZmFsc2UsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgQ2FydEFjdGlvbnMuTUVSR0VfQ0FSVF9TVUNDRVNTOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydE1lcmdlQ29tcGxldGU6IHRydWUsXG4gICAgICAgIHJlZnJlc2g6IHRydWUsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgQ2FydEFjdGlvbnMuTE9BRF9DQVJUX1NVQ0NFU1M6XG4gICAgY2FzZSBDYXJ0QWN0aW9ucy5DUkVBVEVfQ0FSVF9TVUNDRVNTOiB7XG4gICAgICBjb25zdCBjb250ZW50ID0geyAuLi5hY3Rpb24ucGF5bG9hZCB9O1xuICAgICAgbGV0IGVudHJpZXMgPSB7fTtcbiAgICAgIGlmIChjb250ZW50LmVudHJpZXMpIHtcbiAgICAgICAgZW50cmllcyA9IGNvbnRlbnQuZW50cmllcy5yZWR1Y2UoXG4gICAgICAgICAgKGVudHJ5TWFwOiB7IFtjb2RlOiBzdHJpbmddOiBhbnkgfSwgZW50cnk6IE9yZGVyRW50cnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLmVudHJ5TWFwLFxuICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICBJZiB3ZSByZWZyZXNoIHRoZSBwYWdlIGZyb20gY2FydCBkZXRhaWxzIHBhZ2UsIDIgbG9hZCBjYXJ0XG4gICAgICAgICAgICAgIEFjdGlvbnMgZ2V0cyBkaXNwYXRjaGVkLiBPbmUgaXMgbm9uLWRldGFpbCwgYW5kIHRoZSBzZWNvbmQgaXMgZGV0YWlsZWQuXG4gICAgICAgICAgICAgIEluIHRoZSBjYXNlIHdoZXJlIHRoZSBkZXRhaWxlZCBvbmNlIGdldCByZXNvbHZlZCBmaXJzdCwgd2UgbWVyZ2UgdGhlIGV4aXN0aW5nXG4gICAgICAgICAgICAgIGRhdGEgd2l0aCB0aGUgbmV3IGRhdGEgZnJvbSB0aGUgcmVzcG9uc2UgKHRvIG5vdCBkZWxldGUgZXhpc3RpbmcgZGV0YWlsZWQgZGF0YSkuXG4gICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgIFtlbnRyeS5wcm9kdWN0LmNvZGVdOlxuICAgICAgICAgICAgICAgIHN0YXRlLmVudHJpZXMgJiYgc3RhdGUuZW50cmllc1tlbnRyeS5wcm9kdWN0LmNvZGVdXG4gICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5lbnRyaWVzW2VudHJ5LnByb2R1Y3QuY29kZV0sXG4gICAgICAgICAgICAgICAgICAgICAgLi4uZW50cnksXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDogZW50cnksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgLi4uZW50cmllcyxcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGRlbGV0ZSBjb250ZW50WydlbnRyaWVzJ107XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY29udGVudCxcbiAgICAgICAgZW50cmllcyxcbiAgICAgICAgcmVmcmVzaDogZmFsc2UsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgQ2FydEFjdGlvbnMuQ0FSVF9SRU1PVkVfRU5UUllfU1VDQ0VTUzpcbiAgICBjYXNlIENhcnRBY3Rpb25zLkNBUlRfVVBEQVRFX0VOVFJZX1NVQ0NFU1M6XG4gICAgY2FzZSBDYXJ0QWN0aW9ucy5DQVJUX0FERF9FTlRSWV9TVUNDRVNTOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcmVmcmVzaDogdHJ1ZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBDYXJ0QWN0aW9ucy5SRVNFVF9DQVJUX0RFVEFJTFM6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICBndWlkOiBzdGF0ZS5jb250ZW50Lmd1aWQsXG4gICAgICAgICAgY29kZTogc3RhdGUuY29udGVudC5jb2RlLFxuICAgICAgICB9LFxuICAgICAgICBlbnRyaWVzOiB7fSxcbiAgICAgICAgcmVmcmVzaDogZmFsc2UsXG4gICAgICAgIGNhcnRNZXJnZUNvbXBsZXRlOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19