import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { GlobalMessageService, GlobalMessageType, } from '../../global-message/index';
import { AsmAuthService } from '../facade/asm-auth.service';
import * as i0 from "@angular/core";
import * as i1 from "../facade/asm-auth.service";
import * as i2 from "../../global-message/facade/global-message.service";
let CustomerSupportAgentErrorHandlingService = class CustomerSupportAgentErrorHandlingService {
    constructor(asmAuthService, globalMessageService) {
        this.asmAuthService = asmAuthService;
        this.globalMessageService = globalMessageService;
    }
    terminateCustomerSupportAgentExpiredSession() {
        this.asmAuthService.logoutCustomerSupportAgent();
        this.globalMessageService.add({
            key: 'asm.csagentTokenExpired',
        }, GlobalMessageType.MSG_TYPE_ERROR);
    }
};
CustomerSupportAgentErrorHandlingService.ctorParameters = () => [
    { type: AsmAuthService },
    { type: GlobalMessageService }
];
CustomerSupportAgentErrorHandlingService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CustomerSupportAgentErrorHandlingService_Factory() { return new CustomerSupportAgentErrorHandlingService(i0.ɵɵinject(i1.AsmAuthService), i0.ɵɵinject(i2.GlobalMessageService)); }, token: CustomerSupportAgentErrorHandlingService, providedIn: "root" });
CustomerSupportAgentErrorHandlingService = __decorate([
    Injectable({ providedIn: 'root' })
], CustomerSupportAgentErrorHandlingService);
export { CustomerSupportAgentErrorHandlingService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NhZ2VudC1lcnJvci1oYW5kbGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2FzbS9zZXJ2aWNlcy9jc2FnZW50LWVycm9yLWhhbmRsaW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixpQkFBaUIsR0FDbEIsTUFBTSw0QkFBNEIsQ0FBQztBQUNwQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7QUFHNUQsSUFBYSx3Q0FBd0MsR0FBckQsTUFBYSx3Q0FBd0M7SUFDbkQsWUFDWSxjQUE4QixFQUM5QixvQkFBMEM7UUFEMUMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDbkQsQ0FBQztJQUVKLDJDQUEyQztRQUN6QyxJQUFJLENBQUMsY0FBYyxDQUFDLDBCQUEwQixFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FDM0I7WUFDRSxHQUFHLEVBQUUseUJBQXlCO1NBQy9CLEVBQ0QsaUJBQWlCLENBQUMsY0FBYyxDQUNqQyxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7O1lBYjZCLGNBQWM7WUFDUixvQkFBb0I7OztBQUgzQyx3Q0FBd0M7SUFEcEQsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO0dBQ3RCLHdDQUF3QyxDQWVwRDtTQWZZLHdDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbn0gZnJvbSAnLi4vLi4vZ2xvYmFsLW1lc3NhZ2UvaW5kZXgnO1xuaW1wb3J0IHsgQXNtQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvYXNtLWF1dGguc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJTdXBwb3J0QWdlbnRFcnJvckhhbmRsaW5nU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBhc21BdXRoU2VydmljZTogQXNtQXV0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZVxuICApIHt9XG5cbiAgdGVybWluYXRlQ3VzdG9tZXJTdXBwb3J0QWdlbnRFeHBpcmVkU2Vzc2lvbigpOiB2b2lkIHtcbiAgICB0aGlzLmFzbUF1dGhTZXJ2aWNlLmxvZ291dEN1c3RvbWVyU3VwcG9ydEFnZW50KCk7XG4gICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICB7XG4gICAgICAgIGtleTogJ2FzbS5jc2FnZW50VG9rZW5FeHBpcmVkJyxcbiAgICAgIH0sXG4gICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUlxuICAgICk7XG4gIH1cbn1cbiJdfQ==