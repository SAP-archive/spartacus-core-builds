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
        var normalizedError = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9ybWFsaXplLWh0dHAtZXJyb3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXRpbC9ub3JtYWxpemUtaHR0cC1lcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLFVBQVUsa0JBQWtCLENBQ2hDLEtBQThCO0lBRTlCLElBQUksS0FBSyxZQUFZLGlCQUFpQixFQUFFO1FBQ3RDLElBQU0sZUFBZSxHQUFtQjtZQUN0QyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUc7U0FDZixDQUFDO1FBRUYsa0NBQWtDO1FBQ2xDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3JDLGVBQWUsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7U0FDOUM7YUFBTSxJQUFJLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQ2hELGVBQWUsQ0FBQyxPQUFPLEdBQUc7Z0JBQ3hCO29CQUNFLElBQUksRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUs7b0JBQ3ZCLE9BQU8sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLGlCQUFpQjtpQkFDdkM7YUFDRixDQUFDO1NBQ0g7UUFFRCxPQUFPLGVBQWUsQ0FBQztLQUN4QjtJQUVELElBQUksU0FBUyxFQUFFLEVBQUU7UUFDZixPQUFPLENBQUMsS0FBSyxDQUNYLHNFQUFzRSxFQUN0RSxLQUFLLENBQ04sQ0FBQztLQUNIO0lBRUQsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSHR0cEVycm9yTW9kZWwgfSBmcm9tICcuLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIE5vcm1hbGl6ZXMgSHR0cEVycm9yUmVzcG9uc2UgdG8gSHR0cEVycm9yTW9kZWwuXG4gKlxuICogQ2FuIGJlIHVzZWQgYXMgYSBzYWZlIGFuZCBnZW5lcmljIHdheSBmb3IgZW1ib2R5aW5nIGh0dHAgZXJyb3JzIGludG9cbiAqIE5nUnggQWN0aW9uIHBheWxvYWQsIGFzIGl0IHdpbGwgc3RyaXAgcG90ZW50aWFsbHkgdW5zZXJpYWxpemFibGUgcGFydHMgZnJvbVxuICogaXQgYW5kIHdhcm4gaW4gZGVidWcgbW9kZSBpZiBwYXNzZWQgZXJyb3IgaXMgbm90IGluc3RhbmNlIG9mIEh0dHBFcnJvck1vZGVsXG4gKiAod2hpY2ggdXN1YWxseSBoYXBwZW5zIHdoZW4gbG9naWMgaW4gTmdSeCBFZmZlY3QgaXMgbm90IHNlYWxlZCBjb3JyZWN0bHkpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVIdHRwRXJyb3IoXG4gIGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSB8IGFueVxuKTogSHR0cEVycm9yTW9kZWwgfCB1bmRlZmluZWQge1xuICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkge1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRFcnJvcjogSHR0cEVycm9yTW9kZWwgPSB7XG4gICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgc3RhdHVzOiBlcnJvci5zdGF0dXMsXG4gICAgICBzdGF0dXNUZXh0OiBlcnJvci5zdGF0dXNUZXh0LFxuICAgICAgdXJsOiBlcnJvci51cmwsXG4gICAgfTtcblxuICAgIC8vIGluY2x1ZGUgYmFja2VuZCdzIGVycm9yIGRldGFpbHNcbiAgICBpZiAoQXJyYXkuaXNBcnJheShlcnJvci5lcnJvci5lcnJvcnMpKSB7XG4gICAgICBub3JtYWxpemVkRXJyb3IuZGV0YWlscyA9IGVycm9yLmVycm9yLmVycm9ycztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlcnJvci5lcnJvci5lcnJvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG5vcm1hbGl6ZWRFcnJvci5kZXRhaWxzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogZXJyb3IuZXJyb3IuZXJyb3IsXG4gICAgICAgICAgbWVzc2FnZTogZXJyb3IuZXJyb3IuZXJyb3JfZGVzY3JpcHRpb24sXG4gICAgICAgIH0sXG4gICAgICBdO1xuICAgIH1cblxuICAgIHJldHVybiBub3JtYWxpemVkRXJyb3I7XG4gIH1cblxuICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgJ0Vycm9yIHBhc3NlZCB0byBub3JtYWxpemVIdHRwRXJyb3IgaXMgbm90IEh0dHBFcnJvclJlc3BvbnNlIGluc3RhbmNlJyxcbiAgICAgIGVycm9yXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG4iXX0=