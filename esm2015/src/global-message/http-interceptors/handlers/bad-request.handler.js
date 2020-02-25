import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { GlobalMessageType } from '../../models/global-message.model';
import { HttpResponseStatus } from '../../models/response-status.model';
import { HttpErrorHandler } from './http-error.handler';
import * as i0 from "@angular/core";
import * as i1 from "../../facade/global-message.service";
const OAUTH_ENDPOINT = '/authorizationserver/oauth/token';
let BadRequestHandler = class BadRequestHandler extends HttpErrorHandler {
    constructor() {
        super(...arguments);
        this.responseStatus = HttpResponseStatus.BAD_REQUEST;
    }
    handleError(request, response) {
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
                response.error.errors.forEach((error) => {
                    let errorMessage;
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
                            key: `httpHandlers.validationErrors.${error.reason}.${error.subject}`,
                        };
                    }
                    else {
                        // this is currently showing up in case we have a page not found. It should be a 404.
                        // see https://jira.hybris.com/browse/CMSX-8516
                        errorMessage = { raw: error.message || '' };
                    }
                    // @todo: remove this condition once backend is improved, see:
                    // https://github.com/SAP/cloud-commerce-spartacus-storefront/issues/6679
                    if (error.type !== 'JaloObjectNoLongerValidError') {
                        this.globalMessageService.add(errorMessage, GlobalMessageType.MSG_TYPE_ERROR);
                    }
                });
            }
        }
    }
};
BadRequestHandler.ɵprov = i0.ɵɵdefineInjectable({ factory: function BadRequestHandler_Factory() { return new BadRequestHandler(i0.ɵɵinject(i1.GlobalMessageService)); }, token: BadRequestHandler, providedIn: "root" });
BadRequestHandler = __decorate([
    Injectable({
        providedIn: 'root',
    })
], BadRequestHandler);
export { BadRequestHandler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkLXJlcXVlc3QuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9odHRwLWludGVyY2VwdG9ycy9oYW5kbGVycy9iYWQtcmVxdWVzdC5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFJeEQsTUFBTSxjQUFjLEdBQUcsa0NBQWtDLENBQUM7QUFLMUQsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBa0IsU0FBUSxnQkFBZ0I7SUFBdkQ7O1FBQ0UsbUJBQWMsR0FBRyxrQkFBa0IsQ0FBQyxXQUFXLENBQUM7S0E2RGpEO0lBM0RDLFdBQVcsQ0FBQyxPQUF5QixFQUFFLFFBQTJCO1FBQ2hFLElBQ0UsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDO1lBQ3JDLFFBQVEsQ0FBQyxLQUFLO1lBQ2QsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssZUFBZTtZQUN4QyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxVQUFVLEVBQzdDO1lBQ0EsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FDM0I7Z0JBQ0UsR0FBRyxFQUFFLHlDQUF5QztnQkFDOUMsTUFBTSxFQUFFO29CQUNOLFlBQVksRUFDVixRQUFRLENBQUMsS0FBSyxDQUFDLGlCQUFpQixJQUFJLFFBQVEsQ0FBQyxPQUFPLElBQUksRUFBRTtpQkFDN0Q7YUFDRixFQUNELGlCQUFpQixDQUFDLGNBQWMsQ0FDakMsQ0FBQztZQUNGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLENBQUMsQ0FBQztTQUMzRTthQUFNO1lBQ0wsSUFDRSxRQUFRLENBQUMsS0FBSztnQkFDZCxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU07Z0JBQ3JCLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxZQUFZLEtBQUssRUFDdEM7Z0JBQ0EsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBaUIsRUFBRSxFQUFFO29CQUNsRCxJQUFJLFlBQTBCLENBQUM7b0JBQy9CLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyx1QkFBdUIsRUFBRTt3QkFDMUMsdUVBQXVFO3dCQUN2RSx5RUFBeUU7d0JBQ3pFLFlBQVksR0FBRzs0QkFDYixHQUFHLEVBQUUsNkNBQTZDO3lCQUNuRCxDQUFDO3FCQUNIO3lCQUFNLElBQ0wsS0FBSyxDQUFDLFdBQVcsS0FBSyxNQUFNO3dCQUM1QixLQUFLLENBQUMsTUFBTSxLQUFLLFVBQVUsRUFDM0I7d0JBQ0EsWUFBWSxHQUFHLEVBQUUsR0FBRyxFQUFFLDJCQUEyQixFQUFFLENBQUM7cUJBQ3JEO3lCQUFNLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxpQkFBaUIsRUFBRTt3QkFDM0Msa0VBQWtFO3dCQUNsRSxZQUFZLEdBQUc7NEJBQ2IsR0FBRyxFQUFFLGlDQUFpQyxLQUFLLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUU7eUJBQ3RFLENBQUM7cUJBQ0g7eUJBQU07d0JBQ0wscUZBQXFGO3dCQUNyRiwrQ0FBK0M7d0JBQy9DLFlBQVksR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsRUFBRSxDQUFDO3FCQUM3QztvQkFDRCw4REFBOEQ7b0JBQzlELHlFQUF5RTtvQkFDekUsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLDhCQUE4QixFQUFFO3dCQUNqRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUMzQixZQUFZLEVBQ1osaUJBQWlCLENBQUMsY0FBYyxDQUNqQyxDQUFDO3FCQUNIO2dCQUNILENBQUMsQ0FBQyxDQUFDO2FBQ0o7U0FDRjtJQUNILENBQUM7Q0FDRixDQUFBOztBQTlEWSxpQkFBaUI7SUFIN0IsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLGlCQUFpQixDQThEN0I7U0E5RFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvZ2xvYmFsLW1lc3NhZ2UubW9kZWwnO1xuaW1wb3J0IHsgSHR0cFJlc3BvbnNlU3RhdHVzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Jlc3BvbnNlLXN0YXR1cy5tb2RlbCc7XG5pbXBvcnQgeyBIdHRwRXJyb3JIYW5kbGVyIH0gZnJvbSAnLi9odHRwLWVycm9yLmhhbmRsZXInO1xuaW1wb3J0IHsgRXJyb3JNb2RlbCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgVHJhbnNsYXRhYmxlIH0gZnJvbSAnLi4vLi4vLi4vaTE4bi90cmFuc2xhdGFibGUnO1xuXG5jb25zdCBPQVVUSF9FTkRQT0lOVCA9ICcvYXV0aG9yaXphdGlvbnNlcnZlci9vYXV0aC90b2tlbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBCYWRSZXF1ZXN0SGFuZGxlciBleHRlbmRzIEh0dHBFcnJvckhhbmRsZXIge1xuICByZXNwb25zZVN0YXR1cyA9IEh0dHBSZXNwb25zZVN0YXR1cy5CQURfUkVRVUVTVDtcblxuICBoYW5kbGVFcnJvcihyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCByZXNwb25zZTogSHR0cEVycm9yUmVzcG9uc2UpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICByZXNwb25zZS51cmwuaW5jbHVkZXMoT0FVVEhfRU5EUE9JTlQpICYmXG4gICAgICByZXNwb25zZS5lcnJvciAmJlxuICAgICAgcmVzcG9uc2UuZXJyb3IuZXJyb3IgPT09ICdpbnZhbGlkX2dyYW50JyAmJlxuICAgICAgcmVxdWVzdC5ib2R5LmdldCgnZ3JhbnRfdHlwZScpID09PSAncGFzc3dvcmQnXG4gICAgKSB7XG4gICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAge1xuICAgICAgICAgIGtleTogJ2h0dHBIYW5kbGVycy5iYWRSZXF1ZXN0UGxlYXNlTG9naW5BZ2FpbicsXG4gICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6XG4gICAgICAgICAgICAgIHJlc3BvbnNlLmVycm9yLmVycm9yX2Rlc2NyaXB0aW9uIHx8IHJlc3BvbnNlLm1lc3NhZ2UgfHwgJycsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICAgICk7XG4gICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLnJlbW92ZShHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT04pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoXG4gICAgICAgIHJlc3BvbnNlLmVycm9yICYmXG4gICAgICAgIHJlc3BvbnNlLmVycm9yLmVycm9ycyAmJlxuICAgICAgICByZXNwb25zZS5lcnJvci5lcnJvcnMgaW5zdGFuY2VvZiBBcnJheVxuICAgICAgKSB7XG4gICAgICAgIHJlc3BvbnNlLmVycm9yLmVycm9ycy5mb3JFYWNoKChlcnJvcjogRXJyb3JNb2RlbCkgPT4ge1xuICAgICAgICAgIGxldCBlcnJvck1lc3NhZ2U6IFRyYW5zbGF0YWJsZTtcbiAgICAgICAgICBpZiAoZXJyb3IudHlwZSA9PT0gJ1Bhc3N3b3JkTWlzbWF0Y2hFcnJvcicpIHtcbiAgICAgICAgICAgIC8vIHVzZXMgZW4gdHJhbnNsYXRpb24gZXJyb3IgbWVzc2FnZSBpbnN0ZWFkIG9mIGJhY2tlbmQgZXhjZXB0aW9uIGVycm9yXG4gICAgICAgICAgICAvLyBAdG9kbzogdGhpcyBjb25kaXRpb24gY291bGQgYmUgcmVtb3ZlZCBpZiBiYWNrZW5kIGdpdmVzIGJldHRlciBtZXNzYWdlXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSB7XG4gICAgICAgICAgICAgIGtleTogJ2h0dHBIYW5kbGVycy5iYWRSZXF1ZXN0T2xkUGFzc3dvcmRJbmNvcnJlY3QnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgZXJyb3Iuc3ViamVjdFR5cGUgPT09ICdjYXJ0JyAmJlxuICAgICAgICAgICAgZXJyb3IucmVhc29uID09PSAnbm90Rm91bmQnXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSB7IGtleTogJ2h0dHBIYW5kbGVycy5jYXJ0Tm90Rm91bmQnIH07XG4gICAgICAgICAgfSBlbHNlIGlmIChlcnJvci50eXBlID09PSAnVmFsaWRhdGlvbkVycm9yJykge1xuICAgICAgICAgICAgLy8gYnVpbGQgdHJhbnNsYXRpb24ga2V5IGluIGNhc2Ugb2YgYmFja2VuZCBmaWVsZCB2YWxpZGF0aW9uIGVycm9yXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSB7XG4gICAgICAgICAgICAgIGtleTogYGh0dHBIYW5kbGVycy52YWxpZGF0aW9uRXJyb3JzLiR7ZXJyb3IucmVhc29ufS4ke2Vycm9yLnN1YmplY3R9YCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgY3VycmVudGx5IHNob3dpbmcgdXAgaW4gY2FzZSB3ZSBoYXZlIGEgcGFnZSBub3QgZm91bmQuIEl0IHNob3VsZCBiZSBhIDQwNC5cbiAgICAgICAgICAgIC8vIHNlZSBodHRwczovL2ppcmEuaHlicmlzLmNvbS9icm93c2UvQ01TWC04NTE2XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSB7IHJhdzogZXJyb3IubWVzc2FnZSB8fCAnJyB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBAdG9kbzogcmVtb3ZlIHRoaXMgY29uZGl0aW9uIG9uY2UgYmFja2VuZCBpcyBpbXByb3ZlZCwgc2VlOlxuICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9TQVAvY2xvdWQtY29tbWVyY2Utc3BhcnRhY3VzLXN0b3JlZnJvbnQvaXNzdWVzLzY2NzlcbiAgICAgICAgICBpZiAoZXJyb3IudHlwZSAhPT0gJ0phbG9PYmplY3ROb0xvbmdlclZhbGlkRXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19