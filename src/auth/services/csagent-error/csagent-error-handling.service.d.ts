import { GlobalMessageService } from '../../../global-message/index';
import { AuthService } from '../../facade/auth.service';
export declare class CustomerSupportAgentErrorHandlingService {
    protected authService: AuthService;
    protected globalMessageService: GlobalMessageService;
    constructor(authService: AuthService, globalMessageService: GlobalMessageService);
    terminateCustomerSupportAgentExpiredSession(): void;
}
