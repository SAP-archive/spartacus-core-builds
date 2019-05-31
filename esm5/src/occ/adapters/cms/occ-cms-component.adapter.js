/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNtcy1jb21wb25lbnQuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvY21zL29jYy1jbXMtY29tcG9uZW50LmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXZDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3hGLE9BQU8sRUFBZ0IsUUFBUSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFM0U7SUFJRSxnQ0FDVSxJQUFnQixFQUNoQixZQUFpQyxFQUMvQixTQUEyQjtRQUY3QixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUMvQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUw3QixZQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFNM0UsQ0FBQzs7Ozs7OztJQUVKLHFDQUFJOzs7Ozs7SUFBSixVQUNFLEVBQVUsRUFDVixXQUF3QjtRQUV4QixPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFDLEVBQUU7WUFDbEQsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3RCLENBQUM7YUFDRCxJQUFJLENBQUMs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RyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDakQ7UUFDRCxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDdEIsYUFBYSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQztTQUM5QjtRQUVELE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7Ozs7OztJQUVPLGlEQUFnQjs7Ozs7SUFBeEIsVUFDRSxXQUF3Qjs7WUFFcEIsYUFBYSxHQUFHLEVBQUU7UUFDdEIsUUFBUSxXQUFXLENBQUMsSUFBSSxFQUFFO1lBQ3hCLEtBQUssUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUMxQixhQUFhLEdBQUcsRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNoRCxNQUFNO2FBQ1A7WUFDRCxLQUFLLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDM0IsYUFBYSxHQUFHLEVBQUUsWUFBWSxFQUFFLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDakQsTUFBTTthQUNQO1lBQ0QsS0FBSyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzFCLGFBQWEsR0FBRyxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ2hELE1BQU07YUFDUDtTQUNGO1FBRUQsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQzs7Z0JBaklGLFVBQVU7Ozs7Z0JBWkYsVUFBVTtnQkFVVixtQkFBbUI7Z0JBRm5CLGdCQUFnQjs7SUFzSXpCLDZCQUFDO0NBQUEsQUFsSUQsSUFrSUM7U0FqSVksc0JBQXNCOzs7Ozs7SUFDakMseUNBQThFOzs7OztJQUc1RSxzQ0FBd0I7Ozs7O0lBQ3hCLDhDQUF5Qzs7Ozs7SUFDekMsMkNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBwbHVjayB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudEFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9jbXMvY29ubmVjdG9ycy9jb21wb25lbnQvY21zLWNvbXBvbmVudC5hZGFwdGVyJztcbmltcG9ydCB7IENNU19DT01QT05FTlRfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uL2Ntcy9jb25uZWN0b3JzL2NvbXBvbmVudC9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudCwgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY0Ntc0NvbXBvbmVudEFkYXB0ZXIgaW1wbGVtZW50cyBDbXNDb21wb25lbnRBZGFwdGVyIHtcbiAgcHJvdGVjdGVkIGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKS5zZXQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2VcbiAgKSB7fVxuXG4gIGxvYWQ8VCBleHRlbmRzIENtc0NvbXBvbmVudD4oXG4gICAgaWQ6IHN0cmluZyxcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHRcbiAgKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxUPih0aGlzLmdldENvbXBvbmVudEVuZFBvaW50KGlkLCBwYWdlQ29udGV4dCksIHtcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgfSlcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlPGFueSwgVD4oQ01TX0NPTVBPTkVOVF9OT1JNQUxJWkVSKSk7XG4gIH1cblxuICBmaW5kQ29tcG9uZW50c0J5SWRzKFxuICAgIGlkczogc3RyaW5nW10sXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LFxuICAgIGZpZWxkcyA9ICdERUZBVUxUJyxcbiAgICBjdXJyZW50UGFnZSA9IDAsXG4gICAgcGFnZVNpemUgPSBpZHMubGVuZ3RoLFxuICAgIHNvcnQ/OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxDbXNDb21wb25lbnRbXT4ge1xuICAgIGNvbnN0IHJlcXVlc3RQYXJhbXMgPSB7XG4gICAgICAuLi50aGlzLmdldENvbnRleHRQYXJhbXMocGFnZUNvbnRleHQpLFxuICAgICAgLi4udGhpcy5nZXRQYWdpbmF0aW9uUGFyYW1zKGN1cnJlbnRQYWdlLCBwYWdlU2l6ZSwgc29ydCksXG4gICAgfTtcblxuICAgIHJlcXVlc3RQYXJhbXNbJ2NvbXBvbmVudElkcyddID0gaWRzLnRvU3RyaW5nKCk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PE9jYy5Db21wb25lbnRMaXN0PihcbiAgICAgICAgdGhpcy5nZXRDb21wb25lbnRzRW5kcG9pbnQocmVxdWVzdFBhcmFtcywgZmllbGRzKSxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHBsdWNrKCdjb21wb25lbnQnKSxcbiAgICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGVNYW55KENNU19DT01QT05FTlRfTk9STUFMSVpFUilcbiAgICAgICk7XG4gIH1cblxuICBmaW5kQ29tcG9uZW50c0J5SWRzTGVnYWN5KFxuICAgIGlkczogc3RyaW5nW10sXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LFxuICAgIGZpZWxkcyA9ICdERUZBVUxUJyxcbiAgICBjdXJyZW50UGFnZSA9IDAsXG4gICAgcGFnZVNpemUgPSBpZHMubGVuZ3RoLFxuICAgIHNvcnQ/OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxDbXNDb21wb25lbnRbXT4ge1xuICAgIGNvbnN0IGlkTGlzdDogT2NjLkNvbXBvbmVudElETGlzdCA9IHsgaWRMaXN0OiBpZHMgfTtcblxuICAgIGNvbnN0IHJlcXVlc3RQYXJhbXMgPSB7XG4gICAgICAuLi50aGlzLmdldENvbnRleHRQYXJhbXMocGFnZUNvbnRleHQpLFxuICAgICAgLi4udGhpcy5nZXRQYWdpbmF0aW9uUGFyYW1zKGN1cnJlbnRQYWdlLCBwYWdlU2l6ZSwgc29ydCksXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0PE9jYy5Db21wb25lbnRMaXN0PihcbiAgICAgICAgdGhpcy5nZXRDb21wb25lbnRzRW5kcG9pbnQocmVxdWVzdFBhcmFtcywgZmllbGRzKSxcbiAgICAgICAgaWRMaXN0LFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgICB9XG4gICAgICApXG4gICAgICAucGlwZShcbiAgICAgICAgcGx1Y2soJ2NvbXBvbmVudCcpLFxuICAgICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZU1hbnkoQ01TX0NPTVBPTkVOVF9OT1JNQUxJWkVSKVxuICAgICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDb21wb25lbnRFbmRQb2ludChpZDogc3RyaW5nLCBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoXG4gICAgICAnY29tcG9uZW50JyxcbiAgICAgIHsgaWQgfSxcbiAgICAgIHRoaXMuZ2V0Q29udGV4dFBhcmFtcyhwYWdlQ29udGV4dClcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldENvbXBvbmVudHNFbmRwb2ludChyZXF1ZXN0UGFyYW1zOiBhbnksIGZpZWxkczogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vY2NFbmRwb2ludHMuZ2V0VXJsKCdjb21wb25lbnRzJywgeyBmaWVsZHMgfSwgcmVxdWVzdFBhcmFtcyk7XG4gIH1cblxuICBwcml2YXRlIGdldFBhZ2luYXRpb25QYXJhbXMoXG4gICAgY3VycmVudFBhZ2U/OiBudW1iZXIsXG4gICAgcGFnZVNpemU/OiBudW1iZXIsXG4gICAgc29ydD86IHN0cmluZ1xuICApOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICBjb25zdCByZXF1ZXN0UGFyYW1zID0ge307XG4gICAgaWYgKGN1cnJlbnRQYWdlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3RQYXJhbXNbJ2N1cnJlbnRQYWdlJ10gPSBjdXJyZW50UGFnZS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAocGFnZVNpemUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdFBhcmFtc1sncGFnZVNpemUnXSA9IHBhZ2VTaXplLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmIChzb3J0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3RQYXJhbXNbJ3NvcnQnXSA9IHNvcnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcXVlc3RQYXJhbXM7XG4gIH1cblxuICBwcml2YXRlIGdldENvbnRleHRQYXJhbXMoXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0XG4gICk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIGxldCByZXF1ZXN0UGFyYW1zID0ge307XG4gICAgc3dpdGNoIChwYWdlQ29udGV4dC50eXBlKSB7XG4gICAgICBjYXNlIFBhZ2VUeXBlLlBST0RVQ1RfUEFHRToge1xuICAgICAgICByZXF1ZXN0UGFyYW1zID0geyBwcm9kdWN0Q29kZTogcGFnZUNvbnRleHQuaWQgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFBhZ2VUeXBlLkNBVEVHT1JZX1BBR0U6IHtcbiAgICAgICAgcmVxdWVzdFBhcmFtcyA9IHsgY2F0ZWdvcnlDb2RlOiBwYWdlQ29udGV4dC5pZCB9O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgUGFnZVR5cGUuQ0FUQUxPR19QQUdFOiB7XG4gICAgICAgIHJlcXVlc3RQYXJhbXMgPSB7IGNhdGFsb2dDb2RlOiBwYWdlQ29udGV4dC5pZCB9O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVxdWVzdFBhcmFtcztcbiAgfVxufVxuIl19