/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
/** @type {?} */
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
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    OccPersonalizationIdInterceptor.prototype.intercept = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
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
        return next.handle(request).pipe(tap((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event instanceof HttpResponse) {
                if (event.headers.keys().includes(_this.requestHeader)) {
                    /** @type {?} */
                    var receivedId = event.headers.get(_this.requestHeader);
                    if (_this.personalizationId !== receivedId) {
                        _this.personalizationId = receivedId;
                        _this.winRef.localStorage.setItem(PERSONALIZATION_ID_KEY, _this.personalizationId);
                    }
                }
            }
        })));
    };
    OccPersonalizationIdInterceptor.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    OccPersonalizationIdInterceptor.ctorParameters = function () { return [
        { type: PersonalizationConfig },
        { type: OccEndpointsService },
        { type: WindowRef },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    /** @nocollapse */ OccPersonalizationIdInterceptor.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function OccPersonalizationIdInterceptor_Factory() { return new OccPersonalizationIdInterceptor(i0.ɵɵinject(i1.PersonalizationConfig), i0.ɵɵinject(i2.OccEndpointsService), i0.ɵɵinject(i3.WindowRef), i0.ɵɵinject(i0.PLATFORM_ID)); }, token: OccPersonalizationIdInterceptor, providedIn: "root" });
    return OccPersonalizationIdInterceptor;
}());
export { OccPersonalizationIdInterceptor };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OccPersonalizationIdInterceptor.prototype.personalizationId;
    /**
     * @type {?}
     * @private
     */
    OccPersonalizationIdInterceptor.prototype.requestHeader;
    /**
     * @type {?}
     * @private
     */
    OccPersonalizationIdInterceptor.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    OccPersonalizationIdInterceptor.prototype.config;
    /**
     * @type {?}
     * @private
     */
    OccPersonalizationIdInterceptor.prototype.occEndpoints;
    /**
     * @type {?}
     * @private
     */
    OccPersonalizationIdInterceptor.prototype.winRef;
    /**
     * @type {?}
     * @private
     */
    OccPersonalizationIdInterceptor.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXBlcnNvbmFsaXphdGlvbi1pZC5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wZXJzb25hbGl6YXRpb24vaHR0cC1pbnRlcmNlcHRvcnMvb2NjLXBlcnNvbmFsaXphdGlvbi1pZC5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFLTCxZQUFZLEdBQ2IsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7SUFFOUMsc0JBQXNCLEdBQUcsb0JBQW9CO0FBRW5EO0lBTUUseUNBQ1UsTUFBNkIsRUFDN0IsWUFBaUMsRUFDakMsTUFBaUIsRUFDSSxRQUFhO1FBSGxDLFdBQU0sR0FBTixNQUFNLENBQXVCO1FBQzdCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNqQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ0ksYUFBUSxHQUFSLFFBQVEsQ0FBSztRQU5wQyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBUXRCLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxPQUFPO2dCQUNWLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDO29CQUNqRSxLQUFLLENBQUM7WUFFUixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDakYsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FDdkQsc0JBQXNCLENBQ3ZCLENBQUM7YUFDSDtpQkFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFO2dCQUNuRSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsQ0FBQzthQUM3RDtTQUNGO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsbURBQVM7Ozs7O0lBQVQsVUFDRSxPQUF5QixFQUN6QixJQUFpQjs7UUFGbkIsaUJBbUNDO1FBL0JDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM3QjtRQUVELElBQ0UsSUFBSSxDQUFDLGlCQUFpQjtZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDLEVBQ3pEO1lBQ0EsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ3RCLFVBQVU7b0JBQ1IsR0FBQyxJQUFJLENBQUMsYUFBYSxJQUFHLElBQUksQ0FBQyxpQkFBaUI7dUJBQzdDO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM5QixHQUFHOzs7O1FBQUMsVUFBQSxLQUFLO1lBQ1AsSUFBSSxLQUFLLFlBQVksWUFBWSxFQUFFO2dCQUNqQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTs7d0JBQy9DLFVBQVUsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDO29CQUN4RCxJQUFJLEtBQUksQ0FBQyxpQkFBaUIsS0FBSyxVQUFVLEVBQUU7d0JBQ3pDLEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxVQUFVLENBQUM7d0JBQ3BDLEtBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FDOUIsc0JBQXNCLEVBQ3RCLEtBQUksQ0FBQyxpQkFBaUIsQ0FDdkIsQ0FBQztxQkFDSDtpQkFDRjthQUNGO1FBQ0gsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7O2dCQS9ERixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O2dCQU56QixxQkFBcUI7Z0JBRHJCLG1CQUFtQjtnQkFFbkIsU0FBUztnREFlYixNQUFNLFNBQUMsV0FBVzs7OzBDQTVCdkI7Q0FrRkMsQUFoRUQsSUFnRUM7U0EvRFksK0JBQStCOzs7Ozs7SUFDMUMsNERBQWtDOzs7OztJQUNsQyx3REFBOEI7Ozs7O0lBQzlCLGtEQUF3Qjs7Ozs7SUFHdEIsaURBQXFDOzs7OztJQUNyQyx1REFBeUM7Ozs7O0lBQ3pDLGlEQUF5Qjs7Ozs7SUFDekIsbURBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSHR0cEV2ZW50LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwUmVxdWVzdCxcbiAgSHR0cFJlc3BvbnNlLFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vY2Mvc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IFBlcnNvbmFsaXphdGlvbkNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9wZXJzb25hbGl6YXRpb24tY29uZmlnJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4uLy4uL3dpbmRvdy93aW5kb3ctcmVmJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuY29uc3QgUEVSU09OQUxJWkFUSU9OX0lEX0tFWSA9ICdwZXJzb25hbGl6YXRpb24taWQnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE9jY1BlcnNvbmFsaXphdGlvbklkSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBwcml2YXRlIHBlcnNvbmFsaXphdGlvbklkOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVxdWVzdEhlYWRlcjogc3RyaW5nO1xuICBwcml2YXRlIGVuYWJsZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbmZpZzogUGVyc29uYWxpemF0aW9uQ29uZmlnLFxuICAgIHByaXZhdGUgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgd2luUmVmOiBXaW5kb3dSZWYsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybTogYW55XG4gICkge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtKSkge1xuICAgICAgdGhpcy5lbmFibGVkID1cbiAgICAgICAgKHRoaXMud2luUmVmLmxvY2FsU3RvcmFnZSAmJiB0aGlzLmNvbmZpZy5wZXJzb25hbGl6YXRpb24uZW5hYmxlZCkgfHxcbiAgICAgICAgZmFsc2U7XG5cbiAgICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5yZXF1ZXN0SGVhZGVyID0gdGhpcy5jb25maWcucGVyc29uYWxpemF0aW9uLmh0dHBIZWFkZXJOYW1lLmlkLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHRoaXMucGVyc29uYWxpemF0aW9uSWQgPSB0aGlzLndpblJlZi5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcbiAgICAgICAgICBQRVJTT05BTElaQVRJT05fSURfS0VZXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMud2luUmVmLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFBFUlNPTkFMSVpBVElPTl9JRF9LRVkpKSB7XG4gICAgICAgIHRoaXMud2luUmVmLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFBFUlNPTkFMSVpBVElPTl9JRF9LRVkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGludGVyY2VwdChcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHRoaXMucGVyc29uYWxpemF0aW9uSWQgJiZcbiAgICAgIHJlcXVlc3QudXJsLmluY2x1ZGVzKHRoaXMub2NjRW5kcG9pbnRzLmdldEJhc2VFbmRwb2ludCgpKVxuICAgICkge1xuICAgICAgcmVxdWVzdCA9IHJlcXVlc3QuY2xvbmUoe1xuICAgICAgICBzZXRIZWFkZXJzOiB7XG4gICAgICAgICAgW3RoaXMucmVxdWVzdEhlYWRlcl06IHRoaXMucGVyc29uYWxpemF0aW9uSWQsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCkucGlwZShcbiAgICAgIHRhcChldmVudCA9PiB7XG4gICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkge1xuICAgICAgICAgIGlmIChldmVudC5oZWFkZXJzLmtleXMoKS5pbmNsdWRlcyh0aGlzLnJlcXVlc3RIZWFkZXIpKSB7XG4gICAgICAgICAgICBjb25zdCByZWNlaXZlZElkID0gZXZlbnQuaGVhZGVycy5nZXQodGhpcy5yZXF1ZXN0SGVhZGVyKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBlcnNvbmFsaXphdGlvbklkICE9PSByZWNlaXZlZElkKSB7XG4gICAgICAgICAgICAgIHRoaXMucGVyc29uYWxpemF0aW9uSWQgPSByZWNlaXZlZElkO1xuICAgICAgICAgICAgICB0aGlzLndpblJlZi5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgICBQRVJTT05BTElaQVRJT05fSURfS0VZLFxuICAgICAgICAgICAgICAgIHRoaXMucGVyc29uYWxpemF0aW9uSWRcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19