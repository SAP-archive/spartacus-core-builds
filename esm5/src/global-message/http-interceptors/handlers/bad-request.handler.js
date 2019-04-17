/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpErrorHandler } from './http-error.handler';
import { GlobalMessageType } from '../../models/global-message.model';
import { HttpResponseStatus } from '../../models/response-status.model';
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
        if (response.url.indexOf(OAUTH_ENDPOINT) !== -1 &&
            response.error.error === 'invalid_grant') {
            if (request.body.get('grant_type') === 'password') {
                this.globalMessageService.add({
                    type: GlobalMessageType.MSG_TYPE_ERROR,
                    text: this.getErrorMessage(response) + '. Please login again.',
                });
                this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_CONFIRMATION);
            }
        }
        else {
            // this is currently showing up in case we have a page not found. It should be a 404.
            // see https://jira.hybris.com/browse/CMSX-8516
            this.globalMessageService.add({
                type: GlobalMessageType.MSG_TYPE_ERROR,
                text: this.getErrorMessage(response),
            });
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
        return errMsg || 'An unknown error occured';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkLXJlcXVlc3QuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9odHRwLWludGVyY2VwdG9ycy9oYW5kbGVycy9iYWQtcmVxdWVzdC5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7OztJQUVsRSxjQUFjLEdBQUcsa0NBQWtDO0FBRXpEO0lBR3VDLDZDQUFnQjtJQUh2RDtRQUFBLHFFQTBDQztRQXRDQyxvQkFBYyxHQUFHLGtCQUFrQixDQUFDLFdBQVcsQ0FBQzs7S0FzQ2pEOzs7Ozs7SUFwQ0MsdUNBQVc7Ozs7O0lBQVgsVUFBWSxPQUF5QixFQUFFLFFBQTJCO1FBQ2hFLElBQ0UsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLGVBQWUsRUFDeEM7WUFDQSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLFVBQVUsRUFBRTtnQkFDakQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQztvQkFDNUIsSUFBSSxFQUFFLGlCQUFpQixDQUFDLGNBQWM7b0JBQ3RDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxHQUFHLHVCQUF1QjtpQkFDL0QsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQzlCLGlCQUFpQixDQUFDLHFCQUFxQixDQUN4QyxDQUFDO2FBQ0g7U0FDRjthQUFNO1lBQ0wscUZBQXFGO1lBQ3JGLCtDQUErQztZQUMvQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDO2dCQUM1QixJQUFJLEVBQUUsaUJBQWlCLENBQUMsY0FBYztnQkFDdEMsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDO2FBQ3JDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Ozs7O0lBRVMsMkNBQWU7Ozs7O0lBQXpCLFVBQTBCLElBQXVCOztZQUMzQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU87UUFDekIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sWUFBWSxLQUFLLEVBQUU7Z0JBQzNELE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7YUFDdkM7aUJBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFO2dCQUN2QyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQzthQUN2QztTQUNGO1FBRUQsT0FBTyxNQUFNLElBQUksMEJBQTBCLENBQUM7SUFDOUMsQ0FBQzs7Z0JBekNGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs0QkFWRDtDQWtEQyxBQTFDRCxDQUd1QyxnQkFBZ0IsR0F1Q3REO1NBdkNZLGlCQUFpQjs7O0lBQzVCLDJDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBSZXF1ZXN0LCBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEh0dHBFcnJvckhhbmRsZXIgfSBmcm9tICcuL2h0dHAtZXJyb3IuaGFuZGxlcic7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlVHlwZSB9IGZyb20gJy4uLy4uL21vZGVscy9nbG9iYWwtbWVzc2FnZS5tb2RlbCc7XG5pbXBvcnQgeyBIdHRwUmVzcG9uc2VTdGF0dXMgfSBmcm9tICcuLi8uLi9tb2RlbHMvcmVzcG9uc2Utc3RhdHVzLm1vZGVsJztcblxuY29uc3QgT0FVVEhfRU5EUE9JTlQgPSAnL2F1dGhvcml6YXRpb25zZXJ2ZXIvb2F1dGgvdG9rZW4nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQmFkUmVxdWVzdEhhbmRsZXIgZXh0ZW5kcyBIdHRwRXJyb3JIYW5kbGVyIHtcbiAgcmVzcG9uc2VTdGF0dXMgPSBIdHRwUmVzcG9uc2VTdGF0dXMuQkFEX1JFUVVFU1Q7XG5cbiAgaGFuZGxlRXJyb3IocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgcmVzcG9uc2U6IEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgaWYgKFxuICAgICAgcmVzcG9uc2UudXJsLmluZGV4T2YoT0FVVEhfRU5EUE9JTlQpICE9PSAtMSAmJlxuICAgICAgcmVzcG9uc2UuZXJyb3IuZXJyb3IgPT09ICdpbnZhbGlkX2dyYW50J1xuICAgICkge1xuICAgICAgaWYgKHJlcXVlc3QuYm9keS5nZXQoJ2dyYW50X3R5cGUnKSA9PT0gJ3Bhc3N3b3JkJykge1xuICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZCh7XG4gICAgICAgICAgdHlwZTogR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1IsXG4gICAgICAgICAgdGV4dDogdGhpcy5nZXRFcnJvck1lc3NhZ2UocmVzcG9uc2UpICsgJy4gUGxlYXNlIGxvZ2luIGFnYWluLicsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLnJlbW92ZShcbiAgICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT05cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdGhpcyBpcyBjdXJyZW50bHkgc2hvd2luZyB1cCBpbiBjYXNlIHdlIGhhdmUgYSBwYWdlIG5vdCBmb3VuZC4gSXQgc2hvdWxkIGJlIGEgNDA0LlxuICAgICAgLy8gc2VlIGh0dHBzOi8vamlyYS5oeWJyaXMuY29tL2Jyb3dzZS9DTVNYLTg1MTZcbiAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKHtcbiAgICAgICAgdHlwZTogR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1IsXG4gICAgICAgIHRleHQ6IHRoaXMuZ2V0RXJyb3JNZXNzYWdlKHJlc3BvbnNlKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRFcnJvck1lc3NhZ2UocmVzcDogSHR0cEVycm9yUmVzcG9uc2UpIHtcbiAgICBsZXQgZXJyTXNnID0gcmVzcC5tZXNzYWdlO1xuICAgIGlmIChyZXNwLmVycm9yKSB7XG4gICAgICBpZiAocmVzcC5lcnJvci5lcnJvcnMgJiYgcmVzcC5lcnJvci5lcnJvcnMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBlcnJNc2cgPSByZXNwLmVycm9yLmVycm9yc1swXS5tZXNzYWdlO1xuICAgICAgfSBlbHNlIGlmIChyZXNwLmVycm9yLmVycm9yX2Rlc2NyaXB0aW9uKSB7XG4gICAgICAgIGVyck1zZyA9IHJlc3AuZXJyb3IuZXJyb3JfZGVzY3JpcHRpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVyck1zZyB8fCAnQW4gdW5rbm93biBlcnJvciBvY2N1cmVkJztcbiAgfVxufVxuIl19