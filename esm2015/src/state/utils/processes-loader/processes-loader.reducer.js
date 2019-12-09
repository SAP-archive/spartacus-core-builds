/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { initialLoaderState, loaderReducer } from '../loader/loader.reducer';
/** @type {?} */
export const initialProcessesState = {
    processesCount: 0,
};
/**
 * Higher order reducer that adds processes count
 * @template T
 * @param {?} entityType
 * @param {?=} reducer
 * @return {?}
 */
export function processesLoaderReducer(entityType, reducer) {
    return (/**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    (state = Object.assign({}, initialProcessesState, initialLoaderState), action) => {
        /** @type {?} */
        const loaderState = loaderReducer(entityType, reducer)(state, action);
        if (action.meta && action.meta.entityType === entityType) {
            /** @type {?} */
            const processesCountDiff = action.meta.processesCountDiff;
            if (processesCountDiff) {
                return Object.assign({}, loaderState, { processesCount: state.processesCount
                        ? state.processesCount + processesCountDiff
                        : processesCountDiff });
            }
            else if (processesCountDiff === null) {
                // reset action
                return Object.assign({}, loaderState, initialProcessesState);
            }
        }
        return loaderState;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvY2Vzc2VzLWxvYWRlci5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0YXRlL3V0aWxzL3Byb2Nlc3Nlcy1sb2FkZXIvcHJvY2Vzc2VzLWxvYWRlci5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBSTdFLE1BQU0sT0FBTyxxQkFBcUIsR0FBOEI7SUFDOUQsY0FBYyxFQUFFLENBQUM7Q0FDbEI7Ozs7Ozs7O0FBS0QsTUFBTSxVQUFVLHNCQUFzQixDQUNwQyxVQUFrQixFQUNsQixPQUF5QztJQUt6Qzs7Ozs7SUFBTyxDQUNMLDBCQUNLLHFCQUFxQixFQUNyQixrQkFBa0IsQ0FDdEIsRUFDRCxNQUE2QixFQUNKLEVBQUU7O2NBQ3JCLFdBQVcsR0FBRyxhQUFhLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7UUFDckUsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLFVBQVUsRUFBRTs7a0JBQ2xELGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCO1lBQ3pELElBQUksa0JBQWtCLEVBQUU7Z0JBQ3RCLHlCQUNLLFdBQVcsSUFDZCxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7d0JBQ2xDLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFHLGtCQUFrQjt3QkFDM0MsQ0FBQyxDQUFDLGtCQUFrQixJQUN0QjthQUNIO2lCQUFNLElBQUksa0JBQWtCLEtBQUssSUFBSSxFQUFFO2dCQUN0QyxlQUFlO2dCQUNmLHlCQUNLLFdBQVcsRUFDWCxxQkFBcUIsRUFDeEI7YUFDSDtTQUNGO1FBRUQsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQyxFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGluaXRpYWxMb2FkZXJTdGF0ZSwgbG9hZGVyUmVkdWNlciB9IGZyb20gJy4uL2xvYWRlci9sb2FkZXIucmVkdWNlcic7XG5pbXBvcnQgeyBQcm9jZXNzZXNMb2FkZXJTdGF0ZSB9IGZyb20gJy4vcHJvY2Vzc2VzLWxvYWRlci1zdGF0ZSc7XG5pbXBvcnQgeyBQcm9jZXNzZXNMb2FkZXJBY3Rpb24gfSBmcm9tICcuL3Byb2Nlc3Nlcy1sb2FkZXIuYWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxQcm9jZXNzZXNTdGF0ZTogUHJvY2Vzc2VzTG9hZGVyU3RhdGU8YW55PiA9IHtcbiAgcHJvY2Vzc2VzQ291bnQ6IDAsXG59O1xuXG4vKipcbiAqIEhpZ2hlciBvcmRlciByZWR1Y2VyIHRoYXQgYWRkcyBwcm9jZXNzZXMgY291bnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3Nlc0xvYWRlclJlZHVjZXI8VD4oXG4gIGVudGl0eVR5cGU6IHN0cmluZyxcbiAgcmVkdWNlcj86IChzdGF0ZTogVCwgYWN0aW9uOiBBY3Rpb24pID0+IFRcbik6IChcbiAgc3RhdGU6IFByb2Nlc3Nlc0xvYWRlclN0YXRlPFQ+LFxuICBhY3Rpb246IFByb2Nlc3Nlc0xvYWRlckFjdGlvblxuKSA9PiBQcm9jZXNzZXNMb2FkZXJTdGF0ZTxUPiB7XG4gIHJldHVybiAoXG4gICAgc3RhdGU6IFByb2Nlc3Nlc0xvYWRlclN0YXRlPFQ+ID0ge1xuICAgICAgLi4uaW5pdGlhbFByb2Nlc3Nlc1N0YXRlLFxuICAgICAgLi4uaW5pdGlhbExvYWRlclN0YXRlLFxuICAgIH0sXG4gICAgYWN0aW9uOiBQcm9jZXNzZXNMb2FkZXJBY3Rpb25cbiAgKTogUHJvY2Vzc2VzTG9hZGVyU3RhdGU8VD4gPT4ge1xuICAgIGNvbnN0IGxvYWRlclN0YXRlID0gbG9hZGVyUmVkdWNlcihlbnRpdHlUeXBlLCByZWR1Y2VyKShzdGF0ZSwgYWN0aW9uKTtcbiAgICBpZiAoYWN0aW9uLm1ldGEgJiYgYWN0aW9uLm1ldGEuZW50aXR5VHlwZSA9PT0gZW50aXR5VHlwZSkge1xuICAgICAgY29uc3QgcHJvY2Vzc2VzQ291bnREaWZmID0gYWN0aW9uLm1ldGEucHJvY2Vzc2VzQ291bnREaWZmO1xuICAgICAgaWYgKHByb2Nlc3Nlc0NvdW50RGlmZikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLmxvYWRlclN0YXRlLFxuICAgICAgICAgIHByb2Nlc3Nlc0NvdW50OiBzdGF0ZS5wcm9jZXNzZXNDb3VudFxuICAgICAgICAgICAgPyBzdGF0ZS5wcm9jZXNzZXNDb3VudCArIHByb2Nlc3Nlc0NvdW50RGlmZlxuICAgICAgICAgICAgOiBwcm9jZXNzZXNDb3VudERpZmYsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc3Nlc0NvdW50RGlmZiA9PT0gbnVsbCkge1xuICAgICAgICAvLyByZXNldCBhY3Rpb25cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5sb2FkZXJTdGF0ZSxcbiAgICAgICAgICAuLi5pbml0aWFsUHJvY2Vzc2VzU3RhdGUsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGxvYWRlclN0YXRlO1xuICB9O1xufVxuIl19