/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpErrorResponse } from '@angular/common/http';
import { isObject } from '../config/utils/deep-merge';
/** @type {?} */
export var UNKNOWN_ERROR = {
    error: 'unknown error',
};
/** @type {?} */
var circularReplacer = (/**
 * @return {?}
 */
function () {
    /** @type {?} */
    var seen = new WeakSet();
    return (/**
     * @param {?} _key
     * @param {?} value
     * @return {?}
     */
    function (_key, value) {
        if (typeof value === 'object' && value !== null) {
            if (seen.has(value)) {
                return;
            }
            seen.add(value);
        }
        return value;
    });
});
var ɵ0 = circularReplacer;
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
        var serializableError = error.error;
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
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWFsaXphdGlvbi11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7QUFHdEQsTUFBTSxLQUFPLGFBQWEsR0FBRztJQUMzQixLQUFLLEVBQUUsZUFBZTtDQUN2Qjs7SUFFSyxnQkFBZ0I7OztBQUFHOztRQUNqQixJQUFJLEdBQUcsSUFBSSxPQUFPLEVBQUU7SUFDMUI7Ozs7O0lBQU8sVUFBQyxJQUFTLEVBQUUsS0FBVTtRQUMzQixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQy9DLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDbkIsT0FBTzthQUNSO1lBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQyxFQUFDO0FBQ0osQ0FBQyxDQUFBOzs7Ozs7QUFFRCxNQUFNLFVBQVUscUJBQXFCLENBQ25DLEtBQTJDO0lBRTNDLElBQUksS0FBSyxZQUFZLEtBQUssRUFBRTtRQUMxQixPQUFPLG1CQUFBO1lBQ0wsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixNQUFNLEVBQUUsS0FBSyxDQUFDLEtBQUs7U0FDcEIsRUFBYyxDQUFDO0tBQ2pCO0lBRUQsSUFBSSxLQUFLLFlBQVksaUJBQWlCLEVBQUU7O1lBQ2xDLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxLQUFLO1FBQ25DLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN6QixpQkFBaUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1NBQ3JFO1FBRUQsT0FBTyxtQkFBQTtZQUNMLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixLQUFLLEVBQUUsaUJBQWlCO1lBQ3hCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHO1NBQ2YsRUFBa0IsQ0FBQztLQUNyQjtJQUVELE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUNqRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4uL2NvbmZpZy91dGlscy9kZWVwLW1lcmdlJztcbmltcG9ydCB7IEVycm9yTW9kZWwsIEh0dHBFcnJvck1vZGVsIH0gZnJvbSAnLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBVTktOT1dOX0VSUk9SID0ge1xuICBlcnJvcjogJ3Vua25vd24gZXJyb3InLFxufTtcblxuY29uc3QgY2lyY3VsYXJSZXBsYWNlciA9ICgpID0+IHtcbiAgY29uc3Qgc2VlbiA9IG5ldyBXZWFrU2V0KCk7XG4gIHJldHVybiAoX2tleTogYW55LCB2YWx1ZTogYW55KSA9PiB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIGlmIChzZWVuLmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc2Vlbi5hZGQodmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUVycm9yU2VyaWFsaXphYmxlKFxuICBlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UgfCBFcnJvck1vZGVsIHwgYW55XG4pOiBIdHRwRXJyb3JNb2RlbCB8IEVycm9yIHwgYW55IHtcbiAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICAgIHR5cGU6IGVycm9yLm5hbWUsXG4gICAgICByZWFzb246IGVycm9yLnN0YWNrLFxuICAgIH0gYXMgRXJyb3JNb2RlbDtcbiAgfVxuXG4gIGlmIChlcnJvciBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgbGV0IHNlcmlhbGl6YWJsZUVycm9yID0gZXJyb3IuZXJyb3I7XG4gICAgaWYgKGlzT2JqZWN0KGVycm9yLmVycm9yKSkge1xuICAgICAgc2VyaWFsaXphYmxlRXJyb3IgPSBKU09OLnN0cmluZ2lmeShlcnJvci5lcnJvciwgY2lyY3VsYXJSZXBsYWNlcigpKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICAgIGVycm9yOiBzZXJpYWxpemFibGVFcnJvcixcbiAgICAgIHN0YXR1czogZXJyb3Iuc3RhdHVzLFxuICAgICAgc3RhdHVzVGV4dDogZXJyb3Iuc3RhdHVzVGV4dCxcbiAgICAgIHVybDogZXJyb3IudXJsLFxuICAgIH0gYXMgSHR0cEVycm9yTW9kZWw7XG4gIH1cblxuICByZXR1cm4gaXNPYmplY3QoZXJyb3IpID8gVU5LTk9XTl9FUlJPUiA6IGVycm9yO1xufVxuIl19