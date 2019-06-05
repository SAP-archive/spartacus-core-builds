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
        if (response.url.includes(OAUTH_ENDPOINT) &&
            response.error.error === 'invalid_grant' &&
            request.body.get('grant_type') === 'password') {
            this.globalMessageService.add({
                key: 'httpHandlers.badRequestPleaseLoginAgain',
                params: { errorMessage: this.getErrorMessage(response) },
            }, GlobalMessageType.MSG_TYPE_ERROR);
            this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_CONFIRMATION);
        }
        else if (response.error.errors[0].type === 'PasswordMismatchError') {
            // uses en translation error message instead of backend exception error
            // @todo: this condition could be removed if backend gives better message
            this.globalMessageService.add({ key: 'httpHandlers.badRequestOldPasswordIncorrect' }, GlobalMessageType.MSG_TYPE_ERROR);
            // text: customError.customError.passwordMismatch,
        }
        else if (response.error.errors[0].subjectType === 'cart' &&
            response.error.errors[0].reason === 'notFound') {
            /** @type {?} */
            var textObj = { key: 'httpHandlers.cartNotFound' };
            this.globalMessageService.add(textObj, GlobalMessageType.MSG_TYPE_ERROR);
        }
        else {
            // this is currently showing up in case we have a page not found. It should be a 404.
            // see https://jira.hybris.com/browse/CMSX-8516
            /** @type {?} */
            var errorMessage = this.getErrorMessage(response);
            if (errorMessage) {
                this.globalMessageService.add({ raw: errorMessage }, GlobalMessageType.MSG_TYPE_ERROR);
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkLXJlcXVlc3QuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9odHRwLWludGVyY2VwdG9ycy9oYW5kbGVycy9iYWQtcmVxdWVzdC5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7OztJQUVsRCxjQUFjLEdBQUcsa0NBQWtDO0FBRXpEO0lBR3VDLDZDQUFnQjtJQUh2RDtRQUFBLHFFQTJEQztRQXZEQyxvQkFBYyxHQUFHLGtCQUFrQixDQUFDLFdBQVcsQ0FBQzs7S0F1RGpEOzs7Ozs7SUFyREMsdUNBQVc7Ozs7O0lBQVgsVUFBWSxPQUF5QixFQUFFLFFBQTJCO1FBQ2hFLElBQ0UsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDO1lBQ3JDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLGVBQWU7WUFDeEMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssVUFBVSxFQUM3QztZQUNBLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQzNCO2dCQUNFLEdBQUcsRUFBRSx5Q0FBeUM7Z0JBQzlDLE1BQU0sRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2FBQ3pELEVBQ0QsaUJBQWlCLENBQUMsY0FBYyxDQUNqQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQzNFO2FBQU0sSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssdUJBQXVCLEVBQUU7WUFDcEUsdUVBQXVFO1lBQ3ZFLHlFQUF5RTtZQUN6RSxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUMzQixFQUFFLEdBQUcsRUFBRSw2Q0FBNkMsRUFBRSxFQUN0RCxpQkFBaUIsQ0FBQyxjQUFjLENBQ2pDLENBQUM7WUFDRixrREFBa0Q7U0FDbkQ7YUFBTSxJQUNMLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsS0FBSyxNQUFNO1lBQy9DLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxVQUFVLEVBQzlDOztnQkFDTSxPQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsMkJBQTJCLEVBQUU7WUFDcEQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDMUU7YUFBTTs7OztnQkFHQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7WUFDbkQsSUFBSSxZQUFZLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQzNCLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxFQUNyQixpQkFBaUIsQ0FBQyxjQUFjLENBQ2pDLENBQUM7YUFDSDtTQUNGO0lBQ0gsQ0FBQzs7Ozs7O0lBRVMsMkNBQWU7Ozs7O0lBQXpCLFVBQTBCLElBQXVCOztZQUMzQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU87UUFDekIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sWUFBWSxLQUFLLEVBQUU7Z0JBQzNELE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7YUFDdkM7aUJBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFO2dCQUN2QyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQzthQUN2QztTQUNGO1FBRUQsT0FBTyxNQUFNLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7O2dCQTFERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7NEJBVkQ7Q0FtRUMsQUEzREQsQ0FHdUMsZ0JBQWdCLEdBd0R0RDtTQXhEWSxpQkFBaUI7OztJQUM1QiwyQ0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlVHlwZSB9IGZyb20gJy4uLy4uL21vZGVscy9nbG9iYWwtbWVzc2FnZS5tb2RlbCc7XG5pbXBvcnQgeyBIdHRwUmVzcG9uc2VTdGF0dXMgfSBmcm9tICcuLi8uLi9tb2RlbHMvcmVzcG9uc2Utc3RhdHVzLm1vZGVsJztcbmltcG9ydCB7IEh0dHBFcnJvckhhbmRsZXIgfSBmcm9tICcuL2h0dHAtZXJyb3IuaGFuZGxlcic7XG5cbmNvbnN0IE9BVVRIX0VORFBPSU5UID0gJy9hdXRob3JpemF0aW9uc2VydmVyL29hdXRoL3Rva2VuJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEJhZFJlcXVlc3RIYW5kbGVyIGV4dGVuZHMgSHR0cEVycm9ySGFuZGxlciB7XG4gIHJlc3BvbnNlU3RhdHVzID0gSHR0cFJlc3BvbnNlU3RhdHVzLkJBRF9SRVFVRVNUO1xuXG4gIGhhbmRsZUVycm9yKHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIHJlc3BvbnNlOiBIdHRwRXJyb3JSZXNwb25zZSk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIHJlc3BvbnNlLnVybC5pbmNsdWRlcyhPQVVUSF9FTkRQT0lOVCkgJiZcbiAgICAgIHJlc3BvbnNlLmVycm9yLmVycm9yID09PSAnaW52YWxpZF9ncmFudCcgJiZcbiAgICAgIHJlcXVlc3QuYm9keS5nZXQoJ2dyYW50X3R5cGUnKSA9PT0gJ3Bhc3N3b3JkJ1xuICAgICkge1xuICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICdodHRwSGFuZGxlcnMuYmFkUmVxdWVzdFBsZWFzZUxvZ2luQWdhaW4nLFxuICAgICAgICAgIHBhcmFtczogeyBlcnJvck1lc3NhZ2U6IHRoaXMuZ2V0RXJyb3JNZXNzYWdlKHJlc3BvbnNlKSB9LFxuICAgICAgICB9LFxuICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUlxuICAgICAgKTtcbiAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UucmVtb3ZlKEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTik7XG4gICAgfSBlbHNlIGlmIChyZXNwb25zZS5lcnJvci5lcnJvcnNbMF0udHlwZSA9PT0gJ1Bhc3N3b3JkTWlzbWF0Y2hFcnJvcicpIHtcbiAgICAgIC8vIHVzZXMgZW4gdHJhbnNsYXRpb24gZXJyb3IgbWVzc2FnZSBpbnN0ZWFkIG9mIGJhY2tlbmQgZXhjZXB0aW9uIGVycm9yXG4gICAgICAvLyBAdG9kbzogdGhpcyBjb25kaXRpb24gY291bGQgYmUgcmVtb3ZlZCBpZiBiYWNrZW5kIGdpdmVzIGJldHRlciBtZXNzYWdlXG4gICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgeyBrZXk6ICdodHRwSGFuZGxlcnMuYmFkUmVxdWVzdE9sZFBhc3N3b3JkSW5jb3JyZWN0JyB9LFxuICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUlxuICAgICAgKTtcbiAgICAgIC8vIHRleHQ6IGN1c3RvbUVycm9yLmN1c3RvbUVycm9yLnBhc3N3b3JkTWlzbWF0Y2gsXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHJlc3BvbnNlLmVycm9yLmVycm9yc1swXS5zdWJqZWN0VHlwZSA9PT0gJ2NhcnQnICYmXG4gICAgICByZXNwb25zZS5lcnJvci5lcnJvcnNbMF0ucmVhc29uID09PSAnbm90Rm91bmQnXG4gICAgKSB7XG4gICAgICBjb25zdCB0ZXh0T2JqID0geyBrZXk6ICdodHRwSGFuZGxlcnMuY2FydE5vdEZvdW5kJyB9O1xuICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQodGV4dE9iaiwgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1IpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0aGlzIGlzIGN1cnJlbnRseSBzaG93aW5nIHVwIGluIGNhc2Ugd2UgaGF2ZSBhIHBhZ2Ugbm90IGZvdW5kLiBJdCBzaG91bGQgYmUgYSA0MDQuXG4gICAgICAvLyBzZWUgaHR0cHM6Ly9qaXJhLmh5YnJpcy5jb20vYnJvd3NlL0NNU1gtODUxNlxuICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gdGhpcy5nZXRFcnJvck1lc3NhZ2UocmVzcG9uc2UpO1xuICAgICAgaWYgKGVycm9yTWVzc2FnZSkge1xuICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgICB7IHJhdzogZXJyb3JNZXNzYWdlIH0sXG4gICAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0RXJyb3JNZXNzYWdlKHJlc3A6IEh0dHBFcnJvclJlc3BvbnNlKTogc3RyaW5nIHtcbiAgICBsZXQgZXJyTXNnID0gcmVzcC5tZXNzYWdlO1xuICAgIGlmIChyZXNwLmVycm9yKSB7XG4gICAgICBpZiAocmVzcC5lcnJvci5lcnJvcnMgJiYgcmVzcC5lcnJvci5lcnJvcnMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBlcnJNc2cgPSByZXNwLmVycm9yLmVycm9yc1swXS5tZXNzYWdlO1xuICAgICAgfSBlbHNlIGlmIChyZXNwLmVycm9yLmVycm9yX2Rlc2NyaXB0aW9uKSB7XG4gICAgICAgIGVyck1zZyA9IHJlc3AuZXJyb3IuZXJyb3JfZGVzY3JpcHRpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVyck1zZyB8fCAnJztcbiAgfVxufVxuIl19