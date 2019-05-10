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
const STORES_ENDPOINT = 'stores';
export class OccStoreFinderService {
    /**
     * @param {?} http
     * @param {?} occEndpoints
     */
    constructor(http, occEndpoints) {
        this.http = http;
        this.occEndpoints = occEndpoints;
    }
    /**
     * @param {?} query
     * @param {?} searchConfig
     * @param {?=} longitudeLatitude
     * @return {?}
     */
    findStores(query, searchConfig, longitudeLatitude) {
        return this.callOccFindStores(query, searchConfig, longitudeLatitude);
    }
    /**
     * @return {?}
     */
    storesCount() {
        /** @type {?} */
        const storeCountUrl = this.getStoresEndpoint('storescounts');
        return this.http
            .get(storeCountUrl)
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @param {?} storeId
     * @return {?}
     */
    findStoreById(storeId) {
        /** @type {?} */
        const storeDetailsUrl = this.getStoresEndpoint(storeId);
        /** @type {?} */
        const params = { fields: 'FULL' };
        return this.http
            .get(storeDetailsUrl, { params })
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @protected
     * @param {?} query
     * @param {?} searchConfig
     * @param {?=} longitudeLatitude
     * @return {?}
     */
    callOccFindStores(query, searchConfig, longitudeLatitude) {
        /** @type {?} */
        const url = this.getStoresEndpoint();
        /** @type {?} */
        let params = new HttpParams({
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
        return this.http.get(url, { params }).pipe(catchError((error) => {
            if (error.json) {
                return throwError(error.json());
            }
            return throwError(error);
        }));
    }
    /**
     * @protected
     * @param {?=} url
     * @return {?}
     */
    getStoresEndpoint(url) {
        /** @type {?} */
        const baseUrl = this.occEndpoints.getEndpoint(STORES_ENDPOINT);
        return url ? baseUrl + '/' + url : baseUrl;
    }
}
OccStoreFinderService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccStoreFinderService.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RvcmUtZmluZGVyL29jYy9zdG9yZS1maW5kZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzVDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOztNQUd6RSxlQUFlLEdBQUcsUUFBUTtBQUdoQyxNQUFNLE9BQU8scUJBQXFCOzs7OztJQUNoQyxZQUNVLElBQWdCLEVBQ2hCLFlBQWlDO1FBRGpDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO0lBQ3hDLENBQUM7Ozs7Ozs7SUFFSixVQUFVLENBQ1IsS0FBYSxFQUNiLFlBQXFDLEVBQ3JDLGlCQUFxQztRQUVyQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDeEUsQ0FBQzs7OztJQUVELFdBQVc7O2NBQ0gsYUFBYSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUM7UUFFNUQsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBQyxhQUFhLENBQUM7YUFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxPQUFlOztjQUNyQixlQUFlLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQzs7Y0FDakQsTUFBTSxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRTtRQUVqQyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFDLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDO2FBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7Ozs7Ozs7SUFFUyxpQkFBaUIsQ0FDekIsS0FBYSxFQUNiLFlBQXFDLEVBQ3JDLGlCQUFxQzs7Y0FFL0IsR0FBRyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRTs7WUFDaEMsTUFBTSxHQUFlLElBQUksVUFBVSxDQUFDO1lBQ3RDLFVBQVUsRUFDUixvR0FBb0c7Z0JBQ3BHLGdIQUFnSDtnQkFDaEgsc0JBQXNCO2dCQUN0QixnQkFBZ0I7U0FDbkIsQ0FBQztRQUVGLElBQUksaUJBQWlCLEVBQUU7WUFDckIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3RFLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUNyRTthQUFNO1lBQ0wsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxZQUFZLENBQUMsUUFBUSxFQUFFO1lBQ3pCLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDaEU7UUFDRCxJQUFJLFlBQVksQ0FBQyxXQUFXLEVBQUU7WUFDNUIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztTQUN0RTtRQUNELElBQUksWUFBWSxDQUFDLElBQUksRUFBRTtZQUNyQixNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBd0IsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQy9ELFVBQVUsQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQ3hCLElBQUksS0FBSyxDQUFDLElBQUksRUFBRTtnQkFDZCxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUNqQztZQUNELE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFUyxpQkFBaUIsQ0FBQyxHQUFZOztjQUNoQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDO1FBRTlELE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQzdDLENBQUM7OztZQTVFRixVQUFVOzs7O1lBVkYsVUFBVTtZQUtWLG1CQUFtQjs7Ozs7OztJQVF4QixxQ0FBd0I7Ozs7O0lBQ3hCLDZDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyB0aHJvd0Vycm9yLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTdG9yZUZpbmRlclNlYXJjaENvbmZpZywgTG9uZ2l0dWRlTGF0aXR1ZGUgfSBmcm9tICcuLy4uL21vZGVsL2luZGV4JztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vY2Mvc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IFN0b3JlRmluZGVyU2VhcmNoUGFnZSB9IGZyb20gJy4uLy4uL21vZGVsL3N0b3JlLWZpbmRlci5tb2RlbCc7XG5cbmNvbnN0IFNUT1JFU19FTkRQT0lOVCA9ICdzdG9yZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjU3RvcmVGaW5kZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlXG4gICkge31cblxuICBmaW5kU3RvcmVzKFxuICAgIHF1ZXJ5OiBzdHJpbmcsXG4gICAgc2VhcmNoQ29uZmlnOiBTdG9yZUZpbmRlclNlYXJjaENvbmZpZyxcbiAgICBsb25naXR1ZGVMYXRpdHVkZT86IExvbmdpdHVkZUxhdGl0dWRlXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuY2FsbE9jY0ZpbmRTdG9yZXMocXVlcnksIHNlYXJjaENvbmZpZywgbG9uZ2l0dWRlTGF0aXR1ZGUpO1xuICB9XG5cbiAgc3RvcmVzQ291bnQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBzdG9yZUNvdW50VXJsID0gdGhpcy5nZXRTdG9yZXNFbmRwb2ludCgnc3RvcmVzY291bnRzJyk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KHN0b3JlQ291bnRVcmwpXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpKTtcbiAgfVxuXG4gIGZpbmRTdG9yZUJ5SWQoc3RvcmVJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBzdG9yZURldGFpbHNVcmwgPSB0aGlzLmdldFN0b3Jlc0VuZHBvaW50KHN0b3JlSWQpO1xuICAgIGNvbnN0IHBhcmFtcyA9IHsgZmllbGRzOiAnRlVMTCcgfTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQoc3RvcmVEZXRhaWxzVXJsLCB7IHBhcmFtcyB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY2FsbE9jY0ZpbmRTdG9yZXMoXG4gICAgcXVlcnk6IHN0cmluZyxcbiAgICBzZWFyY2hDb25maWc6IFN0b3JlRmluZGVyU2VhcmNoQ29uZmlnLFxuICAgIGxvbmdpdHVkZUxhdGl0dWRlPzogTG9uZ2l0dWRlTGF0aXR1ZGVcbiAgKTogT2JzZXJ2YWJsZTxTdG9yZUZpbmRlclNlYXJjaFBhZ2U+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFN0b3Jlc0VuZHBvaW50KCk7XG4gICAgbGV0IHBhcmFtczogSHR0cFBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHtcbiAgICAgIGZyb21TdHJpbmc6XG4gICAgICAgICdmaWVsZHM9c3RvcmVzKG5hbWUsZGlzcGxheU5hbWUsb3BlbmluZ0hvdXJzKHdlZWtEYXlPcGVuaW5nTGlzdChGVUxMKSxzcGVjaWFsRGF5T3BlbmluZ0xpc3QoRlVMTCkpLCcgK1xuICAgICAgICAnZ2VvUG9pbnQobGF0aXR1ZGUsbG9uZ2l0dWRlKSxhZGRyZXNzKGxpbmUxLGxpbmUyLHRvd24scmVnaW9uKEZVTEwpLHBvc3RhbENvZGUscGhvbmUsY291bnRyeSxlbWFpbCksIGZlYXR1cmVzKSwnICtcbiAgICAgICAgJ3BhZ2luYXRpb24oREVGQVVMVCksJyArXG4gICAgICAgICdzb3J0cyhERUZBVUxUKScsXG4gICAgfSk7XG5cbiAgICBpZiAobG9uZ2l0dWRlTGF0aXR1ZGUpIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ2xvbmdpdHVkZScsIFN0cmluZyhsb25naXR1ZGVMYXRpdHVkZS5sb25naXR1ZGUpKTtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ2xhdGl0dWRlJywgU3RyaW5nKGxvbmdpdHVkZUxhdGl0dWRlLmxhdGl0dWRlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ3F1ZXJ5JywgcXVlcnkpO1xuICAgIH1cbiAgICBpZiAoc2VhcmNoQ29uZmlnLnBhZ2VTaXplKSB7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCdwYWdlU2l6ZScsIFN0cmluZyhzZWFyY2hDb25maWcucGFnZVNpemUpKTtcbiAgICB9XG4gICAgaWYgKHNlYXJjaENvbmZpZy5jdXJyZW50UGFnZSkge1xuICAgICAgcGFyYW1zID0gcGFyYW1zLnNldCgnY3VycmVudFBhZ2UnLCBTdHJpbmcoc2VhcmNoQ29uZmlnLmN1cnJlbnRQYWdlKSk7XG4gICAgfVxuICAgIGlmIChzZWFyY2hDb25maWcuc29ydCkge1xuICAgICAgcGFyYW1zID0gcGFyYW1zLnNldCgnc29ydCcsIHNlYXJjaENvbmZpZy5zb3J0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxTdG9yZUZpbmRlclNlYXJjaFBhZ2U+KHVybCwgeyBwYXJhbXMgfSkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGVycm9yLmpzb24pIHtcbiAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRTdG9yZXNFbmRwb2ludCh1cmw/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGJhc2VVcmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRFbmRwb2ludChTVE9SRVNfRU5EUE9JTlQpO1xuXG4gICAgcmV0dXJuIHVybCA/IGJhc2VVcmwgKyAnLycgKyB1cmwgOiBiYXNlVXJsO1xuICB9XG59XG4iXX0=