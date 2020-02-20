import { __decorate } from "tslib";
import { GlobalMessageService } from '../../facade/global-message.service';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../facade/global-message.service";
var HttpErrorHandler = /** @class */ (function () {
    function HttpErrorHandler(globalMessageService) {
        this.globalMessageService = globalMessageService;
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1lcnJvci5oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2dsb2JhbC1tZXNzYWdlL2h0dHAtaW50ZXJjZXB0b3JzL2hhbmRsZXJzL2h0dHAtZXJyb3IuaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBSzNDO0lBQ0UsMEJBQXNCLG9CQUEwQztRQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQUcsQ0FBQzs7Z0JBQXhCLG9CQUFvQjs7O0lBRDVDLGdCQUFnQjtRQUhyQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ29CLGdCQUFnQixDQW1CckM7MkJBMUJEO0NBMEJDLEFBbkJELElBbUJDO1NBbkJxQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlU2VydmljZSB9IGZyb20gJy4uLy4uL2ZhY2FkZS9nbG9iYWwtbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEh0dHBFcnJvckhhbmRsZXIge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlKSB7fVxuXG4gIC8qKlxuICAgKiBUaGUgaHR0cCByZXNwb25zZSBzdGF0dXMgbnVtYmVyIHdoaWNoIGlzIGhhbmRsZWQgYnkgdGhpcyBoYW5kbGVyLlxuICAgKiBJbXBsZW1lbnRhdGlvbnMgY2FuIHNldCB0aGUgcmVzcG9uc2Ugc3RhdHVzIG51bWJlciwgaS5lLiA0MDQsIHNvIHRoYXRcbiAgICogdGhlIGhhbmRsZXIgY2FuIGJlIGZvdW5kIGJ5IHRoZSBlcnJvciBpbnRlcmNlcHRvci5cbiAgICovXG4gIGFic3RyYWN0IHJlc3BvbnNlU3RhdHVzOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdGhlIGVycm9yIHJlc3BvbnNlIGZvciB0aGUgcmVzcG9zZSBzdGF0dXMgdGhhdCBpcyByZWdpc3RlciBmb3IgdGhlIGhhbmRsZXJcbiAgICogQHBhcmFtIHsgSHR0cFJlcXVlc3Q8YW55PiB9IHJlcXVlc3QgOiBodHRwIHJlcXVlc3RcbiAgICogQHBhcmFtIHsgSHR0cEVycm9yUmVzcG9uc2UgfSBlcnJvclJlc3BvbnNlIDogSHR0cCBlcnJvciByZXNwb25zZVxuICAgKi9cbiAgYWJzdHJhY3QgaGFuZGxlRXJyb3IoXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBlcnJvclJlc3BvbnNlOiBIdHRwRXJyb3JSZXNwb25zZVxuICApOiB2b2lkO1xufVxuIl19