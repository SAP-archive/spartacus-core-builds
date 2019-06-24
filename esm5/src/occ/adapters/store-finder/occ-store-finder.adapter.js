/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { POINT_OF_SERVICE_NORMALIZER, STORE_COUNT_NORMALIZER, STORE_FINDER_SEARCH_PAGE_NORMALIZER, } from '../../../store-finder/connectors';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
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
        return this.callOccFindStores(query, searchConfig, longitudeLatitude).pipe(this.converter.pipeable(STORE_FINDER_SEARCH_PAGE_NORMALIZER));
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
        return this.http.get(storeCountUrl).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var countriesAndRegionsStoreCount = _a.countriesAndRegionsStoreCount;
            return countriesAndRegionsStoreCount;
        })), this.converter.pipeableMany(STORE_COUNT_NORMALIZER));
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
        return this.http
            .get(storeDetailsUrl, { params: params })
            .pipe(this.converter.pipeable(POINT_OF_SERVICE_NORMALIZER));
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
        return this.http.get(url, { params: params });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXN0b3JlLWZpbmRlci5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy9zdG9yZS1maW5kZXIvb2NjLXN0b3JlLWZpbmRlci5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBT3JDLE9BQU8sRUFDTCwyQkFBMkIsRUFDM0Isc0JBQXNCLEVBQ3RCLG1DQUFtQyxHQUNwQyxNQUFNLGtDQUFrQyxDQUFDO0FBRzFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRW5FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOztJQUVyRSxlQUFlLEdBQUcsUUFBUTtBQUVoQztJQUVFLCtCQUNZLElBQWdCLEVBQ2hCLFlBQWlDLEVBQ2pDLFNBQTJCO1FBRjNCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQ3BDLENBQUM7Ozs7Ozs7SUFFSixzQ0FBTTs7Ozs7O0lBQU4sVUFDRSxLQUFhLEVBQ2IsWUFBcUMsRUFDckMsaUJBQTRCO1FBRTVCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQ3hFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLG1DQUFtQyxDQUFDLENBQzdELENBQUM7SUFDSixDQUFDOzs7O0lBRUQsMENBQVU7OztJQUFWOztZQUNRLGFBQWEsR0FBRyxJQUFJLENBQUMsaUJB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cnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgR2VvUG9pbnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IFBvaW50T2ZTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvcG9pbnQtb2Ytc2VydmljZS5tb2RlbCc7XG5pbXBvcnQge1xuICBTdG9yZUNvdW50LFxuICBTdG9yZUZpbmRlclNlYXJjaFBhZ2UsXG59IGZyb20gJy4uLy4uLy4uL21vZGVsL3N0b3JlLWZpbmRlci5tb2RlbCc7XG5pbXBvcnQge1xuICBQT0lOVF9PRl9TRVJWSUNFX05PUk1BTElaRVIsXG4gIFNUT1JFX0NPVU5UX05PUk1BTElaRVIsXG4gIFNUT1JFX0ZJTkRFUl9TRUFSQ0hfUEFHRV9OT1JNQUxJWkVSLFxufSBmcm9tICcuLi8uLi8uLi9zdG9yZS1maW5kZXIvY29ubmVjdG9ycyc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlckFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS1maW5kZXIvY29ubmVjdG9ycy9zdG9yZS1maW5kZXIuYWRhcHRlcic7XG5pbXBvcnQgeyBTdG9yZUZpbmRlclNlYXJjaENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3N0b3JlLWZpbmRlci9tb2RlbCc7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5cbmNvbnN0IFNUT1JFU19FTkRQT0lOVCA9ICdzdG9yZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjU3RvcmVGaW5kZXJBZGFwdGVyIGltcGxlbWVudHMgU3RvcmVGaW5kZXJBZGFwdGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlXG4gICkge31cblxuICBzZWFyY2goXG4gICAgcXVlcnk6IHN0cmluZyxcbiAgICBzZWFyY2hDb25maWc6IFN0b3JlRmluZGVyU2VhcmNoQ29uZmlnLFxuICAgIGxvbmdpdHVkZUxhdGl0dWRlPzogR2VvUG9pbnRcbiAgKTogT2JzZXJ2YWJsZTxTdG9yZUZpbmRlclNlYXJjaFBhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5jYWxsT2NjRmluZFN0b3JlcyhxdWVyeSwgc2VhcmNoQ29uZmlnLCBsb25naXR1ZGVMYXRpdHVkZSkucGlwZShcbiAgICAgIHRoaXMuY29udmVydGVyLnBpcGVhYmxlKFNUT1JFX0ZJTkRFUl9TRUFSQ0hfUEFHRV9OT1JNQUxJWkVSKVxuICAgICk7XG4gIH1cblxuICBsb2FkQ291bnRzKCk6IE9ic2VydmFibGU8U3RvcmVDb3VudFtdPiB7XG4gICAgY29uc3Qgc3RvcmVDb3VudFVybCA9IHRoaXMuZ2V0U3RvcmVzRW5kcG9pbnQoJ3N0b3Jlc2NvdW50cycpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T2NjLlN0b3JlQ291bnRMaXN0PihzdG9yZUNvdW50VXJsKS5waXBlKFxuICAgICAgbWFwKCh7IGNvdW50cmllc0FuZFJlZ2lvbnNTdG9yZUNvdW50IH0pID0+IGNvdW50cmllc0FuZFJlZ2lvbnNTdG9yZUNvdW50KSxcbiAgICAgIHRoaXMuY29udmVydGVyLnBpcGVhYmxlTWFueShTVE9SRV9DT1VOVF9OT1JNQUxJWkVSKVxuICAgICk7XG4gIH1cblxuICBsb2FkKHN0b3JlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8UG9pbnRPZlNlcnZpY2U+IHtcbiAgICBjb25zdCBzdG9yZURldGFpbHNVcmwgPSB0aGlzLmdldFN0b3Jlc0VuZHBvaW50KHN0b3JlSWQpO1xuICAgIGNvbnN0IHBhcmFtcyA9IHsgZmllbGRzOiAnRlVMTCcgfTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8T2NjLlBvaW50T2ZTZXJ2aWNlPihzdG9yZURldGFpbHNVcmwsIHsgcGFyYW1zIH0pXG4gICAgICAucGlwZSh0aGlzLmNvbnZlcnRlci5waXBlYWJsZShQT0lOVF9PRl9TRVJWSUNFX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjYWxsT2NjRmluZFN0b3JlcyhcbiAgICBxdWVyeTogc3RyaW5nLFxuICAgIHNlYXJjaENvbmZpZzogU3RvcmVGaW5kZXJTZWFyY2hDb25maWcsXG4gICAgbG9uZ2l0dWRlTGF0aXR1ZGU/OiBHZW9Qb2ludFxuICApOiBPYnNlcnZhYmxlPE9jYy5TdG9yZUZpbmRlclNlYXJjaFBhZ2U+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFN0b3Jlc0VuZHBvaW50KCk7XG4gICAgbGV0IHBhcmFtczogSHR0cFBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHtcbiAgICAgIGZyb21TdHJpbmc6XG4gICAgICAgICdmaWVsZHM9c3RvcmVzKG5hbWUsZGlzcGxheU5hbWUsb3BlbmluZ0hvdXJzKHdlZWtEYXlPcGVuaW5nTGlzdChGVUxMKSxzcGVjaWFsRGF5T3BlbmluZ0xpc3QoRlVMTCkpLCcgK1xuICAgICAgICAnZ2VvUG9pbnQobGF0aXR1ZGUsbG9uZ2l0dWRlKSxhZGRyZXNzKGxpbmUxLGxpbmUyLHRvd24scmVnaW9uKEZVTEwpLHBvc3RhbENvZGUscGhvbmUsY291bnRyeSxlbWFpbCksIGZlYXR1cmVzKSwnICtcbiAgICAgICAgJ3BhZ2luYXRpb24oREVGQVVMVCksJyArXG4gICAgICAgICdzb3J0cyhERUZBVUxUKScsXG4gICAgfSk7XG5cbiAgICBpZiAobG9uZ2l0dWRlTGF0aXR1ZGUpIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ2xvbmdpdHVkZScsIFN0cmluZyhsb25naXR1ZGVMYXRpdHVkZS5sb25naXR1ZGUpKTtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ2xhdGl0dWRlJywgU3RyaW5nKGxvbmdpdHVkZUxhdGl0dWRlLmxhdGl0dWRlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ3F1ZXJ5JywgcXVlcnkpO1xuICAgIH1cbiAgICBpZiAoc2VhcmNoQ29uZmlnLnBhZ2VTaXplKSB7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCdwYWdlU2l6ZScsIFN0cmluZyhzZWFyY2hDb25maWcucGFnZVNpemUpKTtcbiAgICB9XG4gICAgaWYgKHNlYXJjaENvbmZpZy5jdXJyZW50UGFnZSkge1xuICAgICAgcGFyYW1zID0gcGFyYW1zLnNldCgnY3VycmVudFBhZ2UnLCBTdHJpbmcoc2VhcmNoQ29uZmlnLmN1cnJlbnRQYWdlKSk7XG4gICAgfVxuICAgIGlmIChzZWFyY2hDb25maWcuc29ydCkge1xuICAgICAgcGFyYW1zID0gcGFyYW1zLnNldCgnc29ydCcsIHNlYXJjaENvbmZpZy5zb3J0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPY2MuU3RvcmVGaW5kZXJTZWFyY2hQYWdlPih1cmwsIHsgcGFyYW1zIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFN0b3Jlc0VuZHBvaW50KHVybD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgYmFzZVVybCA9IHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KFNUT1JFU19FTkRQT0lOVCk7XG5cbiAgICByZXR1cm4gdXJsID8gYmFzZVVybCArICcvJyArIHVybCA6IGJhc2VVcmw7XG4gIH1cbn1cbiJdfQ==