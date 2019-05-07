/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpResponse, } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { PersonalizationConfig } from '../config/personalization-config';
import { WindowRef } from '../../window/window-ref';
/** @type {?} */
var PERSONALIZATION_KEY = 'personalization-id';
var OccPersonalizationIdInterceptor = /** @class */ (function () {
    function OccPersonalizationIdInterceptor(config, occEndpoints, winRef) {
        this.config = config;
        this.occEndpoints = occEndpoints;
        this.winRef = winRef;
        this.requestHeader = this.config.personalization.requestHeader.toLowerCase();
        this.personalizationId = this.winRef.localStorage.getItem(PERSONALIZATION_KEY);
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
                    /** @type {?} */
                    var receivedId = event.headers.get(_this.requestHeader);
                    if (_this.personalizationId !== receivedId) {
                        _this.personalizationId = receivedId;
                        _this.winRef.localStorage.setItem(PERSONALIZATION_KEY, _this.personalizationId);
                    }
                }
            }
        }));
    };
    OccPersonalizationIdInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccPersonalizationIdInterceptor.ctorParameters = function () { return [
        { type: PersonalizationConfig },
        { type: OccEndpointsService },
        { type: WindowRef }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXBlcnNvbmFsaXphdGlvbi1pZC5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wZXJzb25hbGl6YXRpb24vaHR0cC1pbnRlcmNlcHRvcnMvb2NjLXBlcnNvbmFsaXphdGlvbi1pZC5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBS0wsWUFBWSxHQUNiLE1BQU0sc0JBQXNCLENBQUM7QUFFOUIsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7SUFFOUMsbUJBQW1CLEdBQUcsb0JBQW9CO0FBRWhEO0lBS0UseUNBQ1UsTUFBNkIsRUFDN0IsWUFBaUMsRUFDakMsTUFBaUI7UUFGakIsV0FBTSxHQUFOLE1BQU0sQ0FBdUI7UUFDN0IsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFFekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0UsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FDdkQsbUJBQW1CLENBQ3BCLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFRCxtREFBUzs7Ozs7SUFBVCxVQUNFLE9BQXlCLEVBQ3pCLElBQWlCO1FBRm5CLGlCQStCQzs7UUEzQkMsSUFDRSxJQUFJLENBQUMsaUJBQWlCO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUMsRUFDekQ7WUFDQSxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFDdEIsVUFBVTtvQkFDUixHQUFDLElBQUksQ0FBQyxhQUFhLElBQUcsSUFBSSxDQUFDLGlCQUFpQjt1QkFDN0M7YUFDRixDQUFDLENBQUM7U0FDSjtRQUVELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQzlCLEdBQUcsQ0FBQyxVQUFBLEtBQUs7WUFDUCxJQUFJLEtBQUssWUFBWSxZQUFZLEVBQUU7Z0JBQ2pDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFOzt3QkFDL0MsVUFBVSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUM7b0JBQ3hELElBQUksS0FBSSxDQUFDLGlCQUFpQixLQUFLLFVBQVUsRUFBRTt3QkFDekMsS0FBSSxDQUFDLGlCQUFpQixHQUFHLFVBQVUsQ0FBQzt3QkFDcEMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUM5QixtQkFBbUIsRUFDbkIsS0FBSSxDQUFDLGlCQUFpQixDQUN2QixDQUFDO3FCQUNIO2lCQUNGO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Z0JBL0NGLFVBQVU7Ozs7Z0JBTEYscUJBQXFCO2dCQURyQixtQkFBbUI7Z0JBRW5CLFNBQVM7O0lBb0RsQixzQ0FBQztDQUFBLEFBaERELElBZ0RDO1NBL0NZLCtCQUErQjs7Ozs7O0lBQzFDLDREQUFrQzs7Ozs7SUFDbEMsd0RBQThCOzs7OztJQUc1QixpREFBcUM7Ozs7O0lBQ3JDLHVEQUF5Qzs7Ozs7SUFDekMsaURBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSHR0cFJlcXVlc3QsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwRXZlbnQsXG4gIEh0dHBJbnRlcmNlcHRvcixcbiAgSHR0cFJlc3BvbnNlLFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vY2Mvc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IFBlcnNvbmFsaXphdGlvbkNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9wZXJzb25hbGl6YXRpb24tY29uZmlnJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4uLy4uL3dpbmRvdy93aW5kb3ctcmVmJztcblxuY29uc3QgUEVSU09OQUxJWkFUSU9OX0tFWSA9ICdwZXJzb25hbGl6YXRpb24taWQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjUGVyc29uYWxpemF0aW9uSWRJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIHByaXZhdGUgcGVyc29uYWxpemF0aW9uSWQ6IHN0cmluZztcbiAgcHJpdmF0ZSByZXF1ZXN0SGVhZGVyOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25maWc6IFBlcnNvbmFsaXphdGlvbkNvbmZpZyxcbiAgICBwcml2YXRlIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcml2YXRlIHdpblJlZjogV2luZG93UmVmXG4gICkge1xuICAgIHRoaXMucmVxdWVzdEhlYWRlciA9IHRoaXMuY29uZmlnLnBlcnNvbmFsaXphdGlvbi5yZXF1ZXN0SGVhZGVyLnRvTG93ZXJDYXNlKCk7XG4gICAgdGhpcy5wZXJzb25hbGl6YXRpb25JZCA9IHRoaXMud2luUmVmLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFxuICAgICAgUEVSU09OQUxJWkFUSU9OX0tFWVxuICAgICk7XG4gIH1cblxuICBpbnRlcmNlcHQoXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5wZXJzb25hbGl6YXRpb25JZCAmJlxuICAgICAgcmVxdWVzdC51cmwuaW5jbHVkZXModGhpcy5vY2NFbmRwb2ludHMuZ2V0QmFzZUVuZHBvaW50KCkpXG4gICAgKSB7XG4gICAgICByZXF1ZXN0ID0gcmVxdWVzdC5jbG9uZSh7XG4gICAgICAgIHNldEhlYWRlcnM6IHtcbiAgICAgICAgICBbdGhpcy5yZXF1ZXN0SGVhZGVyXTogdGhpcy5wZXJzb25hbGl6YXRpb25JZCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KS5waXBlKFxuICAgICAgdGFwKGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSB7XG4gICAgICAgICAgaWYgKGV2ZW50LmhlYWRlcnMua2V5cygpLmluY2x1ZGVzKHRoaXMucmVxdWVzdEhlYWRlcikpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY2VpdmVkSWQgPSBldmVudC5oZWFkZXJzLmdldCh0aGlzLnJlcXVlc3RIZWFkZXIpO1xuICAgICAgICAgICAgaWYgKHRoaXMucGVyc29uYWxpemF0aW9uSWQgIT09IHJlY2VpdmVkSWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5wZXJzb25hbGl6YXRpb25JZCA9IHJlY2VpdmVkSWQ7XG4gICAgICAgICAgICAgIHRoaXMud2luUmVmLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAgIFBFUlNPTkFMSVpBVElPTl9LRVksXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJzb25hbGl6YXRpb25JZFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=