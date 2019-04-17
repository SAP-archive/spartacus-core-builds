/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PageType, } from '../../occ/occ-models/index';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { CmsStructureConfig } from '../config/cms-structure.config';
import { CmsPageAdapter } from '../services/cms-page.adapter';
import { CmsPageLoader } from '../services/cms-page.loader';
import { CmsStructureConfigService } from '../services/cms-structure-config.service';
export class OccCmsPageLoader extends CmsPageLoader {
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
     * @param {?} pageContext
     * @param {?=} fields
     * @return {?}
     */
    load(pageContext, fields) {
        /** @type {?} */
        let httpStringParams = '';
        if (pageContext.id !== 'smartedit-preview') {
            httpStringParams = 'pageType=' + pageContext.type;
            if (pageContext.type === PageType.CONTENT_PAGE) {
                httpStringParams =
                    httpStringParams + '&pageLabelOrId=' + pageContext.id;
            }
            else {
                httpStringParams = httpStringParams + '&code=' + pageContext.id;
            }
        }
        if (fields !== undefined) {
            httpStringParams = httpStringParams + '&fields=' + fields;
        }
        return this.http.get(this.getBaseEndPoint() + `/pages`, {
            headers: this.headers,
            params: new HttpParams({
                fromString: httpStringParams,
            }),
        });
    }
    /**
     * @param {?} idList
     * @param {?} pageContext
     * @param {?=} fields
     * @param {?=} currentPage
     * @param {?=} pageSize
     * @param {?=} sort
     * @return {?}
     */
    loadListComponents(idList, pageContext, fields, currentPage, pageSize, sort) {
        /** @type {?} */
        let requestParams = this.getRequestParams(pageContext, fields);
        if (currentPage !== undefined) {
            requestParams === ''
                ? (requestParams = requestParams + 'currentPage=' + currentPage)
                : (requestParams = requestParams + '&currentPage=' + currentPage);
        }
        if (pageSize !== undefined) {
            requestParams = requestParams + '&pageSize=' + pageSize;
        }
        if (sort !== undefined) {
            requestParams = requestParams + '&sort=' + sort;
        }
        return this.http
            .post(this.getBaseEndPoint() + `/components`, idList, {
            headers: this.headers,
            params: new HttpParams({
                fromString: requestParams,
            }),
        })
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @private
     * @param {?} pageContext
     * @param {?=} fields
     * @return {?}
     */
    getRequestParams(pageContext, fields) {
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
        if (fields !== undefined) {
            requestParams === ''
                ? (requestParams = requestParams + 'fields=' + fields)
                : (requestParams = requestParams + '&fields=' + fields);
        }
        return requestParams;
    }
}
OccCmsPageLoader.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccCmsPageLoader.ctorParameters = () => [
    { type: HttpClient },
    { type: CmsStructureConfig },
    { type: CmsStructureConfigService },
    { type: CmsPageAdapter, decorators: [{ type: Optional }] },
    { type: OccEndpointsService }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    OccCmsPageLoader.prototype.headers;
    /**
     * @type {?}
     * @private
     */
    OccCmsPageLoader.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    OccCmsPageLoader.prototype.config;
    /**
     * @type {?}
     * @protected
     */
    OccCmsPageLoader.prototype.cmsStructureConfigService;
    /**
     * @type {?}
     * @protected
     */
    OccCmsPageLoader.prototype.adapter;
    /**
     * @type {?}
     * @private
     */
    OccCmsPageLoader.prototype.occEndpoints;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNtcy1wYWdlLmxvYWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvb2NjL29jYy1jbXMtcGFnZS5sb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFHTCxRQUFRLEdBQ1QsTUFBTSw0QkFBNEIsQ0FBQztBQUNwQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUUvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUVwRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBR3JGLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxhQUFzQjs7Ozs7Ozs7SUFHMUQsWUFDVSxJQUFnQixFQUNkLE1BQTBCLEVBQzFCLHlCQUFvRCxFQUN4QyxPQUFnQyxFQUM5QyxZQUFpQztRQUV6QyxLQUFLLENBQUMseUJBQXlCLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFObEMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQW9CO1FBQzFCLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFDeEMsWUFBTyxHQUFQLE9BQU8sQ0FBeUI7UUFDOUMsaUJBQVksR0FBWixZQUFZ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S0FBSyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzNCLGFBQWEsR0FBRyxlQUFlLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQztnQkFDakQsTUFBTTthQUNQO1lBQ0QsS0FBSyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzFCLGFBQWEsR0FBRyxjQUFjLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQztnQkFDaEQsTUFBTTthQUNQO1NBQ0Y7UUFFRCxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDeEIsYUFBYSxLQUFLLEVBQUU7Z0JBQ2xCLENBQUMsQ0FBQyxDQUFDLGFBQWEsR0FBRyxhQUFhLEdBQUcsU0FBUyxHQUFHLE1BQU0sQ0FBQztnQkFDdEQsQ0FBQyxDQUFDLENBQUMsYUFBYSxHQUFHLGFBQWEsR0FBRyxVQUFVLEdBQUcsTUFBTSxDQUFDLENBQUM7U0FDM0Q7UUFFRCxPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDOzs7WUFuR0YsVUFBVTs7OztZQWpCRixVQUFVO1lBV1Ysa0JBQWtCO1lBSWxCLHlCQUF5QjtZQUZ6QixjQUFjLHVCQVlsQixRQUFRO1lBaEJKLG1CQUFtQjs7Ozs7OztJQVUxQixtQ0FBOEU7Ozs7O0lBRzVFLGdDQUF3Qjs7Ozs7SUFDeEIsa0NBQW9DOzs7OztJQUNwQyxxREFBOEQ7Ozs7O0lBQzlELG1DQUFzRDs7Ozs7SUFDdEQsd0NBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIENtc0NvbXBvbmVudExpc3QsXG4gIENNU1BhZ2UsXG4gIFBhZ2VUeXBlLFxufSBmcm9tICcuLi8uLi9vY2Mvb2NjLW1vZGVscy9pbmRleCc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb2NjL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uL3JvdXRpbmcvaW5kZXgnO1xuaW1wb3J0IHsgQ21zU3RydWN0dXJlQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2Ntcy1zdHJ1Y3R1cmUuY29uZmlnJztcbmltcG9ydCB7IElkTGlzdCB9IGZyb20gJy4uL21vZGVsL2lkTGlzdC5tb2RlbCc7XG5pbXBvcnQgeyBDbXNQYWdlQWRhcHRlciB9IGZyb20gJy4uL3NlcnZpY2VzL2Ntcy1wYWdlLmFkYXB0ZXInO1xuaW1wb3J0IHsgQ21zUGFnZUxvYWRlciB9IGZyb20gJy4uL3NlcnZpY2VzL2Ntcy1wYWdlLmxvYWRlcic7XG5pbXBvcnQgeyBDbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY21zLXN0cnVjdHVyZS1jb25maWcuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NDbXNQYWdlTG9hZGVyIGV4dGVuZHMgQ21zUGFnZUxvYWRlcjxDTVNQYWdlPiB7XG4gIHByb3RlY3RlZCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCkuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBDbXNTdHJ1Y3R1cmVDb25maWcsXG4gICAgcHJvdGVjdGVkIGNtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2U6IENtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHJvdGVjdGVkIGFkYXB0ZXI6IENtc1BhZ2VBZGFwdGVyPENNU1BhZ2U+LFxuICAgIHByaXZhdGUgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKGNtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2UsIGFkYXB0ZXIpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldEJhc2VFbmRQb2ludCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm9jY0VuZHBvaW50cy5nZXRFbmRwb2ludCgnY21zJyk7XG4gIH1cblxuICBsb2FkKHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCwgZmllbGRzPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxDTVNQYWdlPiB7XG4gICAgbGV0IGh0dHBTdHJpbmdQYXJhbXMgPSAnJztcblxuICAgIGlmIChwYWdlQ29udGV4dC5pZCAhPT0gJ3NtYXJ0ZWRpdC1wcmV2aWV3Jykge1xuICAgICAgaHR0cFN0cmluZ1BhcmFtcyA9ICdwYWdlVHlwZT0nICsgcGFnZUNvbnRleHQudHlwZTtcblxuICAgICAgaWYgKHBhZ2VDb250ZXh0LnR5cGUgPT09IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRSkge1xuICAgICAgICBodHRwU3RyaW5nUGFyYW1zID1cbiAgICAgICAgICBodHRwU3RyaW5nUGFyYW1zICsgJyZwYWdlTGFiZWxPcklkPScgKyBwYWdlQ29udGV4dC5pZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGh0dHBTdHJpbmdQYXJhbXMgPSBodHRwU3RyaW5nUGFyYW1zICsgJyZjb2RlPScgKyBwYWdlQ29udGV4dC5pZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZmllbGRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGh0dHBTdHJpbmdQYXJhbXMgPSBodHRwU3RyaW5nUGFyYW1zICsgJyZmaWVsZHM9JyArIGZpZWxkcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmdldEJhc2VFbmRQb2ludCgpICsgYC9wYWdlc2AsIHtcbiAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICAgIHBhcmFtczogbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgICBmcm9tU3RyaW5nOiBodHRwU3RyaW5nUGFyYW1zLFxuICAgICAgfSksXG4gICAgfSk7XG4gIH1cblxuICBsb2FkTGlzdENvbXBvbmVudHMoXG4gICAgaWRMaXN0OiBJZExpc3QsXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LFxuICAgIGZpZWxkcz86IHN0cmluZyxcbiAgICBjdXJyZW50UGFnZT86IG51bWJlcixcbiAgICBwYWdlU2l6ZT86IG51bWJlcixcbiAgICBzb3J0Pzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Q21zQ29tcG9uZW50TGlzdD4ge1xuICAgIGxldCByZXF1ZXN0UGFyYW1zID0gdGhpcy5nZXRSZXF1ZXN0UGFyYW1zKHBhZ2VDb250ZXh0LCBmaWVsZHMpO1xuICAgIGlmIChjdXJyZW50UGFnZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXF1ZXN0UGFyYW1zID09PSAnJ1xuICAgICAgICA/IChyZXF1ZXN0UGFyYW1zID0gcmVxdWVzdFBhcmFtcyArICdjdXJyZW50UGFnZT0nICsgY3VycmVudFBhZ2UpXG4gICAgICAgIDogKHJlcXVlc3RQYXJhbXMgPSByZXF1ZXN0UGFyYW1zICsgJyZjdXJyZW50UGFnZT0nICsgY3VycmVudFBhZ2UpO1xuICAgIH1cbiAgICBpZiAocGFnZVNpemUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdFBhcmFtcyA9IHJlcXVlc3RQYXJhbXMgKyAnJnBhZ2VTaXplPScgKyBwYWdlU2l6ZTtcbiAgICB9XG4gICAgaWYgKHNvcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdFBhcmFtcyA9IHJlcXVlc3RQYXJhbXMgKyAnJnNvcnQ9JyArIHNvcnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBvc3Q8Q21zQ29tcG9uZW50TGlzdD4odGhpcy5nZXRCYXNlRW5kUG9pbnQoKSArIGAvY29tcG9uZW50c2AsIGlkTGlzdCwge1xuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICAgIHBhcmFtczogbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgICAgIGZyb21TdHJpbmc6IHJlcXVlc3RQYXJhbXMsXG4gICAgICAgIH0pLFxuICAgICAgfSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IuanNvbigpKSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSZXF1ZXN0UGFyYW1zKHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCwgZmllbGRzPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBsZXQgcmVxdWVzdFBhcmFtcyA9ICcnO1xuICAgIHN3aXRjaCAocGFnZUNvbnRleHQudHlwZSkge1xuICAgICAgY2FzZSBQYWdlVHlwZS5QUk9EVUNUX1BBR0U6IHtcbiAgICAgICAgcmVxdWVzdFBhcmFtcyA9ICdwcm9kdWN0Q29kZT0nICsgcGFnZUNvbnRleHQuaWQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBQYWdlVHlwZS5DQVRFR09SWV9QQUdFOiB7XG4gICAgICAgIHJlcXVlc3RQYXJhbXMgPSAnY2F0ZWdvcnlDb2RlPScgKyBwYWdlQ29udGV4dC5pZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFBhZ2VUeXBlLkNBVEFMT0dfUEFHRToge1xuICAgICAgICByZXF1ZXN0UGFyYW1zID0gJ2NhdGFsb2dDb2RlPScgKyBwYWdlQ29udGV4dC5pZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZpZWxkcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXF1ZXN0UGFyYW1zID09PSAnJ1xuICAgICAgICA/IChyZXF1ZXN0UGFyYW1zID0gcmVxdWVzdFBhcmFtcyArICdmaWVsZHM9JyArIGZpZWxkcylcbiAgICAgICAgOiAocmVxdWVzdFBhcmFtcyA9IHJlcXVlc3RQYXJhbXMgKyAnJmZpZWxkcz0nICsgZmllbGRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVxdWVzdFBhcmFtcztcbiAgfVxufVxuIl19