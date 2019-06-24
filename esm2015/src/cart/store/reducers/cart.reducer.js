/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fromAction from '../actions/index';
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
        case fromAction.MERGE_CART: {
            return Object.assign({}, state, { cartMergeComplete: false });
        }
        case fromAction.MERGE_CART_SUCCESS: {
            return Object.assign({}, state, { cartMergeComplete: true, refresh: true });
        }
        case fromAction.LOAD_CART_SUCCESS:
        case fromAction.CREATE_CART_SUCCESS: {
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
        case fromAction.REMOVE_ENTRY_SUCCESS:
        case fromAction.UPDATE_ENTRY_SUCCESS:
        case fromAction.ADD_ENTRY_SUCCESS: {
            return Object.assign({}, state, { refresh: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvc3RvcmUvcmVkdWNlcnMvY2FydC5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEtBQUssVUFBVSxNQUFNLGtCQUFrQixDQUFDOztBQUcvQyxNQUFNLE9BQU8sWUFBWSxHQUFjO0lBQ3JDLE9BQU8sRUFBRSxFQUFFO0lBQ1gsT0FBTyxFQUFFLEVBQUU7SUFDWCxPQUFPLEVBQUUsS0FBSztJQUNkLGlCQUFpQixFQUFFLEtBQUs7Q0FDekI7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BQTBEO0lBRTFELFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMxQix5QkFDSyxLQUFLLElBQ1IsaUJBQWlCLEVBQUUsS0FBSyxJQUN4QjtTQUNIO1FBRUQsS0FBSyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUNsQyx5QkFDSyxLQUFLLElBQ1IsaUJBQWlCLEVBQUUsSUFBSSxFQUN2QixPQUFPLEVBQUUsSUFBSSxJQUNiO1NBQ0g7UUFFRCxLQUFLLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQztRQUNsQyxLQUFLLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDOztrQkFDN0IsT0FBTyxxQkFBUSxNQUFNLENBQUMsT0FBTyxDQUFFOztnQkFDakMsT0FBTyxHQUFHLEVBQUU7WUFDaEIsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO2dCQUNuQixPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNOzs7OztnQkFDOUIsQ0FBQyxRQUFpQyxFQUFFLEtBQWlCLEVBQUUsRUFBRTtvQkFDdkQseUJBQ0ssUUFBUSxJQU9YLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFDbEIsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDOzRCQUNoRCxDQUFDLG1CQUNNLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFDakMsS0FBSyxFQUVaLENBQUMsQ0FBQyxLQUFLLElBQ1g7Z0JBQ0osQ0FBQyxxQkFFSSxPQUFPLEVBRWIsQ0FBQztnQkFDRixPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMzQjtZQUNELHlCQUNLLEtBQUssSUFDUixPQUFPO2dCQUNQLE9BQU8sRUFDUCxPQUFPLEVBQUUsS0FBSyxJQUNkO1NBQ0g7UUFFRCxLQUFLLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQztRQUNyQyxLQUFLLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQztRQUNyQyxLQUFLLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQ2pDLHlCQUNLLEtBQUssSUFDUixPQUFPLEVBQUUsSUFBSSxJQUNiO1NBQ0g7UUFFRCxLQUFLLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ2xDLE9BQU87Z0JBQ0wsT0FBTyxFQUFFO29CQUNQLElBQUksRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUk7b0JBQ3hCLElBQUksRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUk7aUJBQ3pCO2dCQUNELE9BQU8sRUFBRSxFQUFFO2dCQUNYLE9BQU8sRUFBRSxLQUFLO2dCQUNkLGlCQUFpQixFQUFFLEtBQUs7YUFDekIsQ0FBQztTQUNIO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcmRlckVudHJ5IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0ICogYXMgZnJvbUFjdGlvbiBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IENhcnRTdGF0ZSB9IGZyb20gJy4uL2NhcnQtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBDYXJ0U3RhdGUgPSB7XG4gIGNvbnRlbnQ6IHt9LFxuICBlbnRyaWVzOiB7fSxcbiAgcmVmcmVzaDogZmFsc2UsXG4gIGNhcnRNZXJnZUNvbXBsZXRlOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBmcm9tQWN0aW9uLkNhcnRBY3Rpb24gfCBmcm9tQWN0aW9uLkNhcnRFbnRyeUFjdGlvblxuKTogQ2FydFN0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgZnJvbUFjdGlvbi5NRVJHRV9DQVJUOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydE1lcmdlQ29tcGxldGU6IGZhbHNlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21BY3Rpb24uTUVSR0VfQ0FSVF9TVUNDRVNTOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydE1lcmdlQ29tcGxldGU6IHRydWUsXG4gICAgICAgIHJlZnJlc2g6IHRydWUsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgZnJvbUFjdGlvbi5MT0FEX0NBUlRfU1VDQ0VTUzpcbiAgICBjYXNlIGZyb21BY3Rpb24uQ1JFQVRFX0NBUlRfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgY29udGVudCA9IHsgLi4uYWN0aW9uLnBheWxvYWQgfTtcbiAgICAgIGxldCBlbnRyaWVzID0ge307XG4gICAgICBpZiAoY29udGVudC5lbnRyaWVzKSB7XG4gICAgICAgIGVudHJpZXMgPSBjb250ZW50LmVudHJpZXMucmVkdWNlKFxuICAgICAgICAgIChlbnRyeU1hcDogeyBbY29kZTogc3RyaW5nXTogYW55IH0sIGVudHJ5OiBPcmRlckVudHJ5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAuLi5lbnRyeU1hcCxcbiAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgSWYgd2UgcmVmcmVzaCB0aGUgcGFnZSBmcm9tIGNhcnQgZGV0YWlscyBwYWdlLCAyIGxvYWQgY2FydFxuICAgICAgICAgICAgICBBY3Rpb25zIGdldHMgZGlzcGF0Y2hlZC4gT25lIGlzIG5vbi1kZXRhaWwsIGFuZCB0aGUgc2Vjb25kIGlzIGRldGFpbGVkLlxuICAgICAgICAgICAgICBJbiB0aGUgY2FzZSB3aGVyZSB0aGUgZGV0YWlsZWQgb25jZSBnZXQgcmVzb2x2ZWQgZmlyc3QsIHdlIG1lcmdlIHRoZSBleGlzdGluZ1xuICAgICAgICAgICAgICBkYXRhIHdpdGggdGhlIG5ldyBkYXRhIGZyb20gdGhlIHJlc3BvbnNlICh0byBub3QgZGVsZXRlIGV4aXN0aW5nIGRldGFpbGVkIGRhdGEpLlxuICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICBbZW50cnkucHJvZHVjdC5jb2RlXTpcbiAgICAgICAgICAgICAgICBzdGF0ZS5lbnRyaWVzICYmIHN0YXRlLmVudHJpZXNbZW50cnkucHJvZHVjdC5jb2RlXVxuICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuZW50cmllc1tlbnRyeS5wcm9kdWN0LmNvZGVdLFxuICAgICAgICAgICAgICAgICAgICAgIC4uLmVudHJ5LFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA6IGVudHJ5LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIC4uLmVudHJpZXMsXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBkZWxldGUgY29udGVudFsnZW50cmllcyddO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNvbnRlbnQsXG4gICAgICAgIGVudHJpZXMsXG4gICAgICAgIHJlZnJlc2g6IGZhbHNlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21BY3Rpb24uUkVNT1ZFX0VOVFJZX1NVQ0NFU1M6XG4gICAgY2FzZSBmcm9tQWN0aW9uLlVQREFURV9FTlRSWV9TVUNDRVNTOlxuICAgIGNhc2UgZnJvbUFjdGlvbi5BRERfRU5UUllfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJlZnJlc2g6IHRydWUsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgZnJvbUFjdGlvbi5SRVNFVF9DQVJUX0RFVEFJTFM6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICBndWlkOiBzdGF0ZS5jb250ZW50Lmd1aWQsXG4gICAgICAgICAgY29kZTogc3RhdGUuY29udGVudC5jb2RlLFxuICAgICAgICB9LFxuICAgICAgICBlbnRyaWVzOiB7fSxcbiAgICAgICAgcmVmcmVzaDogZmFsc2UsXG4gICAgICAgIGNhcnRNZXJnZUNvbXBsZXRlOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19