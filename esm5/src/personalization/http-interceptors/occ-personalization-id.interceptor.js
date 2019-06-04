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
import { isPlatformServer } from '@angular/common';
/** @type {?} */
var PERSONALIZATION_ID_KEY = 'personalization-id';
var OccPersonalizationIdInterceptor = /** @class */ (function () {
    function OccPersonalizationIdInterceptor(config, occEndpoints, winRef, platform) {
        this.config = config;
        this.occEndpoints = occEndpoints;
        this.winRef = winRef;
        this.platform = platform;
        this.enabled = this.config.personalization.enabled || false;
        if (this.enabled) {
            this.requestHeader = this.config.personalization.httpHeaderName.id.toLowerCase();
            this.personalizationId =
                this.winRef.localStorage &&
                    this.winRef.localStorage.getItem(PERSONALIZATION_ID_KEY);
        }
        else if (this.winRef.localStorage.getItem(PERSONALIZATION_ID_KEY)) {
            this.winRef.localStorage.removeItem(PERSONALIZATION_ID_KEY);
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
        if (isPlatformServer(this.platform) || !this.enabled) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXBlcnNvbmFsaXphdGlvbi1pZC5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wZXJzb25hbGl6YXRpb24vaHR0cC1pbnRlcmNlcHRvcnMvb2NjLXBlcnNvbmFsaXphdGlvbi1pZC5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFLTCxZQUFZLEdBQ2IsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztJQUU3QyxzQkFBc0IsR0FBRyxvQkFBb0I7QUFFbkQ7SUFNRSx5Q0FDVSxNQUE2QixFQUM3QixZQUFpQyxFQUNqQyxNQUFpQixFQUNJLFFBQWE7UUFIbEMsV0FBTSxHQUFOLE1BQU0sQ0FBdUI7UUFDN0IsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDSSxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBRTFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQztRQUU1RCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2pGLElBQUksQ0FBQyxpQkFBaUI7Z0JBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWTtvQkFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7U0FDNUQ7YUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFO1lBQ25FLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1NBQzdEO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsbURBQVM7Ozs7O0lBQVQsVUFDRSxPQUF5QixFQUN6QixJQUFpQjtRQUZuQixpQkFtQ0M7O1FBL0JDLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNwRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDN0I7UUFFRCxJQUNFLElBQUksQ0FBQyxpQkFBaUI7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxFQUN6RDtZQUNBLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUN0QixVQUFVO29CQUNSLEdBQUMsSUFBSSxDQUFDLGFBQWEsSUFBRyxJQUFJLENBQUMsaUJBQWlCO3VCQUM3QzthQUNGLENBQUMsQ0FBQztTQUNKO1FBRUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDOUIsR0FBRzs7OztRQUFDLFVBQUEsS0FBSztZQUNQLElBQUksS0FBSyxZQUFZLFlBQVksRUFBRTtnQkFDakMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLEVBQUU7O3dCQUMvQyxVQUFVLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQztvQkFDeEQsSUFBSSxLQUFJLENBQUMsaUJBQWlCLEtBQUssVUFBVSxFQUFFO3dCQUN6QyxLQUFJLENBQUMsaUJBQWlCLEdBQUcsVUFBVSxDQUFDO3dCQUNwQyxLQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQzlCLHNCQUFzQixFQUN0QixLQUFJLENBQUMsaUJBQWlCLENBQ3ZCLENBQUM7cUJBQ0g7aUJBQ0Y7YUFDRjtRQUNILENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOztnQkEzREYsVUFBVTs7OztnQkFORixxQkFBcUI7Z0JBRHJCLG1CQUFtQjtnQkFFbkIsU0FBUztnREFlYixNQUFNLFNBQUMsV0FBVzs7SUFrRHZCLHNDQUFDO0NBQUEsQUE1REQsSUE0REM7U0EzRFksK0JBQStCOzs7Ozs7SUFDMUMsNERBQWtDOzs7OztJQUNsQyx3REFBOEI7Ozs7O0lBQzlCLGtEQUF5Qjs7Ozs7SUFHdkIsaURBQXFDOzs7OztJQUNyQyx1REFBeUM7Ozs7O0lBQ3pDLGlEQUF5Qjs7Ozs7SUFDekIsbURBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSHR0cEV2ZW50LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwUmVxdWVzdCxcbiAgSHR0cFJlc3BvbnNlLFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vY2Mvc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IFBlcnNvbmFsaXphdGlvbkNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9wZXJzb25hbGl6YXRpb24tY29uZmlnJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4uLy4uL3dpbmRvdy93aW5kb3ctcmVmJztcbmltcG9ydCB7IGlzUGxhdGZvcm1TZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5jb25zdCBQRVJTT05BTElaQVRJT05fSURfS0VZID0gJ3BlcnNvbmFsaXphdGlvbi1pZCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NQZXJzb25hbGl6YXRpb25JZEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgcHJpdmF0ZSBwZXJzb25hbGl6YXRpb25JZDogc3RyaW5nO1xuICBwcml2YXRlIHJlcXVlc3RIZWFkZXI6IHN0cmluZztcbiAgcHJpdmF0ZSBlbmFibGVkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlnOiBQZXJzb25hbGl6YXRpb25Db25maWcsXG4gICAgcHJpdmF0ZSBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB3aW5SZWY6IFdpbmRvd1JlZixcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtOiBhbnlcbiAgKSB7XG4gICAgdGhpcy5lbmFibGVkID0gdGhpcy5jb25maWcucGVyc29uYWxpemF0aW9uLmVuYWJsZWQgfHwgZmFsc2U7XG5cbiAgICBpZiAodGhpcy5lbmFibGVkKSB7XG4gICAgICB0aGlzLnJlcXVlc3RIZWFkZXIgPSB0aGlzLmNvbmZpZy5wZXJzb25hbGl6YXRpb24uaHR0cEhlYWRlck5hbWUuaWQudG9Mb3dlckNhc2UoKTtcbiAgICAgIHRoaXMucGVyc29uYWxpemF0aW9uSWQgPVxuICAgICAgICB0aGlzLndpblJlZi5sb2NhbFN0b3JhZ2UgJiZcbiAgICAgICAgdGhpcy53aW5SZWYubG9jYWxTdG9yYWdlLmdldEl0ZW0oUEVSU09OQUxJWkFUSU9OX0lEX0tFWSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLndpblJlZi5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShQRVJTT05BTElaQVRJT05fSURfS0VZKSkge1xuICAgICAgdGhpcy53aW5SZWYubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oUEVSU09OQUxJWkFUSU9OX0lEX0tFWSk7XG4gICAgfVxuICB9XG5cbiAgaW50ZXJjZXB0KFxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgbmV4dDogSHR0cEhhbmRsZXJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIGlmIChpc1BsYXRmb3JtU2VydmVyKHRoaXMucGxhdGZvcm0pIHx8ICF0aGlzLmVuYWJsZWQpIHtcbiAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICB0aGlzLnBlcnNvbmFsaXphdGlvbklkICYmXG4gICAgICByZXF1ZXN0LnVybC5pbmNsdWRlcyh0aGlzLm9jY0VuZHBvaW50cy5nZXRCYXNlRW5kcG9pbnQoKSlcbiAgICApIHtcbiAgICAgIHJlcXVlc3QgPSByZXF1ZXN0LmNsb25lKHtcbiAgICAgICAgc2V0SGVhZGVyczoge1xuICAgICAgICAgIFt0aGlzLnJlcXVlc3RIZWFkZXJdOiB0aGlzLnBlcnNvbmFsaXphdGlvbklkLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpLnBpcGUoXG4gICAgICB0YXAoZXZlbnQgPT4ge1xuICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpIHtcbiAgICAgICAgICBpZiAoZXZlbnQuaGVhZGVycy5rZXlzKCkuaW5jbHVkZXModGhpcy5yZXF1ZXN0SGVhZGVyKSkge1xuICAgICAgICAgICAgY29uc3QgcmVjZWl2ZWRJZCA9IGV2ZW50LmhlYWRlcnMuZ2V0KHRoaXMucmVxdWVzdEhlYWRlcik7XG4gICAgICAgICAgICBpZiAodGhpcy5wZXJzb25hbGl6YXRpb25JZCAhPT0gcmVjZWl2ZWRJZCkge1xuICAgICAgICAgICAgICB0aGlzLnBlcnNvbmFsaXphdGlvbklkID0gcmVjZWl2ZWRJZDtcbiAgICAgICAgICAgICAgdGhpcy53aW5SZWYubG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICAgUEVSU09OQUxJWkFUSU9OX0lEX0tFWSxcbiAgICAgICAgICAgICAgICB0aGlzLnBlcnNvbmFsaXphdGlvbklkXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==