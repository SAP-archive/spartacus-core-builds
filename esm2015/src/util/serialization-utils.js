import { HttpErrorResponse } from '@angular/common/http';
import { isObject } from '../config/utils/deep-merge';
/**
 * @deprecated since 2.1, use normalizeHttpError instead
 */
export const UNKNOWN_ERROR = {
    error: 'unknown error',
};
const circularReplacer = () => {
    const seen = new WeakSet();
    return (_key, value) => {
        if (typeof value === 'object' && value !== null) {
            if (seen.has(value)) {
                return;
            }
            seen.add(value);
        }
        return value;
    };
};
const ɵ0 = circularReplacer;
/**
 * @deprecated since 2.1, use normalizeHttpError instead
 */
export function makeErrorSerializable(error) {
    if (error instanceof Error) {
        return {
            message: error.message,
            type: error.name,
            reason: error.stack,
        };
    }
    if (error instanceof HttpErrorResponse) {
        let serializableError = error.error;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWFsaXphdGlvbi11dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFHdEQ7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUc7SUFDM0IsS0FBSyxFQUFFLGVBQWU7Q0FDdkIsQ0FBQztBQUVGLE1BQU0sZ0JBQWdCLEdBQUcsR0FBRyxFQUFFO0lBQzVCLE1BQU0sSUFBSSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFDM0IsT0FBTyxDQUFDLElBQVMsRUFBRSxLQUFVLEVBQUUsRUFBRTtRQUMvQixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQy9DLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDbkIsT0FBTzthQUNSO1lBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDOztBQUVGOztHQUVHO0FBQ0gsTUFBTSxVQUFVLHFCQUFxQixDQUNuQyxLQUEyQztJQUUzQyxJQUFJLEtBQUssWUFBWSxLQUFLLEVBQUU7UUFDMUIsT0FBTztZQUNMLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7WUFDaEIsTUFBTSxFQUFFLEtBQUssQ0FBQyxLQUFLO1NBQ04sQ0FBQztLQUNqQjtJQUVELElBQUksS0FBSyxZQUFZLGlCQUFpQixFQUFFO1FBQ3RDLElBQUksaUJBQWlCLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNwQyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekIsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLGdCQUFnQixFQUFFLENBQUMsQ0FBQztTQUNyRTtRQUVELE9BQU87WUFDTCxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsS0FBSyxFQUFFLGlCQUFpQjtZQUN4QixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRztTQUNHLENBQUM7S0FDckI7SUFFRCxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDakQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuLi9jb25maWcvdXRpbHMvZGVlcC1tZXJnZSc7XG5pbXBvcnQgeyBFcnJvck1vZGVsLCBIdHRwRXJyb3JNb2RlbCB9IGZyb20gJy4uL21vZGVsL21pc2MubW9kZWwnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIHNpbmNlIDIuMSwgdXNlIG5vcm1hbGl6ZUh0dHBFcnJvciBpbnN0ZWFkXG4gKi9cbmV4cG9ydCBjb25zdCBVTktOT1dOX0VSUk9SID0ge1xuICBlcnJvcjogJ3Vua25vd24gZXJyb3InLFxufTtcblxuY29uc3QgY2lyY3VsYXJSZXBsYWNlciA9ICgpID0+IHtcbiAgY29uc3Qgc2VlbiA9IG5ldyBXZWFrU2V0KCk7XG4gIHJldHVybiAoX2tleTogYW55LCB2YWx1ZTogYW55KSA9PiB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIGlmIChzZWVuLmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc2Vlbi5hZGQodmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG59O1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIHNpbmNlIDIuMSwgdXNlIG5vcm1hbGl6ZUh0dHBFcnJvciBpbnN0ZWFkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRXJyb3JTZXJpYWxpemFibGUoXG4gIGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSB8IEVycm9yTW9kZWwgfCBhbnlcbik6IEh0dHBFcnJvck1vZGVsIHwgRXJyb3IgfCBhbnkge1xuICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgdHlwZTogZXJyb3IubmFtZSxcbiAgICAgIHJlYXNvbjogZXJyb3Iuc3RhY2ssXG4gICAgfSBhcyBFcnJvck1vZGVsO1xuICB9XG5cbiAgaWYgKGVycm9yIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpIHtcbiAgICBsZXQgc2VyaWFsaXphYmxlRXJyb3IgPSBlcnJvci5lcnJvcjtcbiAgICBpZiAoaXNPYmplY3QoZXJyb3IuZXJyb3IpKSB7XG4gICAgICBzZXJpYWxpemFibGVFcnJvciA9IEpTT04uc3RyaW5naWZ5KGVycm9yLmVycm9yLCBjaXJjdWxhclJlcGxhY2VyKCkpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgZXJyb3I6IHNlcmlhbGl6YWJsZUVycm9yLFxuICAgICAgc3RhdHVzOiBlcnJvci5zdGF0dXMsXG4gICAgICBzdGF0dXNUZXh0OiBlcnJvci5zdGF0dXNUZXh0LFxuICAgICAgdXJsOiBlcnJvci51cmwsXG4gICAgfSBhcyBIdHRwRXJyb3JNb2RlbDtcbiAgfVxuXG4gIHJldHVybiBpc09iamVjdChlcnJvcikgPyBVTktOT1dOX0VSUk9SIDogZXJyb3I7XG59XG4iXX0=