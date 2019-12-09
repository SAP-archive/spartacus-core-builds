/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { GlobalMessageService, GlobalMessageType, } from '../../global-message/index';
import { AsmAuthService } from '../facade/asm-auth.service';
import * as i0 from "@angular/core";
import * as i1 from "../facade/asm-auth.service";
import * as i2 from "../../global-message/facade/global-message.service";
export class CustomerSupportAgentErrorHandlingService {
    /**
     * @param {?} asmAuthService
     * @param {?} globalMessageService
     */
    constructor(asmAuthService, globalMessageService) {
        this.asmAuthService = asmAuthService;
        this.globalMessageService = globalMessageService;
    }
    /**
     * @return {?}
     */
    terminateCustomerSupportAgentExpiredSession() {
        this.asmAuthService.logoutCustomerSupportAgent();
        this.globalMessageService.add({
            key: 'asm.csagentTokenExpired',
        }, GlobalMessageType.MSG_TYPE_ERROR);
    }
}
CustomerSupportAgentErrorHandlingService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
CustomerSupportAgentErrorHandlingService.ctorParameters = () => [
    { type: AsmAuthService },
    { type: GlobalMessageService }
];
/** @nocollapse */ CustomerSupportAgentErrorHandlingService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CustomerSupportAgentErrorHandlingService_Factory() { return new CustomerSupportAgentErrorHandlingService(i0.ɵɵinject(i1.AsmAuthService), i0.ɵɵinject(i2.GlobalMessageService)); }, token: CustomerSupportAgentErrorHandlingService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CustomerSupportAgentErrorHandlingService.prototype.asmAuthService;
    /**
     * @type {?}
     * @protected
     */
    CustomerSupportAgentErrorHandlingService.prototype.globalMessageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NhZ2VudC1lcnJvci1oYW5kbGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2FzbS9zZXJ2aWNlcy9jc2FnZW50LWVycm9yLWhhbmRsaW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixpQkFBaUIsR0FDbEIsTUFBTSw0QkFBNEIsQ0FBQztBQUNwQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7QUFHNUQsTUFBTSxPQUFPLHdDQUF3Qzs7Ozs7SUFDbkQsWUFDWSxjQUE4QixFQUM5QixvQkFBMEM7UUFEMUMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDbkQsQ0FBQzs7OztJQUVKLDJDQUEyQztRQUN6QyxJQUFJLENBQUMsY0FBYyxDQUFDLDBCQUEwQixFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FDM0I7WUFDRSxHQUFHLEVBQUUseUJBQXlCO1NBQy9CLEVBQ0QsaUJBQWlCLENBQUMsY0FBYyxDQUNqQyxDQUFDO0lBQ0osQ0FBQzs7O1lBZkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztZQUZ6QixjQUFjO1lBSHJCLG9CQUFvQjs7Ozs7Ozs7SUFRbEIsa0VBQXdDOzs7OztJQUN4Qyx3RUFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG59IGZyb20gJy4uLy4uL2dsb2JhbC1tZXNzYWdlL2luZGV4JztcbmltcG9ydCB7IEFzbUF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL2FzbS1hdXRoLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyU3VwcG9ydEFnZW50RXJyb3JIYW5kbGluZ1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgYXNtQXV0aFNlcnZpY2U6IEFzbUF1dGhTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2VcbiAgKSB7fVxuXG4gIHRlcm1pbmF0ZUN1c3RvbWVyU3VwcG9ydEFnZW50RXhwaXJlZFNlc3Npb24oKTogdm9pZCB7XG4gICAgdGhpcy5hc21BdXRoU2VydmljZS5sb2dvdXRDdXN0b21lclN1cHBvcnRBZ2VudCgpO1xuICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAge1xuICAgICAgICBrZXk6ICdhc20uY3NhZ2VudFRva2VuRXhwaXJlZCcsXG4gICAgICB9LFxuICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICApO1xuICB9XG59XG4iXX0=