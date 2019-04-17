/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
/** @type {?} */
var STORES_ENDPOINT = 'stores';
var OccStoreFinderService = /** @class */ (function () {
    function OccStoreFinderService(http, occEndpoints) {
        this.http = http;
        this.occEndpoints = occEndpoints;
    }
    /**
     * @param {?} query
     * @param {?} searchConfig
     * @param {?=} longitudeLatitude
     * @return {?}
     */
    OccStoreFinderService.prototype.findStores = /**
     * @param {?} query
     * @param {?} searchConfig
     * @param {?=} longitudeLatitude
     * @return {?}
     */
    function (query, searchConfig, longitudeLatitude) {
        return this.callOccFindStores(query, searchConfig, longitudeLatitude);
    };
    /**
     * @return {?}
     */
    OccStoreFinderService.prototype.storesCount = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var storeCountUrl = this.getStoresEndpoint('storescounts');
        return this.http
            .get(storeCountUrl)
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @param {?} storeId
     * @return {?}
     */
    OccStoreFinderService.prototype.findStoreById = /**
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
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @protected
     * @param {?} query
     * @param {?} searchConfig
     * @param {?=} longitudeLatitude
     * @return {?}
     */
    OccStoreFinderService.prototype.callOccFindStores = /**
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
    OccStoreFinderService.prototype.getStoresEndpoint = /**
     * @protected
     * @param {?=} url
     * @return {?}
     */
    function (url) {
        /** @type {?} */
        var baseUrl = this.occEndpoints.getEndpoint(STORES_ENDPOINT);
        return url ? baseUrl + '/' + url : baseUrl;
    };
    OccStoreFinderService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccStoreFinderService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService }
    ]; };
    return OccStoreFinderService;
}());
export { OccStoreFinderService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OccStoreFinderService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    OccStoreFinderService.prototype.occEndpoints;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RvcmUtZmluZGVyL29jYy9zdG9yZS1maW5kZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSTVDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOztJQUV6RSxlQUFlLEdBQUcsUUFBUTtBQUVoQztJQUVFLCtCQUNVLElBQWdCLEVBQ2hCLFlBQWlDO1FBRGpDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO0lBQ3hDLENBQUM7Ozs7Ozs7SUFFSiwwQ0FBVTs7Ozs7O0lBQVYsVUFDRSxLQUFhLEVBQ2IsWUFBcUMsRUFDckMsaUJBQXFDO1FBRXJDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7O0lBRUQsMkNBQVc7OztJQUFYOztZQUNRLGFBQWEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDO1FBRTVELE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQUMsYUFBYSxDQUFDO2FBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBQyxLQUFVLElBQUssT0FBQSxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQXhCLENBQXdCLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Ozs7O0lBRUQsNkNBQWE7Ozs7SUFBYixVQUFjLE9BQWU7O1lBQ3JCLGVBQWUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDOztZQUNqRCxNQUFNLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFO1FBRWpDLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQUMsZUFBZSxFQUFFLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQzthQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7Ozs7OztJQUVTLGlEQUFpQjs7Ozs7OztJQUEzQixVQUNFLEtBQWEsRUFDYixZQUFxQyxFQUNyQyxpQkFBcUM7O1lBRS9CLEdBQUcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7O1lBQ2hDLE1BQU0sR0FBZSxJQUFJLFVBQVUsQ0FBQztZQUN0QyxVQUFVLEVBQ1Isb0dBQW9HO2dCQUNwRyxnSEFBZ0g7Z0JBQ2hILHNCQUFzQjtnQkFDdEIsZ0JBQWdCO1NBQ25CLENBQUM7UUFFRixJQUFJLGlCQUFpQixFQUFFO1lBQ3JCLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN0RSxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDckU7YUFBTTtZQUNMLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNyQztRQUNELElBQUksWUFBWSxDQUFDLFFBQVEsRUFBRTtZQUN6QixNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQ2hFO1FBQ0QsSUFBSSxZQUFZLENBQUMsV0FBVyxFQUFFO1lBQzVCLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7U0FDdEU7UUFDRCxJQUFJLFlBQVksQ0FBQyxJQUFJLEVBQUU7WUFDckIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoRDtRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQXdCLEdBQUcsRUFBRSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQy9ELFVBQVUsQ0FBQyxVQUFDLEtBQVU7WUFDcEIsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFO2dCQUNkLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2FBQ2pDO1lBQ0QsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVTLGlEQUFpQjs7Ozs7SUFBM0IsVUFBNEIsR0FBWTs7WUFDaEMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQztRQUU5RCxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUM3QyxDQUFDOztnQkE1RUYsVUFBVTs7OztnQkFWRixVQUFVO2dCQU1WLG1CQUFtQjs7SUFpRjVCLDRCQUFDO0NBQUEsQUE3RUQsSUE2RUM7U0E1RVkscUJBQXFCOzs7Ozs7SUFFOUIscUNBQXdCOzs7OztJQUN4Qiw2Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgdGhyb3dFcnJvciwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgU3RvcmVGaW5kZXJTZWFyY2hDb25maWcsIExvbmdpdHVkZUxhdGl0dWRlIH0gZnJvbSAnLi8uLi9tb2RlbC9pbmRleCc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlclNlYXJjaFBhZ2UgfSBmcm9tICcuLi8uLi9vY2Mvb2NjLW1vZGVscyc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb2NjL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5cbmNvbnN0IFNUT1JFU19FTkRQT0lOVCA9ICdzdG9yZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjU3RvcmVGaW5kZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlXG4gICkge31cblxuICBmaW5kU3RvcmVzKFxuICAgIHF1ZXJ5OiBzdHJpbmcsXG4gICAgc2VhcmNoQ29uZmlnOiBTdG9yZUZpbmRlclNlYXJjaENvbmZpZyxcbiAgICBsb25naXR1ZGVMYXRpdHVkZT86IExvbmdpdHVkZUxhdGl0dWRlXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuY2FsbE9jY0ZpbmRTdG9yZXMocXVlcnksIHNlYXJjaENvbmZpZywgbG9uZ2l0dWRlTGF0aXR1ZGUpO1xuICB9XG5cbiAgc3RvcmVzQ291bnQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBzdG9yZUNvdW50VXJsID0gdGhpcy5nZXRTdG9yZXNFbmRwb2ludCgnc3RvcmVzY291bnRzJyk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KHN0b3JlQ291bnRVcmwpXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpKTtcbiAgfVxuXG4gIGZpbmRTdG9yZUJ5SWQoc3RvcmVJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBzdG9yZURldGFpbHNVcmwgPSB0aGlzLmdldFN0b3Jlc0VuZHBvaW50KHN0b3JlSWQpO1xuICAgIGNvbnN0IHBhcmFtcyA9IHsgZmllbGRzOiAnRlVMTCcgfTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQoc3RvcmVEZXRhaWxzVXJsLCB7IHBhcmFtcyB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY2FsbE9jY0ZpbmRTdG9yZXMoXG4gICAgcXVlcnk6IHN0cmluZyxcbiAgICBzZWFyY2hDb25maWc6IFN0b3JlRmluZGVyU2VhcmNoQ29uZmlnLFxuICAgIGxvbmdpdHVkZUxhdGl0dWRlPzogTG9uZ2l0dWRlTGF0aXR1ZGVcbiAgKTogT2JzZXJ2YWJsZTxTdG9yZUZpbmRlclNlYXJjaFBhZ2U+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFN0b3Jlc0VuZHBvaW50KCk7XG4gICAgbGV0IHBhcmFtczogSHR0cFBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHtcbiAgICAgIGZyb21TdHJpbmc6XG4gICAgICAgICdmaWVsZHM9c3RvcmVzKG5hbWUsZGlzcGxheU5hbWUsb3BlbmluZ0hvdXJzKHdlZWtEYXlPcGVuaW5nTGlzdChGVUxMKSxzcGVjaWFsRGF5T3BlbmluZ0xpc3QoRlVMTCkpLCcgK1xuICAgICAgICAnZ2VvUG9pbnQobGF0aXR1ZGUsbG9uZ2l0dWRlKSxhZGRyZXNzKGxpbmUxLGxpbmUyLHRvd24scmVnaW9uKEZVTEwpLHBvc3RhbENvZGUscGhvbmUsY291bnRyeSxlbWFpbCksIGZlYXR1cmVzKSwnICtcbiAgICAgICAgJ3BhZ2luYXRpb24oREVGQVVMVCksJyArXG4gICAgICAgICdzb3J0cyhERUZBVUxUKScsXG4gICAgfSk7XG5cbiAgICBpZiAobG9uZ2l0dWRlTGF0aXR1ZGUpIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ2xvbmdpdHVkZScsIFN0cmluZyhsb25naXR1ZGVMYXRpdHVkZS5sb25naXR1ZGUpKTtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ2xhdGl0dWRlJywgU3RyaW5nKGxvbmdpdHVkZUxhdGl0dWRlLmxhdGl0dWRlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ3F1ZXJ5JywgcXVlcnkpO1xuICAgIH1cbiAgICBpZiAoc2VhcmNoQ29uZmlnLnBhZ2VTaXplKSB7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCdwYWdlU2l6ZScsIFN0cmluZyhzZWFyY2hDb25maWcucGFnZVNpemUpKTtcbiAgICB9XG4gICAgaWYgKHNlYXJjaENvbmZpZy5jdXJyZW50UGFnZSkge1xuICAgICAgcGFyYW1zID0gcGFyYW1zLnNldCgnY3VycmVudFBhZ2UnLCBTdHJpbmcoc2VhcmNoQ29uZmlnLmN1cnJlbnRQYWdlKSk7XG4gICAgfVxuICAgIGlmIChzZWFyY2hDb25maWcuc29ydCkge1xuICAgICAgcGFyYW1zID0gcGFyYW1zLnNldCgnc29ydCcsIHNlYXJjaENvbmZpZy5zb3J0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxTdG9yZUZpbmRlclNlYXJjaFBhZ2U+KHVybCwgeyBwYXJhbXMgfSkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGVycm9yLmpzb24pIHtcbiAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRTdG9yZXNFbmRwb2ludCh1cmw/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGJhc2VVcmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRFbmRwb2ludChTVE9SRVNfRU5EUE9JTlQpO1xuXG4gICAgcmV0dXJuIHVybCA/IGJhc2VVcmwgKyAnLycgKyB1cmwgOiBiYXNlVXJsO1xuICB9XG59XG4iXX0=