/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpErrorHandler } from './http-error.handler';
import { GlobalMessageType } from '../../models/global-message.model';
import { HttpResponseStatus } from '../../models/response-status.model';
import * as i0 from "@angular/core";
import * as i1 from "../../facade/global-message.service";
var UnknownErrorHandler = /** @class */ (function (_super) {
    tslib_1.__extends(UnknownErrorHandler, _super);
    function UnknownErrorHandler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.responseStatus = HttpResponseStatus.UNKNOWN;
        return _this;
    }
    /**
     * @return {?}
     */
    UnknownErrorHandler.prototype.handleError = /**
     * @return {?}
     */
    function () {
        this.globalMessageService.add({
            type: GlobalMessageType.MSG_TYPE_ERROR,
            text: 'An unknown error occured',
        });
    };
    UnknownErrorHandler.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */ UnknownErrorHandler.ngInjectableDef = i0.defineInjectable({ factory: function UnknownErrorHandler_Factory() { return new UnknownErrorHandler(i0.inject(i1.GlobalMessageService)); }, token: UnknownErrorHandler, providedIn: "root" });
    return UnknownErrorHandler;
}(HttpErrorHandler));
export { UnknownErrorHandler };
if (false) {
    /** @type {?} */
    UnknownErrorHandler.prototype.responseStatus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5rbm93bi1lcnJvci5oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2dsb2JhbC1tZXNzYWdlL2h0dHAtaW50ZXJjZXB0b3JzL2hhbmRsZXJzL3Vua25vd24tZXJyb3IuaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7OztBQUV4RTtJQUd5QywrQ0FBZ0I7SUFIekQ7UUFBQSxxRUFZQztRQVJDLG9CQUFjLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxDQUFDOztLQVE3Qzs7OztJQU5DLHlDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUM7WUFDNUIsSUFBSSxFQUFFLGlCQUFpQixDQUFDLGNBQWM7WUFDdEMsSUFBSSxFQUFFLDBCQUEwQjtTQUNqQyxDQUFDLENBQUM7SUFDTCxDQUFDOztnQkFYRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OEJBUEQ7Q0FpQkMsQUFaRCxDQUd5QyxnQkFBZ0IsR0FTeEQ7U0FUWSxtQkFBbUI7OztJQUM5Qiw2Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwRXJyb3JIYW5kbGVyIH0gZnJvbSAnLi9odHRwLWVycm9yLmhhbmRsZXInO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvZ2xvYmFsLW1lc3NhZ2UubW9kZWwnO1xuaW1wb3J0IHsgSHR0cFJlc3BvbnNlU3RhdHVzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Jlc3BvbnNlLXN0YXR1cy5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBVbmtub3duRXJyb3JIYW5kbGVyIGV4dGVuZHMgSHR0cEVycm9ySGFuZGxlciB7XG4gIHJlc3BvbnNlU3RhdHVzID0gSHR0cFJlc3BvbnNlU3RhdHVzLlVOS05PV047XG5cbiAgaGFuZGxlRXJyb3IoKSB7XG4gICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoe1xuICAgICAgdHlwZTogR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1IsXG4gICAgICB0ZXh0OiAnQW4gdW5rbm93biBlcnJvciBvY2N1cmVkJyxcbiAgICB9KTtcbiAgfVxufVxuIl19