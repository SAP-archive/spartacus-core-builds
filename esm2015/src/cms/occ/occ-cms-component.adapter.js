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
    loadList(ids, pageContext, fields = 'DEFAULT', currentPage = 0, pageSize = ids.length, sort) {
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
        /** @type {?} */
        const idList = { idList: ids };
        return this.http
            .post(this.getBaseEndPoint() + `/components`, idList, {
            headers: this.headers,
            params: new HttpParams({
                fromString: requestParams,
            }),
        })
            .pipe(pluck('component'), this.converter.pipeable(CMS_COMPONENT_LIST_NORMALIZER));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNtcy1jb21wb25lbnQuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvb2NjL29jYy1jbXMtY29tcG9uZW50LmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUdMLFFBQVEsR0FDVCxNQUFNLDRCQUE0QixDQUFDO0FBQ3BDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBSS9FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFDTCw2QkFBNkIsRUFDN0Isd0JBQXdCLEdBQ3pCLE1BQU0sb0NBQW9DLENBQUM7QUFDNUMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3ZDLE1BQU0sT0FBTyxzQkFBc0I7Ozs7OztJQUdqQyxZQUNVLElBQWdCLEVBQ2hCLFlBQWlDLEVBQy9CLFNBQTJCO1FBRjdCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQy9CLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBTDdCLFlBQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQU0zRSxDQUFDOzs7OztJQUVNLGVBQWU7UUFDdkIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7Ozs7O0lBRUQsSUFBSSxDQUNGLEVBQVUsRUFDVixXQUF3QjtRQUV4QixPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFJ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LHlDQUE4RTs7Ozs7SUFHNUUsc0NBQXdCOzs7OztJQUN4Qiw4Q0FBeUM7Ozs7O0lBQ3pDLDJDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgQ21zQ29tcG9uZW50LFxuICBDbXNDb21wb25lbnRMaXN0LFxuICBQYWdlVHlwZSxcbn0gZnJvbSAnLi4vLi4vb2NjL29jYy1tb2RlbHMvaW5kZXgnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL29jYy9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2luZGV4JztcbmltcG9ydCB7IENtc0NvbXBvbmVudEFkYXB0ZXIgfSBmcm9tICcuLi9jb25uZWN0b3JzL2NvbXBvbmVudC9jbXMtY29tcG9uZW50LmFkYXB0ZXInO1xuaW1wb3J0IHsgSWRMaXN0IH0gZnJvbSAnLi4vbW9kZWwvaWRMaXN0Lm1vZGVsJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIENNU19DT01QT05FTlRfTElTVF9OT1JNQUxJWkVSLFxuICBDTVNfQ09NUE9ORU5UX05PUk1BTElaRVIsXG59IGZyb20gJy4uL2Nvbm5lY3RvcnMvY29tcG9uZW50L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgcGx1Y2sgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NDbXNDb21wb25lbnRBZGFwdGVyIGltcGxlbWVudHMgQ21zQ29tcG9uZW50QWRhcHRlciB7XG4gIHByb3RlY3RlZCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCkuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlXG4gICkge31cblxuICBwcm90ZWN0ZWQgZ2V0QmFzZUVuZFBvaW50KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KCdjbXMnKTtcbiAgfVxuXG4gIGxvYWQ8VCBleHRlbmRzIENtc0NvbXBvbmVudD4oXG4gICAgaWQ6IHN0cmluZyxcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHRcbiAgKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxUPih0aGlzLmdldEJhc2VFbmRQb2ludCgpICsgYC9jb21wb25lbnRzLyR7aWR9YCwge1xuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICAgIHBhcmFtczogbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgICAgIGZyb21TdHJpbmc6IHRoaXMuZ2V0UmVxdWVzdFBhcmFtcyhwYWdlQ29udGV4dCksXG4gICAgICAgIH0pLFxuICAgICAgfSlcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlPGFueSwgVD4oQ01TX0NPTVBPTkVOVF9OT1JNQUxJWkVSKSk7XG4gIH1cblxuICBsb2FkTGlzdChcbiAgICBpZHM6IHN0cmluZ1tdLFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCxcbiAgICBmaWVsZHMgPSAnREVGQVVMVCcsXG4gICAgY3VycmVudFBhZ2UgPSAwLFxuICAgIHBhZ2VTaXplID0gaWRzLmxlbmd0aCxcbiAgICBzb3J0Pzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Q21zQ29tcG9uZW50W10+IHtcbiAgICBsZXQgcmVxdWVzdFBhcmFtcyA9IHRoaXMuZ2V0UmVxdWVzdFBhcmFtcyhwYWdlQ29udGV4dCwgZmllbGRzKTtcbiAgICBpZiAoY3VycmVudFBhZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdFBhcmFtcyA9PT0gJydcbiAgICAgICAgPyAocmVxdWVzdFBhcmFtcyA9IHJlcXVlc3RQYXJhbXMgKyAnY3VycmVudFBhZ2U9JyArIGN1cnJlbnRQYWdlKVxuICAgICAgICA6IChyZXF1ZXN0UGFyYW1zID0gcmVxdWVzdFBhcmFtcyArICcmY3VycmVudFBhZ2U9JyArIGN1cnJlbnRQYWdlKTtcbiAgICB9XG4gICAgaWYgKHBhZ2VTaXplICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3RQYXJhbXMgPSByZXF1ZXN0UGFyYW1zICsgJyZwYWdlU2l6ZT0nICsgcGFnZVNpemU7XG4gICAgfVxuICAgIGlmIChzb3J0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3RQYXJhbXMgPSByZXF1ZXN0UGFyYW1zICsgJyZzb3J0PScgKyBzb3J0O1xuICAgIH1cblxuICAgIGNvbnN0IGlkTGlzdDogSWRMaXN0ID0geyBpZExpc3Q6IGlkcyB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBvc3Q8Q21zQ29tcG9uZW50TGlzdD4odGhpcy5nZXRCYXNlRW5kUG9pbnQoKSArIGAvY29tcG9uZW50c2AsIGlkTGlzdCwge1xuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICAgIHBhcmFtczogbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgICAgIGZyb21TdHJpbmc6IHJlcXVlc3RQYXJhbXMsXG4gICAgICAgIH0pLFxuICAgICAgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICBwbHVjaygnY29tcG9uZW50JyksXG4gICAgICAgIHRoaXMuY29udmVydGVyLnBpcGVhYmxlKENNU19DT01QT05FTlRfTElTVF9OT1JNQUxJWkVSKVxuICAgICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UmVxdWVzdFBhcmFtcyhwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsIGZpZWxkcz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IHJlcXVlc3RQYXJhbXMgPSAnJztcbiAgICBzd2l0Y2ggKHBhZ2VDb250ZXh0LnR5cGUpIHtcbiAgICAgIGNhc2UgUGFnZVR5cGUuUFJPRFVDVF9QQUdFOiB7XG4gICAgICAgIHJlcXVlc3RQYXJhbXMgPSAncHJvZHVjdENvZGU9JyArIHBhZ2VDb250ZXh0LmlkO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgUGFnZVR5cGUuQ0FURUdPUllfUEFHRToge1xuICAgICAgICByZXF1ZXN0UGFyYW1zID0gJ2NhdGVnb3J5Q29kZT0nICsgcGFnZUNvbnRleHQuaWQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBQYWdlVHlwZS5DQVRBTE9HX1BBR0U6IHtcbiAgICAgICAgcmVxdWVzdFBhcmFtcyA9ICdjYXRhbG9nQ29kZT0nICsgcGFnZUNvbnRleHQuaWQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmaWVsZHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdFBhcmFtcyA9PT0gJydcbiAgICAgICAgPyAocmVxdWVzdFBhcmFtcyA9IHJlcXVlc3RQYXJhbXMgKyAnZmllbGRzPScgKyBmaWVsZHMpXG4gICAgICAgIDogKHJlcXVlc3RQYXJhbXMgPSByZXF1ZXN0UGFyYW1zICsgJyZmaWVsZHM9JyArIGZpZWxkcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcXVlc3RQYXJhbXM7XG4gIH1cbn1cbiJdfQ==