import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpResponseStatus } from '../../models/response-status.model';
import { HttpErrorHandler } from './http-error.handler';
import * as i0 from "@angular/core";
import * as i1 from "../../facade/global-message.service";
let NotFoundHandler = class NotFoundHandler extends HttpErrorHandler {
    constructor() {
        super(...arguments);
        this.responseStatus = HttpResponseStatus.NOT_FOUND;
    }
    // empty error handler to avoid we fallabck to the unknown error handler
    handleError() { }
};
NotFoundHandler.ɵprov = i0.ɵɵdefineInjectable({ factory: function NotFoundHandler_Factory() { return new NotFoundHandler(i0.ɵɵinject(i1.GlobalMessageService)); }, token: NotFoundHandler, providedIn: "root" });
NotFoundHandler = __decorate([
    Injectable({
        providedIn: 'root',
    })
], NotFoundHandler);
export { NotFoundHandler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWZvdW5kLmhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvZ2xvYmFsLW1lc3NhZ2UvaHR0cC1pbnRlcmNlcHRvcnMvaGFuZGxlcnMvbm90LWZvdW5kLmhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQUt4RCxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFnQixTQUFRLGdCQUFnQjtJQUFyRDs7UUFDRSxtQkFBYyxHQUFHLGtCQUFrQixDQUFDLFNBQVMsQ0FBQztLQUkvQztJQUZDLHdFQUF3RTtJQUN4RSxXQUFXLEtBQVUsQ0FBQztDQUN2QixDQUFBOztBQUxZLGVBQWU7SUFIM0IsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLGVBQWUsQ0FLM0I7U0FMWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cFJlc3BvbnNlU3RhdHVzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Jlc3BvbnNlLXN0YXR1cy5tb2RlbCc7XG5pbXBvcnQgeyBIdHRwRXJyb3JIYW5kbGVyIH0gZnJvbSAnLi9odHRwLWVycm9yLmhhbmRsZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTm90Rm91bmRIYW5kbGVyIGV4dGVuZHMgSHR0cEVycm9ySGFuZGxlciB7XG4gIHJlc3BvbnNlU3RhdHVzID0gSHR0cFJlc3BvbnNlU3RhdHVzLk5PVF9GT1VORDtcblxuICAvLyBlbXB0eSBlcnJvciBoYW5kbGVyIHRvIGF2b2lkIHdlIGZhbGxhYmNrIHRvIHRoZSB1bmtub3duIGVycm9yIGhhbmRsZXJcbiAgaGFuZGxlRXJyb3IoKTogdm9pZCB7fVxufVxuIl19