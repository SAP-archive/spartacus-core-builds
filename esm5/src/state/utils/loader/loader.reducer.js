/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    function (state, action) {
        if (state === void 0) { state = initialLoaderState; }
        if (action.meta &&
            action.meta.loader &&
            action.meta.entityType === entityType) {
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
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUlBLE1BQU0sS0FBTyxrQkFBa0IsR0FBcUI7SUFDbEQsT0FBTyxFQUFFLEtBQUs7SUFDZCxLQUFLLEVBQUUsS0FBSztJQUNaLE9BQU8sRUFBRSxLQUFLO0lBQ2QsS0FBSyxFQUFFLFNBQVM7Q0FDakI7Ozs7Ozs7Ozs7O0FBUUQsTUFBTSxVQUFVLGFBQWEsQ0FDM0IsVUFBa0IsRUFDbEIsT0FBeUM7SUFFekM7Ozs7O0lBQU8sVUFDTCxLQUEwQyxFQUMxQyxNQUFvQjtRQURwQixzQkFBQSxFQUFBLDBCQUEwQztRQUcxQyxJQUNFLE1BQU0sQ0FBQyxJQUFJO1lBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLFVBQVUsRUFDckM7O2dCQUNNLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU07WUFFakMsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUNmLDRCQUNLLEtBQUssSUFDUixPQUFPLEVBQUUsSUFBSSxFQUNiLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUMzRDthQUNIO2lCQUFNLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtnQkFDdkIsNEJBQ0ssS0FBSyxJQUNSLE9BQU8sRUFBRSxLQUFLLEVBQ2QsS0FBSyxFQUFFLElBQUksRUFDWCxPQUFPLEVBQUUsS0FBSyxFQUNkLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLElBQ3pEO2FBQ0g7aUJBQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO2dCQUN6Qiw0QkFDSyxLQUFLLElBQ1IsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQzlELE9BQU8sRUFBRSxLQUFLLEVBQ2QsS0FBSyxFQUFFLEtBQUssRUFDWixPQUFPLEVBQUUsSUFBSSxJQUNiO2FBQ0g7aUJBQU07Z0JBQ0wscUJBQXFCO2dCQUNyQiw0QkFDSyxrQkFBa0IsSUFDckIsS0FBSyxFQUFFLE9BQU87d0JBQ1osQ0FBQyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO3dCQUMzQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsS0FBSyxJQUM1QjthQUNIO1NBQ0Y7UUFFRCxJQUFJLE9BQU8sRUFBRTs7Z0JBQ0wsUUFBUSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQztZQUM3QyxJQUFJLFFBQVEsS0FBSyxLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUM1Qiw0QkFBWSxLQUFLLElBQUUsS0FBSyxFQUFFLFFBQVEsSUFBRzthQUN0QztTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDLEVBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuL2xvYWRlci1zdGF0ZSc7XG5pbXBvcnQgeyBMb2FkZXJBY3Rpb24gfSBmcm9tICcuL2xvYWRlci5hY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbExvYWRlclN0YXRlOiBMb2FkZXJTdGF0ZTxhbnk+ID0ge1xuICBsb2FkaW5nOiBmYWxzZSxcbiAgZXJyb3I6IGZhbHNlLFxuICBzdWNjZXNzOiBmYWxzZSxcbiAgdmFsdWU6IHVuZGVmaW5lZCxcbn07XG5cbi8qKlxuICogSGlnaGVyIG9yZGVyIHJlZHVjZXIgdGhhdCBhZGRzIGdlbmVyaWMgbG9hZGluZyBmbGFnIHRvIGNodW5rIG9mIHRoZSBzdGF0ZVxuICpcbiAqIFV0aWxpemVzIFwibG9hZGVyXCIgbWV0YSBmaWVsZCBvZiBhY3Rpb25zIHRvIHNldCBzcGVjaWZpYyBmbGFncyBmb3Igc3BlY2lmaWNcbiAqIGFjdGlvbiAoTE9BRCwgU1VDQ0VTUywgRkFJTCwgUkVTRVQpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2FkZXJSZWR1Y2VyPFQ+KFxuICBlbnRpdHlUeXBlOiBzdHJpbmcsXG4gIHJlZHVjZXI/OiAoc3RhdGU6IFQsIGFjdGlvbjogQWN0aW9uKSA9PiBUXG4pOiAoc3RhdGU6IExvYWRlclN0YXRlPFQ+LCBhY3Rpb246IExvYWRlckFjdGlvbikgPT4gTG9hZGVyU3RhdGU8VD4ge1xuICByZXR1cm4gKFxuICAgIHN0YXRlOiBMb2FkZXJTdGF0ZTxUPiA9IGluaXRpYWxMb2FkZXJTdGF0ZSxcbiAgICBhY3Rpb246IExvYWRlckFjdGlvblxuICApOiBMb2FkZXJTdGF0ZTxUPiA9PiB7XG4gICAgaWYgKFxuICAgICAgYWN0aW9uLm1ldGEgJiZcbiAgICAgIGFjdGlvbi5tZXRhLmxvYWRlciAmJlxuICAgICAgYWN0aW9uLm1ldGEuZW50aXR5VHlwZSA9PT0gZW50aXR5VHlwZVxuICAgICkge1xuICAgICAgY29uc3QgZW50aXR5ID0gYWN0aW9uLm1ldGEubG9hZGVyO1xuXG4gICAgICBpZiAoZW50aXR5LmxvYWQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgIHZhbHVlOiByZWR1Y2VyID8gcmVkdWNlcihzdGF0ZS52YWx1ZSwgYWN0aW9uKSA6IHN0YXRlLnZhbHVlLFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChlbnRpdHkuZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICB2YWx1ZTogcmVkdWNlciA/IHJlZHVjZXIoc3RhdGUudmFsdWUsIGFjdGlvbikgOiB1bmRlZmluZWQsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKGVudGl0eS5zdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgdmFsdWU6IHJlZHVjZXIgPyByZWR1Y2VyKHN0YXRlLnZhbHVlLCBhY3Rpb24pIDogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyByZXNldCBzdGF0ZSBhY3Rpb25cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5pbml0aWFsTG9hZGVyU3RhdGUsXG4gICAgICAgICAgdmFsdWU6IHJlZHVjZXJcbiAgICAgICAgICAgID8gcmVkdWNlcihpbml0aWFsTG9hZGVyU3RhdGUudmFsdWUsIGFjdGlvbilcbiAgICAgICAgICAgIDogaW5pdGlhbExvYWRlclN0YXRlLnZhbHVlLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWR1Y2VyKSB7XG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IHJlZHVjZXIoc3RhdGUudmFsdWUsIGFjdGlvbik7XG4gICAgICBpZiAobmV3VmFsdWUgIT09IHN0YXRlLnZhbHVlKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB2YWx1ZTogbmV3VmFsdWUgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9O1xufVxuIl19