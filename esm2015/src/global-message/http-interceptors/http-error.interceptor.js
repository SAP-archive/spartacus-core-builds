import { __decorate, __param } from "tslib";
import { HttpErrorResponse, } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpResponseStatus } from '../models/response-status.model';
import { HttpErrorHandler } from './handlers/http-error.handler';
import * as i0 from "@angular/core";
import * as i1 from "./handlers/http-error.handler";
let HttpErrorInterceptor = class HttpErrorInterceptor {
    constructor(handlers) {
        this.handlers = handlers;
        // We reverse the handlers to allow for custom handlers
        // that replace standard handlers
        this.handlers.reverse();
    }
    intercept(request, next) {
        return next.handle(request).pipe(catchError((response) => {
            if (response instanceof HttpErrorResponse) {
                this.handleErrorResponse(request, response);
                return throwError(response);
            }
        }));
    }
    handleErrorResponse(request, response) {
        const handler = this.getResponseHandler(response);
        if (handler) {
            handler.handleError(request, response);
        }
    }
    /**
     * return the error handler that matches the `HttpResponseStatus` code.
     * If no handler is available, the UNKNOWN handler is returned.
     */
    getResponseHandler(response) {
        const status = response.status;
        let handler = this.handlers.find(h => h.responseStatus === status);
        if (!handler) {
            handler = this.handlers.find(h => h.responseStatus === HttpResponseStatus.UNKNOWN);
        }
        return handler;
    }
};
HttpErrorInterceptor.ctorParameters = () => [
    { type: Array, decorators: [{ type: Inject, args: [HttpErrorHandler,] }] }
];
HttpErrorInterceptor.ɵprov = i0.ɵɵdefineInjectable({ factory: function HttpErrorInterceptor_Factory() { return new HttpErrorInterceptor(i0.ɵɵinject(i1.HttpErrorHandler)); }, token: HttpErrorInterceptor, providedIn: "root" });
HttpErrorInterceptor = __decorate([
    Injectable({ providedIn: 'root' }),
    __param(0, Inject(HttpErrorHandler))
], HttpErrorInterceptor);
export { HttpErrorInterceptor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1lcnJvci5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9odHRwLWludGVyY2VwdG9ycy9odHRwLWVycm9yLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEdBS2xCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDckUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7OztBQUdqRSxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQUMvQixZQUNzQyxRQUE0QjtRQUE1QixhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUVoRSx1REFBdUQ7UUFDdkQsaUNBQWlDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELFNBQVMsQ0FDUCxPQUF5QixFQUN6QixJQUFpQjtRQUVqQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM5QixVQUFVLENBQUMsQ0FBQyxRQUFhLEVBQUUsRUFBRTtZQUMzQixJQUFJLFFBQVEsWUFBWSxpQkFBaUIsRUFBRTtnQkFDekMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDNUMsT0FBTyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDN0I7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVTLG1CQUFtQixDQUMzQixPQUF5QixFQUN6QixRQUEyQjtRQUUzQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEQsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztTQUN4QztJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDTyxrQkFBa0IsQ0FBQyxRQUEyQjtRQUN0RCxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQy9CLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsS0FBSyxNQUFNLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMxQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLEtBQUssa0JBQWtCLENBQUMsT0FBTyxDQUNyRCxDQUFDO1NBQ0g7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0NBQ0YsQ0FBQTs7d0NBN0NJLE1BQU0sU0FBQyxnQkFBZ0I7OztBQUZmLG9CQUFvQjtJQURoQyxVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7SUFHOUIsV0FBQSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtHQUZoQixvQkFBb0IsQ0ErQ2hDO1NBL0NZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEh0dHBFcnJvclJlc3BvbnNlLFxuICBIdHRwRXZlbnQsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBSZXF1ZXN0LFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBIdHRwUmVzcG9uc2VTdGF0dXMgfSBmcm9tICcuLi9tb2RlbHMvcmVzcG9uc2Utc3RhdHVzLm1vZGVsJztcbmltcG9ydCB7IEh0dHBFcnJvckhhbmRsZXIgfSBmcm9tICcuL2hhbmRsZXJzL2h0dHAtZXJyb3IuaGFuZGxlcic7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgSHR0cEVycm9ySW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KEh0dHBFcnJvckhhbmRsZXIpIHByb3RlY3RlZCBoYW5kbGVyczogSHR0cEVycm9ySGFuZGxlcltdXG4gICkge1xuICAgIC8vIFdlIHJldmVyc2UgdGhlIGhhbmRsZXJzIHRvIGFsbG93IGZvciBjdXN0b20gaGFuZGxlcnNcbiAgICAvLyB0aGF0IHJlcGxhY2Ugc3RhbmRhcmQgaGFuZGxlcnNcbiAgICB0aGlzLmhhbmRsZXJzLnJldmVyc2UoKTtcbiAgfVxuXG4gIGludGVyY2VwdChcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yUmVzcG9uc2UocmVxdWVzdCwgcmVzcG9uc2UpO1xuICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGhhbmRsZUVycm9yUmVzcG9uc2UoXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICByZXNwb25zZTogSHR0cEVycm9yUmVzcG9uc2VcbiAgKTogdm9pZCB7XG4gICAgY29uc3QgaGFuZGxlciA9IHRoaXMuZ2V0UmVzcG9uc2VIYW5kbGVyKHJlc3BvbnNlKTtcbiAgICBpZiAoaGFuZGxlcikge1xuICAgICAgaGFuZGxlci5oYW5kbGVFcnJvcihyZXF1ZXN0LCByZXNwb25zZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybiB0aGUgZXJyb3IgaGFuZGxlciB0aGF0IG1hdGNoZXMgdGhlIGBIdHRwUmVzcG9uc2VTdGF0dXNgIGNvZGUuXG4gICAqIElmIG5vIGhhbmRsZXIgaXMgYXZhaWxhYmxlLCB0aGUgVU5LTk9XTiBoYW5kbGVyIGlzIHJldHVybmVkLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldFJlc3BvbnNlSGFuZGxlcihyZXNwb25zZTogSHR0cEVycm9yUmVzcG9uc2UpOiBIdHRwRXJyb3JIYW5kbGVyIHtcbiAgICBjb25zdCBzdGF0dXMgPSByZXNwb25zZS5zdGF0dXM7XG4gICAgbGV0IGhhbmRsZXIgPSB0aGlzLmhhbmRsZXJzLmZpbmQoaCA9PiBoLnJlc3BvbnNlU3RhdHVzID09PSBzdGF0dXMpO1xuICAgIGlmICghaGFuZGxlcikge1xuICAgICAgaGFuZGxlciA9IHRoaXMuaGFuZGxlcnMuZmluZChcbiAgICAgICAgaCA9PiBoLnJlc3BvbnNlU3RhdHVzID09PSBIdHRwUmVzcG9uc2VTdGF0dXMuVU5LTk9XTlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGhhbmRsZXI7XG4gIH1cbn1cbiJdfQ==