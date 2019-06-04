/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from 'rxjs/operators';
import { CMS_COMPONENT_NORMALIZER } from '../../../cms/connectors/component/converters';
import { PageType } from '../../../model/cms.model';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
export class OccCmsComponentAdapter {
    /**
     * @param {?} http
     * @param {?} occEndpoints
     * @param {?} converter
     */
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
        this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    }
    /**
     * @template T
     * @param {?} id
     * @param {?} pageContext
     * @return {?}
     */
    load(id, pageContext) {
        return this.http
            .get(this.getComponentEndPoint(id, pageContext), {
            headers: this.headers,
        })
            .pipe(this.converter.pipeable(CMS_COMPONENT_NORMALIZER));
    }
    /**
     * @param {?} ids
     * @param {?} pageContext
     * @param {?=} fields
     * @param {?=} currentPage
     * @param {?=} pageSize
     * @param {?=} sort
     * @return {?}
     */
    findComponentsByIds(ids, pageContext, fields = 'DEFAULT', currentPage = 0, pageSize = ids.length, sort) {
        /** @type {?} */
        const requestParams = Object.assign({}, this.getContextParams(pageContext), this.getPaginationParams(currentPage, pageSize, sort));
        requestParams['componentIds'] = ids.toString();
        return this.http
            .get(this.getComponentsEndpoint(requestParams, fields), {
            headers: this.headers,
        })
            .pipe(pluck('component'), this.converter.pipeableMany(CMS_COMPONENT_NORMALIZER));
    }
    /**
     * @param {?} ids
     * @param {?} pageContext
     * @param {?=} fields
     * @param {?=} currentPage
     * @param {?=} pageSize
     * @param {?=} sort
     * @return {?}
     */
    findComponentsByIdsLegacy(ids, pageContext, fields = 'DEFAULT', currentPage = 0, pageSize = ids.length, sort) {
        /** @type {?} */
        const idList = { idList: ids };
        /** @type {?} */
        const requestParams = Object.assign({}, this.getContextParams(pageContext), this.getPaginationParams(currentPage, pageSize, sort));
        return this.http
            .post(this.getComponentsEndpoint(requestParams, fields), idList, {
            headers: this.headers,
        })
            .pipe(pluck('component'), this.converter.pipeableMany(CMS_COMPONENT_NORMALIZER));
    }
    /**
     * @protected
     * @param {?} id
     * @param {?} pageContext
     * @return {?}
     */
    getComponentEndPoint(id, pageContext) {
        return this.occEndpoints.getUrl('component', { id }, this.getContextParams(pageContext));
    }
    /**
     * @protected
     * @param {?} requestParams
     * @param {?} fields
     * @return {?}
     */
    getComponentsEndpoint(requestParams, fields) {
        return this.occEndpoints.getUrl('components', { fields }, requestParams);
    }
    /**
     * @private
     * @param {?=} currentPage
     * @param {?=} pageSize
     * @param {?=} sort
     * @return {?}
     */
    getPaginationParams(currentPage, pageSize, sort) {
        /** @type {?} */
        const requestParams = {};
        if (currentPage !== undefined) {
            requestParams['currentPage'] = currentPage.toString();
        }
        if (pageSize !== undefined) {
            requestParams['pageSize'] = pageSize.toString();
        }
        if (sort !== undefined) {
            requestParams['sort'] = sort;
        }
        return requestParams;
    }
    /**
     * @private
     * @param {?} pageContext
     * @return {?}
     */
    getContextParams(pageContext) {
        /** @type {?} */
        let requestParams = {};
        switch (pageContext.type) {
            case PageType.PRODUCT_PAGE: {
                requestParams = { productCode: pageContext.id };
                break;
            }
            case PageType.CATEGORY_PAGE: {
                requestParams = { categoryCode: pageContext.id };
                break;
            }
            case PageType.CATALOG_PAGE: {
                requestParams = { catalogCode: pageContext.id };
                break;
            }
        }
        return requestParams;
    }
}
OccCmsComponentAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccCmsComponentAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    OccCmsComponentAdapter.prototype.headers;
    /**
     * @type {?}
     * @private
     */
    OccCmsComponentAdapter.prototype.http;
    /**
     * @type {?}
     * @private
     */
    OccCmsComponentAdapter.prototype.occEndpoints;
    /**
     * @type {?}
     * @protected
     */
    OccCmsComponentAdapter.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNtcy1jb21wb25lbnQuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvY21zL29jYy1jbXMtY29tcG9uZW50LmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdkMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDeEYsT0FBTyxFQUFnQixRQUFRLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVuRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUczRSxNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7SUFHakMsWUFDVSxJQUFnQixFQUNoQixZQUFpQyxFQUMvQixTQUEyQjtRQUY3QixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUMvQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUw3QixZQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFNM0UsQ0FBQzs7Ozs7OztJQUVKLElBQUksQ0FDRixFQUFVLEVBQ1YsV0FBd0I7UUFFeEIsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxFQUFFO1lBQ2xELE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDO2FBQ0Qs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QUVPLGdCQUFnQixDQUN0QixXQUF3Qjs7WUFFcEIsYUFBYSxHQUFHLEVBQUU7UUFDdEIsUUFBUSxXQUFXLENBQUMsSUFBSSxFQUFFO1lBQ3hCLEtBQUssUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUMxQixhQUFhLEdBQUcsRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNoRCxNQUFNO2FBQ1A7WUFDRCxLQUFLLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDM0IsYUFBYSxHQUFHLEVBQUUsWUFBWSxFQUFFLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDakQsTUFBTTthQUNQO1lBQ0QsS0FBSyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzFCLGFBQWEsR0FBRyxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ2hELE1BQU07YUFDUDtTQUNGO1FBRUQsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQzs7O1lBaklGLFVBQVU7Ozs7WUFaRixVQUFVO1lBVVYsbUJBQW1CO1lBRm5CLGdCQUFnQjs7Ozs7OztJQU12Qix5Q0FBOEU7Ozs7O0lBRzVFLHNDQUF3Qjs7Ozs7SUFDeEIsOENBQXlDOzs7OztJQUN6QywyQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHBsdWNrIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50QWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2Ntcy9jb25uZWN0b3JzL2NvbXBvbmVudC9jbXMtY29tcG9uZW50LmFkYXB0ZXInO1xuaW1wb3J0IHsgQ01TX0NPTVBPTkVOVF9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vY21zL2Nvbm5lY3RvcnMvY29tcG9uZW50L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50LCBQYWdlVHlwZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcnO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjQ21zQ29tcG9uZW50QWRhcHRlciBpbXBsZW1lbnRzIENtc0NvbXBvbmVudEFkYXB0ZXIge1xuICBwcm90ZWN0ZWQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpLnNldCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZVxuICApIHt9XG5cbiAgbG9hZDxUIGV4dGVuZHMgQ21zQ29tcG9uZW50PihcbiAgICBpZDogc3RyaW5nLFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuICApOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PFQ+KHRoaXMuZ2V0Q29tcG9uZW50RW5kUG9pbnQoaWQsIHBhZ2VDb250ZXh0KSwge1xuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICB9KVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXIucGlwZWFibGU8YW55LCBUPihDTVNfQ09NUE9ORU5UX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIGZpbmRDb21wb25lbnRzQnlJZHMoXG4gICAgaWRzOiBzdHJpbmdbXSxcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsXG4gICAgZmllbGRzID0gJ0RFRkFVTFQnLFxuICAgIGN1cnJlbnRQYWdlID0gMCxcbiAgICBwYWdlU2l6ZSA9IGlkcy5sZW5ndGgsXG4gICAgc29ydD86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENtc0NvbXBvbmVudFtdPiB7XG4gICAgY29uc3QgcmVxdWVzdFBhcmFtcyA9IHtcbiAgICAgIC4uLnRoaXMuZ2V0Q29udGV4dFBhcmFtcyhwYWdlQ29udGV4dCksXG4gICAgICAuLi50aGlzLmdldFBhZ2luYXRpb25QYXJhbXMoY3VycmVudFBhZ2UsIHBhZ2VTaXplLCBzb3J0KSxcbiAgICB9O1xuXG4gICAgcmVxdWVzdFBhcmFtc1snY29tcG9uZW50SWRzJ10gPSBpZHMudG9TdHJpbmcoKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8T2NjLkNvbXBvbmVudExpc3Q+KFxuICAgICAgICB0aGlzLmdldENvbXBvbmVudHNFbmRwb2ludChyZXF1ZXN0UGFyYW1zLCBmaWVsZHMpLFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgICB9XG4gICAgICApXG4gICAgICAucGlwZShcbiAgICAgICAgcGx1Y2soJ2NvbXBvbmVudCcpLFxuICAgICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZU1hbnkoQ01TX0NPTVBPTkVOVF9OT1JNQUxJWkVSKVxuICAgICAgKTtcbiAgfVxuXG4gIGZpbmRDb21wb25lbnRzQnlJZHNMZWdhY3koXG4gICAgaWRzOiBzdHJpbmdbXSxcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsXG4gICAgZmllbGRzID0gJ0RFRkFVTFQnLFxuICAgIGN1cnJlbnRQYWdlID0gMCxcbiAgICBwYWdlU2l6ZSA9IGlkcy5sZW5ndGgsXG4gICAgc29ydD86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENtc0NvbXBvbmVudFtdPiB7XG4gICAgY29uc3QgaWRMaXN0OiBPY2MuQ29tcG9uZW50SURMaXN0ID0geyBpZExpc3Q6IGlkcyB9O1xuXG4gICAgY29uc3QgcmVxdWVzdFBhcmFtcyA9IHtcbiAgICAgIC4uLnRoaXMuZ2V0Q29udGV4dFBhcmFtcyhwYWdlQ29udGV4dCksXG4gICAgICAuLi50aGlzLmdldFBhZ2luYXRpb25QYXJhbXMoY3VycmVudFBhZ2UsIHBhZ2VTaXplLCBzb3J0KSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBvc3Q8T2NjLkNvbXBvbmVudExpc3Q+KFxuICAgICAgICB0aGlzLmdldENvbXBvbmVudHNFbmRwb2ludChyZXF1ZXN0UGFyYW1zLCBmaWVsZHMpLFxuICAgICAgICBpZExpc3QsXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC5waXBlKFxuICAgICAgICBwbHVjaygnY29tcG9uZW50JyksXG4gICAgICAgIHRoaXMuY29udmVydGVyLnBpcGVhYmxlTWFueShDTVNfQ09NUE9ORU5UX05PUk1BTElaRVIpXG4gICAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldENvbXBvbmVudEVuZFBvaW50KGlkOiBzdHJpbmcsIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmdldFVybChcbiAgICAgICdjb21wb25lbnQnLFxuICAgICAgeyBpZCB9LFxuICAgICAgdGhpcy5nZXRDb250ZXh0UGFyYW1zKHBhZ2VDb250ZXh0KVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q29tcG9uZW50c0VuZHBvaW50KHJlcXVlc3RQYXJhbXM6IGFueSwgZmllbGRzOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ2NvbXBvbmVudHMnLCB7IGZpZWxkcyB9LCByZXF1ZXN0UGFyYW1zKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGFnaW5hdGlvblBhcmFtcyhcbiAgICBjdXJyZW50UGFnZT86IG51bWJlcixcbiAgICBwYWdlU2l6ZT86IG51bWJlcixcbiAgICBzb3J0Pzogc3RyaW5nXG4gICk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIGNvbnN0IHJlcXVlc3RQYXJhbXMgPSB7fTtcbiAgICBpZiAoY3VycmVudFBhZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdFBhcmFtc1snY3VycmVudFBhZ2UnXSA9IGN1cnJlbnRQYWdlLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmIChwYWdlU2l6ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXF1ZXN0UGFyYW1zWydwYWdlU2l6ZSddID0gcGFnZVNpemUudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHNvcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdFBhcmFtc1snc29ydCddID0gc29ydDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVxdWVzdFBhcmFtcztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29udGV4dFBhcmFtcyhcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHRcbiAgKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XG4gICAgbGV0IHJlcXVlc3RQYXJhbXMgPSB7fTtcbiAgICBzd2l0Y2ggKHBhZ2VDb250ZXh0LnR5cGUpIHtcbiAgICAgIGNhc2UgUGFnZVR5cGUuUFJPRFVDVF9QQUdFOiB7XG4gICAgICAgIHJlcXVlc3RQYXJhbXMgPSB7IHByb2R1Y3RDb2RlOiBwYWdlQ29udGV4dC5pZCB9O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgUGFnZVR5cGUuQ0FURUdPUllfUEFHRToge1xuICAgICAgICByZXF1ZXN0UGFyYW1zID0geyBjYXRlZ29yeUNvZGU6IHBhZ2VDb250ZXh0LmlkIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBQYWdlVHlwZS5DQVRBTE9HX1BBR0U6IHtcbiAgICAgICAgcmVxdWVzdFBhcmFtcyA9IHsgY2F0YWxvZ0NvZGU6IHBhZ2VDb250ZXh0LmlkIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXF1ZXN0UGFyYW1zO1xuICB9XG59XG4iXX0=