/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpResponse, } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { PersonalizationConfig } from '../config/personalization-config';
import { WindowRef } from '../../window/window-ref';
import { isPlatformBrowser } from '@angular/common';
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
        var _this = this;
        var _a;
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
        { type: Injectable }
    ];
    /** @nocollapse */
    OccPersonalizationIdInterceptor.ctorParameters = function () { return [
        { type: PersonalizationConfig },
        { type: OccEndpointsService },
        { type: WindowRef },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXBlcnNvbmFsaXphdGlvbi1pZC5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wZXJzb25hbGl6YXRpb24vaHR0cC1pbnRlcmNlcHRvcnMvb2NjLXBlcnNvbmFsaXphdGlvbi1pZC5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFLTCxZQUFZLEdBQ2IsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztJQUU5QyxzQkFBc0IsR0FBRyxvQkFBb0I7QUFFbkQ7SUFNRSx5Q0FDVSxNQUE2QixFQUM3QixZQUFpQyxFQUNqQyxNQUFpQixFQUNJLFFBQWE7UUFIbEMsV0FBTSxHQUFOLE1BQU0sQ0FBdUI7UUFDN0IsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDSSxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBTnBDLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFRdEIsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDcEMsSUFBSSxDQUFDLE9BQU87Z0JBQ1YsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUM7b0JBQ2pFLEtBQUssQ0FBQztZQUVSLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDaEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNqRixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUN2RCxzQkFBc0IsQ0FDdkIsQ0FBQzthQUNIO2lCQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLEVBQUU7Z0JBQ25FLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2FBQzdEO1NBQ0Y7SUFDSCxDQUFDOzs7Ozs7SUFFRCxtREFBUzs7Ozs7SUFBVCxVQUNFLE9BQXlCLEVBQ3pCLElBQWlCO1FBRm5CLGlCQW1DQzs7UUEvQkMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzdCO1FBRUQsSUFDRSxJQUFJLENBQUMsaUJBQWlCO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUMsRUFDekQ7WUFDQSxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFDdEIsVUFBVTtvQkFDUixHQUFDLElBQUksQ0FBQyxhQUFhLElBQUcsSUFBSSxDQUFDLGlCQUFpQjt1QkFDN0M7YUFDRixDQUFDLENBQUM7U0FDSjtRQUVELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQzlCLEdBQUc7Ozs7UUFBQyxVQUFBLEtBQUs7WUFDUCxJQUFJLEtBQUssWUFBWSxZQUFZLEVBQUU7Z0JBQ2pDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFOzt3QkFDL0MsVUFBVSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUM7b0JBQ3hELElBQUksS0FBSSxDQUFDLGlCQUFpQixLQUFLLFVBQVUsRUFBRTt3QkFDekMsS0FBSSxDQUFDLGlCQUFpQixHQUFHLFVBQVUsQ0FBQzt3QkFDcEMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUM5QixzQkFBc0IsRUFDdEIsS0FBSSxDQUFDLGlCQUFpQixDQUN2QixDQUFDO3FCQUNIO2lCQUNGO2FBQ0Y7UUFDSCxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Z0JBL0RGLFVBQVU7Ozs7Z0JBTkYscUJBQXFCO2dCQURyQixtQkFBbUI7Z0JBRW5CLFNBQVM7Z0RBZWIsTUFBTSxTQUFDLFdBQVc7O0lBc0R2QixzQ0FBQztDQUFBLEFBaEVELElBZ0VDO1NBL0RZLCtCQUErQjs7Ozs7O0lBQzFDLDREQUFrQzs7Ozs7SUFDbEMsd0RBQThCOzs7OztJQUM5QixrREFBd0I7Ozs7O0lBR3RCLGlEQUFxQzs7Ozs7SUFDckMsdURBQXlDOzs7OztJQUN6QyxpREFBeUI7Ozs7O0lBQ3pCLG1EQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEh0dHBFdmVudCxcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBJbnRlcmNlcHRvcixcbiAgSHR0cFJlcXVlc3QsXG4gIEh0dHBSZXNwb25zZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb2NjL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5pbXBvcnQgeyBQZXJzb25hbGl6YXRpb25Db25maWcgfSBmcm9tICcuLi9jb25maWcvcGVyc29uYWxpemF0aW9uLWNvbmZpZyc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuLi8uLi93aW5kb3cvd2luZG93LXJlZic7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmNvbnN0IFBFUlNPTkFMSVpBVElPTl9JRF9LRVkgPSAncGVyc29uYWxpemF0aW9uLWlkJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY1BlcnNvbmFsaXphdGlvbklkSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBwcml2YXRlIHBlcnNvbmFsaXphdGlvbklkOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVxdWVzdEhlYWRlcjogc3RyaW5nO1xuICBwcml2YXRlIGVuYWJsZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbmZpZzogUGVyc29uYWxpemF0aW9uQ29uZmlnLFxuICAgIHByaXZhdGUgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgd2luUmVmOiBXaW5kb3dSZWYsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybTogYW55XG4gICkge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtKSkge1xuICAgICAgdGhpcy5lbmFibGVkID1cbiAgICAgICAgKHRoaXMud2luUmVmLmxvY2FsU3RvcmFnZSAmJiB0aGlzLmNvbmZpZy5wZXJzb25hbGl6YXRpb24uZW5hYmxlZCkgfHxcbiAgICAgICAgZmFsc2U7XG5cbiAgICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5yZXF1ZXN0SGVhZGVyID0gdGhpcy5jb25maWcucGVyc29uYWxpemF0aW9uLmh0dHBIZWFkZXJOYW1lLmlkLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHRoaXMucGVyc29uYWxpemF0aW9uSWQgPSB0aGlzLndpblJlZi5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcbiAgICAgICAgICBQRVJTT05BTElaQVRJT05fSURfS0VZXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMud2luUmVmLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFBFUlNPTkFMSVpBVElPTl9JRF9LRVkpKSB7XG4gICAgICAgIHRoaXMud2luUmVmLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFBFUlNPTkFMSVpBVElPTl9JRF9LRVkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGludGVyY2VwdChcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHRoaXMucGVyc29uYWxpemF0aW9uSWQgJiZcbiAgICAgIHJlcXVlc3QudXJsLmluY2x1ZGVzKHRoaXMub2NjRW5kcG9pbnRzLmdldEJhc2VFbmRwb2ludCgpKVxuICAgICkge1xuICAgICAgcmVxdWVzdCA9IHJlcXVlc3QuY2xvbmUoe1xuICAgICAgICBzZXRIZWFkZXJzOiB7XG4gICAgICAgICAgW3RoaXMucmVxdWVzdEhlYWRlcl06IHRoaXMucGVyc29uYWxpemF0aW9uSWQsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCkucGlwZShcbiAgICAgIHRhcChldmVudCA9PiB7XG4gICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkge1xuICAgICAgICAgIGlmIChldmVudC5oZWFkZXJzLmtleXMoKS5pbmNsdWRlcyh0aGlzLnJlcXVlc3RIZWFkZXIpKSB7XG4gICAgICAgICAgICBjb25zdCByZWNlaXZlZElkID0gZXZlbnQuaGVhZGVycy5nZXQodGhpcy5yZXF1ZXN0SGVhZGVyKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBlcnNvbmFsaXphdGlvbklkICE9PSByZWNlaXZlZElkKSB7XG4gICAgICAgICAgICAgIHRoaXMucGVyc29uYWxpemF0aW9uSWQgPSByZWNlaXZlZElkO1xuICAgICAgICAgICAgICB0aGlzLndpblJlZi5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgICBQRVJTT05BTElaQVRJT05fSURfS0VZLFxuICAgICAgICAgICAgICAgIHRoaXMucGVyc29uYWxpemF0aW9uSWRcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19