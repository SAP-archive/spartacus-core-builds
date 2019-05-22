/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { ConverterService } from '../../../util/converter.service';
import { STORE_FINDER_SEARCH_PAGE_NORMALIZER, STORE_COUNT_NORMALIZER, POINT_OF_SERVICE_NORMALIZER, } from '../../../store-finder/connectors';
/** @type {?} */
var STORES_ENDPOINT = 'stores';
var OccStoreFinderAdapter = /** @class */ (function () {
    function OccStoreFinderAdapter(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @param {?} query
     * @param {?} searchConfig
     * @param {?=} longitudeLatitude
     * @return {?}
     */
    OccStoreFinderAdapter.prototype.search = /**
     * @param {?} query
     * @param {?} searchConfig
     * @param {?=} longitudeLatitude
     * @return {?}
     */
    function (query, searchConfig, longitudeLatitude) {
        return this.callOccFindStores(query, searchConfig, longitudeLatitude).pipe(catchError(function (error) { return throwError(error.json()); }), this.converter.pipeable(STORE_FINDER_SEARCH_PAGE_NORMALIZER));
    };
    /**
     * @return {?}
     */
    OccStoreFinderAdapter.prototype.loadCounts = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var storeCountUrl = this.getStoresEndpoint('storescounts');
        return this.http.get(storeCountUrl).pipe(map(function (_a) {
            var countriesAndRegionsStoreCount = _a.countriesAndRegionsStoreCount;
            return countriesAndRegionsStoreCount;
        }), catchError(function (error) { return throwError(error.json()); }), this.converter.pipeableMany(STORE_COUNT_NORMALIZER));
    };
    /**
     * @param {?} storeId
     * @return {?}
     */
    OccStoreFinderAdapter.prototype.load = /**
     * @param {?} storeId
     * @return {?}
     */
    function (storeId) {
        /** @type {?} */
        var storeDetailsUrl = this.getStoresEndpoint(storeId);
        /** @type {?} */
        var params = { fields: 'FULL' };
        return this.http.get(storeDetailsUrl, { params: params }).pipe(catchError(function (error) { return throwError(error.json()); }), this.converter.pipeable(POINT_OF_SERVICE_NORMALIZER));
    };
    /**
     * @protected
     * @param {?} query
     * @param {?} searchConfig
     * @param {?=} longitudeLatitude
     * @return {?}
     */
    OccStoreFinderAdapter.prototype.callOccFindStores = /**
     * @protected
     * @param {?} query
     * @param {?} searchConfig
     * @param {?=} longitudeLatitude
     * @return {?}
     */
    function (query, searchConfig, longitudeLatitude) {
        /** @type {?} */
        var url = this.getStoresEndpoint();
        /** @type {?} */
        var params = new HttpParams({
            fromString: 'fields=stores(name,displayName,openingHours(weekDayOpeningList(FULL),specialDayOpeningList(FULL)),' +
                'geoPoint(latitude,longitude),address(line1,line2,town,region(FULL),postalCode,phone,country,email), features),' +
                'pagination(DEFAULT),' +
                'sorts(DEFAULT)',
        });
        if (longitudeLatitude) {
            params = params.set('longitude', String(longitudeLatitude.longitude));
            params = params.set('latitude', String(longitudeLatitude.latitude));
        }
        else {
            params = params.set('query', query);
        }
        if (searchConfig.pageSize) {
            params = params.set('pageSize', String(searchConfig.pageSize));
        }
        if (searchConfig.currentPage) {
            params = params.set('currentPage', String(searchConfig.currentPage));
        }
        if (searchConfig.sort) {
            params = params.set('sort', searchConfig.sort);
        }
        return this.http.get(url, { params: params }).pipe(catchError(function (error) {
            if (error.json) {
                return throwError(error.json());
            }
            return throwError(error);
        }));
    };
    /**
     * @protected
     * @param {?=} url
     * @return {?}
     */
    OccStoreFinderAdapter.prototype.getStoresEndpoint = /**
     * @protected
     * @param {?=} url
     * @return {?}
     */
    function (url) {
        /** @type {?} */
        var baseUrl = this.occEndpoints.getEndpoint(STORES_ENDPOINT);
        return url ? baseUrl + '/' + url : baseUrl;
    };
    OccStoreFinderAdapter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccStoreFinderAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    return OccStoreFinderAdapter;
}());
export { OccStoreFinderAdapter };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    OccStoreFinderAdapter.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    OccStoreFinderAdapter.prototype.occEndpoints;
    /**
     * @type {?}
     * @protected
     */
    OccStoreFinderAdapter.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXN0b3JlLWZpbmRlci5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy9zdG9yZS1maW5kZXIvb2NjLXN0b3JlLWZpbmRlci5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR2pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBSTNFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRW5FLE9BQU8sRUFDTCxtQ0FBbUMsRUFDbkMsc0JBQXNCLEVBQ3RCLDJCQUEyQixHQUM1QixNQUFNLGtDQUFrQyxDQUFDOztJQU1wQyxlQUFlLEdBQUcsUUFBUTtBQUVoQztJQUVFLCtCQUNZLElBQWdCLEVBQ2hCLFlBQWlDLEVBQ2pDLFNBQTJCO1FBRjNCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQ3BDLENBQUM7Ozs7Ozs7SUFFSixzQ0FBTTs7Ozs7O0lBQU4sVUFDRSxLQUFhLEVBQ2IsWUFBcUMsRUFDckMsaUJBQTRCO1FBRTVCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQ3hFLFVBQVUsQ0FBQyxVQUFDLEtBQVUsSUFBSyxPQUFBLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENB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Z0JBQ2QsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7YUFDakM7WUFDRCxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRVMsaURBQWlCOzs7OztJQUEzQixVQUE0QixHQUFZOztZQUNoQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDO1FBRTlELE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQzdDLENBQUM7O2dCQW5GRixVQUFVOzs7O2dCQXZCRixVQUFVO2dCQUtWLG1CQUFtQjtnQkFJbkIsZ0JBQWdCOztJQWtHekIsNEJBQUM7Q0FBQSxBQXBGRCxJQW9GQztTQW5GWSxxQkFBcUI7Ozs7OztJQUU5QixxQ0FBMEI7Ozs7O0lBQzFCLDZDQUEyQzs7Ozs7SUFDM0MsMENBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IHRocm93RXJyb3IsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgU3RvcmVGaW5kZXJTZWFyY2hDb25maWcgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS1maW5kZXIvbW9kZWwnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5pbXBvcnQgeyBQb2ludE9mU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL3BvaW50LW9mLXNlcnZpY2UubW9kZWwnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUtZmluZGVyL2Nvbm5lY3RvcnMvc3RvcmUtZmluZGVyLmFkYXB0ZXInO1xuaW1wb3J0IHsgR2VvUG9pbnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQge1xuICBTVE9SRV9GSU5ERVJfU0VBUkNIX1BBR0VfTk9STUFMSVpFUixcbiAgU1RPUkVfQ09VTlRfTk9STUFMSVpFUixcbiAgUE9JTlRfT0ZfU0VSVklDRV9OT1JNQUxJWkVSLFxufSBmcm9tICcuLi8uLi8uLi9zdG9yZS1maW5kZXIvY29ubmVjdG9ycyc7XG5pbXBvcnQge1xuICBTdG9yZUZpbmRlclNlYXJjaFBhZ2UsXG4gIFN0b3JlQ291bnQsXG59IGZyb20gJy4uLy4uLy4uL21vZGVsL3N0b3JlLWZpbmRlci5tb2RlbCc7XG5cbmNvbnN0IFNUT1JFU19FTkRQT0lOVCA9ICdzdG9yZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjU3RvcmVGaW5kZXJBZGFwdGVyIGltcGxlbWVudHMgU3RvcmVGaW5kZXJBZGFwdGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlXG4gICkge31cblxuICBzZWFyY2goXG4gICAgcXVlcnk6IHN0cmluZyxcbiAgICBzZWFyY2hDb25maWc6IFN0b3JlRmluZGVyU2VhcmNoQ29uZmlnLFxuICAgIGxvbmdpdHVkZUxhdGl0dWRlPzogR2VvUG9pbnRcbiAgKTogT2JzZXJ2YWJsZTxTdG9yZUZpbmRlclNlYXJjaFBhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5jYWxsT2NjRmluZFN0b3JlcyhxdWVyeSwgc2VhcmNoQ29uZmlnLCBsb25naXR1ZGVMYXRpdHVkZSkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IuanNvbigpKSksXG4gICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZShTVE9SRV9GSU5ERVJfU0VBUkNIX1BBR0VfTk9STUFMSVpFUilcbiAgICApO1xuICB9XG5cbiAgbG9hZENvdW50cygpOiBPYnNlcnZhYmxlPFN0b3JlQ291bnRbXT4ge1xuICAgIGNvbnN0IHN0b3JlQ291bnRVcmwgPSB0aGlzLmdldFN0b3Jlc0VuZHBvaW50KCdzdG9yZXNjb3VudHMnKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9jYy5TdG9yZUNvdW50TGlzdD4oc3RvcmVDb3VudFVybCkucGlwZShcbiAgICAgIG1hcCgoeyBjb3VudHJpZXNBbmRSZWdpb25zU3RvcmVDb3VudCB9KSA9PiBjb3VudHJpZXNBbmRSZWdpb25zU3RvcmVDb3VudCksXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpLFxuICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGVNYW55KFNUT1JFX0NPVU5UX05PUk1BTElaRVIpXG4gICAgKTtcbiAgfVxuXG4gIGxvYWQoc3RvcmVJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxQb2ludE9mU2VydmljZT4ge1xuICAgIGNvbnN0IHN0b3JlRGV0YWlsc1VybCA9IHRoaXMuZ2V0U3RvcmVzRW5kcG9pbnQoc3RvcmVJZCk7XG4gICAgY29uc3QgcGFyYW1zID0geyBmaWVsZHM6ICdGVUxMJyB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T2NjLlBvaW50T2ZTZXJ2aWNlPihzdG9yZURldGFpbHNVcmwsIHsgcGFyYW1zIH0pLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpLFxuICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoUE9JTlRfT0ZfU0VSVklDRV9OT1JNQUxJWkVSKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY2FsbE9jY0ZpbmRTdG9yZXMoXG4gICAgcXVlcnk6IHN0cmluZyxcbiAgICBzZWFyY2hDb25maWc6IFN0b3JlRmluZGVyU2VhcmNoQ29uZmlnLFxuICAgIGxvbmdpdHVkZUxhdGl0dWRlPzogR2VvUG9pbnRcbiAgKTogT2JzZXJ2YWJsZTxPY2MuU3RvcmVGaW5kZXJTZWFyY2hQYWdlPiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRTdG9yZXNFbmRwb2ludCgpO1xuICAgIGxldCBwYXJhbXM6IEh0dHBQYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyh7XG4gICAgICBmcm9tU3RyaW5nOlxuICAgICAgICAnZmllbGRzPXN0b3JlcyhuYW1lLGRpc3BsYXlOYW1lLG9wZW5pbmdIb3Vycyh3ZWVrRGF5T3BlbmluZ0xpc3QoRlVMTCksc3BlY2lhbERheU9wZW5pbmdMaXN0KEZVTEwpKSwnICtcbiAgICAgICAgJ2dlb1BvaW50KGxhdGl0dWRlLGxvbmdpdHVkZSksYWRkcmVzcyhsaW5lMSxsaW5lMix0b3duLHJlZ2lvbihGVUxMKSxwb3N0YWxDb2RlLHBob25lLGNvdW50cnksZW1haWwpLCBmZWF0dXJlcyksJyArXG4gICAgICAgICdwYWdpbmF0aW9uKERFRkFVTFQpLCcgK1xuICAgICAgICAnc29ydHMoREVGQVVMVCknLFxuICAgIH0pO1xuXG4gICAgaWYgKGxvbmdpdHVkZUxhdGl0dWRlKSB7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCdsb25naXR1ZGUnLCBTdHJpbmcobG9uZ2l0dWRlTGF0aXR1ZGUubG9uZ2l0dWRlKSk7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCdsYXRpdHVkZScsIFN0cmluZyhsb25naXR1ZGVMYXRpdHVkZS5sYXRpdHVkZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCdxdWVyeScsIHF1ZXJ5KTtcbiAgICB9XG4gICAgaWYgKHNlYXJjaENvbmZpZy5wYWdlU2l6ZSkge1xuICAgICAgcGFyYW1zID0gcGFyYW1zLnNldCgncGFnZVNpemUnLCBTdHJpbmcoc2VhcmNoQ29uZmlnLnBhZ2VTaXplKSk7XG4gICAgfVxuICAgIGlmIChzZWFyY2hDb25maWcuY3VycmVudFBhZ2UpIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ2N1cnJlbnRQYWdlJywgU3RyaW5nKHNlYXJjaENvbmZpZy5jdXJyZW50UGFnZSkpO1xuICAgIH1cbiAgICBpZiAoc2VhcmNoQ29uZmlnLnNvcnQpIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ3NvcnQnLCBzZWFyY2hDb25maWcuc29ydCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T2NjLlN0b3JlRmluZGVyU2VhcmNoUGFnZT4odXJsLCB7IHBhcmFtcyB9KS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZXJyb3IuanNvbikge1xuICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFN0b3Jlc0VuZHBvaW50KHVybD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgYmFzZVVybCA9IHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KFNUT1JFU19FTkRQT0lOVCk7XG5cbiAgICByZXR1cm4gdXJsID8gYmFzZVVybCArICcvJyArIHVybCA6IGJhc2VVcmw7XG4gIH1cbn1cbiJdfQ==