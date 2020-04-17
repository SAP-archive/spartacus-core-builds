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
        this.handleVoucherOperationError(request, response);
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
    BadRequestHandler.prototype.handleVoucherOperationError = function (_request, response) {
        var _this = this;
        this.getErrors(response)
            .filter(function (e) {
            return e.message === 'coupon.invalid.code.provided' &&
                e.type === 'VoucherOperationError';
        })
            .forEach(function () {
            _this.globalMessageService.add({ key: 'httpHandlers.invalidCodeProvided' }, GlobalMessageType.MSG_TYPE_ERROR);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkLXJlcXVlc3QuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9odHRwLWludGVyY2VwdG9ycy9oYW5kbGVycy9iYWQtcmVxdWVzdC9iYWQtcmVxdWVzdC5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7QUFFekQsSUFBTSxjQUFjLEdBQUcsa0NBQWtDLENBQUM7QUFLMUQ7SUFBdUMscUNBQWdCO0lBQXZEO1FBQUEscUVBcUdDO1FBcEdDLG9CQUFjLEdBQUcsa0JBQWtCLENBQUMsV0FBVyxDQUFDOztLQW9HakQ7SUFsR0MsdUNBQVcsR0FBWCxVQUFZLE9BQXlCLEVBQUUsUUFBMkI7UUFDaEUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsMkJBQTJCLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFUyw2Q0FBaUIsR0FBM0IsVUFDRSxPQUF5QixFQUN6QixRQUEyQjs7UUFFM0IsSUFDRSxPQUFBLFFBQVEsQ0FBQyxHQUFHLDBDQUFFLFFBQVEsQ0FBQyxj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QUFBLFFBQVEsQ0FBQyxLQUFLLDBDQUFFLE1BQU0sS0FBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQzFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLElBQUksS0FBSyw4QkFBOEIsRUFBN0MsQ0FBNkMsQ0FDekQsQ0FBQztJQUNKLENBQUM7O0lBcEdVLGlCQUFpQjtRQUg3QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csaUJBQWlCLENBcUc3Qjs0QkFqSEQ7Q0FpSEMsQUFyR0QsQ0FBdUMsZ0JBQWdCLEdBcUd0RDtTQXJHWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFcnJvck1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlVHlwZSB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9nbG9iYWwtbWVzc2FnZS5tb2RlbCc7XG5pbXBvcnQgeyBIdHRwUmVzcG9uc2VTdGF0dXMgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvcmVzcG9uc2Utc3RhdHVzLm1vZGVsJztcbmltcG9ydCB7IEh0dHBFcnJvckhhbmRsZXIgfSBmcm9tICcuLi9odHRwLWVycm9yLmhhbmRsZXInO1xuXG5jb25zdCBPQVVUSF9FTkRQT0lOVCA9ICcvYXV0aG9yaXphdGlvbnNlcnZlci9vYXV0aC90b2tlbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBCYWRSZXF1ZXN0SGFuZGxlciBleHRlbmRzIEh0dHBFcnJvckhhbmRsZXIge1xuICByZXNwb25zZVN0YXR1cyA9IEh0dHBSZXNwb25zZVN0YXR1cy5CQURfUkVRVUVTVDtcblxuICBoYW5kbGVFcnJvcihyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCByZXNwb25zZTogSHR0cEVycm9yUmVzcG9uc2UpOiB2b2lkIHtcbiAgICB0aGlzLmhhbmRsZUJhZFBhc3N3b3JkKHJlcXVlc3QsIHJlc3BvbnNlKTtcbiAgICB0aGlzLmhhbmRsZUJhZExvZ2luUmVzcG9uc2UocmVxdWVzdCwgcmVzcG9uc2UpO1xuICAgIHRoaXMuaGFuZGxlQmFkQ2FydFJlcXVlc3QocmVxdWVzdCwgcmVzcG9uc2UpO1xuICAgIHRoaXMuaGFuZGxlVmFsaWRhdGlvbkVycm9yKHJlcXVlc3QsIHJlc3BvbnNlKTtcbiAgICB0aGlzLmhhbmRsZVZvdWNoZXJPcGVyYXRpb25FcnJvcihyZXF1ZXN0LCByZXNwb25zZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaGFuZGxlQmFkUGFzc3dvcmQoXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICByZXNwb25zZTogSHR0cEVycm9yUmVzcG9uc2VcbiAgKTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgcmVzcG9uc2UudXJsPy5pbmNsdWRlcyhPQVVUSF9FTkRQT0lOVCkgJiZcbiAgICAgIHJlc3BvbnNlLmVycm9yPy5lcnJvciA9PT0gJ2ludmFsaWRfZ3JhbnQnICYmXG4gICAgICByZXF1ZXN0LmJvZHk/LmdldCgnZ3JhbnRfdHlwZScpID09PSAncGFzc3dvcmQnXG4gICAgKSB7XG4gICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAge1xuICAgICAgICAgIGtleTogJ2h0dHBIYW5kbGVycy5iYWRSZXF1ZXN0UGxlYXNlTG9naW5BZ2FpbicsXG4gICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6XG4gICAgICAgICAgICAgIHJlc3BvbnNlLmVycm9yLmVycm9yX2Rlc2NyaXB0aW9uIHx8IHJlc3BvbnNlLm1lc3NhZ2UgfHwgJycsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICAgICk7XG4gICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLnJlbW92ZShHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT04pO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBoYW5kbGVCYWRMb2dpblJlc3BvbnNlKFxuICAgIF9yZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIHJlc3BvbnNlOiBIdHRwRXJyb3JSZXNwb25zZVxuICApIHtcbiAgICB0aGlzLmdldEVycm9ycyhyZXNwb25zZSlcbiAgICAgIC5maWx0ZXIoKGVycm9yKSA9PiBlcnJvci50eXBlID09PSAnUGFzc3dvcmRNaXNtYXRjaEVycm9yJylcbiAgICAgIC5mb3JFYWNoKCgpID0+IHtcbiAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgICAgeyBrZXk6ICdodHRwSGFuZGxlcnMuYmFkUmVxdWVzdE9sZFBhc3N3b3JkSW5jb3JyZWN0JyB9LFxuICAgICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBoYW5kbGVWYWxpZGF0aW9uRXJyb3IoXG4gICAgX3JlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgcmVzcG9uc2U6IEh0dHBFcnJvclJlc3BvbnNlXG4gICk6IHZvaWQge1xuICAgIHRoaXMuZ2V0RXJyb3JzKHJlc3BvbnNlKVxuICAgICAgLmZpbHRlcigoZSkgPT4gZS50eXBlID09PSAnVmFsaWRhdGlvbkVycm9yJylcbiAgICAgIC5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IGBodHRwSGFuZGxlcnMudmFsaWRhdGlvbkVycm9ycy4ke2Vycm9yLnJlYXNvbn0uJHtlcnJvci5zdWJqZWN0fWAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUlxuICAgICAgICApO1xuICAgICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaGFuZGxlQmFkQ2FydFJlcXVlc3QoXG4gICAgX3JlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgcmVzcG9uc2U6IEh0dHBFcnJvclJlc3BvbnNlXG4gICk6IHZvaWQge1xuICAgIHRoaXMuZ2V0RXJyb3JzKHJlc3BvbnNlKVxuICAgICAgLmZpbHRlcigoZSkgPT4gZS5zdWJqZWN0VHlwZSA9PT0gJ2NhcnQnICYmIGUucmVhc29uID09PSAnbm90Rm91bmQnKVxuICAgICAgLmZvckVhY2goKCkgPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgICB7IGtleTogJ2h0dHBIYW5kbGVycy5jYXJ0Tm90Rm91bmQnIH0sXG4gICAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGhhbmRsZVZvdWNoZXJPcGVyYXRpb25FcnJvcihcbiAgICBfcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICByZXNwb25zZTogSHR0cEVycm9yUmVzcG9uc2VcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5nZXRFcnJvcnMocmVzcG9uc2UpXG4gICAgICAuZmlsdGVyKFxuICAgICAgICAoZSkgPT5cbiAgICAgICAgICBlLm1lc3NhZ2UgPT09ICdjb3Vwb24uaW52YWxpZC5jb2RlLnByb3ZpZGVkJyAmJlxuICAgICAgICAgIGUudHlwZSA9PT0gJ1ZvdWNoZXJPcGVyYXRpb25FcnJvcidcbiAgICAgIClcbiAgICAgIC5mb3JFYWNoKCgpID0+IHtcbiAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgICAgeyBrZXk6ICdodHRwSGFuZGxlcnMuaW52YWxpZENvZGVQcm92aWRlZCcgfSxcbiAgICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUlxuICAgICAgICApO1xuICAgICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0RXJyb3JzKHJlc3BvbnNlOiBIdHRwRXJyb3JSZXNwb25zZSk6IEVycm9yTW9kZWxbXSB7XG4gICAgcmV0dXJuIChyZXNwb25zZS5lcnJvcj8uZXJyb3JzIHx8IFtdKS5maWx0ZXIoXG4gICAgICAoZXJyb3IpID0+IGVycm9yLnR5cGUgIT09ICdKYWxvT2JqZWN0Tm9Mb25nZXJWYWxpZEVycm9yJ1xuICAgICk7XG4gIH1cbn1cbiJdfQ==