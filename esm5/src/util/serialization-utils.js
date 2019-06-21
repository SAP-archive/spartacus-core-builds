/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpErrorResponse } from '@angular/common/http';
/**
 * @param {?} error
 * @return {?}
 */
export function makeHttpErrorSerializable(error) {
    if (!(error instanceof HttpErrorResponse) || !error) {
        return error;
    }
    return {
        message: error.message,
        error: error.error,
        status: error.status,
        statusText: error.statusText,
        url: error.url,
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWFsaXphdGlvbi11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7OztBQUd6RCxNQUFNLFVBQVUseUJBQXlCLENBQ3ZDLEtBQThCO0lBRTlCLElBQUksQ0FBQyxDQUFDLEtBQUssWUFBWSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ25ELE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxPQUFPO1FBQ0wsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1FBQ3RCLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztRQUNsQixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07UUFDcEIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1FBQzVCLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRztLQUNmLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBIdHRwRXJyb3JNb2RlbCB9IGZyb20gJy4uL21vZGVsL21pc2MubW9kZWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUh0dHBFcnJvclNlcmlhbGl6YWJsZShcbiAgZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlIHwgYW55XG4pOiBIdHRwRXJyb3JNb2RlbCB7XG4gIGlmICghKGVycm9yIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpIHx8ICFlcnJvcikge1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICBlcnJvcjogZXJyb3IuZXJyb3IsXG4gICAgc3RhdHVzOiBlcnJvci5zdGF0dXMsXG4gICAgc3RhdHVzVGV4dDogZXJyb3Iuc3RhdHVzVGV4dCxcbiAgICB1cmw6IGVycm9yLnVybCxcbiAgfTtcbn1cbiJdfQ==