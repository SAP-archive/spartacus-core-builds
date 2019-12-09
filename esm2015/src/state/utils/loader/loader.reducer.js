/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const initialLoaderState = {
    loading: false,
    error: false,
    success: false,
    value: undefined,
};
/**
 * Higher order reducer that adds generic loading flag to chunk of the state
 *
 * Utilizes "loader" meta field of actions to set specific flags for specific
 * action (LOAD, SUCCESS, FAIL, RESET)
 * @template T
 * @param {?} entityType
 * @param {?=} reducer
 * @return {?}
 */
export function loaderReducer(entityType, reducer) {
    return (/**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    (state = initialLoaderState, action) => {
        if (action.meta &&
            action.meta.loader &&
            action.meta.entityType === entityType) {
            /** @type {?} */
            const entity = action.meta.loader;
            if (entity.load) {
                return Object.assign({}, state, { loading: true, value: reducer ? reducer(state.value, action) : state.value });
            }
            else if (entity.error) {
                return Object.assign({}, state, { loading: false, error: true, success: false, value: reducer ? reducer(state.value, action) : undefined });
            }
            else if (entity.success) {
                return Object.assign({}, state, { value: reducer ? reducer(state.value, action) : action.payload, loading: false, error: false, success: true });
            }
            else {
                // reset state action
                return Object.assign({}, initialLoaderState, { value: reducer
                        ? reducer(initialLoaderState.value, action)
                        : initialLoaderState.value });
            }
        }
        if (reducer) {
            /** @type {?} */
            const newValue = reducer(state.value, action);
            if (newValue !== state.value) {
                return Object.assign({}, state, { value: newValue });
            }
        }
        return state;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsTUFBTSxPQUFPLGtCQUFrQixHQUFxQjtJQUNsRCxPQUFPLEVBQUUsS0FBSztJQUNkLEtBQUssRUFBRSxLQUFLO0lBQ1osT0FBTyxFQUFFLEtBQUs7SUFDZCxLQUFLLEVBQUUsU0FBUztDQUNqQjs7Ozs7Ozs7Ozs7QUFRRCxNQUFNLFVBQVUsYUFBYSxDQUMzQixVQUFrQixFQUNsQixPQUF5QztJQUV6Qzs7Ozs7SUFBTyxDQUNMLFFBQXdCLGtCQUFrQixFQUMxQyxNQUFvQixFQUNKLEVBQUU7UUFDbEIsSUFDRSxNQUFNLENBQUMsSUFBSTtZQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxVQUFVLEVBQ3JDOztrQkFDTSxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBRWpDLElBQUksTUFBTSxDQUFDLElBQUksRUFBRTtnQkFDZix5QkFDSyxLQUFLLElBQ1IsT0FBTyxFQUFFLElBQUksRUFDYixLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssSUFDM0Q7YUFDSDtpQkFBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUU7Z0JBQ3ZCLHlCQUNLLEtBQUssSUFDUixPQUFPLEVBQUUsS0FBSyxFQUNkLEtBQUssRUFBRSxJQUFJLEVBQ1gsT0FBTyxFQUFFLEtBQUssRUFDZCxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUN6RDthQUNIO2lCQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtnQkFDekIseUJBQ0ssS0FBSyxJQUNSLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUM5RCxPQUFPLEVBQUUsS0FBSyxFQUNkLEtBQUssRUFBRSxLQUFLLEVBQ1osT0FBTyxFQUFFLElBQUksSUFDYjthQUNIO2lCQUFNO2dCQUNMLHFCQUFxQjtnQkFDckIseUJBQ0ssa0JBQWtCLElBQ3JCLEtBQUssRUFBRSxPQUFPO3dCQUNaLENBQUMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQzt3QkFDM0MsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLEtBQUssSUFDNUI7YUFDSDtTQUNGO1FBRUQsSUFBSSxPQUFPLEVBQUU7O2tCQUNMLFFBQVEsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7WUFDN0MsSUFBSSxRQUFRLEtBQUssS0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDNUIseUJBQVksS0FBSyxJQUFFLEtBQUssRUFBRSxRQUFRLElBQUc7YUFDdEM7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQyxFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi9sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHsgTG9hZGVyQWN0aW9uIH0gZnJvbSAnLi9sb2FkZXIuYWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxMb2FkZXJTdGF0ZTogTG9hZGVyU3RhdGU8YW55PiA9IHtcbiAgbG9hZGluZzogZmFsc2UsXG4gIGVycm9yOiBmYWxzZSxcbiAgc3VjY2VzczogZmFsc2UsXG4gIHZhbHVlOiB1bmRlZmluZWQsXG59O1xuXG4vKipcbiAqIEhpZ2hlciBvcmRlciByZWR1Y2VyIHRoYXQgYWRkcyBnZW5lcmljIGxvYWRpbmcgZmxhZyB0byBjaHVuayBvZiB0aGUgc3RhdGVcbiAqXG4gKiBVdGlsaXplcyBcImxvYWRlclwiIG1ldGEgZmllbGQgb2YgYWN0aW9ucyB0byBzZXQgc3BlY2lmaWMgZmxhZ3MgZm9yIHNwZWNpZmljXG4gKiBhY3Rpb24gKExPQUQsIFNVQ0NFU1MsIEZBSUwsIFJFU0VUKVxuICovXG5leHBvcnQgZnVuY3Rpb24gbG9hZGVyUmVkdWNlcjxUPihcbiAgZW50aXR5VHlwZTogc3RyaW5nLFxuICByZWR1Y2VyPzogKHN0YXRlOiBULCBhY3Rpb246IEFjdGlvbikgPT4gVFxuKTogKHN0YXRlOiBMb2FkZXJTdGF0ZTxUPiwgYWN0aW9uOiBMb2FkZXJBY3Rpb24pID0+IExvYWRlclN0YXRlPFQ+IHtcbiAgcmV0dXJuIChcbiAgICBzdGF0ZTogTG9hZGVyU3RhdGU8VD4gPSBpbml0aWFsTG9hZGVyU3RhdGUsXG4gICAgYWN0aW9uOiBMb2FkZXJBY3Rpb25cbiAgKTogTG9hZGVyU3RhdGU8VD4gPT4ge1xuICAgIGlmIChcbiAgICAgIGFjdGlvbi5tZXRhICYmXG4gICAgICBhY3Rpb24ubWV0YS5sb2FkZXIgJiZcbiAgICAgIGFjdGlvbi5tZXRhLmVudGl0eVR5cGUgPT09IGVudGl0eVR5cGVcbiAgICApIHtcbiAgICAgIGNvbnN0IGVudGl0eSA9IGFjdGlvbi5tZXRhLmxvYWRlcjtcblxuICAgICAgaWYgKGVudGl0eS5sb2FkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICB2YWx1ZTogcmVkdWNlciA/IHJlZHVjZXIoc3RhdGUudmFsdWUsIGFjdGlvbikgOiBzdGF0ZS52YWx1ZSxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAoZW50aXR5LmVycm9yKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IHRydWUsXG4gICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgdmFsdWU6IHJlZHVjZXIgPyByZWR1Y2VyKHN0YXRlLnZhbHVlLCBhY3Rpb24pIDogdW5kZWZpbmVkLFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChlbnRpdHkuc3VjY2Vzcykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIHZhbHVlOiByZWR1Y2VyID8gcmVkdWNlcihzdGF0ZS52YWx1ZSwgYWN0aW9uKSA6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcmVzZXQgc3RhdGUgYWN0aW9uXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uaW5pdGlhbExvYWRlclN0YXRlLFxuICAgICAgICAgIHZhbHVlOiByZWR1Y2VyXG4gICAgICAgICAgICA/IHJlZHVjZXIoaW5pdGlhbExvYWRlclN0YXRlLnZhbHVlLCBhY3Rpb24pXG4gICAgICAgICAgICA6IGluaXRpYWxMb2FkZXJTdGF0ZS52YWx1ZSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVkdWNlcikge1xuICAgICAgY29uc3QgbmV3VmFsdWUgPSByZWR1Y2VyKHN0YXRlLnZhbHVlLCBhY3Rpb24pO1xuICAgICAgaWYgKG5ld1ZhbHVlICE9PSBzdGF0ZS52YWx1ZSkge1xuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdmFsdWU6IG5ld1ZhbHVlIH07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZTtcbiAgfTtcbn1cbiJdfQ==