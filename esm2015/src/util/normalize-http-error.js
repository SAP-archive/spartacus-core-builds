import { HttpErrorResponse } from '@angular/common/http';
import { isDevMode } from '@angular/core';
/**
 * Normalizes HttpErrorResponse to HttpErrorModel.
 *
 * Can be used as a safe and generic way for embodying http errors into
 * NgRx Action payload, as it will strip potentially unserializable parts from
 * it and warn in debug mode if passed error is not instance of HttpErrorModel
 * (which usually happens when logic in NgRx Effect is not sealed correctly)
 */
export function normalizeHttpError(error) {
    if (error instanceof HttpErrorResponse) {
        const normalizedError = {
            message: error.message,
            status: error.status,
            statusText: error.statusText,
            url: error.url,
        };
        // include backend's error details
        if (Array.isArray(error.error.errors)) {
            normalizedError.details = error.error.errors;
        }
        else if (typeof error.error.error === 'string') {
            normalizedError.details = [
                {
                    type: error.error.error,
                    message: error.error.error_description,
                },
            ];
        }
        return normalizedError;
    }
    if (isDevMode()) {
        console.error('Error passed to normalizeHttpError is not HttpErrorResponse instance', error);
    }
    return undefined;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9ybWFsaXplLWh0dHAtZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy91dGlsL25vcm1hbGl6ZS1odHRwLWVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXpELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUM7Ozs7Ozs7R0FPRztBQUNILE1BQU0sVUFBVSxrQkFBa0IsQ0FDaEMsS0FBOEI7SUFFOUIsSUFBSSxLQUFLLFlBQVksaUJBQWlCLEVBQUU7UUFDdEMsTUFBTSxlQUFlLEdBQW1CO1lBQ3RDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRztTQUNmLENBQUM7UUFFRixrQ0FBa0M7UUFDbEMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDckMsZUFBZSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztTQUM5QzthQUFNLElBQUksT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDaEQsZUFBZSxDQUFDLE9BQU8sR0FBRztnQkFDeEI7b0JBQ0UsSUFBSSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSztvQkFDdkIsT0FBTyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsaUJBQWlCO2lCQUN2QzthQUNGLENBQUM7U0FDSDtRQUVELE9BQU8sZUFBZSxDQUFDO0tBQ3hCO0lBRUQsSUFBSSxTQUFTLEVBQUUsRUFBRTtRQUNmLE9BQU8sQ0FBQyxLQUFLLENBQ1gsc0VBQXNFLEVBQ3RFLEtBQUssQ0FDTixDQUFDO0tBQ0g7SUFFRCxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBIdHRwRXJyb3JNb2RlbCB9IGZyb20gJy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgaXNEZXZNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogTm9ybWFsaXplcyBIdHRwRXJyb3JSZXNwb25zZSB0byBIdHRwRXJyb3JNb2RlbC5cbiAqXG4gKiBDYW4gYmUgdXNlZCBhcyBhIHNhZmUgYW5kIGdlbmVyaWMgd2F5IGZvciBlbWJvZHlpbmcgaHR0cCBlcnJvcnMgaW50b1xuICogTmdSeCBBY3Rpb24gcGF5bG9hZCwgYXMgaXQgd2lsbCBzdHJpcCBwb3RlbnRpYWxseSB1bnNlcmlhbGl6YWJsZSBwYXJ0cyBmcm9tXG4gKiBpdCBhbmQgd2FybiBpbiBkZWJ1ZyBtb2RlIGlmIHBhc3NlZCBlcnJvciBpcyBub3QgaW5zdGFuY2Ugb2YgSHR0cEVycm9yTW9kZWxcbiAqICh3aGljaCB1c3VhbGx5IGhhcHBlbnMgd2hlbiBsb2dpYyBpbiBOZ1J4IEVmZmVjdCBpcyBub3Qgc2VhbGVkIGNvcnJlY3RseSlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUh0dHBFcnJvcihcbiAgZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlIHwgYW55XG4pOiBIdHRwRXJyb3JNb2RlbCB8IHVuZGVmaW5lZCB7XG4gIGlmIChlcnJvciBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgY29uc3Qgbm9ybWFsaXplZEVycm9yOiBIdHRwRXJyb3JNb2RlbCA9IHtcbiAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICBzdGF0dXM6IGVycm9yLnN0YXR1cyxcbiAgICAgIHN0YXR1c1RleHQ6IGVycm9yLnN0YXR1c1RleHQsXG4gICAgICB1cmw6IGVycm9yLnVybCxcbiAgICB9O1xuXG4gICAgLy8gaW5jbHVkZSBiYWNrZW5kJ3MgZXJyb3IgZGV0YWlsc1xuICAgIGlmIChBcnJheS5pc0FycmF5KGVycm9yLmVycm9yLmVycm9ycykpIHtcbiAgICAgIG5vcm1hbGl6ZWRFcnJvci5kZXRhaWxzID0gZXJyb3IuZXJyb3IuZXJyb3JzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGVycm9yLmVycm9yLmVycm9yID09PSAnc3RyaW5nJykge1xuICAgICAgbm9ybWFsaXplZEVycm9yLmRldGFpbHMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiBlcnJvci5lcnJvci5lcnJvcixcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5lcnJvci5lcnJvcl9kZXNjcmlwdGlvbixcbiAgICAgICAgfSxcbiAgICAgIF07XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vcm1hbGl6ZWRFcnJvcjtcbiAgfVxuXG4gIGlmIChpc0Rldk1vZGUoKSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAnRXJyb3IgcGFzc2VkIHRvIG5vcm1hbGl6ZUh0dHBFcnJvciBpcyBub3QgSHR0cEVycm9yUmVzcG9uc2UgaW5zdGFuY2UnLFxuICAgICAgZXJyb3JcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbiJdfQ==