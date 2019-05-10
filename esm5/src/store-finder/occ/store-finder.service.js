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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RvcmUtZmluZGVyL29jYy9zdG9yZS1maW5kZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzVDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOztJQUd6RSxlQUFlLEdBQUcsUUFBUTtBQUVoQztJQUVFLCtCQUNVLElBQWdCLEVBQ2hCLFlBQWlDO1FBRGpDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO0lBQ3hDLENBQUM7Ozs7Ozs7SUFFSiwwQ0FBVTs7Ozs7O0lBQVYsVUFDRSxLQUFhLEVBQ2IsWUFBcUMsRUFDckMsaUJBQXFDO1FBRXJDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7O0lBRUQsMkNBQVc7OztJQUFYOztZQUNRLGFBQWEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDO1FBRTVELE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQUMsYUFBYSxDQUFDO2FBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBQyxLQUFVLElBQUssT0FBQSxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQXhCLENBQXdCLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Ozs7O0lBRUQsNkNBQWE7Ozs7SUFBYixVQUFjLE9BQWU7O1lBQ3JCLGVBQWUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDOztZQUNqRCxNQUFNLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFO1FBRWpDLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQUMsZUFBZSxFQUFFLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQzthQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7Ozs7OztJQUVTLGlEQUFpQjs7Ozs7OztJQUEzQixVQUNFLEtBQWEsRUFDYixZQUFxQyxFQUNyQyxpQkFBcUM7O1lBRS9CLEdBQUcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7O1lBQ2hDLE1BQU0sR0FBZSxJQUFJLFVBQVUsQ0FBQztZQUN0QyxVQUFVLEVBQ1Isb0dBQW9HO2dCQUNwRyxnSEFBZ0g7Z0JBQ2hILHNCQUFzQjtnQkFDdEIsZ0JBQWdCO1NBQ25CLENBQUM7UUFFRixJQUFJLGlCQUFpQixFQUFFO1lBQ3JCLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN0RSxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDckU7YUFBTTtZQUNMLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNyQztRQUNELElBQUksWUFBWSxDQUFDLFFBQVEsRUFBRTtZQUN6QixNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQ2hFO1FBQ0QsSUFBSSxZQUFZLENBQUMsV0FBVyxFQUFFO1lBQzVCLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7U0FDdEU7UUFDRCxJQUFJLFlBQVksQ0FBQyxJQUFJLEVBQUU7WUFDckIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoRDtRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQXdCLEdBQUcsRUFBRSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQy9ELFVBQVUsQ0FBQyxVQUFDLEtBQVU7WUFDcEIsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFO2dCQUNkLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2FBQ2pDO1lBQ0QsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVTLGlEQUFpQjs7Ozs7SUFBM0IsVUFBNEIsR0FBWTs7WUFDaEMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQztRQUU5RCxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUM3QyxDQUFDOztnQkE1RUYsVUFBVTs7OztnQkFWRixVQUFVO2dCQUtWLG1CQUFtQjs7SUFrRjVCLDRCQUFDO0NBQUEsQUE3RUQsSUE2RUM7U0E1RVkscUJBQXFCOzs7Ozs7SUFFOUIscUNBQXdCOzs7OztJQUN4Qiw2Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgdGhyb3dFcnJvciwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgU3RvcmVGaW5kZXJTZWFyY2hDb25maWcsIExvbmdpdHVkZUxhdGl0dWRlIH0gZnJvbSAnLi8uLi9tb2RlbC9pbmRleCc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb2NjL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlclNlYXJjaFBhZ2UgfSBmcm9tICcuLi8uLi9tb2RlbC9zdG9yZS1maW5kZXIubW9kZWwnO1xuXG5jb25zdCBTVE9SRVNfRU5EUE9JTlQgPSAnc3RvcmVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY1N0b3JlRmluZGVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZVxuICApIHt9XG5cbiAgZmluZFN0b3JlcyhcbiAgICBxdWVyeTogc3RyaW5nLFxuICAgIHNlYXJjaENvbmZpZzogU3RvcmVGaW5kZXJTZWFyY2hDb25maWcsXG4gICAgbG9uZ2l0dWRlTGF0aXR1ZGU/OiBMb25naXR1ZGVMYXRpdHVkZVxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmNhbGxPY2NGaW5kU3RvcmVzKHF1ZXJ5LCBzZWFyY2hDb25maWcsIGxvbmdpdHVkZUxhdGl0dWRlKTtcbiAgfVxuXG4gIHN0b3Jlc0NvdW50KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3Qgc3RvcmVDb3VudFVybCA9IHRoaXMuZ2V0U3RvcmVzRW5kcG9pbnQoJ3N0b3Jlc2NvdW50cycpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldChzdG9yZUNvdW50VXJsKVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpKSk7XG4gIH1cblxuICBmaW5kU3RvcmVCeUlkKHN0b3JlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3Qgc3RvcmVEZXRhaWxzVXJsID0gdGhpcy5nZXRTdG9yZXNFbmRwb2ludChzdG9yZUlkKTtcbiAgICBjb25zdCBwYXJhbXMgPSB7IGZpZWxkczogJ0ZVTEwnIH07XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KHN0b3JlRGV0YWlsc1VybCwgeyBwYXJhbXMgfSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IuanNvbigpKSkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNhbGxPY2NGaW5kU3RvcmVzKFxuICAgIHF1ZXJ5OiBzdHJpbmcsXG4gICAgc2VhcmNoQ29uZmlnOiBTdG9yZUZpbmRlclNlYXJjaENvbmZpZyxcbiAgICBsb25naXR1ZGVMYXRpdHVkZT86IExvbmdpdHVkZUxhdGl0dWRlXG4gICk6IE9ic2VydmFibGU8U3RvcmVGaW5kZXJTZWFyY2hQYWdlPiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRTdG9yZXNFbmRwb2ludCgpO1xuICAgIGxldCBwYXJhbXM6IEh0dHBQYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyh7XG4gICAgICBmcm9tU3RyaW5nOlxuICAgICAgICAnZmllbGRzPXN0b3JlcyhuYW1lLGRpc3BsYXlOYW1lLG9wZW5pbmdIb3Vycyh3ZWVrRGF5T3BlbmluZ0xpc3QoRlVMTCksc3BlY2lhbERheU9wZW5pbmdMaXN0KEZVTEwpKSwnICtcbiAgICAgICAgJ2dlb1BvaW50KGxhdGl0dWRlLGxvbmdpdHVkZSksYWRkcmVzcyhsaW5lMSxsaW5lMix0b3duLHJlZ2lvbihGVUxMKSxwb3N0YWxDb2RlLHBob25lLGNvdW50cnksZW1haWwpLCBmZWF0dXJlcyksJyArXG4gICAgICAgICdwYWdpbmF0aW9uKERFRkFVTFQpLCcgK1xuICAgICAgICAnc29ydHMoREVGQVVMVCknLFxuICAgIH0pO1xuXG4gICAgaWYgKGxvbmdpdHVkZUxhdGl0dWRlKSB7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCdsb25naXR1ZGUnLCBTdHJpbmcobG9uZ2l0dWRlTGF0aXR1ZGUubG9uZ2l0dWRlKSk7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCdsYXRpdHVkZScsIFN0cmluZyhsb25naXR1ZGVMYXRpdHVkZS5sYXRpdHVkZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCdxdWVyeScsIHF1ZXJ5KTtcbiAgICB9XG4gICAgaWYgKHNlYXJjaENvbmZpZy5wYWdlU2l6ZSkge1xuICAgICAgcGFyYW1zID0gcGFyYW1zLnNldCgncGFnZVNpemUnLCBTdHJpbmcoc2VhcmNoQ29uZmlnLnBhZ2VTaXplKSk7XG4gICAgfVxuICAgIGlmIChzZWFyY2hDb25maWcuY3VycmVudFBhZ2UpIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ2N1cnJlbnRQYWdlJywgU3RyaW5nKHNlYXJjaENvbmZpZy5jdXJyZW50UGFnZSkpO1xuICAgIH1cbiAgICBpZiAoc2VhcmNoQ29uZmlnLnNvcnQpIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ3NvcnQnLCBzZWFyY2hDb25maWcuc29ydCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8U3RvcmVGaW5kZXJTZWFyY2hQYWdlPih1cmwsIHsgcGFyYW1zIH0pLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgIGlmIChlcnJvci5qc29uKSB7XG4gICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IuanNvbigpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvcik7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0U3RvcmVzRW5kcG9pbnQodXJsPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBiYXNlVXJsID0gdGhpcy5vY2NFbmRwb2ludHMuZ2V0RW5kcG9pbnQoU1RPUkVTX0VORFBPSU5UKTtcblxuICAgIHJldHVybiB1cmwgPyBiYXNlVXJsICsgJy8nICsgdXJsIDogYmFzZVVybDtcbiAgfVxufVxuIl19