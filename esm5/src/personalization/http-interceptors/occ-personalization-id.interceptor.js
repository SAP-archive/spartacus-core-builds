import { __decorate, __param } from "tslib";
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpResponse, } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { PersonalizationConfig } from '../config/personalization-config';
import { WindowRef } from '../../window/window-ref';
import { isPlatformBrowser } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "../config/personalization-config";
import * as i2 from "../../occ/services/occ-endpoints.service";
import * as i3 from "../../window/window-ref";
var PERSONALIZATION_ID_KEY = 'personalization-id';
var OccPersonalizationIdInterceptor = /** @class */ (function () {
    function OccPersonalizationIdInterceptor(config, occEndpoints, winRef, platform) {
        this.config = config;
        this.occEndpoints = occEndpoints;
        this.winRef = winRef;
        this.platform = platform;
        this.enabled = false;
        if (isPlatformBrowser(this.platform)) {
            this.enabled =
                (this.winRef.localStorage && this.config.personalization.enabled) ||
                    false;
            if (this.enabled) {
                this.requestHeader = this.config.personalization.httpHeaderName.id.toLowerCase();
                this.personalizationId = this.winRef.localStorage.getItem(PERSONALIZATION_ID_KEY);
            }
            else if (this.winRef.localStorage.getItem(PERSONALIZATION_ID_KEY)) {
                this.winRef.localStorage.removeItem(PERSONALIZATION_ID_KEY);
            }
        }
    }
    OccPersonalizationIdInterceptor.prototype.intercept = function (request, next) {
        var _a;
        var _this = this;
        if (!this.enabled) {
            return next.handle(request);
        }
        if (this.personalizationId &&
            request.url.includes(this.occEndpoints.getBaseEndpoint())) {
            request = request.clone({
                setHeaders: (_a = {},
                    _a[this.requestHeader] = this.personalizationId,
                    _a),
            });
        }
        return next.handle(request).pipe(tap(function (event) {
            if (event instanceof HttpResponse) {
                if (event.headers.keys().includes(_this.requestHeader)) {
                    var receivedId = event.headers.get(_this.requestHeader);
                    if (_this.personalizationId !== receivedId) {
                        _this.personalizationId = receivedId;
                        _this.winRef.localStorage.setItem(PERSONALIZATION_ID_KEY, _this.personalizationId);
                    }
                }
            }
        }));
    };
    OccPersonalizationIdInterceptor.ctorParameters = function () { return [
        { type: PersonalizationConfig },
        { type: OccEndpointsService },
        { type: WindowRef },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    OccPersonalizationIdInterceptor.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccPersonalizationIdInterceptor_Factory() { return new OccPersonalizationIdInterceptor(i0.ɵɵinject(i1.PersonalizationConfig), i0.ɵɵinject(i2.OccEndpointsService), i0.ɵɵinject(i3.WindowRef), i0.ɵɵinject(i0.PLATFORM_ID)); }, token: OccPersonalizationIdInterceptor, providedIn: "root" });
    OccPersonalizationIdInterceptor = __decorate([
        Injectable({ providedIn: 'root' }),
        __param(3, Inject(PLATFORM_ID))
    ], OccPersonalizationIdInterceptor);
    return OccPersonalizationIdInterceptor;
}());
export { OccPersonalizationIdInterceptor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXBlcnNvbmFsaXphdGlvbi1pZC5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wZXJzb25hbGl6YXRpb24vaHR0cC1pbnRlcmNlcHRvcnMvb2NjLXBlcnNvbmFsaXphdGlvbi1pZC5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFLTCxZQUFZLEdBQ2IsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7OztBQUVwRCxJQUFNLHNCQUFzQixHQUFHLG9CQUFvQixDQUFDO0FBR3BEO0lBS0UseUNBQ1UsTUFBNkIsRUFDN0IsWUFBaUMsRUFDakMsTUFBaUIsRUFDSSxRQUFhO1FBSGxDLFdBQU0sR0FBTixNQUFNLENBQXVCO1FBQzdCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNqQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ0ksYUFBUSxHQUFSLFFBQVEsQ0FBSztRQU5wQyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBUXRCLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxPQUFPO2dCQUNWLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDO29CQUNqRSxLQUFLLENBQUM7WUFFUixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDakYsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FDdkQsc0JBQXNCLENBQ3ZCLENBQUM7YUFDSDtpQkFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFO2dCQUNuRSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsQ0FBQzthQUM3RDtTQUNGO0lBQ0gsQ0FBQztJQUVELG1EQUFTLEdBQVQsVUFDRSxPQUF5QixFQUN6QixJQUFpQjs7UUFGbkIsaUJBbUNDO1FBL0JDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM3QjtRQUVELElBQ0UsSUFBSSxDQUFDLGlCQUFpQjtZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDLEVBQ3pEO1lBQ0EsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ3RCLFVBQVU7b0JBQ1IsR0FBQyxJQUFJLENBQUMsYUFBYSxJQUFHLElBQUksQ0FBQyxpQkFBaUI7dUJBQzdDO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM5QixHQUFHLENBQUMsVUFBQyxLQUFLO1lBQ1IsSUFBSSxLQUFLLFlBQVksWUFBWSxFQUFFO2dCQUNqQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTtvQkFDckQsSUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUN6RCxJQUFJLEtBQUksQ0FBQyxpQkFBaUIsS0FBSyxVQUFVLEVBQUU7d0JBQ3pDLEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxVQUFVLENBQUM7d0JBQ3BDLEtBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FDOUIsc0JBQXNCLEVBQ3RCLEtBQUksQ0FBQyxpQkFBaUIsQ0FDdkIsQ0FBQztxQkFDSDtpQkFDRjthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7O2dCQXhEaUIscUJBQXFCO2dCQUNmLG1CQUFtQjtnQkFDekIsU0FBUztnREFDeEIsTUFBTSxTQUFDLFdBQVc7OztJQVRWLCtCQUErQjtRQUQzQyxVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFVOUIsV0FBQSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7T0FUWCwrQkFBK0IsQ0ErRDNDOzBDQWxGRDtDQWtGQyxBQS9ERCxJQStEQztTQS9EWSwrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBIdHRwRXZlbnQsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBSZXF1ZXN0LFxuICBIdHRwUmVzcG9uc2UsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL29jYy9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGVyc29uYWxpemF0aW9uQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL3BlcnNvbmFsaXphdGlvbi1jb25maWcnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5jb25zdCBQRVJTT05BTElaQVRJT05fSURfS0VZID0gJ3BlcnNvbmFsaXphdGlvbi1pZCc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgT2NjUGVyc29uYWxpemF0aW9uSWRJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIHByaXZhdGUgcGVyc29uYWxpemF0aW9uSWQ6IHN0cmluZztcbiAgcHJpdmF0ZSByZXF1ZXN0SGVhZGVyOiBzdHJpbmc7XG4gIHByaXZhdGUgZW5hYmxlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlnOiBQZXJzb25hbGl6YXRpb25Db25maWcsXG4gICAgcHJpdmF0ZSBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB3aW5SZWY6IFdpbmRvd1JlZixcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtOiBhbnlcbiAgKSB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm0pKSB7XG4gICAgICB0aGlzLmVuYWJsZWQgPVxuICAgICAgICAodGhpcy53aW5SZWYubG9jYWxTdG9yYWdlICYmIHRoaXMuY29uZmlnLnBlcnNvbmFsaXphdGlvbi5lbmFibGVkKSB8fFxuICAgICAgICBmYWxzZTtcblxuICAgICAgaWYgKHRoaXMuZW5hYmxlZCkge1xuICAgICAgICB0aGlzLnJlcXVlc3RIZWFkZXIgPSB0aGlzLmNvbmZpZy5wZXJzb25hbGl6YXRpb24uaHR0cEhlYWRlck5hbWUuaWQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdGhpcy5wZXJzb25hbGl6YXRpb25JZCA9IHRoaXMud2luUmVmLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFxuICAgICAgICAgIFBFUlNPTkFMSVpBVElPTl9JRF9LRVlcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy53aW5SZWYubG9jYWxTdG9yYWdlLmdldEl0ZW0oUEVSU09OQUxJWkFUSU9OX0lEX0tFWSkpIHtcbiAgICAgICAgdGhpcy53aW5SZWYubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oUEVSU09OQUxJWkFUSU9OX0lEX0tFWSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW50ZXJjZXB0KFxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgbmV4dDogSHR0cEhhbmRsZXJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCk7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgdGhpcy5wZXJzb25hbGl6YXRpb25JZCAmJlxuICAgICAgcmVxdWVzdC51cmwuaW5jbHVkZXModGhpcy5vY2NFbmRwb2ludHMuZ2V0QmFzZUVuZHBvaW50KCkpXG4gICAgKSB7XG4gICAgICByZXF1ZXN0ID0gcmVxdWVzdC5jbG9uZSh7XG4gICAgICAgIHNldEhlYWRlcnM6IHtcbiAgICAgICAgICBbdGhpcy5yZXF1ZXN0SGVhZGVyXTogdGhpcy5wZXJzb25hbGl6YXRpb25JZCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KS5waXBlKFxuICAgICAgdGFwKChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpIHtcbiAgICAgICAgICBpZiAoZXZlbnQuaGVhZGVycy5rZXlzKCkuaW5jbHVkZXModGhpcy5yZXF1ZXN0SGVhZGVyKSkge1xuICAgICAgICAgICAgY29uc3QgcmVjZWl2ZWRJZCA9IGV2ZW50LmhlYWRlcnMuZ2V0KHRoaXMucmVxdWVzdEhlYWRlcik7XG4gICAgICAgICAgICBpZiAodGhpcy5wZXJzb25hbGl6YXRpb25JZCAhPT0gcmVjZWl2ZWRJZCkge1xuICAgICAgICAgICAgICB0aGlzLnBlcnNvbmFsaXphdGlvbklkID0gcmVjZWl2ZWRJZDtcbiAgICAgICAgICAgICAgdGhpcy53aW5SZWYubG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICAgUEVSU09OQUxJWkFUSU9OX0lEX0tFWSxcbiAgICAgICAgICAgICAgICB0aGlzLnBlcnNvbmFsaXphdGlvbklkXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==