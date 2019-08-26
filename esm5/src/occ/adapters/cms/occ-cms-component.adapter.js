/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from 'rxjs/operators';
import { CMS_COMPONENT_NORMALIZER } from '../../../cms/connectors/component/converters';
import { PageType } from '../../../model/cms.model';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
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
            .pipe(pluck('component'), this.converter.pipeableMany(CMS_COMPONENT_NORMALIZER));
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
    OccCmsComponentAdapter.prototype.findComponentsByIdsLegacy = /**
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
        return this.occEndpoints.getUrl('components', {}, tslib_1.__assign({ fields: fields }, requestParams));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNtcy1jb21wb25lbnQuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvY21zL29jYy1jbXMtY29tcG9uZW50LmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXZDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3hGLE9BQU8sRUFBZ0IsUUFBUSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFM0U7SUFJRSxnQ0FDVSxJQUFnQixFQUNoQixZQUFpQyxFQUMvQixTQUEyQjtRQUY3QixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUMvQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUw3QixZQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFNM0UsQ0FBQzs7Ozs7OztJQUVKLHFDQUFJOzs7Ozs7SUFBSixVQUNFLEVBQVUsRUFDVixXQUF3QjtRQUV4QixPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFDLEVBQUU7WUFDbEQsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3RCLENBQUM7YUFDRCxJQUFJLENBQUMs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QUFHLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNqRDtRQUNELElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUN0QixhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQzlCO1FBRUQsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQzs7Ozs7O0lBRU8saURBQWdCOzs7OztJQUF4QixVQUNFLFdBQXdCOztZQUVwQixhQUFhLEdBQUcsRUFBRTtRQUN0QixRQUFRLFdBQVcsQ0FBQyxJQUFJLEVBQUU7WUFDeEIsS0FBSyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzFCLGFBQWEsR0FBRyxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ2hELE1BQU07YUFDUDtZQUNELEtBQUssUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMzQixhQUFhLEdBQUcsRUFBRSxZQUFZLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNqRCxNQUFNO2FBQ1A7WUFDRCxLQUFLLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDMUIsYUFBYSxHQUFHLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDaEQsTUFBTTthQUNQO1NBQ0Y7UUFFRCxPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDOztnQkFySUYsVUFBVTs7OztnQkFaRixVQUFVO2dCQVVWLG1CQUFtQjtnQkFGbkIsZ0JBQWdCOztJQTBJekIsNkJBQUM7Q0FBQSxBQXRJRCxJQXNJQztTQXJJWSxzQkFBc0I7Ozs7OztJQUNqQyx5Q0FBOEU7Ozs7O0lBRzVFLHNDQUF3Qjs7Ozs7SUFDeEIsOENBQXlDOzs7OztJQUN6QywyQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHBsdWNrIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50QWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2Ntcy9jb25uZWN0b3JzL2NvbXBvbmVudC9jbXMtY29tcG9uZW50LmFkYXB0ZXInO1xuaW1wb3J0IHsgQ01TX0NPTVBPTkVOVF9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vY21zL2Nvbm5lY3RvcnMvY29tcG9uZW50L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50LCBQYWdlVHlwZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcnO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjQ21zQ29tcG9uZW50QWRhcHRlciBpbXBsZW1lbnRzIENtc0NvbXBvbmVudEFkYXB0ZXIge1xuICBwcm90ZWN0ZWQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpLnNldCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZVxuICApIHt9XG5cbiAgbG9hZDxUIGV4dGVuZHMgQ21zQ29tcG9uZW50PihcbiAgICBpZDogc3RyaW5nLFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuICApOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PFQ+KHRoaXMuZ2V0Q29tcG9uZW50RW5kUG9pbnQoaWQsIHBhZ2VDb250ZXh0KSwge1xuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICB9KVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXIucGlwZWFibGU8YW55LCBUPihDTVNfQ09NUE9ORU5UX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIGZpbmRDb21wb25lbnRzQnlJZHMoXG4gICAgaWRzOiBzdHJpbmdbXSxcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsXG4gICAgZmllbGRzID0gJ0RFRkFVTFQnLFxuICAgIGN1cnJlbnRQYWdlID0gMCxcbiAgICBwYWdlU2l6ZSA9IGlkcy5sZW5ndGgsXG4gICAgc29ydD86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENtc0NvbXBvbmVudFtdPiB7XG4gICAgY29uc3QgcmVxdWVzdFBhcmFtcyA9IHtcbiAgICAgIC4uLnRoaXMuZ2V0Q29udGV4dFBhcmFtcyhwYWdlQ29udGV4dCksXG4gICAgICAuLi50aGlzLmdldFBhZ2luYXRpb25QYXJhbXMoY3VycmVudFBhZ2UsIHBhZ2VTaXplLCBzb3J0KSxcbiAgICB9O1xuXG4gICAgcmVxdWVzdFBhcmFtc1snY29tcG9uZW50SWRzJ10gPSBpZHMudG9TdHJpbmcoKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8T2NjLkNvbXBvbmVudExpc3Q+KFxuICAgICAgICB0aGlzLmdldENvbXBvbmVudHNFbmRwb2ludChyZXF1ZXN0UGFyYW1zLCBmaWVsZHMpLFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgICB9XG4gICAgICApXG4gICAgICAucGlwZShcbiAgICAgICAgcGx1Y2soJ2NvbXBvbmVudCcpLFxuICAgICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZU1hbnkoQ01TX0NPTVBPTkVOVF9OT1JNQUxJWkVSKVxuICAgICAgKTtcbiAgfVxuXG4gIGZpbmRDb21wb25lbnRzQnlJZHNMZWdhY3koXG4gICAgaWRzOiBzdHJpbmdbXSxcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsXG4gICAgZmllbGRzID0gJ0RFRkFVTFQnLFxuICAgIGN1cnJlbnRQYWdlID0gMCxcbiAgICBwYWdlU2l6ZSA9IGlkcy5sZW5ndGgsXG4gICAgc29ydD86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENtc0NvbXBvbmVudFtdPiB7XG4gICAgY29uc3QgaWRMaXN0OiBPY2MuQ29tcG9uZW50SURMaXN0ID0geyBpZExpc3Q6IGlkcyB9O1xuXG4gICAgY29uc3QgcmVxdWVzdFBhcmFtcyA9IHtcbiAgICAgIC4uLnRoaXMuZ2V0Q29udGV4dFBhcmFtcyhwYWdlQ29udGV4dCksXG4gICAgICAuLi50aGlzLmdldFBhZ2luYXRpb25QYXJhbXMoY3VycmVudFBhZ2UsIHBhZ2VTaXplLCBzb3J0KSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBvc3Q8T2NjLkNvbXBvbmVudExpc3Q+KFxuICAgICAgICB0aGlzLmdldENvbXBvbmVudHNFbmRwb2ludChyZXF1ZXN0UGFyYW1zLCBmaWVsZHMpLFxuICAgICAgICBpZExpc3QsXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC5waXBlKFxuICAgICAgICBwbHVjaygnY29tcG9uZW50JyksXG4gICAgICAgIHRoaXMuY29udmVydGVyLnBpcGVhYmxlTWFueShDTVNfQ09NUE9ORU5UX05PUk1BTElaRVIpXG4gICAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldENvbXBvbmVudEVuZFBvaW50KGlkOiBzdHJpbmcsIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmdldFVybChcbiAgICAgICdjb21wb25lbnQnLFxuICAgICAgeyBpZCB9LFxuICAgICAgdGhpcy5nZXRDb250ZXh0UGFyYW1zKHBhZ2VDb250ZXh0KVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q29tcG9uZW50c0VuZHBvaW50KHJlcXVlc3RQYXJhbXM6IGFueSwgZmllbGRzOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoXG4gICAgICAnY29tcG9uZW50cycsXG4gICAgICB7fSxcbiAgICAgIHsgZmllbGRzLCAuLi5yZXF1ZXN0UGFyYW1zIH1cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQYWdpbmF0aW9uUGFyYW1zKFxuICAgIGN1cnJlbnRQYWdlPzogbnVtYmVyLFxuICAgIHBhZ2VTaXplPzogbnVtYmVyLFxuICAgIHNvcnQ/OiBzdHJpbmdcbiAgKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XG4gICAgY29uc3QgcmVxdWVzdFBhcmFtcyA9IHt9O1xuICAgIGlmIChjdXJyZW50UGFnZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXF1ZXN0UGFyYW1zWydjdXJyZW50UGFnZSddID0gY3VycmVudFBhZ2UudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHBhZ2VTaXplICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3RQYXJhbXNbJ3BhZ2VTaXplJ10gPSBwYWdlU2l6ZS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAoc29ydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXF1ZXN0UGFyYW1zWydzb3J0J10gPSBzb3J0O1xuICAgIH1cblxuICAgIHJldHVybiByZXF1ZXN0UGFyYW1zO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb250ZXh0UGFyYW1zKFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuICApOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICBsZXQgcmVxdWVzdFBhcmFtcyA9IHt9O1xuICAgIHN3aXRjaCAocGFnZUNvbnRleHQudHlwZSkge1xuICAgICAgY2FzZSBQYWdlVHlwZS5QUk9EVUNUX1BBR0U6IHtcbiAgICAgICAgcmVxdWVzdFBhcmFtcyA9IHsgcHJvZHVjdENvZGU6IHBhZ2VDb250ZXh0LmlkIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBQYWdlVHlwZS5DQVRFR09SWV9QQUdFOiB7XG4gICAgICAgIHJlcXVlc3RQYXJhbXMgPSB7IGNhdGVnb3J5Q29kZTogcGFnZUNvbnRleHQuaWQgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFBhZ2VUeXBlLkNBVEFMT0dfUEFHRToge1xuICAgICAgICByZXF1ZXN0UGFyYW1zID0geyBjYXRhbG9nQ29kZTogcGFnZUNvbnRleHQuaWQgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcXVlc3RQYXJhbXM7XG4gIH1cbn1cbiJdfQ==