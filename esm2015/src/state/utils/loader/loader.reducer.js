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
 * @param {?} loadActionType
 * @param {?=} reducer
 * @return {?}
 */
export function loaderReducer(loadActionType, reducer) {
    return (/**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    (state = initialLoaderState, action) => {
        if (action.meta &&
            action.meta.loader &&
            action.meta.entityType === loadActionType) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0EsTUFBTSxPQUFPLGtCQUFrQixHQUFxQjtJQUNsRCxPQUFPLEVBQUUsS0FBSztJQUNkLEtBQUssRUFBRSxLQUFLO0lBQ1osT0FBTyxFQUFFLEtBQUs7SUFDZCxLQUFLLEVBQUUsU0FBUztDQUNqQjs7Ozs7Ozs7Ozs7QUFRRCxNQUFNLFVBQVUsYUFBYSxDQUMzQixjQUFzQixFQUN0QixPQUF5QztJQUV6Qzs7Ozs7SUFBTyxDQUNMLFFBQXdCLGtCQUFrQixFQUMxQyxNQUFvQixFQUNKLEVBQUU7UUFDbEIsSUFDRSxNQUFNLENBQUMsSUFBSTtZQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxjQUFjLEVBQ3pDOztrQkFDTSxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBRWpDLElBQUksTUFBTSxDQUFDLElBQUksRUFBRTtnQkFDZix5QkFDSyxLQUFLLElBQ1IsT0FBTyxFQUFFLElBQUksRUFDYixLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssSUFDM0Q7YUFDSDtpQkFBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUU7Z0JBQ3ZCLHlCQUNLLEtBQUssSUFDUixPQUFPLEVBQUUsS0FBSyxFQUNkLEtBQUssRUFBRSxJQUFJLEVBQ1gsT0FBTyxFQUFFLEtBQUssRUFDZCxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUN6RDthQUNIO2lCQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtnQkFDekIseUJBQ0ssS0FBSyxJQUNSLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUM5RCxPQUFPLEVBQUUsS0FBSyxFQUNkLEtBQUssRUFBRSxLQUFLLEVBQ1osT0FBTyxFQUFFLElBQUksSUFDYjthQUNIO2lCQUFNO2dCQUNMLHFCQUFxQjtnQkFDckIseUJBQ0ssa0JBQWtCLElBQ3JCLEtBQUssRUFBRSxPQUFPO3dCQUNaLENBQUMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQzt3QkFDM0MsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLEtBQUssSUFDNUI7YUFDSDtTQUNGO1FBRUQsSUFBSSxPQUFPLEVBQUU7O2tCQUNMLFFBQVEsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7WUFDN0MsSUFBSSxRQUFRLEtBQUssS0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDNUIseUJBQVksS0FBSyxJQUFFLEtBQUssRUFBRSxRQUFRLElBQUc7YUFDdEM7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQyxFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuL2xvYWRlci1zdGF0ZSc7XG5pbXBvcnQgeyBMb2FkZXJBY3Rpb24gfSBmcm9tICcuL2xvYWRlci5hY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbExvYWRlclN0YXRlOiBMb2FkZXJTdGF0ZTxhbnk+ID0ge1xuICBsb2FkaW5nOiBmYWxzZSxcbiAgZXJyb3I6IGZhbHNlLFxuICBzdWNjZXNzOiBmYWxzZSxcbiAgdmFsdWU6IHVuZGVmaW5lZCxcbn07XG5cbi8qKlxuICogSGlnaGVyIG9yZGVyIHJlZHVjZXIgdGhhdCBhZGRzIGdlbmVyaWMgbG9hZGluZyBmbGFnIHRvIGNodW5rIG9mIHRoZSBzdGF0ZVxuICpcbiAqIFV0aWxpemVzIFwibG9hZGVyXCIgbWV0YSBmaWVsZCBvZiBhY3Rpb25zIHRvIHNldCBzcGVjaWZpYyBmbGFncyBmb3Igc3BlY2lmaWNcbiAqIGFjdGlvbiAoTE9BRCwgU1VDQ0VTUywgRkFJTCwgUkVTRVQpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2FkZXJSZWR1Y2VyPFQ+KFxuICBsb2FkQWN0aW9uVHlwZTogc3RyaW5nLFxuICByZWR1Y2VyPzogKHN0YXRlOiBULCBhY3Rpb246IEFjdGlvbikgPT4gVFxuKTogKHN0YXRlOiBMb2FkZXJTdGF0ZTxUPiwgYWN0aW9uOiBMb2FkZXJBY3Rpb24pID0+IExvYWRlclN0YXRlPFQ+IHtcbiAgcmV0dXJuIChcbiAgICBzdGF0ZTogTG9hZGVyU3RhdGU8VD4gPSBpbml0aWFsTG9hZGVyU3RhdGUsXG4gICAgYWN0aW9uOiBMb2FkZXJBY3Rpb25cbiAgKTogTG9hZGVyU3RhdGU8VD4gPT4ge1xuICAgIGlmIChcbiAgICAgIGFjdGlvbi5tZXRhICYmXG4gICAgICBhY3Rpb24ubWV0YS5sb2FkZXIgJiZcbiAgICAgIGFjdGlvbi5tZXRhLmVudGl0eVR5cGUgPT09IGxvYWRBY3Rpb25UeXBlXG4gICAgKSB7XG4gICAgICBjb25zdCBlbnRpdHkgPSBhY3Rpb24ubWV0YS5sb2FkZXI7XG5cbiAgICAgIGlmIChlbnRpdHkubG9hZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgdmFsdWU6IHJlZHVjZXIgPyByZWR1Y2VyKHN0YXRlLnZhbHVlLCBhY3Rpb24pIDogc3RhdGUudmFsdWUsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKGVudGl0eS5lcnJvcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIGVycm9yOiB0cnVlLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgIHZhbHVlOiByZWR1Y2VyID8gcmVkdWNlcihzdGF0ZS52YWx1ZSwgYWN0aW9uKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAoZW50aXR5LnN1Y2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICB2YWx1ZTogcmVkdWNlciA/IHJlZHVjZXIoc3RhdGUudmFsdWUsIGFjdGlvbikgOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogZmFsc2UsXG4gICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHJlc2V0IHN0YXRlIGFjdGlvblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLmluaXRpYWxMb2FkZXJTdGF0ZSxcbiAgICAgICAgICB2YWx1ZTogcmVkdWNlclxuICAgICAgICAgICAgPyByZWR1Y2VyKGluaXRpYWxMb2FkZXJTdGF0ZS52YWx1ZSwgYWN0aW9uKVxuICAgICAgICAgICAgOiBpbml0aWFsTG9hZGVyU3RhdGUudmFsdWUsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlZHVjZXIpIHtcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gcmVkdWNlcihzdGF0ZS52YWx1ZSwgYWN0aW9uKTtcbiAgICAgIGlmIChuZXdWYWx1ZSAhPT0gc3RhdGUudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHZhbHVlOiBuZXdWYWx1ZSB9O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3RhdGU7XG4gIH07XG59XG4iXX0=