/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class OccCmsComponentLoader extends CmsComponentLoader {
    /**
     * @param {?} http
     * @param {?} config
     * @param {?} cmsStructureConfigService
     * @param {?} adapter
     * @param {?} occEndpoints
     */
    constructor(http, config, cmsStructureConfigService, adapter, occEndpoints) {
        super(cmsStructureConfigService, adapter);
        this.http = http;
        this.config = config;
        this.cmsStructureConfigService = cmsStructureConfigService;
        this.adapter = adapter;
        this.occEndpoints = occEndpoints;
        this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    }
    /**
     * @protected
     * @return {?}
     */
    getBaseEndPoint() {
        return this.occEndpoints.getEndpoint('cms');
    }
    /**
     * @template T
     * @param {?} id
     * @param {?} pageContext
     * @return {?}
     */
    load(id, pageContext) {
        return this.http
            .get(this.getBaseEndPoint() + `/components/${id}`, {
            headers: this.headers,
            params: new HttpParams({
                fromString: this.getRequestParams(pageContext),
            }),
        })
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @private
     * @param {?} pageContext
     * @return {?}
     */
    getRequestParams(pageContext) {
        /** @type {?} */
        let requestParams = '';
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
    }
}
OccCmsComponentLoader.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccCmsComponentLoader.ctorParameters = () => [
    { type: HttpClient },
    { type: CmsStructureConfig },
    { type: CmsStructureConfigService },
    { type: CmsComponentAdapter, decorators: [{ type: Optional }] },
    { type: OccEndpointsService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNtcy1jb21wb25lbnQubG9hZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Ntcy9vY2Mvb2NjLWNtcy1jb21wb25lbnQubG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQWdCLFFBQVEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBRS9FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBR3JGLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxrQkFBdUI7Ozs7Ozs7O0lBR2hFLFlBQ1UsSUFBZ0IsRUFDZCxNQUEwQixFQUMxQix5QkFBb0QsRUFDeEMsT0FBMEMsRUFDeEQsWUFBaUM7UUFFekMsS0FBSyxDQUFDLHlCQUF5QixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBTmxDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFvQjtRQUMxQiw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBQ3hDLFlBQU8sR0FBUCxPQUFPLENBQW1DO1FBQ3hELGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQVBqQyxZQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFVOUUsQ0FBQzs7Ozs7SUFFUyxlQUFlO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7OztJQUVELElBQUksQ0FDRixFQUFVLEVBQ1YsV0FBd0I7UUFFeEIsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBSSxJQUFJLENBQUMsZUFBZSxFQUFFLEdBQUcsZUFBZSxFQUFFLEVBQUUsRUFBRTtZQUNwRCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsTUFBTSxFQUFFLElBQUksVUFBVSxDQUFDO2dCQUNyQixVQUFVLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQzthQUMvQyxDQUFDO1NBQ0gsQ0FBQzthQUNELElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7Ozs7O0lBRU8sZ0JBQWdCLENBQUMsV0FBd0I7O1lBQzNDLGFBQWEsR0FBRyxFQUFFO1FBQ3RCLFFBQVEsV0FBVyxDQUFDLElBQUksRUFBRTtZQUN4QixLQUFLLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDMUIsYUFBYSxHQUFHLGNBQWMsR0FBRyxXQUFXLENBQUMsRUFBRSxDQUFDO2dCQUNoRCxNQUFNO2FBQ1A7WUFDRCxLQUFLLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDM0IsYUFBYSxHQUFHLGVBQWUsR0FBRyxXQUFXLENBQUMsRUFBRSxDQUFDO2dCQUNqRCxNQUFNO2FBQ1A7WUFDRCxLQUFLLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDMUIsYUFBYSxHQUFHLGNBQWMsR0FBRyxXQUFXLENBQUMsRUFBRSxDQUFDO2dCQUNoRCxNQUFNO2FBQ1A7U0FDRjtRQUVELE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7OztZQWxERixVQUFVOzs7O1lBWkYsVUFBVTtZQU9WLGtCQUFrQjtZQUdsQix5QkFBeUI7WUFGekIsbUJBQW1CLHVCQVl2QixRQUFRO1lBZkosbUJBQW1COzs7Ozs7O0lBUzFCLHdDQUE4RTs7Ozs7SUFHNUUscUNBQXdCOzs7OztJQUN4Qix1Q0FBb0M7Ozs7O0lBQ3BDLDBEQUE4RDs7Ozs7SUFDOUQsd0NBQWdFOzs7OztJQUNoRSw2Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50LCBQYWdlVHlwZSB9IGZyb20gJy4uLy4uL29jYy9vY2MtbW9kZWxzL2luZGV4JztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vY2Mvc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vcm91dGluZy9pbmRleCc7XG5pbXBvcnQgeyBDbXNTdHJ1Y3R1cmVDb25maWcgfSBmcm9tICcuLi9jb25maWcvY21zLXN0cnVjdHVyZS5jb25maWcnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50QWRhcHRlciB9IGZyb20gJy4uL3NlcnZpY2VzL2Ntcy1jb21wb25lbnQuYWRhcHRlcic7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRMb2FkZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9jbXMtY29tcG9uZW50LmxvYWRlcic7XG5pbXBvcnQgeyBDbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY21zLXN0cnVjdHVyZS1jb25maWcuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NDbXNDb21wb25lbnRMb2FkZXIgZXh0ZW5kcyBDbXNDb21wb25lbnRMb2FkZXI8YW55PiB7XG4gIHByb3RlY3RlZCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCkuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBDbXNTdHJ1Y3R1cmVDb25maWcsXG4gICAgcHJvdGVjdGVkIGNtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2U6IENtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHJvdGVjdGVkIGFkYXB0ZXI6IENtc0NvbXBvbmVudEFkYXB0ZXI8Q21zQ29tcG9uZW50PixcbiAgICBwcml2YXRlIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZVxuICApIHtcbiAgICBzdXBlcihjbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlLCBhZGFwdGVyKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRCYXNlRW5kUG9pbnQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vY2NFbmRwb2ludHMuZ2V0RW5kcG9pbnQoJ2NtcycpO1xuICB9XG5cbiAgbG9hZDxUIGV4dGVuZHMgQ21zQ29tcG9uZW50PihcbiAgICBpZDogc3RyaW5nLFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuICApOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PFQ+KHRoaXMuZ2V0QmFzZUVuZFBvaW50KCkgKyBgL2NvbXBvbmVudHMvJHtpZH1gLCB7XG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICAgICAgcGFyYW1zOiBuZXcgSHR0cFBhcmFtcyh7XG4gICAgICAgICAgZnJvbVN0cmluZzogdGhpcy5nZXRSZXF1ZXN0UGFyYW1zKHBhZ2VDb250ZXh0KSxcbiAgICAgICAgfSksXG4gICAgICB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpKSk7XG4gIH1cblxuICBwcml2YXRlIGdldFJlcXVlc3RQYXJhbXMocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0KTogc3RyaW5nIHtcbiAgICBsZXQgcmVxdWVzdFBhcmFtcyA9ICcnO1xuICAgIHN3aXRjaCAocGFnZUNvbnRleHQudHlwZSkge1xuICAgICAgY2FzZSBQYWdlVHlwZS5QUk9EVUNUX1BBR0U6IHtcbiAgICAgICAgcmVxdWVzdFBhcmFtcyA9ICdwcm9kdWN0Q29kZT0nICsgcGFnZUNvbnRleHQuaWQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBQYWdlVHlwZS5DQVRFR09SWV9QQUdFOiB7XG4gICAgICAgIHJlcXVlc3RQYXJhbXMgPSAnY2F0ZWdvcnlDb2RlPScgKyBwYWdlQ29udGV4dC5pZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFBhZ2VUeXBlLkNBVEFMT0dfUEFHRToge1xuICAgICAgICByZXF1ZXN0UGFyYW1zID0gJ2NhdGFsb2dDb2RlPScgKyBwYWdlQ29udGV4dC5pZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcXVlc3RQYXJhbXM7XG4gIH1cbn1cbiJdfQ==