import { Injectable } from '@angular/core';
import { AuthService } from '../../../../auth/user-auth/facade/auth.service';
import { OccEndpointsService } from '../../../../occ/services/occ-endpoints.service';
import { GlobalMessageService } from '../../../facade/global-message.service';
import { GlobalMessageType } from '../../../models/global-message.model';
import { HttpResponseStatus } from '../../../models/response-status.model';
import { HttpErrorHandler } from '../http-error.handler';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yYmlkZGVuLmhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9nbG9iYWwtbWVzc2FnZS9odHRwLWludGVyY2VwdG9ycy9oYW5kbGVycy9mb3JiaWRkZW4vZm9yYmlkZGVuLmhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDN0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFFckYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDekUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7O0FBS3pELE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxnQkFBZ0I7SUFxQnBELFlBQ1ksb0JBQTBDLEVBQzFDLFdBQXdCLEVBQ3hCLFlBQWlDO1FBRTNDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBSmxCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBdkI3QyxtQkFBYyxHQUFHLGtCQUFrQixDQUFDLFNBQVMsQ0FBQztJQTBCOUMsQ0FBQztJQXhCRCxXQUFXLENBQUMsT0FBTztRQUNqQixJQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FDeEQsRUFDRDtZQUNBLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDM0I7UUFDRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUMzQixFQUFFLEdBQUcsRUFBRSx3QkFBd0IsRUFBRSxFQUNqQyxpQkFBaUIsQ0FBQyxjQUFjLENBQ2pDLENBQUM7SUFDSixDQUFDO0lBRUQsV0FBVztRQUNULHFCQUFvQjtJQUN0QixDQUFDOzs7O1lBdEJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBUFEsb0JBQW9CO1lBSHBCLFdBQVc7WUFDWCxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL2F1dGgvdXNlci1hdXRoL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL29jYy9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJpb3JpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2FwcGxpY2FibGUnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9mYWNhZGUvZ2xvYmFsLW1lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlVHlwZSB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9nbG9iYWwtbWVzc2FnZS5tb2RlbCc7XG5pbXBvcnQgeyBIdHRwUmVzcG9uc2VTdGF0dXMgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvcmVzcG9uc2Utc3RhdHVzLm1vZGVsJztcbmltcG9ydCB7IEh0dHBFcnJvckhhbmRsZXIgfSBmcm9tICcuLi9odHRwLWVycm9yLmhhbmRsZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgRm9yYmlkZGVuSGFuZGxlciBleHRlbmRzIEh0dHBFcnJvckhhbmRsZXIge1xuICByZXNwb25zZVN0YXR1cyA9IEh0dHBSZXNwb25zZVN0YXR1cy5GT1JCSURERU47XG5cbiAgaGFuZGxlRXJyb3IocmVxdWVzdCkge1xuICAgIGlmIChcbiAgICAgIHJlcXVlc3QudXJsLmVuZHNXaXRoKFxuICAgICAgICB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ3VzZXInLCB7IHVzZXJJZDogJ2N1cnJlbnQnIH0pXG4gICAgICApXG4gICAgKSB7XG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dCgpO1xuICAgIH1cbiAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgIHsga2V5OiAnaHR0cEhhbmRsZXJzLmZvcmJpZGRlbicgfSxcbiAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SXG4gICAgKTtcbiAgfVxuXG4gIGdldFByaW9yaXR5KCk6IFByaW9yaXR5IHtcbiAgICByZXR1cm4gUHJpb3JpdHkuTE9XO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoZ2xvYmFsTWVzc2FnZVNlcnZpY2UpO1xuICB9XG59XG4iXX0=