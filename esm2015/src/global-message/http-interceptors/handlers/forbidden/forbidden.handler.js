import { Injectable } from '@angular/core';
import { GlobalMessageType } from '../../../models/global-message.model';
import { HttpResponseStatus } from '../../../models/response-status.model';
import { HttpErrorHandler } from '../http-error.handler';
import { AuthService } from '../../../../auth/user-auth/facade/auth.service';
import { GlobalMessageService } from '../../../facade/global-message.service';
import { OccEndpointsService } from '../../../../occ/services/occ-endpoints.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../facade/global-message.service";
import * as i2 from "../../../../auth/user-auth/facade/auth.service";
import * as i3 from "../../../../occ/services/occ-endpoints.service";
export class ForbiddenHandler extends HttpErrorHandler {
    constructor(globalMessageService, authService, occEndpoints) {
        super(globalMessageService);
        this.globalMessageService = globalMessageService;
        this.authService = authService;
        this.occEndpoints = occEndpoints;
        this.responseStatus = HttpResponseStatus.FORBIDDEN;
    }
    handleError(request) {
        if (request.url.endsWith(this.occEndpoints.getUrl('user', { userId: 'current' }))) {
            this.authService.logout();
        }
        this.globalMessageService.add({ key: 'httpHandlers.forbidden' }, GlobalMessageType.MSG_TYPE_ERROR);
    }
    getPriority() {
        return -10 /* LOW */;
    }
}
ForbiddenHandler.ɵprov = i0.ɵɵdefineInjectable({ factory: function ForbiddenHandler_Factory() { return new ForbiddenHandler(i0.ɵɵinject(i1.GlobalMessageService), i0.ɵɵinject(i2.AuthService), i0.ɵɵinject(i3.OccEndpointsService)); }, token: ForbiddenHandler, providedIn: "root" });
ForbiddenHandler.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ForbiddenHandler.ctorParameters = () => [
    { type: GlobalMessageService },
    { type: AuthService },
    { type: OccEndpointsService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yYmlkZGVuLmhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9nbG9iYWwtbWVzc2FnZS9odHRwLWludGVyY2VwdG9ycy9oYW5kbGVycy9mb3JiaWRkZW4vZm9yYmlkZGVuLmhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDN0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDOUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7Ozs7O0FBS3JGLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxnQkFBZ0I7SUFzQnBELFlBQ1ksb0JBQTBDLEVBQzFDLFdBQXdCLEVBQ3hCLFlBQWlDO1FBRTNDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBSmxCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBeEI3QyxtQkFBYyxHQUFHLGtCQUFrQixDQUFDLFNBQVMsQ0FBQztJQTJCOUMsQ0FBQztJQXpCRCxXQUFXLENBQUMsT0FBTztRQUNqQixJQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FDeEQsRUFDRDtZQUNBLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDM0I7UUFFRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUMzQixFQUFFLEdBQUcsRUFBRSx3QkFBd0IsRUFBRSxFQUNqQyxpQkFBaUIsQ0FBQyxjQUFjLENBQ2pDLENBQUM7SUFDSixDQUFDO0lBRUQsV0FBVztRQUNULHFCQUFvQjtJQUN0QixDQUFDOzs7O1lBdkJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBTFEsb0JBQW9CO1lBRHBCLFdBQVc7WUFFWCxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlVHlwZSB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9nbG9iYWwtbWVzc2FnZS5tb2RlbCc7XG5pbXBvcnQgeyBIdHRwUmVzcG9uc2VTdGF0dXMgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvcmVzcG9uc2Utc3RhdHVzLm1vZGVsJztcbmltcG9ydCB7IEh0dHBFcnJvckhhbmRsZXIgfSBmcm9tICcuLi9odHRwLWVycm9yLmhhbmRsZXInO1xuaW1wb3J0IHsgUHJpb3JpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2FwcGxpY2FibGUnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9hdXRoL3VzZXItYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vZmFjYWRlL2dsb2JhbC1tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL29jYy9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgRm9yYmlkZGVuSGFuZGxlciBleHRlbmRzIEh0dHBFcnJvckhhbmRsZXIge1xuICByZXNwb25zZVN0YXR1cyA9IEh0dHBSZXNwb25zZVN0YXR1cy5GT1JCSURERU47XG5cbiAgaGFuZGxlRXJyb3IocmVxdWVzdCkge1xuICAgIGlmIChcbiAgICAgIHJlcXVlc3QudXJsLmVuZHNXaXRoKFxuICAgICAgICB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ3VzZXInLCB7IHVzZXJJZDogJ2N1cnJlbnQnIH0pXG4gICAgICApXG4gICAgKSB7XG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dCgpO1xuICAgIH1cblxuICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgeyBrZXk6ICdodHRwSGFuZGxlcnMuZm9yYmlkZGVuJyB9LFxuICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICApO1xuICB9XG5cbiAgZ2V0UHJpb3JpdHkoKTogUHJpb3JpdHkge1xuICAgIHJldHVybiBQcmlvcml0eS5MT1c7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZVxuICApIHtcbiAgICBzdXBlcihnbG9iYWxNZXNzYWdlU2VydmljZSk7XG4gIH1cbn1cbiJdfQ==