/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CartActions } from '../actions/index';
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
        case CartActions.MERGE_CART: {
            return tslib_1.__assign({}, state, { cartMergeComplete: false });
        }
        case CartActions.MERGE_CART_SUCCESS: {
            return tslib_1.__assign({}, state, { cartMergeComplete: true, refresh: true });
        }
        case CartActions.LOAD_CART_SUCCESS:
        case CartActions.CREATE_CART_SUCCESS: {
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
        case CartActions.CART_REMOVE_ENTRY_SUCCESS:
        case CartActions.CART_UPDATE_ENTRY_SUCCESS:
        case CartActions.CART_ADD_ENTRY_SUCCESS: {
            return tslib_1.__assign({}, state, { refresh: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvc3RvcmUvcmVkdWNlcnMvY2FydC5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUcvQyxNQUFNLEtBQU8sWUFBWSxHQUFjO0lBQ3JDLE9BQU8sRUFBRSxFQUFFO0lBQ1gsT0FBTyxFQUFFLEVBQUU7SUFDWCxPQUFPLEVBQUUsS0FBSztJQUNkLGlCQUFpQixFQUFFLEtBQUs7Q0FDekI7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQW9CLEVBQ3BCLE1BQTREO0lBRDVELHNCQUFBLEVBQUEsb0JBQW9CO0lBR3BCLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMzQiw0QkFDSyxLQUFLLElBQ1IsaUJBQWlCLEVBQUUsS0FBSyxJQUN4QjtTQUNIO1FBRUQsS0FBSyxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUNuQyw0QkFDSyxLQUFLLElBQ1IsaUJBQWlCLEVBQUUsSUFBSSxFQUN2QixPQUFPLEVBQUUsSUFBSSxJQUNiO1NBQ0g7UUFFRCxLQUFLLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQztRQUNuQyxLQUFLLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDOztnQkFDOUIsT0FBTyx3QkFBUSxNQUFNLENBQUMsT0FBTyxDQUFFOztnQkFDakMsT0FBTyxHQUFHLEVBQUU7WUFDaEIsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO2dCQUNuQixPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNOzs7OztnQkFDOUIsVUFBQyxRQUFpQyxFQUFFLEtBQWlCOztvQkFDbkQsNEJBQ0ssUUFBUSxlQU9WLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUNqQixLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7d0JBQ2hELENBQUMsc0JBQ00sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUNqQyxLQUFLLEVBRVosQ0FBQyxDQUFDLEtBQUssT0FDWDtnQkFDSixDQUFDLHdCQUVJLE9BQU8sRUFFYixDQUFDO2dCQUNGLE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzNCO1lBQ0QsNEJBQ0ssS0FBSyxJQUNSLE9BQU8sU0FBQTtnQkFDUCxPQUFPLFNBQUEsRUFDUCxPQUFPLEVBQUUsS0FBSyxJQUNkO1NBQ0g7UUFFRCxLQUFLLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQztRQUMzQyxLQUFLLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQztRQUMzQyxLQUFLLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQ3ZDLDRCQUNLLEtBQUssSUFDUixPQUFPLEVBQUUsSUFBSSxJQUNiO1NBQ0g7UUFFRCxLQUFLLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ25DLE9BQU87Z0JBQ0wsT0FBTyxFQUFFO29CQUNQLElBQUksRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUk7b0JBQ3hCLElBQUksRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUk7aUJBQ3pCO2dCQUNELE9BQU8sRUFBRSxFQUFFO2dCQUNYLE9BQU8sRUFBRSxLQUFLO2dCQUNkLGlCQUFpQixFQUFFLEtBQUs7YUFDekIsQ0FBQztTQUNIO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcmRlckVudHJ5IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgQ2FydEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IENhcnRTdGF0ZSB9IGZyb20gJy4uL2NhcnQtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBDYXJ0U3RhdGUgPSB7XG4gIGNvbnRlbnQ6IHt9LFxuICBlbnRyaWVzOiB7fSxcbiAgcmVmcmVzaDogZmFsc2UsXG4gIGNhcnRNZXJnZUNvbXBsZXRlOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBDYXJ0QWN0aW9ucy5DYXJ0QWN0aW9uIHwgQ2FydEFjdGlvbnMuQ2FydEVudHJ5QWN0aW9uXG4pOiBDYXJ0U3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBDYXJ0QWN0aW9ucy5NRVJHRV9DQVJUOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydE1lcmdlQ29tcGxldGU6IGZhbHNlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIENhcnRBY3Rpb25zLk1FUkdFX0NBUlRfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnRNZXJnZUNvbXBsZXRlOiB0cnVlLFxuICAgICAgICByZWZyZXNoOiB0cnVlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIENhcnRBY3Rpb25zLkxPQURfQ0FSVF9TVUNDRVNTOlxuICAgIGNhc2UgQ2FydEFjdGlvbnMuQ1JFQVRFX0NBUlRfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgY29udGVudCA9IHsgLi4uYWN0aW9uLnBheWxvYWQgfTtcbiAgICAgIGxldCBlbnRyaWVzID0ge307XG4gICAgICBpZiAoY29udGVudC5lbnRyaWVzKSB7XG4gICAgICAgIGVudHJpZXMgPSBjb250ZW50LmVudHJpZXMucmVkdWNlKFxuICAgICAgICAgIChlbnRyeU1hcDogeyBbY29kZTogc3RyaW5nXTogYW55IH0sIGVudHJ5OiBPcmRlckVudHJ5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAuLi5lbnRyeU1hcCxcbiAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgSWYgd2UgcmVmcmVzaCB0aGUgcGFnZSBmcm9tIGNhcnQgZGV0YWlscyBwYWdlLCAyIGxvYWQgY2FydFxuICAgICAgICAgICAgICBBY3Rpb25zIGdldHMgZGlzcGF0Y2hlZC4gT25lIGlzIG5vbi1kZXRhaWwsIGFuZCB0aGUgc2Vjb25kIGlzIGRldGFpbGVkLlxuICAgICAgICAgICAgICBJbiB0aGUgY2FzZSB3aGVyZSB0aGUgZGV0YWlsZWQgb25jZSBnZXQgcmVzb2x2ZWQgZmlyc3QsIHdlIG1lcmdlIHRoZSBleGlzdGluZ1xuICAgICAgICAgICAgICBkYXRhIHdpdGggdGhlIG5ldyBkYXRhIGZyb20gdGhlIHJlc3BvbnNlICh0byBub3QgZGVsZXRlIGV4aXN0aW5nIGRldGFpbGVkIGRhdGEpLlxuICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICBbZW50cnkucHJvZHVjdC5jb2RlXTpcbiAgICAgICAgICAgICAgICBzdGF0ZS5lbnRyaWVzICYmIHN0YXRlLmVudHJpZXNbZW50cnkucHJvZHVjdC5jb2RlXVxuICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuZW50cmllc1tlbnRyeS5wcm9kdWN0LmNvZGVdLFxuICAgICAgICAgICAgICAgICAgICAgIC4uLmVudHJ5LFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA6IGVudHJ5LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIC4uLmVudHJpZXMsXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBkZWxldGUgY29udGVudFsnZW50cmllcyddO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNvbnRlbnQsXG4gICAgICAgIGVudHJpZXMsXG4gICAgICAgIHJlZnJlc2g6IGZhbHNlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIENhcnRBY3Rpb25zLkNBUlRfUkVNT1ZFX0VOVFJZX1NVQ0NFU1M6XG4gICAgY2FzZSBDYXJ0QWN0aW9ucy5DQVJUX1VQREFURV9FTlRSWV9TVUNDRVNTOlxuICAgIGNhc2UgQ2FydEFjdGlvbnMuQ0FSVF9BRERfRU5UUllfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJlZnJlc2g6IHRydWUsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgQ2FydEFjdGlvbnMuUkVTRVRfQ0FSVF9ERVRBSUxTOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgZ3VpZDogc3RhdGUuY29udGVudC5ndWlkLFxuICAgICAgICAgIGNvZGU6IHN0YXRlLmNvbnRlbnQuY29kZSxcbiAgICAgICAgfSxcbiAgICAgICAgZW50cmllczoge30sXG4gICAgICAgIHJlZnJlc2g6IGZhbHNlLFxuICAgICAgICBjYXJ0TWVyZ2VDb21wbGV0ZTogZmFsc2UsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==