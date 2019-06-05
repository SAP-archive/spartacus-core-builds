/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { GlobalMessageType } from '../../models/global-message.model';
import { HttpResponseStatus } from '../../models/response-status.model';
import { HttpErrorHandler } from './http-error.handler';
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
            (error, index) => {
                /** @type {?} */
                let errorMessage;
                if (error.type === 'PasswordMismatchError') {
                    // uses en translation error message instead of backend exception error
                    // @todo: this condition could be removed if backend gives better message
                    errorMessage = { key: 'httpHandlers.badRequestOldPasswordIncorrect' };
                }
                else if (error.subjectType === 'cart' &&
                    error.reason === 'notFound') {
                    errorMessage = { key: 'httpHandlers.cartNotFound' };
                }
                else if (response.error.errors[0].type === 'ValidationError') {
                    // build translation key in case of backend field validation error
                    errorMessage = {
                        key: `httpHandlers.validationErrors.${error.reason}.${error.subject}`,
                    };
                }
                else {
                    // this is currently showing up in case we have a page not found. It should be a 404.
                    // see https://jira.hybris.com/browse/CMSX-8516
                    errorMessage = { raw: this.getErrorMessage(response, index) };
                }
                this.globalMessageService.add(errorMessage, GlobalMessageType.MSG_TYPE_ERROR);
            }));
        }
    }
    /**
     * @protected
     * @param {?} resp
     * @param {?} index
     * @return {?}
     */
    getErrorMessage(resp, index) {
        /** @type {?} */
        let errMsg = resp.message;
        if (resp.error) {
            if (resp.error.errors && resp.error.errors instanceof Array) {
                errMsg = resp.error.errors[index].message;
            }
            else if (resp.error.error_description) {
                errMsg = resp.error.error_description;
            }
        }
        return errMsg || '';
    }
}
BadRequestHandler.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ BadRequestHandler.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function BadRequestHandler_Factory() { return new BadRequestHandler(i0.ɵɵinject(i1.GlobalMessageService)); }, token: BadRequestHandler, providedIn: "root" });
if (false) {
    /** @type {?} */
    BadRequestHandler.prototype.responseStatus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkLXJlcXVlc3QuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9odHRwLWludGVyY2VwdG9ycy9oYW5kbGVycy9iYWQtcmVxdWVzdC5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O01BSWxELGNBQWMsR0FBRyxrQ0FBa0M7QUFLekQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGdCQUFnQjtJQUh2RDs7UUFJRSxtQkFBYyxHQUFHLGtCQUFrQixDQUFDLFdBQVcsQ0FBQztLQThEakQ7Ozs7OztJQTVEQyxXQUFXLENBQUMsT0FBeUIsRUFBRSxRQUEyQjtRQUNoRSxJQUNFLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQztZQUNyQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxlQUFlO1lBQ3hDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLFVBQVUsRUFDN0M7WUFDQSxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUMzQjtnQkFDRSxHQUFHLEVBQUUseUNBQXlDO2dCQUM5QyxNQUFNLEVBQUU7b0JBQ04sWUFBWSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztpQkFDaEQ7YUFDRixFQUNELGlCQUFpQixDQUFDLGNBQWMsQ0FDakMsQ0FBQztZQUNGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLENBQUMsQ0FBQztTQUMzRTthQUFNO1lBQ0wsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTzs7Ozs7WUFBQyxDQUFDLEtBQWlCLEVBQUUsS0FBYSxFQUFFLEVBQUU7O29CQUM3RCxZQUEwQjtnQkFDOUIsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLHVCQUF1QixFQUFFO29CQUMxQyx1RUFBdUU7b0JBQ3ZFLHlFQUF5RTtvQkFDekUsWUFBWSxHQUFHLEVBQUUsR0FBRyxFQUFFLDZDQUE2QyxFQUFFLENBQUM7aUJBQ3ZFO3FCQUFNLElBQ0wsS0FBSyxDQUFDLFdBQVcsS0FBSyxNQUFNO29CQUM1QixLQUFLLENBQUMsTUFBTSxLQUFLLFVBQVUsRUFDM0I7b0JBQ0EsWUFBWSxHQUFHLEVBQUUsR0FBRyxFQUFFLDJCQUEyQixFQUFFLENBQUM7aUJBQ3JEO3FCQUFNLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLGlCQUFpQixFQUFFO29CQUM5RCxrRUFBa0U7b0JBQ2xFLFlBQVksR0FBRzt3QkFDYixHQUFHLEVBQUUsaUNBQWlDLEtBQUssQ0FBQyxNQUFNLElBQ2hELEtBQUssQ0FBQyxPQUNSLEVBQUU7cUJBQ0gsQ0FBQztpQkFDSDtxQkFBTTtvQkFDTCxxRkFBcUY7b0JBQ3JGLCtDQUErQztvQkFDL0MsWUFBWSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUM7aUJBQy9EO2dCQUNELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQzNCLFlBQVksRUFDWixpQkFBaUIsQ0FBQyxjQUFjLENBQ2pDLENBQUM7WUFDSixDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Ozs7OztJQUVTLGVBQWUsQ0FBQyxJQUF1QixFQUFFLEtBQWE7O1lBQzFELE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTztRQUN6QixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxZQUFZLEtBQUssRUFBRTtnQkFDM0QsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUMzQztpQkFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ3ZDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDO2FBQ3ZDO1NBQ0Y7UUFFRCxPQUFPLE1BQU0sSUFBSSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7O1lBakVGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7SUFFQywyQ0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlVHlwZSB9IGZyb20gJy4uLy4uL21vZGVscy9nbG9iYWwtbWVzc2FnZS5tb2RlbCc7XG5pbXBvcnQgeyBIdHRwUmVzcG9uc2VTdGF0dXMgfSBmcm9tICcuLi8uLi9tb2RlbHMvcmVzcG9uc2Utc3RhdHVzLm1vZGVsJztcbmltcG9ydCB7IEh0dHBFcnJvckhhbmRsZXIgfSBmcm9tICcuL2h0dHAtZXJyb3IuaGFuZGxlcic7XG5pbXBvcnQgeyBFcnJvck1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBUcmFuc2xhdGFibGUgfSBmcm9tICcuLi8uLi8uLi9pMThuL3RyYW5zbGF0YWJsZSc7XG5cbmNvbnN0IE9BVVRIX0VORFBPSU5UID0gJy9hdXRob3JpemF0aW9uc2VydmVyL29hdXRoL3Rva2VuJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEJhZFJlcXVlc3RIYW5kbGVyIGV4dGVuZHMgSHR0cEVycm9ySGFuZGxlciB7XG4gIHJlc3BvbnNlU3RhdHVzID0gSHR0cFJlc3BvbnNlU3RhdHVzLkJBRF9SRVFVRVNUO1xuXG4gIGhhbmRsZUVycm9yKHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIHJlc3BvbnNlOiBIdHRwRXJyb3JSZXNwb25zZSk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIHJlc3BvbnNlLnVybC5pbmNsdWRlcyhPQVVUSF9FTkRQT0lOVCkgJiZcbiAgICAgIHJlc3BvbnNlLmVycm9yLmVycm9yID09PSAnaW52YWxpZF9ncmFudCcgJiZcbiAgICAgIHJlcXVlc3QuYm9keS5nZXQoJ2dyYW50X3R5cGUnKSA9PT0gJ3Bhc3N3b3JkJ1xuICAgICkge1xuICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICdodHRwSGFuZGxlcnMuYmFkUmVxdWVzdFBsZWFzZUxvZ2luQWdhaW4nLFxuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmdldEVycm9yTWVzc2FnZShyZXNwb25zZSwgMCksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICAgICk7XG4gICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLnJlbW92ZShHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT04pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNwb25zZS5lcnJvci5lcnJvcnMuZm9yRWFjaCgoZXJyb3I6IEVycm9yTW9kZWwsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgbGV0IGVycm9yTWVzc2FnZTogVHJhbnNsYXRhYmxlO1xuICAgICAgICBpZiAoZXJyb3IudHlwZSA9PT0gJ1Bhc3N3b3JkTWlzbWF0Y2hFcnJvcicpIHtcbiAgICAgICAgICAvLyB1c2VzIGVuIHRyYW5zbGF0aW9uIGVycm9yIG1lc3NhZ2UgaW5zdGVhZCBvZiBiYWNrZW5kIGV4Y2VwdGlvbiBlcnJvclxuICAgICAgICAgIC8vIEB0b2RvOiB0aGlzIGNvbmRpdGlvbiBjb3VsZCBiZSByZW1vdmVkIGlmIGJhY2tlbmQgZ2l2ZXMgYmV0dGVyIG1lc3NhZ2VcbiAgICAgICAgICBlcnJvck1lc3NhZ2UgPSB7IGtleTogJ2h0dHBIYW5kbGVycy5iYWRSZXF1ZXN0T2xkUGFzc3dvcmRJbmNvcnJlY3QnIH07XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgZXJyb3Iuc3ViamVjdFR5cGUgPT09ICdjYXJ0JyAmJlxuICAgICAgICAgIGVycm9yLnJlYXNvbiA9PT0gJ25vdEZvdW5kJ1xuICAgICAgICApIHtcbiAgICAgICAgICBlcnJvck1lc3NhZ2UgPSB7IGtleTogJ2h0dHBIYW5kbGVycy5jYXJ0Tm90Rm91bmQnIH07XG4gICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UuZXJyb3IuZXJyb3JzWzBdLnR5cGUgPT09ICdWYWxpZGF0aW9uRXJyb3InKSB7XG4gICAgICAgICAgLy8gYnVpbGQgdHJhbnNsYXRpb24ga2V5IGluIGNhc2Ugb2YgYmFja2VuZCBmaWVsZCB2YWxpZGF0aW9uIGVycm9yXG4gICAgICAgICAgZXJyb3JNZXNzYWdlID0ge1xuICAgICAgICAgICAga2V5OiBgaHR0cEhhbmRsZXJzLnZhbGlkYXRpb25FcnJvcnMuJHtlcnJvci5yZWFzb259LiR7XG4gICAgICAgICAgICAgIGVycm9yLnN1YmplY3RcbiAgICAgICAgICAgIH1gLFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBjdXJyZW50bHkgc2hvd2luZyB1cCBpbiBjYXNlIHdlIGhhdmUgYSBwYWdlIG5vdCBmb3VuZC4gSXQgc2hvdWxkIGJlIGEgNDA0LlxuICAgICAgICAgIC8vIHNlZSBodHRwczovL2ppcmEuaHlicmlzLmNvbS9icm93c2UvQ01TWC04NTE2XG4gICAgICAgICAgZXJyb3JNZXNzYWdlID0geyByYXc6IHRoaXMuZ2V0RXJyb3JNZXNzYWdlKHJlc3BvbnNlLCBpbmRleCkgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRFcnJvck1lc3NhZ2UocmVzcDogSHR0cEVycm9yUmVzcG9uc2UsIGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGxldCBlcnJNc2cgPSByZXNwLm1lc3NhZ2U7XG4gICAgaWYgKHJlc3AuZXJyb3IpIHtcbiAgICAgIGlmIChyZXNwLmVycm9yLmVycm9ycyAmJiByZXNwLmVycm9yLmVycm9ycyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGVyck1zZyA9IHJlc3AuZXJyb3IuZXJyb3JzW2luZGV4XS5tZXNzYWdlO1xuICAgICAgfSBlbHNlIGlmIChyZXNwLmVycm9yLmVycm9yX2Rlc2NyaXB0aW9uKSB7XG4gICAgICAgIGVyck1zZyA9IHJlc3AuZXJyb3IuZXJyb3JfZGVzY3JpcHRpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVyck1zZyB8fCAnJztcbiAgfVxufVxuIl19