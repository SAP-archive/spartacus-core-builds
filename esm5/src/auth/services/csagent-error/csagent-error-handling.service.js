/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { GlobalMessageService, GlobalMessageType, } from '../../../global-message/index';
import { AuthService } from '../../facade/auth.service';
var CustomerSupportAgentErrorHandlingService = /** @class */ (function () {
    function CustomerSupportAgentErrorHandlingService(authService, globalMessageService) {
        this.authService = authService;
        this.globalMessageService = globalMessageService;
    }
    /**
     * @return {?}
     */
    CustomerSupportAgentErrorHandlingService.prototype.terminateCustomerSupportAgentExpiredSession = /**
     * @return {?}
     */
    function () {
        this.authService.logoutCustomerSupportAgent();
        this.globalMessageService.add({
            key: 'asm.csagentTokenExpired',
        }, GlobalMessageType.MSG_TYPE_ERROR);
    };
    CustomerSupportAgentErrorHandlingService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CustomerSupportAgentErrorHandlingService.ctorParameters = function () { return [
        { type: AuthService },
        { type: GlobalMessageService }
    ]; };
    return CustomerSupportAgentErrorHandlingService;
}());
export { CustomerSupportAgentErrorHandlingService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CustomerSupportAgentErrorHandlingService.prototype.authService;
    /**
     * @type {?}
     * @protected
     */
    CustomerSupportAgentErrorHandlingService.prototype.globalMessageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NhZ2VudC1lcnJvci1oYW5kbGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2F1dGgvc2VydmljZXMvY3NhZ2VudC1lcnJvci9jc2FnZW50LWVycm9yLWhhbmRsaW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixpQkFBaUIsR0FDbEIsTUFBTSwrQkFBK0IsQ0FBQztBQUN2QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFeEQ7SUFFRSxrREFDWSxXQUF3QixFQUN4QixvQkFBMEM7UUFEMUMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUNuRCxDQUFDOzs7O0lBRUosOEZBQTJDOzs7SUFBM0M7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLDBCQUEwQixFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FDM0I7WUFDRSxHQUFHLEVBQUUseUJBQXlCO1NBQy9CLEVBQ0QsaUJBQWlCLENBQUMsY0FBYyxDQUNqQyxDQUFDO0lBQ0osQ0FBQzs7Z0JBZkYsVUFBVTs7OztnQkFGRixXQUFXO2dCQUhsQixvQkFBb0I7O0lBcUJ0QiwrQ0FBQztDQUFBLEFBaEJELElBZ0JDO1NBZlksd0NBQXdDOzs7Ozs7SUFFakQsK0RBQWtDOzs7OztJQUNsQyx3RUFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG59IGZyb20gJy4uLy4uLy4uL2dsb2JhbC1tZXNzYWdlL2luZGV4JztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZmFjYWRlL2F1dGguc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDdXN0b21lclN1cHBvcnRBZ2VudEVycm9ySGFuZGxpbmdTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlXG4gICkge31cblxuICB0ZXJtaW5hdGVDdXN0b21lclN1cHBvcnRBZ2VudEV4cGlyZWRTZXNzaW9uKCk6IHZvaWQge1xuICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nb3V0Q3VzdG9tZXJTdXBwb3J0QWdlbnQoKTtcbiAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgIHtcbiAgICAgICAga2V5OiAnYXNtLmNzYWdlbnRUb2tlbkV4cGlyZWQnLFxuICAgICAgfSxcbiAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SXG4gICAgKTtcbiAgfVxufVxuIl19