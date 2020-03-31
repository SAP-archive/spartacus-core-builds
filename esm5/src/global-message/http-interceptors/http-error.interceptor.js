import { __decorate, __param } from "tslib";
import { HttpErrorResponse, } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpResponseStatus } from '../models/response-status.model';
import { HttpErrorHandler } from './handlers/http-error.handler';
import * as i0 from "@angular/core";
import * as i1 from "./handlers/http-error.handler";
var HttpErrorInterceptor = /** @class */ (function () {
    function HttpErrorInterceptor(handlers) {
        this.handlers = handlers;
        // We reverse the handlers to allow for custom handlers
        // that replace standard handlers
        this.handlers.reverse();
    }
    HttpErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(catchError(function (response) {
            if (response instanceof HttpErrorResponse) {
                _this.handleErrorResponse(request, response);
                return throwError(response);
            }
        }));
    };
    HttpErrorInterceptor.prototype.handleErrorResponse = function (request, response) {
        var handler = this.getResponseHandler(response);
        if (handler) {
            handler.handleError(request, response);
        }
    };
    /**
     * return the error handler that matches the `HttpResponseStatus` code.
     * If no handler is available, the UNKNOWN handler is returned.
     */
    HttpErrorInterceptor.prototype.getResponseHandler = function (response) {
        var status = response.status;
        var handler = this.handlers.find(function (h) { return h.responseStatus === status; });
        if (!handler) {
            handler = this.handlers.find(function (h) { return h.responseStatus === HttpResponseStatus.UNKNOWN; });
        }
        return handler;
    };
    HttpErrorInterceptor.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: Inject, args: [HttpErrorHandler,] }] }
    ]; };
    HttpErrorInterceptor.ɵprov = i0.ɵɵdefineInjectable({ factory: function HttpErrorInterceptor_Factory() { return new HttpErrorInterceptor(i0.ɵɵinject(i1.HttpErrorHandler)); }, token: HttpErrorInterceptor, providedIn: "root" });
    HttpErrorInterceptor = __decorate([
        Injectable({ providedIn: 'root' }),
        __param(0, Inject(HttpErrorHandler))
    ], HttpErrorInterceptor);
    return HttpErrorInterceptor;
}());
export { HttpErrorInterceptor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1lcnJvci5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9odHRwLWludGVyY2VwdG9ycy9odHRwLWVycm9yLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEdBS2xCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDckUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7OztBQUdqRTtJQUNFLDhCQUNzQyxRQUE0QjtRQUE1QixhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUVoRSx1REFBdUQ7UUFDdkQsaUNBQWlDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELHdDQUFTLEdBQVQsVUFDRSxPQUF5QixFQUN6QixJQUFpQjtRQUZuQixpQkFZQztRQVJDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQzlCLFVBQVUsQ0FBQyxVQUFDLFFBQWE7WUFDdkIsSUFBSSxRQUFRLFlBQVksaUJBQWlCLEVBQUU7Z0JBQ3pDLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQzVDLE9BQU8sVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzdCO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFUyxrREFBbUIsR0FBN0IsVUFDRSxPQUF5QixFQUN6QixRQUEyQjtRQUUzQixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEQsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztTQUN4QztJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDTyxpREFBa0IsR0FBNUIsVUFBNkIsUUFBMkI7UUFDdEQsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUMvQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxjQUFjLEtBQUssTUFBTSxFQUEzQixDQUEyQixDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDMUIsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsY0FBYyxLQUFLLGtCQUFrQixDQUFDLE9BQU8sRUFBL0MsQ0FBK0MsQ0FDdkQsQ0FBQztTQUNIO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7NENBNUNFLE1BQU0sU0FBQyxnQkFBZ0I7OztJQUZmLG9CQUFvQjtRQURoQyxVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFHOUIsV0FBQSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtPQUZoQixvQkFBb0IsQ0ErQ2hDOytCQTdERDtDQTZEQyxBQS9DRCxJQStDQztTQS9DWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBIdHRwRXJyb3JSZXNwb25zZSxcbiAgSHR0cEV2ZW50LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwUmVxdWVzdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSHR0cFJlc3BvbnNlU3RhdHVzIH0gZnJvbSAnLi4vbW9kZWxzL3Jlc3BvbnNlLXN0YXR1cy5tb2RlbCc7XG5pbXBvcnQgeyBIdHRwRXJyb3JIYW5kbGVyIH0gZnJvbSAnLi9oYW5kbGVycy9odHRwLWVycm9yLmhhbmRsZXInO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEh0dHBFcnJvckludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChIdHRwRXJyb3JIYW5kbGVyKSBwcm90ZWN0ZWQgaGFuZGxlcnM6IEh0dHBFcnJvckhhbmRsZXJbXVxuICApIHtcbiAgICAvLyBXZSByZXZlcnNlIHRoZSBoYW5kbGVycyB0byBhbGxvdyBmb3IgY3VzdG9tIGhhbmRsZXJzXG4gICAgLy8gdGhhdCByZXBsYWNlIHN0YW5kYXJkIGhhbmRsZXJzXG4gICAgdGhpcy5oYW5kbGVycy5yZXZlcnNlKCk7XG4gIH1cblxuICBpbnRlcmNlcHQoXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZSBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgICAgICAgdGhpcy5oYW5kbGVFcnJvclJlc3BvbnNlKHJlcXVlc3QsIHJlc3BvbnNlKTtcbiAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBoYW5kbGVFcnJvclJlc3BvbnNlKFxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgcmVzcG9uc2U6IEh0dHBFcnJvclJlc3BvbnNlXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmdldFJlc3BvbnNlSGFuZGxlcihyZXNwb25zZSk7XG4gICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgIGhhbmRsZXIuaGFuZGxlRXJyb3IocmVxdWVzdCwgcmVzcG9uc2UpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm4gdGhlIGVycm9yIGhhbmRsZXIgdGhhdCBtYXRjaGVzIHRoZSBgSHR0cFJlc3BvbnNlU3RhdHVzYCBjb2RlLlxuICAgKiBJZiBubyBoYW5kbGVyIGlzIGF2YWlsYWJsZSwgdGhlIFVOS05PV04gaGFuZGxlciBpcyByZXR1cm5lZC5cbiAgICovXG4gIHByb3RlY3RlZCBnZXRSZXNwb25zZUhhbmRsZXIocmVzcG9uc2U6IEh0dHBFcnJvclJlc3BvbnNlKTogSHR0cEVycm9ySGFuZGxlciB7XG4gICAgY29uc3Qgc3RhdHVzID0gcmVzcG9uc2Uuc3RhdHVzO1xuICAgIGxldCBoYW5kbGVyID0gdGhpcy5oYW5kbGVycy5maW5kKChoKSA9PiBoLnJlc3BvbnNlU3RhdHVzID09PSBzdGF0dXMpO1xuICAgIGlmICghaGFuZGxlcikge1xuICAgICAgaGFuZGxlciA9IHRoaXMuaGFuZGxlcnMuZmluZChcbiAgICAgICAgKGgpID0+IGgucmVzcG9uc2VTdGF0dXMgPT09IEh0dHBSZXNwb25zZVN0YXR1cy5VTktOT1dOXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gaGFuZGxlcjtcbiAgfVxufVxuIl19