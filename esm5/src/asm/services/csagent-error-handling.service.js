import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { GlobalMessageService, GlobalMessageType, } from '../../global-message/index';
import { AsmAuthService } from '../facade/asm-auth.service';
import * as i0 from "@angular/core";
import * as i1 from "../facade/asm-auth.service";
import * as i2 from "../../global-message/facade/global-message.service";
var CustomerSupportAgentErrorHandlingService = /** @class */ (function () {
    function CustomerSupportAgentErrorHandlingService(asmAuthService, globalMessageService) {
        this.asmAuthService = asmAuthService;
        this.globalMessageService = globalMessageService;
    }
    CustomerSupportAgentErrorHandlingService.prototype.terminateCustomerSupportAgentExpiredSession = function () {
        this.asmAuthService.logoutCustomerSupportAgent();
        this.globalMessageService.add({
            key: 'asm.csagentTokenExpired',
        }, GlobalMessageType.MSG_TYPE_ERROR);
    };
    CustomerSupportAgentErrorHandlingService.ctorParameters = function () { return [
        { type: AsmAuthService },
        { type: GlobalMessageService }
    ]; };
    CustomerSupportAgentErrorHandlingService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CustomerSupportAgentErrorHandlingService_Factory() { return new CustomerSupportAgentErrorHandlingService(i0.ɵɵinject(i1.AsmAuthService), i0.ɵɵinject(i2.GlobalMessageService)); }, token: CustomerSupportAgentErrorHandlingService, providedIn: "root" });
    CustomerSupportAgentErrorHandlingService = __decorate([
        Injectable({ providedIn: 'root' })
    ], CustomerSupportAgentErrorHandlingService);
    return CustomerSupportAgentErrorHandlingService;
}());
export { CustomerSupportAgentErrorHandlingService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NhZ2VudC1lcnJvci1oYW5kbGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2FzbS9zZXJ2aWNlcy9jc2FnZW50LWVycm9yLWhhbmRsaW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixpQkFBaUIsR0FDbEIsTUFBTSw0QkFBNEIsQ0FBQztBQUNwQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7QUFHNUQ7SUFDRSxrREFDWSxjQUE4QixFQUM5QixvQkFBMEM7UUFEMUMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDbkQsQ0FBQztJQUVKLDhGQUEyQyxHQUEzQztRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztRQUNqRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUMzQjtZQUNFLEdBQUcsRUFBRSx5QkFBeUI7U0FDL0IsRUFDRCxpQkFBaUIsQ0FBQyxjQUFjLENBQ2pDLENBQUM7SUFDSixDQUFDOztnQkFaMkIsY0FBYztnQkFDUixvQkFBb0I7OztJQUgzQyx3Q0FBd0M7UUFEcEQsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO09BQ3RCLHdDQUF3QyxDQWVwRDttREF2QkQ7Q0F1QkMsQUFmRCxJQWVDO1NBZlksd0NBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxufSBmcm9tICcuLi8uLi9nbG9iYWwtbWVzc2FnZS9pbmRleCc7XG5pbXBvcnQgeyBBc21BdXRoU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9hc20tYXV0aC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBDdXN0b21lclN1cHBvcnRBZ2VudEVycm9ySGFuZGxpbmdTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGFzbUF1dGhTZXJ2aWNlOiBBc21BdXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlXG4gICkge31cblxuICB0ZXJtaW5hdGVDdXN0b21lclN1cHBvcnRBZ2VudEV4cGlyZWRTZXNzaW9uKCk6IHZvaWQge1xuICAgIHRoaXMuYXNtQXV0aFNlcnZpY2UubG9nb3V0Q3VzdG9tZXJTdXBwb3J0QWdlbnQoKTtcbiAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgIHtcbiAgICAgICAga2V5OiAnYXNtLmNzYWdlbnRUb2tlbkV4cGlyZWQnLFxuICAgICAgfSxcbiAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SXG4gICAgKTtcbiAgfVxufVxuIl19