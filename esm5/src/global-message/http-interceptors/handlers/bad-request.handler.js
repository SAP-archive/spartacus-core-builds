/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        var _this = this;
        if (response.url.includes(OAUTH_ENDPOINT) &&
            response.error.error === 'invalid_grant' &&
            request.body.get('grant_type') === 'password') {
            this.globalMessageService.add({
                key: 'httpHandlers.badRequestPleaseLoginAgain',
                params: {
                    errorMessage: this.getErrorMessage(response, 0),
                },
            }, GlobalMessageType.MSG_TYPE_ERROR);
            this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_CONFIRMATION);
        }
        else {
            response.error.errors.forEach((/**
             * @param {?} error
             * @param {?} index
             * @return {?}
             */
            function (error, index) {
                /** @type {?} */
                var errorMessage;
                if (error.type === 'PasswordMismatchError') {
                    // uses en translation error message instead of backend exception error
                    // @todo: this condition could be removed if backend gives better message
                    errorMessage = { key: 'httpHandlers.badRequestOldPasswordIncorrect' };
                }
                else if (error.subjectType === 'cart' &&
                    error.reason === 'notFound') {
                    errorMessage = { key: 'httpHandlers.cartNotFound' };
                }
                else {
                    // this is currently showing up in case we have a page not found. It should be a 404.
                    // see https://jira.hybris.com/browse/CMSX-8516
                    errorMessage = { raw: _this.getErrorMessage(response, index) };
                }
                _this.globalMessageService.add(errorMessage, GlobalMessageType.MSG_TYPE_ERROR);
            }));
        }
    };
    /**
     * @protected
     * @param {?} resp
     * @param {?} index
     * @return {?}
     */
    BadRequestHandler.prototype.getErrorMessage = /**
     * @protected
     * @param {?} resp
     * @param {?} index
     * @return {?}
     */
    function (resp, index) {
        /** @type {?} */
        var errMsg = resp.message;
        if (resp.error) {
            if (resp.error.errors && resp.error.errors instanceof Array) {
                errMsg = resp.error.errors[index].message;
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
    /** @nocollapse */ BadRequestHandler.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function BadRequestHandler_Factory() { return new BadRequestHandler(i0.ɵɵinject(i1.GlobalMessageService)); }, token: BadRequestHandler, providedIn: "root" });
    return BadRequestHandler;
}(HttpErrorHandler));
export { BadRequestHandler };
if (false) {
    /** @type {?} */
    BadRequestHandler.prototype.responseStatus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkLXJlcXVlc3QuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9odHRwLWludGVyY2VwdG9ycy9oYW5kbGVycy9iYWQtcmVxdWVzdC5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7OztJQUlsRCxjQUFjLEdBQUcsa0NBQWtDO0FBRXpEO0lBR3VDLDZDQUFnQjtJQUh2RDtRQUFBLHFFQTJEQztRQXZEQyxvQkFBYyxHQUFHLGtCQUFrQixDQUFDLFdBQVcsQ0FBQzs7S0F1RGpEOzs7Ozs7SUFyREMsdUNBQVc7Ozs7O0lBQVgsVUFBWSxPQUF5QixFQUFFLFFBQTJCO1FBQWxFLGlCQXVDQztRQXRDQyxJQUNFLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQztZQUNyQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxlQUFlO1lBQ3hDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLFVBQVUsRUFDN0M7WUFDQSxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUMzQjtnQkFDRSxHQUFHLEVBQUUseUNBQXlDO2dCQUM5QyxNQUFNLEVBQUU7b0JBQ04sWUFBWSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztpQkFDaEQ7YUFDRixFQUNELGlCQUFpQixDQUFDLGNBQWMsQ0FDakMsQ0FBQztZQUNGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLENBQUMsQ0FBQztTQUMzRTthQUFNO1lBQ0wsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTzs7Ozs7WUFBQyxVQUFDLEtBQWlCLEVBQUUsS0FBYTs7b0JBQ3pELFlBQTBCO2dCQUM5QixJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssdUJBQXVCLEVBQUU7b0JBQzFDLHVFQUF1RTtvQkFDdkUseUVBQXlFO29CQUN6RSxZQUFZLEdBQUcsRUFBRSxHQUFHLEVBQUUsNkNBQTZDLEVBQUUsQ0FBQztpQkFDdkU7cUJBQU0sSUFDTCxLQUFLLENBQUMsV0FBVyxLQUFLLE1BQU07b0JBQzVCLEtBQUssQ0FBQyxNQUFNLEtBQUssVUFBVSxFQUMzQjtvQkFDQSxZQUFZLEdBQUcsRUFBRSxHQUFHLEVBQUUsMkJBQTJCLEVBQUUsQ0FBQztpQkFDckQ7cUJBQU07b0JBQ0wscUZBQXFGO29CQUNyRiwrQ0FBK0M7b0JBQy9DLFlBQVksR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDO2lCQUMvRDtnQkFDRCxLQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUMzQixZQUFZLEVBQ1osaUJBQWlCLENBQUMsY0FBYyxDQUNqQyxDQUFDO1lBQ0osQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7Ozs7SUFFUywyQ0FBZTs7Ozs7O0lBQXpCLFVBQTBCLElBQXVCLEVBQUUsS0FBYTs7WUFDMUQsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPO1FBQ3pCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLFlBQVksS0FBSyxFQUFFO2dCQUMzRCxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDO2FBQzNDO2lCQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRTtnQkFDdkMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUM7YUFDdkM7U0FDRjtRQUVELE9BQU8sTUFBTSxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDOztnQkExREYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OzRCQVpEO0NBcUVDLEFBM0RELENBR3VDLGdCQUFnQixHQXdEdEQ7U0F4RFksaUJBQWlCOzs7SUFDNUIsMkNBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvZ2xvYmFsLW1lc3NhZ2UubW9kZWwnO1xuaW1wb3J0IHsgSHR0cFJlc3BvbnNlU3RhdHVzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Jlc3BvbnNlLXN0YXR1cy5tb2RlbCc7XG5pbXBvcnQgeyBIdHRwRXJyb3JIYW5kbGVyIH0gZnJvbSAnLi9odHRwLWVycm9yLmhhbmRsZXInO1xuaW1wb3J0IHsgRXJyb3JNb2RlbCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgVHJhbnNsYXRhYmxlIH0gZnJvbSAnLi4vLi4vLi4vaTE4bi90cmFuc2xhdGFibGUnO1xuXG5jb25zdCBPQVVUSF9FTkRQT0lOVCA9ICcvYXV0aG9yaXphdGlvbnNlcnZlci9vYXV0aC90b2tlbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBCYWRSZXF1ZXN0SGFuZGxlciBleHRlbmRzIEh0dHBFcnJvckhhbmRsZXIge1xuICByZXNwb25zZVN0YXR1cyA9IEh0dHBSZXNwb25zZVN0YXR1cy5CQURfUkVRVUVTVDtcblxuICBoYW5kbGVFcnJvcihyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCByZXNwb25zZTogSHR0cEVycm9yUmVzcG9uc2UpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICByZXNwb25zZS51cmwuaW5jbHVkZXMoT0FVVEhfRU5EUE9JTlQpICYmXG4gICAgICByZXNwb25zZS5lcnJvci5lcnJvciA9PT0gJ2ludmFsaWRfZ3JhbnQnICYmXG4gICAgICByZXF1ZXN0LmJvZHkuZ2V0KCdncmFudF90eXBlJykgPT09ICdwYXNzd29yZCdcbiAgICApIHtcbiAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiAnaHR0cEhhbmRsZXJzLmJhZFJlcXVlc3RQbGVhc2VMb2dpbkFnYWluJyxcbiAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5nZXRFcnJvck1lc3NhZ2UocmVzcG9uc2UsIDApLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SXG4gICAgICApO1xuICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5yZW1vdmUoR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzcG9uc2UuZXJyb3IuZXJyb3JzLmZvckVhY2goKGVycm9yOiBFcnJvck1vZGVsLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGxldCBlcnJvck1lc3NhZ2U6IFRyYW5zbGF0YWJsZTtcbiAgICAgICAgaWYgKGVycm9yLnR5cGUgPT09ICdQYXNzd29yZE1pc21hdGNoRXJyb3InKSB7XG4gICAgICAgICAgLy8gdXNlcyBlbiB0cmFuc2xhdGlvbiBlcnJvciBtZXNzYWdlIGluc3RlYWQgb2YgYmFja2VuZCBleGNlcHRpb24gZXJyb3JcbiAgICAgICAgICAvLyBAdG9kbzogdGhpcyBjb25kaXRpb24gY291bGQgYmUgcmVtb3ZlZCBpZiBiYWNrZW5kIGdpdmVzIGJldHRlciBtZXNzYWdlXG4gICAgICAgICAgZXJyb3JNZXNzYWdlID0geyBrZXk6ICdodHRwSGFuZGxlcnMuYmFkUmVxdWVzdE9sZFBhc3N3b3JkSW5jb3JyZWN0JyB9O1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIGVycm9yLnN1YmplY3RUeXBlID09PSAnY2FydCcgJiZcbiAgICAgICAgICBlcnJvci5yZWFzb24gPT09ICdub3RGb3VuZCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgZXJyb3JNZXNzYWdlID0geyBrZXk6ICdodHRwSGFuZGxlcnMuY2FydE5vdEZvdW5kJyB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHRoaXMgaXMgY3VycmVudGx5IHNob3dpbmcgdXAgaW4gY2FzZSB3ZSBoYXZlIGEgcGFnZSBub3QgZm91bmQuIEl0IHNob3VsZCBiZSBhIDQwNC5cbiAgICAgICAgICAvLyBzZWUgaHR0cHM6Ly9qaXJhLmh5YnJpcy5jb20vYnJvd3NlL0NNU1gtODUxNlxuICAgICAgICAgIGVycm9yTWVzc2FnZSA9IHsgcmF3OiB0aGlzLmdldEVycm9yTWVzc2FnZShyZXNwb25zZSwgaW5kZXgpIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0RXJyb3JNZXNzYWdlKHJlc3A6IEh0dHBFcnJvclJlc3BvbnNlLCBpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBsZXQgZXJyTXNnID0gcmVzcC5tZXNzYWdlO1xuICAgIGlmIChyZXNwLmVycm9yKSB7XG4gICAgICBpZiAocmVzcC5lcnJvci5lcnJvcnMgJiYgcmVzcC5lcnJvci5lcnJvcnMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBlcnJNc2cgPSByZXNwLmVycm9yLmVycm9yc1tpbmRleF0ubWVzc2FnZTtcbiAgICAgIH0gZWxzZSBpZiAocmVzcC5lcnJvci5lcnJvcl9kZXNjcmlwdGlvbikge1xuICAgICAgICBlcnJNc2cgPSByZXNwLmVycm9yLmVycm9yX2Rlc2NyaXB0aW9uO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJNc2cgfHwgJyc7XG4gIH1cbn1cbiJdfQ==