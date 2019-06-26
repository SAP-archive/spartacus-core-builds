/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, isDevMode } from '@angular/core';
import { GlobalMessageService } from '../../facade/global-message.service';
import { HttpResponseStatus } from '../../models/response-status.model';
import { HttpErrorHandler } from './http-error.handler';
import * as i0 from "@angular/core";
import * as i1 from "../../facade/global-message.service";
export class UnknownErrorHandler extends HttpErrorHandler {
    /**
     * @param {?} globalMessageService
     */
    constructor(globalMessageService) {
        super(globalMessageService);
        this.globalMessageService = globalMessageService;
        this.responseStatus = HttpResponseStatus.UNKNOWN;
    }
    /**
     * @return {?}
     */
    handleError() {
        if (isDevMode()) {
            console.warn(`Unknown http response error: ${this.responseStatus}`);
        }
    }
}
UnknownErrorHandler.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
UnknownErrorHandler.ctorParameters = () => [
    { type: GlobalMessageService }
];
/** @nocollapse */ UnknownErrorHandler.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UnknownErrorHandler_Factory() { return new UnknownErrorHandler(i0.ɵɵinject(i1.GlobalMessageService)); }, token: UnknownErrorHandler, providedIn: "root" });
if (false) {
    /** @type {?} */
    UnknownErrorHandler.prototype.responseStatus;
    /**
     * @type {?}
     * @protected
     */
    UnknownErrorHandler.prototype.globalMessageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5rbm93bi1lcnJvci5oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2dsb2JhbC1tZXNzYWdlL2h0dHAtaW50ZXJjZXB0b3JzL2hhbmRsZXJzL3Vua25vd24tZXJyb3IuaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQUt4RCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsZ0JBQWdCOzs7O0lBQ3ZELFlBQXNCLG9CQUEwQztRQUM5RCxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQURSLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFHaEUsbUJBQWMsR0FBRyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7SUFENUMsQ0FBQzs7OztJQUdELFdBQVc7UUFDVCxJQUFJLFNBQVMsRUFBRSxFQUFFO1lBQ2YsT0FBTyxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7U0FDckU7SUFDSCxDQUFDOzs7WUFiRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFOUSxvQkFBb0I7Ozs7O0lBVzNCLDZDQUE0Qzs7Ozs7SUFIaEMsbURBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgaXNEZXZNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlU2VydmljZSB9IGZyb20gJy4uLy4uL2ZhY2FkZS9nbG9iYWwtbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBSZXNwb25zZVN0YXR1cyB9IGZyb20gJy4uLy4uL21vZGVscy9yZXNwb25zZS1zdGF0dXMubW9kZWwnO1xuaW1wb3J0IHsgSHR0cEVycm9ySGFuZGxlciB9IGZyb20gJy4vaHR0cC1lcnJvci5oYW5kbGVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFVua25vd25FcnJvckhhbmRsZXIgZXh0ZW5kcyBIdHRwRXJyb3JIYW5kbGVyIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSkge1xuICAgIHN1cGVyKGdsb2JhbE1lc3NhZ2VTZXJ2aWNlKTtcbiAgfVxuICByZXNwb25zZVN0YXR1cyA9IEh0dHBSZXNwb25zZVN0YXR1cy5VTktOT1dOO1xuXG4gIGhhbmRsZUVycm9yKCkge1xuICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgY29uc29sZS53YXJuKGBVbmtub3duIGh0dHAgcmVzcG9uc2UgZXJyb3I6ICR7dGhpcy5yZXNwb25zZVN0YXR1c31gKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==