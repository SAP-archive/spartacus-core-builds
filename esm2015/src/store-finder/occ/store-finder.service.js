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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RvcmUtZmluZGVyL29jYy9zdG9yZS1maW5kZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSTVDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOztNQUV6RSxlQUFlLEdBQUcsUUFBUTtBQUdoQyxNQUFNLE9BQU8scUJBQXFCOzs7OztJQUNoQyxZQUNVLElBQWdCLEVBQ2hCLFlBQWlDO1FBRGpDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO0lBQ3hDLENBQUM7Ozs7Ozs7SUFFSixVQUFVLENBQ1IsS0FBYSxFQUNiLFlBQXFDLEVBQ3JDLGlCQUFxQztRQUVyQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDeEUsQ0FBQzs7OztJQUVELFdBQVc7O2NBQ0gsYUFBYSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUM7UUFFNUQsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBQyxhQUFhLENBQUM7YUFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxPQUFlOztjQUNyQixlQUFlLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQzs7Y0FDakQsTUFBTSxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRTtRQUVqQyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFDLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDO2FBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7Ozs7Ozs7SUFFUyxpQkFBaUIsQ0FDekIsS0FBYSxFQUNiLFlBQXFDLEVBQ3JDLGlCQUFxQzs7Y0FFL0IsR0FBRyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRTs7WUFDaEMsTUFBTSxHQUFlLElBQUksVUFBVSxDQUFDO1lBQ3RDLFVBQVUsRUFDUixvR0FBb0c7Z0JBQ3BHLGdIQUFnSDtnQkFDaEgsc0JBQXNCO2dCQUN0QixnQkFBZ0I7U0FDbkIsQ0FBQztRQUVGLElBQUksaUJBQWlCLEVBQUU7WUFDckIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3RFLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUNyRTthQUFNO1lBQ0wsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxZQUFZLENBQUMsUUFBUSxFQUFFO1lBQ3pCLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDaEU7UUFDRCxJQUFJLFlBQVksQ0FBQyxXQUFXLEVBQUU7WUFDNUIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztTQUN0RTtRQUNELElBQUksWUFBWSxDQUFDLElBQUksRUFBRTtZQUNyQixNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBd0IsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQy9ELFVBQVUsQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQ3hCLElBQUksS0FBSyxDQUFDLElBQUksRUFBRTtnQkFDZCxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUNqQztZQUNELE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFUyxpQkFBaUIsQ0FBQyxHQUFZOztjQUNoQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDO1FBRTlELE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQzdDLENBQUM7OztZQTVFRixVQUFVOzs7O1lBVkYsVUFBVTtZQU1WLG1CQUFtQjs7Ozs7OztJQU94QixxQ0FBd0I7Ozs7O0lBQ3hCLDZDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyB0aHJvd0Vycm9yLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTdG9yZUZpbmRlclNlYXJjaENvbmZpZywgTG9uZ2l0dWRlTGF0aXR1ZGUgfSBmcm9tICcuLy4uL21vZGVsL2luZGV4JztcbmltcG9ydCB7IFN0b3JlRmluZGVyU2VhcmNoUGFnZSB9IGZyb20gJy4uLy4uL29jYy9vY2MtbW9kZWxzJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vY2Mvc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcblxuY29uc3QgU1RPUkVTX0VORFBPSU5UID0gJ3N0b3Jlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NTdG9yZUZpbmRlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2VcbiAgKSB7fVxuXG4gIGZpbmRTdG9yZXMoXG4gICAgcXVlcnk6IHN0cmluZyxcbiAgICBzZWFyY2hDb25maWc6IFN0b3JlRmluZGVyU2VhcmNoQ29uZmlnLFxuICAgIGxvbmdpdHVkZUxhdGl0dWRlPzogTG9uZ2l0dWRlTGF0aXR1ZGVcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5jYWxsT2NjRmluZFN0b3JlcyhxdWVyeSwgc2VhcmNoQ29uZmlnLCBsb25naXR1ZGVMYXRpdHVkZSk7XG4gIH1cblxuICBzdG9yZXNDb3VudCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHN0b3JlQ291bnRVcmwgPSB0aGlzLmdldFN0b3Jlc0VuZHBvaW50KCdzdG9yZXNjb3VudHMnKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQoc3RvcmVDb3VudFVybClcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IuanNvbigpKSkpO1xuICB9XG5cbiAgZmluZFN0b3JlQnlJZChzdG9yZUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHN0b3JlRGV0YWlsc1VybCA9IHRoaXMuZ2V0U3RvcmVzRW5kcG9pbnQoc3RvcmVJZCk7XG4gICAgY29uc3QgcGFyYW1zID0geyBmaWVsZHM6ICdGVUxMJyB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldChzdG9yZURldGFpbHNVcmwsIHsgcGFyYW1zIH0pXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjYWxsT2NjRmluZFN0b3JlcyhcbiAgICBxdWVyeTogc3RyaW5nLFxuICAgIHNlYXJjaENvbmZpZzogU3RvcmVGaW5kZXJTZWFyY2hDb25maWcsXG4gICAgbG9uZ2l0dWRlTGF0aXR1ZGU/OiBMb25naXR1ZGVMYXRpdHVkZVxuICApOiBPYnNlcnZhYmxlPFN0b3JlRmluZGVyU2VhcmNoUGFnZT4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0U3RvcmVzRW5kcG9pbnQoKTtcbiAgICBsZXQgcGFyYW1zOiBIdHRwUGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgZnJvbVN0cmluZzpcbiAgICAgICAgJ2ZpZWxkcz1zdG9yZXMobmFtZSxkaXNwbGF5TmFtZSxvcGVuaW5nSG91cnMod2Vla0RheU9wZW5pbmdMaXN0KEZVTEwpLHNwZWNpYWxEYXlPcGVuaW5nTGlzdChGVUxMKSksJyArXG4gICAgICAgICdnZW9Qb2ludChsYXRpdHVkZSxsb25naXR1ZGUpLGFkZHJlc3MobGluZTEsbGluZTIsdG93bixyZWdpb24oRlVMTCkscG9zdGFsQ29kZSxwaG9uZSxjb3VudHJ5LGVtYWlsKSwgZmVhdHVyZXMpLCcgK1xuICAgICAgICAncGFnaW5hdGlvbihERUZBVUxUKSwnICtcbiAgICAgICAgJ3NvcnRzKERFRkFVTFQpJyxcbiAgICB9KTtcblxuICAgIGlmIChsb25naXR1ZGVMYXRpdHVkZSkge1xuICAgICAgcGFyYW1zID0gcGFyYW1zLnNldCgnbG9uZ2l0dWRlJywgU3RyaW5nKGxvbmdpdHVkZUxhdGl0dWRlLmxvbmdpdHVkZSkpO1xuICAgICAgcGFyYW1zID0gcGFyYW1zLnNldCgnbGF0aXR1ZGUnLCBTdHJpbmcobG9uZ2l0dWRlTGF0aXR1ZGUubGF0aXR1ZGUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyYW1zID0gcGFyYW1zLnNldCgncXVlcnknLCBxdWVyeSk7XG4gICAgfVxuICAgIGlmIChzZWFyY2hDb25maWcucGFnZVNpemUpIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ3BhZ2VTaXplJywgU3RyaW5nKHNlYXJjaENvbmZpZy5wYWdlU2l6ZSkpO1xuICAgIH1cbiAgICBpZiAoc2VhcmNoQ29uZmlnLmN1cnJlbnRQYWdlKSB7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCdjdXJyZW50UGFnZScsIFN0cmluZyhzZWFyY2hDb25maWcuY3VycmVudFBhZ2UpKTtcbiAgICB9XG4gICAgaWYgKHNlYXJjaENvbmZpZy5zb3J0KSB7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCdzb3J0Jywgc2VhcmNoQ29uZmlnLnNvcnQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFN0b3JlRmluZGVyU2VhcmNoUGFnZT4odXJsLCB7IHBhcmFtcyB9KS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZXJyb3IuanNvbikge1xuICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFN0b3Jlc0VuZHBvaW50KHVybD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgYmFzZVVybCA9IHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KFNUT1JFU19FTkRQT0lOVCk7XG5cbiAgICByZXR1cm4gdXJsID8gYmFzZVVybCArICcvJyArIHVybCA6IGJhc2VVcmw7XG4gIH1cbn1cbiJdfQ==