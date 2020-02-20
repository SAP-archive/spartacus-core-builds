import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { HttpResponseStatus } from '../../models/response-status.model';
import { HttpErrorHandler } from './http-error.handler';
import * as i0 from "@angular/core";
import * as i1 from "../../facade/global-message.service";
var NotFoundHandler = /** @class */ (function (_super) {
    __extends(NotFoundHandler, _super);
    function NotFoundHandler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.responseStatus = HttpResponseStatus.NOT_FOUND;
        return _this;
    }
    // empty error handler to avoid we fallabck to the unknown error handler
    NotFoundHandler.prototype.handleError = function () { };
    NotFoundHandler.ɵprov = i0.ɵɵdefineInjectable({ factory: function NotFoundHandler_Factory() { return new NotFoundHandler(i0.ɵɵinject(i1.GlobalMessageService)); }, token: NotFoundHandler, providedIn: "root" });
    NotFoundHandler = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], NotFoundHandler);
    return NotFoundHandler;
}(HttpErrorHandler));
export { NotFoundHandler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWZvdW5kLmhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvZ2xvYmFsLW1lc3NhZ2UvaHR0cC1pbnRlcmNlcHRvcnMvaGFuZGxlcnMvbm90LWZvdW5kLmhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQUt4RDtJQUFxQyxtQ0FBZ0I7SUFBckQ7UUFBQSxxRUFLQztRQUpDLG9CQUFjLEdBQUcsa0JBQWtCLENBQUMsU0FBUyxDQUFDOztLQUkvQztJQUZDLHdFQUF3RTtJQUN4RSxxQ0FBVyxHQUFYLGNBQXFCLENBQUM7O0lBSlgsZUFBZTtRQUgzQixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csZUFBZSxDQUszQjswQkFaRDtDQVlDLEFBTEQsQ0FBcUMsZ0JBQWdCLEdBS3BEO1NBTFksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBSZXNwb25zZVN0YXR1cyB9IGZyb20gJy4uLy4uL21vZGVscy9yZXNwb25zZS1zdGF0dXMubW9kZWwnO1xuaW1wb3J0IHsgSHR0cEVycm9ySGFuZGxlciB9IGZyb20gJy4vaHR0cC1lcnJvci5oYW5kbGVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE5vdEZvdW5kSGFuZGxlciBleHRlbmRzIEh0dHBFcnJvckhhbmRsZXIge1xuICByZXNwb25zZVN0YXR1cyA9IEh0dHBSZXNwb25zZVN0YXR1cy5OT1RfRk9VTkQ7XG5cbiAgLy8gZW1wdHkgZXJyb3IgaGFuZGxlciB0byBhdm9pZCB3ZSBmYWxsYWJjayB0byB0aGUgdW5rbm93biBlcnJvciBoYW5kbGVyXG4gIGhhbmRsZUVycm9yKCk6IHZvaWQge31cbn1cbiJdfQ==