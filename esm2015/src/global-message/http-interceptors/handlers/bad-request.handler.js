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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkLXJlcXVlc3QuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9odHRwLWludGVyY2VwdG9ycy9oYW5kbGVycy9iYWQtcmVxdWVzdC5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O01BSWxELGNBQWMsR0FBRyxrQ0FBa0M7QUFLekQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGdCQUFnQjtJQUh2RDs7UUFJRSxtQkFBYyxHQUFHLGtCQUFrQixDQUFDLFdBQVcsQ0FBQztLQXVEakQ7Ozs7OztJQXJEQyxXQUFXLENBQUMsT0FBeUIsRUFBRSxRQUEyQjtRQUNoRSxJQUNFLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQztZQUNyQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxlQUFlO1lBQ3hDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLFVBQVUsRUFDN0M7WUFDQSxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUMzQjtnQkFDRSxHQUFHLEVBQUUseUNBQXlDO2dCQUM5QyxNQUFNLEVBQUU7b0JBQ04sWUFBWSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztpQkFDaEQ7YUFDRixFQUNELGlCQUFpQixDQUFDLGNBQWMsQ0FDakMsQ0FBQztZQUNGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLENBQUMsQ0FBQztTQUMzRTthQUFNO1lBQ0wsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTzs7Ozs7WUFBQyxDQUFDLEtBQWlCLEVBQUUsS0FBYSxFQUFFLEVBQUU7O29CQUM3RCxZQUEwQjtnQkFDOUIsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLHVCQUF1QixFQUFFO29CQUMxQyx1RUFBdUU7b0JBQ3ZFLHlFQUF5RTtvQkFDekUsWUFBWSxHQUFHLEVBQUUsR0FBRyxFQUFFLDZDQUE2QyxFQUFFLENBQUM7aUJBQ3ZFO3FCQUFNLElBQ0wsS0FBSyxDQUFDLFdBQVcsS0FBSyxNQUFNO29CQUM1QixLQUFLLENBQUMsTUFBTSxLQUFLLFVBQVUsRUFDM0I7b0JBQ0EsWUFBWSxHQUFHLEVBQUUsR0FBRyxFQUFFLDJCQUEyQixFQUFFLENBQUM7aUJBQ3JEO3FCQUFNO29CQUNMLHFGQUFxRjtvQkFDckYsK0NBQStDO29CQUMvQyxZQUFZLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQztpQkFDL0Q7Z0JBQ0QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FDM0IsWUFBWSxFQUNaLGlCQUFpQixDQUFDLGNBQWMsQ0FDakMsQ0FBQztZQUNKLENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7Ozs7O0lBRVMsZUFBZSxDQUFDLElBQXVCLEVBQUUsS0FBYTs7WUFDMUQsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPO1FBQ3pCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLFlBQVksS0FBSyxFQUFFO2dCQUMzRCxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDO2FBQzNDO2lCQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRTtnQkFDdkMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUM7YUFDdkM7U0FDRjtRQUVELE9BQU8sTUFBTSxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7WUExREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7OztJQUVDLDJDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2dsb2JhbC1tZXNzYWdlLm1vZGVsJztcbmltcG9ydCB7IEh0dHBSZXNwb25zZVN0YXR1cyB9IGZyb20gJy4uLy4uL21vZGVscy9yZXNwb25zZS1zdGF0dXMubW9kZWwnO1xuaW1wb3J0IHsgSHR0cEVycm9ySGFuZGxlciB9IGZyb20gJy4vaHR0cC1lcnJvci5oYW5kbGVyJztcbmltcG9ydCB7IEVycm9yTW9kZWwgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IFRyYW5zbGF0YWJsZSB9IGZyb20gJy4uLy4uLy4uL2kxOG4vdHJhbnNsYXRhYmxlJztcblxuY29uc3QgT0FVVEhfRU5EUE9JTlQgPSAnL2F1dGhvcml6YXRpb25zZXJ2ZXIvb2F1dGgvdG9rZW4nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQmFkUmVxdWVzdEhhbmRsZXIgZXh0ZW5kcyBIdHRwRXJyb3JIYW5kbGVyIHtcbiAgcmVzcG9uc2VTdGF0dXMgPSBIdHRwUmVzcG9uc2VTdGF0dXMuQkFEX1JFUVVFU1Q7XG5cbiAgaGFuZGxlRXJyb3IocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgcmVzcG9uc2U6IEh0dHBFcnJvclJlc3BvbnNlKTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgcmVzcG9uc2UudXJsLmluY2x1ZGVzKE9BVVRIX0VORFBPSU5UKSAmJlxuICAgICAgcmVzcG9uc2UuZXJyb3IuZXJyb3IgPT09ICdpbnZhbGlkX2dyYW50JyAmJlxuICAgICAgcmVxdWVzdC5ib2R5LmdldCgnZ3JhbnRfdHlwZScpID09PSAncGFzc3dvcmQnXG4gICAgKSB7XG4gICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAge1xuICAgICAgICAgIGtleTogJ2h0dHBIYW5kbGVycy5iYWRSZXF1ZXN0UGxlYXNlTG9naW5BZ2FpbicsXG4gICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuZ2V0RXJyb3JNZXNzYWdlKHJlc3BvbnNlLCAwKSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUlxuICAgICAgKTtcbiAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UucmVtb3ZlKEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3BvbnNlLmVycm9yLmVycm9ycy5mb3JFYWNoKChlcnJvcjogRXJyb3JNb2RlbCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBsZXQgZXJyb3JNZXNzYWdlOiBUcmFuc2xhdGFibGU7XG4gICAgICAgIGlmIChlcnJvci50eXBlID09PSAnUGFzc3dvcmRNaXNtYXRjaEVycm9yJykge1xuICAgICAgICAgIC8vIHVzZXMgZW4gdHJhbnNsYXRpb24gZXJyb3IgbWVzc2FnZSBpbnN0ZWFkIG9mIGJhY2tlbmQgZXhjZXB0aW9uIGVycm9yXG4gICAgICAgICAgLy8gQHRvZG86IHRoaXMgY29uZGl0aW9uIGNvdWxkIGJlIHJlbW92ZWQgaWYgYmFja2VuZCBnaXZlcyBiZXR0ZXIgbWVzc2FnZVxuICAgICAgICAgIGVycm9yTWVzc2FnZSA9IHsga2V5OiAnaHR0cEhhbmRsZXJzLmJhZFJlcXVlc3RPbGRQYXNzd29yZEluY29ycmVjdCcgfTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBlcnJvci5zdWJqZWN0VHlwZSA9PT0gJ2NhcnQnICYmXG4gICAgICAgICAgZXJyb3IucmVhc29uID09PSAnbm90Rm91bmQnXG4gICAgICAgICkge1xuICAgICAgICAgIGVycm9yTWVzc2FnZSA9IHsga2V5OiAnaHR0cEhhbmRsZXJzLmNhcnROb3RGb3VuZCcgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGN1cnJlbnRseSBzaG93aW5nIHVwIGluIGNhc2Ugd2UgaGF2ZSBhIHBhZ2Ugbm90IGZvdW5kLiBJdCBzaG91bGQgYmUgYSA0MDQuXG4gICAgICAgICAgLy8gc2VlIGh0dHBzOi8vamlyYS5oeWJyaXMuY29tL2Jyb3dzZS9DTVNYLTg1MTZcbiAgICAgICAgICBlcnJvck1lc3NhZ2UgPSB7IHJhdzogdGhpcy5nZXRFcnJvck1lc3NhZ2UocmVzcG9uc2UsIGluZGV4KSB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUlxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGdldEVycm9yTWVzc2FnZShyZXNwOiBIdHRwRXJyb3JSZXNwb25zZSwgaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgbGV0IGVyck1zZyA9IHJlc3AubWVzc2FnZTtcbiAgICBpZiAocmVzcC5lcnJvcikge1xuICAgICAgaWYgKHJlc3AuZXJyb3IuZXJyb3JzICYmIHJlc3AuZXJyb3IuZXJyb3JzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgZXJyTXNnID0gcmVzcC5lcnJvci5lcnJvcnNbaW5kZXhdLm1lc3NhZ2U7XG4gICAgICB9IGVsc2UgaWYgKHJlc3AuZXJyb3IuZXJyb3JfZGVzY3JpcHRpb24pIHtcbiAgICAgICAgZXJyTXNnID0gcmVzcC5lcnJvci5lcnJvcl9kZXNjcmlwdGlvbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXJyTXNnIHx8ICcnO1xuICB9XG59XG4iXX0=