import { HttpErrorResponse } from '@angular/common/http';
import { isObject } from '../config/utils/deep-merge';
/**
 * @deprecated since 2.1, use normalizeHttpError instead
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWFsaXphdGlvbi11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBR3REOztHQUVHO0FBQ0gsTUFBTSxDQUFDLElBQU0sYUFBYSxHQUFHO0lBQzNCLEtBQUssRUFBRSxlQUFlO0NBQ3ZCLENBQUM7QUFFRixJQUFNLGdCQUFnQixHQUFHO0lBQ3ZCLElBQU0sSUFBSSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFDM0IsT0FBTyxVQUFDLElBQVMsRUFBRSxLQUFVO1FBQzNCLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDL0MsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNuQixPQUFPO2FBQ1I7WUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pCO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7O0FBRUY7O0dBRUc7QUFDSCxNQUFNLFVBQVUscUJBQXFCLENBQ25DLEtBQTJDO0lBRTNDLElBQUksS0FBSyxZQUFZLEtBQUssRUFBRTtRQUMxQixPQUFPO1lBQ0wsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixNQUFNLEVBQUUsS0FBSyxDQUFDLEtBQUs7U0FDTixDQUFDO0tBQ2pCO0lBRUQsSUFBSSxLQUFLLFlBQVksaUJBQWlCLEVBQUU7UUFDdEMsSUFBSSxpQkFBaUIsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3BDLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN6QixpQkFBaUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1NBQ3JFO1FBRUQsT0FBTztZQUNMLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixLQUFLLEVBQUUsaUJBQWlCO1lBQ3hCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHO1NBQ0csQ0FBQztLQUNyQjtJQUVELE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUNqRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4uL2NvbmZpZy91dGlscy9kZWVwLW1lcmdlJztcbmltcG9ydCB7IEVycm9yTW9kZWwsIEh0dHBFcnJvck1vZGVsIH0gZnJvbSAnLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgc2luY2UgMi4xLCB1c2Ugbm9ybWFsaXplSHR0cEVycm9yIGluc3RlYWRcbiAqL1xuZXhwb3J0IGNvbnN0IFVOS05PV05fRVJST1IgPSB7XG4gIGVycm9yOiAndW5rbm93biBlcnJvcicsXG59O1xuXG5jb25zdCBjaXJjdWxhclJlcGxhY2VyID0gKCkgPT4ge1xuICBjb25zdCBzZWVuID0gbmV3IFdlYWtTZXQoKTtcbiAgcmV0dXJuIChfa2V5OiBhbnksIHZhbHVlOiBhbnkpID0+IHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKHNlZW4uaGFzKHZhbHVlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzZWVuLmFkZCh2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcbn07XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgc2luY2UgMi4xLCB1c2Ugbm9ybWFsaXplSHR0cEVycm9yIGluc3RlYWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VFcnJvclNlcmlhbGl6YWJsZShcbiAgZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlIHwgRXJyb3JNb2RlbCB8IGFueVxuKTogSHR0cEVycm9yTW9kZWwgfCBFcnJvciB8IGFueSB7XG4gIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICB0eXBlOiBlcnJvci5uYW1lLFxuICAgICAgcmVhc29uOiBlcnJvci5zdGFjayxcbiAgICB9IGFzIEVycm9yTW9kZWw7XG4gIH1cblxuICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkge1xuICAgIGxldCBzZXJpYWxpemFibGVFcnJvciA9IGVycm9yLmVycm9yO1xuICAgIGlmIChpc09iamVjdChlcnJvci5lcnJvcikpIHtcbiAgICAgIHNlcmlhbGl6YWJsZUVycm9yID0gSlNPTi5zdHJpbmdpZnkoZXJyb3IuZXJyb3IsIGNpcmN1bGFyUmVwbGFjZXIoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICBlcnJvcjogc2VyaWFsaXphYmxlRXJyb3IsXG4gICAgICBzdGF0dXM6IGVycm9yLnN0YXR1cyxcbiAgICAgIHN0YXR1c1RleHQ6IGVycm9yLnN0YXR1c1RleHQsXG4gICAgICB1cmw6IGVycm9yLnVybCxcbiAgICB9IGFzIEh0dHBFcnJvck1vZGVsO1xuICB9XG5cbiAgcmV0dXJuIGlzT2JqZWN0KGVycm9yKSA/IFVOS05PV05fRVJST1IgOiBlcnJvcjtcbn1cbiJdfQ==