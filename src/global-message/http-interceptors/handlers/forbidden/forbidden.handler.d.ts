import { AuthService } from '../../../../auth/user-auth/facade/auth.service';
import { OccEndpointsService } from '../../../../occ/services/occ-endpoints.service';
import { Priority } from '../../../../util/applicable';
import { GlobalMessageService } from '../../../facade/global-message.service';
import { HttpResponseStatus } from '../../../models/response-status.model';
import { HttpErrorHandler } from '../http-error.handler';
import * as ɵngcc0 from '@angular/core';
export declare class ForbiddenHandler extends HttpErrorHandler {
    protected globalMessageService: GlobalMessageService;
    protected authService: AuthService;
    protected occEndpoints: OccEndpointsService;
    responseStatus: HttpResponseStatus;
    handleError(request: any): void;
    getPriority(): Priority;
    constructor(globalMessageService: GlobalMessageService, authService: AuthService, occEndpoints: OccEndpointsService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ForbiddenHandler, never>;
}

//# sourceMappingURL=forbidden.handler.d.ts.map