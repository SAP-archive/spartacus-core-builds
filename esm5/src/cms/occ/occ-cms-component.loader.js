/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PageType } from '../../occ/occ-models/index';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { CmsStructureConfig } from '../config/cms-structure.config';
import { CmsComponentAdapter } from '../services/cms-component.adapter';
import { CmsComponentLoader } from '../services/cms-component.loader';
import { CmsStructureConfigService } from '../services/cms-structure-config.service';
var OccCmsComponentLoader = /** @class */ (function (_super) {
    tslib_1.__extends(OccCmsComponentLoader, _super);
    function OccCmsComponentLoader(http, config, cmsStructureConfigService, adapter, occEndpoints) {
        var _this = _super.call(this, cmsStructureConfigService, adapter) || this;
        _this.http = http;
        _this.config = config;
        _this.cmsStructureConfigService = cmsStructureConfigService;
        _this.adapter = adapter;
        _this.occEndpoints = occEndpoints;
        _this.headers = new HttpHeaders().set('Content-Type', 'application/json');
        return _this;
    }
    /**
     * @protected
     * @return {?}
     */
    OccCmsComponentLoader.prototype.getBaseEndPoint = /**
     * @protected
     * @return {?}
     */
    function () {
        return this.occEndpoints.getEndpoint('cms');
    };
    /**
     * @template T
     * @param {?} id
     * @param {?} pageContext
     * @return {?}
     */
    OccCmsComponentLoader.prototype.load = /**
     * @template T
     * @param {?} id
     * @param {?} pageContext
     * @return {?}
     */
    function (id, pageContext) {
        return this.http
            .get(this.getBaseEndPoint() + ("/components/" + id), {
            headers: this.headers,
            params: new HttpParams({
                fromString: this.getRequestParams(pageContext),
            }),
        })
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @private
     * @param {?} pageContext
     * @return {?}
     */
    OccCmsComponentLoader.prototype.getRequestParams = /**
     * @private
     * @param {?} pageContext
     * @return {?}
     */
    function (pageContext) {
        /** @type {?} */
        var requestParams = '';
        switch (pageContext.type) {
            case PageType.PRODUCT_PAGE: {
                requestParams = 'productCode=' + pageContext.id;
                break;
            }
            case PageType.CATEGORY_PAGE: {
                requestParams = 'categoryCode=' + pageContext.id;
                break;
            }
            case PageType.CATALOG_PAGE: {
                requestParams = 'catalogCode=' + pageContext.id;
                break;
            }
        }
        return requestParams;
    };
    OccCmsComponentLoader.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccCmsComponentLoader.ctorParameters = function () { return [
        { type: HttpClient },
        { type: CmsStructureConfig },
        { type: CmsStructureConfigService },
        { type: CmsComponentAdapter, decorators: [{ type: Optional }] },
        { type: OccEndpointsService }
    ]; };
    return OccCmsComponentLoader;
}(CmsComponentLoader));
export { OccCmsComponentLoader };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    OccCmsComponentLoader.prototype.headers;
    /**
     * @type {?}
     * @private
     */
    OccCmsComponentLoader.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    OccCmsComponentLoader.prototype.config;
    /**
     * @type {?}
     * @protected
     */
    OccCmsComponentLoader.prototype.cmsStructureConfigService;
    /**
     * @type {?}
     * @protected
     */
    OccCmsComponentLoader.prototype.adapter;
    /**
     * @type {?}
     * @private
     */
    OccCmsComponentLoader.prototype.occEndpoints;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNtcy1jb21wb25lbnQubG9hZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Ntcy9vY2Mvb2NjLWNtcy1jb21wb25lbnQubG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFnQixRQUFRLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUUvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUVyRjtJQUMyQyxpREFBdUI7SUFHaEUsK0JBQ1UsSUFBZ0IsRUFDZCxNQUEwQixFQUMxQix5QkFBb0QsRUFDeEMsT0FBMEMsRUFDeEQsWUFBaUM7UUFMM0MsWUFPRSxrQkFBTSx5QkFBeUIsRUFBRSxPQUFPLENBQUMsU0FDMUM7UUFQUyxVQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2QsWUFBTSxHQUFOLE1BQU0sQ0FBb0I7UUFDMUIsK0JBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQUN4QyxhQUFPLEdBQVAsT0FBTyxDQUFtQztRQUN4RCxrQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFQakMsYUFBTyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDOztJQVU5RSxDQUFDOzs7OztJQUVTLCtDQUFlOzs7O0lBQXpCO1FBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7Ozs7O0lBRUQsb0NBQUk7Ozs7OztJQUFKLFVBQ0UsRUFBVSxFQUNWLFdBQXdCO1FBRXhCLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFHLGlCQUFlLEVBQUksQ0FBQSxFQUFFO1lBQ3BELE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixNQUFNLEVBQUUsSUFBSSxVQUFVLENBQUM7Z0JBQ3JCLFVBQVUsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO2FBQy9DLENBQUM7U0FDSCxDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFDLEtBQVUsSUFBSyxPQUFBLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7Ozs7O0lBRU8sZ0RBQWdCOzs7OztJQUF4QixVQUF5QixXQUF3Qjs7WUFDM0MsYUFBYSxHQUFHLEVBQUU7UUFDdEIsUUFBUSxXQUFXLENBQUMsSUFBSSxFQUFFO1lBQ3hCLEtBQUssUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUMxQixhQUFhLEdBQUcsY0FBYyxHQUFHLFdBQVcsQ0FBQyxFQUFFLENBQUM7Z0JBQ2hELE1BQU07YUFDUDtZQUNELEtBQUssUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMzQixhQUFhLEdBQUcsZUFBZSxHQUFHLFdBQVcsQ0FBQyxFQUFFLENBQUM7Z0JBQ2pELE1BQU07YUFDUDtZQUNELEtBQUssUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUMxQixhQUFhLEdBQUcsY0FBYyxHQUFHLFdBQVcsQ0FBQyxFQUFFLENBQUM7Z0JBQ2hELE1BQU07YUFDUDtTQUNGO1FBRUQsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQzs7Z0JBbERGLFVBQVU7Ozs7Z0JBWkYsVUFBVTtnQkFPVixrQkFBa0I7Z0JBR2xCLHlCQUF5QjtnQkFGekIsbUJBQW1CLHVCQVl2QixRQUFRO2dCQWZKLG1CQUFtQjs7SUEwRDVCLDRCQUFDO0NBQUEsQUFuREQsQ0FDMkMsa0JBQWtCLEdBa0Q1RDtTQWxEWSxxQkFBcUI7Ozs7OztJQUNoQyx3Q0FBOEU7Ozs7O0lBRzVFLHFDQUF3Qjs7Ozs7SUFDeEIsdUNBQW9DOzs7OztJQUNwQywwREFBOEQ7Ozs7O0lBQzlELHdDQUFnRTs7Ozs7SUFDaEUsNkNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudCwgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi9vY2Mvb2NjLW1vZGVscy9pbmRleCc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb2NjL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uL3JvdXRpbmcvaW5kZXgnO1xuaW1wb3J0IHsgQ21zU3RydWN0dXJlQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2Ntcy1zdHJ1Y3R1cmUuY29uZmlnJztcbmltcG9ydCB7IENtc0NvbXBvbmVudEFkYXB0ZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9jbXMtY29tcG9uZW50LmFkYXB0ZXInO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50TG9hZGVyIH0gZnJvbSAnLi4vc2VydmljZXMvY21zLWNvbXBvbmVudC5sb2FkZXInO1xuaW1wb3J0IHsgQ21zU3RydWN0dXJlQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Ntcy1zdHJ1Y3R1cmUtY29uZmlnLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjQ21zQ29tcG9uZW50TG9hZGVyIGV4dGVuZHMgQ21zQ29tcG9uZW50TG9hZGVyPGFueT4ge1xuICBwcm90ZWN0ZWQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpLnNldCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogQ21zU3RydWN0dXJlQ29uZmlnLFxuICAgIHByb3RlY3RlZCBjbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlOiBDbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHByb3RlY3RlZCBhZGFwdGVyOiBDbXNDb21wb25lbnRBZGFwdGVyPENtc0NvbXBvbmVudD4sXG4gICAgcHJpdmF0ZSBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoY21zU3RydWN0dXJlQ29uZmlnU2VydmljZSwgYWRhcHRlcik7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0QmFzZUVuZFBvaW50KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KCdjbXMnKTtcbiAgfVxuXG4gIGxvYWQ8VCBleHRlbmRzIENtc0NvbXBvbmVudD4oXG4gICAgaWQ6IHN0cmluZyxcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHRcbiAgKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxUPih0aGlzLmdldEJhc2VFbmRQb2ludCgpICsgYC9jb21wb25lbnRzLyR7aWR9YCwge1xuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICAgIHBhcmFtczogbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgICAgIGZyb21TdHJpbmc6IHRoaXMuZ2V0UmVxdWVzdFBhcmFtcyhwYWdlQ29udGV4dCksXG4gICAgICAgIH0pLFxuICAgICAgfSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IuanNvbigpKSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSZXF1ZXN0UGFyYW1zKHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCk6IHN0cmluZyB7XG4gICAgbGV0IHJlcXVlc3RQYXJhbXMgPSAnJztcbiAgICBzd2l0Y2ggKHBhZ2VDb250ZXh0LnR5cGUpIHtcbiAgICAgIGNhc2UgUGFnZVR5cGUuUFJPRFVDVF9QQUdFOiB7XG4gICAgICAgIHJlcXVlc3RQYXJhbXMgPSAncHJvZHVjdENvZGU9JyArIHBhZ2VDb250ZXh0LmlkO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgUGFnZVR5cGUuQ0FURUdPUllfUEFHRToge1xuICAgICAgICByZXF1ZXN0UGFyYW1zID0gJ2NhdGVnb3J5Q29kZT0nICsgcGFnZUNvbnRleHQuaWQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBQYWdlVHlwZS5DQVRBTE9HX1BBR0U6IHtcbiAgICAgICAgcmVxdWVzdFBhcmFtcyA9ICdjYXRhbG9nQ29kZT0nICsgcGFnZUNvbnRleHQuaWQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXF1ZXN0UGFyYW1zO1xuICB9XG59XG4iXX0=