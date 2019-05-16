/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, pluck } from 'rxjs/operators';
import { PageType } from '../../model/cms.model';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { ConverterService } from '../../util/converter.service';
import { CMS_COMPONENT_NORMALIZER } from '../connectors/component/converters';
var OccCmsComponentAdapter = /** @class */ (function () {
    function OccCmsComponentAdapter(http, occEndpoints, converter) {
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
    OccCmsComponentAdapter.prototype.load = /**
     * @template T
     * @param {?} id
     * @param {?} pageContext
     * @return {?}
     */
    function (id, pageContext) {
        return this.http
            .get(this.getComponentEndPoint(id, pageContext), {
            headers: this.headers,
        })
            .pipe(this.converter.pipeable(CMS_COMPONENT_NORMALIZER));
    };
    /**
     * @param {?} ids
     * @param {?} pageContext
     * @param {?=} fields
     * @param {?=} currentPage
     * @param {?=} pageSize
     * @param {?=} sort
     * @return {?}
     */
    OccCmsComponentAdapter.prototype.findComponentsByIds = /**
     * @param {?} ids
     * @param {?} pageContext
     * @param {?=} fields
     * @param {?=} currentPage
     * @param {?=} pageSize
     * @param {?=} sort
     * @return {?}
     */
    function (ids, pageContext, fields, currentPage, pageSize, sort) {
        var _this = this;
        if (fields === void 0) { fields = 'DEFAULT'; }
        if (currentPage === void 0) { currentPage = 0; }
        if (pageSize === void 0) { pageSize = ids.length; }
        /** @type {?} */
        var requestParams = tslib_1.__assign({}, this.getContextParams(pageContext), this.getPaginationParams(currentPage, pageSize, sort));
        requestParams['componentIds'] = ids.toString();
        return this.http
            .get(this.getComponentsEndpoint(requestParams, fields), {
            headers: this.headers,
        })
            .pipe(pluck('component'), this.converter.pipeableMany(CMS_COMPONENT_NORMALIZER), catchError(function (error) {
            if (error.status === 400) {
                return _this.searchComponentsByIds(ids, pageContext, fields, currentPage, pageSize, sort);
            }
        }));
    };
    /**
     * @param {?} ids
     * @param {?} pageContext
     * @param {?=} fields
     * @param {?=} currentPage
     * @param {?=} pageSize
     * @param {?=} sort
     * @return {?}
     */
    OccCmsComponentAdapter.prototype.searchComponentsByIds = /**
     * @param {?} ids
     * @param {?} pageContext
     * @param {?=} fields
     * @param {?=} currentPage
     * @param {?=} pageSize
     * @param {?=} sort
     * @return {?}
     */
    function (ids, pageContext, fields, currentPage, pageSize, sort) {
        if (fields === void 0) { fields = 'DEFAULT'; }
        if (currentPage === void 0) { currentPage = 0; }
        if (pageSize === void 0) { pageSize = ids.length; }
        /** @type {?} */
        var idList = { idList: ids };
        /** @type {?} */
        var requestParams = tslib_1.__assign({}, this.getContextParams(pageContext), this.getPaginationParams(currentPage, pageSize, sort));
        return this.http
            .post(this.getComponentsEndpoint(requestParams, fields), idList, {
            headers: this.headers,
        })
            .pipe(pluck('component'), this.converter.pipeableMany(CMS_COMPONENT_NORMALIZER));
    };
    /**
     * @protected
     * @param {?} id
     * @param {?} pageContext
     * @return {?}
     */
    OccCmsComponentAdapter.prototype.getComponentEndPoint = /**
     * @protected
     * @param {?} id
     * @param {?} pageContext
     * @return {?}
     */
    function (id, pageContext) {
        return this.occEndpoints.getUrl('component', { id: id }, this.getContextParams(pageContext));
    };
    /**
     * @protected
     * @param {?} requestParams
     * @param {?} fields
     * @return {?}
     */
    OccCmsComponentAdapter.prototype.getComponentsEndpoint = /**
     * @protected
     * @param {?} requestParams
     * @param {?} fields
     * @return {?}
     */
    function (requestParams, fields) {
        return this.occEndpoints.getUrl('components', { fields: fields }, requestParams);
    };
    /**
     * @private
     * @param {?=} currentPage
     * @param {?=} pageSize
     * @param {?=} sort
     * @return {?}
     */
    OccCmsComponentAdapter.prototype.getPaginationParams = /**
     * @private
     * @param {?=} currentPage
     * @param {?=} pageSize
     * @param {?=} sort
     * @return {?}
     */
    function (currentPage, pageSize, sort) {
        /** @type {?} */
        var requestParams = {};
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
    };
    /**
     * @private
     * @param {?} pageContext
     * @return {?}
     */
    OccCmsComponentAdapter.prototype.getContextParams = /**
     * @private
     * @param {?} pageContext
     * @return {?}
     */
    function (pageContext) {
        /** @type {?} */
        var requestParams = {};
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
    };
    OccCmsComponentAdapter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccCmsComponentAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    return OccCmsComponentAdapter;
}());
export { OccCmsComponentAdapter };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNtcy1jb21wb25lbnQuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvb2NjL29jYy1jbXMtY29tcG9uZW50LmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFL0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFaEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFHOUU7SUFJRSxnQ0FDVSxJQUFnQixFQUNoQixZQUFpQyxFQUMvQixTQUEyQjtRQUY3QixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUMvQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUw3QixZQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFNM0UsQ0FBQzs7Ozs7OztJQUVKLHFDQUFJOzs7Ozs7SUFBSixVQUNFLEVBQVUsRUFDVixXQUF3QjtRQUV4QixPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFDLEVBQUU7WUFDbEQsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3RCLENBQUM7YUFDRCxJQUFJLENBQUMs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Qyx5Q0FBOEU7Ozs7O0lBRzVFLHNDQUF3Qjs7Ozs7SUFDeEIsOENBQXlDOzs7OztJQUN6QywyQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIHBsdWNrIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50LCBDbXNDb21wb25lbnRMaXN0IH0gZnJvbSAnLi4vLi4vb2NjL29jYy1tb2RlbHMvaW5kZXgnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL29jYy9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2luZGV4JztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IENtc0NvbXBvbmVudEFkYXB0ZXIgfSBmcm9tICcuLi9jb25uZWN0b3JzL2NvbXBvbmVudC9jbXMtY29tcG9uZW50LmFkYXB0ZXInO1xuaW1wb3J0IHsgQ01TX0NPTVBPTkVOVF9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vY29ubmVjdG9ycy9jb21wb25lbnQvY29udmVydGVycyc7XG5pbXBvcnQgeyBJZExpc3QgfSBmcm9tICcuLi9tb2RlbC9pZExpc3QubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjQ21zQ29tcG9uZW50QWRhcHRlciBpbXBsZW1lbnRzIENtc0NvbXBvbmVudEFkYXB0ZXIge1xuICBwcm90ZWN0ZWQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpLnNldCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZVxuICApIHt9XG5cbiAgbG9hZDxUIGV4dGVuZHMgQ21zQ29tcG9uZW50PihcbiAgICBpZDogc3RyaW5nLFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuICApOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PFQ+KHRoaXMuZ2V0Q29tcG9uZW50RW5kUG9pbnQoaWQsIHBhZ2VDb250ZXh0KSwge1xuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICB9KVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXIucGlwZWFibGU8YW55LCBUPihDTVNfQ09NUE9ORU5UX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIGZpbmRDb21wb25lbnRzQnlJZHMoXG4gICAgaWRzOiBzdHJpbmdbXSxcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsXG4gICAgZmllbGRzID0gJ0RFRkFVTFQnLFxuICAgIGN1cnJlbnRQYWdlID0gMCxcbiAgICBwYWdlU2l6ZSA9IGlkcy5sZW5ndGgsXG4gICAgc29ydD86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENtc0NvbXBvbmVudFtdPiB7XG4gICAgY29uc3QgcmVxdWVzdFBhcmFtcyA9IHtcbiAgICAgIC4uLnRoaXMuZ2V0Q29udGV4dFBhcmFtcyhwYWdlQ29udGV4dCksXG4gICAgICAuLi50aGlzLmdldFBhZ2luYXRpb25QYXJhbXMoY3VycmVudFBhZ2UsIHBhZ2VTaXplLCBzb3J0KSxcbiAgICB9O1xuXG4gICAgcmVxdWVzdFBhcmFtc1snY29tcG9uZW50SWRzJ10gPSBpZHMudG9TdHJpbmcoKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8Q21zQ29tcG9uZW50TGlzdD4oXG4gICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50c0VuZHBvaW50KHJlcXVlc3RQYXJhbXMsIGZpZWxkcyksXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC5waXBlKFxuICAgICAgICBwbHVjaygnY29tcG9uZW50JyksXG4gICAgICAgIHRoaXMuY29udmVydGVyLnBpcGVhYmxlTWFueShDTVNfQ09NUE9ORU5UX05PUk1BTElaRVIpLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHtcbiAgICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlYXJjaENvbXBvbmVudHNCeUlkcyhcbiAgICAgICAgICAgICAgaWRzLFxuICAgICAgICAgICAgICBwYWdlQ29udGV4dCxcbiAgICAgICAgICAgICAgZmllbGRzLFxuICAgICAgICAgICAgICBjdXJyZW50UGFnZSxcbiAgICAgICAgICAgICAgcGFnZVNpemUsXG4gICAgICAgICAgICAgIHNvcnRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIHNlYXJjaENvbXBvbmVudHNCeUlkcyhcbiAgICBpZHM6IHN0cmluZ1tdLFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCxcbiAgICBmaWVsZHMgPSAnREVGQVVMVCcsXG4gICAgY3VycmVudFBhZ2UgPSAwLFxuICAgIHBhZ2VTaXplID0gaWRzLmxlbmd0aCxcbiAgICBzb3J0Pzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Q21zQ29tcG9uZW50W10+IHtcbiAgICBjb25zdCBpZExpc3Q6IElkTGlzdCA9IHsgaWRMaXN0OiBpZHMgfTtcblxuICAgIGNvbnN0IHJlcXVlc3RQYXJhbXMgPSB7XG4gICAgICAuLi50aGlzLmdldENvbnRleHRQYXJhbXMocGFnZUNvbnRleHQpLFxuICAgICAgLi4udGhpcy5nZXRQYWdpbmF0aW9uUGFyYW1zKGN1cnJlbnRQYWdlLCBwYWdlU2l6ZSwgc29ydCksXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0PENtc0NvbXBvbmVudExpc3Q+KFxuICAgICAgICB0aGlzLmdldENvbXBvbmVudHNFbmRwb2ludChyZXF1ZXN0UGFyYW1zLCBmaWVsZHMpLFxuICAgICAgICBpZExpc3QsXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC5waXBlKFxuICAgICAgICBwbHVjaygnY29tcG9uZW50JyksXG4gICAgICAgIHRoaXMuY29udmVydGVyLnBpcGVhYmxlTWFueShDTVNfQ09NUE9ORU5UX05PUk1BTElaRVIpXG4gICAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldENvbXBvbmVudEVuZFBvaW50KGlkOiBzdHJpbmcsIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmdldFVybChcbiAgICAgICdjb21wb25lbnQnLFxuICAgICAgeyBpZCB9LFxuICAgICAgdGhpcy5nZXRDb250ZXh0UGFyYW1zKHBhZ2VDb250ZXh0KVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q29tcG9uZW50c0VuZHBvaW50KHJlcXVlc3RQYXJhbXM6IGFueSwgZmllbGRzOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ2NvbXBvbmVudHMnLCB7IGZpZWxkcyB9LCByZXF1ZXN0UGFyYW1zKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGFnaW5hdGlvblBhcmFtcyhcbiAgICBjdXJyZW50UGFnZT86IG51bWJlcixcbiAgICBwYWdlU2l6ZT86IG51bWJlcixcbiAgICBzb3J0Pzogc3RyaW5nXG4gICk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIGNvbnN0IHJlcXVlc3RQYXJhbXMgPSB7fTtcbiAgICBpZiAoY3VycmVudFBhZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdFBhcmFtc1snY3VycmVudFBhZ2UnXSA9IGN1cnJlbnRQYWdlLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmIChwYWdlU2l6ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXF1ZXN0UGFyYW1zWydwYWdlU2l6ZSddID0gcGFnZVNpemUudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHNvcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdFBhcmFtc1snc29ydCddID0gc29ydDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVxdWVzdFBhcmFtcztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29udGV4dFBhcmFtcyhcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHRcbiAgKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XG4gICAgbGV0IHJlcXVlc3RQYXJhbXMgPSB7fTtcbiAgICBzd2l0Y2ggKHBhZ2VDb250ZXh0LnR5cGUpIHtcbiAgICAgIGNhc2UgUGFnZVR5cGUuUFJPRFVDVF9QQUdFOiB7XG4gICAgICAgIHJlcXVlc3RQYXJhbXMgPSB7IHByb2R1Y3RDb2RlOiBwYWdlQ29udGV4dC5pZCB9O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgUGFnZVR5cGUuQ0FURUdPUllfUEFHRToge1xuICAgICAgICByZXF1ZXN0UGFyYW1zID0geyBjYXRlZ29yeUNvZGU6IHBhZ2VDb250ZXh0LmlkIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBQYWdlVHlwZS5DQVRBTE9HX1BBR0U6IHtcbiAgICAgICAgcmVxdWVzdFBhcmFtcyA9IHsgY2F0YWxvZ0NvZGU6IHBhZ2VDb250ZXh0LmlkIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXF1ZXN0UGFyYW1zO1xuICB9XG59XG4iXX0=