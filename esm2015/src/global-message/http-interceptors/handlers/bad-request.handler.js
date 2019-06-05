/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            response.error.error === 'invalid_grant' &&
            request.body.get('grant_type') === 'password') {
            this.globalMessageService.add({
                key: 'httpHandlers.badRequestPleaseLoginAgain',
                params: { errorMessage: this.getErrorMessage(response) },
            }, GlobalMessageType.MSG_TYPE_ERROR);
            this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_CONFIRMATION);
        }
        else if (response.error.errors[0].type === 'PasswordMismatchError') {
            // uses en translation error message instead of backend exception error
            // @todo: this condition could be removed if backend gives better message
            this.globalMessageService.add({ key: 'httpHandlers.badRequestOldPasswordIncorrect' }, GlobalMessageType.MSG_TYPE_ERROR);
            // text: customError.customError.passwordMismatch,
        }
        else if (response.error.errors[0].subjectType === 'cart' &&
            response.error.errors[0].reason === 'notFound') {
            /** @type {?} */
            const textObj = { key: 'httpHandlers.cartNotFound' };
            this.globalMessageService.add(textObj, GlobalMessageType.MSG_TYPE_ERROR);
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
/** @nocollapse */ BadRequestHandler.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function BadRequestHandler_Factory() { return new BadRequestHandler(i0.ɵɵinject(i1.GlobalMessageService)); }, token: BadRequestHandler, providedIn: "root" });
if (false) {
    /** @type {?} */
    BadRequestHandler.prototype.responseStatus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkLXJlcXVlc3QuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9odHRwLWludGVyY2VwdG9ycy9oYW5kbGVycy9iYWQtcmVxdWVzdC5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O01BRWxELGNBQWMsR0FBRyxrQ0FBa0M7QUFLekQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGdCQUFnQjtJQUh2RDs7UUFJRSxtQkFBYyxHQUFHLGtCQUFrQixDQUFDLFdBQVcsQ0FBQztLQXVEakQ7Ozs7OztJQXJEQyxXQUFXLENBQUMsT0FBeUIsRUFBRSxRQUEyQjtRQUNoRSxJQUNFLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQztZQUNyQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxlQUFlO1lBQ3hDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLFVBQVUsRUFDN0M7WUFDQSxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUMzQjtnQkFDRSxHQUFHLEVBQUUseUNBQXlDO2dCQUM5QyxNQUFNLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsRUFBRTthQUN6RCxFQUNELGlCQUFpQixDQUFDLGNBQWMsQ0FDakMsQ0FBQztZQUNGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLENBQUMsQ0FBQztTQUMzRTthQUFNLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLHVCQUF1QixFQUFFO1lBQ3BFLHVFQUF1RTtZQUN2RSx5RUFBeUU7WUFDekUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FDM0IsRUFBRSxHQUFHLEVBQUUsNkNBQTZDLEVBQUUsRUFDdEQsaUJBQWlCLENBQUMsY0FBYyxDQUNqQyxDQUFDO1lBQ0Ysa0RBQWtEO1NBQ25EO2FBQU0sSUFDTCxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEtBQUssTUFBTTtZQUMvQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssVUFBVSxFQUM5Qzs7a0JBQ00sT0FBTyxHQUFHLEVBQUUsR0FBRyxFQUFFLDJCQUEyQixFQUFFO1lBQ3BELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQzFFO2FBQU07Ozs7a0JBR0MsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDO1lBQ25ELElBQUksWUFBWSxFQUFFO2dCQUNoQixJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUMzQixFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsRUFDckIsaUJBQWlCLENBQUMsY0FBYyxDQUNqQyxDQUFDO2FBQ0g7U0FDRjtJQUNILENBQUM7Ozs7OztJQUVTLGVBQWUsQ0FBQyxJQUF1Qjs7WUFDM0MsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPO1FBQ3pCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLFlBQVksS0FBSyxFQUFFO2dCQUMzRCxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO2FBQ3ZDO2lCQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRTtnQkFDdkMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUM7YUFDdkM7U0FDRjtRQUVELE9BQU8sTUFBTSxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7WUExREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7OztJQUVDLDJDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2dsb2JhbC1tZXNzYWdlLm1vZGVsJztcbmltcG9ydCB7IEh0dHBSZXNwb25zZVN0YXR1cyB9IGZyb20gJy4uLy4uL21vZGVscy9yZXNwb25zZS1zdGF0dXMubW9kZWwnO1xuaW1wb3J0IHsgSHR0cEVycm9ySGFuZGxlciB9IGZyb20gJy4vaHR0cC1lcnJvci5oYW5kbGVyJztcblxuY29uc3QgT0FVVEhfRU5EUE9JTlQgPSAnL2F1dGhvcml6YXRpb25zZXJ2ZXIvb2F1dGgvdG9rZW4nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQmFkUmVxdWVzdEhhbmRsZXIgZXh0ZW5kcyBIdHRwRXJyb3JIYW5kbGVyIHtcbiAgcmVzcG9uc2VTdGF0dXMgPSBIdHRwUmVzcG9uc2VTdGF0dXMuQkFEX1JFUVVFU1Q7XG5cbiAgaGFuZGxlRXJyb3IocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgcmVzcG9uc2U6IEh0dHBFcnJvclJlc3BvbnNlKTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgcmVzcG9uc2UudXJsLmluY2x1ZGVzKE9BVVRIX0VORFBPSU5UKSAmJlxuICAgICAgcmVzcG9uc2UuZXJyb3IuZXJyb3IgPT09ICdpbnZhbGlkX2dyYW50JyAmJlxuICAgICAgcmVxdWVzdC5ib2R5LmdldCgnZ3JhbnRfdHlwZScpID09PSAncGFzc3dvcmQnXG4gICAgKSB7XG4gICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAge1xuICAgICAgICAgIGtleTogJ2h0dHBIYW5kbGVycy5iYWRSZXF1ZXN0UGxlYXNlTG9naW5BZ2FpbicsXG4gICAgICAgICAgcGFyYW1zOiB7IGVycm9yTWVzc2FnZTogdGhpcy5nZXRFcnJvck1lc3NhZ2UocmVzcG9uc2UpIH0sXG4gICAgICAgIH0sXG4gICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SXG4gICAgICApO1xuICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5yZW1vdmUoR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OKTtcbiAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLmVycm9yLmVycm9yc1swXS50eXBlID09PSAnUGFzc3dvcmRNaXNtYXRjaEVycm9yJykge1xuICAgICAgLy8gdXNlcyBlbiB0cmFuc2xhdGlvbiBlcnJvciBtZXNzYWdlIGluc3RlYWQgb2YgYmFja2VuZCBleGNlcHRpb24gZXJyb3JcbiAgICAgIC8vIEB0b2RvOiB0aGlzIGNvbmRpdGlvbiBjb3VsZCBiZSByZW1vdmVkIGlmIGJhY2tlbmQgZ2l2ZXMgYmV0dGVyIG1lc3NhZ2VcbiAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICB7IGtleTogJ2h0dHBIYW5kbGVycy5iYWRSZXF1ZXN0T2xkUGFzc3dvcmRJbmNvcnJlY3QnIH0sXG4gICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SXG4gICAgICApO1xuICAgICAgLy8gdGV4dDogY3VzdG9tRXJyb3IuY3VzdG9tRXJyb3IucGFzc3dvcmRNaXNtYXRjaCxcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgcmVzcG9uc2UuZXJyb3IuZXJyb3JzWzBdLnN1YmplY3RUeXBlID09PSAnY2FydCcgJiZcbiAgICAgIHJlc3BvbnNlLmVycm9yLmVycm9yc1swXS5yZWFzb24gPT09ICdub3RGb3VuZCdcbiAgICApIHtcbiAgICAgIGNvbnN0IHRleHRPYmogPSB7IGtleTogJ2h0dHBIYW5kbGVycy5jYXJ0Tm90Rm91bmQnIH07XG4gICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZCh0ZXh0T2JqLCBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHRoaXMgaXMgY3VycmVudGx5IHNob3dpbmcgdXAgaW4gY2FzZSB3ZSBoYXZlIGEgcGFnZSBub3QgZm91bmQuIEl0IHNob3VsZCBiZSBhIDQwNC5cbiAgICAgIC8vIHNlZSBodHRwczovL2ppcmEuaHlicmlzLmNvbS9icm93c2UvQ01TWC04NTE2XG4gICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSB0aGlzLmdldEVycm9yTWVzc2FnZShyZXNwb25zZSk7XG4gICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICAgIHsgcmF3OiBlcnJvck1lc3NhZ2UgfSxcbiAgICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRFcnJvck1lc3NhZ2UocmVzcDogSHR0cEVycm9yUmVzcG9uc2UpOiBzdHJpbmcge1xuICAgIGxldCBlcnJNc2cgPSByZXNwLm1lc3NhZ2U7XG4gICAgaWYgKHJlc3AuZXJyb3IpIHtcbiAgICAgIGlmIChyZXNwLmVycm9yLmVycm9ycyAmJiByZXNwLmVycm9yLmVycm9ycyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGVyck1zZyA9IHJlc3AuZXJyb3IuZXJyb3JzWzBdLm1lc3NhZ2U7XG4gICAgICB9IGVsc2UgaWYgKHJlc3AuZXJyb3IuZXJyb3JfZGVzY3JpcHRpb24pIHtcbiAgICAgICAgZXJyTXNnID0gcmVzcC5lcnJvci5lcnJvcl9kZXNjcmlwdGlvbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyTXNnIHx8ICcnO1xuICB9XG59XG4iXX0=