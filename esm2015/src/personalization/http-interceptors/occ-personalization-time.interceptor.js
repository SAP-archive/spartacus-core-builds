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
/** @type {?} */
const PERSONALIZATION_TIME_KEY = 'personalization-time';
export class OccPersonalizationTimeInterceptor {
    /**
     * @param {?} config
     * @param {?} occEndpoints
     * @param {?} winRef
     * @param {?} platform
     */
    constructor(config, occEndpoints, winRef, platform) {
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
                this.requestHeader = this.config.personalization.httpHeaderName.timestamp.toLowerCase();
                this.timestamp = this.winRef.localStorage.getItem(PERSONALIZATION_TIME_KEY);
            }
            else if (this.winRef.localStorage.getItem(PERSONALIZATION_TIME_KEY)) {
                this.winRef.localStorage.removeItem(PERSONALIZATION_TIME_KEY);
            }
        }
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        if (!this.enabled) {
            return next.handle(request);
        }
        if (this.timestamp &&
            request.url.includes(this.occEndpoints.getBaseEndpoint())) {
            request = request.clone({
                setHeaders: {
                    [this.requestHeader]: this.timestamp,
                },
            });
        }
        return next.handle(request).pipe(tap((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (event instanceof HttpResponse) {
                if (event.headers.keys().includes(this.requestHeader)) {
                    /** @type {?} */
                    const receivedTimestamp = event.headers.get(this.requestHeader);
                    if (this.timestamp !== receivedTimestamp) {
                        this.timestamp = receivedTimestamp;
                        this.winRef.localStorage.setItem(PERSONALIZATION_TIME_KEY, this.timestamp);
                    }
                }
            }
        })));
    }
}
OccPersonalizationTimeInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccPersonalizationTimeInterceptor.ctorParameters = () => [
    { type: PersonalizationConfig },
    { type: OccEndpointsService },
    { type: WindowRef },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    OccPersonalizationTimeInterceptor.prototype.timestamp;
    /**
     * @type {?}
     * @private
     */
    OccPersonalizationTimeInterceptor.prototype.requestHeader;
    /**
     * @type {?}
     * @private
     */
    OccPersonalizationTimeInterceptor.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    OccPersonalizationTimeInterceptor.prototype.config;
    /**
     * @type {?}
     * @private
     */
    OccPersonalizationTimeInterceptor.prototype.occEndpoints;
    /**
     * @type {?}
     * @private
     */
    OccPersonalizationTimeInterceptor.prototype.winRef;
    /**
     * @type {?}
     * @private
     */
    OccPersonalizationTimeInterceptor.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXBlcnNvbmFsaXphdGlvbi10aW1lLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3BlcnNvbmFsaXphdGlvbi9odHRwLWludGVyY2VwdG9ycy9vY2MtcGVyc29uYWxpemF0aW9uLXRpbWUuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBS0wsWUFBWSxHQUNiLE1BQU0sc0JBQXNCLENBQUM7QUFFOUIsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7TUFFOUMsd0JBQXdCLEdBQUcsc0JBQXNCO0FBR3ZELE1BQU0sT0FBTyxpQ0FBaUM7Ozs7Ozs7SUFLNUMsWUFDVSxNQUE2QixFQUM3QixZQUFpQyxFQUNqQyxNQUFpQixFQUNJLFFBQWE7UUFIbEMsV0FBTSxHQUFOLE1BQU0sQ0FBdUI7UUFDN0IsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDSSxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBTnBDLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFRdEIsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDcEMsSUFBSSxDQUFDLE9BQU87Z0JBQ1YsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUM7b0JBQ2pFLEtBQUssQ0FBQztZQUVSLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDaEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUN4RixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FDL0Msd0JBQXdCLENBQ3pCLENBQUM7YUFDSDtpQkFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFO2dCQUNyRSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsQ0FBQzthQUMvRDtTQUNGO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUNQLE9BQXlCLEVBQ3pCLElBQWlCO1FBRWpCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM3QjtRQUVELElBQ0UsSUFBSSxDQUFDLFNBQVM7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDLEVBQ3pEO1lBQ0EsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ3RCLFVBQVUsRUFBRTtvQkFDVixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUztpQkFDckM7YUFDRixDQUFDLENBQUM7U0FDSjtRQUVELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQzlCLEdBQUc7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRTtZQUNWLElBQUksS0FBSyxZQUFZLFlBQVksRUFBRTtnQkFDakMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUU7OzBCQUMvQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO29CQUMvRCxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssaUJBQWlCLEVBQUU7d0JBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUM7d0JBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FDOUIsd0JBQXdCLEVBQ3hCLElBQUksQ0FBQyxTQUFTLENBQ2YsQ0FBQztxQkFDSDtpQkFDRjthQUNGO1FBQ0gsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7OztZQS9ERixVQUFVOzs7O1lBTkYscUJBQXFCO1lBRHJCLG1CQUFtQjtZQUVuQixTQUFTOzRDQWViLE1BQU0sU0FBQyxXQUFXOzs7Ozs7O0lBUnJCLHNEQUEwQjs7Ozs7SUFDMUIsMERBQThCOzs7OztJQUM5QixvREFBd0I7Ozs7O0lBR3RCLG1EQUFxQzs7Ozs7SUFDckMseURBQXlDOzs7OztJQUN6QyxtREFBeUI7Ozs7O0lBQ3pCLHFEQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEh0dHBFdmVudCxcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBJbnRlcmNlcHRvcixcbiAgSHR0cFJlcXVlc3QsXG4gIEh0dHBSZXNwb25zZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb2NjL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5pbXBvcnQgeyBQZXJzb25hbGl6YXRpb25Db25maWcgfSBmcm9tICcuLi9jb25maWcvcGVyc29uYWxpemF0aW9uLWNvbmZpZyc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuLi8uLi93aW5kb3cvd2luZG93LXJlZic7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmNvbnN0IFBFUlNPTkFMSVpBVElPTl9USU1FX0tFWSA9ICdwZXJzb25hbGl6YXRpb24tdGltZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NQZXJzb25hbGl6YXRpb25UaW1lSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBwcml2YXRlIHRpbWVzdGFtcDogc3RyaW5nO1xuICBwcml2YXRlIHJlcXVlc3RIZWFkZXI6IHN0cmluZztcbiAgcHJpdmF0ZSBlbmFibGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25maWc6IFBlcnNvbmFsaXphdGlvbkNvbmZpZyxcbiAgICBwcml2YXRlIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcml2YXRlIHdpblJlZjogV2luZG93UmVmLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm06IGFueVxuICApIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybSkpIHtcbiAgICAgIHRoaXMuZW5hYmxlZCA9XG4gICAgICAgICh0aGlzLndpblJlZi5sb2NhbFN0b3JhZ2UgJiYgdGhpcy5jb25maWcucGVyc29uYWxpemF0aW9uLmVuYWJsZWQpIHx8XG4gICAgICAgIGZhbHNlO1xuXG4gICAgICBpZiAodGhpcy5lbmFibGVkKSB7XG4gICAgICAgIHRoaXMucmVxdWVzdEhlYWRlciA9IHRoaXMuY29uZmlnLnBlcnNvbmFsaXphdGlvbi5odHRwSGVhZGVyTmFtZS50aW1lc3RhbXAudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdGhpcy50aW1lc3RhbXAgPSB0aGlzLndpblJlZi5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcbiAgICAgICAgICBQRVJTT05BTElaQVRJT05fVElNRV9LRVlcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy53aW5SZWYubG9jYWxTdG9yYWdlLmdldEl0ZW0oUEVSU09OQUxJWkFUSU9OX1RJTUVfS0VZKSkge1xuICAgICAgICB0aGlzLndpblJlZi5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShQRVJTT05BTElaQVRJT05fVElNRV9LRVkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGludGVyY2VwdChcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHRoaXMudGltZXN0YW1wICYmXG4gICAgICByZXF1ZXN0LnVybC5pbmNsdWRlcyh0aGlzLm9jY0VuZHBvaW50cy5nZXRCYXNlRW5kcG9pbnQoKSlcbiAgICApIHtcbiAgICAgIHJlcXVlc3QgPSByZXF1ZXN0LmNsb25lKHtcbiAgICAgICAgc2V0SGVhZGVyczoge1xuICAgICAgICAgIFt0aGlzLnJlcXVlc3RIZWFkZXJdOiB0aGlzLnRpbWVzdGFtcCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KS5waXBlKFxuICAgICAgdGFwKGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSB7XG4gICAgICAgICAgaWYgKGV2ZW50LmhlYWRlcnMua2V5cygpLmluY2x1ZGVzKHRoaXMucmVxdWVzdEhlYWRlcikpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY2VpdmVkVGltZXN0YW1wID0gZXZlbnQuaGVhZGVycy5nZXQodGhpcy5yZXF1ZXN0SGVhZGVyKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVzdGFtcCAhPT0gcmVjZWl2ZWRUaW1lc3RhbXApIHtcbiAgICAgICAgICAgICAgdGhpcy50aW1lc3RhbXAgPSByZWNlaXZlZFRpbWVzdGFtcDtcbiAgICAgICAgICAgICAgdGhpcy53aW5SZWYubG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICAgUEVSU09OQUxJWkFUSU9OX1RJTUVfS0VZLFxuICAgICAgICAgICAgICAgIHRoaXMudGltZXN0YW1wXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==