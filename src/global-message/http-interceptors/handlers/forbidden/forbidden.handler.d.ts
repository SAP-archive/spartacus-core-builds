import { HttpResponseStatus } from '../../../models/response-status.model';
import { HttpErrorHandler } from '../http-error.handler';
import { Priority } from '../../../../util/applicable';
import { AuthService } from '../../../../auth/user-auth/facade/auth.service';
import { GlobalMessageService } from '../../../facade/global-message.service';
import { OccEndpointsService } from '../../../../occ/services/occ-endpoints.service';
export declare class ForbiddenHandler extends HttpErrorHandler {
    protected globalMessageService: GlobalMessageService;
    protected authService: AuthService;
    protected occEndpoints: OccEndpointsService;
    responseStatus: HttpResponseStatus;
    handleError(request: any): void;
    getPriority(): Priority;
    constructor(globalMessageService: GlobalMessageService, authService: AuthService, occEndpoints: OccEndpointsService);
}
