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
        else if (response.error.errors[0].type === 'PasswordMismatchError') {
            // uses en translation error message instead of backend exception error
            // @todo: this condition could be removed if backend gives better message
            this.globalMessageService.add({
                type: GlobalMessageType.MSG_TYPE_ERROR,
                text: 'Old password incorrect.',
            });
            // text: customError.customError.passwordMismatch,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkLXJlcXVlc3QuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9odHRwLWludGVyY2VwdG9ycy9oYW5kbGVycy9iYWQtcmVxdWVzdC5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7OztJQUVsRSxjQUFjLEdBQUcsa0NBQWtDO0FBRXpEO0lBR3VDLDZDQUFnQjtJQUh2RDtRQUFBLHFFQWtEQztRQTlDQyxvQkFBYyxHQUFHLGtCQUFrQixDQUFDLFdBQVcsQ0FBQzs7S0E4Q2pEOzs7Ozs7SUE1Q0MsdUNBQVc7Ozs7O0lBQVgsVUFBWSxPQUF5QixFQUFFLFFBQTJCO1FBQ2hFLElBQ0UsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLGVBQWUsRUFDeEM7WUFDQSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLFVBQVUsRUFBRTtnQkFDakQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQztvQkFDNUIsSUFBSSxFQUFFLGlCQUFpQixDQUFDLGNBQWM7b0JBQ3RDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxHQUFHLHVCQUF1QjtpQkFDL0QsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQzlCLGlCQUFpQixDQUFDLHFCQUFxQixDQUN4QyxDQUFDO2FBQ0g7U0FDRjthQUFNLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLHVCQUF1QixFQUFFO1lBQ3BFLHVFQUF1RTtZQUN2RSx5RUFBeUU7WUFDekUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQztnQkFDNUIsSUFBSSxFQUFFLGlCQUFpQixDQUFDLGNBQWM7Z0JBQ3RDLElBQUksRUFBRSx5QkFBeUI7YUFDaEMsQ0FBQyxDQUFDO1lBQ0gsa0RBQWtEO1NBQ25EO2FBQU07WUFDTCxxRkFBcUY7WUFDckYsK0NBQStDO1lBQy9DLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUM7Z0JBQzVCLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxjQUFjO2dCQUN0QyxJQUFJLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7YUFDckMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7Ozs7SUFFUywyQ0FBZTs7Ozs7SUFBekIsVUFBMEIsSUFBdUI7O1lBQzNDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTztRQUN6QixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxZQUFZLEtBQUssRUFBRTtnQkFDM0QsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUN2QztpQkFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ3ZDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDO2FBQ3ZDO1NBQ0Y7UUFFRCxPQUFPLE1BQU0sSUFBSSwwQkFBMEIsQ0FBQztJQUM5QyxDQUFDOztnQkFqREYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OzRCQVZEO0NBMERDLEFBbERELENBR3VDLGdCQUFnQixHQStDdEQ7U0EvQ1ksaUJBQWlCOzs7SUFDNUIsMkNBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cFJlcXVlc3QsIEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSHR0cEVycm9ySGFuZGxlciB9IGZyb20gJy4vaHR0cC1lcnJvci5oYW5kbGVyJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2dsb2JhbC1tZXNzYWdlLm1vZGVsJztcbmltcG9ydCB7IEh0dHBSZXNwb25zZVN0YXR1cyB9IGZyb20gJy4uLy4uL21vZGVscy9yZXNwb25zZS1zdGF0dXMubW9kZWwnO1xuXG5jb25zdCBPQVVUSF9FTkRQT0lOVCA9ICcvYXV0aG9yaXphdGlvbnNlcnZlci9vYXV0aC90b2tlbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBCYWRSZXF1ZXN0SGFuZGxlciBleHRlbmRzIEh0dHBFcnJvckhhbmRsZXIge1xuICByZXNwb25zZVN0YXR1cyA9IEh0dHBSZXNwb25zZVN0YXR1cy5CQURfUkVRVUVTVDtcblxuICBoYW5kbGVFcnJvcihyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCByZXNwb25zZTogSHR0cEVycm9yUmVzcG9uc2UpIHtcbiAgICBpZiAoXG4gICAgICByZXNwb25zZS51cmwuaW5kZXhPZihPQVVUSF9FTkRQT0lOVCkgIT09IC0xICYmXG4gICAgICByZXNwb25zZS5lcnJvci5lcnJvciA9PT0gJ2ludmFsaWRfZ3JhbnQnXG4gICAgKSB7XG4gICAgICBpZiAocmVxdWVzdC5ib2R5LmdldCgnZ3JhbnRfdHlwZScpID09PSAncGFzc3dvcmQnKSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKHtcbiAgICAgICAgICB0eXBlOiBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUixcbiAgICAgICAgICB0ZXh0OiB0aGlzLmdldEVycm9yTWVzc2FnZShyZXNwb25zZSkgKyAnLiBQbGVhc2UgbG9naW4gYWdhaW4uJyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UucmVtb3ZlKFxuICAgICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocmVzcG9uc2UuZXJyb3IuZXJyb3JzWzBdLnR5cGUgPT09ICdQYXNzd29yZE1pc21hdGNoRXJyb3InKSB7XG4gICAgICAvLyB1c2VzIGVuIHRyYW5zbGF0aW9uIGVycm9yIG1lc3NhZ2UgaW5zdGVhZCBvZiBiYWNrZW5kIGV4Y2VwdGlvbiBlcnJvclxuICAgICAgLy8gQHRvZG86IHRoaXMgY29uZGl0aW9uIGNvdWxkIGJlIHJlbW92ZWQgaWYgYmFja2VuZCBnaXZlcyBiZXR0ZXIgbWVzc2FnZVxuICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoe1xuICAgICAgICB0eXBlOiBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUixcbiAgICAgICAgdGV4dDogJ09sZCBwYXNzd29yZCBpbmNvcnJlY3QuJyxcbiAgICAgIH0pO1xuICAgICAgLy8gdGV4dDogY3VzdG9tRXJyb3IuY3VzdG9tRXJyb3IucGFzc3dvcmRNaXNtYXRjaCxcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdGhpcyBpcyBjdXJyZW50bHkgc2hvd2luZyB1cCBpbiBjYXNlIHdlIGhhdmUgYSBwYWdlIG5vdCBmb3VuZC4gSXQgc2hvdWxkIGJlIGEgNDA0LlxuICAgICAgLy8gc2VlIGh0dHBzOi8vamlyYS5oeWJyaXMuY29tL2Jyb3dzZS9DTVNYLTg1MTZcbiAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKHtcbiAgICAgICAgdHlwZTogR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1IsXG4gICAgICAgIHRleHQ6IHRoaXMuZ2V0RXJyb3JNZXNzYWdlKHJlc3BvbnNlKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRFcnJvck1lc3NhZ2UocmVzcDogSHR0cEVycm9yUmVzcG9uc2UpIHtcbiAgICBsZXQgZXJyTXNnID0gcmVzcC5tZXNzYWdlO1xuICAgIGlmIChyZXNwLmVycm9yKSB7XG4gICAgICBpZiAocmVzcC5lcnJvci5lcnJvcnMgJiYgcmVzcC5lcnJvci5lcnJvcnMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBlcnJNc2cgPSByZXNwLmVycm9yLmVycm9yc1swXS5tZXNzYWdlO1xuICAgICAgfSBlbHNlIGlmIChyZXNwLmVycm9yLmVycm9yX2Rlc2NyaXB0aW9uKSB7XG4gICAgICAgIGVyck1zZyA9IHJlc3AuZXJyb3IuZXJyb3JfZGVzY3JpcHRpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVyck1zZyB8fCAnQW4gdW5rbm93biBlcnJvciBvY2N1cmVkJztcbiAgfVxufVxuIl19