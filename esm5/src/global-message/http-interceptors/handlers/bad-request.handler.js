import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { GlobalMessageType } from '../../models/global-message.model';
import { HttpResponseStatus } from '../../models/response-status.model';
import { HttpErrorHandler } from './http-error.handler';
import * as i0 from "@angular/core";
import * as i1 from "../../facade/global-message.service";
var OAUTH_ENDPOINT = '/authorizationserver/oauth/token';
var BadRequestHandler = /** @class */ (function (_super) {
    __extends(BadRequestHandler, _super);
    function BadRequestHandler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.responseStatus = HttpResponseStatus.BAD_REQUEST;
        return _this;
    }
    BadRequestHandler.prototype.handleError = function (request, response) {
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
                response.error.errors.forEach(function (error) {
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
                });
            }
        }
    };
    BadRequestHandler.ɵprov = i0.ɵɵdefineInjectable({ factory: function BadRequestHandler_Factory() { return new BadRequestHandler(i0.ɵɵinject(i1.GlobalMessageService)); }, token: BadRequestHandler, providedIn: "root" });
    BadRequestHandler = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], BadRequestHandler);
    return BadRequestHandler;
}(HttpErrorHandler));
export { BadRequestHandler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkLXJlcXVlc3QuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9odHRwLWludGVyY2VwdG9ycy9oYW5kbGVycy9iYWQtcmVxdWVzdC5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFJeEQsSUFBTSxjQUFjLEdBQUcsa0NBQWtDLENBQUM7QUFLMUQ7SUFBdUMscUNBQWdCO0lBQXZEO1FBQUEscUVBMERDO1FBekRDLG9CQUFjLEdBQUcsa0JBQWtCLENBQUMsV0FBVyxDQUFDOztLQXlEakQ7SUF2REMsdUNBQVcsR0FBWCxVQUFZLE9BQXlCLEVBQUUsUUFBMkI7UUFBbEUsaUJBc0RDO1FBckRDLElBQ0UsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDO1lBQ3JDLFFBQVEsQ0FBQyxLQUFLO1lBQ2QsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssZUFBZTtZQUN4QyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxVQUFVLEVBQzdDO1lBQ0EsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FDM0I7Z0JBQ0UsR0FBRyxFQUFFLHlDQUF5QztnQkFDOUMsTUFBTSxFQUFFO29CQUNOLFlBQVksRUFDVixRQUFRLENBQUMsS0FBSyxDQUFDLGlCQUFpQixJQUFJLFFBQVEsQ0FBQyxPQUFPLElBQUksRUFBRTtpQkFDN0Q7YUFDRixFQUNELGlCQUFpQixDQUFDLGNBQWMsQ0FDakMsQ0FBQztZQUNGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLENBQUMsQ0FBQztTQUMzRTthQUFNO1lBQ0wsSUFDRSxRQUFRLENBQUMsS0FBSztnQkFDZCxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU07Z0JBQ3JCLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxZQUFZLEtBQUssRUFDdEM7Z0JBQ0EsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBaUI7b0JBQzlDLElBQUksWUFBMEIsQ0FBQztvQkFDL0IsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLHVCQUF1QixFQUFFO3dCQUMxQyx1RUFBdUU7d0JBQ3ZFLHlFQUF5RTt3QkFDekUsWUFBWSxHQUFHOzRCQUNiLEdBQUcsRUFBRSw2Q0FBNkM7eUJBQ25ELENBQUM7cUJBQ0g7eUJBQU0sSUFDTCxLQUFLLENBQUMsV0FBVyxLQUFLLE1BQU07d0JBQzVCLEtBQUssQ0FBQyxNQUFNLEtBQUssVUFBVSxFQUMzQjt3QkFDQSxZQUFZLEdBQUcsRUFBRSxHQUFHLEVBQUUsMkJBQTJCLEVBQUUsQ0FBQztxQkFDckQ7eUJBQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLGlCQUFpQixFQUFFO3dCQUMzQyxrRUFBa0U7d0JBQ2xFLFlBQVksR0FBRzs0QkFDYixHQUFHLEVBQUUsbUNBQWlDLEtBQUssQ0FBQyxNQUFNLFNBQUksS0FBSyxDQUFDLE9BQVM7eUJBQ3RFLENBQUM7cUJBQ0g7eUJBQU07d0JBQ0wscUZBQXFGO3dCQUNyRiwrQ0FBK0M7d0JBQy9DLFlBQVksR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsRUFBRSxDQUFDO3FCQUM3QztvQkFDRCxLQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUMzQixZQUFZLEVBQ1osaUJBQWlCLENBQUMsY0FBYyxDQUNqQyxDQUFDO2dCQUNKLENBQUMsQ0FBQyxDQUFDO2FBQ0o7U0FDRjtJQUNILENBQUM7O0lBekRVLGlCQUFpQjtRQUg3QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csaUJBQWlCLENBMEQ3Qjs0QkF2RUQ7Q0F1RUMsQUExREQsQ0FBdUMsZ0JBQWdCLEdBMER0RDtTQTFEWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlVHlwZSB9IGZyb20gJy4uLy4uL21vZGVscy9nbG9iYWwtbWVzc2FnZS5tb2RlbCc7XG5pbXBvcnQgeyBIdHRwUmVzcG9uc2VTdGF0dXMgfSBmcm9tICcuLi8uLi9tb2RlbHMvcmVzcG9uc2Utc3RhdHVzLm1vZGVsJztcbmltcG9ydCB7IEh0dHBFcnJvckhhbmRsZXIgfSBmcm9tICcuL2h0dHAtZXJyb3IuaGFuZGxlcic7XG5pbXBvcnQgeyBFcnJvck1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBUcmFuc2xhdGFibGUgfSBmcm9tICcuLi8uLi8uLi9pMThuL3RyYW5zbGF0YWJsZSc7XG5cbmNvbnN0IE9BVVRIX0VORFBPSU5UID0gJy9hdXRob3JpemF0aW9uc2VydmVyL29hdXRoL3Rva2VuJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEJhZFJlcXVlc3RIYW5kbGVyIGV4dGVuZHMgSHR0cEVycm9ySGFuZGxlciB7XG4gIHJlc3BvbnNlU3RhdHVzID0gSHR0cFJlc3BvbnNlU3RhdHVzLkJBRF9SRVFVRVNUO1xuXG4gIGhhbmRsZUVycm9yKHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIHJlc3BvbnNlOiBIdHRwRXJyb3JSZXNwb25zZSk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIHJlc3BvbnNlLnVybC5pbmNsdWRlcyhPQVVUSF9FTkRQT0lOVCkgJiZcbiAgICAgIHJlc3BvbnNlLmVycm9yICYmXG4gICAgICByZXNwb25zZS5lcnJvci5lcnJvciA9PT0gJ2ludmFsaWRfZ3JhbnQnICYmXG4gICAgICByZXF1ZXN0LmJvZHkuZ2V0KCdncmFudF90eXBlJykgPT09ICdwYXNzd29yZCdcbiAgICApIHtcbiAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiAnaHR0cEhhbmRsZXJzLmJhZFJlcXVlc3RQbGVhc2VMb2dpbkFnYWluJyxcbiAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTpcbiAgICAgICAgICAgICAgcmVzcG9uc2UuZXJyb3IuZXJyb3JfZGVzY3JpcHRpb24gfHwgcmVzcG9uc2UubWVzc2FnZSB8fCAnJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUlxuICAgICAgKTtcbiAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UucmVtb3ZlKEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChcbiAgICAgICAgcmVzcG9uc2UuZXJyb3IgJiZcbiAgICAgICAgcmVzcG9uc2UuZXJyb3IuZXJyb3JzICYmXG4gICAgICAgIHJlc3BvbnNlLmVycm9yLmVycm9ycyBpbnN0YW5jZW9mIEFycmF5XG4gICAgICApIHtcbiAgICAgICAgcmVzcG9uc2UuZXJyb3IuZXJyb3JzLmZvckVhY2goKGVycm9yOiBFcnJvck1vZGVsKSA9PiB7XG4gICAgICAgICAgbGV0IGVycm9yTWVzc2FnZTogVHJhbnNsYXRhYmxlO1xuICAgICAgICAgIGlmIChlcnJvci50eXBlID09PSAnUGFzc3dvcmRNaXNtYXRjaEVycm9yJykge1xuICAgICAgICAgICAgLy8gdXNlcyBlbiB0cmFuc2xhdGlvbiBlcnJvciBtZXNzYWdlIGluc3RlYWQgb2YgYmFja2VuZCBleGNlcHRpb24gZXJyb3JcbiAgICAgICAgICAgIC8vIEB0b2RvOiB0aGlzIGNvbmRpdGlvbiBjb3VsZCBiZSByZW1vdmVkIGlmIGJhY2tlbmQgZ2l2ZXMgYmV0dGVyIG1lc3NhZ2VcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9IHtcbiAgICAgICAgICAgICAga2V5OiAnaHR0cEhhbmRsZXJzLmJhZFJlcXVlc3RPbGRQYXNzd29yZEluY29ycmVjdCcsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBlcnJvci5zdWJqZWN0VHlwZSA9PT0gJ2NhcnQnICYmXG4gICAgICAgICAgICBlcnJvci5yZWFzb24gPT09ICdub3RGb3VuZCdcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9IHsga2V5OiAnaHR0cEhhbmRsZXJzLmNhcnROb3RGb3VuZCcgfTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yLnR5cGUgPT09ICdWYWxpZGF0aW9uRXJyb3InKSB7XG4gICAgICAgICAgICAvLyBidWlsZCB0cmFuc2xhdGlvbiBrZXkgaW4gY2FzZSBvZiBiYWNrZW5kIGZpZWxkIHZhbGlkYXRpb24gZXJyb3JcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9IHtcbiAgICAgICAgICAgICAga2V5OiBgaHR0cEhhbmRsZXJzLnZhbGlkYXRpb25FcnJvcnMuJHtlcnJvci5yZWFzb259LiR7ZXJyb3Iuc3ViamVjdH1gLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gdGhpcyBpcyBjdXJyZW50bHkgc2hvd2luZyB1cCBpbiBjYXNlIHdlIGhhdmUgYSBwYWdlIG5vdCBmb3VuZC4gSXQgc2hvdWxkIGJlIGEgNDA0LlxuICAgICAgICAgICAgLy8gc2VlIGh0dHBzOi8vamlyYS5oeWJyaXMuY29tL2Jyb3dzZS9DTVNYLTg1MTZcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9IHsgcmF3OiBlcnJvci5tZXNzYWdlIHx8ICcnIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==