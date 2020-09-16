import { Injectable } from '@angular/core';
import { isCartNotFoundError } from '../../../../cart/utils/utils';
import { GlobalMessageType } from '../../../models/global-message.model';
import { HttpResponseStatus } from '../../../models/response-status.model';
import { HttpErrorHandler } from '../http-error.handler';
import * as i0 from "@angular/core";
import * as i1 from "../../../facade/global-message.service";
const OAUTH_ENDPOINT = '/authorizationserver/oauth/token';
export class BadRequestHandler extends HttpErrorHandler {
    constructor() {
        super(...arguments);
        this.responseStatus = HttpResponseStatus.BAD_REQUEST;
    }
    handleError(request, response) {
        this.handleBadPassword(request, response);
        this.handleBadLoginResponse(request, response);
        this.handleBadCartRequest(request, response);
        this.handleValidationError(request, response);
        this.handleVoucherOperationError(request, response);
    }
    handleBadPassword(request, response) {
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
    }
    handleBadLoginResponse(_request, response) {
        this.getErrors(response)
            .filter((error) => error.type === 'PasswordMismatchError')
            .forEach(() => {
            this.globalMessageService.add({ key: 'httpHandlers.badRequestOldPasswordIncorrect' }, GlobalMessageType.MSG_TYPE_ERROR);
        });
    }
    handleValidationError(_request, response) {
        this.getErrors(response)
            .filter((e) => e.type === 'ValidationError')
            .forEach((error) => {
            this.globalMessageService.add({
                key: `httpHandlers.validationErrors.${error.reason}.${error.subject}`,
            }, GlobalMessageType.MSG_TYPE_ERROR);
        });
    }
    handleBadCartRequest(_request, response) {
        this.getErrors(response)
            .filter((e) => isCartNotFoundError(e))
            .forEach(() => {
            this.globalMessageService.add({ key: 'httpHandlers.cartNotFound' }, GlobalMessageType.MSG_TYPE_ERROR);
        });
    }
    handleVoucherOperationError(_request, response) {
        this.getErrors(response)
            .filter((e) => e.message === 'coupon.invalid.code.provided' &&
            e.type === 'VoucherOperationError')
            .forEach(() => {
            this.globalMessageService.add({ key: 'httpHandlers.invalidCodeProvided' }, GlobalMessageType.MSG_TYPE_ERROR);
        });
    }
    getErrors(response) {
        var _a;
        return (((_a = response.error) === null || _a === void 0 ? void 0 : _a.errors) || []).filter((error) => error.type !== 'JaloObjectNoLongerValidError');
    }
    getPriority() {
        return -10 /* LOW */;
    }
}
BadRequestHandler.ɵprov = i0.ɵɵdefineInjectable({ factory: function BadRequestHandler_Factory() { return new BadRequestHandler(i0.ɵɵinject(i1.GlobalMessageService)); }, token: BadRequestHandler, providedIn: "root" });
BadRequestHandler.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkLXJlcXVlc3QuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2dsb2JhbC1tZXNzYWdlL2h0dHAtaW50ZXJjZXB0b3JzL2hhbmRsZXJzL2JhZC1yZXF1ZXN0L2JhZC1yZXF1ZXN0LmhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUduRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBRXpELE1BQU0sY0FBYyxHQUFHLGtDQUFrQyxDQUFDO0FBSzFELE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxnQkFBZ0I7SUFIdkQ7O1FBSUUsbUJBQWMsR0FBRyxrQkFBa0IsQ0FBQyxXQUFXLENBQUM7S0F3R2pEO0lBdEdDLFdBQVcsQ0FBQyxPQUF5QixFQUFFLFFBQTJCO1FBQ2hFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRVMsaUJBQWlCLENBQ3pCLE9BQXlCLEVBQ3pCLFFB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QUFFLENBQUMsQ0FBQyxNQUFNLENBQzFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLDhCQUE4QixDQUN6RCxDQUFDO0lBQ0osQ0FBQztJQUVELFdBQVc7UUFDVCxxQkFBb0I7SUFDdEIsQ0FBQzs7OztZQTNHRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc0NhcnROb3RGb3VuZEVycm9yIH0gZnJvbSAnLi4vLi4vLi4vLi4vY2FydC91dGlscy91dGlscyc7XG5pbXBvcnQgeyBFcnJvck1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBQcmlvcml0eSB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvYXBwbGljYWJsZSc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlVHlwZSB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9nbG9iYWwtbWVzc2FnZS5tb2RlbCc7XG5pbXBvcnQgeyBIdHRwUmVzcG9uc2VTdGF0dXMgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvcmVzcG9uc2Utc3RhdHVzLm1vZGVsJztcbmltcG9ydCB7IEh0dHBFcnJvckhhbmRsZXIgfSBmcm9tICcuLi9odHRwLWVycm9yLmhhbmRsZXInO1xuXG5jb25zdCBPQVVUSF9FTkRQT0lOVCA9ICcvYXV0aG9yaXphdGlvbnNlcnZlci9vYXV0aC90b2tlbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBCYWRSZXF1ZXN0SGFuZGxlciBleHRlbmRzIEh0dHBFcnJvckhhbmRsZXIge1xuICByZXNwb25zZVN0YXR1cyA9IEh0dHBSZXNwb25zZVN0YXR1cy5CQURfUkVRVUVTVDtcblxuICBoYW5kbGVFcnJvcihyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCByZXNwb25zZTogSHR0cEVycm9yUmVzcG9uc2UpOiB2b2lkIHtcbiAgICB0aGlzLmhhbmRsZUJhZFBhc3N3b3JkKHJlcXVlc3QsIHJlc3BvbnNlKTtcbiAgICB0aGlzLmhhbmRsZUJhZExvZ2luUmVzcG9uc2UocmVxdWVzdCwgcmVzcG9uc2UpO1xuICAgIHRoaXMuaGFuZGxlQmFkQ2FydFJlcXVlc3QocmVxdWVzdCwgcmVzcG9uc2UpO1xuICAgIHRoaXMuaGFuZGxlVmFsaWRhdGlvbkVycm9yKHJlcXVlc3QsIHJlc3BvbnNlKTtcbiAgICB0aGlzLmhhbmRsZVZvdWNoZXJPcGVyYXRpb25FcnJvcihyZXF1ZXN0LCByZXNwb25zZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaGFuZGxlQmFkUGFzc3dvcmQoXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICByZXNwb25zZTogSHR0cEVycm9yUmVzcG9uc2VcbiAgKTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgcmVzcG9uc2UudXJsPy5pbmNsdWRlcyhPQVVUSF9FTkRQT0lOVCkgJiZcbiAgICAgIHJlc3BvbnNlLmVycm9yPy5lcnJvciA9PT0gJ2ludmFsaWRfZ3JhbnQnICYmXG4gICAgICByZXF1ZXN0LmJvZHk/LmdldCgnZ3JhbnRfdHlwZScpID09PSAncGFzc3dvcmQnXG4gICAgKSB7XG4gICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAge1xuICAgICAgICAgIGtleTogJ2h0dHBIYW5kbGVycy5iYWRSZXF1ZXN0UGxlYXNlTG9naW5BZ2FpbicsXG4gICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6XG4gICAgICAgICAgICAgIHJlc3BvbnNlLmVycm9yLmVycm9yX2Rlc2NyaXB0aW9uIHx8IHJlc3BvbnNlLm1lc3NhZ2UgfHwgJycsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICAgICk7XG4gICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLnJlbW92ZShHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT04pO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBoYW5kbGVCYWRMb2dpblJlc3BvbnNlKFxuICAgIF9yZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIHJlc3BvbnNlOiBIdHRwRXJyb3JSZXNwb25zZVxuICApIHtcbiAgICB0aGlzLmdldEVycm9ycyhyZXNwb25zZSlcbiAgICAgIC5maWx0ZXIoKGVycm9yKSA9PiBlcnJvci50eXBlID09PSAnUGFzc3dvcmRNaXNtYXRjaEVycm9yJylcbiAgICAgIC5mb3JFYWNoKCgpID0+IHtcbiAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgICAgeyBrZXk6ICdodHRwSGFuZGxlcnMuYmFkUmVxdWVzdE9sZFBhc3N3b3JkSW5jb3JyZWN0JyB9LFxuICAgICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBoYW5kbGVWYWxpZGF0aW9uRXJyb3IoXG4gICAgX3JlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgcmVzcG9uc2U6IEh0dHBFcnJvclJlc3BvbnNlXG4gICk6IHZvaWQge1xuICAgIHRoaXMuZ2V0RXJyb3JzKHJlc3BvbnNlKVxuICAgICAgLmZpbHRlcigoZSkgPT4gZS50eXBlID09PSAnVmFsaWRhdGlvbkVycm9yJylcbiAgICAgIC5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IGBodHRwSGFuZGxlcnMudmFsaWRhdGlvbkVycm9ycy4ke2Vycm9yLnJlYXNvbn0uJHtlcnJvci5zdWJqZWN0fWAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUlxuICAgICAgICApO1xuICAgICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaGFuZGxlQmFkQ2FydFJlcXVlc3QoXG4gICAgX3JlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgcmVzcG9uc2U6IEh0dHBFcnJvclJlc3BvbnNlXG4gICk6IHZvaWQge1xuICAgIHRoaXMuZ2V0RXJyb3JzKHJlc3BvbnNlKVxuICAgICAgLmZpbHRlcigoZSkgPT4gaXNDYXJ0Tm90Rm91bmRFcnJvcihlKSlcbiAgICAgIC5mb3JFYWNoKCgpID0+IHtcbiAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgICAgeyBrZXk6ICdodHRwSGFuZGxlcnMuY2FydE5vdEZvdW5kJyB9LFxuICAgICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBoYW5kbGVWb3VjaGVyT3BlcmF0aW9uRXJyb3IoXG4gICAgX3JlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgcmVzcG9uc2U6IEh0dHBFcnJvclJlc3BvbnNlXG4gICk6IHZvaWQge1xuICAgIHRoaXMuZ2V0RXJyb3JzKHJlc3BvbnNlKVxuICAgICAgLmZpbHRlcihcbiAgICAgICAgKGUpID0+XG4gICAgICAgICAgZS5tZXNzYWdlID09PSAnY291cG9uLmludmFsaWQuY29kZS5wcm92aWRlZCcgJiZcbiAgICAgICAgICBlLnR5cGUgPT09ICdWb3VjaGVyT3BlcmF0aW9uRXJyb3InXG4gICAgICApXG4gICAgICAuZm9yRWFjaCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICAgIHsga2V5OiAnaHR0cEhhbmRsZXJzLmludmFsaWRDb2RlUHJvdmlkZWQnIH0sXG4gICAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldEVycm9ycyhyZXNwb25zZTogSHR0cEVycm9yUmVzcG9uc2UpOiBFcnJvck1vZGVsW10ge1xuICAgIHJldHVybiAocmVzcG9uc2UuZXJyb3I/LmVycm9ycyB8fCBbXSkuZmlsdGVyKFxuICAgICAgKGVycm9yKSA9PiBlcnJvci50eXBlICE9PSAnSmFsb09iamVjdE5vTG9uZ2VyVmFsaWRFcnJvcidcbiAgICApO1xuICB9XG5cbiAgZ2V0UHJpb3JpdHkoKTogUHJpb3JpdHkge1xuICAgIHJldHVybiBQcmlvcml0eS5MT1c7XG4gIH1cbn1cbiJdfQ==