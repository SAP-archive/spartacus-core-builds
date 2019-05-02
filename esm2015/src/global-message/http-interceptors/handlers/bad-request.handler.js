/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpErrorHandler } from './http-error.handler';
import { GlobalMessageType } from '../../models/global-message.model';
import { HttpResponseStatus } from '../../models/response-status.model';
import * as i0 from "@angular/core";
import * as i1 from "../../facade/global-message.service";
/** @type {?} */
const OAUTH_ENDPOINT = '/authorizationserver/oauth/token';
export class BadRequestHandler extends HttpErrorHandler {
    constructor() {
        super(...arguments);
        this.responseStatus = HttpResponseStatus.BAD_REQUEST;
    }
    /**
     * @param {?} request
     * @param {?} response
     * @return {?}
     */
    handleError(request, response) {
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
    }
    /**
     * @protected
     * @param {?} resp
     * @return {?}
     */
    getErrorMessage(resp) {
        /** @type {?} */
        let errMsg = resp.message;
        if (resp.error) {
            if (resp.error.errors && resp.error.errors instanceof Array) {
                errMsg = resp.error.errors[0].message;
            }
            else if (resp.error.error_description) {
                errMsg = resp.error.error_description;
            }
        }
        return errMsg || 'An unknown error occured';
    }
}
BadRequestHandler.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ BadRequestHandler.ngInjectableDef = i0.defineInjectable({ factory: function BadRequestHandler_Factory() { return new BadRequestHandler(i0.inject(i1.GlobalMessageService)); }, token: BadRequestHandler, providedIn: "root" });
if (false) {
    /** @type {?} */
    BadRequestHandler.prototype.responseStatus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkLXJlcXVlc3QuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9odHRwLWludGVyY2VwdG9ycy9oYW5kbGVycy9iYWQtcmVxdWVzdC5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7O01BRWxFLGNBQWMsR0FBRyxrQ0FBa0M7QUFLekQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGdCQUFnQjtJQUh2RDs7UUFJRSxtQkFBYyxHQUFHLGtCQUFrQixDQUFDLFdBQVcsQ0FBQztLQThDakQ7Ozs7OztJQTVDQyxXQUFXLENBQUMsT0FBeUIsRUFBRSxRQUEyQjtRQUNoRSxJQUNFLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxlQUFlLEVBQ3hDO1lBQ0EsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxVQUFVLEVBQUU7Z0JBQ2pELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUM7b0JBQzVCLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxjQUFjO29CQUN0QyxJQUFJLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsR0FBRyx1QkFBdUI7aUJBQy9ELENBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUM5QixpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FDeEMsQ0FBQzthQUNIO1NBQ0Y7YUFBTSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyx1QkFBdUIsRUFBRTtZQUNwRSx1RUFBdUU7WUFDdkUseUVBQXlFO1lBQ3pFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUM7Z0JBQzVCLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxjQUFjO2dCQUN0QyxJQUFJLEVBQUUseUJBQXlCO2FBQ2hDLENBQUMsQ0FBQztZQUNILGtEQUFrRDtTQUNuRDthQUFNO1lBQ0wscUZBQXFGO1lBQ3JGLCtDQUErQztZQUMvQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDO2dCQUM1QixJQUFJLEVBQUUsaUJBQWlCLENBQUMsY0FBYztnQkFDdEMsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDO2FBQ3JDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Ozs7O0lBRVMsZUFBZSxDQUFDLElBQXVCOztZQUMzQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU87UUFDekIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sWUFBWSxLQUFLLEVBQUU7Z0JBQzNELE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7YUFDdkM7aUJBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFO2dCQUN2QyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQzthQUN2QztTQUNGO1FBRUQsT0FBTyxNQUFNLElBQUksMEJBQTBCLENBQUM7SUFDOUMsQ0FBQzs7O1lBakRGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7SUFFQywyQ0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwUmVxdWVzdCwgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBIdHRwRXJyb3JIYW5kbGVyIH0gZnJvbSAnLi9odHRwLWVycm9yLmhhbmRsZXInO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvZ2xvYmFsLW1lc3NhZ2UubW9kZWwnO1xuaW1wb3J0IHsgSHR0cFJlc3BvbnNlU3RhdHVzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Jlc3BvbnNlLXN0YXR1cy5tb2RlbCc7XG5cbmNvbnN0IE9BVVRIX0VORFBPSU5UID0gJy9hdXRob3JpemF0aW9uc2VydmVyL29hdXRoL3Rva2VuJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEJhZFJlcXVlc3RIYW5kbGVyIGV4dGVuZHMgSHR0cEVycm9ySGFuZGxlciB7XG4gIHJlc3BvbnNlU3RhdHVzID0gSHR0cFJlc3BvbnNlU3RhdHVzLkJBRF9SRVFVRVNUO1xuXG4gIGhhbmRsZUVycm9yKHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIHJlc3BvbnNlOiBIdHRwRXJyb3JSZXNwb25zZSkge1xuICAgIGlmIChcbiAgICAgIHJlc3BvbnNlLnVybC5pbmRleE9mKE9BVVRIX0VORFBPSU5UKSAhPT0gLTEgJiZcbiAgICAgIHJlc3BvbnNlLmVycm9yLmVycm9yID09PSAnaW52YWxpZF9ncmFudCdcbiAgICApIHtcbiAgICAgIGlmIChyZXF1ZXN0LmJvZHkuZ2V0KCdncmFudF90eXBlJykgPT09ICdwYXNzd29yZCcpIHtcbiAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoe1xuICAgICAgICAgIHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SLFxuICAgICAgICAgIHRleHQ6IHRoaXMuZ2V0RXJyb3JNZXNzYWdlKHJlc3BvbnNlKSArICcuIFBsZWFzZSBsb2dpbiBhZ2Fpbi4nLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5yZW1vdmUoXG4gICAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyZXNwb25zZS5lcnJvci5lcnJvcnNbMF0udHlwZSA9PT0gJ1Bhc3N3b3JkTWlzbWF0Y2hFcnJvcicpIHtcbiAgICAgIC8vIHVzZXMgZW4gdHJhbnNsYXRpb24gZXJyb3IgbWVzc2FnZSBpbnN0ZWFkIG9mIGJhY2tlbmQgZXhjZXB0aW9uIGVycm9yXG4gICAgICAvLyBAdG9kbzogdGhpcyBjb25kaXRpb24gY291bGQgYmUgcmVtb3ZlZCBpZiBiYWNrZW5kIGdpdmVzIGJldHRlciBtZXNzYWdlXG4gICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZCh7XG4gICAgICAgIHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SLFxuICAgICAgICB0ZXh0OiAnT2xkIHBhc3N3b3JkIGluY29ycmVjdC4nLFxuICAgICAgfSk7XG4gICAgICAvLyB0ZXh0OiBjdXN0b21FcnJvci5jdXN0b21FcnJvci5wYXNzd29yZE1pc21hdGNoLFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0aGlzIGlzIGN1cnJlbnRseSBzaG93aW5nIHVwIGluIGNhc2Ugd2UgaGF2ZSBhIHBhZ2Ugbm90IGZvdW5kLiBJdCBzaG91bGQgYmUgYSA0MDQuXG4gICAgICAvLyBzZWUgaHR0cHM6Ly9qaXJhLmh5YnJpcy5jb20vYnJvd3NlL0NNU1gtODUxNlxuICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoe1xuICAgICAgICB0eXBlOiBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUixcbiAgICAgICAgdGV4dDogdGhpcy5nZXRFcnJvck1lc3NhZ2UocmVzcG9uc2UpLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGdldEVycm9yTWVzc2FnZShyZXNwOiBIdHRwRXJyb3JSZXNwb25zZSkge1xuICAgIGxldCBlcnJNc2cgPSByZXNwLm1lc3NhZ2U7XG4gICAgaWYgKHJlc3AuZXJyb3IpIHtcbiAgICAgIGlmIChyZXNwLmVycm9yLmVycm9ycyAmJiByZXNwLmVycm9yLmVycm9ycyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGVyck1zZyA9IHJlc3AuZXJyb3IuZXJyb3JzWzBdLm1lc3NhZ2U7XG4gICAgICB9IGVsc2UgaWYgKHJlc3AuZXJyb3IuZXJyb3JfZGVzY3JpcHRpb24pIHtcbiAgICAgICAgZXJyTXNnID0gcmVzcC5lcnJvci5lcnJvcl9kZXNjcmlwdGlvbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyTXNnIHx8ICdBbiB1bmtub3duIGVycm9yIG9jY3VyZWQnO1xuICB9XG59XG4iXX0=