/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { ConverterService } from '../../util/converter.service';
import { STORE_FINDER_SEARCH_PAGE_NORMALIZER, STORE_COUNT_NORMALIZER, POINT_OF_SERVICE_NORMALIZER, } from '../connectors';
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
     * @private
     */
    OccStoreFinderAdapter.prototype.http;
    /**
     * @type {?}
     * @private
     */
    OccStoreFinderAdapter.prototype.occEndpoints;
    /**
     * @type {?}
     * @private
     */
    OccStoreFinderAdapter.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXN0b3JlLWZpbmRlci5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0b3JlLWZpbmRlci9vY2Mvb2NjLXN0b3JlLWZpbmRlci5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR2pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBSS9FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRWhFLE9BQU8sRUFDTCxtQ0FBbUMsRUFDbkMsc0JBQXNCLEVBQ3RCLDJCQUEyQixHQUM1QixNQUFNLGVBQWUsQ0FBQzs7SUFNakIsZUFBZSxHQUFHLFFBQVE7QUFFaEM7SUFFRSwrQkFDVSxJQUFnQixFQUNoQixZQUFpQyxFQUNqQyxTQUEyQjtRQUYzQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNqQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUNsQyxDQUFDOzs7Ozs7O0lBRUosc0NBQU07Ozs7OztJQUFOLFVBQ0UsS0FBYSxFQUNiLFlBQXFDLEVBQ3JDLGlCQUE0QjtRQUU1QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUN4RSxVQUFVLENBQUMsVUFBQyxLQUFVLElBQUssT0FBQSxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQXhCLENB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VUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2FBQ2pDO1lBQ0QsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVTLGlEQUFpQjs7Ozs7SUFBM0IsVUFBNEIsR0FBWTs7WUFDaEMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQztRQUU5RCxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUM3QyxDQUFDOztnQkFuRkYsVUFBVTs7OztnQkF2QkYsVUFBVTtnQkFLVixtQkFBbUI7Z0JBSW5CLGdCQUFnQjs7SUFrR3pCLDRCQUFDO0NBQUEsQUFwRkQsSUFvRkM7U0FuRlkscUJBQXFCOzs7Ozs7SUFFOUIscUNBQXdCOzs7OztJQUN4Qiw2Q0FBeUM7Ozs7O0lBQ3pDLDBDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyB0aHJvd0Vycm9yLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFN0b3JlRmluZGVyU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vbW9kZWwvaW5kZXgnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL29jYy9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUG9pbnRPZlNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbC9wb2ludC1vZi1zZXJ2aWNlLm1vZGVsJztcbmltcG9ydCB7IFN0b3JlRmluZGVyQWRhcHRlciB9IGZyb20gJy4uL2Nvbm5lY3RvcnMvc3RvcmUtZmluZGVyLmFkYXB0ZXInO1xuaW1wb3J0IHsgR2VvUG9pbnQgfSBmcm9tICcuLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uL29jYy9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHtcbiAgU1RPUkVfRklOREVSX1NFQVJDSF9QQUdFX05PUk1BTElaRVIsXG4gIFNUT1JFX0NPVU5UX05PUk1BTElaRVIsXG4gIFBPSU5UX09GX1NFUlZJQ0VfTk9STUFMSVpFUixcbn0gZnJvbSAnLi4vY29ubmVjdG9ycyc7XG5pbXBvcnQge1xuICBTdG9yZUZpbmRlclNlYXJjaFBhZ2UsXG4gIFN0b3JlQ291bnQsXG59IGZyb20gJy4uLy4uL21vZGVsL3N0b3JlLWZpbmRlci5tb2RlbCc7XG5cbmNvbnN0IFNUT1JFU19FTkRQT0lOVCA9ICdzdG9yZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjU3RvcmVGaW5kZXJBZGFwdGVyIGltcGxlbWVudHMgU3RvcmVGaW5kZXJBZGFwdGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlXG4gICkge31cblxuICBzZWFyY2goXG4gICAgcXVlcnk6IHN0cmluZyxcbiAgICBzZWFyY2hDb25maWc6IFN0b3JlRmluZGVyU2VhcmNoQ29uZmlnLFxuICAgIGxvbmdpdHVkZUxhdGl0dWRlPzogR2VvUG9pbnRcbiAgKTogT2JzZXJ2YWJsZTxTdG9yZUZpbmRlclNlYXJjaFBhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5jYWxsT2NjRmluZFN0b3JlcyhxdWVyeSwgc2VhcmNoQ29uZmlnLCBsb25naXR1ZGVMYXRpdHVkZSkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IuanNvbigpKSksXG4gICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZShTVE9SRV9GSU5ERVJfU0VBUkNIX1BBR0VfTk9STUFMSVpFUilcbiAgICApO1xuICB9XG5cbiAgbG9hZENvdW50cygpOiBPYnNlcnZhYmxlPFN0b3JlQ291bnRbXT4ge1xuICAgIGNvbnN0IHN0b3JlQ291bnRVcmwgPSB0aGlzLmdldFN0b3Jlc0VuZHBvaW50KCdzdG9yZXNjb3VudHMnKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9jYy5TdG9yZUNvdW50TGlzdD4oc3RvcmVDb3VudFVybCkucGlwZShcbiAgICAgIG1hcCgoeyBjb3VudHJpZXNBbmRSZWdpb25zU3RvcmVDb3VudCB9KSA9PiBjb3VudHJpZXNBbmRSZWdpb25zU3RvcmVDb3VudCksXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpLFxuICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGVNYW55KFNUT1JFX0NPVU5UX05PUk1BTElaRVIpXG4gICAgKTtcbiAgfVxuXG4gIGxvYWQoc3RvcmVJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxQb2ludE9mU2VydmljZT4ge1xuICAgIGNvbnN0IHN0b3JlRGV0YWlsc1VybCA9IHRoaXMuZ2V0U3RvcmVzRW5kcG9pbnQoc3RvcmVJZCk7XG4gICAgY29uc3QgcGFyYW1zID0geyBmaWVsZHM6ICdGVUxMJyB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T2NjLlBvaW50T2ZTZXJ2aWNlPihzdG9yZURldGFpbHNVcmwsIHsgcGFyYW1zIH0pLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpLFxuICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoUE9JTlRfT0ZfU0VSVklDRV9OT1JNQUxJWkVSKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY2FsbE9jY0ZpbmRTdG9yZXMoXG4gICAgcXVlcnk6IHN0cmluZyxcbiAgICBzZWFyY2hDb25maWc6IFN0b3JlRmluZGVyU2VhcmNoQ29uZmlnLFxuICAgIGxvbmdpdHVkZUxhdGl0dWRlPzogR2VvUG9pbnRcbiAgKTogT2JzZXJ2YWJsZTxPY2MuU3RvcmVGaW5kZXJTZWFyY2hQYWdlPiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRTdG9yZXNFbmRwb2ludCgpO1xuICAgIGxldCBwYXJhbXM6IEh0dHBQYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyh7XG4gICAgICBmcm9tU3RyaW5nOlxuICAgICAgICAnZmllbGRzPXN0b3JlcyhuYW1lLGRpc3BsYXlOYW1lLG9wZW5pbmdIb3Vycyh3ZWVrRGF5T3BlbmluZ0xpc3QoRlVMTCksc3BlY2lhbERheU9wZW5pbmdMaXN0KEZVTEwpKSwnICtcbiAgICAgICAgJ2dlb1BvaW50KGxhdGl0dWRlLGxvbmdpdHVkZSksYWRkcmVzcyhsaW5lMSxsaW5lMix0b3duLHJlZ2lvbihGVUxMKSxwb3N0YWxDb2RlLHBob25lLGNvdW50cnksZW1haWwpLCBmZWF0dXJlcyksJyArXG4gICAgICAgICdwYWdpbmF0aW9uKERFRkFVTFQpLCcgK1xuICAgICAgICAnc29ydHMoREVGQVVMVCknLFxuICAgIH0pO1xuXG4gICAgaWYgKGxvbmdpdHVkZUxhdGl0dWRlKSB7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCdsb25naXR1ZGUnLCBTdHJpbmcobG9uZ2l0dWRlTGF0aXR1ZGUubG9uZ2l0dWRlKSk7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCdsYXRpdHVkZScsIFN0cmluZyhsb25naXR1ZGVMYXRpdHVkZS5sYXRpdHVkZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCdxdWVyeScsIHF1ZXJ5KTtcbiAgICB9XG4gICAgaWYgKHNlYXJjaENvbmZpZy5wYWdlU2l6ZSkge1xuICAgICAgcGFyYW1zID0gcGFyYW1zLnNldCgncGFnZVNpemUnLCBTdHJpbmcoc2VhcmNoQ29uZmlnLnBhZ2VTaXplKSk7XG4gICAgfVxuICAgIGlmIChzZWFyY2hDb25maWcuY3VycmVudFBhZ2UpIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ2N1cnJlbnRQYWdlJywgU3RyaW5nKHNlYXJjaENvbmZpZy5jdXJyZW50UGFnZSkpO1xuICAgIH1cbiAgICBpZiAoc2VhcmNoQ29uZmlnLnNvcnQpIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ3NvcnQnLCBzZWFyY2hDb25maWcuc29ydCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T2NjLlN0b3JlRmluZGVyU2VhcmNoUGFnZT4odXJsLCB7IHBhcmFtcyB9KS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZXJyb3IuanNvbikge1xuICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFN0b3Jlc0VuZHBvaW50KHVybD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgYmFzZVVybCA9IHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KFNUT1JFU19FTkRQT0lOVCk7XG5cbiAgICByZXR1cm4gdXJsID8gYmFzZVVybCArICcvJyArIHVybCA6IGJhc2VVcmw7XG4gIH1cbn1cbiJdfQ==