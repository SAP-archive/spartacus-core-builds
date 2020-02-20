import { GlobalMessageService } from '../../global-message/index';
import { AsmAuthService } from '../facade/asm-auth.service';
import * as ɵngcc0 from '@angular/core';
export declare class CustomerSupportAgentErrorHandlingService {
    protected asmAuthService: AsmAuthService;
    protected globalMessageService: GlobalMessageService;
    constructor(asmAuthService: AsmAuthService, globalMessageService: GlobalMessageService);
    terminateCustomerSupportAgentExpiredSession(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CustomerSupportAgentErrorHandlingService>;
}

//# sourceMappingURL=csagent-error-handling.service.d.ts.map