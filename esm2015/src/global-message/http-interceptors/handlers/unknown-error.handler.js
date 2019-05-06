/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpErrorHandler } from './http-error.handler';
import { GlobalMessageType } from '../../models/global-message.model';
import { HttpResponseStatus } from '../../models/response-status.model';
import * as i0 from "@angular/core";
import * as i1 from "../../facade/global-message.service";
export class UnknownErrorHandler extends HttpErrorHandler {
    constructor() {
        super(...arguments);
        this.responseStatus = HttpResponseStatus.UNKNOWN;
    }
    /**
     * @return {?}
     */
    handleError() {
        this.globalMessageService.add('An unknown error occured', GlobalMessageType.MSG_TYPE_ERROR);
    }
}
UnknownErrorHandler.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ UnknownErrorHandler.ngInjectableDef = i0.defineInjectable({ factory: function UnknownErrorHandler_Factory() { return new UnknownErrorHandler(i0.inject(i1.GlobalMessageService)); }, token: UnknownErrorHandler, providedIn: "root" });
if (false) {
    /** @type {?} */
    UnknownErrorHandler.prototype.responseStatus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5rbm93bi1lcnJvci5oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2dsb2JhbC1tZXNzYWdlL2h0dHAtaW50ZXJjZXB0b3JzL2hhbmRsZXJzL3Vua25vd24tZXJyb3IuaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7O0FBS3hFLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxnQkFBZ0I7SUFIekQ7O1FBSUUsbUJBQWMsR0FBRyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7S0FRN0M7Ozs7SUFOQyxXQUFXO1FBQ1QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FDM0IsMEJBQTBCLEVBQzFCLGlCQUFpQixDQUFDLGNBQWMsQ0FDakMsQ0FBQztJQUNKLENBQUM7OztZQVhGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7SUFFQyw2Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwRXJyb3JIYW5kbGVyIH0gZnJvbSAnLi9odHRwLWVycm9yLmhhbmRsZXInO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvZ2xvYmFsLW1lc3NhZ2UubW9kZWwnO1xuaW1wb3J0IHsgSHR0cFJlc3BvbnNlU3RhdHVzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Jlc3BvbnNlLXN0YXR1cy5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBVbmtub3duRXJyb3JIYW5kbGVyIGV4dGVuZHMgSHR0cEVycm9ySGFuZGxlciB7XG4gIHJlc3BvbnNlU3RhdHVzID0gSHR0cFJlc3BvbnNlU3RhdHVzLlVOS05PV047XG5cbiAgaGFuZGxlRXJyb3IoKSB7XG4gICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAnQW4gdW5rbm93biBlcnJvciBvY2N1cmVkJyxcbiAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SXG4gICAgKTtcbiAgfVxufVxuIl19