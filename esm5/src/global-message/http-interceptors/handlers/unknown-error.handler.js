/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { GlobalMessageService } from '../../facade/global-message.service';
import { ServerConfig } from '../../../config/server-config/server-config';
import { HttpResponseStatus } from '../../models/response-status.model';
import { HttpErrorHandler } from './http-error.handler';
import * as i0 from "@angular/core";
import * as i1 from "../../../config/server-config/server-config";
import * as i2 from "../../facade/global-message.service";
var UnknownErrorHandler = /** @class */ (function (_super) {
    tslib_1.__extends(UnknownErrorHandler, _super);
    function UnknownErrorHandler(config, globalMessageService) {
        var _this = _super.call(this, globalMessageService) || this;
        _this.config = config;
        _this.globalMessageService = globalMessageService;
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
        if (!this.config.production) {
            console.warn("Unknown http response error: " + this.responseStatus);
        }
    };
    UnknownErrorHandler.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    UnknownErrorHandler.ctorParameters = function () { return [
        { type: ServerConfig },
        { type: GlobalMessageService }
    ]; };
    /** @nocollapse */ UnknownErrorHandler.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UnknownErrorHandler_Factory() { return new UnknownErrorHandler(i0.ɵɵinject(i1.ServerConfig), i0.ɵɵinject(i2.GlobalMessageService)); }, token: UnknownErrorHandler, providedIn: "root" });
    return UnknownErrorHandler;
}(HttpErrorHandler));
export { UnknownErrorHandler };
if (false) {
    /** @type {?} */
    UnknownErrorHandler.prototype.responseStatus;
    /**
     * @type {?}
     * @private
     */
    UnknownErrorHandler.prototype.config;
    /**
     * @type {?}
     * @protected
     */
    UnknownErrorHandler.prototype.globalMessageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5rbm93bi1lcnJvci5oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2dsb2JhbC1tZXNzYWdlL2h0dHAtaW50ZXJjZXB0b3JzL2hhbmRsZXJzL3Vua25vd24tZXJyb3IuaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O0FBRXhEO0lBR3lDLCtDQUFnQjtJQUN2RCw2QkFDVSxNQUFvQixFQUNsQixvQkFBMEM7UUFGdEQsWUFJRSxrQkFBTSxvQkFBb0IsQ0FBQyxTQUM1QjtRQUpTLFlBQU0sR0FBTixNQUFNLENBQWM7UUFDbEIsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUl0RCxvQkFBYyxHQUFHLGtCQUFrQixDQUFDLE9BQU8sQ0FBQzs7SUFENUMsQ0FBQzs7OztJQUdELHlDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUMzQixPQUFPLENBQUMsSUFBSSxDQUFDLGtDQUFnQyxJQUFJLENBQUMsY0FBZ0IsQ0FBQyxDQUFDO1NBQ3JFO0lBQ0gsQ0FBQzs7Z0JBaEJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTlEsWUFBWTtnQkFEWixvQkFBb0I7Ozs4QkFEN0I7Q0F1QkMsQUFqQkQsQ0FHeUMsZ0JBQWdCLEdBY3hEO1NBZFksbUJBQW1COzs7SUFPOUIsNkNBQTRDOzs7OztJQUwxQyxxQ0FBNEI7Ozs7O0lBQzVCLG1EQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZmFjYWRlL2dsb2JhbC1tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2VydmVyQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL3NlcnZlci1jb25maWcvc2VydmVyLWNvbmZpZyc7XG5pbXBvcnQgeyBIdHRwUmVzcG9uc2VTdGF0dXMgfSBmcm9tICcuLi8uLi9tb2RlbHMvcmVzcG9uc2Utc3RhdHVzLm1vZGVsJztcbmltcG9ydCB7IEh0dHBFcnJvckhhbmRsZXIgfSBmcm9tICcuL2h0dHAtZXJyb3IuaGFuZGxlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBVbmtub3duRXJyb3JIYW5kbGVyIGV4dGVuZHMgSHR0cEVycm9ySGFuZGxlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlnOiBTZXJ2ZXJDb25maWcsXG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZVxuICApIHtcbiAgICBzdXBlcihnbG9iYWxNZXNzYWdlU2VydmljZSk7XG4gIH1cbiAgcmVzcG9uc2VTdGF0dXMgPSBIdHRwUmVzcG9uc2VTdGF0dXMuVU5LTk9XTjtcblxuICBoYW5kbGVFcnJvcigpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnLnByb2R1Y3Rpb24pIHtcbiAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBodHRwIHJlc3BvbnNlIGVycm9yOiAke3RoaXMucmVzcG9uc2VTdGF0dXN9YCk7XG4gICAgfVxuICB9XG59XG4iXX0=