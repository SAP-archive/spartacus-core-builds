/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpResponse, } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { PersonalizationConfig } from '../config/personalization-config';
import { WindowRef } from '../../window/window-ref';
import { isPlatformServer } from '@angular/common';
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
        this.enabled = this.config.personalization.enabled || false;
        if (this.enabled) {
            this.requestHeader = this.config.personalization.httpHeaderName.timestamp.toLowerCase();
            this.timestamp =
                this.winRef.localStorage &&
                    this.winRef.localStorage.getItem(PERSONALIZATION_TIME_KEY);
        }
        else if (this.winRef.localStorage.getItem(PERSONALIZATION_TIME_KEY)) {
            this.winRef.localStorage.removeItem(PERSONALIZATION_TIME_KEY);
        }
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        if (isPlatformServer(this.platform) || !this.enabled) {
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
        return next.handle(request).pipe(tap(event => {
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
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXBlcnNvbmFsaXphdGlvbi10aW1lLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3BlcnNvbmFsaXphdGlvbi9odHRwLWludGVyY2VwdG9ycy9vY2MtcGVyc29uYWxpemF0aW9uLXRpbWUuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBS0wsWUFBWSxHQUNiLE1BQU0sc0JBQXNCLENBQUM7QUFFOUIsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7TUFFN0Msd0JBQXdCLEdBQUcsc0JBQXNCO0FBR3ZELE1BQU0sT0FBTyxpQ0FBaUM7Ozs7Ozs7SUFLNUMsWUFDVSxNQUE2QixFQUM3QixZQUFpQyxFQUNqQyxNQUFpQixFQUNJLFFBQWE7UUFIbEMsV0FBTSxHQUFOLE1BQU0sQ0FBdUI7UUFDN0IsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDSSxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBRTFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQztRQUU1RCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3hGLElBQUksQ0FBQyxTQUFTO2dCQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWTtvQkFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUM7U0FDOUQ7YUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFO1lBQ3JFLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1NBQy9EO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUNQLE9BQXlCLEVBQ3pCLElBQWlCO1FBRWpCLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNwRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDN0I7UUFFRCxJQUNFLElBQUksQ0FBQyxTQUFTO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxFQUN6RDtZQUNBLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUN0QixVQUFVLEVBQUU7b0JBQ1YsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVM7aUJBQ3JDO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM5QixHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDVixJQUFJLEtBQUssWUFBWSxZQUFZLEVBQUU7Z0JBQ2pDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFOzswQkFDL0MsaUJBQWlCLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztvQkFDL0QsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLGlCQUFpQixFQUFFO3dCQUN4QyxJQUFJLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDO3dCQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQzlCLHdCQUF3QixFQUN4QixJQUFJLENBQUMsU0FBUyxDQUNmLENBQUM7cUJBQ0g7aUJBQ0Y7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7WUEzREYsVUFBVTs7OztZQU5GLHFCQUFxQjtZQURyQixtQkFBbUI7WUFFbkIsU0FBUzs0Q0FlYixNQUFNLFNBQUMsV0FBVzs7Ozs7OztJQVJyQixzREFBMEI7Ozs7O0lBQzFCLDBEQUE4Qjs7Ozs7SUFDOUIsb0RBQXlCOzs7OztJQUd2QixtREFBcUM7Ozs7O0lBQ3JDLHlEQUF5Qzs7Ozs7SUFDekMsbURBQXlCOzs7OztJQUN6QixxREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBIdHRwRXZlbnQsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBSZXF1ZXN0LFxuICBIdHRwUmVzcG9uc2UsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL29jYy9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGVyc29uYWxpemF0aW9uQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL3BlcnNvbmFsaXphdGlvbi1jb25maWcnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmNvbnN0IFBFUlNPTkFMSVpBVElPTl9USU1FX0tFWSA9ICdwZXJzb25hbGl6YXRpb24tdGltZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NQZXJzb25hbGl6YXRpb25UaW1lSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBwcml2YXRlIHRpbWVzdGFtcDogc3RyaW5nO1xuICBwcml2YXRlIHJlcXVlc3RIZWFkZXI6IHN0cmluZztcbiAgcHJpdmF0ZSBlbmFibGVkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlnOiBQZXJzb25hbGl6YXRpb25Db25maWcsXG4gICAgcHJpdmF0ZSBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB3aW5SZWY6IFdpbmRvd1JlZixcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtOiBhbnlcbiAgKSB7XG4gICAgdGhpcy5lbmFibGVkID0gdGhpcy5jb25maWcucGVyc29uYWxpemF0aW9uLmVuYWJsZWQgfHwgZmFsc2U7XG5cbiAgICBpZiAodGhpcy5lbmFibGVkKSB7XG4gICAgICB0aGlzLnJlcXVlc3RIZWFkZXIgPSB0aGlzLmNvbmZpZy5wZXJzb25hbGl6YXRpb24uaHR0cEhlYWRlck5hbWUudGltZXN0YW1wLnRvTG93ZXJDYXNlKCk7XG4gICAgICB0aGlzLnRpbWVzdGFtcCA9XG4gICAgICAgIHRoaXMud2luUmVmLmxvY2FsU3RvcmFnZSAmJlxuICAgICAgICB0aGlzLndpblJlZi5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShQRVJTT05BTElaQVRJT05fVElNRV9LRVkpO1xuICAgIH0gZWxzZSBpZiAodGhpcy53aW5SZWYubG9jYWxTdG9yYWdlLmdldEl0ZW0oUEVSU09OQUxJWkFUSU9OX1RJTUVfS0VZKSkge1xuICAgICAgdGhpcy53aW5SZWYubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oUEVSU09OQUxJWkFUSU9OX1RJTUVfS0VZKTtcbiAgICB9XG4gIH1cblxuICBpbnRlcmNlcHQoXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgaWYgKGlzUGxhdGZvcm1TZXJ2ZXIodGhpcy5wbGF0Zm9ybSkgfHwgIXRoaXMuZW5hYmxlZCkge1xuICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHRoaXMudGltZXN0YW1wICYmXG4gICAgICByZXF1ZXN0LnVybC5pbmNsdWRlcyh0aGlzLm9jY0VuZHBvaW50cy5nZXRCYXNlRW5kcG9pbnQoKSlcbiAgICApIHtcbiAgICAgIHJlcXVlc3QgPSByZXF1ZXN0LmNsb25lKHtcbiAgICAgICAgc2V0SGVhZGVyczoge1xuICAgICAgICAgIFt0aGlzLnJlcXVlc3RIZWFkZXJdOiB0aGlzLnRpbWVzdGFtcCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KS5waXBlKFxuICAgICAgdGFwKGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSB7XG4gICAgICAgICAgaWYgKGV2ZW50LmhlYWRlcnMua2V5cygpLmluY2x1ZGVzKHRoaXMucmVxdWVzdEhlYWRlcikpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY2VpdmVkVGltZXN0YW1wID0gZXZlbnQuaGVhZGVycy5nZXQodGhpcy5yZXF1ZXN0SGVhZGVyKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVzdGFtcCAhPT0gcmVjZWl2ZWRUaW1lc3RhbXApIHtcbiAgICAgICAgICAgICAgdGhpcy50aW1lc3RhbXAgPSByZWNlaXZlZFRpbWVzdGFtcDtcbiAgICAgICAgICAgICAgdGhpcy53aW5SZWYubG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICAgUEVSU09OQUxJWkFUSU9OX1RJTUVfS0VZLFxuICAgICAgICAgICAgICAgIHRoaXMudGltZXN0YW1wXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==