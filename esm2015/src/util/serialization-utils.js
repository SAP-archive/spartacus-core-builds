/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpErrorResponse } from '@angular/common/http';
import { isObject } from '../config/utils/deep-merge';
/** @type {?} */
export const CURRENT_CONTEXT_KEY = 'current';
/** @type {?} */
export const UNKNOWN_ERROR = {
    error: 'unknown error',
};
/** @type {?} */
const circularReplacer = (/**
 * @return {?}
 */
() => {
    /** @type {?} */
    const seen = new WeakSet();
    return (/**
     * @param {?} _key
     * @param {?} value
     * @return {?}
     */
    (_key, value) => {
        if (typeof value === 'object' && value !== null) {
            if (seen.has(value)) {
                return;
            }
            seen.add(value);
        }
        return value;
    });
});
const ɵ0 = circularReplacer;
/**
 * @param {?} error
 * @return {?}
 */
export function makeErrorSerializable(error) {
    if (error instanceof Error) {
        return (/** @type {?} */ ({
            message: error.message,
            type: error.name,
            reason: error.stack,
        }));
    }
    if (error instanceof HttpErrorResponse) {
        /** @type {?} */
        let serializableError = error.error;
        if (isObject(error.error)) {
            serializableError = JSON.stringify(error.error, circularReplacer());
        }
        return (/** @type {?} */ ({
            message: error.message,
            error: serializableError,
            status: error.status,
            statusText: error.statusText,
            url: error.url,
        }));
    }
    return isObject(error) ? UNKNOWN_ERROR : error;
}
/**
 * @param {?} pageContext
 * @return {?}
 */
export function serializePageContext(pageContext) {
    if (!pageContext) {
        return CURRENT_CONTEXT_KEY;
    }
    return `${pageContext.type}-${pageContext.id}`;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWFsaXphdGlvbi11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7QUFJdEQsTUFBTSxPQUFPLG1CQUFtQixHQUFHLFNBQVM7O0FBRTVDLE1BQU0sT0FBTyxhQUFhLEdBQUc7SUFDM0IsS0FBSyxFQUFFLGVBQWU7Q0FDdkI7O01BRUssZ0JBQWdCOzs7QUFBRyxHQUFHLEVBQUU7O1VBQ3RCLElBQUksR0FBRyxJQUFJLE9BQU8sRUFBRTtJQUMxQjs7Ozs7SUFBTyxDQUFDLElBQVMsRUFBRSxLQUFVLEVBQUUsRUFBRTtRQUMvQixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQy9DLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDbkIsT0FBTzthQUNSO1lBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQyxFQUFDO0FBQ0osQ0FBQyxDQUFBOzs7Ozs7QUFFRCxNQUFNLFVBQVUscUJBQXFCLENBQ25DLEtBQTJDO0lBRTNDLElBQUksS0FBSyxZQUFZLEtBQUssRUFBRTtRQUMxQixPQUFPLG1CQUFBO1lBQ0wsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixNQUFNLEVBQUUsS0FBSyxDQUFDLEtBQUs7U0FDcEIsRUFBYyxDQUFDO0tBQ2pCO0lBRUQsSUFBSSxLQUFLLFlBQVksaUJBQWlCLEVBQUU7O1lBQ2xDLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxLQUFLO1FBQ25DLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN6QixpQkFBaUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1NBQ3JFO1FBRUQsT0FBTyxtQkFBQTtZQUNMLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixLQUFLLEVBQUUsaUJBQWlCO1lBQ3hCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHO1NBQ2YsRUFBa0IsQ0FBQztLQUNyQjtJQUVELE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUNqRCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxvQkFBb0IsQ0FBQyxXQUF3QjtJQUMzRCxJQUFJLENBQUMsV0FBVyxFQUFFO1FBQ2hCLE9BQU8sbUJBQW1CLENBQUM7S0FDNUI7SUFFRCxPQUFPLEdBQUcsV0FBVyxDQUFDLElBQUksSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUM7QUFDakQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuLi9jb25maWcvdXRpbHMvZGVlcC1tZXJnZSc7XG5pbXBvcnQgeyBFcnJvck1vZGVsLCBIdHRwRXJyb3JNb2RlbCB9IGZyb20gJy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICcuLi9yb3V0aW5nL21vZGVscy9wYWdlLWNvbnRleHQubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgQ1VSUkVOVF9DT05URVhUX0tFWSA9ICdjdXJyZW50JztcblxuZXhwb3J0IGNvbnN0IFVOS05PV05fRVJST1IgPSB7XG4gIGVycm9yOiAndW5rbm93biBlcnJvcicsXG59O1xuXG5jb25zdCBjaXJjdWxhclJlcGxhY2VyID0gKCkgPT4ge1xuICBjb25zdCBzZWVuID0gbmV3IFdlYWtTZXQoKTtcbiAgcmV0dXJuIChfa2V5OiBhbnksIHZhbHVlOiBhbnkpID0+IHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKHNlZW4uaGFzKHZhbHVlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzZWVuLmFkZCh2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRXJyb3JTZXJpYWxpemFibGUoXG4gIGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSB8IEVycm9yTW9kZWwgfCBhbnlcbik6IEh0dHBFcnJvck1vZGVsIHwgRXJyb3IgfCBhbnkge1xuICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgdHlwZTogZXJyb3IubmFtZSxcbiAgICAgIHJlYXNvbjogZXJyb3Iuc3RhY2ssXG4gICAgfSBhcyBFcnJvck1vZGVsO1xuICB9XG5cbiAgaWYgKGVycm9yIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpIHtcbiAgICBsZXQgc2VyaWFsaXphYmxlRXJyb3IgPSBlcnJvci5lcnJvcjtcbiAgICBpZiAoaXNPYmplY3QoZXJyb3IuZXJyb3IpKSB7XG4gICAgICBzZXJpYWxpemFibGVFcnJvciA9IEpTT04uc3RyaW5naWZ5KGVycm9yLmVycm9yLCBjaXJjdWxhclJlcGxhY2VyKCkpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgZXJyb3I6IHNlcmlhbGl6YWJsZUVycm9yLFxuICAgICAgc3RhdHVzOiBlcnJvci5zdGF0dXMsXG4gICAgICBzdGF0dXNUZXh0OiBlcnJvci5zdGF0dXNUZXh0LFxuICAgICAgdXJsOiBlcnJvci51cmwsXG4gICAgfSBhcyBIdHRwRXJyb3JNb2RlbDtcbiAgfVxuXG4gIHJldHVybiBpc09iamVjdChlcnJvcikgPyBVTktOT1dOX0VSUk9SIDogZXJyb3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVQYWdlQ29udGV4dChwYWdlQ29udGV4dDogUGFnZUNvbnRleHQpOiBzdHJpbmcge1xuICBpZiAoIXBhZ2VDb250ZXh0KSB7XG4gICAgcmV0dXJuIENVUlJFTlRfQ09OVEVYVF9LRVk7XG4gIH1cblxuICByZXR1cm4gYCR7cGFnZUNvbnRleHQudHlwZX0tJHtwYWdlQ29udGV4dC5pZH1gO1xufVxuIl19