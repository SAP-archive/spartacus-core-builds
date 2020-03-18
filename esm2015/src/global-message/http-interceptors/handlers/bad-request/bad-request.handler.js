import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { GlobalMessageType } from '../../../models/global-message.model';
import { HttpResponseStatus } from '../../../models/response-status.model';
import { HttpErrorHandler } from '../http-error.handler';
import * as i0 from "@angular/core";
import * as i1 from "../../../facade/global-message.service";
const OAUTH_ENDPOINT = '/authorizationserver/oauth/token';
let BadRequestHandler = class BadRequestHandler extends HttpErrorHandler {
    constructor() {
        super(...arguments);
        this.responseStatus = HttpResponseStatus.BAD_REQUEST;
    }
    handleError(request, response) {
        this.handleBadPassword(request, response);
        this.handleBadLoginResponse(request, response);
        this.handleBadCartRequest(request, response);
        this.handleValidationError(request, response);
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
            .filter(error => error.type === 'PasswordMismatchError')
            .forEach(() => {
            this.globalMessageService.add({ key: 'httpHandlers.badRequestOldPasswordIncorrect' }, GlobalMessageType.MSG_TYPE_ERROR);
        });
    }
    handleValidationError(_request, response) {
        this.getErrors(response)
            .filter(e => e.type === 'ValidationError')
            .forEach(error => {
            this.globalMessageService.add({
                key: `httpHandlers.validationErrors.${error.reason}.${error.subject}`,
            }, GlobalMessageType.MSG_TYPE_ERROR);
        });
    }
    handleBadCartRequest(_request, response) {
        this.getErrors(response)
            .filter(e => e.subjectType === 'cart' && e.reason === 'notFound')
            .forEach(() => {
            this.globalMessageService.add({ key: 'httpHandlers.cartNotFound' }, GlobalMessageType.MSG_TYPE_ERROR);
        });
    }
    getErrors(response) {
        var _a;
        return (((_a = response.error) === null || _a === void 0 ? void 0 : _a.errors) || []).filter(error => error.type !== 'JaloObjectNoLongerValidError');
    }
};
BadRequestHandler.ɵprov = i0.ɵɵdefineInjectable({ factory: function BadRequestHandler_Factory() { return new BadRequestHandler(i0.ɵɵinject(i1.GlobalMessageService)); }, token: BadRequestHandler, providedIn: "root" });
BadRequestHandler = __decorate([
    Injectable({
        providedIn: 'root',
    })
], BadRequestHandler);
export { BadRequestHandler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkLXJlcXVlc3QuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9odHRwLWludGVyY2VwdG9ycy9oYW5kbGVycy9iYWQtcmVxdWVzdC9iYWQtcmVxdWVzdC5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7QUFFekQsTUFBTSxjQUFjLEdBQUcsa0NBQWtDLENBQUM7QUFLMUQsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBa0IsU0FBUSxnQkFBZ0I7SUFBdkQ7O1FBQ0UsbUJBQWMsR0FBRyxrQkFBa0IsQ0FBQyxXQUFXLENBQUM7S0FpRmpEO0lBL0VDLFdBQVcsQ0FBQyxPQUF5QixFQUFFLFFBQTJCO1FBQ2hFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVTLGlCQUFpQixDQUN6QixPQUF5QixFQUN6QixRQUEyQjs7UUFFM0IsSUFDRSxPQUFBLFFBQVEsQ0FBQyxHQUFHLDBDQUFFLFFBQVEsQ0FBQyxjQUFjO1lBQ3JDLE9BQUEsUUFBUSxDQUFDLEtBQUssMENBQUUsS0FBSyxNQUFLLGVBQWU7WUFDekMsT0FBQSxPQUFPLENBQUMsSUFBSSwwQ0FBRSxHQUFHLENBQUMsWUFBWSxPQUFNLFVBQVUsRUFDOUM7WUFDQSxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUMzQjtnQkFDRSxHQUFHLEVBQUUseUNBQXlDO2dCQUM5QyxNQUFNLEVBQUU7b0JBQ04sWUFBWSxFQUNWLFFBQVEsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLElBQUksUUFBUSxDQUFDLE9BQU8sSUFBSSxFQUFFO2lCQUM3RDthQUNGLEVBQ0QsaUJBQWlCLENBQUMsY0FBYyxDQUNqQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQzNFO0lBQ0gsQ0FBQztJQUVTLHNCQUFzQixDQUM5QixRQUEwQixFQUMxQixRQUEyQjtRQUUzQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQzthQUNyQixNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLHVCQUF1QixDQUFDO2FBQ3ZELE9BQU8sQ0FBQyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUMzQixFQUFFLEdBQUcsRUFBRSw2Q0FBNkMsRUFBRSxFQUN0RCxpQkFBaUIsQ0FBQyxjQUFjLENBQ2pDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFUyxxQkFBcUIsQ0FDN0IsUUFBMEIsRUFDMUIsUUFBMkI7UUFFM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7YUFDckIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxpQkFBaUIsQ0FBQzthQUN6QyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDZixJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUMzQjtnQkFDRSxHQUFHLEVBQUUsaUNBQWlDLEtBQUssQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRTthQUN0RSxFQUNELGlCQUFpQixDQUFDLGNBQWMsQ0FDakMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVTLG9CQUFvQixDQUM1QixRQUEwQixFQUMxQixRQUEyQjtRQUUzQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQzthQUNyQixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxLQUFLLE1BQU0sSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLFVBQVUsQ0FBQzthQUNoRSxPQUFPLENBQUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FDM0IsRUFBRSxHQUFHLEVBQUUsMkJBQTJCLEVBQUUsRUFDcEMsaUJBQWlCLENBQUMsY0FBYyxDQUNqQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRVMsU0FBUyxDQUFDLFFBQTJCOztRQUM3QyxPQUFPLENBQUMsT0FBQSxRQUFRLENBQUMsS0FBSywwQ0FBRSxNQUFNLEtBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUMxQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssOEJBQThCLENBQ3ZELENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTs7QUFsRlksaUJBQWlCO0lBSDdCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxpQkFBaUIsQ0FrRjdCO1NBbEZZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVycm9yTW9kZWwgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2dsb2JhbC1tZXNzYWdlLm1vZGVsJztcbmltcG9ydCB7IEh0dHBSZXNwb25zZVN0YXR1cyB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9yZXNwb25zZS1zdGF0dXMubW9kZWwnO1xuaW1wb3J0IHsgSHR0cEVycm9ySGFuZGxlciB9IGZyb20gJy4uL2h0dHAtZXJyb3IuaGFuZGxlcic7XG5cbmNvbnN0IE9BVVRIX0VORFBPSU5UID0gJy9hdXRob3JpemF0aW9uc2VydmVyL29hdXRoL3Rva2VuJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEJhZFJlcXVlc3RIYW5kbGVyIGV4dGVuZHMgSHR0cEVycm9ySGFuZGxlciB7XG4gIHJlc3BvbnNlU3RhdHVzID0gSHR0cFJlc3BvbnNlU3RhdHVzLkJBRF9SRVFVRVNUO1xuXG4gIGhhbmRsZUVycm9yKHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIHJlc3BvbnNlOiBIdHRwRXJyb3JSZXNwb25zZSk6IHZvaWQge1xuICAgIHRoaXMuaGFuZGxlQmFkUGFzc3dvcmQocmVxdWVzdCwgcmVzcG9uc2UpO1xuICAgIHRoaXMuaGFuZGxlQmFkTG9naW5SZXNwb25zZShyZXF1ZXN0LCByZXNwb25zZSk7XG4gICAgdGhpcy5oYW5kbGVCYWRDYXJ0UmVxdWVzdChyZXF1ZXN0LCByZXNwb25zZSk7XG4gICAgdGhpcy5oYW5kbGVWYWxpZGF0aW9uRXJyb3IocmVxdWVzdCwgcmVzcG9uc2UpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGhhbmRsZUJhZFBhc3N3b3JkKFxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgcmVzcG9uc2U6IEh0dHBFcnJvclJlc3BvbnNlXG4gICk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIHJlc3BvbnNlLnVybD8uaW5jbHVkZXMoT0FVVEhfRU5EUE9JTlQpICYmXG4gICAgICByZXNwb25zZS5lcnJvcj8uZXJyb3IgPT09ICdpbnZhbGlkX2dyYW50JyAmJlxuICAgICAgcmVxdWVzdC5ib2R5Py5nZXQoJ2dyYW50X3R5cGUnKSA9PT0gJ3Bhc3N3b3JkJ1xuICAgICkge1xuICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICdodHRwSGFuZGxlcnMuYmFkUmVxdWVzdFBsZWFzZUxvZ2luQWdhaW4nLFxuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOlxuICAgICAgICAgICAgICByZXNwb25zZS5lcnJvci5lcnJvcl9kZXNjcmlwdGlvbiB8fCByZXNwb25zZS5tZXNzYWdlIHx8ICcnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SXG4gICAgICApO1xuICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5yZW1vdmUoR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgaGFuZGxlQmFkTG9naW5SZXNwb25zZShcbiAgICBfcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICByZXNwb25zZTogSHR0cEVycm9yUmVzcG9uc2VcbiAgKSB7XG4gICAgdGhpcy5nZXRFcnJvcnMocmVzcG9uc2UpXG4gICAgICAuZmlsdGVyKGVycm9yID0+IGVycm9yLnR5cGUgPT09ICdQYXNzd29yZE1pc21hdGNoRXJyb3InKVxuICAgICAgLmZvckVhY2goKCkgPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgICB7IGtleTogJ2h0dHBIYW5kbGVycy5iYWRSZXF1ZXN0T2xkUGFzc3dvcmRJbmNvcnJlY3QnIH0sXG4gICAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGhhbmRsZVZhbGlkYXRpb25FcnJvcihcbiAgICBfcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICByZXNwb25zZTogSHR0cEVycm9yUmVzcG9uc2VcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5nZXRFcnJvcnMocmVzcG9uc2UpXG4gICAgICAuZmlsdGVyKGUgPT4gZS50eXBlID09PSAnVmFsaWRhdGlvbkVycm9yJylcbiAgICAgIC5mb3JFYWNoKGVycm9yID0+IHtcbiAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiBgaHR0cEhhbmRsZXJzLnZhbGlkYXRpb25FcnJvcnMuJHtlcnJvci5yZWFzb259LiR7ZXJyb3Iuc3ViamVjdH1gLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGhhbmRsZUJhZENhcnRSZXF1ZXN0KFxuICAgIF9yZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIHJlc3BvbnNlOiBIdHRwRXJyb3JSZXNwb25zZVxuICApOiB2b2lkIHtcbiAgICB0aGlzLmdldEVycm9ycyhyZXNwb25zZSlcbiAgICAgIC5maWx0ZXIoZSA9PiBlLnN1YmplY3RUeXBlID09PSAnY2FydCcgJiYgZS5yZWFzb24gPT09ICdub3RGb3VuZCcpXG4gICAgICAuZm9yRWFjaCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICAgIHsga2V5OiAnaHR0cEhhbmRsZXJzLmNhcnROb3RGb3VuZCcgfSxcbiAgICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUlxuICAgICAgICApO1xuICAgICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0RXJyb3JzKHJlc3BvbnNlOiBIdHRwRXJyb3JSZXNwb25zZSk6IEVycm9yTW9kZWxbXSB7XG4gICAgcmV0dXJuIChyZXNwb25zZS5lcnJvcj8uZXJyb3JzIHx8IFtdKS5maWx0ZXIoXG4gICAgICBlcnJvciA9PiBlcnJvci50eXBlICE9PSAnSmFsb09iamVjdE5vTG9uZ2VyVmFsaWRFcnJvcidcbiAgICApO1xuICB9XG59XG4iXX0=