/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { GlobalMessageType } from '../../models/global-message.model';
import { HttpResponseStatus } from '../../models/response-status.model';
import { HttpErrorHandler } from './http-error.handler';
import * as i0 from "@angular/core";
import * as i1 from "../../facade/global-message.service";
/** @type {?} */
const OAUTH_ENDPOINT = '/authorizationserver/oauth/token';
export class BadRequestHandler extends HttpErrorHandler {
    constructor() {
        super(...arguments);
        this.responseStatus = HttpResponseStatus.BAD_REQUEST;
    }
    /**
     * @param {?} request
     * @param {?} response
     * @return {?}
     */
    handleError(request, response) {
        if (response.url.includes(OAUTH_ENDPOINT) &&
            response.error.error === 'invalid_grant') {
            if (request.body.get('grant_type') === 'password') {
                this.globalMessageService.add({
                    key: 'httpHandlers.badRequestPleaseLoginAgain',
                    params: { errorMessage: this.getErrorMessage(response) },
                }, GlobalMessageType.MSG_TYPE_ERROR);
                this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_CONFIRMATION);
            }
        }
        else if (response.error.errors[0].type === 'PasswordMismatchError') {
            // uses en translation error message instead of backend exception error
            // @todo: this condition could be removed if backend gives better message
            this.globalMessageService.add({ key: 'httpHandlers.badRequestOldPasswordIncorrect' }, GlobalMessageType.MSG_TYPE_ERROR);
            // text: customError.customError.passwordMismatch,
        }
        else {
            if (!request.url.includes('/cms/components')) {
                // this is currently showing up in case we have a page not found. It should be a 404.
                // see https://jira.hybris.com/browse/CMSX-8516
                /** @type {?} */
                const errorMessage = this.getErrorMessage(response);
                /** @type {?} */
                const textObj = errorMessage
                    ? { raw: errorMessage }
                    : { key: 'httpHandlers.unknownError' };
                this.globalMessageService.add(textObj, GlobalMessageType.MSG_TYPE_ERROR);
            }
        }
    }
    /**
     * @protected
     * @param {?} resp
     * @return {?}
     */
    getErrorMessage(resp) {
        /** @type {?} */
        let errMsg = resp.message;
        if (resp.error) {
            if (resp.error.errors && resp.error.errors instanceof Array) {
                errMsg = resp.error.errors[0].message;
            }
            else if (resp.error.error_description) {
                errMsg = resp.error.error_description;
            }
        }
        return errMsg || '';
    }
}
BadRequestHandler.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ BadRequestHandler.ngInjectableDef = i0.defineInjectable({ factory: function BadRequestHandler_Factory() { return new BadRequestHandler(i0.inject(i1.GlobalMessageService)); }, token: BadRequestHandler, providedIn: "root" });
if (false) {
    /** @type {?} */
    BadRequestHandler.prototype.responseStatus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkLXJlcXVlc3QuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9odHRwLWludGVyY2VwdG9ycy9oYW5kbGVycy9iYWQtcmVxdWVzdC5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O01BRWxELGNBQWMsR0FBRyxrQ0FBa0M7QUFLekQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGdCQUFnQjtJQUh2RDs7UUFJRSxtQkFBYyxHQUFHLGtCQUFrQixDQUFDLFdBQVcsQ0FBQztLQXVEakQ7Ozs7OztJQXJEQyxXQUFXLENBQUMsT0FBeUIsRUFBRSxRQUEyQjtRQUNoRSxJQUNFLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQztZQUNyQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxlQUFlLEVBQ3hDO1lBQ0EsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxVQUFVLEVBQUU7Z0JBQ2pELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQzNCO29CQUNFLEdBQUcsRUFBRSx5Q0FBeUM7b0JBQzlDLE1BQU0sRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2lCQUN6RCxFQUNELGlCQUFpQixDQUFDLGNBQWMsQ0FDakMsQ0FBQztnQkFDRixJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUM5QixpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FDeEMsQ0FBQzthQUNIO1NBQ0Y7YUFBTSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyx1QkFBdUIsRUFBRTtZQUNwRSx1RUFBdUU7WUFDdkUseUVBQXlFO1lBQ3pFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQzNCLEVBQUUsR0FBRyxFQUFFLDZDQUE2QyxFQUFFLEVBQ3RELGlCQUFpQixDQUFDLGNBQWMsQ0FDakMsQ0FBQztZQUNGLGtEQUFrRDtTQUNuRDthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLEVBQUU7Ozs7c0JBR3RDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQzs7c0JBQzdDLE9BQU8sR0FBRyxZQUFZO29CQUMxQixDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFO29CQUN2QixDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsMkJBQTJCLEVBQUU7Z0JBQ3hDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQzNCLE9BQU8sRUFDUCxpQkFBaUIsQ0FBQyxjQUFjLENBQ2pDLENBQUM7YUFDSDtTQUNGO0lBQ0gsQ0FBQzs7Ozs7O0lBRVMsZUFBZSxDQUFDLElBQXVCOztZQUMzQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU87UUFDekIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sWUFBWSxLQUFLLEVBQUU7Z0JBQzNELE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7YUFDdkM7aUJBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFO2dCQUN2QyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQzthQUN2QztTQUNGO1FBRUQsT0FBTyxNQUFNLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7OztZQTFERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7O0lBRUMsMkNBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvZ2xvYmFsLW1lc3NhZ2UubW9kZWwnO1xuaW1wb3J0IHsgSHR0cFJlc3BvbnNlU3RhdHVzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Jlc3BvbnNlLXN0YXR1cy5tb2RlbCc7XG5pbXBvcnQgeyBIdHRwRXJyb3JIYW5kbGVyIH0gZnJvbSAnLi9odHRwLWVycm9yLmhhbmRsZXInO1xuXG5jb25zdCBPQVVUSF9FTkRQT0lOVCA9ICcvYXV0aG9yaXphdGlvbnNlcnZlci9vYXV0aC90b2tlbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBCYWRSZXF1ZXN0SGFuZGxlciBleHRlbmRzIEh0dHBFcnJvckhhbmRsZXIge1xuICByZXNwb25zZVN0YXR1cyA9IEh0dHBSZXNwb25zZVN0YXR1cy5CQURfUkVRVUVTVDtcblxuICBoYW5kbGVFcnJvcihyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCByZXNwb25zZTogSHR0cEVycm9yUmVzcG9uc2UpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICByZXNwb25zZS51cmwuaW5jbHVkZXMoT0FVVEhfRU5EUE9JTlQpICYmXG4gICAgICByZXNwb25zZS5lcnJvci5lcnJvciA9PT0gJ2ludmFsaWRfZ3JhbnQnXG4gICAgKSB7XG4gICAgICBpZiAocmVxdWVzdC5ib2R5LmdldCgnZ3JhbnRfdHlwZScpID09PSAncGFzc3dvcmQnKSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogJ2h0dHBIYW5kbGVycy5iYWRSZXF1ZXN0UGxlYXNlTG9naW5BZ2FpbicsXG4gICAgICAgICAgICBwYXJhbXM6IHsgZXJyb3JNZXNzYWdlOiB0aGlzLmdldEVycm9yTWVzc2FnZShyZXNwb25zZSkgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UucmVtb3ZlKFxuICAgICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocmVzcG9uc2UuZXJyb3IuZXJyb3JzWzBdLnR5cGUgPT09ICdQYXNzd29yZE1pc21hdGNoRXJyb3InKSB7XG4gICAgICAvLyB1c2VzIGVuIHRyYW5zbGF0aW9uIGVycm9yIG1lc3NhZ2UgaW5zdGVhZCBvZiBiYWNrZW5kIGV4Y2VwdGlvbiBlcnJvclxuICAgICAgLy8gQHRvZG86IHRoaXMgY29uZGl0aW9uIGNvdWxkIGJlIHJlbW92ZWQgaWYgYmFja2VuZCBnaXZlcyBiZXR0ZXIgbWVzc2FnZVxuICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgIHsga2V5OiAnaHR0cEhhbmRsZXJzLmJhZFJlcXVlc3RPbGRQYXNzd29yZEluY29ycmVjdCcgfSxcbiAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICAgICk7XG4gICAgICAvLyB0ZXh0OiBjdXN0b21FcnJvci5jdXN0b21FcnJvci5wYXNzd29yZE1pc21hdGNoLFxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXJlcXVlc3QudXJsLmluY2x1ZGVzKCcvY21zL2NvbXBvbmVudHMnKSkge1xuICAgICAgICAvLyB0aGlzIGlzIGN1cnJlbnRseSBzaG93aW5nIHVwIGluIGNhc2Ugd2UgaGF2ZSBhIHBhZ2Ugbm90IGZvdW5kLiBJdCBzaG91bGQgYmUgYSA0MDQuXG4gICAgICAgIC8vIHNlZSBodHRwczovL2ppcmEuaHlicmlzLmNvbS9icm93c2UvQ01TWC04NTE2XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IHRoaXMuZ2V0RXJyb3JNZXNzYWdlKHJlc3BvbnNlKTtcbiAgICAgICAgY29uc3QgdGV4dE9iaiA9IGVycm9yTWVzc2FnZVxuICAgICAgICAgID8geyByYXc6IGVycm9yTWVzc2FnZSB9XG4gICAgICAgICAgOiB7IGtleTogJ2h0dHBIYW5kbGVycy51bmtub3duRXJyb3InIH07XG4gICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICAgIHRleHRPYmosXG4gICAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0RXJyb3JNZXNzYWdlKHJlc3A6IEh0dHBFcnJvclJlc3BvbnNlKTogc3RyaW5nIHtcbiAgICBsZXQgZXJyTXNnID0gcmVzcC5tZXNzYWdlO1xuICAgIGlmIChyZXNwLmVycm9yKSB7XG4gICAgICBpZiAocmVzcC5lcnJvci5lcnJvcnMgJiYgcmVzcC5lcnJvci5lcnJvcnMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBlcnJNc2cgPSByZXNwLmVycm9yLmVycm9yc1swXS5tZXNzYWdlO1xuICAgICAgfSBlbHNlIGlmIChyZXNwLmVycm9yLmVycm9yX2Rlc2NyaXB0aW9uKSB7XG4gICAgICAgIGVyck1zZyA9IHJlc3AuZXJyb3IuZXJyb3JfZGVzY3JpcHRpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVyck1zZyB8fCAnJztcbiAgfVxufVxuIl19