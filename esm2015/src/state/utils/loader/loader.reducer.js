/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    return (state = initialLoaderState, action) => {
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
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0EsTUFBTSxPQUFPLGtCQUFrQixHQUFxQjtJQUNsRCxPQUFPLEVBQUUsS0FBSztJQUNkLEtBQUssRUFBRSxLQUFLO0lBQ1osT0FBTyxFQUFFLEtBQUs7SUFDZCxLQUFLLEVBQUUsU0FBUztDQUNqQjs7Ozs7Ozs7Ozs7QUFRRCxNQUFNLFVBQVUsYUFBYSxDQUMzQixjQUFzQixFQUN0QixPQUF5QztJQUV6QyxPQUFPLENBQ0wsUUFBd0Isa0JBQWtCLEVBQzFDLE1BQW9CLEVBQ0osRUFBRTtRQUNsQixJQUNFLE1BQU0sQ0FBQyxJQUFJO1lBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLGNBQWMsRUFDekM7O2tCQUNNLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU07WUFFakMsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUNmLHlCQUNLLEtBQUssSUFDUixPQUFPLEVBQUUsSUFBSSxFQUNiLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUMzRDthQUNIO2lCQUFNLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtnQkFDdkIseUJBQ0ssS0FBSyxJQUNSLE9BQU8sRUFBRSxLQUFLLEVBQ2QsS0FBSyxFQUFFLElBQUksRUFDWCxPQUFPLEVBQUUsS0FBSyxFQUNkLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLElBQ3pEO2FBQ0g7aUJBQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO2dCQUN6Qix5QkFDSyxLQUFLLElBQ1IsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQzlELE9BQU8sRUFBRSxLQUFLLEVBQ2QsS0FBSyxFQUFFLEtBQUssRUFDWixPQUFPLEVBQUUsSUFBSSxJQUNiO2FBQ0g7aUJBQU07Z0JBQ0wscUJBQXFCO2dCQUNyQix5QkFDSyxrQkFBa0IsSUFDckIsS0FBSyxFQUFFLE9BQU87d0JBQ1osQ0FBQyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO3dCQUMzQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsS0FBSyxJQUM1QjthQUNIO1NBQ0Y7UUFFRCxJQUFJLE9BQU8sRUFBRTs7a0JBQ0wsUUFBUSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQztZQUM3QyxJQUFJLFFBQVEsS0FBSyxLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUM1Qix5QkFBWSxLQUFLLElBQUUsS0FBSyxFQUFFLFFBQVEsSUFBRzthQUN0QztTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4vbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7IExvYWRlckFjdGlvbiB9IGZyb20gJy4vbG9hZGVyLmFjdGlvbic7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsTG9hZGVyU3RhdGU6IExvYWRlclN0YXRlPGFueT4gPSB7XG4gIGxvYWRpbmc6IGZhbHNlLFxuICBlcnJvcjogZmFsc2UsXG4gIHN1Y2Nlc3M6IGZhbHNlLFxuICB2YWx1ZTogdW5kZWZpbmVkLFxufTtcblxuLyoqXG4gKiBIaWdoZXIgb3JkZXIgcmVkdWNlciB0aGF0IGFkZHMgZ2VuZXJpYyBsb2FkaW5nIGZsYWcgdG8gY2h1bmsgb2YgdGhlIHN0YXRlXG4gKlxuICogVXRpbGl6ZXMgXCJsb2FkZXJcIiBtZXRhIGZpZWxkIG9mIGFjdGlvbnMgdG8gc2V0IHNwZWNpZmljIGZsYWdzIGZvciBzcGVjaWZpY1xuICogYWN0aW9uIChMT0FELCBTVUNDRVNTLCBGQUlMLCBSRVNFVClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvYWRlclJlZHVjZXI8VD4oXG4gIGxvYWRBY3Rpb25UeXBlOiBzdHJpbmcsXG4gIHJlZHVjZXI/OiAoc3RhdGU6IFQsIGFjdGlvbjogQWN0aW9uKSA9PiBUXG4pOiAoc3RhdGU6IExvYWRlclN0YXRlPFQ+LCBhY3Rpb246IExvYWRlckFjdGlvbikgPT4gTG9hZGVyU3RhdGU8VD4ge1xuICByZXR1cm4gKFxuICAgIHN0YXRlOiBMb2FkZXJTdGF0ZTxUPiA9IGluaXRpYWxMb2FkZXJTdGF0ZSxcbiAgICBhY3Rpb246IExvYWRlckFjdGlvblxuICApOiBMb2FkZXJTdGF0ZTxUPiA9PiB7XG4gICAgaWYgKFxuICAgICAgYWN0aW9uLm1ldGEgJiZcbiAgICAgIGFjdGlvbi5tZXRhLmxvYWRlciAmJlxuICAgICAgYWN0aW9uLm1ldGEuZW50aXR5VHlwZSA9PT0gbG9hZEFjdGlvblR5cGVcbiAgICApIHtcbiAgICAgIGNvbnN0IGVudGl0eSA9IGFjdGlvbi5tZXRhLmxvYWRlcjtcblxuICAgICAgaWYgKGVudGl0eS5sb2FkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICB2YWx1ZTogcmVkdWNlciA/IHJlZHVjZXIoc3RhdGUudmFsdWUsIGFjdGlvbikgOiBzdGF0ZS52YWx1ZSxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAoZW50aXR5LmVycm9yKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IHRydWUsXG4gICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgdmFsdWU6IHJlZHVjZXIgPyByZWR1Y2VyKHN0YXRlLnZhbHVlLCBhY3Rpb24pIDogdW5kZWZpbmVkLFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChlbnRpdHkuc3VjY2Vzcykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIHZhbHVlOiByZWR1Y2VyID8gcmVkdWNlcihzdGF0ZS52YWx1ZSwgYWN0aW9uKSA6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcmVzZXQgc3RhdGUgYWN0aW9uXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uaW5pdGlhbExvYWRlclN0YXRlLFxuICAgICAgICAgIHZhbHVlOiByZWR1Y2VyXG4gICAgICAgICAgICA/IHJlZHVjZXIoaW5pdGlhbExvYWRlclN0YXRlLnZhbHVlLCBhY3Rpb24pXG4gICAgICAgICAgICA6IGluaXRpYWxMb2FkZXJTdGF0ZS52YWx1ZSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVkdWNlcikge1xuICAgICAgY29uc3QgbmV3VmFsdWUgPSByZWR1Y2VyKHN0YXRlLnZhbHVlLCBhY3Rpb24pO1xuICAgICAgaWYgKG5ld1ZhbHVlICE9PSBzdGF0ZS52YWx1ZSkge1xuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdmFsdWU6IG5ld1ZhbHVlIH07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZTtcbiAgfTtcbn1cbiJdfQ==