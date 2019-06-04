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
            // this is currently showing up in case we have a page not found. It should be a 404.
            // see https://jira.hybris.com/browse/CMSX-8516
            /** @type {?} */
            const errorMessage = this.getErrorMessage(response);
            if (errorMessage) {
                this.globalMessageService.add({ raw: errorMessage }, GlobalMessageType.MSG_TYPE_ERROR);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkLXJlcXVlc3QuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9odHRwLWludGVyY2VwdG9ycy9oYW5kbGVycy9iYWQtcmVxdWVzdC5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O01BRWxELGNBQWMsR0FBRyxrQ0FBa0M7QUFLekQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGdCQUFnQjtJQUh2RDs7UUFJRSxtQkFBYyxHQUFHLGtCQUFrQixDQUFDLFdBQVcsQ0FBQztLQW9EakQ7Ozs7OztJQWxEQyxXQUFXLENBQUMsT0FBeUIsRUFBRSxRQUEyQjtRQUNoRSxJQUNFLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQztZQUNyQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxlQUFlLEVBQ3hDO1lBQ0EsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxVQUFVLEVBQUU7Z0JBQ2pELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQzNCO29CQUNFLEdBQUcsRUFBRSx5Q0FBeUM7b0JBQzlDLE1BQU0sRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2lCQUN6RCxFQUNELGlCQUFpQixDQUFDLGNBQWMsQ0FDakMsQ0FBQztnQkFDRixJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUM5QixpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FDeEMsQ0FBQzthQUNIO1NBQ0Y7YUFBTSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyx1QkFBdUIsRUFBRTtZQUNwRSx1RUFBdUU7WUFDdkUseUVBQXlFO1lBQ3pFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQzNCLEVBQUUsR0FBRyxFQUFFLDZDQUE2QyxFQUFFLEVBQ3RELGlCQUFpQixDQUFDLGNBQWMsQ0FDakMsQ0FBQztZQUNGLGtEQUFrRDtTQUNuRDthQUFNOzs7O2tCQUdDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQztZQUNuRCxJQUFJLFlBQVksRUFBRTtnQkFDaEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FDM0IsRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLEVBQ3JCLGlCQUFpQixDQUFDLGNBQWMsQ0FDakMsQ0FBQzthQUNIO1NBQ0Y7SUFDSCxDQUFDOzs7Ozs7SUFFUyxlQUFlLENBQUMsSUFBdUI7O1lBQzNDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTztRQUN6QixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxZQUFZLEtBQUssRUFBRTtnQkFDM0QsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUN2QztpQkFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ3ZDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDO2FBQ3ZDO1NBQ0Y7UUFFRCxPQUFPLE1BQU0sSUFBSSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7O1lBdkRGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7SUFFQywyQ0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlVHlwZSB9IGZyb20gJy4uLy4uL21vZGVscy9nbG9iYWwtbWVzc2FnZS5tb2RlbCc7XG5pbXBvcnQgeyBIdHRwUmVzcG9uc2VTdGF0dXMgfSBmcm9tICcuLi8uLi9tb2RlbHMvcmVzcG9uc2Utc3RhdHVzLm1vZGVsJztcbmltcG9ydCB7IEh0dHBFcnJvckhhbmRsZXIgfSBmcm9tICcuL2h0dHAtZXJyb3IuaGFuZGxlcic7XG5cbmNvbnN0IE9BVVRIX0VORFBPSU5UID0gJy9hdXRob3JpemF0aW9uc2VydmVyL29hdXRoL3Rva2VuJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEJhZFJlcXVlc3RIYW5kbGVyIGV4dGVuZHMgSHR0cEVycm9ySGFuZGxlciB7XG4gIHJlc3BvbnNlU3RhdHVzID0gSHR0cFJlc3BvbnNlU3RhdHVzLkJBRF9SRVFVRVNUO1xuXG4gIGhhbmRsZUVycm9yKHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIHJlc3BvbnNlOiBIdHRwRXJyb3JSZXNwb25zZSk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIHJlc3BvbnNlLnVybC5pbmNsdWRlcyhPQVVUSF9FTkRQT0lOVCkgJiZcbiAgICAgIHJlc3BvbnNlLmVycm9yLmVycm9yID09PSAnaW52YWxpZF9ncmFudCdcbiAgICApIHtcbiAgICAgIGlmIChyZXF1ZXN0LmJvZHkuZ2V0KCdncmFudF90eXBlJykgPT09ICdwYXNzd29yZCcpIHtcbiAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiAnaHR0cEhhbmRsZXJzLmJhZFJlcXVlc3RQbGVhc2VMb2dpbkFnYWluJyxcbiAgICAgICAgICAgIHBhcmFtczogeyBlcnJvck1lc3NhZ2U6IHRoaXMuZ2V0RXJyb3JNZXNzYWdlKHJlc3BvbnNlKSB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5yZW1vdmUoXG4gICAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyZXNwb25zZS5lcnJvci5lcnJvcnNbMF0udHlwZSA9PT0gJ1Bhc3N3b3JkTWlzbWF0Y2hFcnJvcicpIHtcbiAgICAgIC8vIHVzZXMgZW4gdHJhbnNsYXRpb24gZXJyb3IgbWVzc2FnZSBpbnN0ZWFkIG9mIGJhY2tlbmQgZXhjZXB0aW9uIGVycm9yXG4gICAgICAvLyBAdG9kbzogdGhpcyBjb25kaXRpb24gY291bGQgYmUgcmVtb3ZlZCBpZiBiYWNrZW5kIGdpdmVzIGJldHRlciBtZXNzYWdlXG4gICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgeyBrZXk6ICdodHRwSGFuZGxlcnMuYmFkUmVxdWVzdE9sZFBhc3N3b3JkSW5jb3JyZWN0JyB9LFxuICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUlxuICAgICAgKTtcbiAgICAgIC8vIHRleHQ6IGN1c3RvbUVycm9yLmN1c3RvbUVycm9yLnBhc3N3b3JkTWlzbWF0Y2gsXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHRoaXMgaXMgY3VycmVudGx5IHNob3dpbmcgdXAgaW4gY2FzZSB3ZSBoYXZlIGEgcGFnZSBub3QgZm91bmQuIEl0IHNob3VsZCBiZSBhIDQwNC5cbiAgICAgIC8vIHNlZSBodHRwczovL2ppcmEuaHlicmlzLmNvbS9icm93c2UvQ01TWC04NTE2XG4gICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSB0aGlzLmdldEVycm9yTWVzc2FnZShyZXNwb25zZSk7XG4gICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICAgIHsgcmF3OiBlcnJvck1lc3NhZ2UgfSxcbiAgICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRFcnJvck1lc3NhZ2UocmVzcDogSHR0cEVycm9yUmVzcG9uc2UpOiBzdHJpbmcge1xuICAgIGxldCBlcnJNc2cgPSByZXNwLm1lc3NhZ2U7XG4gICAgaWYgKHJlc3AuZXJyb3IpIHtcbiAgICAgIGlmIChyZXNwLmVycm9yLmVycm9ycyAmJiByZXNwLmVycm9yLmVycm9ycyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGVyck1zZyA9IHJlc3AuZXJyb3IuZXJyb3JzWzBdLm1lc3NhZ2U7XG4gICAgICB9IGVsc2UgaWYgKHJlc3AuZXJyb3IuZXJyb3JfZGVzY3JpcHRpb24pIHtcbiAgICAgICAgZXJyTXNnID0gcmVzcC5lcnJvci5lcnJvcl9kZXNjcmlwdGlvbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyTXNnIHx8ICcnO1xuICB9XG59XG4iXX0=