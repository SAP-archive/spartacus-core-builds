/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/** @type {?} */
export var initialLoaderState = {
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
    return function (state, action) {
        if (state === void 0) { state = initialLoaderState; }
        if (action.meta &&
            action.meta.loader &&
            action.meta.entityType === loadActionType) {
            /** @type {?} */
            var entity = action.meta.loader;
            if (entity.load) {
                return tslib_1.__assign({}, state, { loading: true, value: reducer ? reducer(state.value, action) : state.value });
            }
            else if (entity.error) {
                return tslib_1.__assign({}, state, { loading: false, error: true, success: false, value: reducer ? reducer(state.value, action) : undefined });
            }
            else if (entity.success) {
                return tslib_1.__assign({}, state, { value: reducer ? reducer(state.value, action) : action.payload, loading: false, error: false, success: true });
            }
            else {
                // reset state action
                return tslib_1.__assign({}, initialLoaderState, { value: reducer
                        ? reducer(initialLoaderState.value, action)
                        : initialLoaderState.value });
            }
        }
        if (reducer) {
            /** @type {?} */
            var newValue = reducer(state.value, action);
            if (newValue !== state.value) {
                return tslib_1.__assign({}, state, { value: newValue });
            }
        }
        return state;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUtBLE1BQU0sS0FBTyxrQkFBa0IsR0FBcUI7SUFDbEQsT0FBTyxFQUFFLEtBQUs7SUFDZCxLQUFLLEVBQUUsS0FBSztJQUNaLE9BQU8sRUFBRSxLQUFLO0lBQ2QsS0FBSyxFQUFFLFNBQVM7Q0FDakI7Ozs7Ozs7Ozs7O0FBUUQsTUFBTSxVQUFVLGFBQWEsQ0FDM0IsY0FBc0IsRUFDdEIsT0FBeUM7SUFFekMsT0FBTyxVQUNMLEtBQTBDLEVBQzFDLE1BQW9CO1FBRHBCLHNCQUFBLEVBQUEsMEJBQTBDO1FBRzFDLElBQ0UsTUFBTSxDQUFDLElBQUk7WUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssY0FBYyxFQUN6Qzs7Z0JBQ00sTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUVqQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Z0JBQ2YsNEJBQ0ssS0FBSyxJQUNSLE9BQU8sRUFBRSxJQUFJLEVBQ2IsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQzNEO2FBQ0g7aUJBQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO2dCQUN2Qiw0QkFDSyxLQUFLLElBQ1IsT0FBTyxFQUFFLEtBQUssRUFDZCxLQUFLLEVBQUUsSUFBSSxFQUNYLE9BQU8sRUFBRSxLQUFLLEVBQ2QsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFDekQ7YUFDSDtpQkFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7Z0JBQ3pCLDRCQUNLLEtBQUssSUFDUixLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFDOUQsT0FBTyxFQUFFLEtBQUssRUFDZCxLQUFLLEVBQUUsS0FBSyxFQUNaLE9BQU8sRUFBRSxJQUFJLElBQ2I7YUFDSDtpQkFBTTtnQkFDTCxxQkFBcUI7Z0JBQ3JCLDRCQUNLLGtCQUFrQixJQUNyQixLQUFLLEVBQUUsT0FBTzt3QkFDWixDQUFDLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7d0JBQzNDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLElBQzVCO2FBQ0g7U0FDRjtRQUVELElBQUksT0FBTyxFQUFFOztnQkFDTCxRQUFRLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO1lBQzdDLElBQUksUUFBUSxLQUFLLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQzVCLDRCQUFZLEtBQUssSUFBRSxLQUFLLEVBQUUsUUFBUSxJQUFHO2FBQ3RDO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi9sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHsgTG9hZGVyQWN0aW9uIH0gZnJvbSAnLi9sb2FkZXIuYWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxMb2FkZXJTdGF0ZTogTG9hZGVyU3RhdGU8YW55PiA9IHtcbiAgbG9hZGluZzogZmFsc2UsXG4gIGVycm9yOiBmYWxzZSxcbiAgc3VjY2VzczogZmFsc2UsXG4gIHZhbHVlOiB1bmRlZmluZWQsXG59O1xuXG4vKipcbiAqIEhpZ2hlciBvcmRlciByZWR1Y2VyIHRoYXQgYWRkcyBnZW5lcmljIGxvYWRpbmcgZmxhZyB0byBjaHVuayBvZiB0aGUgc3RhdGVcbiAqXG4gKiBVdGlsaXplcyBcImxvYWRlclwiIG1ldGEgZmllbGQgb2YgYWN0aW9ucyB0byBzZXQgc3BlY2lmaWMgZmxhZ3MgZm9yIHNwZWNpZmljXG4gKiBhY3Rpb24gKExPQUQsIFNVQ0NFU1MsIEZBSUwsIFJFU0VUKVxuICovXG5leHBvcnQgZnVuY3Rpb24gbG9hZGVyUmVkdWNlcjxUPihcbiAgbG9hZEFjdGlvblR5cGU6IHN0cmluZyxcbiAgcmVkdWNlcj86IChzdGF0ZTogVCwgYWN0aW9uOiBBY3Rpb24pID0+IFRcbik6IChzdGF0ZTogTG9hZGVyU3RhdGU8VD4sIGFjdGlvbjogTG9hZGVyQWN0aW9uKSA9PiBMb2FkZXJTdGF0ZTxUPiB7XG4gIHJldHVybiAoXG4gICAgc3RhdGU6IExvYWRlclN0YXRlPFQ+ID0gaW5pdGlhbExvYWRlclN0YXRlLFxuICAgIGFjdGlvbjogTG9hZGVyQWN0aW9uXG4gICk6IExvYWRlclN0YXRlPFQ+ID0+IHtcbiAgICBpZiAoXG4gICAgICBhY3Rpb24ubWV0YSAmJlxuICAgICAgYWN0aW9uLm1ldGEubG9hZGVyICYmXG4gICAgICBhY3Rpb24ubWV0YS5lbnRpdHlUeXBlID09PSBsb2FkQWN0aW9uVHlwZVxuICAgICkge1xuICAgICAgY29uc3QgZW50aXR5ID0gYWN0aW9uLm1ldGEubG9hZGVyO1xuXG4gICAgICBpZiAoZW50aXR5LmxvYWQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgIHZhbHVlOiByZWR1Y2VyID8gcmVkdWNlcihzdGF0ZS52YWx1ZSwgYWN0aW9uKSA6IHN0YXRlLnZhbHVlLFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChlbnRpdHkuZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICB2YWx1ZTogcmVkdWNlciA/IHJlZHVjZXIoc3RhdGUudmFsdWUsIGFjdGlvbikgOiB1bmRlZmluZWQsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKGVudGl0eS5zdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgdmFsdWU6IHJlZHVjZXIgPyByZWR1Y2VyKHN0YXRlLnZhbHVlLCBhY3Rpb24pIDogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyByZXNldCBzdGF0ZSBhY3Rpb25cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5pbml0aWFsTG9hZGVyU3RhdGUsXG4gICAgICAgICAgdmFsdWU6IHJlZHVjZXJcbiAgICAgICAgICAgID8gcmVkdWNlcihpbml0aWFsTG9hZGVyU3RhdGUudmFsdWUsIGFjdGlvbilcbiAgICAgICAgICAgIDogaW5pdGlhbExvYWRlclN0YXRlLnZhbHVlLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWR1Y2VyKSB7XG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IHJlZHVjZXIoc3RhdGUudmFsdWUsIGFjdGlvbik7XG4gICAgICBpZiAobmV3VmFsdWUgIT09IHN0YXRlLnZhbHVlKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB2YWx1ZTogbmV3VmFsdWUgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9O1xufVxuIl19