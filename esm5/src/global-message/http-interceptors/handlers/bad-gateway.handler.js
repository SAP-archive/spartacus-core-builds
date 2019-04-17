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
var BadGatewayHandler = /** @class */ (function (_super) {
    tslib_1.__extends(BadGatewayHandler, _super);
    function BadGatewayHandler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.responseStatus = HttpResponseStatus.BAD_GATEWAY;
        return _this;
    }
    /**
     * @return {?}
     */
    BadGatewayHandler.prototype.handleError = /**
     * @return {?}
     */
    function () {
        this.globalMessageService.add({
            type: GlobalMessageType.MSG_TYPE_ERROR,
            text: 'A server error occurred. Please try again later.',
        });
    };
    BadGatewayHandler.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */ BadGatewayHandler.ngInjectableDef = i0.defineInjectable({ factory: function BadGatewayHandler_Factory() { return new BadGatewayHandler(i0.inject(i1.GlobalMessageService)); }, token: BadGatewayHandler, providedIn: "root" });
    return BadGatewayHandler;
}(HttpErrorHandler));
export { BadGatewayHandler };
if (false) {
    /** @type {?} */
    BadGatewayHandler.prototype.responseStatus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkLWdhdGV3YXkuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9odHRwLWludGVyY2VwdG9ycy9oYW5kbGVycy9iYWQtZ2F0ZXdheS5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7O0FBRXhFO0lBR3VDLDZDQUFnQjtJQUh2RDtRQUFBLHFFQVlDO1FBUkMsb0JBQWMsR0FBRyxrQkFBa0IsQ0FBQyxXQUFXLENBQUM7O0tBUWpEOzs7O0lBTkMsdUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQztZQUM1QixJQUFJLEVBQUUsaUJBQWlCLENBQUMsY0FBYztZQUN0QyxJQUFJLEVBQUUsa0RBQWtEO1NBQ3pELENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQVhGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs0QkFQRDtDQWlCQyxBQVpELENBR3VDLGdCQUFnQixHQVN0RDtTQVRZLGlCQUFpQjs7O0lBQzVCLDJDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBFcnJvckhhbmRsZXIgfSBmcm9tICcuL2h0dHAtZXJyb3IuaGFuZGxlcic7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlVHlwZSB9IGZyb20gJy4uLy4uL21vZGVscy9nbG9iYWwtbWVzc2FnZS5tb2RlbCc7XG5pbXBvcnQgeyBIdHRwUmVzcG9uc2VTdGF0dXMgfSBmcm9tICcuLi8uLi9tb2RlbHMvcmVzcG9uc2Utc3RhdHVzLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEJhZEdhdGV3YXlIYW5kbGVyIGV4dGVuZHMgSHR0cEVycm9ySGFuZGxlciB7XG4gIHJlc3BvbnNlU3RhdHVzID0gSHR0cFJlc3BvbnNlU3RhdHVzLkJBRF9HQVRFV0FZO1xuXG4gIGhhbmRsZUVycm9yKCkge1xuICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKHtcbiAgICAgIHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SLFxuICAgICAgdGV4dDogJ0Egc2VydmVyIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==