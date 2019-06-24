/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpErrorResponse } from '@angular/common/http';
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
        return (/** @type {?} */ ({
            message: error.message,
            error: error.error,
            status: error.status,
            statusText: error.statusText,
            url: error.url,
        }));
    }
    return error;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWFsaXphdGlvbi11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7OztBQUd6RCxNQUFNLFVBQVUscUJBQXFCLENBQ25DLEtBQTJDO0lBRTNDLElBQUksS0FBSyxZQUFZLEtBQUssRUFBRTtRQUMxQixPQUFPLG1CQUFBO1lBQ0wsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixNQUFNLEVBQUUsS0FBSyxDQUFDLEtBQUs7U0FDcEIsRUFBYyxDQUFDO0tBQ2pCO0lBRUQsSUFBSSxLQUFLLFlBQVksaUJBQWlCLEVBQUU7UUFDdEMsT0FBTyxtQkFBQTtZQUNMLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUc7U0FDZixFQUFrQixDQUFDO0tBQ3JCO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBFcnJvck1vZGVsLCBIdHRwRXJyb3JNb2RlbCB9IGZyb20gJy4uL21vZGVsL21pc2MubW9kZWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUVycm9yU2VyaWFsaXphYmxlKFxuICBlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UgfCBFcnJvck1vZGVsIHwgYW55XG4pOiBIdHRwRXJyb3JNb2RlbCB8IEVycm9yIHwgYW55IHtcbiAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICAgIHR5cGU6IGVycm9yLm5hbWUsXG4gICAgICByZWFzb246IGVycm9yLnN0YWNrLFxuICAgIH0gYXMgRXJyb3JNb2RlbDtcbiAgfVxuXG4gIGlmIChlcnJvciBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICBlcnJvcjogZXJyb3IuZXJyb3IsXG4gICAgICBzdGF0dXM6IGVycm9yLnN0YXR1cyxcbiAgICAgIHN0YXR1c1RleHQ6IGVycm9yLnN0YXR1c1RleHQsXG4gICAgICB1cmw6IGVycm9yLnVybCxcbiAgICB9IGFzIEh0dHBFcnJvck1vZGVsO1xuICB9XG5cbiAgcmV0dXJuIGVycm9yO1xufVxuIl19