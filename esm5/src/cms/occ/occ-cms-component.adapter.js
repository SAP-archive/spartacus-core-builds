/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { ConverterService } from '../../util/converter.service';
import { CMS_COMPONENT_NORMALIZER } from '../connectors/component/converters';
import { pluck } from 'rxjs/operators';
import { PageType } from '../../model/cms.model';
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
    OccCmsComponentAdapter.prototype.loadList = /**
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
        var requestParams = this.getComponentsRequestParams(pageContext, currentPage, pageSize, sort);
        /** @type {?} */
        var idList = { idList: ids };
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
        return this.occEndpoints.getUrl('component', { id: id }, this.getComponentRequestParams(pageContext));
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
     * @param {?} pageContext
     * @param {?=} currentPage
     * @param {?=} pageSize
     * @param {?=} sort
     * @return {?}
     */
    OccCmsComponentAdapter.prototype.getComponentsRequestParams = /**
     * @private
     * @param {?} pageContext
     * @param {?=} currentPage
     * @param {?=} pageSize
     * @param {?=} sort
     * @return {?}
     */
    function (pageContext, currentPage, pageSize, sort) {
        /** @type {?} */
        var requestParams = this.getComponentRequestParams(pageContext);
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
    OccCmsComponentAdapter.prototype.getComponentRequestParams = /**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNtcy1jb21wb25lbnQuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvb2NjL29jYy1jbXMtY29tcG9uZW50LmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUkvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRWpEO0lBSUUsZ0NBQ1UsSUFBZ0IsRUFDaEIsWUFBaUMsRUFDL0IsU0FBMkI7UUFGN0IsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDL0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFMN0IsWUFBTyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBTTNFLENBQUM7Ozs7Ozs7SUFFSixxQ0FBSTs7Ozs7O0lBQUosVUFDRSxFQUFVLEVBQ1YsV0FBd0I7UUFFeEIsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxFQUFFO1lBQ2xELE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDO2FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxT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Q0FBQzs7Z0JBekdGLFVBQVU7Ozs7Z0JBYkYsVUFBVTtnQkFJVixtQkFBbUI7Z0JBSW5CLGdCQUFnQjs7SUErR3pCLDZCQUFDO0NBQUEsQUExR0QsSUEwR0M7U0F6R1ksc0JBQXNCOzs7Ozs7SUFDakMseUNBQThFOzs7OztJQUc1RSxzQ0FBd0I7Ozs7O0lBQ3hCLDhDQUF5Qzs7Ozs7SUFDekMsMkNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnQsIENtc0NvbXBvbmVudExpc3QgfSBmcm9tICcuLi8uLi9vY2Mvb2NjLW1vZGVscy9pbmRleCc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb2NjL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uL3JvdXRpbmcvaW5kZXgnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50QWRhcHRlciB9IGZyb20gJy4uL2Nvbm5lY3RvcnMvY29tcG9uZW50L2Ntcy1jb21wb25lbnQuYWRhcHRlcic7XG5pbXBvcnQgeyBJZExpc3QgfSBmcm9tICcuLi9tb2RlbC9pZExpc3QubW9kZWwnO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ01TX0NPTVBPTkVOVF9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vY29ubmVjdG9ycy9jb21wb25lbnQvY29udmVydGVycyc7XG5pbXBvcnQgeyBwbHVjayB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY0Ntc0NvbXBvbmVudEFkYXB0ZXIgaW1wbGVtZW50cyBDbXNDb21wb25lbnRBZGFwdGVyIHtcbiAgcHJvdGVjdGVkIGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKS5zZXQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2VcbiAgKSB7fVxuXG4gIGxvYWQ8VCBleHRlbmRzIENtc0NvbXBvbmVudD4oXG4gICAgaWQ6IHN0cmluZyxcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHRcbiAgKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxUPih0aGlzLmdldENvbXBvbmVudEVuZFBvaW50KGlkLCBwYWdlQ29udGV4dCksIHtcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgfSlcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlPGFueSwgVD4oQ01TX0NPTVBPTkVOVF9OT1JNQUxJWkVSKSk7XG4gIH1cblxuICBsb2FkTGlzdChcbiAgICBpZHM6IHN0cmluZ1tdLFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCxcbiAgICBmaWVsZHMgPSAnREVGQVVMVCcsXG4gICAgY3VycmVudFBhZ2UgPSAwLFxuICAgIHBhZ2VTaXplID0gaWRzLmxlbmd0aCxcbiAgICBzb3J0Pzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Q21zQ29tcG9uZW50W10+IHtcbiAgICBjb25zdCByZXF1ZXN0UGFyYW1zID0gdGhpcy5nZXRDb21wb25lbnRzUmVxdWVzdFBhcmFtcyhcbiAgICAgIHBhZ2VDb250ZXh0LFxuICAgICAgY3VycmVudFBhZ2UsXG4gICAgICBwYWdlU2l6ZSxcbiAgICAgIHNvcnRcbiAgICApO1xuXG4gICAgY29uc3QgaWRMaXN0OiBJZExpc3QgPSB7IGlkTGlzdDogaWRzIH07XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdDxDbXNDb21wb25lbnRMaXN0PihcbiAgICAgICAgdGhpcy5nZXRDb21wb25lbnRzRW5kcG9pbnQocmVxdWVzdFBhcmFtcywgZmllbGRzKSxcbiAgICAgICAgaWRMaXN0LFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgICB9XG4gICAgICApXG4gICAgICAucGlwZShcbiAgICAgICAgcGx1Y2soJ2NvbXBvbmVudCcpLFxuICAgICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZU1hbnkoQ01TX0NPTVBPTkVOVF9OT1JNQUxJWkVSKVxuICAgICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDb21wb25lbnRFbmRQb2ludChpZDogc3RyaW5nLCBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoXG4gICAgICAnY29tcG9uZW50JyxcbiAgICAgIHsgaWQgfSxcbiAgICAgIHRoaXMuZ2V0Q29tcG9uZW50UmVxdWVzdFBhcmFtcyhwYWdlQ29udGV4dClcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldENvbXBvbmVudHNFbmRwb2ludChyZXF1ZXN0UGFyYW1zOiBhbnksIGZpZWxkczogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vY2NFbmRwb2ludHMuZ2V0VXJsKCdjb21wb25lbnRzJywgeyBmaWVsZHMgfSwgcmVxdWVzdFBhcmFtcyk7XG4gIH1cblxuICBwcml2YXRlIGdldENvbXBvbmVudHNSZXF1ZXN0UGFyYW1zKFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCxcbiAgICBjdXJyZW50UGFnZT86IG51bWJlcixcbiAgICBwYWdlU2l6ZT86IG51bWJlcixcbiAgICBzb3J0Pzogc3RyaW5nXG4gICk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIGNvbnN0IHJlcXVlc3RQYXJhbXMgPSB0aGlzLmdldENvbXBvbmVudFJlcXVlc3RQYXJhbXMocGFnZUNvbnRleHQpO1xuXG4gICAgaWYgKGN1cnJlbnRQYWdlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3RQYXJhbXNbJ2N1cnJlbnRQYWdlJ10gPSBjdXJyZW50UGFnZS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAocGFnZVNpemUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdFBhcmFtc1sncGFnZVNpemUnXSA9IHBhZ2VTaXplLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmIChzb3J0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3RQYXJhbXNbJ3NvcnQnXSA9IHNvcnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcXVlc3RQYXJhbXM7XG4gIH1cblxuICBwcml2YXRlIGdldENvbXBvbmVudFJlcXVlc3RQYXJhbXMoXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0XG4gICk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIGxldCByZXF1ZXN0UGFyYW1zID0ge307XG4gICAgc3dpdGNoIChwYWdlQ29udGV4dC50eXBlKSB7XG4gICAgICBjYXNlIFBhZ2VUeXBlLlBST0RVQ1RfUEFHRToge1xuICAgICAgICByZXF1ZXN0UGFyYW1zID0geyBwcm9kdWN0Q29kZTogcGFnZUNvbnRleHQuaWQgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFBhZ2VUeXBlLkNBVEVHT1JZX1BBR0U6IHtcbiAgICAgICAgcmVxdWVzdFBhcmFtcyA9IHsgY2F0ZWdvcnlDb2RlOiBwYWdlQ29udGV4dC5pZCB9O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgUGFnZVR5cGUuQ0FUQUxPR19QQUdFOiB7XG4gICAgICAgIHJlcXVlc3RQYXJhbXMgPSB7IGNhdGFsb2dDb2RlOiBwYWdlQ29udGV4dC5pZCB9O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVxdWVzdFBhcmFtcztcbiAgfVxufVxuIl19