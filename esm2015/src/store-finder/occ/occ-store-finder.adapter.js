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
const STORES_ENDPOINT = 'stores';
export class OccStoreFinderAdapter {
    /**
     * @param {?} http
     * @param {?} occEndpoints
     * @param {?} converter
     */
    constructor(http, occEndpoints, converter) {
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
    search(query, searchConfig, longitudeLatitude) {
        return this.callOccFindStores(query, searchConfig, longitudeLatitude).pipe(catchError((error) => throwError(error.json())), this.converter.pipeable(STORE_FINDER_SEARCH_PAGE_NORMALIZER));
    }
    /**
     * @return {?}
     */
    loadCounts() {
        /** @type {?} */
        const storeCountUrl = this.getStoresEndpoint('storescounts');
        return this.http.get(storeCountUrl).pipe(map(({ countriesAndRegionsStoreCount }) => countriesAndRegionsStoreCount), catchError((error) => throwError(error.json())), this.converter.pipeableMany(STORE_COUNT_NORMALIZER));
    }
    /**
     * @param {?} storeId
     * @return {?}
     */
    load(storeId) {
        /** @type {?} */
        const storeDetailsUrl = this.getStoresEndpoint(storeId);
        /** @type {?} */
        const params = { fields: 'FULL' };
        return this.http.get(storeDetailsUrl, { params }).pipe(catchError((error) => throwError(error.json())), this.converter.pipeable(POINT_OF_SERVICE_NORMALIZER));
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
OccStoreFinderAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccStoreFinderAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXN0b3JlLWZpbmRlci5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0b3JlLWZpbmRlci9vY2Mvb2NjLXN0b3JlLWZpbmRlci5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR2pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBSS9FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRWhFLE9BQU8sRUFDTCxtQ0FBbUMsRUFDbkMsc0JBQXNCLEVBQ3RCLDJCQUEyQixHQUM1QixNQUFNLGVBQWUsQ0FBQzs7TUFNakIsZUFBZSxHQUFHLFFBQVE7QUFHaEMsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7O0lBQ2hDLFlBQ1UsSUFBZ0IsRUFDaEIsWUFBaUMsRUFDakMsU0FBMkI7UUFGM0IsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFDbEMsQ0FBQzs7Ozs7OztJQUVKLE1BQU0sQ0FDSixLQUFhLEVBQ2IsWUFBcUMsRUFDckMsaUJBQTRCO1FBRTVCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQ3hFLFVBQVUsQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVB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Q0QsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVTLGlCQUFpQixDQUFDLEdBQVk7O2NBQ2hDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUM7UUFFOUQsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7SUFDN0MsQ0FBQzs7O1lBbkZGLFVBQVU7Ozs7WUF2QkYsVUFBVTtZQUtWLG1CQUFtQjtZQUluQixnQkFBZ0I7Ozs7Ozs7SUFpQnJCLHFDQUF3Qjs7Ozs7SUFDeEIsNkNBQXlDOzs7OztJQUN6QywwQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgdGhyb3dFcnJvciwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTdG9yZUZpbmRlclNlYXJjaENvbmZpZyB9IGZyb20gJy4uL21vZGVsL2luZGV4JztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vY2Mvc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IFBvaW50T2ZTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kZWwvcG9pbnQtb2Ytc2VydmljZS5tb2RlbCc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlckFkYXB0ZXIgfSBmcm9tICcuLi9jb25uZWN0b3JzL3N0b3JlLWZpbmRlci5hZGFwdGVyJztcbmltcG9ydCB7IEdlb1BvaW50IH0gZnJvbSAnLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi9vY2Mvb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7XG4gIFNUT1JFX0ZJTkRFUl9TRUFSQ0hfUEFHRV9OT1JNQUxJWkVSLFxuICBTVE9SRV9DT1VOVF9OT1JNQUxJWkVSLFxuICBQT0lOVF9PRl9TRVJWSUNFX05PUk1BTElaRVIsXG59IGZyb20gJy4uL2Nvbm5lY3RvcnMnO1xuaW1wb3J0IHtcbiAgU3RvcmVGaW5kZXJTZWFyY2hQYWdlLFxuICBTdG9yZUNvdW50LFxufSBmcm9tICcuLi8uLi9tb2RlbC9zdG9yZS1maW5kZXIubW9kZWwnO1xuXG5jb25zdCBTVE9SRVNfRU5EUE9JTlQgPSAnc3RvcmVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY1N0b3JlRmluZGVyQWRhcHRlciBpbXBsZW1lbnRzIFN0b3JlRmluZGVyQWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcml2YXRlIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZVxuICApIHt9XG5cbiAgc2VhcmNoKFxuICAgIHF1ZXJ5OiBzdHJpbmcsXG4gICAgc2VhcmNoQ29uZmlnOiBTdG9yZUZpbmRlclNlYXJjaENvbmZpZyxcbiAgICBsb25naXR1ZGVMYXRpdHVkZT86IEdlb1BvaW50XG4gICk6IE9ic2VydmFibGU8U3RvcmVGaW5kZXJTZWFyY2hQYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMuY2FsbE9jY0ZpbmRTdG9yZXMocXVlcnksIHNlYXJjaENvbmZpZywgbG9uZ2l0dWRlTGF0aXR1ZGUpLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpLFxuICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoU1RPUkVfRklOREVSX1NFQVJDSF9QQUdFX05PUk1BTElaRVIpXG4gICAgKTtcbiAgfVxuXG4gIGxvYWRDb3VudHMoKTogT2JzZXJ2YWJsZTxTdG9yZUNvdW50W10+IHtcbiAgICBjb25zdCBzdG9yZUNvdW50VXJsID0gdGhpcy5nZXRTdG9yZXNFbmRwb2ludCgnc3RvcmVzY291bnRzJyk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPY2MuU3RvcmVDb3VudExpc3Q+KHN0b3JlQ291bnRVcmwpLnBpcGUoXG4gICAgICBtYXAoKHsgY291bnRyaWVzQW5kUmVnaW9uc1N0b3JlQ291bnQgfSkgPT4gY291bnRyaWVzQW5kUmVnaW9uc1N0b3JlQ291bnQpLFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpKSxcbiAgICAgIHRoaXMuY29udmVydGVyLnBpcGVhYmxlTWFueShTVE9SRV9DT1VOVF9OT1JNQUxJWkVSKVxuICAgICk7XG4gIH1cblxuICBsb2FkKHN0b3JlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8UG9pbnRPZlNlcnZpY2U+IHtcbiAgICBjb25zdCBzdG9yZURldGFpbHNVcmwgPSB0aGlzLmdldFN0b3Jlc0VuZHBvaW50KHN0b3JlSWQpO1xuICAgIGNvbnN0IHBhcmFtcyA9IHsgZmllbGRzOiAnRlVMTCcgfTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9jYy5Qb2ludE9mU2VydmljZT4oc3RvcmVEZXRhaWxzVXJsLCB7IHBhcmFtcyB9KS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpKSxcbiAgICAgIHRoaXMuY29udmVydGVyLnBpcGVhYmxlKFBPSU5UX09GX1NFUlZJQ0VfTk9STUFMSVpFUilcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNhbGxPY2NGaW5kU3RvcmVzKFxuICAgIHF1ZXJ5OiBzdHJpbmcsXG4gICAgc2VhcmNoQ29uZmlnOiBTdG9yZUZpbmRlclNlYXJjaENvbmZpZyxcbiAgICBsb25naXR1ZGVMYXRpdHVkZT86IEdlb1BvaW50XG4gICk6IE9ic2VydmFibGU8T2NjLlN0b3JlRmluZGVyU2VhcmNoUGFnZT4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0U3RvcmVzRW5kcG9pbnQoKTtcbiAgICBsZXQgcGFyYW1zOiBIdHRwUGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgZnJvbVN0cmluZzpcbiAgICAgICAgJ2ZpZWxkcz1zdG9yZXMobmFtZSxkaXNwbGF5TmFtZSxvcGVuaW5nSG91cnMod2Vla0RheU9wZW5pbmdMaXN0KEZVTEwpLHNwZWNpYWxEYXlPcGVuaW5nTGlzdChGVUxMKSksJyArXG4gICAgICAgICdnZW9Qb2ludChsYXRpdHVkZSxsb25naXR1ZGUpLGFkZHJlc3MobGluZTEsbGluZTIsdG93bixyZWdpb24oRlVMTCkscG9zdGFsQ29kZSxwaG9uZSxjb3VudHJ5LGVtYWlsKSwgZmVhdHVyZXMpLCcgK1xuICAgICAgICAncGFnaW5hdGlvbihERUZBVUxUKSwnICtcbiAgICAgICAgJ3NvcnRzKERFRkFVTFQpJyxcbiAgICB9KTtcblxuICAgIGlmIChsb25naXR1ZGVMYXRpdHVkZSkge1xuICAgICAgcGFyYW1zID0gcGFyYW1zLnNldCgnbG9uZ2l0dWRlJywgU3RyaW5nKGxvbmdpdHVkZUxhdGl0dWRlLmxvbmdpdHVkZSkpO1xuICAgICAgcGFyYW1zID0gcGFyYW1zLnNldCgnbGF0aXR1ZGUnLCBTdHJpbmcobG9uZ2l0dWRlTGF0aXR1ZGUubGF0aXR1ZGUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyYW1zID0gcGFyYW1zLnNldCgncXVlcnknLCBxdWVyeSk7XG4gICAgfVxuICAgIGlmIChzZWFyY2hDb25maWcucGFnZVNpemUpIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ3BhZ2VTaXplJywgU3RyaW5nKHNlYXJjaENvbmZpZy5wYWdlU2l6ZSkpO1xuICAgIH1cbiAgICBpZiAoc2VhcmNoQ29uZmlnLmN1cnJlbnRQYWdlKSB7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCdjdXJyZW50UGFnZScsIFN0cmluZyhzZWFyY2hDb25maWcuY3VycmVudFBhZ2UpKTtcbiAgICB9XG4gICAgaWYgKHNlYXJjaENvbmZpZy5zb3J0KSB7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCdzb3J0Jywgc2VhcmNoQ29uZmlnLnNvcnQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9jYy5TdG9yZUZpbmRlclNlYXJjaFBhZ2U+KHVybCwgeyBwYXJhbXMgfSkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGVycm9yLmpzb24pIHtcbiAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRTdG9yZXNFbmRwb2ludCh1cmw/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGJhc2VVcmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRFbmRwb2ludChTVE9SRVNfRU5EUE9JTlQpO1xuXG4gICAgcmV0dXJuIHVybCA/IGJhc2VVcmwgKyAnLycgKyB1cmwgOiBiYXNlVXJsO1xuICB9XG59XG4iXX0=