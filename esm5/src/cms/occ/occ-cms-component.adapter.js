/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageType, } from '../../occ/occ-models/index';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { ConverterService } from '../../util/converter.service';
import { CMS_COMPONENT_LIST_NORMALIZER, CMS_COMPONENT_NORMALIZER, } from '../connectors/component/converters';
import { pluck } from 'rxjs/operators';
var OccCmsComponentAdapter = /** @class */ (function () {
    function OccCmsComponentAdapter(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
        this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    }
    /**
     * @protected
     * @return {?}
     */
    OccCmsComponentAdapter.prototype.getBaseEndPoint = /**
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
    OccCmsComponentAdapter.prototype.load = /**
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
        var requestParams = this.getRequestParams(pageContext, fields);
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
        /** @type {?} */
        var idList = { idList: ids };
        return this.http
            .post(this.getBaseEndPoint() + "/components", idList, {
            headers: this.headers,
            params: new HttpParams({
                fromString: requestParams,
            }),
        })
            .pipe(pluck('component'), this.converter.pipeable(CMS_COMPONENT_LIST_NORMALIZER));
    };
    /**
     * @private
     * @param {?} pageContext
     * @param {?=} fields
     * @return {?}
     */
    OccCmsComponentAdapter.prototype.getRequestParams = /**
     * @private
     * @param {?} pageContext
     * @param {?=} fields
     * @return {?}
     */
    function (pageContext, fields) {
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
        if (fields !== undefined) {
            requestParams === ''
                ? (requestParams = requestParams + 'fields=' + fields)
                : (requestParams = requestParams + '&fields=' + fields);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNtcy1jb21wb25lbnQuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvb2NjL29jYy1jbXMtY29tcG9uZW50LmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUdMLFFBQVEsR0FDVCxNQUFNLDRCQUE0QixDQUFDO0FBQ3BDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBSS9FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFDTCw2QkFBNkIsRUFDN0Isd0JBQXdCLEdBQ3pCLE1BQU0sb0NBQW9DLENBQUM7QUFDNUMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXZDO0lBSUUsZ0NBQ1UsSUFBZ0IsRUFDaEIsWUFBaUMsRUFDL0IsU0FBMkI7UUFGN0IsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDL0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFMN0IsWUFBTyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBTTNFLENBQUM7Ozs7O0lBRU0sZ0RBQWU7Ozs7SUFBekI7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7Ozs7SUFFRCxxQ0FBSTs7Ozs7O0lBQUosVUFDRSxFQUFVLEVBQ1YsV0FBd0I7UUFFeEIsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBSSxJ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LENBQUM7O2dCQXhGRixVQUFVOzs7O2dCQW5CRixVQUFVO2dCQVFWLG1CQUFtQjtnQkFJbkIsZ0JBQWdCOztJQWdHekIsNkJBQUM7Q0FBQSxBQXpGRCxJQXlGQztTQXhGWSxzQkFBc0I7Ozs7OztJQUNqQyx5Q0FBOEU7Ozs7O0lBRzVFLHNDQUF3Qjs7Ozs7SUFDeEIsOENBQXlDOzs7OztJQUN6QywyQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIENtc0NvbXBvbmVudCxcbiAgQ21zQ29tcG9uZW50TGlzdCxcbiAgUGFnZVR5cGUsXG59IGZyb20gJy4uLy4uL29jYy9vY2MtbW9kZWxzL2luZGV4JztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vY2Mvc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vcm91dGluZy9pbmRleCc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRBZGFwdGVyIH0gZnJvbSAnLi4vY29ubmVjdG9ycy9jb21wb25lbnQvY21zLWNvbXBvbmVudC5hZGFwdGVyJztcbmltcG9ydCB7IElkTGlzdCB9IGZyb20gJy4uL21vZGVsL2lkTGlzdC5tb2RlbCc7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQge1xuICBDTVNfQ09NUE9ORU5UX0xJU1RfTk9STUFMSVpFUixcbiAgQ01TX0NPTVBPTkVOVF9OT1JNQUxJWkVSLFxufSBmcm9tICcuLi9jb25uZWN0b3JzL2NvbXBvbmVudC9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IHBsdWNrIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjQ21zQ29tcG9uZW50QWRhcHRlciBpbXBsZW1lbnRzIENtc0NvbXBvbmVudEFkYXB0ZXIge1xuICBwcm90ZWN0ZWQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpLnNldCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZVxuICApIHt9XG5cbiAgcHJvdGVjdGVkIGdldEJhc2VFbmRQb2ludCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm9jY0VuZHBvaW50cy5nZXRFbmRwb2ludCgnY21zJyk7XG4gIH1cblxuICBsb2FkPFQgZXh0ZW5kcyBDbXNDb21wb25lbnQ+KFxuICAgIGlkOiBzdHJpbmcsXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0XG4gICk6IE9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8VD4odGhpcy5nZXRCYXNlRW5kUG9pbnQoKSArIGAvY29tcG9uZW50cy8ke2lkfWAsIHtcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgICBwYXJhbXM6IG5ldyBIdHRwUGFyYW1zKHtcbiAgICAgICAgICBmcm9tU3RyaW5nOiB0aGlzLmdldFJlcXVlc3RQYXJhbXMocGFnZUNvbnRleHQpLFxuICAgICAgICB9KSxcbiAgICAgIH0pXG4gICAgICAucGlwZSh0aGlzLmNvbnZlcnRlci5waXBlYWJsZTxhbnksIFQ+KENNU19DT01QT05FTlRfTk9STUFMSVpFUikpO1xuICB9XG5cbiAgbG9hZExpc3QoXG4gICAgaWRzOiBzdHJpbmdbXSxcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsXG4gICAgZmllbGRzID0gJ0RFRkFVTFQnLFxuICAgIGN1cnJlbnRQYWdlID0gMCxcbiAgICBwYWdlU2l6ZSA9IGlkcy5sZW5ndGgsXG4gICAgc29ydD86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENtc0NvbXBvbmVudFtdPiB7XG4gICAgbGV0IHJlcXVlc3RQYXJhbXMgPSB0aGlzLmdldFJlcXVlc3RQYXJhbXMocGFnZUNvbnRleHQsIGZpZWxkcyk7XG4gICAgaWYgKGN1cnJlbnRQYWdlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3RQYXJhbXMgPT09ICcnXG4gICAgICAgID8gKHJlcXVlc3RQYXJhbXMgPSByZXF1ZXN0UGFyYW1zICsgJ2N1cnJlbnRQYWdlPScgKyBjdXJyZW50UGFnZSlcbiAgICAgICAgOiAocmVxdWVzdFBhcmFtcyA9IHJlcXVlc3RQYXJhbXMgKyAnJmN1cnJlbnRQYWdlPScgKyBjdXJyZW50UGFnZSk7XG4gICAgfVxuICAgIGlmIChwYWdlU2l6ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXF1ZXN0UGFyYW1zID0gcmVxdWVzdFBhcmFtcyArICcmcGFnZVNpemU9JyArIHBhZ2VTaXplO1xuICAgIH1cbiAgICBpZiAoc29ydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXF1ZXN0UGFyYW1zID0gcmVxdWVzdFBhcmFtcyArICcmc29ydD0nICsgc29ydDtcbiAgICB9XG5cbiAgICBjb25zdCBpZExpc3Q6IElkTGlzdCA9IHsgaWRMaXN0OiBpZHMgfTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0PENtc0NvbXBvbmVudExpc3Q+KHRoaXMuZ2V0QmFzZUVuZFBvaW50KCkgKyBgL2NvbXBvbmVudHNgLCBpZExpc3QsIHtcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgICBwYXJhbXM6IG5ldyBIdHRwUGFyYW1zKHtcbiAgICAgICAgICBmcm9tU3RyaW5nOiByZXF1ZXN0UGFyYW1zLFxuICAgICAgICB9KSxcbiAgICAgIH0pXG4gICAgICAucGlwZShcbiAgICAgICAgcGx1Y2soJ2NvbXBvbmVudCcpLFxuICAgICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZShDTVNfQ09NUE9ORU5UX0xJU1RfTk9STUFMSVpFUilcbiAgICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldFJlcXVlc3RQYXJhbXMocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LCBmaWVsZHM/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGxldCByZXF1ZXN0UGFyYW1zID0gJyc7XG4gICAgc3dpdGNoIChwYWdlQ29udGV4dC50eXBlKSB7XG4gICAgICBjYXNlIFBhZ2VUeXBlLlBST0RVQ1RfUEFHRToge1xuICAgICAgICByZXF1ZXN0UGFyYW1zID0gJ3Byb2R1Y3RDb2RlPScgKyBwYWdlQ29udGV4dC5pZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFBhZ2VUeXBlLkNBVEVHT1JZX1BBR0U6IHtcbiAgICAgICAgcmVxdWVzdFBhcmFtcyA9ICdjYXRlZ29yeUNvZGU9JyArIHBhZ2VDb250ZXh0LmlkO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgUGFnZVR5cGUuQ0FUQUxPR19QQUdFOiB7XG4gICAgICAgIHJlcXVlc3RQYXJhbXMgPSAnY2F0YWxvZ0NvZGU9JyArIHBhZ2VDb250ZXh0LmlkO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZmllbGRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3RQYXJhbXMgPT09ICcnXG4gICAgICAgID8gKHJlcXVlc3RQYXJhbXMgPSByZXF1ZXN0UGFyYW1zICsgJ2ZpZWxkcz0nICsgZmllbGRzKVxuICAgICAgICA6IChyZXF1ZXN0UGFyYW1zID0gcmVxdWVzdFBhcmFtcyArICcmZmllbGRzPScgKyBmaWVsZHMpO1xuICAgIH1cblxuICAgIHJldHVybiByZXF1ZXN0UGFyYW1zO1xuICB9XG59XG4iXX0=