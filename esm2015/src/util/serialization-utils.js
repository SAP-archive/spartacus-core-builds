/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpErrorResponse } from '@angular/common/http';
import { isObject } from '../config/utils/deep-merge';
/** @type {?} */
export const UNKNOWN_ERROR = {
    error: 'unknown error',
};
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
            serializableError = JSON.stringify(error.error);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWFsaXphdGlvbi11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7QUFHdEQsTUFBTSxPQUFPLGFBQWEsR0FBRztJQUMzQixLQUFLLEVBQUUsZUFBZTtDQUN2Qjs7Ozs7QUFFRCxNQUFNLFVBQVUscUJBQXFCLENBQ25DLEtBQTJDO0lBRTNDLElBQUksS0FBSyxZQUFZLEtBQUssRUFBRTtRQUMxQixPQUFPLG1CQUFBO1lBQ0wsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixNQUFNLEVBQUUsS0FBSyxDQUFDLEtBQUs7U0FDcEIsRUFBYyxDQUFDO0tBQ2pCO0lBRUQsSUFBSSxLQUFLLFlBQVksaUJBQWlCLEVBQUU7O1lBQ2xDLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxLQUFLO1FBQ25DLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN6QixpQkFBaUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqRDtRQUVELE9BQU8sbUJBQUE7WUFDTCxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsS0FBSyxFQUFFLGlCQUFpQjtZQUN4QixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRztTQUNmLEVBQWtCLENBQUM7S0FDckI7SUFFRCxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDakQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuLi9jb25maWcvdXRpbHMvZGVlcC1tZXJnZSc7XG5pbXBvcnQgeyBFcnJvck1vZGVsLCBIdHRwRXJyb3JNb2RlbCB9IGZyb20gJy4uL21vZGVsL21pc2MubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgVU5LTk9XTl9FUlJPUiA9IHtcbiAgZXJyb3I6ICd1bmtub3duIGVycm9yJyxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRXJyb3JTZXJpYWxpemFibGUoXG4gIGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSB8IEVycm9yTW9kZWwgfCBhbnlcbik6IEh0dHBFcnJvck1vZGVsIHwgRXJyb3IgfCBhbnkge1xuICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgdHlwZTogZXJyb3IubmFtZSxcbiAgICAgIHJlYXNvbjogZXJyb3Iuc3RhY2ssXG4gICAgfSBhcyBFcnJvck1vZGVsO1xuICB9XG5cbiAgaWYgKGVycm9yIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpIHtcbiAgICBsZXQgc2VyaWFsaXphYmxlRXJyb3IgPSBlcnJvci5lcnJvcjtcbiAgICBpZiAoaXNPYmplY3QoZXJyb3IuZXJyb3IpKSB7XG4gICAgICBzZXJpYWxpemFibGVFcnJvciA9IEpTT04uc3RyaW5naWZ5KGVycm9yLmVycm9yKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICAgIGVycm9yOiBzZXJpYWxpemFibGVFcnJvcixcbiAgICAgIHN0YXR1czogZXJyb3Iuc3RhdHVzLFxuICAgICAgc3RhdHVzVGV4dDogZXJyb3Iuc3RhdHVzVGV4dCxcbiAgICAgIHVybDogZXJyb3IudXJsLFxuICAgIH0gYXMgSHR0cEVycm9yTW9kZWw7XG4gIH1cblxuICByZXR1cm4gaXNPYmplY3QoZXJyb3IpID8gVU5LTk9XTl9FUlJPUiA6IGVycm9yO1xufVxuIl19