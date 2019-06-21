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
            response.error &&
            response.error.error === 'invalid_grant' &&
            request.body.get('grant_type') === 'password') {
            this.globalMessageService.add({
                key: 'httpHandlers.badRequestPleaseLoginAgain',
                params: {
                    errorMessage: response.error.error_description || response.message || '',
                },
            }, GlobalMessageType.MSG_TYPE_ERROR);
            this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_CONFIRMATION);
        }
        else {
            if (response.error &&
                response.error.errors &&
                response.error.errors instanceof Array) {
                response.error.errors.forEach((/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    /** @type {?} */
                    var errorMessage;
                    if (error.type === 'PasswordMismatchError') {
                        // uses en translation error message instead of backend exception error
                        // @todo: this condition could be removed if backend gives better message
                        errorMessage = {
                            key: 'httpHandlers.badRequestOldPasswordIncorrect',
                        };
                    }
                    else if (error.subjectType === 'cart' &&
                        error.reason === 'notFound') {
                        errorMessage = { key: 'httpHandlers.cartNotFound' };
                    }
                    else if (error.type === 'ValidationError') {
                        // build translation key in case of backend field validation error
                        errorMessage = {
                            key: "httpHandlers.validationErrors." + error.reason + "." + error.subject,
                        };
                    }
                    else {
                        // this is currently showing up in case we have a page not found. It should be a 404.
                        // see https://jira.hybris.com/browse/CMSX-8516
                        errorMessage = { raw: error.message || '' };
                    }
                    _this.globalMessageService.add(errorMessage, GlobalMessageType.MSG_TYPE_ERROR);
                }));
            }
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkLXJlcXVlc3QuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9odHRwLWludGVyY2VwdG9ycy9oYW5kbGVycy9iYWQtcmVxdWVzdC5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7OztJQUlsRCxjQUFjLEdBQUcsa0NBQWtDO0FBRXpEO0lBR3VDLDZDQUFnQjtJQUh2RDtRQUFBLHFFQStEQztRQTNEQyxvQkFBYyxHQUFHLGtCQUFrQixDQUFDLFdBQVcsQ0FBQzs7S0EyRGpEOzs7Ozs7SUF6REMsdUNBQVc7Ozs7O0lBQVgsVUFBWSxPQUF5QixFQUFFLFFBQTJCO1FBQWxFLGlCQXdEQztRQXZEQyxJQUNFLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQztZQUNyQyxRQUFRLENBQUMsS0FBSztZQUNkLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLGVBQWU7WUFDeEMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssVUFBVSxFQUM3QztZQUNBLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQzNCO2dCQUNFLEdBQUcsRUFBRSx5Q0FBeUM7Z0JBQzlDLE1BQU0sRUFBRTtvQkFDTixZQUFZLEVBQ1YsUUFBUSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsSUFBSSxRQUFRLENBQUMsT0FBTyxJQUFJLEVBQUU7aUJBQzdEO2FBQ0YsRUFDRCxpQkFBaUIsQ0FBQyxjQUFjLENBQ2pDLENBQUM7WUFDRixJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLENBQUM7U0FDM0U7YUFBTTtZQUNMLElBQ0UsUUFBUSxDQUFDLEtBQUs7Z0JBQ2QsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNO2dCQUNyQixRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sWUFBWSxLQUFLLEVBQ3RDO2dCQUNBLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU87Ozs7Z0JBQUMsVUFBQyxLQUFpQjs7d0JBQzFDLFlBQTBCO29CQUM5QixJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssdUJBQXVCLEVBQUU7d0JBQzFDLHVFQUF1RTt3QkFDdkUseUVBQXlFO3dCQUN6RSxZQUFZLEdBQUc7NEJBQ2IsR0FBRyxFQUFFLDZDQUE2Qzt5QkFDbkQsQ0FBQztxQkFDSDt5QkFBTSxJQUNMLEtBQUssQ0FBQyxXQUFXLEtBQUssTUFBTTt3QkFDNUIsS0FBSyxDQUFDLE1BQU0sS0FBSyxVQUFVLEVBQzNCO3dCQUNBLFlBQVksR0FBRyxFQUFFLEdBQUcsRUFBRSwyQkFBMkIsRUFBRSxDQUFDO3FCQUNyRDt5QkFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssaUJBQWlCLEVBQUU7d0JBQzNDLGtFQUFrRTt3QkFDbEUsWUFBWSxHQUFHOzRCQUNiLEdBQUcsRUFBRSxtQ0FBaUMsS0FBSyxDQUFDLE1BQU0sU0FDaEQsS0FBSyxDQUFDLE9BQ047eUJBQ0gsQ0FBQztxQkFDSDt5QkFBTTt3QkFDTCxxRkFBcUY7d0JBQ3JGLCtDQUErQzt3QkFDL0MsWUFBWSxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxPQUFPLElBQUksRUFBRSxFQUFFLENBQUM7cUJBQzdDO29CQUNELEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQzNCLFlBQVksRUFDWixpQkFBaUIsQ0FBQyxjQUFjLENBQ2pDLENBQUM7Z0JBQ0osQ0FBQyxFQUFDLENBQUM7YUFDSjtTQUNGO0lBQ0gsQ0FBQzs7Z0JBOURGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs0QkFaRDtDQXlFQyxBQS9ERCxDQUd1QyxnQkFBZ0IsR0E0RHREO1NBNURZLGlCQUFpQjs7O0lBQzVCLDJDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2dsb2JhbC1tZXNzYWdlLm1vZGVsJztcbmltcG9ydCB7IEh0dHBSZXNwb25zZVN0YXR1cyB9IGZyb20gJy4uLy4uL21vZGVscy9yZXNwb25zZS1zdGF0dXMubW9kZWwnO1xuaW1wb3J0IHsgSHR0cEVycm9ySGFuZGxlciB9IGZyb20gJy4vaHR0cC1lcnJvci5oYW5kbGVyJztcbmltcG9ydCB7IEVycm9yTW9kZWwgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IFRyYW5zbGF0YWJsZSB9IGZyb20gJy4uLy4uLy4uL2kxOG4vdHJhbnNsYXRhYmxlJztcblxuY29uc3QgT0FVVEhfRU5EUE9JTlQgPSAnL2F1dGhvcml6YXRpb25zZXJ2ZXIvb2F1dGgvdG9rZW4nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQmFkUmVxdWVzdEhhbmRsZXIgZXh0ZW5kcyBIdHRwRXJyb3JIYW5kbGVyIHtcbiAgcmVzcG9uc2VTdGF0dXMgPSBIdHRwUmVzcG9uc2VTdGF0dXMuQkFEX1JFUVVFU1Q7XG5cbiAgaGFuZGxlRXJyb3IocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgcmVzcG9uc2U6IEh0dHBFcnJvclJlc3BvbnNlKTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgcmVzcG9uc2UudXJsLmluY2x1ZGVzKE9BVVRIX0VORFBPSU5UKSAmJlxuICAgICAgcmVzcG9uc2UuZXJyb3IgJiZcbiAgICAgIHJlc3BvbnNlLmVycm9yLmVycm9yID09PSAnaW52YWxpZF9ncmFudCcgJiZcbiAgICAgIHJlcXVlc3QuYm9keS5nZXQoJ2dyYW50X3R5cGUnKSA9PT0gJ3Bhc3N3b3JkJ1xuICAgICkge1xuICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICdodHRwSGFuZGxlcnMuYmFkUmVxdWVzdFBsZWFzZUxvZ2luQWdhaW4nLFxuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOlxuICAgICAgICAgICAgICByZXNwb25zZS5lcnJvci5lcnJvcl9kZXNjcmlwdGlvbiB8fCByZXNwb25zZS5tZXNzYWdlIHx8ICcnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SXG4gICAgICApO1xuICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5yZW1vdmUoR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKFxuICAgICAgICByZXNwb25zZS5lcnJvciAmJlxuICAgICAgICByZXNwb25zZS5lcnJvci5lcnJvcnMgJiZcbiAgICAgICAgcmVzcG9uc2UuZXJyb3IuZXJyb3JzIGluc3RhbmNlb2YgQXJyYXlcbiAgICAgICkge1xuICAgICAgICByZXNwb25zZS5lcnJvci5lcnJvcnMuZm9yRWFjaCgoZXJyb3I6IEVycm9yTW9kZWwpID0+IHtcbiAgICAgICAgICBsZXQgZXJyb3JNZXNzYWdlOiBUcmFuc2xhdGFibGU7XG4gICAgICAgICAgaWYgKGVycm9yLnR5cGUgPT09ICdQYXNzd29yZE1pc21hdGNoRXJyb3InKSB7XG4gICAgICAgICAgICAvLyB1c2VzIGVuIHRyYW5zbGF0aW9uIGVycm9yIG1lc3NhZ2UgaW5zdGVhZCBvZiBiYWNrZW5kIGV4Y2VwdGlvbiBlcnJvclxuICAgICAgICAgICAgLy8gQHRvZG86IHRoaXMgY29uZGl0aW9uIGNvdWxkIGJlIHJlbW92ZWQgaWYgYmFja2VuZCBnaXZlcyBiZXR0ZXIgbWVzc2FnZVxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0ge1xuICAgICAgICAgICAgICBrZXk6ICdodHRwSGFuZGxlcnMuYmFkUmVxdWVzdE9sZFBhc3N3b3JkSW5jb3JyZWN0JyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIGVycm9yLnN1YmplY3RUeXBlID09PSAnY2FydCcgJiZcbiAgICAgICAgICAgIGVycm9yLnJlYXNvbiA9PT0gJ25vdEZvdW5kJ1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0geyBrZXk6ICdodHRwSGFuZGxlcnMuY2FydE5vdEZvdW5kJyB9O1xuICAgICAgICAgIH0gZWxzZSBpZiAoZXJyb3IudHlwZSA9PT0gJ1ZhbGlkYXRpb25FcnJvcicpIHtcbiAgICAgICAgICAgIC8vIGJ1aWxkIHRyYW5zbGF0aW9uIGtleSBpbiBjYXNlIG9mIGJhY2tlbmQgZmllbGQgdmFsaWRhdGlvbiBlcnJvclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0ge1xuICAgICAgICAgICAgICBrZXk6IGBodHRwSGFuZGxlcnMudmFsaWRhdGlvbkVycm9ycy4ke2Vycm9yLnJlYXNvbn0uJHtcbiAgICAgICAgICAgICAgICBlcnJvci5zdWJqZWN0XG4gICAgICAgICAgICAgIH1gLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gdGhpcyBpcyBjdXJyZW50bHkgc2hvd2luZyB1cCBpbiBjYXNlIHdlIGhhdmUgYSBwYWdlIG5vdCBmb3VuZC4gSXQgc2hvdWxkIGJlIGEgNDA0LlxuICAgICAgICAgICAgLy8gc2VlIGh0dHBzOi8vamlyYS5oeWJyaXMuY29tL2Jyb3dzZS9DTVNYLTg1MTZcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9IHsgcmF3OiBlcnJvci5tZXNzYWdlIHx8ICcnIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==