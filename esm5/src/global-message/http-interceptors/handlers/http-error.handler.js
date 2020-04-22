import { __decorate } from "tslib";
import { GlobalMessageService } from '../../facade/global-message.service';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../facade/global-message.service";
var HttpErrorHandler = /** @class */ (function () {
    function HttpErrorHandler(globalMessageService) {
        this.globalMessageService = globalMessageService;
    }
    /**
     * Error handlers are matched by the error `responseStatus` (i.e. 404). On top of the matching status
     * a priority can be added to distinguish multiple handles for the same response status.
     */
    HttpErrorHandler.prototype.hasMatch = function (errorResponse) {
        return errorResponse.status === this.responseStatus;
    };
    HttpErrorHandler.ctorParameters = function () { return [
        { type: GlobalMessageService }
    ]; };
    HttpErrorHandler.ɵprov = i0.ɵɵdefineInjectable({ factory: function HttpErrorHandler_Factory() { return new HttpErrorHandler(i0.ɵɵinject(i1.GlobalMessageService)); }, token: HttpErrorHandler, providedIn: "root" });
    HttpErrorHandler = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], HttpErrorHandler);
    return HttpErrorHandler;
}());
export { HttpErrorHandler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1lcnJvci5oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2dsb2JhbC1tZXNzYWdlL2h0dHAtaW50ZXJjZXB0b3JzL2hhbmRsZXJzL2h0dHAtZXJyb3IuaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBTTNDO0lBQ0UsMEJBQXNCLG9CQUEwQztRQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQUcsQ0FBQztJQW1CcEU7OztPQUdHO0lBQ0gsbUNBQVEsR0FBUixVQUFTLGFBQWdDO1FBQ3ZDLE9BQU8sYUFBYSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQ3RELENBQUM7O2dCQXpCMkMsb0JBQW9COzs7SUFENUMsZ0JBQWdCO1FBSHJDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDb0IsZ0JBQWdCLENBNkJyQzsyQkFyQ0Q7Q0FxQ0MsQUE3QkQsSUE2QkM7U0E3QnFCLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZmFjYWRlL2dsb2JhbC1tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBwbGljYWJsZSwgUHJpb3JpdHkgfSBmcm9tICcuLi8uLi8uLi91dGlsL2FwcGxpY2FibGUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSHR0cEVycm9ySGFuZGxlciBpbXBsZW1lbnRzIEFwcGxpY2FibGUge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlKSB7fVxuXG4gIC8qKlxuICAgKiBUaGUgaHR0cCByZXNwb25zZSBzdGF0dXMgbnVtYmVyIHdoaWNoIGlzIGhhbmRsZWQgYnkgdGhpcyBoYW5kbGVyLlxuICAgKiBJbXBsZW1lbnRhdGlvbnMgY2FuIHNldCB0aGUgcmVzcG9uc2Ugc3RhdHVzIG51bWJlciwgaS5lLiA0MDQsIHNvIHRoYXRcbiAgICogdGhlIGhhbmRsZXIgY2FuIGJlIGZvdW5kIGJ5IHRoZSBlcnJvciBpbnRlcmNlcHRvci5cbiAgICovXG4gIHJlc3BvbnNlU3RhdHVzPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHRoZSBlcnJvciByZXNwb25zZSBmb3IgdGhlIHJlc3Bvc2Ugc3RhdHVzIHRoYXQgaXMgcmVnaXN0ZXIgZm9yIHRoZSBoYW5kbGVyXG4gICAqIEBwYXJhbSB7IEh0dHBSZXF1ZXN0PGFueT4gfSByZXF1ZXN0IDogaHR0cCByZXF1ZXN0XG4gICAqIEBwYXJhbSB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZXJyb3JSZXNwb25zZSA6IEh0dHAgZXJyb3IgcmVzcG9uc2VcbiAgICovXG4gIGFic3RyYWN0IGhhbmRsZUVycm9yKFxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgZXJyb3JSZXNwb25zZTogSHR0cEVycm9yUmVzcG9uc2VcbiAgKTogdm9pZDtcblxuICAvKipcbiAgICogRXJyb3IgaGFuZGxlcnMgYXJlIG1hdGNoZWQgYnkgdGhlIGVycm9yIGByZXNwb25zZVN0YXR1c2AgKGkuZS4gNDA0KS4gT24gdG9wIG9mIHRoZSBtYXRjaGluZyBzdGF0dXNcbiAgICogYSBwcmlvcml0eSBjYW4gYmUgYWRkZWQgdG8gZGlzdGluZ3Vpc2ggbXVsdGlwbGUgaGFuZGxlcyBmb3IgdGhlIHNhbWUgcmVzcG9uc2Ugc3RhdHVzLlxuICAgKi9cbiAgaGFzTWF0Y2goZXJyb3JSZXNwb25zZTogSHR0cEVycm9yUmVzcG9uc2UpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZXJyb3JSZXNwb25zZS5zdGF0dXMgPT09IHRoaXMucmVzcG9uc2VTdGF0dXM7XG4gIH1cblxuICBhYnN0cmFjdCBnZXRQcmlvcml0eT8oKTogUHJpb3JpdHk7XG59XG4iXX0=