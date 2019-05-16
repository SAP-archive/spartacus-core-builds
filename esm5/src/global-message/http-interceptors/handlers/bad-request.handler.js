/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { GlobalMessageType } from '../../models/global-message.model';
import { HttpResponseStatus } from '../../models/response-status.model';
import { HttpErrorHandler } from './http-error.handler';
import * as i0 from "@angular/core";
import * as i1 from "../../facade/global-message.service";
/** @type {?} */
var OAUTH_ENDPOINT = '/authorizationserver/oauth/token';
var BadRequestHandler = /** @class */ (function (_super) {
    tslib_1.__extends(BadRequestHandler, _super);
    function BadRequestHandler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.responseStatus = HttpResponseStatus.BAD_REQUEST;
        return _this;
    }
    /**
     * @param {?} request
     * @param {?} response
     * @return {?}
     */
    BadRequestHandler.prototype.handleError = /**
     * @param {?} request
     * @param {?} response
     * @return {?}
     */
    function (request, response) {
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
                var errorMessage = this.getErrorMessage(response);
                /** @type {?} */
                var textObj = errorMessage
                    ? { raw: errorMessage }
                    : { key: 'httpHandlers.unknownError' };
                this.globalMessageService.add(textObj, GlobalMessageType.MSG_TYPE_ERROR);
            }
        }
    };
    /**
     * @protected
     * @param {?} resp
     * @return {?}
     */
    BadRequestHandler.prototype.getErrorMessage = /**
     * @protected
     * @param {?} resp
     * @return {?}
     */
    function (resp) {
        /** @type {?} */
        var errMsg = resp.message;
        if (resp.error) {
            if (resp.error.errors && resp.error.errors instanceof Array) {
                errMsg = resp.error.errors[0].message;
            }
            else if (resp.error.error_description) {
                errMsg = resp.error.error_description;
            }
        }
        return errMsg || '';
    };
    BadRequestHandler.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */ BadRequestHandler.ngInjectableDef = i0.defineInjectable({ factory: function BadRequestHandler_Factory() { return new BadRequestHandler(i0.inject(i1.GlobalMessageService)); }, token: BadRequestHandler, providedIn: "root" });
    return BadRequestHandler;
}(HttpErrorHandler));
export { BadRequestHandler };
if (false) {
    /** @type {?} */
    BadRequestHandler.prototype.responseStatus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkLXJlcXVlc3QuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9odHRwLWludGVyY2VwdG9ycy9oYW5kbGVycy9iYWQtcmVxdWVzdC5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7OztJQUVsRCxjQUFjLEdBQUcsa0NBQWtDO0FBRXpEO0lBR3VDLDZDQUFnQjtJQUh2RDtRQUFBLHFFQTJEQztRQXZEQyxvQkFBYyxHQUFHLGtCQUFrQixDQUFDLFdBQVcsQ0FBQzs7S0F1RGpEOzs7Ozs7SUFyREMsdUNBQVc7Ozs7O0lBQVgsVUFBWSxPQUF5QixFQUFFLFFBQTJCO1FBQ2hFLElBQ0UsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDO1lBQ3JDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLGVBQWUsRUFDeEM7WUFDQSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLFVBQVUsRUFBRTtnQkFDakQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FDM0I7b0JBQ0UsR0FBRyxFQUFFLHlDQUF5QztvQkFDOUMsTUFBTSxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEVBQUU7aUJBQ3pELEVBQ0QsaUJBQWlCLENBQUMsY0FBYyxDQUNqQyxDQUFDO2dCQUNGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQzlCLGlCQUFpQixDQUFDLHFCQUFxQixDQUN4QyxDQUFDO2FBQ0g7U0FDRjthQUFNLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLHVCQUF1QixFQUFFO1lBQ3BFLHVFQUF1RTtZQUN2RSx5RUFBeUU7WUFDekUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FDM0IsRUFBRSxHQUFHLEVBQUUsNkNBQTZDLEVBQUUsRUFDdEQsaUJBQWlCLENBQUMsY0FBYyxDQUNqQyxDQUFDO1lBQ0Ysa0RBQWtEO1NBQ25EO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsRUFBRTs7OztvQkFHdEMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDOztvQkFDN0MsT0FBTyxHQUFHLFlBQVk7b0JBQzFCLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUU7b0JBQ3ZCLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSwyQkFBMkIsRUFBRTtnQkFDeEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FDM0IsT0FBTyxFQUNQLGlCQUFpQixDQUFDLGNBQWMsQ0FDakMsQ0FBQzthQUNIO1NBQ0Y7SUFDSCxDQUFDOzs7Ozs7SUFFUywyQ0FBZTs7Ozs7SUFBekIsVUFBMEIsSUFBdUI7O1lBQzNDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTztRQUN6QixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxZQUFZLEtBQUssRUFBRTtnQkFDM0QsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUN2QztpQkFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ3ZDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDO2FBQ3ZDO1NBQ0Y7UUFFRCxPQUFPLE1BQU0sSUFBSSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Z0JBMURGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs0QkFWRDtDQW1FQyxBQTNERCxDQUd1QyxnQkFBZ0IsR0F3RHREO1NBeERZLGlCQUFpQjs7O0lBQzVCLDJDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2dsb2JhbC1tZXNzYWdlLm1vZGVsJztcbmltcG9ydCB7IEh0dHBSZXNwb25zZVN0YXR1cyB9IGZyb20gJy4uLy4uL21vZGVscy9yZXNwb25zZS1zdGF0dXMubW9kZWwnO1xuaW1wb3J0IHsgSHR0cEVycm9ySGFuZGxlciB9IGZyb20gJy4vaHR0cC1lcnJvci5oYW5kbGVyJztcblxuY29uc3QgT0FVVEhfRU5EUE9JTlQgPSAnL2F1dGhvcml6YXRpb25zZXJ2ZXIvb2F1dGgvdG9rZW4nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQmFkUmVxdWVzdEhhbmRsZXIgZXh0ZW5kcyBIdHRwRXJyb3JIYW5kbGVyIHtcbiAgcmVzcG9uc2VTdGF0dXMgPSBIdHRwUmVzcG9uc2VTdGF0dXMuQkFEX1JFUVVFU1Q7XG5cbiAgaGFuZGxlRXJyb3IocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgcmVzcG9uc2U6IEh0dHBFcnJvclJlc3BvbnNlKTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgcmVzcG9uc2UudXJsLmluY2x1ZGVzKE9BVVRIX0VORFBPSU5UKSAmJlxuICAgICAgcmVzcG9uc2UuZXJyb3IuZXJyb3IgPT09ICdpbnZhbGlkX2dyYW50J1xuICAgICkge1xuICAgICAgaWYgKHJlcXVlc3QuYm9keS5nZXQoJ2dyYW50X3R5cGUnKSA9PT0gJ3Bhc3N3b3JkJykge1xuICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6ICdodHRwSGFuZGxlcnMuYmFkUmVxdWVzdFBsZWFzZUxvZ2luQWdhaW4nLFxuICAgICAgICAgICAgcGFyYW1zOiB7IGVycm9yTWVzc2FnZTogdGhpcy5nZXRFcnJvck1lc3NhZ2UocmVzcG9uc2UpIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUlxuICAgICAgICApO1xuICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLnJlbW92ZShcbiAgICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT05cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLmVycm9yLmVycm9yc1swXS50eXBlID09PSAnUGFzc3dvcmRNaXNtYXRjaEVycm9yJykge1xuICAgICAgLy8gdXNlcyBlbiB0cmFuc2xhdGlvbiBlcnJvciBtZXNzYWdlIGluc3RlYWQgb2YgYmFja2VuZCBleGNlcHRpb24gZXJyb3JcbiAgICAgIC8vIEB0b2RvOiB0aGlzIGNvbmRpdGlvbiBjb3VsZCBiZSByZW1vdmVkIGlmIGJhY2tlbmQgZ2l2ZXMgYmV0dGVyIG1lc3NhZ2VcbiAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICB7IGtleTogJ2h0dHBIYW5kbGVycy5iYWRSZXF1ZXN0T2xkUGFzc3dvcmRJbmNvcnJlY3QnIH0sXG4gICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SXG4gICAgICApO1xuICAgICAgLy8gdGV4dDogY3VzdG9tRXJyb3IuY3VzdG9tRXJyb3IucGFzc3dvcmRNaXNtYXRjaCxcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFyZXF1ZXN0LnVybC5pbmNsdWRlcygnL2Ntcy9jb21wb25lbnRzJykpIHtcbiAgICAgICAgLy8gdGhpcyBpcyBjdXJyZW50bHkgc2hvd2luZyB1cCBpbiBjYXNlIHdlIGhhdmUgYSBwYWdlIG5vdCBmb3VuZC4gSXQgc2hvdWxkIGJlIGEgNDA0LlxuICAgICAgICAvLyBzZWUgaHR0cHM6Ly9qaXJhLmh5YnJpcy5jb20vYnJvd3NlL0NNU1gtODUxNlxuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSB0aGlzLmdldEVycm9yTWVzc2FnZShyZXNwb25zZSk7XG4gICAgICAgIGNvbnN0IHRleHRPYmogPSBlcnJvck1lc3NhZ2VcbiAgICAgICAgICA/IHsgcmF3OiBlcnJvck1lc3NhZ2UgfVxuICAgICAgICAgIDogeyBrZXk6ICdodHRwSGFuZGxlcnMudW5rbm93bkVycm9yJyB9O1xuICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgICB0ZXh0T2JqLFxuICAgICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGdldEVycm9yTWVzc2FnZShyZXNwOiBIdHRwRXJyb3JSZXNwb25zZSk6IHN0cmluZyB7XG4gICAgbGV0IGVyck1zZyA9IHJlc3AubWVzc2FnZTtcbiAgICBpZiAocmVzcC5lcnJvcikge1xuICAgICAgaWYgKHJlc3AuZXJyb3IuZXJyb3JzICYmIHJlc3AuZXJyb3IuZXJyb3JzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgZXJyTXNnID0gcmVzcC5lcnJvci5lcnJvcnNbMF0ubWVzc2FnZTtcbiAgICAgIH0gZWxzZSBpZiAocmVzcC5lcnJvci5lcnJvcl9kZXNjcmlwdGlvbikge1xuICAgICAgICBlcnJNc2cgPSByZXNwLmVycm9yLmVycm9yX2Rlc2NyaXB0aW9uO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJNc2cgfHwgJyc7XG4gIH1cbn1cbiJdfQ==