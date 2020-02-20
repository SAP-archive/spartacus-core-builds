import { HttpErrorResponse } from '@angular/common/http';
import { isObject } from '../config/utils/deep-merge';
export var UNKNOWN_ERROR = {
    error: 'unknown error',
};
var circularReplacer = function () {
    var seen = new WeakSet();
    return function (_key, value) {
        if (typeof value === 'object' && value !== null) {
            if (seen.has(value)) {
                return;
            }
            seen.add(value);
        }
        return value;
    };
};
var ɵ0 = circularReplacer;
export function makeErrorSerializable(error) {
    if (error instanceof Error) {
        return {
            message: error.message,
            type: error.name,
            reason: error.stack,
        };
    }
    if (error instanceof HttpErrorResponse) {
        var serializableError = error.error;
        if (isObject(error.error)) {
            serializableError = JSON.stringify(error.error, circularReplacer());
        }
        return {
            message: error.message,
            error: serializableError,
            status: error.status,
            statusText: error.statusText,
            url: error.url,
        };
    }
    return isObject(error) ? UNKNOWN_ERROR : error;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWFsaXphdGlvbi11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBR3RELE1BQU0sQ0FBQyxJQUFNLGFBQWEsR0FBRztJQUMzQixLQUFLLEVBQUUsZUFBZTtDQUN2QixDQUFDO0FBRUYsSUFBTSxnQkFBZ0IsR0FBRztJQUN2QixJQUFNLElBQUksR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBQzNCLE9BQU8sVUFBQyxJQUFTLEVBQUUsS0FBVTtRQUMzQixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQy9DLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDbkIsT0FBTzthQUNSO1lBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDOztBQUVGLE1BQU0sVUFBVSxxQkFBcUIsQ0FDbkMsS0FBMkM7SUFFM0MsSUFBSSxLQUFLLFlBQVksS0FBSyxFQUFFO1FBQzFCLE9BQU87WUFDTCxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1lBQ2hCLE1BQU0sRUFBRSxLQUFLLENBQUMsS0FBSztTQUNOLENBQUM7S0FDakI7SUFFRCxJQUFJLEtBQUssWUFBWSxpQkFBaUIsRUFBRTtRQUN0QyxJQUFJLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDcEMsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3pCLGlCQUFpQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7U0FDckU7UUFFRCxPQUFPO1lBQ0wsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLEtBQUssRUFBRSxpQkFBaUI7WUFDeEIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUc7U0FDRyxDQUFDO0tBQ3JCO0lBRUQsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ2pELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi4vY29uZmlnL3V0aWxzL2RlZXAtbWVyZ2UnO1xuaW1wb3J0IHsgRXJyb3JNb2RlbCwgSHR0cEVycm9yTW9kZWwgfSBmcm9tICcuLi9tb2RlbC9taXNjLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IFVOS05PV05fRVJST1IgPSB7XG4gIGVycm9yOiAndW5rbm93biBlcnJvcicsXG59O1xuXG5jb25zdCBjaXJjdWxhclJlcGxhY2VyID0gKCkgPT4ge1xuICBjb25zdCBzZWVuID0gbmV3IFdlYWtTZXQoKTtcbiAgcmV0dXJuIChfa2V5OiBhbnksIHZhbHVlOiBhbnkpID0+IHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKHNlZW4uaGFzKHZhbHVlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzZWVuLmFkZCh2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRXJyb3JTZXJpYWxpemFibGUoXG4gIGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSB8IEVycm9yTW9kZWwgfCBhbnlcbik6IEh0dHBFcnJvck1vZGVsIHwgRXJyb3IgfCBhbnkge1xuICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgdHlwZTogZXJyb3IubmFtZSxcbiAgICAgIHJlYXNvbjogZXJyb3Iuc3RhY2ssXG4gICAgfSBhcyBFcnJvck1vZGVsO1xuICB9XG5cbiAgaWYgKGVycm9yIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpIHtcbiAgICBsZXQgc2VyaWFsaXphYmxlRXJyb3IgPSBlcnJvci5lcnJvcjtcbiAgICBpZiAoaXNPYmplY3QoZXJyb3IuZXJyb3IpKSB7XG4gICAgICBzZXJpYWxpemFibGVFcnJvciA9IEpTT04uc3RyaW5naWZ5KGVycm9yLmVycm9yLCBjaXJjdWxhclJlcGxhY2VyKCkpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgZXJyb3I6IHNlcmlhbGl6YWJsZUVycm9yLFxuICAgICAgc3RhdHVzOiBlcnJvci5zdGF0dXMsXG4gICAgICBzdGF0dXNUZXh0OiBlcnJvci5zdGF0dXNUZXh0LFxuICAgICAgdXJsOiBlcnJvci51cmwsXG4gICAgfSBhcyBIdHRwRXJyb3JNb2RlbDtcbiAgfVxuXG4gIHJldHVybiBpc09iamVjdChlcnJvcikgPyBVTktOT1dOX0VSUk9SIDogZXJyb3I7XG59XG4iXX0=