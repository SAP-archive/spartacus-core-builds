import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { GlobalMessageType } from '../../../models/global-message.model';
import { HttpResponseStatus } from '../../../models/response-status.model';
import { HttpErrorHandler } from '../http-error.handler';
import * as i0 from "@angular/core";
import * as i1 from "../../../facade/global-message.service";
var OAUTH_ENDPOINT = '/authorizationserver/oauth/token';
var BadRequestHandler = /** @class */ (function (_super) {
    __extends(BadRequestHandler, _super);
    function BadRequestHandler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.responseStatus = HttpResponseStatus.BAD_REQUEST;
        return _this;
    }
    BadRequestHandler.prototype.handleError = function (request, response) {
        this.handleBadPassword(request, response);
        this.handleBadLoginResponse(request, response);
        this.handleBadCartRequest(request, response);
        this.handleValidationError(request, response);
    };
    BadRequestHandler.prototype.handleBadPassword = function (request, response) {
        var _a, _b, _c;
        if (((_a = response.url) === null || _a === void 0 ? void 0 : _a.includes(OAUTH_ENDPOINT)) &&
            ((_b = response.error) === null || _b === void 0 ? void 0 : _b.error) === 'invalid_grant' &&
            ((_c = request.body) === null || _c === void 0 ? void 0 : _c.get('grant_type')) === 'password') {
            this.globalMessageService.add({
                key: 'httpHandlers.badRequestPleaseLoginAgain',
                params: {
                    errorMessage: response.error.error_description || response.message || '',
                },
            }, GlobalMessageType.MSG_TYPE_ERROR);
            this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_CONFIRMATION);
        }
    };
    BadRequestHandler.prototype.handleBadLoginResponse = function (_request, response) {
        var _this = this;
        this.getErrors(response)
            .filter(function (error) { return error.type === 'PasswordMismatchError'; })
            .forEach(function () {
            _this.globalMessageService.add({ key: 'httpHandlers.badRequestOldPasswordIncorrect' }, GlobalMessageType.MSG_TYPE_ERROR);
        });
    };
    BadRequestHandler.prototype.handleValidationError = function (_request, response) {
        var _this = this;
        this.getErrors(response)
            .filter(function (e) { return e.type === 'ValidationError'; })
            .forEach(function (error) {
            _this.globalMessageService.add({
                key: "httpHandlers.validationErrors." + error.reason + "." + error.subject,
            }, GlobalMessageType.MSG_TYPE_ERROR);
        });
    };
    BadRequestHandler.prototype.handleBadCartRequest = function (_request, response) {
        var _this = this;
        this.getErrors(response)
            .filter(function (e) { return e.subjectType === 'cart' && e.reason === 'notFound'; })
            .forEach(function () {
            _this.globalMessageService.add({ key: 'httpHandlers.cartNotFound' }, GlobalMessageType.MSG_TYPE_ERROR);
        });
    };
    BadRequestHandler.prototype.getErrors = function (response) {
        var _a;
        return (((_a = response.error) === null || _a === void 0 ? void 0 : _a.errors) || []).filter(function (error) { return error.type !== 'JaloObjectNoLongerValidError'; });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkLXJlcXVlc3QuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9odHRwLWludGVyY2VwdG9ycy9oYW5kbGVycy9iYWQtcmVxdWVzdC9iYWQtcmVxdWVzdC5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7QUFFekQsSUFBTSxjQUFjLEdBQUcsa0NBQWtDLENBQUM7QUFLMUQ7SUFBdUMscUNBQWdCO0lBQXZEO1FBQUEscUVBa0ZDO1FBakZDLG9CQUFjLEdBQUcsa0JBQWtCLENBQUMsV0FBVyxDQUFDOztLQWlGakQ7SUEvRUMsdUNBQVcsR0FBWCxVQUFZLE9BQXlCLEVBQUUsUUFBMkI7UUFDaEUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRVMsNkNBQWlCLEdBQTNCLFVBQ0UsT0FBeUIsRUFDekIsUUFBMkI7O1FBRTNCLElBQ0UsT0FBQSxRQUFRLENBQUMsR0FBRywwQ0FBRSxRQUFRLENBQUMsY0FBYztZQUNyQyxPQUFBLFFBQVEsQ0FBQyxLQUFLLDBDQUFFLEtBQUssTUFBSyxlQUFlO1lBQ3pDLE9BQUEsT0FBTyxDQUFDLElBQUksMENBQUUsR0FBRyxDQUFDLFlBQVksT0FBTSxVQUFVLEVBQzlDO1lBQ0EsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FDM0I7Z0JBQ0UsR0FBRyxFQUFFLHlDQUF5QztnQkFDOUMsTUFBTSxFQUFFO29CQUNOLFlBQVksRUFDVixRQUFRLENBQUMsS0FBSyxDQUFDLGlCQUFpQixJQUFJLFFBQVEsQ0FBQyxPQUFPLElBQUksRUFBRTtpQkFDN0Q7YUFDRixFQUNELGlCQUFpQixDQUFDLGNBQWMsQ0FDakMsQ0FBQztZQUNGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLENBQUMsQ0FBQztTQUMzRTtJQUNILENBQUM7SUFFUyxrREFBc0IsR0FBaEMsVUFDRSxRQUEwQixFQUMxQixRQUEyQjtRQUY3QixpQkFZQztRQVJDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO2FBQ3JCLE1BQU0sQ0FBQyxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUssQ0FBQyxJQUFJLEtBQUssdUJBQXVCLEVBQXRDLENBQXNDLENBQUM7YUFDekQsT0FBTyxDQUFDO1lBQ1AsS0FBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FDM0IsRUFBRSxHQUFHLEVBQUUsNkNBQTZDLEVBQUUsRUFDdEQsaUJBQWlCLENBQUMsY0FBYyxDQUNqQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRVMsaURBQXFCLEdBQS9CLFVBQ0UsUUFBMEIsRUFDMUIsUUFBMkI7UUFGN0IsaUJBY0M7UUFWQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQzthQUNyQixNQUFNLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsSUFBSSxLQUFLLGlCQUFpQixFQUE1QixDQUE0QixDQUFDO2FBQzNDLE9BQU8sQ0FBQyxVQUFDLEtBQUs7WUFDYixLQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUMzQjtnQkFDRSxHQUFHLEVBQUUsbUNBQWlDLEtBQUssQ0FBQyxNQUFNLFNBQUksS0FBSyxDQUFDLE9BQVM7YUFDdEUsRUFDRCxpQkFBaUIsQ0FBQyxjQUFjLENBQ2pDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFUyxnREFBb0IsR0FBOUIsVUFDRSxRQUEwQixFQUMxQixRQUEyQjtRQUY3QixpQkFZQztRQVJDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO2FBQ3JCLE1BQU0sQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxXQUFXLEtBQUssTUFBTSxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssVUFBVSxFQUFuRCxDQUFtRCxDQUFDO2FBQ2xFLE9BQU8sQ0FBQztZQUNQLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQzNCLEVBQUUsR0FBRyxFQUFFLDJCQUEyQixFQUFFLEVBQ3BDLGlCQUFpQixDQUFDLGNBQWMsQ0FDakMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVTLHFDQUFTLEdBQW5CLFVBQW9CLFFBQTJCOztRQUM3QyxPQUFPLENBQUMsT0FBQSxRQUFRLENBQUMsS0FBSywwQ0FBRSxNQUFNLEtBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUMxQyxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUssQ0FBQyxJQUFJLEtBQUssOEJBQThCLEVBQTdDLENBQTZDLENBQ3pELENBQUM7SUFDSixDQUFDOztJQWpGVSxpQkFBaUI7UUFIN0IsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGlCQUFpQixDQWtGN0I7NEJBOUZEO0NBOEZDLEFBbEZELENBQXVDLGdCQUFnQixHQWtGdEQ7U0FsRlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXJyb3JNb2RlbCB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvZ2xvYmFsLW1lc3NhZ2UubW9kZWwnO1xuaW1wb3J0IHsgSHR0cFJlc3BvbnNlU3RhdHVzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3Jlc3BvbnNlLXN0YXR1cy5tb2RlbCc7XG5pbXBvcnQgeyBIdHRwRXJyb3JIYW5kbGVyIH0gZnJvbSAnLi4vaHR0cC1lcnJvci5oYW5kbGVyJztcblxuY29uc3QgT0FVVEhfRU5EUE9JTlQgPSAnL2F1dGhvcml6YXRpb25zZXJ2ZXIvb2F1dGgvdG9rZW4nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQmFkUmVxdWVzdEhhbmRsZXIgZXh0ZW5kcyBIdHRwRXJyb3JIYW5kbGVyIHtcbiAgcmVzcG9uc2VTdGF0dXMgPSBIdHRwUmVzcG9uc2VTdGF0dXMuQkFEX1JFUVVFU1Q7XG5cbiAgaGFuZGxlRXJyb3IocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgcmVzcG9uc2U6IEh0dHBFcnJvclJlc3BvbnNlKTogdm9pZCB7XG4gICAgdGhpcy5oYW5kbGVCYWRQYXNzd29yZChyZXF1ZXN0LCByZXNwb25zZSk7XG4gICAgdGhpcy5oYW5kbGVCYWRMb2dpblJlc3BvbnNlKHJlcXVlc3QsIHJlc3BvbnNlKTtcbiAgICB0aGlzLmhhbmRsZUJhZENhcnRSZXF1ZXN0KHJlcXVlc3QsIHJlc3BvbnNlKTtcbiAgICB0aGlzLmhhbmRsZVZhbGlkYXRpb25FcnJvcihyZXF1ZXN0LCByZXNwb25zZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaGFuZGxlQmFkUGFzc3dvcmQoXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICByZXNwb25zZTogSHR0cEVycm9yUmVzcG9uc2VcbiAgKTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgcmVzcG9uc2UudXJsPy5pbmNsdWRlcyhPQVVUSF9FTkRQT0lOVCkgJiZcbiAgICAgIHJlc3BvbnNlLmVycm9yPy5lcnJvciA9PT0gJ2ludmFsaWRfZ3JhbnQnICYmXG4gICAgICByZXF1ZXN0LmJvZHk/LmdldCgnZ3JhbnRfdHlwZScpID09PSAncGFzc3dvcmQnXG4gICAgKSB7XG4gICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAge1xuICAgICAgICAgIGtleTogJ2h0dHBIYW5kbGVycy5iYWRSZXF1ZXN0UGxlYXNlTG9naW5BZ2FpbicsXG4gICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6XG4gICAgICAgICAgICAgIHJlc3BvbnNlLmVycm9yLmVycm9yX2Rlc2NyaXB0aW9uIHx8IHJlc3BvbnNlLm1lc3NhZ2UgfHwgJycsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICAgICk7XG4gICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLnJlbW92ZShHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT04pO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBoYW5kbGVCYWRMb2dpblJlc3BvbnNlKFxuICAgIF9yZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIHJlc3BvbnNlOiBIdHRwRXJyb3JSZXNwb25zZVxuICApIHtcbiAgICB0aGlzLmdldEVycm9ycyhyZXNwb25zZSlcbiAgICAgIC5maWx0ZXIoKGVycm9yKSA9PiBlcnJvci50eXBlID09PSAnUGFzc3dvcmRNaXNtYXRjaEVycm9yJylcbiAgICAgIC5mb3JFYWNoKCgpID0+IHtcbiAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgICAgeyBrZXk6ICdodHRwSGFuZGxlcnMuYmFkUmVxdWVzdE9sZFBhc3N3b3JkSW5jb3JyZWN0JyB9LFxuICAgICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBoYW5kbGVWYWxpZGF0aW9uRXJyb3IoXG4gICAgX3JlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgcmVzcG9uc2U6IEh0dHBFcnJvclJlc3BvbnNlXG4gICk6IHZvaWQge1xuICAgIHRoaXMuZ2V0RXJyb3JzKHJlc3BvbnNlKVxuICAgICAgLmZpbHRlcigoZSkgPT4gZS50eXBlID09PSAnVmFsaWRhdGlvbkVycm9yJylcbiAgICAgIC5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IGBodHRwSGFuZGxlcnMudmFsaWRhdGlvbkVycm9ycy4ke2Vycm9yLnJlYXNvbn0uJHtlcnJvci5zdWJqZWN0fWAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUlxuICAgICAgICApO1xuICAgICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaGFuZGxlQmFkQ2FydFJlcXVlc3QoXG4gICAgX3JlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgcmVzcG9uc2U6IEh0dHBFcnJvclJlc3BvbnNlXG4gICk6IHZvaWQge1xuICAgIHRoaXMuZ2V0RXJyb3JzKHJlc3BvbnNlKVxuICAgICAgLmZpbHRlcigoZSkgPT4gZS5zdWJqZWN0VHlwZSA9PT0gJ2NhcnQnICYmIGUucmVhc29uID09PSAnbm90Rm91bmQnKVxuICAgICAgLmZvckVhY2goKCkgPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgICB7IGtleTogJ2h0dHBIYW5kbGVycy5jYXJ0Tm90Rm91bmQnIH0sXG4gICAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldEVycm9ycyhyZXNwb25zZTogSHR0cEVycm9yUmVzcG9uc2UpOiBFcnJvck1vZGVsW10ge1xuICAgIHJldHVybiAocmVzcG9uc2UuZXJyb3I/LmVycm9ycyB8fCBbXSkuZmlsdGVyKFxuICAgICAgKGVycm9yKSA9PiBlcnJvci50eXBlICE9PSAnSmFsb09iamVjdE5vTG9uZ2VyVmFsaWRFcnJvcidcbiAgICApO1xuICB9XG59XG4iXX0=